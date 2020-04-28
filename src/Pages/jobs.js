/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import img_logo_svg from '../img/logo.png'
import img_p5 from '../img/p5.png'
import img_l1 from '../img/l1.png'
import img_l4 from '../img/l4.png'
import img_l7 from '../img/l7.png'
import img_p6 from '../img/p6.png'
import img_p7 from '../img/p7.png'
import img_p13 from '../img/p13.png'
import img_p8 from '../img/p8.png'
import img_p9 from '../img/p9.png'
import img_p10 from '../img/p10.png'
import img_p11 from '../img/p11.png'
import img_p12 from '../img/p12.png'
import img_l3 from '../img/l3.png'
import img_p1 from '../img/p1.png'
import img_p2 from '../img/p2.png'
import img_p3 from '../img/p3.png'
import img_p4 from '../img/p4.png'
import img_l2 from '../img/l2.png'
import img_l5 from '../img/l5.png'
import img_l6 from '../img/l6.png'
import img_l8 from '../img/l8.png'


function Feed() {


  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href="img/fav.png" />
  <title>Empregue.me | Jobs</title>
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
          <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
            <form className="job-search p-3 border-bottom">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search jobs" aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="feather-search" />
                  </button>
                </div>
              </div>
            </form>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="p-3 border-top">
                  <div className="row">
                    <div className="col-md-6">
                      <a href="job-profile">
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                            <div className="overflow-hidden mr-2">
                              <h6 className="font-weight-bold text-dark mb-0 text-truncate">UI/UX designer</h6>
                              <div className="text-truncate text-primary">Envato</div>
                              <div className="small text-gray-500"><i className="feather-map-pin" /> India, Punjab</div>
                            </div>
                            <img className="img-fluid ml-auto" src={img_l1} />
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p1} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p2} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p3} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p4} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p5} />
                            </div>
                            <span className="font-weight-bold text-primary">18 connections</span>
                          </div>
                          <div className="p-3 job-item-footer">
                            <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a href="job-profile">
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                            <div className="overflow-hidden mr-2">
                              <h6 className="font-weight-bold text-dark mb-0 text-truncate">Junior UX Designer</h6>
                              <div className="text-truncate text-primary">Behance</div>
                              <div className="small text-gray-500"><i className="feather-map-pin" /> Vancouver, BC
                              </div>
                            </div>
                            <img className="img-fluid ml-auto" src={img_l2} />
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p6} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p7} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p8} />
                            </div>
                            <span className="font-weight-bold text-primary">18 connections</span>
                          </div>
                          <div className="p-3 job-item-footer">
                            <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a href="job-profile">
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                            <div className="overflow-hidden mr-2">
                              <h6 className="font-weight-bold text-dark mb-0 text-truncate">Product Director</h6>
                              <div className="text-truncate text-primary">Spotify Inc.</div>
                              <div className="small text-gray-500"><i className="feather-map-pin" /> India, Punjab</div>
                            </div>
                            <img className="img-fluid ml-auto" src={img_l3} />
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p9} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p10} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p11} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p12} />
                            </div>
                            <span className="font-weight-bold text-primary">18 connections</span>
                          </div>
                          <div className="p-3 job-item-footer">
                            <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a href="job-profile">
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                            <div className="overflow-hidden mr-2">
                              <h6 className="font-weight-bold text-dark mb-0 text-truncate">.NET Developer</h6>
                              <div className="text-truncate text-primary">Invision</div>
                              <div className="small text-gray-500"><i className="feather-map-pin" /> London, UK
                              </div>
                            </div>
                            <img className="img-fluid ml-auto" src={img_l4} />
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p13} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p1} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p2} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p3} />
                            </div>
                            <span className="font-weight-bold text-primary">18 connections</span>
                          </div>
                          <div className="p-3 job-item-footer">
                            <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a href="job-profile">
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                            <div className="overflow-hidden mr-2">
                              <h6 className="font-weight-bold text-dark mb-0 text-truncate">Project Manager - SAP</h6>
                              <div className="text-truncate text-primary">PayPal</div>
                              <div className="small text-gray-500"><i className="feather-map-pin" /> New York, NY
                              </div>
                            </div>
                            <img className="img-fluid ml-auto" src={img_l5} />
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p4} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p5} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p6} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p7} />
                            </div>
                            <span className="font-weight-bold text-primary">18 connections</span>
                          </div>
                          <div className="p-3 job-item-footer">
                            <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a href="job-profile">
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                            <div className="overflow-hidden mr-2">
                              <h6 className="font-weight-bold text-dark mb-0 text-truncate">Cloud Software Engineer</h6>
                              <div className="text-truncate text-primary">Airbnb Inc.</div>
                              <div className="small text-gray-500"><i className="feather-map-pin" /> Manchester, UK
                              </div>
                            </div>
                            <img className="img-fluid ml-auto" src={img_l6} />
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p8} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p9} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p10} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p11} />
                            </div>
                            <span className="font-weight-bold text-primary">18 connections</span>
                          </div>
                          <div className="p-3 job-item-footer">
                            <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a href="job-profile">
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                            <div className="overflow-hidden mr-2">
                              <h6 className="font-weight-bold text-dark mb-0 text-truncate">Channel Sales Director</h6>
                              <div className="text-truncate text-primary">Slack Inc.</div>
                              <div className="small text-gray-500"><i className="feather-map-pin" /> London, UK
                              </div>
                            </div>
                            <img className="img-fluid ml-auto" src={img_l7} />
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p12} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p13} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p2} />
                            </div>
                            <span className="font-weight-bold text-primary">18 connections</span>
                          </div>
                          <div className="p-3 job-item-footer">
                            <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-6">
                      <a href="job-profile">
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                            <div className="overflow-hidden mr-2">
                              <h6 className="font-weight-bold text-dark mb-0 text-truncate">C# Developer</h6>
                              <div className="text-truncate text-primary">Dropbox Inc.</div>
                              <div className="small text-gray-500"><i className="feather-map-pin" /> San Francisco, CA
                              </div>
                            </div>
                            <img className="img-fluid ml-auto" src={img_l8} />
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p5} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p6} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p7} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p1} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p3} />
                            </div>
                            <span className="font-weight-bold text-primary">18 connections</span>
                          </div>
                          <div className="p-3 job-item-footer">
                            <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="p-3 w-100">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                        <div className="media">
                          <div className="u-avatar mr-3">
                            <img className="img-fluid" src={img_l3}  alt="Image Description" />
                          </div>
                          <div className="media-body">
                            <div className="mb-3">
                              <h6 className="font-weight-bold mb-0"><a className="text-dark" href="job-profile">C# Developer</a></h6>
                              <a className="d-inline-block small pt-1" href="job-profile">
                                <span className="text-warning">
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star text-gray-500" />
                                  <span className="feather-star text-gray-500" />
                                </span>
                                <span className="text-dark font-weight-bold ml-2">3.74</span>
                                <span className="text-muted">(567 reviews)</span>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="border-right pr-3 mr-3">
                                <a className="text-secondary small" href="job-profile">Salaries</a>
                              </div>
                              <a className="small" href="job-profile">Open jobs</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                        <div className="media">
                          <div className="u-avatar mr-3">
                            <img className="img-fluid" src={img_l2}  alt="Image Description" />
                          </div>
                          <div className="media-body">
                            <div className="mb-3">
                              <h6 className="font-weight-bold mb-0"><a className="text-dark" href="job-profile">Junior UX Designer</a></h6>
                              <a className="d-inline-block small pt-1" href="job-profile">
                                <span className="text-warning">
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                </span>
                                <span className="text-dark font-weight-bold ml-2">3.74</span>
                                <span className="text-muted">(567 reviews)</span>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="border-right pr-3 mr-3">
                                <a className="text-secondary small" href="job-profile">Salaries</a>
                              </div>
                              <a className="small" href="job-profile">Open jobs</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                        <div className="media">
                          <div className="u-avatar mr-3">
                            <img className="img-fluid" src={img_l3}  alt="Image Description" />
                          </div>
                          <div className="media-body">
                            <div className="mb-3">
                              <h6 className="font-weight-bold mb-0"><a className="text-dark" href="job-profile">Junior UX Designer</a></h6>
                              <a className="d-inline-block small pt-1" href="job-profile">
                                <span className="text-warning">
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                </span>
                                <span className="text-dark font-weight-bold ml-2">3.74</span>
                                <span className="text-muted">(567 reviews)</span>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="border-right pr-3 mr-3">
                                <a className="text-secondary small" href="job-profile">Salaries</a>
                              </div>
                              <a className="small" href="job-profile">Open jobs</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                        <div className="media">
                          <div className="u-avatar mr-3">
                            <img className="img-fluid" src={img_l4}  alt="Image Description" />
                          </div>
                          <div className="media-body">
                            <div className="mb-3">
                              <h6 className="font-weight-bold mb-0"><a className="text-dark" href="job-profile">Junior UX Designer</a></h6>
                              <a className="d-inline-block small pt-1" href="job-profile">
                                <span className="text-warning">
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                </span>
                                <span className="text-dark font-weight-bold ml-2">3.74</span>
                                <span className="text-muted">(567 reviews)</span>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="border-right pr-3 mr-3">
                                <a className="text-secondary small" href="job-profile">Salaries</a>
                              </div>
                              <a className="small" href="job-profile">Open jobs</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                        <div className="media">
                          <div className="u-avatar mr-3">
                            <img className="img-fluid" src={img_l5}  alt="Image Description" />
                          </div>
                          <div className="media-body">
                            <div className="mb-3">
                              <h6 className="font-weight-bold mb-0"><a className="text-dark" href="job-profile">Junior UX Designer</a></h6>
                              <a className="d-inline-block small pt-1" href="job-profile">
                                <span className="text-warning">
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                </span>
                                <span className="text-dark font-weight-bold ml-2">3.74</span>
                                <span className="text-muted">(567 reviews)</span>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="border-right pr-3 mr-3">
                                <a className="text-secondary small" href="job-profile">Salaries</a>
                              </div>
                              <a className="small" href="job-profile">Open jobs</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="border shadow-sm border rounded bg-white job-item-2 p-3 mb-3">
                        <div className="media">
                          <div className="u-avatar mr-3">
                            <img className="img-fluid" src={img_l6}  alt="Image Description" />
                          </div>
                          <div className="media-body">
                            <div className="mb-3">
                              <h6 className="font-weight-bold mb-0"><a className="text-dark" href="job-profile">Junior UX Designer</a></h6>
                              <a className="d-inline-block small pt-1" href="job-profile">
                                <span className="text-warning">
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                  <span className="feather-star" />
                                </span>
                                <span className="text-dark font-weight-bold ml-2">3.74</span>
                                <span className="text-muted">(567 reviews)</span>
                              </a>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="border-right pr-3 mr-3">
                                <a className="text-secondary small" href="job-profile">Salaries</a>
                              </div>
                              <a className="small" href="job-profile">Open jobs</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="shadow-sm rounded bg-white job-item-2 p-3 mb-3">
            <div className="media">
              <div className="u-avatar mr-3">
                <img className="img-fluid" src={img_l3}  alt="Image Description" />
              </div>
              <div className="media-body">
                <div className="mb-3">
                  <h6 className="font-weight-bold mb-0"><a className="text-dark" href="job-profile">C# Developer</a></h6>
                  <a className="d-inline-block small pt-1" href="job-profile">
                    <span className="text-warning">
                      <span className="feather-star" />
                      <span className="feather-star" />
                      <span className="feather-star" />
                      <span className="feather-star text-gray-500" />
                      <span className="feather-star text-gray-500" />
                    </span>
                    <span className="text-dark font-weight-bold ml-2">3.74</span>
                    <span className="text-muted">(567 reviews)</span>
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border-right pr-3 mr-3">
                    <a className="text-secondary small" href="job-profile">Salaries</a>
                  </div>
                  <a className="small" href="job-profile">Open jobs</a>
                </div>
              </div>
            </div>
          </div>
          <div className="shadow-sm  rounded bg-white job-item-2 p-3 mb-3">
            <div className="media">
              <div className="u-avatar mr-3">
                <img className="img-fluid" src={img_l2}  alt="Image Description" />
              </div>
              <div className="media-body">
                <div className="mb-3">
                  <h6 className="font-weight-bold mb-0"><a className="text-dark" href="job-profile">Junior UX Designer</a></h6>
                  <a className="d-inline-block small pt-1" href="job-profile">
                    <span className="text-warning">
                      <span className="feather-star" />
                      <span className="feather-star" />
                      <span className="feather-star" />
                      <span className="feather-star" />
                      <span className="feather-star" />
                    </span>
                    <span className="text-dark font-weight-bold ml-2">3.74</span>
                    <span className="text-muted">(567 reviews)</span>
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border-right pr-3 mr-3">
                    <a className="text-secondary small" href="job-profile">Salaries</a>
                  </div>
                  <a className="small" href="job-profile">Open jobs</a>
                </div>
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
