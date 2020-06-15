/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import img_logo_svg from '../../img/logo.png'


function Feed() {

  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href="img/fav.png" />
  <title>Empregue.me | Not found</title>
  {/* Slick Slider */}
  <link rel="stylesheet" type="text/css" href="vendor/slick/slick.min.css" />
  <link rel="stylesheet" type="text/css" href="vendor/slick/slick-theme.min.css" />
  {/* Feather Icon*/}
  <link href="vendor/icons/feather.css" rel="stylesheet" type="text/css" />
  {/* Bootstrap core CSS */}
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  {/* Custom styles for this template */}
  <link href="css/style.css" rel="stylesheet" />
  {/* Navigation */}
  <nav className="navbar navbar-expand navbar-light bg-light osahan-nav-top p-0 fixed-top">
    <div className="container">
      <a className="navbar-brand mr-2" href="index"><img src={img_logo_svg} />
      </a>
    </div>
  </nav>
  <div className="vh-100">
    <div className="container">
      <div className="row align-items-center vh-100">
        <div className="col-md-6">
          <h1 className="text-primary display-3 font-weight-light">Confirme seu<span className="font-weight-bold">email</span></h1>
          <p className="mb-0 lead">Oops! Parece que você não confirmou seu email.</p>
          <p className="lead mb-5">Se acha que é um problema conosco <a  href="/contact">informe-nos</a>.</p>
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
