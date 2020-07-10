/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState} from 'react';
import { ReactTinyLink } from "react-tiny-link";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import moment from 'moment'
import '../../vendor/slick/slick.min.css'
import '../../vendor/slick/slick-theme.min.css'
import '../../vendor/icons/feather.css'
import '../../vendor/bootstrap/css/bootstrap.min.css'
import '../../css/style.css'

import '../../css/inputcamera.css'

import img_logo_svg from '../../img/logo.png'
import img_job1 from '../../img/job1.png'
import img_fav from '../../img/fav.png'
import api from '../../services/api'
import { useNavigate, useParams } from 'react-router';
import {MapContainer} from '../../style.js'
import AdSense from 'react-adsense';

function Feed() {

  const navigate = useNavigate()
  const [name,setName] = useState('')
  const [profile,setProfile] = useState([])
  const [text, setTextt] = useState('')
  const [avatar, setAvatar] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [username, setUsername] = useState('')
  const [comments, setComent] = useState([])
  const [like, setLike] = useState('')
  const [commentCount, setComentCount] = useState('')
  const [Text, setText] = useState('')
  const [isVideo, setIsVideo] = useState(false)
  const [link, setLink] = useState('')
  const [idd, setId] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [loading, setLoading] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/profileview')
      
      setProfile(response.data.profile)
    }
    
    loadSpots()
  }, [] )
  
  async function SearchValue(event){
    event.preventDefault()
    
    navigate(`/conections/${name}`)
  }

  useEffect(() => {
    async function Feed() {
      try{
      const response = await api.get(`/coments/postb/populate/${id}`)
      
      setAvatar(response.data.avatar)
      setUserAvatar(response.data.bussines.avatar)
      setUsername(response.data.bussines.nome)
      setComent(response.data.comments)
      setLike(response.data.likeCount)
      setComentCount(response.data.commentCount)
      setIsVideo(response.data.isVideo)
      setText(response.data.Text.Text)
      setId(response.data._id)
      setCreatedAt(response.data.createdAt)
      console.log(response.data)

      }catch(e){
      console.log(e)
      }
    }
    
    Feed()
  }, [] )

    


  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
  <meta name="description" content />
  <meta name="author" content />
  <title>Empregue.me</title>

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
      <li className="nav-item">
        <a className="nav-link" href="jobs.html"><i className="feather-briefcase mr-2" /><span className="d-none d-lg-inline">Empregos</span></a>
      </li>
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
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={userAvatar}/>
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{username}</div>
                    <div className="small text-gray-500">Patrocinado</div>
                  </div>
                  <span className="ml-auto small">{moment(createdAt).fromNow()}</span>
                </div>
                <div className="p-3 border-bottom osahan-post-body">
                  <p>{Text}</p>
                  { isVideo
                  ? <video width="100%" height="100%" controls>
                  <source src={avatar ? avatar : null} type="video/ogg"/>
                  </video>
                  : <img src={avatar ? avatar : null}
                  className="img-fluid"
                  style={{width:'100%',height:'100%'}}
                  />
                  }
                  </div>
                <form 
                onClick={
                  async function Like(event){
                  event.preventDefault()
                    await api.post(`/postb/likes/${idd}`)
                  }
                }
                className="p-3 border-bottom osahan-post-footer"
                >
                <button  
                style={{background:'none',border:'none'}}
                className="mr-3 text-secondary"
                ><i className="feather-heart text-danger" />
                {like}</button> 
                <i className="feather-message-square" />{commentCount}
                <button 
                onClick={
                  async function Share(event){
                    try{
                    event.preventDefault()
                    await api.post(`/postb/share/${id}`)
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
                {comments.map(comments => (
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
                  try {
                  event.preventDefault()
                  setLoading(true)
                  await api.post(`/postbussines/coment/${idd}`,{
                    text
                  })
                  setTextt('')
                  setLoading(false)
                } catch (error) {
                  setLoading(false)
                  toast.error('Ops,houve um erro ao comentar esse post')
                }
                }} >
                  <input 
                  placeholder="Adicionar Comentario..." 
                  className="form-control border-0 p-0 shadow-none" 
                  defaultValue={""}
                  value={text}
                  onChange={event => setTextt(event.target.value)}
                  />
                  <button style={{border:'none',background:'none',marginLeft:'90%',color:'cornflowerblue',fontWeight:'bold'}}>{loading ? 'Comentando...' : 'Enviar'}</button>
                </form>
              </div>
        </main>
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
          <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden">
          <MapContainer>
          <AdSense.Google
            client='ca-pub-7292810486004926'
            slot='7806394673'
            style={{ width: 500, height: 300, float: 'left' }}
            format=''
          />       
          </MapContainer>     
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

