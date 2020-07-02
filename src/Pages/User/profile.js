/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect}  from 'react';
import moment from 'moment'
import {useNavigate} from 'react-router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Lottie from 'react-lottie'
import EmptyAnimation from '../../Animations/empty.json'
import api from '../../services/api'
import img_job1 from '../../img/job1.png'
import img_l3 from '../../img/l3.png'
import List from '../../components/FileList'
import DeletePost from '../../components/Posts'
import Header from '../../components/Header';
import App from '../../components/App/App';

function Feed() {
  
  const [post, setPost] = useState([])
  const [profile, setProfile] = useState([])
  const [data,setData] = useState('')
  const navigate = useNavigate()
  const [name,setName] = useState('')
  const [text, setTextt] = useState('')
  const [uploadedFiles, setUploadedFiles] = useState([])

  async function SignOut() {
    sessionStorage.clear()
  }

  useEffect(() => {
   async function Listd(){
    const response = await api.get('/curriculums')  
    setUploadedFiles(response.data.map(file => ({
          id: file._id,
          name: file.name,
          readableSize: file.size,
          preview: file.url,
          uploaded: true,
          url: file.url
        })));
    }
    Listd()
  },[])
  
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


  return (
<>
<div>
  <Header></Header>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        {profile
           ? profile.map(profile => (
        <aside className="col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12">
           <div key={profile._id} className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
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
          </div>
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
          <p>Coloque aqui o PDF gerado com o nosso <a href='https://generator-em.herokuapp.com/'>Gerador de curriculos</a></p>
          <App></App>
        </aside>
        ))
        : <Lottie options={lottieOptions} 
        height='100%'
        width='100%'
        /> 
        }
        {profile.map(profile => (
        <aside class="col col-xl-3 order-xl-3 col-lg-12 order-lg-3 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
            <div className="box shadow-sm border rounded bg-white mb-3">
              <div className="box-body p-3">
              <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center overflow-hidden">
              <img src={`https://chart.apis.google.com/chart?cht=qr&chl=https://light-empregue-me.herokuapp.com/profile/${profile.user._id}&chs=230x230`} className="img-fluid"  alt="Responsive image" />
              <div className="p-3 border-bottom">
              <h6 className="font-weight-bold text-dark">QR code do seu perfil {profile.user.name}</h6>
                  <p className="mb-0 text-muted">Use para apresentar seu perfil a seus amigos</p>
                </div>
              </div>                
              </div>
            </div>
            </div>
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Redes sociais</h6>
            </div>
            <div className="box-body">
              <div className="p-3 border-bottom">
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-instagram position-absolute text-warning" />
                  <p 
                  className="form-control" 
                  >
                  {
                    profile.user.FacebookUrl
                  }
                  </p>
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-facebook position-absolute text-primary" />
                  <p 
                  className="form-control" 
                  >
                  {
                    profile.user.InstagramUrl
                  }
                  </p>
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-twitter position-absolute text-info" />
                  <p 
                  className="form-control" 
                  >
                  {
                    profile.user.TwitterUrl
                  }
                  </p>
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-youtube position-absolute text-danger" />
                  <p 
                  className="form-control" 
                  >
                  {
                    profile.user.YouTubeUrl
                  }
                  </p>
                </div>
                <div className="position-relative icon-form-control mb-0">
                  <i className="feather-github position-absolute text-dark" />
                  <p 
                  className="form-control" 
                  >
                  {
                    profile.user.GithubUrl
                  }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        ))}
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
              <div className="box mb-3 shadow-sm border rounded bg-white osahan-post">
                <a href={`/profile/${postd.user._id}`}>
                <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                  <div className="dropdown-list-image mr-3">
                    <img className="rounded-circle" src={postd.user.avatar} alt />
                    <div className="status-indicator bg-success" />
                  </div>
                  <div className="font-weight-bold">
                    <div className="text-truncate">{postd.user.name}</div>
                    <div className="small text-gray-500">Ui/Ux desing</div>
                  </div>
                  <span className="ml-auto small">{moment(postd.createdAt).fromNow()}</span><DeletePost></DeletePost>
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
                <a href={`https://light-empregue-me.herokuapp.com/post/populate/${postd._id}`}><i className="feather-message-square" />{postd.commentCount}</a>
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
