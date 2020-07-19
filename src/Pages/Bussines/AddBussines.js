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
import Header from '../../components/Header Bussines';

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
      const response = await api.get(`/coments/add/populate/${id}`)
      
      setAvatar(response.data.avatar)
      setUserAvatar(response.data.bussines.avatar)
      setUsername(response.data.bussines.nome)
      setComent(response.data.comments)
      setLike(response.data.likeCount)
      setComentCount(response.data.commentCount)
      setIsVideo(response.data.isVideo)
      setText(response.data.text.text)
      setLink(response.data.text.link)
      setId(response.data._id)
      setCreatedAt(response.data.createdAt)

      }catch(e){
      }
    }
    
    Feed()
  }, [] )

    


  return (
<>
<div>
  <Header></Header>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main style={{margin:'auto'}} className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
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
                   <a href="profile"><img className="rounded-circle" src={profile.bussines.avatar} /></a> 
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
                    await api.post('/bussines/check/location',{
                      longitude,
                      latitude
                    })
                    toast.success('Check-in postado ;)');
                    }catch(e){
                    }
                  }
                } className="text-link small"
                style={{border:'none',background:'none'}}
                >
                <i className="feather-map-pin" />Check-in</button>
              </form>
              <form className="mr-auto">
                <button className="text-link small"
                style={{border:'none',background:'none'}}
                onClick={
                  async function AddAdd(){
                    setAddAdd(true)
                  }
                }
                >
                <i className="feather-edit" />Promover minha empresa</button>
              </form>
              <label style={{color:'#008ef9',fontWeight:'600',margin:'auto'}}>
                <i className="feather-image"></i>
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

