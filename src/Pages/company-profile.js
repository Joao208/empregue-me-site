/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect,useState} from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import img_logo_svg from '../img/logo.png'
import img_company from '../img/company-profile.jpg'
import img_clogo from '../img/clogo.png'
import img_l3 from '../img/l3.png'
import api from '../services/api'

function Feed() {

  const [profile, setProfile] = useState([])
  const [add, setAdd] = useState([])
  const [post, setPost] = useState([])
  const [activity, setActivity] = useState([])

  useEffect(() => {
    async function loadSpots() {
        const response = await api.get('/profilebussinesv/5eb9f18e848e6f03bc1f75ee')

        setProfile(response.data.profile)
        setAdd(response.data.add)
        setPost(response.data.post)
        setActivity(response.data.profile)
        console.log(response.data.profile)
    }

    loadSpots()
}, [] )


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
      </ul>
    </div>
  </nav>
  {profile.map(profile => (
  <div className="profile-cover text-center">
    <img className="img-fluid" src={profile.bussines.avatar ? profile.bussines.avatar : img_company} />
  </div>
  ))}
  <div className="bg-white shadow-sm border-bottom">
    <div className="container">
      <div className="row">
        {profile.map(profile => (
        <div key={profile._id} className="col-md-12">
          <div className="d-flex align-items-center py-3">
            <div className="profile-left">
              <h5 className="font-weight-bold text-dark mb-1 mt-0">{profile.bussines.cnpjI.nome}<span className="text-info"><i data-toggle="tooltip" data-placement="top" title="Verified" className="feather-check-circle" /></span></h5>
              <p className="mb-0 text-muted">{profile.bussines.cnpjI.logradouro}</p>
            </div>
            <div className="profile-right ml-auto">
              <a href={profile.bussines.site} className="btn btn-light mr-2"> <i className="feather-external-link" /> Visit website </a>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  </div>
  <div className="pb-4 pt-3">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <div className="box shadow-sm border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                  <h6 className="m-0">Sobre</h6>
                </div>
                {profile.map(profile => (
                <div key={profile._id} className="box-body p-3">
                  <p className="mb-0">{profile.bussines.bio}
                  </p>
                </div>
                ))}
              </div>
              <div className="box shadow-sm border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                  <h6 className="m-0">Viso geral</h6>
                </div>
                <div className="box-body">
                  <table className="table table-borderless mb-0">
                    <tbody>
                    {profile.map(profile => (
                      <tr key={profile._id} className="border-bottom">
                        <th className="p-3">Website</th>
                        <td className="p-3"><a href="#">{profile.bussines.site}</a></td>
                      </tr>
                      ))}
                      {activity.map(activity => (
                      <tr key={activity._id} className="border-bottom">
                        <th className="p-3">Ramo</th>
                        <td className="p-3">{activity.bussines.ramo}</td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="box shadow-sm border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                  <h6 className="m-0">Publicaçoes</h6>
                </div>
                {post.map(post => (
                 <div key={post._id} className="box-body p-3 border-bottom">
                  <div className="d-flex align-items-top job-item-header pb-2">
                    <div className="mr-2">
                <h6 className="font-weight-bold text-dark mb-0">{post.bussines.name}</h6>
                <div className="small text-gray-500">{post.createdAt}</div>
                    </div>
                    <img className="img-fluid ml-auto mb-auto" style={{borderRadius:30}} src={post.bussines.avatar ? post.bussines.avatar : img_l3} />
                  </div>
                  <p className="mb-0">{post.Text.Text}</p>
                  <img src={post.avatar} style={{width:'100%',height:'50%'}}/>
                </div>
                ))}
                {add.map(add => (
                <div key={add._id} className="box-body p-3 border-bottom">
                  <div className="d-flex align-items-top job-item-header pb-2">
                    <div className="mr-2">
                <h6 className="font-weight-bold text-dark mb-0">{add.bussines.name}</h6>
                <div className="small text-gray-500">{add.createdAt}</div>
                    </div>
                    <img className="img-fluid ml-auto mb-auto" style={{borderRadius:30}} src={add.bussines.avatar ? add.bussines.avatar : img_l3} />
                  </div>
                  <p className="mb-0">{add.Text.Text}</p>
                  <img src={add.avatar} style={{width:'100%',height:'50%'}}/>
                </div>
                ))}
              </div>
            <div className="p-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="card overflow-hidden">
                    <img src={`http://maps.googleapis.com/maps/api/staticmap?center=-22.912869,-43.2289638
                    &zoom=15&markers=color:red|-22.909410,-43.2329548&size=250x250`} width="100%" height={150} frameBorder={0} style={{border: 0}} allowFullScreen />
                  </div>
                </div>
              </div></div>
            </div>
          </div>
        </main>
        {profile.map(profile => (
        <aside key={profile._id} className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="p-5">
              <img src={profile.bussines.avatar ? profile.bussines.avatar : img_clogo} className="img-fluid" alt="Responsive image" />
            </div>
            <div className="p-3 border-top border-bottom">
              <h6 className="font-weight-bold text-dark mb-1 mt-0">Visao geral</h6>
              <p className="mb-0 text-muted">{profile.bussines.bio}
              </p>
            </div>
          </div>
        </aside>
        ))}
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
          <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center">
          <div className="p-3">
              <button type="button" className="btn btn-outline-gold pl-4 pr-4"> Contratar Premiun </button>
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
