/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img_logo_svg from '../../img/logo.png'
import Header from '../../components/Header';


function Feed() {

  return (
<>
<div>
  <Header></Header>
  <div className="vh-100">
    <div className="container">
      <div className="row align-items-center vh-100">
        <div className="col-md-6">
          <h1 className="text-primary display-3 font-weight-light">Confirme seu <span className="font-weight-bold">email</span></h1>
          <p className="mb-0 lead">Oops! Parece que você não confirmou seu email.</p>
          <p className="lead mb-5">Se acha que é um problema conosco <a  href="/contact">informe-nos</a>.</p>
        </div>
        <div className="col-md-6">
          <img style={{width:'100%',height:'100%'}} src="https://www.baitzsolutions.com.br/Assets/images/icons/mail.png"/>
        </div>
      </div>
    </div>
  </div>
  {/* Bootstrap core JavaScript */}
  {/* slick Slider JS*/}
  {/* Custom scripts for all pages*/}
</div>

</>
  );
}

export default Feed;
