/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect}  from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import Lottie from 'react-lottie'
import api from '../services/api'
import img_logo_svg from '../img/logo.png'
import img_l8 from '../img/l8.png'
import img_l4 from '../img/l4.png'
import img_l5 from '../img/l5.png'
import img_p13 from '../img/p13.png'
import img_job1 from '../img/job1.png'
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

import EmptyAnimation from '../empty.json'


function Feed() {

  const [post, setPost] = useState([])
  const [profile, setProfile] = useState([])

  async function SignOut(event) {
    sessionStorage.clear()
  }

  const lottieOptions = {
    title:'loading',
    loop:true,
    autoplay:true,
    animationData:EmptyAnimation
  }
  
  useEffect(() => {
    async function loadSpots() {
        const response = await api.get('/profileview')

        setPost(response.data.post)
        setProfile(response.data.profile)
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
  <link rel="icon" type="image/png" href="img/fav.png" />
  <title>Empregue.me Profile</title>
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
      </ul>
    </div>
  </nav>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <aside className="col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12">
         {profile.map(profile => (
           profile
          ? <div key={profile._id} className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="py-4 px-3 border-bottom">
          <img src={profile.user.avatar ? profile.user.avatar : img_l3} style={{height:130,width:130}} className="img-fluid mt-2 rounded-circle" alt="Responsive image" /> 
          <h5 className="font-weight-bold text-dark mb-1 mt-4">{profile.user.name}</h5>
              <p className="mb-0 text-muted">UI / UX Designer</p>
            </div>
            <form onSubmit={SignOut} className="overflow-hidden border-top">
              <button style={{textAlign:'center',width:'100%',backgroundColor:'white',color:'blue'}} className="font-weight-bold p-3 d-block" > Sair </button>
            </form>
          </div>
          : <Lottie options={lottieOptions
          } 
          height='100%'
          width='100%'
          /> 
          ))}
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Skills &amp; Endorsements</h6>
            </div>
            <div className="box-body">
              <div className="d-flex align-items-center osahan-post-header p-3 border-bottom people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_l4} />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">Character Concept <span className="badge badge-dark ml-1">1</span></div>
                  <div className="small text-muted"><span className="text-primary">You and 1 connection</span> have given endorsements for this skill
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center osahan-post-header p-3 border-bottom people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_l8} />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">Digital Painting <span className="badge badge-danger ml-1">6</span></div>
                  <div className="small text-muted"><span className="text-primary">Ask</span> has given an endorsement for this skill
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center osahan-post-header p-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={img_l5} />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">Adobe Photoshop <span className="badge badge-info ml-1">3</span></div>
                  <div className="small text-muted"><span className="text-primary">Julia Cox</span> has given an endorsement for this skill
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden">
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
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-2 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Sobre você</h6>
            </div>
            {profile.map(profile => (
            <div key={profile._id} className="box-body p-3">
              <p>{profile.user.bio}</p>
            </div>
            ))}
          </div>
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Publicacões</h6>
            </div>
            {post.map(post => (
              post
            ? <div key={post._id} className="box-body p-3 border-bottom">
              <div className="d-flex align-items-top job-item-header pb-2">
                <div className="mr-2">
            <h6 className="font-weight-bold text-dark mb-0">{post.user.name}</h6>
            <div className="small text-gray-500">{post.createdAt}</div>
                </div>
                <img className="img-fluid ml-auto mb-auto" style={{borderRadius:30}} src={post.user.avatar ? post.user.avatar : img_l3} />
              </div>
              <p className="mb-0">{post.Text.Text}</p>
              <img src={post.avatar} style={{width:'100%',height:'50%'}}/>
            </div>
            : <Lottie options={lottieOptions
            }
            height='100%'
            width='100%'
            />
            ))}
          </div>
        </main>
        <aside className="col col-xl-3 order-xl-3 col-lg-12 order-lg-3 col-12">
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
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm">Connent</button>
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
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm">Connent</button>
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
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm">Connent</button>
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
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm">Connent</button>
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
                <span className="ml-auto"><button type="button" className="btn btn-light btn-sm">Connent</button>
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
            <div className="shadow-sm border rounded bg-white job-item mb-3">
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
                  <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p2}   data-original-title="Julia Cox" />
                  <img className="rounded-circle shadow-sm" data-toggle="tooltip" data-placement="top" title src={img_p3}   data-original-title="Robert Cook" />
                </div>
                <span className="font-weight-bold text-muted">18 connections</span>
              </div>
              <div className="p-3 job-item-footer">
                <small className="text-gray-500"><i className="feather-clock" /> Posted 3 Days ago</small>
              </div>
            </div>
          </a>
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
