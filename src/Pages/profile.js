/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect}  from 'react';
import moment from 'moment'
import white from '../img/white.PNG'

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import Button from 'react-bootstrap/Button'
import Lottie from 'react-lottie'
import api from '../services/api'
import img_logo_svg from '../img/logo.png'
import img_job1 from '../img/job1.png'
import img_l3 from '../img/l3.png'
import Modal from 'react-bootstrap/Modal'

import EmptyAnimation from '../empty.json'


function Feed({history},props) {
  
  const [post, setPost] = useState([])
  const [profile, setProfile] = useState([])
  const [data,setData] = useState('')
  const [sujestion, setSujestion] = useState([])
  const [latitude, setLatitude] = useState('')
  const [longitude,setLongitude] = useState('')
  const [name,setName] = useState('')
  const [qr, SetQr] = useState(false)

  async function SignOut(event) {
    sessionStorage.clear()
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            setLatitude(latitude)
            setLongitude(longitude)
        },
        (error) => {
            console.log(error)
        },
        {
            timeout: 30000
        }
    )
})

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
        setData(response.data)

    }
    loadSpots()
}, [] )

  async function SearchValue(event){
    event.preventDefault()
    
    history.push(`/conections/${name}`)
  }

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get(`/sujestions`,{
          params:{
            longitude,
            latitude
          }
        })
        setSujestion(response.data)
        console.log(response)
        console.log(response.data)
      } catch (e) {
        loadUsers()
      }
    }
    loadUsers()
  }, [])

  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
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
      <form onSubmit={SearchValue} className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input 
          type="text"                   
          value={name}
          onChange={event => setName(event.target.value)}
          className="form-control shadow-none border-0" 
          placeholder={`Search people`} 
          aria-label="Search" 
          aria-describedby="basic-addon2" />
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
            <form onSubmit={SignOut} className="overflow-hidden border-top">
              <button style={{textAlign:'center',width:'100%',backgroundColor:'white',color:'blue',border:'none'}} className="font-weight-bold p-3 d-block" > Sair </button>
              <a href="/edit-profile" className="font-weight-bold p-3 d-block">Editar Perfil</a>
            </form>
            <form onSubmit={setQr(true)} className="overflow-hidden border-top">
            <button style={{textAlign:'center',width:'100%',backgroundColor:'white',color:'blue',border:'none'}} className="font-weight-bold p-3 d-block" > Gerar QR Code </button>
            </form>
          </div>
          : <Lottie options={lottieOptions
          } 
          height='100%'
          width='100%'
          /> 
          ))}
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
        <aside class="col col-xl-3 order-xl-3 col-lg-12 order-lg-3 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Who viewed your profile</h6>
            </div>
            <div className="box-body p-3">
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="img/p4.png" alt />
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
                  <img className="rounded-circle" src="img/p9.png" alt />
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
                  <img className="rounded-circle" src="img/p10.png" alt />
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
                  <img className="rounded-circle" src="img/p11.png" alt />
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
                  <img className="rounded-circle" src="img/p12.png" alt />
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
          </aside>
          {
              !! qr && 
              <Modal
              {...props}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Modal heading
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                { profile.map(profile => (
                <img src={`https://chart.googleapis.com/chart?chs=150x150&amp;cht=qr&amp;chl=https://light-empregue-me.herokuapp.com/profileview/${profile._id}`} style={{height:'30%',width:'30%'}}/>
                ))}
                </Modal.Body>
              <Modal.Footer>
                <Button variant="success" onClick={setError(false)}>Fechar</Button>
              </Modal.Footer>
            </Modal>
            }

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
            {post.map(postd => (
              post
            ? <div key={postd._id} className="box-body p-3 border-bottom">
                <div className="d-flex align-items-top job-item-header pb-2">
                <div className="mr-2">
                <h6 className="font-weight-bold text-dark mb-0">{postd.user.name}</h6>
                <div className="small text-gray-500">{moment(postd.createdAt).fromNow()}</div>
                </div>
                <img className="img-fluid ml-auto mb-auto" style={{borderRadius:30}} src={postd.user.avatar ? postd.user.avatar : img_l3} />
                </div>
                <p className="mb-0">{postd.Text.Text}</p>
                <embed src={postd.avatar ? postd.avatar : white} width="100%" height="100%"/>
                <div className="p-3 border-bottom osahan-post-footer">
                  <a className="mr-3 text-secondary"><i className="feather-heart text-danger" />{postd.likes.lenght}</a>
                  <a href="#" className="mr-3 text-secondary"><i className="feather-message-square" /> 8</a>
                  <a href="#" className="mr-3 text-secondary"><i className="feather-share-2" /> 2</a>
                </div>
              </div>
            :  <Lottie options={lottieOptions}
            height='100%'
            width='100%'
            />
            ))}
          </div>
        </main>
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
