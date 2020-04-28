/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import img_logo_svg from '../img/logo.png'


function Feed() {

  return (
     <>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href="img/fav.png" />
  <title>Empregue.me | Contato</title>
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
  <nav className="navbar navbar-expand navbar-light bg-white osahan-nav-top p-0">
    <div className="container">
      <a className="navbar-brand mr-2" href="index"><img src={img_logo_svg} />
      </a>
      <form className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control shadow-none border-0" placeholder="Search people, jobs & more..." aria-label="Search" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn" type="button">
              <i className="feather-search" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </nav>
  <div className="py-5 bg-white">
    <div className="container">
      <div className="row d-flex align-items-center">
        <div className="col-md-6">
          <div className="p-4 border mr-4 rounded overflow-hidden"><iframe width="100%" height={455} src="https://maps.google.com/maps?width=720&height=600&hl=en&coord=30.9090157&q=punjab+(My%20Business%20Name)&ie=UTF8&t=p&z=8&iwloc=B&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /></div>
        </div>
        <div className="col-md-6">
          <div className="mb-5">
            <h4 className="font-weight-light mt-0">Conte-nos sobre<span className="font-weight-bold">você</span></h4>
          </div>
          <form action="index">
            <div className="form-row">
              <div className="col">
                <div className="form-group mb-4">
                  <label className="mb-1">Nome<small className="text-danger">*</small></label>
                  <div className="position-relative icon-form-control">
                    <i className="feather-user position-absolute" />
                    <input placeholder="Joao" type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-group mb-4">
                  <label className="mb-1">email<small className="text-danger">*</small></label>
                  <div className="position-relative icon-form-control">
                    <i className="feather-mail position-absolute" />
                    <input placeholder="exemplo@exemplo.com" type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col">
                <div className="form-group mb-4">
                  <label className="mb-1">assunto <small className="text-danger">*</small></label>
                  <div className="position-relative icon-form-control">
                    <i className="feather-edit-2 position-absolute" />
                    <input placeholder="duvida" type="text" className="form-control" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="form-group mb-4">
                  <label className="mb-1">Telefone<small className="text-danger">*</small></label>
                  <div className="position-relative icon-form-control">
                    <i className="feather-phone position-absolute" />
                    <input placeholder="1-800-643-4500" type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
            <div className="form-group mb-4">
              <label className="mb-1">Como podemos ajudalo? <small className="text-danger">*</small></label>
              <div className="position-relative">
                <textarea className="form-control" rows={4} name="text" placeholder="Hi there, I would like to ..." defaultValue={""} />
              </div>
            </div>
            <div className="d-flex align-items-center">
              <button className="btn btn-primary text-uppercase btn-lg" type="submit"> Enviar </button>
              <label className="m-0 pl-4 text-black-50">Entraremos em contato o mais rapido possível.
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <footer className="bg-light py-4">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        {/* Copyright */}
        <p className="small text-muted mb-0">© Empregue.me.</p>
        {/* End Copyright */}
        {/* Social Networks */}
        <ul className="list-inline mb-0">
          <li className="list-inline-item">
            <a className="btn btn-sm btn-light"  href="">
              <span className="feather-facebook" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn btn-sm btn-light"  href="">
              <span className="feather-youtube" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn btn-sm btn-light"  href="">
              <span className="feather-twitter" />
            </a>
          </li>
          <li className="list-inline-item">
            <a className="btn btn-sm btn-light"  href="">
              <span className="feather-github" />
            </a>
          </li>
        </ul>
        {/* End Social Networks */}
      </div>
    </div>
  </footer>
</div>
     </>
  );
}

export default Feed;
