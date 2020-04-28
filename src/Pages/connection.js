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
import img_l4 from '../img/l4.png'
import img_p6 from '../img/p6.png'
import img_p7 from '../img/p7.png'
import img_p13 from '../img/p13.png'
import img_p8 from '../img/p8.png'
import img_p9 from '../img/p9.png'
import img_p10 from '../img/p10.png'
import img_p11 from '../img/p11.png'
import img_p12 from '../img/p12.png'
import img_user from '../img/user.png'
import img_p1 from '../img/p1.png'
import img_p2 from '../img/p2.png'
import img_p3 from '../img/p3.png'
import img_p4 from '../img/p4.png'


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
        <main className="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
            <h5 className="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">More suggestions for you</h5>
            <ul className="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">People</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Groups</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="type-tab" data-toggle="tab" href="#type" role="tab" aria-controls="type" aria-selected="false">Hashtags</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="p-3">
                  <div className="row">
                    <div className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={img_p1} />
                            </div>
                            <div className="font-weight-bold">
                              <h6 className="font-weight-bold text-dark mb-0">Sophia Lee</h6>
                              <div className="small text-black-50">Photographer at Photography</div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p1} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p2} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p3} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p4} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p5} />
                            </div>
                            <span className="font-weight-bold small text-primary">4 mutual connections</span>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <button type="button" className="btn btn-primary btn-sm btn-block"> Connect </button>
                            </div>
                            <div className="col-6 pr-3 pl-1">
                              <button type="button" className="btn btn-outline-primary btn-sm btn-block"> <i className="feather-user-plus" /> Follow </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={img_p2} />
                            </div>
                            <div className="font-weight-bold">
                              <h6 className="font-weight-bold text-dark mb-0">John Doe</h6>
                              <div className="small text-black-50">Traveler</div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p6} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p7} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p8} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p9} />
                            </div>
                            <span className="font-weight-bold small text-primary">4 mutual connections</span>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <button type="button" className="btn btn-primary btn-sm btn-block"> Connect </button>
                            </div>
                            <div className="col-6 pr-3 pl-1">
                              <button type="button" className="btn btn-outline-primary btn-sm btn-block"> <i className="feather-user-plus" /> Follow </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={img_p3} />
                            </div>
                            <div className="font-weight-bold">
                              <h6 className="font-weight-bold text-dark mb-0">Julia Cox</h6>
                              <div className="small text-black-50">Art Designer</div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p10} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p11} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p12} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p13} />
                            </div>
                            <span className="font-weight-bold small text-primary">4 mutual connections</span>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <button type="button" className="btn btn-primary btn-sm btn-block"> Connect </button>
                            </div>
                            <div className="col-6 pr-3 pl-1">
                              <button type="button" className="btn btn-outline-primary btn-sm btn-block"> <i className="feather-user-plus" /> Follow </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={img_p4} />
                            </div>
                            <div className="font-weight-bold">
                              <h6 className="font-weight-bold text-dark mb-0">Robert Cook</h6>
                              <div className="small text-black-50">Graphic Designer</div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p1} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p3} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p4} />
                            </div>
                            <span className="font-weight-bold small text-primary">4 mutual connections</span>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <button type="button" className="btn btn-primary btn-sm btn-block"> Connect </button>
                            </div>
                            <div className="col-6 pr-3 pl-1">
                              <button type="button" className="btn btn-outline-primary btn-sm btn-block"> <i className="feather-user-plus" /> Follow </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={img_p5} />
                            </div>
                            <div className="font-weight-bold">
                              <h6 className="font-weight-bold text-dark mb-0">Stella Bergmann</h6>
                              <div className="small text-black-50">Photography</div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p5} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p6} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p7} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p8} />
                            </div>
                            <span className="font-weight-bold small text-primary">4 mutual connections</span>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <button type="button" className="btn btn-primary btn-sm btn-block"> Connect </button>
                            </div>
                            <div className="col-6 pr-3 pl-1">
                              <button type="button" className="btn btn-outline-primary btn-sm btn-block"> <i className="feather-user-plus" /> Follow </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={img_p6} />
                            </div>
                            <div className="font-weight-bold">
                              <h6 className="font-weight-bold text-dark mb-0">Dan Walker</h6>
                              <div className="small text-black-50">UI/UX Designer</div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p9} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p13} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p8} />
                            </div>
                            <span className="font-weight-bold small text-primary">4 mutual connections</span>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <button type="button" className="btn btn-primary btn-sm btn-block"> Connect </button>
                            </div>
                            <div className="col-6 pr-3 pl-1">
                              <button type="button" className="btn btn-outline-primary btn-sm btn-block"> <i className="feather-user-plus" /> Follow </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={img_p7} />
                            </div>
                            <div className="font-weight-bold">
                              <h6 className="font-weight-bold text-dark mb-0">Julia Cox</h6>
                              <div className="small text-black-50">Art Designer</div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p10} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p11} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p12} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p13} />
                            </div>
                            <span className="font-weight-bold small text-primary">4 mutual connections</span>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <button type="button" className="btn btn-primary btn-sm btn-block"> Connect </button>
                            </div>
                            <div className="col-6 pr-3 pl-1">
                              <button type="button" className="btn btn-outline-primary btn-sm btn-block"> <i className="feather-user-plus" /> Follow </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={img_p8} />
                            </div>
                            <div className="font-weight-bold">
                              <h6 className="font-weight-bold text-dark mb-0">Robert Cook</h6>
                              <div className="small text-black-50">Graphic Designer</div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p1} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p3} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p4} />
                            </div>
                            <span className="font-weight-bold small text-primary">4 mutual connections</span>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <button type="button" className="btn btn-primary btn-sm btn-block"> Connect </button>
                            </div>
                            <div className="col-6 pr-3 pl-1">
                              <button type="button" className="btn btn-outline-primary btn-sm btn-block"> <i className="feather-user-plus" /> Follow </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={img_p9} />
                            </div>
                            <div className="font-weight-bold">
                              <h6 className="font-weight-bold text-dark mb-0">Stella Bergmann</h6>
                              <div className="small text-black-50">Photography</div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-3 border-top border-bottom network-item-body">
                            <div className="overlap-rounded-circle">
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Sophia Lee" src={img_p5} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="John Doe" src={img_p6} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Julia Cox" src={img_p7} />
                              <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title="Robert Cook" src={img_p8} />
                            </div>
                            <span className="font-weight-bold small text-primary">4 mutual connections</span>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <button type="button" className="btn btn-primary btn-sm btn-block"> Connect </button>
                            </div>
                            <div className="col-6 pr-3 pl-1">
                              <button type="button" className="btn btn-outline-primary btn-sm btn-block"> <i className="feather-user-plus" /> Follow </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="p-3 w-100">
                  <h6>Soon in next free update</h6>
                </div>
              </div>
              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className="p-3 w-100">
                  <h6>Soon in next free update</h6>
                </div>
              </div>
              <div className="tab-pane fade" id="type" role="tabpanel" aria-labelledby="type-tab">
                <div className="p-3 w-100">
                  <h6>Soon in next free update</h6>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="col col-xl-3 order-xl-2 col-lg-12 order-lg-2 col-12">
          <div className="box mb-3 shadow-sm border rounded bg-white list-sidebar">
            <div className="box-title p-3">
              <h6 className="m-0">Manage my network</h6>
            </div>
            <ul className="list-group list-group-flush">
              <a  href="">
                <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-users mr-2 text-dark" /> Connections <span className="ml-auto font-weight-bold">68</span></li>
              </a>
              <a  href="">
                <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-book mr-2 text-dark" /> Contacts <span className="ml-auto font-weight-bold">869</span></li>
              </a>
              <a  href="">
                <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-user-check mr-2 text-dark" /> People I Follow <span className="ml-auto font-weight-bold">156</span></li>
              </a>
              <a  href="">
                <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-message-circle mr-2 text-dark" /> Groups <span className="ml-auto font-weight-bold">15</span></li>
              </a>
              <a  href="">
                <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-clipboard mr-2 text-dark" /> Page <span className="ml-auto font-weight-bold">3</span></li>
              </a>
              <a  href="">
                <li className="list-group-item pl-3 pr-3 d-flex align-items-center text-dark"><i className="feather-tag mr-2 text-dark" /> Hashtag <span className="ml-auto font-weight-bold">8</span></li>
              </a>
            </ul>
          </div>
          <div className="box shadow-sm mb-3 border rounded bg-white ads-box text-center">
            <div className="image-overlap-2 pt-4">
              <img src={img_l4} className="img-fluid rounded-circle shadow-sm"  alt="Responsive image" />
              <img src={img_user} className="img-fluid rounded-circle shadow-sm"  alt="Responsive image" />
            </div>
            <div className="p-3 border-bottom">
              <h6 className="text-dark">Gurdeep, grow your career by following <span className="font-weight-bold"> Askbootsrap</span></h6>
              <p className="mb-0 text-muted">Stay up-to industry trends!</p>
            </div>
            <div className="p-3">
              <button type="button" className="btn btn-outline-primary btn-sm pl-4 pr-4"> FOLLOW </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</div>
{/* Bootstrap core JavaScript */}
</>
  );
}

export default Feed;
