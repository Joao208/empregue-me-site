/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState,useMemo} from 'react';
import { ReactTinyLink } from "react-tiny-link";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from 'moment'
import '../../vendor/slick/slick.min.css'
import '../../vendor/slick/slick-theme.min.css'
import '../../vendor/icons/feather.css'
import '../../vendor/bootstrap/css/bootstrap.min.css'
import '../../css/style.css'
import Header from '../../components/Header'

import Lottie from 'react-lottie'
import { Map, TileLayer, Marker } from 'react-leaflet'
import '../../css/inputcamera.css'

import api from '../../services/api'
import loadinganimate from '../../Animations/lazyload.json'
import {MapContainer} from '../../style.js'
import { Link } from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js'

function Feed() {
  
  const [profile, setProfile] = useState([])
  const [post, setPosts] = useState([])
  const [postb, setPostb] = useState([])
  const [add, setAdd] = useState([])
  const [check, setCheck] = useState([])
  const [checkb, setCheckb] = useState([])
  const [avatar, setAvatar] = useState(null)
  const [Text, setText] = useState('')
  const [text, setTextt] = useState('')
  const [loading, setLoading] = useState(false)
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [jobs, setJobs] = useState([])
  const [sujestion, setSujestion] = useState([])
  const [lazy, setLazy] = useState(true)
  const [data, setData] = useState('')
  const stripePromise = loadStripe("pk_live_51H7wkvGHhRYZj7pYIQuXMJJCurr3ygoPHrFnv41YMlxT6JNEuCgicn6XdGvegpocnNnlqGjY3756jNlTLoOPhVSr00QdkjqMGM");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            setLatitude(latitude)
            setLongitude(longitude)
        },
        (error) => {
            toast.error('Não conseguimos obter sua localização :(')
        }
    )
})
const handleClick = async (event) => {
  event.preventDefault()
  // Call your backend to create the Checkout session.
  const response = await api.post('/subscription/user');
  // When the customer clicks on the button, redirect them to Checkout.
  const stripe = await stripePromise;
  await stripe.redirectToCheckout(response.data);
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `error.message`.
};

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/profileview')
      
      setProfile(response.data.profile)
      setData(response.data)
    }
    
    loadSpots()
  }, [] )
  
  useEffect(() => {
    async function Feed() {
      try{
      const response = await api.get('/feed')
      
      setPostb(response.data.postbussines)
      setPosts(response.data.posts)
      setAdd(response.data.adds)
      setCheck(response.data.checkuser)
      setCheckb(response.data.checkbussines)
      setJobs(response.data.jobs)
      setLazy(false)

      }catch(e){
      setLazy(false)
      }
    }
    
    Feed()
  }, [] )

    
    const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : null
  },[avatar])

  async function Post(event) {
    try {
      event.preventDefault()
      setLoading(true)
      const data = new FormData()

      data.append('avatar', avatar)
      data.append('Text', Text)

      await api.post('/posts', data)

      setLoading(false)
      toast.success('Postado ;)')
      setAvatar(null)
      setText('')
    } catch (e) {
      setLoading(false)
      toast.error('Ops!! Imagem invalida');
    }
  }


  useEffect(() => {
    async function Sujestion() {
      try {
  
        const response = await api.get('/sujestions',{
          params:{
            longitude,
            latitude
          }
        })

        setSujestion(response.data)

      } catch (e) {
      }
    }
    Sujestion()
  }, [latitude, longitude])

  const lottieOptions = {
    title:'loading',
    loop:true,
    autoplay:true,
    animationData:loadinganimate
  }


  return (
<>
<div>
  <Header></Header>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <form className="box shadow-sm border rounded bg-white mb-3 osahan-share-post" encType="multipart/form-data">
            <ul className="nav nav-justified border-bottom osahan-line-tab" id="myTab" role="tablist">
              <li className="nav-item">
                <a 
                className="nav-link active" 
                id="home-tab" 
                data-toggle="tab" 
                role="tab" 
                aria-controls="home" 
                aria-selected="true"
                ><i className="feather-edit" />Escrever</a>
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
                    <textarea 
                    placeholder="No que você está pensando..." 
                    className="form-control border-0 p-0 shadow-none" 
                    rows={1} 
                    defaultValue={""} 
                    value={Text}
                    onChange={event => setText(event.target.value)}  
                    />
                  </div>
                </div>
              </div>
              {!! avatar 
                  && <label
                  id="indexfile"
                  style={{ backgroundImage: `url(${preview})`}}
                  className={avatar ? 'has-avatar' : ''}
                  >
                  </label>
                  }
            </div>
            <div enc className="border-top p-3 d-flex align-items-center">
              <form style={{margin:'initial'}} className="mr-auto">
                <button onClick={
                  async function checkIn(event){
                    try{
                    event.preventDefault()
                    await api.post('/check/location',{
                      longitude,
                      latitude
                    })
                    toast.success('Check-in postado ;)');
                    }catch(e){
                    }
                  }
                } href="profile" className="text-link small"
                style={{border:'none',background:'none'}}
                >
                <i className="feather-map-pin" />Check-in</button>
              </form>
              <label style={{color:'#008ef9',fontWeight:'600',marginRight:'6px'}}>
                  Imagem
                <input style={{display:'none'}} type="file" onChange={event => {
                      setAvatar(event.target.files[0])}
                  }/>
              </label>
              <div className="flex-shrink-1">
                <form onSubmit={Post}>
                  <button className="btn btn-primary btn-block text-uppercase" type="submit" onClick={Post}>{loading ? 'Postando...' : 'Postar'}</button>
                </form>
              </div>
            </div>
          </form>
          {lazy
          ? <Lottie options={lottieOptions} 
            height='100%'
            width='100%'
            />
          : check.map(check => (
          <div key={check.id} className="box shadow-sm border rounded bg-white mb-3 osahan-post">
            <a href={`/profile/${check.user._id}`}>
            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src={check.user.avatar} />
                <div className="status-indicator bg-success" />
              </div>
              <div className="font-weight-bold">
                <div className="text-truncate">{check.user.name}</div>
                <div className="small text-gray-500">Product Designer at askbootstrap</div>
              </div>
              <span className="ml-auto small">{moment(check.createdAt).fromNow()}</span>
            </div>
            </a>
            <div className="p-3 border-bottom osahan-post-body">
            </div>
            <MapContainer>
              <Map center={[check.latitude, check.longitude]} zoom={15} >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[check.latitude, check.longitude]} />
              </Map>
            </MapContainer>
            </div>
          ))}
          {jobs.map(vacancies => (
            <div key={vacancies._id} className="mb-3 shadow-sm rounded box bg-white osahan-slider-main">
            <div className="osahan-slider">
              <div className="osahan-slider-item">
                  <div className="shadow-sm border rounded bg-white job-item job-item mr-2 mt-3 mb-3">
                    <div className="d-flex align-items-center p-3 job-item-header">
                      <div className="overflow-hidden mr-2">
                      <a href={`/job-profile/${vacancies._id}`}><h6 className="font-weight-bold text-dark mb-0 text-truncate" style={{textTransform:'capitalize'}}>{vacancies.title}</h6></a>
                        <a href={`/company-profile/${vacancies.bussines._id}`}><div className="text-truncate text-primary">{vacancies.bussines.nome ? vacancies.bussines.nome : ''}</div></a>
                        <div className="small text-gray-500"><i className="feather-map-pin" />{vacancies.text.city}</div>
                      </div>
                      <img className="img-fluid ml-auto" src={vacancies.avatar} />
                    </div>
                    <div className="p-3 job-item-footer">
                      <small className="text-gray-500"><i className="feather-clock" />{moment(vacancies.createdAt).fromNow()}</small>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          ))}
          {post.map(postd => (
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                <a href={`/profile/${postd.user._id}`}>
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={postd.user.avatar} alt />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{postd.user.name}</div>
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
                    await api.post(`/likes/${postd._id}`)
                  }
                }
                className="p-3 border-bottom osahan-post-footer"
                >
                <button  
                style={{background:'none',border:'none'}}
                className="mr-3 text-secondary"
                ><i className="feather-heart text-danger" />
                {postd.likeCount}</button>
                <Link to={`/post/populate/${postd._id}`}><i className="feather-message-square" />{postd.commentCount}</Link>
                <button 
                onClick={
                  async function Share(event){
                    try{
                    event.preventDefault()
                    await api.post(`/post/share/${postd._id}`)
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
                  await api.post(`/coment/${postd._id}`,{
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
            ))}
          {add.map(postd => (
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
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
                <Link to={`/add/populate/${postd._id}`}><i className="feather-message-square" />{postd.commentCount}</Link>
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
            ))}
            {postb.map(postd => (
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
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
                <Link to={`/postb/populate/${postd._id}`}><i className="feather-message-square" />{postd.commentCount}</Link>
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
            ))}
            {checkb.map(check => (
              <div key={check.id} className="box shadow-sm border rounded bg-white mb-3 osahan-post">
              <a href={`/company-profile/${check.bussines._id}`}>
              <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={check.bussines.avatar} />
                  <div className="status-indicator bg-success" />
                </div>
                <div className="font-weight-bold">
                  <div className="text-truncate">{check.bussines.nome}</div>
                  <div className="small text-gray-500">Product Designer at askbootstrap</div>
                </div>
                <span className="ml-auto small">{moment(check.createdAt).fromNow()}</span>
              </div>
              </a>
              <div className="p-3 border-bottom osahan-post-body">
              </div>
              <MapContainer>
              <Map center={[check.latitude, check.longitude]} zoom={15} >
                <TileLayer
                  attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Marker position={[check.latitude, check.longitude]} />
              </Map>
              </MapContainer>
              </div>
          ))}
        </main>
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          {profile.map(profile => (
          <div key={profile._id} className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="py-4 px-3 border-bottom">
            <img style={{height:'130px',width:'130px'}} src={profile.user.avatar} className="img-fluid mt-2 rounded-circle"  alt="Responsive image" />
            <h5 className="font-weight-bold text-dark mb-1 mt-4">{profile.user.name}</h5>
              <p className="mb-0 text-muted"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> </font></font></p>
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
            <div className="overflow-hidden border-top">
              <a className="font-weight-bold p-3 d-block" href="profile.html"><font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}> Ver meu perfil </font></font></a>
            </div>
          </div>
          ))}
        </aside>
        {profile.map(profile => (
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Pessoas que talvez você conheça</h6>
            </div>
            {sujestion.map(user => (
            <div key={user._id} className="box-body p-3">
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src={user.avatar}/>
                  <div className="status-indicator bg-success" />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">{user.name}</div>
                </div>
                <span className="ml-auto">
                  <button  
                  onClick={
                    async function Follow(event){
                    try{
                      event.preventDefault()
                      await api.post(`/follow/${user._id}`)   
                      toast.success('Uau, você fez novos amigos, isso aí ;)') 
                    }catch(e){
                      }
                    }
                  }
                  type="button" 
                  className="btn btn-light btn-sm"
                  ><i className="feather-user-plus" /></button>
                </span>
              </div>
            </div>
            ))}
          </div>
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
  {/* slick Slider JS*/}
  {/* Custom scripts for all pages*/}
</div>

</>
  );
}


export default Feed;

