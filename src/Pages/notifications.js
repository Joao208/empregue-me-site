/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import img_logo_svg from '../img/logo.png'
import img_l4 from '../img/l4.png'
import img_p6 from '../img/p6.png'
import img_p13 from '../img/p13.png'
import img_job1 from '../img/job1.png'
import img_p9 from '../img/p9.png'
import img_p10 from '../img/p10.png'
import img_p11 from '../img/p11.png'
import img_p12 from '../img/p12.png'
import img_l3 from '../img/l3.png'
import img_user from '../img/user.png'
import img_p1 from '../img/p1.png'
import img_p2 from '../img/p2.png'
import img_p3 from '../img/p3.png'
import img_p4 from '../img/p4.png'
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
      <ul className="navbar-nav ml-auto d-flex align-items-center">
        {/* Nav Item - Search Dropdown (Visible Only XS) */}
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a className="nav-link dropdown-toggle"  href="" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
          <a className="nav-link dropdown-toggle pr-0"  href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="feather-file-text mr-2" /><span className="d-none d-lg-inline">Pages</span>
          </a>
          {/* Dropdown - User Information */}
         </li>
        <li className="nav-item dropdown no-arrow mx-1 osahan-list-dropdown">
          <a className="nav-link dropdown-toggle"  href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
          <a className="nav-link dropdown-toggle"  href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
          <a className="nav-link dropdown-toggle pr-0"  href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Recent</h6>
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
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
          <button type="button" className="btn btn-lg btn-block btn-danger mb-3"> <i className="feather-bell" /> Set alert for jobs </button>
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Similar Jobs
              </h6>
            </div>
            <div className="box-body p-3">
              <a href="job-profile">
                <div className="shadow-sm border rounded bg-white job-item mb-3">
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
                      <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p9}   data-original-title="Sophia Lee" />
                      <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p10}   data-original-title="John Doe" />
                      <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p11}   data-original-title="Julia Cox" />
                      <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p12}   data-original-title="Robert Cook" />
                    </div>
                    <span className="font-weight-bold text-muted">18 connections</span>
                  </div>
                  <div className="p-3 job-item-footer">
                    <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                  </div>
                </div>
              </a>
              <a href="job-profile">
                <div className="shadow-sm border rounded bg-white job-item">
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
                      <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p13}   data-original-title="Sophia Lee" />
                      <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p1}   data-original-title="John Doe" />
                      <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p3}   data-original-title="Robert Cook" />
                    </div>
                    <span className="font-weight-bold text-muted">18 connections</span>
                  </div>
                  <div className="p-3 job-item-footer">
                    <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Who viewed your profile</h6>
            </div>
            <div className="box-body p-3">
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p4} />
                  <div className="status-indicator bg-success" />
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
                  <div className="status-indicator bg-success" />
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
                  <div className="status-indicator bg-success" />
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
                  <div className="status-indicator bg-success" />
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
                  <div className="status-indicator bg-success" />
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
