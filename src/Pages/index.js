/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState} from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import '../vendor/slick/slick.min.css'
import '../vendor/slick/slick-theme.min.css'
import '../vendor/icons/feather.css'
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../css/style.css'

import img_logo_svg from '../img/logo.png'
import img_p5 from '../img/p5.png'
import img_l1 from '../img/l1.png'
import img_l4 from '../img/l4.png'
import img_l7 from '../img/l7.png'
import img_p6 from '../img/p6.png'
import img_post1 from '../img/post1.png'
import img_p7 from '../img/p7.png'
import img_p13 from '../img/p13.png'
import img_chart from '../img/chart.png'
import img_job1 from '../img/job1.png'
import img_p8 from '../img/p8.png'
import img_p9 from '../img/p9.png'
import img_p10 from '../img/p10.png'
import img_p11 from '../img/p11.png'
import img_p12 from '../img/p12.png'
import img_l3 from '../img/l3.png'
import img_ads1 from '../img/ads1.png'
import img_fav from '../img/fav.png'
import img_user from '../img/user.png'
import img_p1 from '../img/p1.png'
import img_p2 from '../img/p2.png'
import img_p3 from '../img/p3.png'
import img_p4 from '../img/p4.png'
import api from '../services/api'

function Feed({history}) {
 const [profile, setProfile] = useState([])

  useEffect(() => {
    async function loadSpots() {
        const response = await api.get('/profileview')

        setProfile(response.data.profile)
        console.log(response.data.profile)
    }

    loadSpots()
}, [] )


  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href={img_fav} />
  <title>Empregue.me</title>

  <nav className="navbar navbar-expand navbar-dark bg-dark osahan-nav-top p-0">
    <div className="container">
      <a className="navbar-brand mr-2"  href="/"><img src={img_logo_svg} />
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
        {profile.map(profile => (
      <div key={profile._id} className="dropdown-list-image mr-3">
        <a href="profile"><img className="rounded-circle"  src={profile.user.avatar} /></a>
        <div className="status-indicator bg-success" />
      </div>
      ))}
      </ul>
    </div>
  </nav>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
            <ul className="nav nav-justified border-bottom osahan-line-tab" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><i className="feather-edit" /> Share</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="profile" role="tab" aria-controls="profile" aria-selected="false"><i className="feather-image" /> Upload a photo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false"><i className="feather-clipboard" /> Write an article</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="p-3 d-flex align-items-center w-100"  href="profile">
                  {profile.map(profile => (
                  <div key={profile._id} className="dropdown-list-image mr-3">
                   <a href="profile"><img className="rounded-circle" src={profile.user.avatar} /></a> 
                    <div className="status-indicator bg-success" />
                  </div>
                  ))}
                  <div className="w-100">
                    <textarea placeholder="Write your thoughts..." className="form-control border-0 p-0 shadow-none" rows={1} defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div className="p-3 w-100">
                  <textarea placeholder="Write your thoughts..." className="form-control border-0 p-0 shadow-none" rows={3} defaultValue={""} />
                </div>
              </div>
              <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                <div className="p-3 w-100">
                  <textarea placeholder="Write an article..." className="form-control border-0 p-0 shadow-none" rows={3} defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="border-top p-3 d-flex align-items-center">
              <div className="mr-auto"><a  href="profile" className="text-link small"><i className="feather-map-pin" /> Add Location</a></div>
              <div className="flex-shrink-1">
                <button type="button" className="btn btn-light btn-sm">Preview</button>
                <button type="button" className="btn btn-primary btn-sm">Post Status</button>
              </div>
            </div>
          </div>
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
              <p className="mb-0">Tmpo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a  href="profile">laboris consequat.</a></p>
            </div>
            <div className="p-3 border-bottom osahan-post-footer">
              <a  href="profile" className="mr-3 text-secondary"><i className="feather-heart text-danger" /> 16</a>
              <a  href="profile" className="mr-3 text-secondary"><i className="feather-message-square" /> 8</a>
              <a  href="profile" className="mr-3 text-secondary"><i className="feather-share-2" /> 2</a>
            </div>
            <div className="p-3">
              <button type="button" className="btn btn-outline-primary btn-sm mr-1">Awesome!!</button>
              <button type="button" className="btn btn-light btn-sm mr-1">😍</button>
              <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Whats it about?</button>
              <button type="button" className="btn btn-outline-secondary btn-sm mr-1">Oooo Great Wow</button>
            </div>
          </div>
          <div className="mb-3 shadow-sm rounded box bg-white osahan-slider-main">
            <div className="osahan-slider">
              <div className="osahan-slider-item">
                <a href="job-profile" >
                  <div className="shadow-sm border rounded bg-white job-item job-item mr-2 mt-3 mb-3">
                    <div className="d-flex align-items-center p-3 job-item-header">
                      <div className="overflow-hidden mr-2">
                        <h6 className="font-weight-bold text-dark mb-0 text-truncate">UI/UX designer</h6>
                        <div className="text-truncate text-primary">Envato</div>
                        <div className="small text-gray-500"><i className="feather-map-pin" /> India, Punjab</div>
                      </div>
                      <img className="img-fluid ml-auto" src={img_l1} />
                    </div>
                    <div className="d-flex align-items-center p-3 border-top border-bottom job-item-body">
                      <div className="overlap-rounded-circle d-flex">
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p1}   data-original-title="Sophia Lee" />
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p2}   data-original-title="John Doe" />
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p3}   data-original-title="Julia Cox" />
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p4}   data-original-title="Robert Cook" />
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p5}   data-original-title="Sophia Lee" />
                      </div>
                      <span className="font-weight-bold text-primary">18 connections</span>
                    </div>
                    <div className="p-3 job-item-footer">
                      <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                    </div>
                  </div>
                </a>
              </div>
              <div className="osahan-slider-item">
                <a href="job-profile" >
                  <div className="shadow-sm border rounded bg-white job-item job-item mr-2 mt-3 mb-3">
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
                      <div className="overlap-rounded-circle d-flex">
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p13}   data-original-title="Sophia Lee" />
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p1}   data-original-title="John Doe" />
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p2}   data-original-title="Julia Cox" />
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p3}   data-original-title="Robert Cook" />
                      </div>
                      <span className="font-weight-bold text-primary">18 connections</span>
                    </div>
                    <div className="p-3 job-item-footer">
                      <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
                    </div>
                  </div>
                </a>
              </div>
              <div className="osahan-slider-item">
                <a href="job-profile" >
                  <div className="shadow-sm border rounded bg-white job-item job-item mr-2 mt-3 mb-3">
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
                      <div className="overlap-rounded-circle d-flex">
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p12}   data-original-title="Sophia Lee" />
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p13}   data-original-title="John Doe" />
                        <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p2}   data-original-title="Julia Cox" />
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
              <p>Lorem ipsum dolor sit amet, consectetur 😍😎 adipisicing elit, sed do eiusmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco <a  href="profile">laboris consequat.</a></p>
              <img src={img_post1} className="img-fluid"  alt="Responsive image" />
            </div>
            <div className="p-3 border-bottom osahan-post-footer">
              <a  href="profile" className="mr-3 text-secondary"><i className="feather-heart text-danger" /> 16</a>
              <a  href="profile" className="mr-3 text-secondary"><i className="feather-message-square" /> 8</a>
              <a  href="profile" className="mr-3 text-secondary"><i className="feather-share-2" /> 2</a>
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
        </main>
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          {profile.map(profile => (
          <div key={profile._id} className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="py-4 px-3 border-bottom">
              <img style={{height:'130px',width:'130px'}} src={profile.user.avatar} className="img-fluid mt-2 rounded-circle"  alt="Responsive image" />
                <h5 className="font-weight-bold text-dark mb-1 mt-4">{profile.user.name}</h5>
              <p className="mb-0 text-muted">UI / UX Designer</p>
              <a href="https://dark-empregue-me.herokuapp.com/dark"><h5>Testar modo noturno</h5></a>
            </div>
            <div className="overflow-hidden border-top">
              <a className="font-weight-bold p-3 d-block" href="profile" > View my profile </a>
            </div>
          </div>
          ))}
          <div className="box mb-3 shadow-sm rounded bg-white view-box overflow-hidden">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Profile Views</h6>
            </div>
            <div className="d-flex text-center">
              <div className="col-6 border-right py-4 px-2">
                <h5 className="font-weight-bold text-info mb-1">08 <i className="feather-bar-chart-2" /></h5>
                <p className="mb-0 text-black-50 small">last 5 days</p>
              </div>
              <div className="col-6 py-4 px-2">
                <h5 className="font-weight-bold text-success mb-1">+ 43% <i className="feather-bar-chart" /></h5>
                <p className="mb-0 text-black-50 small">Since last week</p>
              </div>
            </div>
            <div className="overflow-hidden border-top text-center">
              <img src={img_chart} className="img-fluid"  alt="Responsive image" />
            </div>
          </div>
          <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center">
            <img src={img_job1} className="img-fluid"  alt="Responsive image" />
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
              <h6 className="m-0">People you might know</h6>
            </div>
            <div className="box-body p-3">
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p8} />
                  <div className="status-indicator bg-success" />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Sophia Lee</div>
                  <div className="small text-gray-500">Student at Harvard
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm"><i className="feather-user-plus" /></button>
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
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm"><i className="feather-user-plus" /></button>
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
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm"><i className="feather-user-plus" /></button>
                </span>
              </div>
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p11} />
                  <div className="status-indicator bg-success" />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Robert Cook</div>
                  <div className="small text-gray-500">Photographer at Photography
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm"><i className="feather-user-plus" /></button>
                </span>
              </div>
              <div className="d-flex align-items-center osahan-post-header people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_p12} />
                  <div className="status-indicator bg-success" />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">Richard Bell</div>
                  <div className="small text-gray-500">Graphic Designer at Envato
                  </div>
                </div>
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm"><i className="feather-user-plus" /></button>
                </span>
              </div>
            </div>
          </div>
          <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden">
            <img src={img_ads1} className="img-fluid"  alt="Responsive image" />
            <div className="p-3 border-bottom">
              <h6 className="font-weight-bold text-gold">Osahanin Premium</h6>
              <p className="mb-0 text-muted">Grow &amp; nurture your network</p>
            </div>
            <div className="p-3">
              <button type="button" className="btn btn-outline-gold pl-4 pr-4"> ACTIVATE </button>
            </div>
          </div>
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Jobs
              </h6>
            </div>
            <div className="box-body p-3">
              <a href="job-profile" >
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
              <a href="job-profile" >
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

