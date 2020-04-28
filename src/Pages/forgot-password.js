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
  <title>Osahanin - Job Portal &amp; Social Network HTML Template</title>
  {/* Slick Slider */}
  <link rel="stylesheet" type="text/css" href="vendor/slick/slick.min.css" />
  <link rel="stylesheet" type="text/css" href="vendor/slick/slick-theme.min.css" />
  {/* Feather Icon*/}
  <link href="vendor/icons/feather.css" rel="stylesheet" type="text/css" />
  {/* Bootstrap core CSS */}
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  {/* Custom styles for this template */}
  <link href="css/style.css" rel="stylesheet" />
  <div className="bg-white">
    <div className="container">
      <div className="row justify-content-center align-items-center d-flex vh-100">
        <div className="col-md-4 mx-auto">
          <div className="osahan-login py-4">
            <div className="text-center mb-4">
              <a href="index"><img src={img_logo_svg} /></a>
              <h5 className="font-weight-bold mt-3">First, let's find your account</h5>
              <p className="text-muted">Please enter your email or phone</p>
            </div>
            <form action="index">
              <div className="form-group">
                <label className="mb-1">Email or Phone</label>
                <div className="position-relative icon-form-control">
                  <i className="feather-user position-absolute" />
                  <input type="email" className="form-control" />
                </div>
              </div>
              <button className="btn btn-primary btn-block text-uppercase" type="submit"> Find account </button>
              <div className="py-3 d-flex align-item-center">
                <a href="sign-in">Sign In</a>
                <span className="ml-auto"> New to Osahanin? <a className="font-weight-bold" href="sign-up">Join now</a></span>
              </div>
            </form>
          </div>
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
