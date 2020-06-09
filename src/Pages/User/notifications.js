/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

 import '../App.css';
  
import img_logo_svg from '../../img/logo.png'
import img_p6 from '../../img/p6.png'



function Feed() {


  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
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
  {/* Navigation */}
  <nav className="navbar navbar-expand navbar-dark bg-dark osahan-nav-top p-0">
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
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Recentes</h6>
            </div>
            <div className="box-body p-0">
              <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p6} />
                </div>
                <div className="font-weight-bold mr-3">
                  <div className="text-truncate">DAILY RUNDOWN: WEDNESDAY</div>
                  <div className="small">Income tax sops on the cards, The bias in VC funding, and other top news for you</div>
                </div>
                <span className="ml-auto mb-auto">
                  <div className="btn-group">
                    <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="feather-more-vertical" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button"><i className="feather-trash" /> Delete</button>
                      <button className="dropdown-item" type="button"><i className="feather-x-circle" /> Turn Off</button>
                    </div>
                  </div>
                  <br />
                  <div className="text-right text-muted pt-1">3d</div>
                </span>
              </div>
            </div>
          </div>
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Earlier</h6>
            </div>
            <div className="box-body p-0">
              <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3 d-flex align-items-center bg-danger justify-content-center rounded-circle text-white">DRM</div>
                <div className="font-weight-bold mr-3">
                  <div className="text-truncate">DAILY RUNDOWN: MONDAY</div>
                  <div className="small">Nunc purus metus, aliquam vitae venenatis sit amet, porta non est. </div>
                </div>
                <span className="ml-auto mb-auto">
                  <div className="btn-group">
                    <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="feather-more-vertical" />
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button"><i className="feather-trash" /> Delete</button>
                      <button className="dropdown-item" type="button"><i className="feather-x-circle" /> Turn Off</button>
                    </div>
                  </div>
                  <br />
                  <div className="text-right text-muted pt-1">3d</div>
                </span>
              </div>
            </div>
          </div>
        </main>
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
