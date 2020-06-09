/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState,useMemo} from 'react';
import { toast } from 'react-toastify';
import { ReactTinyLink } from "react-tiny-link";
import 'react-toastify/dist/ReactToastify.css';
 import '../App.css';
  import moment from 'moment'
import '../vendor/slick/slick.min.css'
import '../vendor/slick/slick-theme.min.css'
import '../vendor/icons/feather.css'
import '../vendor/bootstrap/css/bootstrap.min.css'
import '../css/style.css'
import '../inputcamera.css'
import Lottie from 'react-lottie'
import loadinganimate from '../loading.json'
import { Map, TileLayer, Marker } from 'react-leaflet'
import {MapContainer} from '../style'

import img_logo_svg from '../img/logo.png'
import img_p5 from '../img/p5.png'
import img_l1 from '../img/l1.png'
import img_job1 from '../img/job1.png'
import img_p1 from '../img/p1.png'
import img_ads1 from '../img/ads1.png'
import img_fav from '../img/fav.png'
import img_p2 from '../img/p2.png'
import img_p3 from '../img/p3.png'
import img_p4 from '../img/p4.png'
import api from '../services/api'
import { useNavigate } from 'react-router';

function Feed() {

  const history = useNavigate()
  
  const [profile, setProfile] = useState([])
  const [post, setPosts] = useState([])
  const [postb, setPostb] = useState([])
  const [add, setAdd] = useState([])
  const [check, setCheck] = useState([])
  const [checkb, setCheckb] = useState([])
  const [avatar, setAvatar] = useState(null)
  const [Text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [name,setName] = useState('')
  const [text, setTextt] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            setLatitude(latitude)
            setLongitude(longitude)
        },
        (error) => {
            console.log(error)
            toast.error('Não conseguimos obter sua localização :(')
        }
    )
})

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/profileview')
      
      setProfile(response.data.profile)
      console.log(response.data.profile)
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

      }catch(e){
      console.log(e)
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

      const response = await api.post('/posts', data)

      console.log(response)

      console.log(response.data)
      setLoading(false)
      toast.success('Postado ;)')
      setAvatar(null)
      setText('')
    } catch (e) {
      setLoading(false)
      toast.error('Ops!! Imagem invalida');
      console.log(e)
    }
  }
  const lottieOptions = {
    title:'loading',
    loop:true,
    autoplay:true,
    animationData:loadinganimate
  }

  async function SearchValue(event){
    event.preventDefault()
    
    history(`/conections/${name}`)
  }

  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href={img_fav} />
  <title>Empregue.me</title>

  <nav className="navbar navbar-expand navbar-dark bg-dark osahan-nav-top p-0">
    <div className="container">
      <a className="navbar-brand mr-2"  href="/"><img src={img_logo_svg} />
      </a>
      <form onSubmit={SearchValue} className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input 
          type="search"                   
          className="form-control shadow-none border-0" 
          placeholder='Buscar pessoas, vagas e empresas'
          aria-label="Search"
          value={name}
          onChange={event => setName(event.target.value)}
          aria-describedby="basic-addon2" />
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
              <form className="mr-auto">
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
                      console.log(e)
                    }
                  }
                } href="profile" className="text-link small"
                style={{border:'none',background:'none'}}
                >
                <i className="feather-map-pin" />Check-in</button>
              </form>
              <label style={{color:'#008ef9',fontWeight:'600',marginRight:'6px'}}>
                  Adicionar Imagem
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
          {check.map(check => (
          <div key={check.id} className="box shadow-sm border rounded bg-white mb-3 osahan-post">
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
            </div>
          </div>
          {post.map(postd => (
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
                <i className="feather-message-square" />{postd.commentCount}
                <button 
                onClick={
                  async function Share(event){
                    try{
                    event.preventDefault()
                    await api.post(`/post/share/${postd._id}`)
                    toast.success('Compartilhado ;)');
                    }catch(e){
                      console.log(e)
                      toast.error('Ops!! Não deu para compartilhar tente novamente');
                    }
                  }}
                className="mr-3 text-secondary" 
                style={{border:'none',background:'none',marginLeft:'8px'}}>
                  <i className="feather-share-2" /></button>
                </form>
                {postd.comments.map(comments => (
                <div className="p-3 d-flex align-items-top border-bottom osahan-post-comment">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={comments.avatar} alt />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{comments.username}<span className="float-right small">{moment(comments.createdAt).fromNow()}</span></div>
                    <div className="small text-gray-500">{comments.Text.text}</div>
                  </div>
                </div>
                ))}
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
                <div className="p-3 border-bottom osahan-post-body">
                  <p>{postd.text.text}</p>
                  <ReactTinyLink
                  cardSize="small"
                  showGraphic={true}
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
                </form>
              </div>
            ))}
            {postb.map(postd => (
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={postd.bussines.avatar} alt />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{postd.bussines.nome}</div>
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
                <i className="feather-message-square" />{postd.commentCount}
                <button 
                onClick={
                  async function Share(event){
                    try{
                    event.preventDefault()
                    await api.post(`/post/share/${postd._id}`)
                    toast.success('Compartilhado ;)');
                    }catch(e){
                      console.log(e)
                      toast.error('Ops!! Não deu para compartilhar tente novamente');
                    }
                  }}
                className="mr-3 text-secondary" 
                style={{border:'none',background:'none',marginLeft:'8px'}}>
                  <i className="feather-share-2" /></button>
                </form>
                {postd.comments.map(comments => (
                <div className="p-3 d-flex align-items-top border-bottom osahan-post-comment">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={comments.avatar} alt />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{comments.username}<span className="float-right small">{moment(comments.createdAt).fromNow()}</span></div>
                    <div className="small text-gray-500">{comments.Text.text}</div>
                  </div>
                </div>
                ))}
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
              <a className="font-weight-bold p-3 d-block" href="profile" >Ver meu perfil</a>
            </div>
          </div>
          ))}
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
              <h6 className="m-0">Pessoas que talvez você conheça</h6>
            </div>
            <div className="box-body p-3">
              <div className="d-flex align-items-center osahan-post-header mb-3 people-list">
                <div className="dropdown-list-image mr-3">
                  <img className="rounded-circle" src="https://api.adorable.io/avatars/285/abott@adorable.png" />
                  <div className="status-indicator bg-success" />
                </div>
                <div className="font-weight-bold mr-2">
                  <div className="text-truncate">joao</div>
                  <div className="small text-gray-500">Student at Harvard
                  </div>
                </div>
                <span className="ml-auto">
                  <button  
                  onClick={
                    async function Follow(event){
                    try{
                      event.preventDefault()
                      await api.post(`/follow/123456`)    
                    }catch(e){
                        toast.success('Uau, você fez novos amigos, isso aí ;)')
                        console.log(e)
                      }
                    }
                  }
                  type="button" 
                  className="btn btn-light btn-sm"
                  ><i className="feather-user-plus" /></button>
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

