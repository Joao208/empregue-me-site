/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import img_logo_svg from '../img/logo.png'
import img_p6 from '../img/p6.png'
import img_job1 from '../img/job1.png'
import img_p9 from '../img/p9.png'
import img_p11 from '../img/p11.png'
import img_p1 from '../img/p1.png'
import img_p2 from '../img/p2.png'
import img_p3 from '../img/p3.png'
import img_l2 from '../img/l2.png'
import img_clogo2 from '../img/clogo2.png'



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
              <div className="p-3 d-flex align-items-center osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_l2} />
                </div>
                <div className="font-weight-bold mr-3">
                  <div className="mb-2">We found a job at askbootstrap Ltd that you may be interested in Vivamus imperdiet venenatis est...
                  </div>
                  <button type="button" className="btn btn-outline-primary">View Jobs</button>
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
                  <div className="text-right text-muted pt-1">4d</div>
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
              <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3"><img className="rounded-circle" src={img_p9} /></div>
                <div className="font-weight-bold mr-3">
                  <div className="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                  <div className="small">Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
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
              <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p11} />
                </div>
                <div className="font-weight-bold mr-3">
                  <div className="mb-2"><span className="font-weight-normal">Congratulate Gurdeep Singh Osahan (iamgurdeeposahan)</span>  for 5 years at Askbootsrap Pvt.
                  </div>
                  <button type="button" className="btn btn-outline-primary">Say congrats</button>
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
                  <div className="text-right text-muted pt-1">4d</div>
                </span>
              </div>
              <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p6} />
                </div>
                <div className="font-weight-bold mr-3">
                  <div>
                    <span className="font-weight-normal">Congratulate Mnadeep singh (iamgurdeeposahan)</span>  for 4 years at Askbootsrap Pvt.
                    <div className="small text-success"><i className="feather-check-circle" /> You sent Mandeep a message</div>
                  </div>
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
                  <div className="text-right text-muted pt-1">4d</div>
                </span>
              </div>
              <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3 d-flex align-items-center bg-success justify-content-center rounded-circle text-white">M</div>
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
              <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3"><img className="rounded-circle" src={img_p1} /></div>
                <div className="font-weight-bold mr-3">
                  <div className="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                  <div className="small">Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
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
              <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p2} />
                </div>
                <div className="font-weight-bold mr-3">
                  <div className="mb-2"><span className="font-weight-normal">Congratulate Gurdeep Singh Osahan (iamgurdeeposahan)</span>  for 5 years at Askbootsrap Pvt.
                  </div>
                  <button type="button" className="btn btn-outline-primary">Say congrats</button>
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
                  <div className="text-right text-muted pt-1">4d</div>
                </span>
              </div>
              <div className="p-3 d-flex align-items-center osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p3} />
                </div>
                <div className="font-weight-bold mr-3">
                  <div>
                    <span className="font-weight-normal">Congratulate Mnadeep singh (iamgurdeeposahan)</span>  for 4 years at Askbootsrap Pvt.
                    <div className="small text-success"><i className="feather-check-circle" /> You sent Mandeep a message</div>
                  </div>
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
                  <div className="text-right text-muted pt-1">4d</div>
                </span>
              </div>
            </div>
          </div>
        </main>
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center">
            <img src={img_job1} className="img-fluid"  alt="Responsive image" />
            <div className="p-3 border-bottom">
              <h6 className="font-weight-bold text-dark">Notifications</h6>
              <p className="mb-0 text-muted">You’re all caught up! Check back later for new notifications
              </p>
            </div>
            <div className="p-3">
              <button type="button" className="btn btn-outline-primary pl-4 pr-4"> View settings </button>
            </div>
          </div>
          <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="p-5">
              <img src={img_clogo2} className="img-fluid"  alt="Responsive image" />
            </div>
            <div className="p-3 border-top border-bottom">
              <h5 className="font-weight-bold text-dark mb-1 mt-0">Envato</h5>
              <p className="mb-0 text-muted">Melbourne, AU
              </p>
            </div>
            <div className="p-3">
              <div className="d-flex align-items-top mb-2">
                <p className="mb-0 text-muted">Posted</p>
                <p className="font-weight-bold text-dark mb-0 mt-0 ml-auto">1 day ago</p>
              </div>
              <div className="d-flex align-items-top">
                <p className="mb-0 text-muted">Applicant Rank</p>
                <p className="font-weight-bold text-dark mb-0 mt-0 ml-auto">25</p>
              </div>
            </div>
          </div>
        </aside>
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
