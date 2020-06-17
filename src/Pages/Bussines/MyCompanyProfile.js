/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect,useState} from 'react';
import moment from 'moment'

 
  import Lottie from 'react-lottie'

import img_logo_svg from '../../img/logo.png'
import img_company from '../../img/company-profile.jpg'
import api from '../../services/api'
import EmptyAnimation from '../../Animations/empty.json'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

function Feed() {

  const [profile, setProfile] = useState([])
  const [add, setAdd] = useState([])
  const [post, setPost] = useState([])
  const [activity, setActivity] = useState([])
  const [data,setData] = useState('')
  const history = useNavigate()
  const [name,setName] = useState('')

  useEffect(() => {
    async function loadSpots() {
        const response = await api.get('/profilebussinesv')

        console.log(response.data)
        setProfile(response.data.profile)
        setAdd(response.data.add)
        setPost(response.data.post)
        setActivity(response.data.profile)
        setData(response.data)
        
    }

    loadSpots()
}, [] )

  async function Signout(event) {
    try{
      event.preventDefault()
      sessionStorage.clear()
      history.push('sign-in')
    }catch(e){
      console.log(e)
    }

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
    
    setProfile(response.data.profile)
  }
  
  loadSpots()
}, [] )

async function SearchValue(event){
  event.preventDefault()
  
  history(`/conections/${name}`)
}


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
      <a className="navbar-brand mr-2"  href="/"><img src={img_logo_svg} />
      </a>
      <form onSubmit={SearchValue} className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input 
          type="search"                   
          placeholder='Buscar pessoas, vagas e empresas'
          aria-label="Search"
          value={name}
          onChange={event => setName(event.target.value)}
          aria-describedby="basic-addon2" 
          className="form-control shadow-none border-0"
          />
          <div>
            <button className="btn" type="button">
              <i className="feather-search" />
            </button>
          </div>
          </div>
      </form>
      <ul className="navbar-nav ml-auto d-flex align-items-center">
      <li className="nav-item dropdown no-arrow d-sm-none">
        <a className="nav-link dropdown-toggle" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <form onSubmit={SearchValue} className="form-inline mr-auto w-100 navbar-search">
          <div className="input-group">
          <input 
          type="search"                   
          placeholder='Buscar pessoas, vagas e empresas'
          aria-label="Search"
          value={name}
          onChange={event => setName(event.target.value)}
          aria-describedby="basic-addon2" 
          className="form-control shadow-none border-0"
          />
          <div>
            <button className="btn" type="button">
              <i className="feather-search" />
            </button>
          </div>
          </div>
          </form>
        </a>
        <div className="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in" aria-labelledby="searchDropdown">
        </div>
      </li>
        {profile.map(profile => (
      <div key={profile._id} className="dropdown-list-image mr-3">
        <a href="profile"><img className="rounded-circle"  src={profile.bussines.avatar} /></a>
        <div className="status-indicator bg-success" />
      </div>
      ))}
      </ul>
    </div>
  </nav>
  {profile.map(profile => (
  <div className="profile-cover text-center">
    <img className="img-fluid" style={{width:'100%'}} src={profile.bussines.avatar ? profile.bussines.avatar : img_company} />
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
                {post
            ? post.map(postd => (
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={postd.user.avatar} alt />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{postd.user.name}</div>
                    <div className="small text-gray-500">Ui/Ux desing</div>
                  </div>
                  <span className="ml-auto small">{moment(postd.createdAt).fromNow()}</span>
                </div>
                <div className="p-3 border-bottom osahan-post-body">
                  <p>{postd.Text.Text}</p>
                  { postd.isVideo
                  ? <video width="100%" height="100%" controls>
                  <source src={postd.avatar ? postd.avatar : null} type="video/ogg"/>
                  </video>
                  : <img src={postd.avatar ? postd.avatar : null}
                  className="img-fluid"
                  style={{width:'100%',height:'100%'}}
                  />
                  }
                  </div>
                <div className="p-3 border-bottom osahan-post-footer">
                <a href="#" className="mr-3 text-secondary"><i className="feather-heart text-danger" />{postd.likeCount}</a>
                  <a href="#" className="mr-3 text-secondary"><i className="feather-message-square" /> 8</a>
                </div>
                <div className="p-3 d-flex align-items-top border-bottom osahan-post-comment">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={postd.user.avatar} alt />
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
              ))
            : <Lottie options={lottieOptions} 
            height='100%'
            width='100%'
            /> 
            }
            {add
            ? add.map(postd => (
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={postd.user.avatar} alt />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{postd.user.name}</div>
                    <div className="small text-gray-500">Ui/Ux desing</div>
                  </div>
                  <span className="ml-auto small">{moment(postd.createdAt).fromNow()}</span>
                </div>
                <div className="p-3 border-bottom osahan-post-body">
                  <p>{postd.Text.Text}</p>
                  { postd.isVideo
                  ? <video width="100%" height="100%" controls>
                  <source src={postd.avatar ? postd.avatar : null} type="video/ogg"/>
                  </video>
                  : <img src={postd.avatar ? postd.avatar : null}
                  className="img-fluid"
                  style={{width:'100%',height:'100%'}}
                  />
                  }
                  </div>
                <div className="p-3 border-bottom osahan-post-footer">
                <a href="#" className="mr-3 text-secondary"><i className="feather-heart text-danger" />{postd.likeCount}</a>
                  <a href="#" className="mr-3 text-secondary"><i className="feather-message-square" /> 8</a>
                </div>
                <div className="p-3 d-flex align-items-top border-bottom osahan-post-comment">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={postd.user.avatar} alt />
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
              ))
            : <Lottie options={lottieOptions} 
            height='100%'
            width='100%'
            /> 
            }
              </div>
            </div>
          </div>
        </main>
        {profile.map(profile => (
        <aside key={profile._id} className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="py-4 px-3 border-bottom">
              <img src={profile.bussines.avatar} className="img-fluid mt-2 rounded-circle" alt="Responsive image" style={{height: 130, width: 130}} />
              <h5 className="font-weight-bold text-dark mb-1 mt-4">{profile.bussines.nome}</h5>
              <p className="mb-0 text-muted">UI / UX Designer</p>
            </div>
            <div className="d-flex">
              <div className="col-6 border-right p-3">
                <h6 className="font-weight-bold text-dark mb-1">{data.followersCount}</h6>
                <p className="mb-0 text-black-50 small">Conexões</p>
              </div>
              <div className="col-6 p-3">
                <h6 className="font-weight-bold text-dark mb-1">{data.followingCount}</h6>
                <p className="mb-0 text-black-50 small">Seguindo</p>
              </div>
            </div>
            <form onSubmit={Signout} className="overflow-hidden border-top">
              <button className="font-weight-bold p-3 d-block" style={{textAlign: 'center', width: '100%', backgroundColor: 'white', color: 'blue', border: 'none'}}> Sair </button>
              <a href="/edit-company" className="font-weight-bold p-3 d-block">Editar Perfil</a>
            </form>
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
