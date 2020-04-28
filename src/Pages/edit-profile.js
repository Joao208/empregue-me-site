/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import img_logo_svg from '../img/logo.png'
import img_p13 from '../img/p13.png'
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
  <nav className="navbar navbar-expand navbar-light bg-white border-bottom osahan-nav-top p-0">
    <div className="container">
      <a className="navbar-brand mr-2" href="index"><img src={img_logo_svg} />
      </a>
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
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <aside className="col-md-4">
          <div className="mb-3 border rounded bg-white profile-box text-center w-10">
            <div className="p-4 d-flex align-items-center">
              <img src={img_p13} className="img-fluid rounded-circle"  alt="Responsive image" />
              <div className="p-4">
                <label data-toggle="tooltip" data-placement="top" data-original-title="Upload New Picture" className="btn btn-info m-0" htmlFor="fileAttachmentBtn">
                  <i className="feather-image" />
                  <input id="fileAttachmentBtn" name="file-attachment" type="file" className="d-none" />
                </label>
                <button data-toggle="tooltip" data-placement="top" data-original-title="Delete" type="submit" className="btn btn-danger"><i className="feather-trash-2" /></button>
              </div>
            </div>
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">About</h6>
              <p className="mb-0 mt-0 small">Tell about yourself in two sentences.
              </p>
            </div>
            <div className="box-body">
              <div className="p-3 border-bottom">
                <div className="form-group mb-4">
                  <label className="mb-1">BIO</label>
                  <div className="position-relative">
                    <textarea className="form-control" rows={4} name="text" placeholder="Enter Bio" defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor :)"} />
                  </div>
                </div>
                <div className="form-group mb-0">
                  <label className="mb-1 w-100">SKILLS</label>
                  <div className="custom-control custom-checkbox d-inline mr-3">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">JavaScript, jQuery</label>
                  </div>
                  <div className="custom-control custom-checkbox d-inline">
                    <input type="checkbox" className="custom-control-input" id="customCheck2" />
                    <label className="custom-control-label" htmlFor="customCheck2">HTML5, CSS3</label>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden text-center p-3">
                <a className="font-weight-bold btn btn-light rounded p-3 d-block" href="#"> SAVE </a>
              </div>
            </div>
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Social profiles</h6>
              <p className="mb-0 mt-0 small">Add elsewhere links to your profile.
              </p>
            </div>
            <div className="box-body">
              <div className="p-3 border-bottom">
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-instagram position-absolute text-warning" />
                  <input placeholder="Add Instagram link" type="text" className="form-control" />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-facebook position-absolute text-primary" />
                  <input placeholder="Add Facebook link" type="text" className="form-control" />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-twitter position-absolute text-info" />
                  <input placeholder="Add Twitter link" type="text" className="form-control" />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-youtube position-absolute text-danger" />
                  <input placeholder="Add Youtube link" type="text" className="form-control" />
                </div>
                <div className="position-relative icon-form-control mb-0">
                  <i className="feather-github position-absolute text-dark" />
                  <input placeholder="Add Github link" type="text" className="form-control" />
                </div>
              </div>
              <div className="overflow-hidden text-center p-3">
                <a className="font-weight-bold btn btn-light rounded p-3 d-block" href="#"> Update Social Profiles </a>
              </div>
            </div>
          </div>
        </aside>
        <main className="col-md-8">
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Edit Basic Info</h6>
              <p className="mb-0 mt-0 small">Lorem ipsum dolor sit amet, consecteturs.
              </p>
            </div>
            <div className="box-body p-3">
              <form className="js-validate" noValidate="novalidate">
                <div className="row">
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="nameLabel" className="form-label">
                        Name
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input type="text" className="form-control" name="name" defaultValue="Gurdeep Osahan" placeholder="Enter your name" aria-label="Enter your name" required aria-describedby="nameLabel" data-msg="Please enter your name." data-error-class="u-has-error" data-success-class="u-has-success" />
                        <small className="form-text text-muted">Displayed on your public profile, notifications and other places.</small>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="usernameLabel" className="form-label">
                        Username
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input type="text" className="form-control" name="username" defaultValue="iamosahan" placeholder="Enter your username" aria-label="Enter your username" required aria-describedby="usernameLabel" data-msg="Please enter your username." data-error-class="u-has-error" data-success-class="u-has-success" />
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <label className="form-label">
                  Birth date
                  <span className="text-danger">*</span>
                </label>
                <div className="row">
                  {/* Input */}
                  <div className="col-md-6 mb-3 mb-sm-6">
                    <div className="js-form-message">
                      <div className="form-group">
                        <select className="form-control custom-select" required data-msg="Please select month." data-error-class="u-has-error" data-success-class="u-has-success">
                          <option value>Select month</option>
                          <option value="birthMonthSelect1">January</option>
                          <option value="birthMonthSelect2">February</option>
                          <option value="birthMonthSelect3">March</option>
                          <option value="birthMonthSelect4" selected="selected">April</option>
                          <option value="birthMonthSelect5">May</option>
                          <option value="birthMonthSelect6">June</option>
                          <option value="birthMonthSelect7">July</option>
                          <option value="birthMonthSelect8">August</option>
                          <option value="birthMonthSelect9">September</option>
                          <option value="birthMonthSelect10">October</option>
                          <option value="birthMonthSelect11">November</option>
                          <option value="birthMonthSelect12">December</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="col-sm-4 col-md-2 mb-3 mb-sm-6">
                    <div className="js-form-message">
                      <div className="form-group">
                        <select className="form-control custom-select" required data-msg="Please select date." data-error-class="u-has-error" data-success-class="u-has-success">
                          <option value>Select date</option>
                          <option value="birthDateSelect1">1</option>
                          <option value="birthDateSelect2">2</option>
                          <option value="birthDateSelect3">3</option>
                          <option value="birthDateSelect4">4</option>
                          <option value="birthDateSelect5">5</option>
                          <option value="birthDateSelect6">6</option>
                          <option value="birthDateSelect7">7</option>
                          <option value="birthDateSelect8">8</option>
                          <option value="birthDateSelect9">9</option>
                          <option value="birthDateSelect10">10</option>
                          <option value="birthDateSelect11">11</option>
                          <option value="birthDateSelect12" selected="selected">12</option>
                          <option value="birthDateSelect13">13</option>
                          <option value="birthDateSelect14">14</option>
                          <option value="birthDateSelect15">15</option>
                          <option value="birthDateSelect16">16</option>
                          <option value="birthDateSelect17">17</option>
                          <option value="birthDateSelect18">18</option>
                          <option value="birthDateSelect19">19</option>
                          <option value="birthDateSelect20">20</option>
                          <option value="birthDateSelect21">21</option>
                          <option value="birthDateSelect22">22</option>
                          <option value="birthDateSelect23">23</option>
                          <option value="birthDateSelect24">24</option>
                          <option value="birthDateSelect25">25</option>
                          <option value="birthDateSelect26">26</option>
                          <option value="birthDateSelect27">27</option>
                          <option value="birthDateSelect28">28</option>
                          <option value="birthDateSelect29">29</option>
                          <option value="birthDateSelect30">30</option>
                          <option value="birthDateSelect31">31</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="col-sm-4 col-md-2 mb-3 mb-sm-6">
                    <div className="js-form-message">
                      <div className="form-group">
                        <select className="form-control custom-select" required data-msg="Please select year." data-error-class="u-has-error" data-success-class="u-has-success">
                          <option value>Select year</option>
                          <option value="birthYearSelect1900">1900</option>
                          <option value="birthYearSelect1901">1901</option>
                          <option value="birthYearSelect1902">1902</option>
                          <option value="birthYearSelect1903">1903</option>
                          <option value="birthYearSelect1904">1904</option>
                          <option value="birthYearSelect1905">1905</option>
                          <option value="birthYearSelect1906">1906</option>
                          <option value="birthYearSelect1907">1907</option>
                          <option value="birthYearSelect1908">1908</option>
                          <option value="birthYearSelect1909">1909</option>
                          <option value="birthYearSelect1910">1910</option>
                          <option value="birthYearSelect1911">1911</option>
                          <option value="birthYearSelect1912">1912</option>
                          <option value="birthYearSelect1913">1913</option>
                          <option value="birthYearSelect1914">1914</option>
                          <option value="birthYearSelect1915">1915</option>
                          <option value="birthYearSelect1916">1916</option>
                          <option value="birthYearSelect1917">1917</option>
                          <option value="birthYearSelect1918">1918</option>
                          <option value="birthYearSelect1919">1919</option>
                          <option value="birthYearSelect1920">1920</option>
                          <option value="birthYearSelect1921">1921</option>
                          <option value="birthYearSelect1922">1922</option>
                          <option value="birthYearSelect1923">1923</option>
                          <option value="birthYearSelect1924">1924</option>
                          <option value="birthYearSelect1925">1925</option>
                          <option value="birthYearSelect1926">1926</option>
                          <option value="birthYearSelect1927">1927</option>
                          <option value="birthYearSelect1928">1928</option>
                          <option value="birthYearSelect1929">1929</option>
                          <option value="birthYearSelect1930">1930</option>
                          <option value="birthYearSelect1931">1931</option>
                          <option value="birthYearSelect1932">1932</option>
                          <option value="birthYearSelect1933">1933</option>
                          <option value="birthYearSelect1934">1934</option>
                          <option value="birthYearSelect1935">1935</option>
                          <option value="birthYearSelect1936">1936</option>
                          <option value="birthYearSelect1937">1937</option>
                          <option value="birthYearSelect1938">1938</option>
                          <option value="birthYearSelect1939">1939</option>
                          <option value="birthYearSelect1940">1940</option>
                          <option value="birthYearSelect1941">1941</option>
                          <option value="birthYearSelect1942">1942</option>
                          <option value="birthYearSelect1943">1943</option>
                          <option value="birthYearSelect1944">1944</option>
                          <option value="birthYearSelect1945">1945</option>
                          <option value="birthYearSelect1946">1946</option>
                          <option value="birthYearSelect1947">1947</option>
                          <option value="birthYearSelect1948">1948</option>
                          <option value="birthYearSelect1949">1949</option>
                          <option value="birthYearSelect1950">1950</option>
                          <option value="birthYearSelect1951">1951</option>
                          <option value="birthYearSelect1952">1952</option>
                          <option value="birthYearSelect1953">1953</option>
                          <option value="birthYearSelect1954">1954</option>
                          <option value="birthYearSelect1955">1955</option>
                          <option value="birthYearSelect1956">1956</option>
                          <option value="birthYearSelect1957">1957</option>
                          <option value="birthYearSelect1958">1958</option>
                          <option value="birthYearSelect1959">1959</option>
                          <option value="birthYearSelect1960">1960</option>
                          <option value="birthYearSelect1961">1961</option>
                          <option value="birthYearSelect1962">1962</option>
                          <option value="birthYearSelect1963">1963</option>
                          <option value="birthYearSelect1964">1964</option>
                          <option value="birthYearSelect1965">1965</option>
                          <option value="birthYearSelect1966">1966</option>
                          <option value="birthYearSelect1967">1967</option>
                          <option value="birthYearSelect1968">1968</option>
                          <option value="birthYearSelect1969">1969</option>
                          <option value="birthYearSelect1970">1970</option>
                          <option value="birthYearSelect1971">1971</option>
                          <option value="birthYearSelect1972">1972</option>
                          <option value="birthYearSelect1973">1973</option>
                          <option value="birthYearSelect1974">1974</option>
                          <option value="birthYearSelect1975">1975</option>
                          <option value="birthYearSelect1976">1976</option>
                          <option value="birthYearSelect1977">1977</option>
                          <option value="birthYearSelect1978">1978</option>
                          <option value="birthYearSelect1979">1979</option>
                          <option value="birthYearSelect1980">1980</option>
                          <option value="birthYearSelect1981">1981</option>
                          <option value="birthYearSelect1982">1982</option>
                          <option value="birthYearSelect1983">1983</option>
                          <option value="birthYearSelect1984">1984</option>
                          <option value="birthYearSelect1985">1985</option>
                          <option value="birthYearSelect1986" selected="selected">1986</option>
                          <option value="birthYearSelect1987">1987</option>
                          <option value="birthYearSelect1988">1988</option>
                          <option value="birthYearSelect1989">1989</option>
                          <option value="birthYearSelect1990">1990</option>
                          <option value="birthYearSelect1991">1991</option>
                          <option value="birthYearSelect1992">1992</option>
                          <option value="birthYearSelect1993">1993</option>
                          <option value="birthYearSelect1994">1994</option>
                          <option value="birthYearSelect1995">1995</option>
                          <option value="birthYearSelect1996">1996</option>
                          <option value="birthYearSelect1997">1997</option>
                          <option value="birthYearSelect1998">1998</option>
                          <option value="birthYearSelect1999">1999</option>
                          <option value="birthYearSelect2000">2000</option>
                          <option value="birthYearSelect2001">2001</option>
                          <option value="birthYearSelect2002">2002</option>
                          <option value="birthYearSelect2003">2003</option>
                          <option value="birthYearSelect2004">2004</option>
                          <option value="birthYearSelect2005">2005</option>
                          <option value="birthYearSelect2006">2006</option>
                          <option value="birthYearSelect2007">2007</option>
                          <option value="birthYearSelect2008">2008</option>
                          <option value="birthYearSelect2009">2009</option>
                          <option value="birthYearSelect2010">2010</option>
                          <option value="birthYearSelect2011">2011</option>
                          <option value="birthYearSelect2012">2012</option>
                          <option value="birthYearSelect2013">2013</option>
                          <option value="birthYearSelect2014">2014</option>
                          <option value="birthYearSelect2015">2015</option>
                          <option value="birthYearSelect2016">2016</option>
                          <option value="birthYearSelect2017">2017</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="col-sm-4 col-md-2 mb-2">
                    <div className="js-form-message">
                      <div className="form-group">
                        <select className="form-control custom-select" required data-msg="Please select your gender." data-error-class="u-has-error" data-success-class="u-has-success">
                          <option value="genderSelect1" selected>Male</option>
                          <option value="genderSelect2">Female</option>
                          <option value="genderSelect3">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="row">
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="emailLabel" className="form-label">
                        Email address
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input type="email" className="form-control" name="email" defaultValue="iamosahan@gmail.com" placeholder="Enter your email address" aria-label="Enter your email address" required aria-describedby="emailLabel" data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success" />
                        <small className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="locationLabel" className="form-label">
                        Location
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input type="text" className="form-control" name="location" defaultValue="Ludhiana, Punjab" placeholder="Enter your location" aria-label="Enter your location" required aria-describedby="locationLabel" data-msg="Please enter your location." data-error-class="u-has-error" data-success-class="u-has-success" />
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="row">
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="organizationLabel" className="form-label">
                        Organization
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input type="text" className="form-control" name="organization" defaultValue="Askbootsrap Ltd." placeholder="Enter your organization name" aria-label="Enter your organization name" required aria-describedby="organizationLabel" data-msg="Please enter your organization name" data-error-class="u-has-error" data-success-class="u-has-success" />
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="websiteLabel" className="form-label">
                        Website
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input className="form-control" type="url" name="website" defaultValue="https://askbootstrap.com/" placeholder="Enter your website" aria-label="Enter your website" required aria-describedby="websiteLabel" data-msg="Password enter a valid website" data-error-class="u-has-error" data-success-class="u-has-success" />
                        <small className="form-text text-muted">Your home page, blog or company site, e.g. http://example.com</small>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="row">
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="phoneNumberLabel" className="form-label">
                        Phone number
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input className="form-control" type="tel" name="phoneNumber" defaultValue="+91 85680 79956" placeholder="Enter your phone number" aria-label="Enter your phone number" required aria-describedby="phoneNumberLabel" data-msg="Please enter a valid phone number" data-error-class="u-has-error" data-success-class="u-has-success" />
                      </div>
                    </div>
                    <a className="d-inline-block u-text-muted" href="#">
                      <span className="mr-1">+</span>
                      Add phone number
                    </a>
                  </div>
                  {/* End Input */}
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label className="form-label">
                        Preferred language
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <select className="custom-select">
                          <option value>Select language</option>
                          <option value="languageSelect1" selected>English</option>
                          <option value="languageSelect2">Français</option>
                          <option value="languageSelect3">Deutsch</option>
                          <option value="languageSelect4">Português</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
              </form>
            </div>
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Experience
              </h6>
              <p className="mb-0 mt-0 small">Tell about your work, job, and other experiences.
              </p>
            </div>
            <div className="box-body px-3 pt-3 pb-0">
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <label id="FROM" className="form-label">FROM</label>
                  {/* Input */}
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="From" aria-label="FROM" aria-describedby="FROM" />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-sm-6 mb-4">
                  <label id="TO" className="form-label">TO</label>
                  {/* Input */}
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="TO" aria-label="TO" aria-describedby="TO" />
                  </div>
                  {/* End Input */}
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 mb-4">
                  <label id="companyLabel" className="form-label">Company</label>
                  {/* Input */}
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your company title" aria-label="Enter your company title" aria-describedby="companyLabel" />
                  </div>
                  {/* End Input */}
                </div>
                <div className="col-sm-6 mb-4">
                  <label id="positionLabel" className="form-label">Position</label>
                  {/* Input */}
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Enter your position" aria-label="Enter your position" aria-describedby="positionLabel" />
                  </div>
                  {/* End Input */}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 text-right">
            <a className="font-weight-bold btn btn-link rounded p-3" href="#"> &nbsp;&nbsp;&nbsp;&nbsp; Cancel &nbsp;&nbsp;&nbsp;&nbsp; </a>
            <a className="font-weight-bold btn btn-primary rounded p-3" href="#"> &nbsp;&nbsp;&nbsp;&nbsp;  Sava Chenges &nbsp;&nbsp;&nbsp;&nbsp; </a>
          </div>
        </main>
      </div>
    </div>
  </div>
</div>
{/* Bootstrap core JavaScript */}
</>
  );
}

export default Feed;
