/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import img_logo_svg from '../img/logo.png'
import img_p13 from '../img/p13.png'
import img_p1 from '../img/p1.png'
import img_p2 from '../img/p2.png'
import img_p3 from '../img/p3.png'
import img_p4 from '../img/p4.png'
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
  <nav className="navbar navbar-expand navbar-dark bg-primary osahan-nav-top p-0">
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
  <div className="bg-primary pt-5 pb-5">
    <div className="container">
      <div className="row">
        <div className="col-md-7 text-center mx-auto my-4">
          {/* Title */}
          <div className="mb-4">
            <h1 className="display-4 text-white mb-0">How can we <span className="font-weight-bold">help?</span></h1>
          </div>
          {/* End Title */}
          {/* Input */}
          <form className="input-group input-group-lg input-group-borderless mb-4">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white border-0" id="askQuestions">
                <span className="feather-search" />
              </span>
            </div>
            <input type="search" className="form-control border-0 shadow-none" placeholder="Ask a question" aria-label="Ask a question" aria-describedby="askQuestions" />
          </form>
          {/* End Input */}
          {/* Text/Links */}
          <p className="text-white">
            Popular help topics:
            <a className="text-info ml-1"  href="">pricing,</a>
            <a className="text-info ml-1"  href="">upgrade,</a>
            <a className="text-info ml-1"  href="">hosting,</a>
            <a className="text-info ml-1"  href="">membership</a>
          </p>
          {/* End Text/Links */}
        </div>
      </div>
    </div>
  </div>
  <div className="py-4">
    <div className="container mx-auto col-md-8">
      <div className="row">
        {/* Main Content */}
        <div className="col-md-6">
          <div className="box shadow-sm border rounded bg-white mb-4">
            <div className="p-4 d-flex align-items-center">
              <i className="feather-message-circle display-4" />
              <div className="ml-4">
                <h5 className="font-weight-normal text-dark mb-3 mt-0">Help Forum</h5>
                <p className="mb-0 text-muted">Find the answer to any question, from the basics all the way to advanced tips and tricks!
                  ...
                </p>
              </div>
            </div>
            <div className="overflow-hidden border-top d-flex align-items-center p-4">
              <a className="font-weight-bold d-block"  href=""> Osahanin Help Forum. </a>
              <i className="feather-arrow-right-circle ml-auto text-primary" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="box shadow-sm border rounded bg-white mb-4">
            <div className="p-4 d-flex align-items-center">
              <i className="feather-lock display-4" />
              <div className="ml-4">
                <h5 className="font-weight-normal text-dark mb-3 mt-0">Safety Center
                </h5>
                <p className="mb-0 text-muted">Want to learn more about setting up and managing your team? Look no further!
                  ...
                </p>
              </div>
            </div>
            <div className="overflow-hidden border-top d-flex align-items-center p-4">
              <a className="font-weight-bold d-block"  href=""> Osahanin Safety Center. </a>
              <i className="feather-arrow-right-circle ml-auto text-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {/* Main Content */}
        <div className="col-md-12">
          <div id="basics">
            {/* Title */}
            <div className="mb-3 mt-0">
              <h4 className="font-weight-semi-bold">Basics</h4>
            </div>
            {/* End Title */}
            {/* Basics Accordion */}
            <div id="basicsAccordion">
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="basicsHeadingOne">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3 collapsed" data-toggle="collapse" data-target="#basicsCollapseOne" aria-expanded="false" aria-controls="basicsCollapseOne">
                      Do you have any built-in caching?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseOne" className="collapse" aria-labelledby="basicsHeadingOne" data-parent="#basicsAccordion" style={{}}>
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="basicsHeadingTwo">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#basicsCollapseTwo" aria-expanded="false" aria-controls="basicsCollapseTwo">
                      Can I add/upgrade my plan at any time?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseTwo" className="collapse" aria-labelledby="basicsHeadingTwo" data-parent="#basicsAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="basicsHeadingThree">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#basicsCollapseThree" aria-expanded="false" aria-controls="basicsCollapseThree">
                      What access comes with my hosting plan?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseThree" className="collapse" aria-labelledby="basicsHeadingThree" data-parent="#basicsAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="basicsHeadingFour">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#basicsCollapseFour" aria-expanded="false" aria-controls="basicsCollapseFour">
                      How do I change my password?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="basicsCollapseFour" className="collapse" aria-labelledby="basicsHeadingFour" data-parent="#basicsAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Basics Accordion */}
          </div>
          <div id="syncing">
            {/* Title */}
            <div className="mb-3 mt-4">
              <h4 className="font-weight-semi-bold">Syncing</h4>
            </div>
            {/* End Title */}
            {/* Syncing Accordion */}
            <div id="syncingAccordion">
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="syncingHeadingOne">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3" data-toggle="collapse" data-target="#syncingCollapseOne" aria-expanded="false" aria-controls="syncingCollapseOne">
                      How does syncing work?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="syncingCollapseOne" className="collapse show" aria-labelledby="syncingHeadingOne" data-parent="#syncingAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="syncingHeadingTwo">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#syncingCollapseTwo" aria-expanded="false" aria-controls="syncingCollapseTwo">
                      How do I upload files from my phone or tablet?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="syncingCollapseTwo" className="collapse" aria-labelledby="syncingHeadingTwo" data-parent="#syncingAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="syncingHeadingThree">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#syncingCollapseThree" aria-expanded="false" aria-controls="syncingCollapseThree">
                      How do I link to a file or folder?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="syncingCollapseThree" className="collapse" aria-labelledby="syncingHeadingThree" data-parent="#syncingAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Syncing Accordion */}
          </div>
          <div id="account">
            {/* Title */}
            <div className="mb-3 mt-4">
              <h4 className="font-weight-semi-bold">Account</h4>
            </div>
            {/* End Title */}
            {/* Account Accordion */}
            <div id="accountAccordion">
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="accountHeadingOne">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3" data-toggle="collapse" data-target="#accountCollapseOne" aria-expanded="false" aria-controls="accountCollapseOne">
                      How do I change my password?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="accountCollapseOne" className="collapse show" aria-labelledby="accountHeadingOne" data-parent="#accountAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="accountHeadingTwo">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseTwo" aria-expanded="false" aria-controls="accountCollapseTwo">
                      How do I delete my account?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="accountCollapseTwo" className="collapse" aria-labelledby="accountHeadingTwo" data-parent="#accountAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="accountHeadingThree">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseThree" aria-expanded="false" aria-controls="accountCollapseThree">
                      How do I change my account settings?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="accountCollapseThree" className="collapse" aria-labelledby="accountHeadingThree" data-parent="#accountAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="accountHeadingFour">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#accountCollapseFour" aria-expanded="false" aria-controls="accountCollapseFour">
                      I forgot my password. How do I reset it?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="accountCollapseFour" className="collapse" aria-labelledby="accountHeadingFour" data-parent="#accountAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Account Accordion */}
          </div>
          <div id="privacy">
            {/* Title */}
            <div className="mb-3 mt-4">
              <h4 className="font-weight-semi-bold">Privacy</h4>
            </div>
            {/* End Title */}
            {/* Privacy Accordion */}
            <div id="privacyAccordion">
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="privacyHeadingOne">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn p-3" data-toggle="collapse" data-target="#privacyCollapseOne" aria-expanded="false" aria-controls="privacyCollapseOne">
                      Can I specify my own private key?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="privacyCollapseOne" className="collapse show" aria-labelledby="privacyHeadingOne" data-parent="#privacyAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="privacyHeadingTwo">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#privacyCollapseTwo" aria-expanded="false" aria-controls="privacyCollapseTwo">
                      My files are missing! How do I get them back?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="privacyCollapseTwo" className="collapse" aria-labelledby="privacyHeadingTwo" data-parent="#privacyAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="privacyHeadingThree">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#privacyCollapseThree" aria-expanded="false" aria-controls="privacyCollapseThree">
                      How can I access my privacy data?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="privacyCollapseThree" className="collapse" aria-labelledby="privacyHeadingThree" data-parent="#privacyAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
              {/* Card */}
              <div className="box shadow-sm border rounded bg-white mb-2">
                <div id="privacyHeadingFour">
                  <h5 className="mb-0">
                    <button className="shadow-none btn btn-block d-flex justify-content-between card-btn collapsed p-3" data-toggle="collapse" data-target="#privacyCollapseFour" aria-expanded="false" aria-controls="privacyCollapseFour">
                      How can I control if other search engines can link to my profile?
                      <span className="card-btn-arrow">
                        <span className="feather-chevron-down" />
                      </span>
                    </button>
                  </h5>
                </div>
                <div id="privacyCollapseFour" className="collapse" aria-labelledby="privacyHeadingFour" data-parent="#privacyAccordion">
                  <div className="card-body border-top p-3 text-muted">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
              {/* End Card */}
            </div>
            {/* End Privacy Accordion */}
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
