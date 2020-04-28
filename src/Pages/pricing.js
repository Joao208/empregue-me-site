/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import img_logo_svg from '../img/logo.png'
import img_p1 from '../img/p1.png'
import img_p2 from '../img/p2.png'
import img_p3 from '../img/p3.png'
import img_p4 from '../img/p4.png'
import img_p13 from '../img/p13.png'
import img_user from '../img/user.png'



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
  <nav className="navbar navbar-expand navbar-light bg-white osahan-nav-top p-0">
    <div className="container">
      <a className="navbar-brand mr-2" href="index"><img src={img_logo_svg} />
      </a>
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
  <div className="py-5 bg-primary">
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center py-5">
          <h1 className="text-white font-weight-light mt-0">Find the <span className="font-weight-bold">right plan</span> for your site</h1>
          <p className="mb-4 text-white-50">Last modified: March 27, 202 (view archived versions)
          </p>
          <button type="button" className="btn btn-lg btn-outline-light">Monthly</button>
          <button type="button" className="btn btn-lg btn-outline-light">Yearly <span className="badge badge-pill badge-warning">50%</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="border-0 box shadow-sm card rounded">
            {/* Header */}
            <header className="card-header text-center p-5 border-0">
              <h4 className="h6 text-danger mb-2">Starter</h4>
              <span className="d-block">
                <span className="display-4 text-dark font-weight-normal">
                  <span className="small">$</span>199
                </span>
                <span className="d-block text-secondary">Per Year</span>
              </span>
            </header>
            {/* End Header */}
            {/* Content */}
            <div className="card-body p-4">
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> Community support</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-x text-danger mr-1" /> 400+ pages</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-x text-danger mr-1" /> 100+ header variations</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-x text-danger mr-1" /> 20+ home page options</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-x text-danger mr-1" /> Priority Support</li>
              </ul>
              <button type="button" className="btn btn-block btn-light" tabIndex={0}>Contact Us</button>
            </div>
            {/* End Content */}
          </div>
        </div>
        <div className="col-md-3">
          <div className="border-0 box shadow-sm card rounded">
            {/* Header */}
            <header className="card-header text-center p-5 border-0">
              <h4 className="h6 text-warning mb-2">Basic</h4>
              <span className="d-block">
                <span className="display-4 text-dark font-weight-normal">
                  <span className="small">$</span>399
                </span>
                <span className="d-block text-secondary">Per Year</span>
              </span>
            </header>
            {/* End Header */}
            {/* Content */}
            <div className="card-body p-4">
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> Community support</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> 400+ pages</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> 100+ header variations</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-x text-danger mr-1" /> 20+ home page options</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-x text-danger mr-1" /> Priority Support</li>
              </ul>
              <button type="button" className="btn btn-block btn-light" tabIndex={0}>Subscribe</button>
            </div>
            {/* End Content */}
          </div>
        </div>
        <div className="col-md-3">
          <div className="border-0 box shadow-sm card rounded">
            {/* Header */}
            <header className="card-header text-center p-5 border-0">
              <h4 className="h6 text-success mb-2">Company</h4>
              <span className="d-block">
                <span className="display-4 text-dark font-weight-normal">
                  <span className="small">$</span>1099
                </span>
                <span className="d-block text-secondary">Per Year</span>
              </span>
            </header>
            {/* End Header */}
            {/* Content */}
            <div className="card-body p-4">
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> Community support</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> 400+ pages</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> 100+ header variations</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> 20+ home page options</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-x text-danger mr-1" /> riority Support</li>
              </ul>
              <button type="button" className="btn btn-block btn-light" tabIndex={0}>Subscribe</button>
            </div>
            {/* End Content */}
          </div>
        </div>
        <div className="col-md-3">
          <div className="border-0 box shadow-sm card rounded">
            {/* Header */}
            <header className="card-header text-center p-5 border-0">
              <h4 className="h6 text-danger mb-2">Enterprise</h4>
              <span className="d-block">
                <span className="display-4 text-dark font-weight-normal">
                  Help
                </span>
                <span className="d-block text-secondary font-size-1">no user limit</span>
              </span>
            </header>
            {/* End Header */}
            {/* Content */}
            <div className="card-body p-4">
              <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> Community support</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> 400+ pages</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> 100+ header variations</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> 20+ home page options</li>
                <li className="list-group-item py-2 px-0 border-0"><i className="feather-check text-success mr-1" /> riority Support</li>
              </ul>
              <button type="button" className="btn btn-block btn-primary" tabIndex={0}>Contact Us</button>
            </div>
            {/* End Content */}
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer className="bg-light py-4">
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        {/* Copyright */}
        <p className="small text-muted mb-0">© Osahanin. 2020 Askbootstrap.</p>
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
  {/* Bootstrap core JavaScript */}
  {/* slick Slider JS*/}
  {/* Custom scripts for all pages*/}
</div>

</>
  );
}

export default Feed;
