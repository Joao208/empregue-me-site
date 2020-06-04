import React, { useState } from 'react';
import Card from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import 'react-credit-cards/src/'
import '../style.css'
import { useParams } from 'react-router';

function Checkout() {
    const [number,setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvv, setCvv] = useState('')
    const {price} = useParams()

  return (
      <>
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Empregue.me Checkout</title>
  <div className="containerd">
    <div className="left">
      <Card
      number={number}
      name={name}
      expiry={expiry}
      cvv={cvv}
      />
      </div>
    </div>
    <div className="payment-details">
      <h2>Vamos ao pagamento</h2>
      <p>Nome no cartão</p>
      <input 
      value={name}
      onChange={event => setName(event.target.value)}      
      type="text" 
      placeholder=" Seu nome aqui" />
      <p>Número do Cartão</p>
      <input 
      type="number" 
      placeholder=" 0000 0000 0000 0000" 
      value={number}
      onChange={event => setNumber(event.target.value)}      
      />
      <div className="side-by-side">
        <div className="exp">
          <p>Data de validade</p>
          <input 
          type="date" 
          placeholder=" MM/YY" 
          value={expiry}
          onChange={event => setExpiry(event.target.value)}          
          />
        </div>
        <div className="cvv">
          <p>CVV</p>
          <input 
          type="password" 
          placeholder=" ***" 
          value={cvv}
          onChange={event => setCvv(event.target.value)}          
          />
        </div>
      </div>
      <button>Pagar <b>R${price}</b></button>
    </div>
  </div>
      </>
  )
}

export default Checkout;