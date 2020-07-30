/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect,useState} from 'react';
import moment from 'moment'

import api from '../../services/api'
import { useParams } from 'react-router';
import { ReactTinyLink } from "react-tiny-link";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Map, TileLayer, Marker } from 'react-leaflet'
import {MapContainer} from '../../style.js'
import Header from '../../components/Header';
import EmptyAnimation from '../../Animations/empty.json'
import Lottie from 'react-lottie';
import { loadStripe } from '@stripe/stripe-js';

function Feed() {

  const [profile, setProfile] = useState([])
  const [add, setAdd] = useState([])
  const [post, setPost] = useState([])
  const {id} = useParams()
  const [data,setData] = useState('')
  const [followed, setFollowed] = useState(false)
  const [text, setTextt] = useState('')
  const [postempty, setPostEmpty] = useState(true)
  const [addempty, setAddEmpty] = useState(true)
  const stripePromise = loadStripe("pk_live_51H7wkvGHhRYZj7pYIQuXMJJCurr3ygoPHrFnv41YMlxT6JNEuCgicn6XdGvegpocnNnlqGjY3756jNlTLoOPhVSr00QdkjqMGM");

  const handleClick = async (event) => {
    event.preventDefault()
    // Call your backend to create the Checkout session.
    const sessionId = sessionStorage.getItem('customer')

    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };
  useEffect(() => {
    async function loadSpots() {
        const response = await api.get(`/profilebussinesv/${id}`)

        setProfile(response.data.profile)
        setAdd(response.data.add)
        setPost(response.data.post)
        setData(response.data)

        if(response.data.post.length > 0){
          setPostEmpty(false)
        }

        if(response.data.post.length > 0){
          setAddEmpty(false)
        }
    }

    loadSpots()
}, [] )

const lottieOptions = {
  title:'loading',
  loop:true,
  autoplay:true,
  animationData:EmptyAnimation
}

async function Follow(event){
  event.preventDefault()

  await api.post(`/user/followb/${id}`)
  setFollowed(true)

}

async function Unfollow(event){
  event.preventDefault()

  await api.delete(`/user/unfollowb/${id}`)
  setFollowed(false)
}

useEffect(() => {
  async function followed() {
    const response = await api.get(`/followedb/${id}`)

    setFollowed(response.data.followed)

  }
  followed()
},[])

  return (
     <>
<div>
  <Header></Header>
  {profile.map(profile => (
  <div className="profile-cover text-center">
    <img className="img-fluid" style={{height:'250px'}} src={profile.bussines.avatar ? profile.bussines.avatar : 'https://serverem.s3.us-east-2.amazonaws.com/company-profile.jpg'} />
  </div>
  ))}
  <div className="bg-white shadow-sm border-bottom">
    <div className="container">
      <div className="row">
        {profile.map(profile => (
        <div key={profile._id} className="col-md-12">
          <div className="d-flex align-items-center py-3">
            <div className="profile-left">
              <h5 className="font-weight-bold text-dark mb-1 mt-0">{profile.bussines.nome}<span className="text-info"><i data-toggle="tooltip" data-placement="top" title="Verified" className="feather-check-circle" /></span></h5>
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
                    {profile.map(profile => (
                    <tbody>
                      <tr key={profile._id} className="border-bottom">
                        <th className="p-3">Website</th>
                        <td className="p-3"><a href="#">{profile.bussines.site}</a></td>
                      </tr>
                      {profile.bussines.cnpjI.atividade_principal.map(text => (
                      <tr className="border-bottom">
                        <th className="p-3">Atividade Principal</th>
                        <td className="p-3">{text.text}</td>
                      </tr>
                      ))}
                      <tr className="border-bottom">
                        <th className="p-3">Telefone</th>
                        <td className="p-3"><a href={`tel:${profile.bussines.cnpjI.telefone}`}>{profile.bussines.cnpjI.telefone}</a></td>
                      </tr>
                    </tbody>
                    ))}
                  </table>
                </div>
              </div>
              <div className="box shadow-sm border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                  <h6 className="m-0">Localização</h6>
                </div>
                {profile.map(profile => (
                <MapContainer>
                <Map center={[profile.bussines.location.coordinates[1],profile.bussines.location.coordinates[0]]} zoom={15} >
                    <TileLayer
                      attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[profile.bussines.location.coordinates[1],profile.bussines.location.coordinates[0]]} />
                  </Map>
                </MapContainer>
                ))}
              </div>
              <div className="box shadow-sm border rounded bg-white mb-3">
                <div className="box-title border-bottom p-3">
                  <h6 className="m-0">Publicaçoes</h6>
                </div>
                {add.map(postd => (
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                {addempty
                  ? <Lottie options={lottieOptions
                    } style={{height:'100%',width:'100%'}} 
                    height='20%'
                    width='20%'
                    />
                  : <div>
                <a href={`/company-profile/${postd.bussines._id}`}>
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={postd.bussines.avatar ? postd.bussines.avatar : 'https://api.adorable.io/avatars/285/abott@adorable.png'}/>
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{postd.bussines.nome}</div>
                    <div className="small text-gray-500">Patrocinado</div>
                  </div>
                  <span className="ml-auto small">{moment(postd.createdAt).fromNow()}</span>
                </div>
                </a>
                <div className="p-3 border-bottom osahan-post-body">
                  <p>{postd.text.text}</p>
                  <ReactTinyLink
                  cardSize="small"
                  showGraphic={false}
                  maxLine={2}
                  minLine={1}
                  url={postd.text.link}
                  />
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
                <form 
                onClick={
                  async function Like(event){
                  event.preventDefault()
                    await api.post(`/likesadd/${postd._id}`)
                  }
                }
                className="p-3 border-bottom osahan-post-footer"
                >
                <button  
                style={{background:'none',border:'none'}}
                className="mr-3 text-secondary"
                ><i className="feather-heart text-danger" />
                {postd.likeCount}</button> 
                <a href={`https://light-empregue-me.herokuapp.com/add/populate/${postd._id}`}><i className="feather-message-square" />{postd.commentCount}</a>
                </form>
                <form className="p-3" onSubmit={
                  async function Comentario(event){
                  event.preventDefault()
                  await api.post(`/add/coment/${postd._id}`,{
                    text
                  })
                }} >
                  <input 
                  placeholder="Adicionar Comentario..." 
                  className="form-control border-0 p-0 shadow-none" 
                  defaultValue={""}
                  value={text}
                  onChange={event => setTextt(event.target.value)}
                  />
                  <button style={{border:'none',background:'none',marginLeft:'90%',color:'cornflowerblue',fontWeight:'bold'}}>Enviar</button>
                </form>
              </div>
              }
              </div>
            ))}
            {post.map(postd => (
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                {postempty
                  ? <Lottie options={lottieOptions
                    } style={{height:'100%',width:'100%'}} 
                    height='20%'
                    width='20%'
                    />
                  : <div>
                <a href={`/company-profile/${postd.bussines._id}`}>
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={postd.bussines.avatar} alt />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{postd.bussines.nome}</div>
                    <div className="small text-gray-500"> </div>
                  </div>
                  <span className="ml-auto small">{moment(postd.createdAt).fromNow()}</span>
                </div>
                </a>
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
                <form 
                onClick={
                  async function Like(event){
                  event.preventDefault()
                    await api.post(`postb/likes/${postd._id}`)
                  }
                }
                className="p-3 border-bottom osahan-post-footer"
                >
                <button  
                style={{background:'none',border:'none'}}
                className="mr-3 text-secondary"
                ><i className="feather-heart text-danger" />
                {postd.likeCount}</button>
                <a href={`https://light-empregue-me.herokuapp.com/postb/populate/${postd._id}`}><i className="feather-message-square" />{postd.commentCount}</a>
                <button 
                onClick={
                  async function Share(event){
                    try{
                    event.preventDefault()
                    await api.post(`/postb/share/${postd._id}`)
                    toast.success('Compartilhado ;)');
                    }catch(e){
                      toast.error('Ops!! Não deu para compartilhar tente novamente');
                    }
                  }}
                className="mr-3 text-secondary" 
                style={{border:'none',background:'none',marginLeft:'8px'}}>
                  <i className="feather-share-2" /></button>
                </form>
                <form className="p-3" onSubmit={
                  async function Comentario(event){
                  event.preventDefault()
                  await api.post(`/postbussines/coment/${postd._id}`,{
                    text
                  })
                }} >
                  <input 
                  placeholder="Adicionar Comentario..." 
                  className="form-control border-0 p-0 shadow-none" 
                  defaultValue={""}
                  value={text}
                  onChange={event => setTextt(event.target.value)}
                  />
                  <button style={{border:'none',background:'none',marginLeft:'90%',color:'cornflowerblue',fontWeight:'bold'}}>Enviar</button>
                </form>
              </div>
              }
              </div>
            ))}
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
              <p className="mb-0 text-muted"> </p>
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
            {followed
            ?<form onSubmit={Unfollow} className="overflow-hidden border-top">
              <button style={{textAlign:'center',width:'100%',backgroundColor:'white',color:'blue',border:'none'}} className="font-weight-bold p-3 d-block" > Deixar de seguir </button>
            </form>
            :<form onSubmit={Follow} className="overflow-hidden border-top">
              <button style={{textAlign:'center',width:'100%',backgroundColor:'white',color:'blue',border:'none'}} className="font-weight-bold p-3 d-block" > Seguir </button>
            </form>          
            }
            </div>
        </aside>
        ))}
        {profile.map(profile => (
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
        {profile.user.Premium
          ? null
          : <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden">
          <a data-video="https://player.vimeo.com/video/174002812" href="#0" aria-controls="video-modal">
            <img src="https://landing-em.herokuapp.com/static/media/logo192.e5b20289.PNG" className="img-fluid" alt="Responsive image" />
          </a>
          <div className="p-3 border-bottom">
            <h6 className="font-weight-bold text-gold">Empregue.me Premium</h6>
            <p className="mb-0 text-muted">Ganhe 2 mêses grátis, Se destaque de outros concorrentes profissionais, e evolua mais rápido</p>
          </div>
          <div className="p-3">
            <button type="button" onClick={handleClick} className="btn btn-outline-gold pl-4 pr-4"> Contratar </button>
          </div>
        </div>
        }
        </aside>
        ))}
      </div>
    </div>
  </div>
  {/* Bootstrap core JavaScript */}
</div>
</>
);
}

export default Feed;
