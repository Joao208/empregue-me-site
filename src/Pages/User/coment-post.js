/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState,useMemo} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import moment from 'moment'
import '../../vendor/slick/slick.min.css'
import '../../vendor/slick/slick-theme.min.css'
import '../../vendor/icons/feather.css'
import '../../vendor/bootstrap/css/bootstrap.min.css'
import '../../css/style.css'
import socketio from 'socket.io-client'

import '../../css/inputcamera.css'

import img_job1 from '../../img/job1.png'
import api from '../../services/api'
import { useNavigate, useParams } from 'react-router';
import {MapContainer} from '../../style.js'
import AdSense from 'react-adsense';
import Header from '../../components/Header';

function Feed() {

  const navigate = useNavigate()
  const [name,setName] = useState('')
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

  const user_id = sessionStorage.getItem('user_id') 

  const socket = useMemo(() => socketio('https://empregue-me-backend.herokuapp.com', {
        query: { user_id }
    }), [user_id])
   
    useEffect(() => {
      socket.on('like', (data) => {
        setAvatar(data.avatar)
        setUserAvatar(data.user.avatar)
        setUsername(data.user.name)
        setComent(data.comments)
        setLike(data.likeCount)
        setComentCount(data.commentCount)
        setIsVideo(data.isVideo)
        setText(data.Text.Text)
        setId(data._id)
        setCreatedAt(data.createdAt)
      })
    }, [socket])
    

  useEffect(() => {
    async function Feed() {
      try{
      const response = await api.get(`/coments/post/populate/${id}`)
      
      setAvatar(response.data.avatar)
      setUserAvatar(response.data.user.avatar)
      setUsername(response.data.user.name)
      setComent(response.data.comments)
      setLike(response.data.likeCount)
      setComentCount(response.data.commentCount)
      setIsVideo(response.data.isVideo)
      setText(response.data.Text.Text)
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
                    await api.post(`/likes/${idd}`)
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
                    await api.post(`/post/share/${id}`)
                    toast.success('Compartilhado ;)');
                    }catch(e){
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
                  await api.post(`/coment/${idd}`,{
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

