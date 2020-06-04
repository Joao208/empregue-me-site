import React, { useState } from 'react';
import Card from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useParams } from 'react-router';
import '../style.css'

function Checkout() {
    const [number,setNumber] = useState('')
    const [name, setName] = useState('')
    const [expiry, setExpiry] = useState('')
    const [cvc, setcvc] = useState('')
    const {price} = useParams()
    const [focused,setFocused] = useState('')

    function changeFocus(event){
        setFocused(event.target.name)
    }
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
      cvc={cvc}
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
      placeholder=" Seu nome aqui" 
      onFocus={changeFocus}
      className="inputcheckout"
      />
      <p>Número do Cartão</p>
      <input 
      type="number" 
      placeholder=" 0000 0000 0000 0000" 
      value={number}
      onChange={event => setNumber(event.target.value)} 
      onFocus={changeFocus}  
      className="inputcheckout"
      />
      <div className="side-by-side">
        <div className="exp">
          <p>Data de validade</p>
          <input 
          type="text" 
          placeholder=" MM/YY" 
          value={expiry}
          pattern="[0-9]{2}/[0-9]{2}"
          onChange={event => setExpiry(event.target.value)}
          onFocus={changeFocus}  
          className="inputcheckout"        
          />
        </div>
        <div className="cvc">
          <p>cvc</p>
          <input 
          className="inputcheckout"
          type="password" 
          placeholder=" ***" 
          pattern="[0-9]{3}"
          onChange={event => setcvc(event.target.value)}
          onFocus={changeFocus}       
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