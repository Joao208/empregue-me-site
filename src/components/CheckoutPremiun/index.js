import React from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import CardSection from '../Cardsection'
export default function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()
  async function handleSubmit(event) {
      event.preventDefault();
      if (!stripe || !elements) {
          return;
      }
      const cardElement = elements.getElement(CardElement);
      const latestInvoicePaymentIntentStatus = localStorage.getItem(
          'latestInvoicePaymentIntentStatus'
      )
      const {
          error,
          paymentMethod
      } = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
      })​
      if (error) {
          console.log('[createPaymentMethod error]', error);
      } else {
          console.log('[PaymentMethod]', paymentMethod);
          const paymentMethodId = paymentMethod.id;
          if (latestInvoicePaymentIntentStatus === 'requires_payment_method') {
              const invoiceId = localStorage.getItem('latestInvoiceId');
              retryInvoiceWithNewPaymentMethod({
                  customerId,
                  paymentMethodId,
                  invoiceId,
                  priceId,
              });
          } else {
              createSubscription({
                  customerId,
                  paymentMethodId,
                  priceId
              });
          }
      }
  }
  function createSubscription({
      customerId,
      paymentMethodId,
      priceId
  }) {
      return (
          fetch('/create-subscription', {
              method: 'post',
              headers: {
                  'Content-type': 'application/json',
              },
              body: JSON.stringify({
                  customerId: customerId,
                  paymentMethodId: paymentMethodId,
                  priceId: priceId,
              }),
          })
          .then((response) => {
              return response.json();
          })
          .then((result) => {
              if (result.error) {
                  throw result;
              }
              return result;
          })
          .then((result) => {
              return {
                  paymentMethodId: paymentMethodId,
                  priceId: priceId,
                  subscription: result,
              };
          })
          .then(handlePaymentThatRequiresCustomerAction)
          .then(handleRequiresPaymentMethod)
          .then(onSubscriptionComplete)
          .catch((error) => {
              showCardError(error);
          })
      )
  }​
  function onSubscriptionComplete(result) {
      if (result.subscription.status === 'active') {}
  }
  function handlePaymentThatRequiresCustomerAction({
      subscription,
      invoice,
      priceId,
      paymentMethodId,
      isRetry,
  }) {
      if (subscription && subscription.status === 'active') {
          return {
              subscription,
              priceId,
              paymentMethodId
          };
      }
      let paymentIntent = invoice ? invoice.payment_intent : subscription.latest_invoice.payment_intent
      if (
          paymentIntent.status === 'requires_action' ||
          (isRetry === true && paymentIntent.status === 'requires_payment_method')
      ) {
          return stripe
              .confirmCardPayment(paymentIntent.client_secret, {
                  payment_method: paymentMethodId,
              })
              .then((result) => {
                  if (result.error) {
                      throw result;
                  } else {
                      if (result.paymentIntent.status === 'succeeded') {
                          return {
                              priceId: priceId,
                              subscription: subscription,
                              invoice: invoice,
                              paymentMethodId: paymentMethodId,
                          };
                      }
                  }
              })
              .catch((error) => {
                  displayError(error);
              })
      } else {
          return {
              subscription,
              priceId,
              paymentMethodId
          };
      }
  }
  function handleRequiresPaymentMethod({
      subscription,
      paymentMethodId,
      priceId,
  }) {
      if (subscription.status === 'active') {
          return {
              subscription,
              priceId,
              paymentMethodId
          };
      } else if (
          subscription.latest_invoice.payment_intent.status ===
          'requires_payment_method'
      ) {
          localStorage.setItem('latestInvoiceId', subscription.latest_invoice.id);
          localStorage.setItem(
              'latestInvoicePaymentIntentStatus',
              subscription.latest_invoice.payment_intent.status
          );
          throw {
              error: {
                  message: 'Your card was declined.'
              }
          };
      } else {
          return {
              subscription,
              priceId,
              paymentMethodId
          };
      }
  }
  function retryInvoiceWithNewPaymentMethod({
      customerId,
      paymentMethodId,
      invoiceId,
      priceId
  }) {
      return (
          fetch('/retry-invoice', {
              method: 'post',
              headers: {
                  'Content-type': 'application/json',
              },
              body: JSON.stringify({
                  customerId: customerId,
                  paymentMethodId: paymentMethodId,
                  invoiceId: invoiceId,
              }),
          })
          .then((response) => {
              return response.json();
          })
          .then((result) => {
              if (result.error) {
                  throw result;
              }
              return result;
          })
          .then((result) => {
              return {
                  invoice: result,
                  paymentMethodId: paymentMethodId,
                  priceId: priceId,
                  isRetry: true,
              };
          })
          .then(handlePaymentThatRequiresCustomerAction)
          .then(onSubscriptionComplete)
          .catch((error) => {
              displayError(error);
          })
      );
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardSection />
      <button disabled={!stripe}>Confirm order</button>
    </form>
  );
}