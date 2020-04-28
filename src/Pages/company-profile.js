/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
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
import img_post1 from '../img/post1.png'
import img_p7 from '../img/p7.png'
import img_p13 from '../img/p13.png'
import img_job1 from '../img/job1.png'
import img_p8 from '../img/p8.png'
import img_p9 from '../img/p9.png'
import img_p10 from '../img/p10.png'
import img_p11 from '../img/p11.png'
import img_p12 from '../img/p12.png'
import img_l3 from '../img/l3.png'
import img_ads1 from '../img/ads1.png'
import img_p1 from '../img/p1.png'
import img_p2 from '../img/p2.png'
import img_p3 from '../img/p3.png'
import img_p4 from '../img/p4.png'
import img_company from '../img/company-profile.jpg'
import img_user from '../img/user.png'
import img_l5 from '../img/l5.png'
import img_l6 from '../img/l6.png'
import img_l8 from '../img/l8.png'
import img_l2 from '../img/l2.png'
import img_clogo from '../img/clogo.png'

function Feed() {


  return (
     <>
<div>
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
      <ul className="navbar-nav ml-auto d-flex align-items-center">
        {/* Nav Item - Search Dropdown (Visible Only XS) */}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="feather-search mr-2" />
          </a>
          {/* Dropdown - Messages */}
          <div className="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in" aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input type="text" className="form-control border-0 shadow-none" placeholder="Search people, jobs and more..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn" type="button">
                    <i className="feather-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="jobs"><i className="feather-briefcase mr-2" /><span className="d-none d-lg-inline">Jobs</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="connection"><i className="feather-users mr-2" /><span className="d-none d-lg-inline">Connection</span></a>
        </li>
        <li className="nav-item dropdown mr-2">
          <a className="nav-link dropdown-toggle pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="feather-file-text mr-2" /><span className="d-none d-lg-inline">Pages</span>
          </a>
          {/* Dropdown - User Information */}
        </li>
        <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="feather-message-square" />
            {/* Counter - Alerts */}
            <span className="badge badge-danger badge-counter">8</span>
          </a>
          {/* Dropdown - Alerts */}
          <div className="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
            <h6 className="dropdown-header">
              Message Center
            </h6>
            <a className="dropdown-item d-flex align-items-center" href="messages">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={img_p1} />
                <div className="status-indicator bg-success" />
              </div>
              <div className="font-weight-bold overflow-hidden">
                <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                <div className="small text-gray-500">Emily Fowler · 58m</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="messages">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={img_p2} />
                <div className="status-indicator" />
              </div>
              <div className="overflow-hidden">
                <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                <div className="small text-gray-500">Jae Chun · 1d</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="messages">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={img_p3} />
                <div className="status-indicator bg-warning" />
              </div>
              <div className="overflow-hidden">
                <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="messages">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={img_p4} />
                <div className="status-indicator bg-success" />
              </div>
              <div className="overflow-hidden">
                <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                <div className="small text-gray-500">Chicken the Dog · 2w</div>
              </div>
            </a>
            <a className="dropdown-item text-center small text-gray-500" href="messages">Read More Messages</a>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="feather-bell" />
            {/* Counter - Alerts */}
            <span className="badge badge-info badge-counter">6</span>
          </a>
          {/* Dropdown - Alerts */}
          <div className="dropdown-list dropdown-menu dropdown-menu-right shadow-sm">
            <h6 className="dropdown-header">
              Alerts Center
            </h6>
            <a className="dropdown-item d-flex align-items-center" href="notifications">
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="feather-download-cloud text-white" />
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 12, 2019</div>
                <span className="font-weight-bold">A new monthly report is ready to download!</span>
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="notifications">
              <div className="mr-3">
                <div className="icon-circle bg-success">
                  <i className="feather-edit text-white" />
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 7, 2019</div>
                $290.29 has been deposited into your account!
              </div>
            </a>
            <a className="dropdown-item d-flex align-items-center" href="notifications">
              <div className="mr-3">
                <div className="icon-circle bg-warning">
                  <i className="feather-folder text-white" />
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 2, 2019</div>
                Spending Alert: We've noticed unusually high spending for your account.
              </div>
            </a>
            <a className="dropdown-item text-center small text-gray-500" href="notifications">Show All Alerts</a>
          </div>
        </li>
        {/* Nav Item - User Information */}
        <li className="nav-item dropdown no-arrow ml-1 osahan-profile-dropdown">
          <a className="nav-link dropdown-toggle pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img className="img-profile rounded-circle" src={img_p13} />
          </a>
          {/* Dropdown - User Information */}
          <div className="dropdown-menu dropdown-menu-right shadow-sm">
            <div className="p-3 d-flex align-items-center">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={img_user} />
                <div className="status-indicator bg-success" />
              </div>
              <div className="font-weight-bold">
                <div className="text-truncate">Gurdeep Osahan</div>
                <div className="small text-gray-500">UI/UX Designer</div>
              </div>
            </div>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="profile"><i className="feather-edit mr-1" /> My Account</a>
            <a className="dropdown-item" href="edit-profile"><i className="feather-user mr-1" /> Edit Profile</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="sign-in"><i className="feather-log-out mr-1" /> Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <div className="profile-cover text-center">
    <img className="img-fluid" src={img_company} />
  </div>
  <div className="bg-white shadow-sm border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center py-3">
            <div className="profile-left">
              <h5 className="font-weight-bold text-dark mb-1 mt-0">Google <span className="text-info"><i data-toggle="tooltip" data-placement="top" title="Verified" className="feather-check-circle" /></span></h5>
              <p className="mb-0 text-muted"> Internet | Mountain View, CA | 14,128,005 followers</p>
            </div>
            <div className="profile-right ml-auto">
              <button type="button" className="btn btn-light mr-2"> <i className="feather-external-link" /> Visit website </button>
              <button type="button" className="btn btn-primary"> <i className="feather-plus" /> Follow </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="pb-4 pt-3">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm rounded bg-white mb-3 overflow-hidden">
            <ul className="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Update</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Jobs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="type-tab" data-toggle="tab" href="#type" role="tab" aria-controls="type" aria-selected="false">Life</a>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="box shadow-sm border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                  <h6 className="m-0">About</h6>
                </div>
                <div className="box-body p-3">
                  <p>Google’s mission is to organize the world‘s information and make it universally accessible and useful.
                  </p>
                  <p className="mb-0">Since our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services—including various forms of advertising and web applications for all kinds of tasks—in scores of languages. And starting from two computer science students in a university dorm room, we now have thousands of employees and offices around the world. A lot has changed since the first Google search engine appeared. But some things haven’t changed: our dedication to our users and our belief in the possibilities of the Internet itself.
                  </p>
                </div>
              </div>
              <div className="box shadow-sm border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                  <h6 className="m-0">Overview</h6>
                </div>
                <div className="box-body">
                  <table className="table table-borderless mb-0">
                    <tbody>
                      <tr className="border-bottom">
                        <th className="p-3">Website</th>
                        <td className="p-3"><a href="#">www.google.com</a></td>
                      </tr>
                      <tr className="border-bottom">
                        <th className="p-3">Industry</th>
                        <td className="p-3">Internet</td>
                      </tr>
                      <tr className="border-bottom">
                        <th className="p-3">Company size</th>
                        <td className="p-3">10,001+ employees <i data-toggle="tooltip" data-placement="top" title="Google’s mission is to organize the world‘s information and make it universally accessible and useful.
                                    " className="feather-info text-info" /> </td>
                      </tr>
                      <tr className="border-bottom">
                        <th className="p-3">Headquarters</th>
                        <td className="p-3">Mountain View, CA</td>
                      </tr>
                      <tr className="border-bottom">
                        <th className="p-3">Type</th>
                        <td className="p-3">Public Company</td>
                      </tr>
                      <tr className="border-bottom">
                        <th className="p-3">Founded</th>
                        <td className="p-3">1998</td>
                      </tr>
                      <tr>
                        <th className="p-3">Specialties</th>
                        <td className="p-3">search, ads, mobile, android, online video, apps, machine learning, virtual reality, cloud, hardware, artificial intelligence, youtube, and software</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="box shadow-sm border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                  <h6 className="m-0">Locations</h6>
                </div>
                <div className="p-3">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="card overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501889.172354371!2d73.15671299623955!3d31.003573085499198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8fbd263103a38861!2sPunjab!5e0!3m2!1sen!2sin!4v1575738201305!5m2!1sen!2sin" width="100%" height={150} frameBorder={0} style={{border: 0}} allowFullScreen />
                        <div className="card-body">
                          <h6 className="card-title">Postal Address</h6>
                          <p className="card-text">PO Box 16122 Collins Street West Victoria 8007 Australia</p>
                          <a href="#" className="text-link font-weight-bold"><i className="feather-external-link" /> Get Directions</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card overflow-hidden">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109552.19658166621!2d75.78663235513761!3d30.900473637624447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1575738867148!5m2!1sen!2sin" width="100%" height={150} frameBorder={0} style={{border: 0}} allowFullScreen />
                        <div className="card-body">
                          <h6 className="card-title">Envato HQ</h6>
                          <p className="card-text">121 King Street, Melbourne Victoria 3000 Australia</p>
                          <a href="#" className="text-link font-weight-bold"><i className="feather-external-link" /> Get Directions</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="box shadow-sm border rounded bg-white mb-3 osahan-post">
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={img_p5} />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">Tobia Crivellari</div>
                    <div className="small text-gray-500">Product Designer at askbootstrap</div>
                  </div>
                  <span className="ml-auto small">3 hours</span>
                </div>
                <div className="p-3 border-bottom osahan-post-body">
                  <p className="mb-0">Tmpo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="#">laboris consequat.</a></p>
                </div>
                <div className="p-3 border-bottom osahan-post-footer">
                  <a href="#" className="mr-3 text-secondary"><i className="feather-heart text-danger" /> 16</a>
                  <a href="#" className="mr-3 text-secondary"><i className="feather-message-square" /> 8</a>
                  <a href="#" className="mr-3 text-secondary"><i className="feather-share-2" /> 2</a>
                </div>
                <div className="p-3">
                  <button type="button" className="btn btn-outline-primary btn-sm mr-1">Awesome!!</button>
                  <button type="button" className="btn btn-outline-secondary btn-sm mr-1">😍</button>
                  <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Whats it about?</button>
                  <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Oooo Great Wow</button>
                </div>
              </div>
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={img_p6} />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">Collin Weiland</div>
                    <div className="small text-gray-500">Web Developer @Google</div>
                  </div>
                  <span className="ml-auto small">3 hours</span>
                </div>
                <div className="p-3 border-bottom osahan-post-body">
                  <p>Lorem ipsum dolor sit amet, consectetur 😍😎 adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a href="#">laboris consequat.</a></p>
                  <img src={img_post1} className="img-fluid" alt="Responsive image" />
                </div>
                <div className="p-3 border-bottom osahan-post-footer">
                  <a href="#" className="mr-3 text-secondary"><i className="feather-heart text-danger" /> 16</a>
                  <a href="#" className="mr-3 text-secondary"><i className="feather-message-square" /> 8</a>
                  <a href="#" className="mr-3 text-secondary"><i className="feather-share-2" /> 2</a>
                </div>
                <div className="p-3 d-flex align-items-top border-bottom osahan-post-comment">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={img_p7} />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate"> James Spiegel <span className="float-right small">2 min</span></div>
                    <div className="small text-gray-500">Ratione voluptatem sequi en lod nesciunt. Neque porro quisquam est, quinder dolorem ipsum quia dolor sit amet, consectetur</div>
                  </div>
                </div>
                <div className="p-3">
                  <textarea placeholder="Add Comment..." className="form-control border-0 p-0 shadow-none" rows={1} defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
              <div className="box shadow-sm border rounded bg-white p-3">
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
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p1} alt data-original-title="Sophia Lee" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p2} alt data-original-title="John Doe" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p3} alt data-original-title="Julia Cox" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p4} alt data-original-title="Robert Cook" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p5} alt data-original-title="Sophia Lee" />
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
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p6} alt data-original-title="John Doe" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p7} alt data-original-title="Julia Cox" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p8} alt data-original-title="Robert Cook" />
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
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p9} alt data-original-title="Sophia Lee" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p10} alt data-original-title="John Doe" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p11} alt data-original-title="Julia Cox" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p12} alt data-original-title="Robert Cook" />
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
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p13} alt data-original-title="Sophia Lee" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p1} alt data-original-title="John Doe" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p2} alt data-original-title="Julia Cox" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p3} alt data-original-title="Robert Cook" />
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
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p4} alt data-original-title="Sophia Lee" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p5} alt data-original-title="John Doe" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p6} alt data-original-title="Julia Cox" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p7} alt data-original-title="Robert Cook" />
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
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p8} alt data-original-title="Sophia Lee" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p9} alt data-original-title="John Doe" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p10} alt data-original-title="Julia Cox" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p11} alt data-original-title="Robert Cook" />
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
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p12} alt data-original-title="Sophia Lee" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p13} alt data-original-title="John Doe" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p2} alt data-original-title="Julia Cox" />
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
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p5} alt data-original-title="Sophia Lee" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p6} alt data-original-title="John Doe" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p7} alt data-original-title="Julia Cox" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p1} alt data-original-title="Robert Cook" />
                            <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p3} alt data-original-title="Robert Cook" />
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
            <div className="tab-pane fade" id="type" role="tabpanel" aria-labelledby="type-tab">
              <div className="box shadow-sm border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                  <h6 className="m-0">Careers at Google</h6>
                </div>
                <div className="box-body p-3">
                  <p>Google’s mission is to organize the world‘s information and make it universally accessible and useful.
                  </p>
                  <p className="mb-0">Since our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services—including various forms of advertising and web applications for all kinds of tasks—in scores of languages. And starting from two computer science students in a university dorm room, we now have thousands of employees and offices around the world. A lot has changed since the first Google search engine appeared. But some things haven’t changed: our dedication to our users and our belief in the possibilities of the Internet itself.
                  </p>
                </div>
              </div>
              <div className="box shadow-sm border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                  <h6 className="m-0">Careers at Google</h6>
                </div>
                <div className="box-body p-3">
                  <p>Google’s mission is to organize the world‘s information and make it universally accessible and useful.
                  </p>
                  <p className="mb-0">Since our founding in 1998, Google has grown by leaps and bounds. From offering search in a single language we now offer dozens of products and services—including various forms of advertising and web applications for all kinds of tasks—in scores of languages. And starting from two computer science students in a university dorm room, we now have thousands of employees and offices around the world. A lot has changed since the first Google search engine appeared. But some things haven’t changed: our dedication to our users and our belief in the possibilities of the Internet itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="p-5">
              <img src={img_clogo} className="img-fluid" alt="Responsive image" />
            </div>
            <div className="p-3 border-top border-bottom">
              <h6 className="font-weight-bold text-dark mb-1 mt-0">Overview</h6>
              <p className="mb-0 text-muted">Google’s mission is to organize the world‘s information and make it universally accessible and useful.
              </p>
            </div>
            <div className="p-3">
              <div className="d-flex align-items-top mb-2">
                <p className="mb-0 text-dark font-weight-bold">Common Connections</p>
                <p className="font-weight-bold text-info mb-0 mt-0 ml-auto">358</p>
              </div>
              <div className="d-flex align-items-top">
                <p className="mb-0 text-dark font-weight-bold">All Employees</p>
                <p className="font-weight-bold text-info mb-0 mt-0 ml-auto">191,895</p>
              </div>
            </div>
          </div>
          <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center">
            <img src={img_job1} className="img-fluid" alt="Responsive image" />
            <div className="p-3 border-bottom">
              <h6 className="font-weight-bold text-dark">Osahan Solutions</h6>
              <p className="mb-0 text-muted">Looking for talent?</p>
            </div>
            <div className="p-3">
              <button type="button" className="btn btn-outline-primary pl-4 pr-4"> POST A JOB </button>
            </div>
          </div>
        </aside>
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Similar pages</h6>
            </div>
            <div className="box-body p-3">
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_l1} />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Amazon</div>
                  <div className="small text-gray-500">Internet
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm text-nowrap"><i className="feather-plus" /> Follow</button>
                </span>
              </div>
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_l2} />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Apple</div>
                  <div className="small text-gray-500">Consumer Electronics
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm text-nowrap"><i className="feather-plus" /> Follow</button>
                </span>
              </div>
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_l3} />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Microsoft</div>
                  <div className="small text-gray-500">Computer Software
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm text-nowrap"><i className="feather-plus" /> Follow</button>
                </span>
              </div>
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_l4} />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Facebook</div>
                  <div className="small text-gray-500">Internet
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm text-nowrap"><i className="feather-plus" /> Follow</button>
                </span>
              </div>
              <div className="d-flex align-items-center osahan-post-header people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_l5} />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Netflix</div>
                  <div className="small text-gray-500">Entertainment
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm text-nowrap"><i className="feather-plus" /> Follow</button>
                </span>
              </div>
            </div>
          </div>
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">People also viewed</h6>
            </div>
            <div className="box-body p-3">
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p4} />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Sophia Lee</div>
                  <div className="small text-gray-500">@Harvard
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-outline-primary btn-sm">Connent</button>
                </span>
              </div>
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p9} />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">John Doe</div>
                  <div className="small text-gray-500">Traveler
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-outline-primary btn-sm">Connent</button>
                </span>
              </div>
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p10} />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Julia Cox</div>
                  <div className="small text-gray-500">Art Designer
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-outline-primary btn-sm">Connent</button>
                </span>
              </div>
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p11} />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Robert Cook</div>
                  <div className="small text-gray-500">@Photography
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-outline-primary btn-sm">Connent</button>
                </span>
              </div>
              <div className="d-flex align-items-center osahan-post-header people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p12} />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Richard Bell</div>
                  <div className="small text-gray-500">@Envato
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-outline-primary btn-sm">Connent</button>
                </span>
              </div>
            </div>
          </div>
          <div className="box shadow-sm mb-3 border rounded bg-white ads-box text-center">
            <img src={img_ads1} className="img-fluid" alt="Responsive image" />
            <div className="p-3 border-bottom">
              <h6 className="font-weight-bold text-gold">Osahanin Premium</h6>
              <p className="mb-0 text-muted">Grow &amp; nurture your network</p>
            </div>
            <div className="p-3">
              <button type="button" className="btn btn-outline-gold pl-4 pr-4"> ACTIVATE </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
  {/* Bootstrap core JavaScript */}
</div>
</>
);
}

export default Feed;
