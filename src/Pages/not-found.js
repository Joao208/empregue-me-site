/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
  
function Feed() {

  return (
<>
<div>
  <div className="vh-100">
    <div className="container">
      <div className="row align-items-center vh-100">
        <div className="col-md-6">
          <h1 className="text-primary display-3 font-weight-light">Pagina não <span className="font-weight-bold">econtrada</span></h1>
          <p className="mb-0 lead">Oops! surgiu um link incorreto.</p>
          <p className="lead mb-5">Se acha que é um problema conosco <a  href="/contact">informe-nos</a>.</p>
          <a href="index" className="btn btn-primary btn-lg">Início</a>
        </div>
        <div className="col-md-6">
          <img style={{width:'100%',height:'100%'}} src="https://neilpatel.com/wp-content/uploads/2019/05/ilustracao-sobre-o-error-404-not-found.jpeg"/>
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
