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

import '../../css/inputcamera.css'

import api from '../../services/api'
import { useParams } from 'react-router';
import socketio from 'socket.io-client'
import Header from '../../components/Header'

function Feed() {

  const [text, setTextt] = useState('')
  const [avatar, setAvatar] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [username, setUsername] = useState('')
  const [comments, setComent] = useState([])
  const [like, setLike] = useState('')
  const [commentCount, setComentCount] = useState('')
  const [Text, setText] = useState('')
  const [isVideo, setIsVideo] = useState(false)
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
        setUserAvatar(data.bussines.avatar)
        setUsername(data.bussines.nome)
        setComent(data.comments)
        setLike(data.likeCount)
        setComentCount(data.commentCount)
        setIsVideo(data.isVideo)
        setText(data.text.text)
        setId(data._id)
        setCreatedAt(data.createdAt)
      })
    }, [socket])
    
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
      setId(response.data._id)
      setCreatedAt(response.data.createdAt)

      }catch(e){
      }
    }
    
    Feed()
  }, [] )

  return (
<>
  <Header></Header>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main style={{margin:'auto'}} className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
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
                  <ReactTinyLink
                  cardSize="small"
                  showGraphic={false}
                  maxLine={2}
                  minLine={1}
                  url={'https://google.com'}
                  />
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
                    await api.post(`/likesadd/${idd}`)
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
                  await api.post(`/add/coment/${idd}`,{
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
</>
  );
}


export default Feed;

