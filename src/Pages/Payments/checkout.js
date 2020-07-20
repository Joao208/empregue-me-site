import React, { useState } from 'react';
import Card from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useParams } from 'react-router';

function Checkout() {
    const [number,setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvv, setcvv] = useState('')
    const {price} = useParams()
    const [focused,setFocused] = useState('')

    return (
      <>
<div>
  <title>Empregue.me Checkout</title>
  <div className="containercheckout">
    <div className="left">
      <Card
      number={number}
      name={name}
      expiry={expiry}
      cvv={cvv}
      focused={focused}
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
      name="name"
      placeholder=" Seu nome aqui" 
      onFocus={setFocused('name')}
      className="inputcheckout"
      />
      <p>Número do Cartão</p>
      <input 
      type="number"
      name="number"
      placeholder=" 0000 0000 0000 0000" 
      value={number}
      onChange={event => setNumber(event.target.value)} 
      onFocus={setFocused('number')}  
      className="inputcheckout"
      />
      <div className="side-by-side">
        <div className="exp">
          <p>Data de validade</p>
          <input 
          type="text"
          name="expiry" 
          placeholder=" MM/YY" 
          pattern="[0-9]{2}/[0-9]{2}"
          onChange={event => setExpiry(event.target.value)}
          onFocus={setFocused('expiry')}  
          className="inputcheckout"        
          />
        </div>
        <div className="cvv">
          <p>cvv</p>
          <input 
          className="inputcheckout"
          type="password" 
          name="cvv"
          placeholder=" ***" 
          pattern="[0-9]{3}"
          onChange={event => setcvv(event.target.value)}
          onFocus={setFocused('cvv')}       
          />
        </div>
      </div>
      <button className="buttoncheckout">Pagar <b>R${price}</b></button>
    </div>
  </div>
      </>
  )
}

export default Checkout;