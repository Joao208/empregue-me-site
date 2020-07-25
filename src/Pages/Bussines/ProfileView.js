/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect}  from 'react';
import moment from 'moment'
import {useParams} from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import Lottie from 'react-lottie'
import api from '../../services/api'
import EmptyAnimation from '../../Animations/empty.json'
import Header from '../../components/Header Bussines';
import FileList from '../../components/FileList'

function Feed() {
  
  const [post, setPost] = useState([])
  const [profile, setProfile] = useState([])
  const [data,setData] = useState('')
  const [followed, setFollowed] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState([])

  const lottieOptions = {
    title:'loading',
    loop:true,
    autoplay:true,
    animationData:EmptyAnimation
  }

  const {id} = useParams()
  
  useEffect(() =>{
  async function Curriculums(){
    const response = await api.get(`/curriculums/${id}`)

    setUploadedFiles(response.data.map(file => ({
        id: file._id,
        name: file.name,
        preview: file.url,
        uploaded: true,
        url: file.url
      }))
    );
  }
  Curriculums()
  })

  useEffect(() => {
    async function loadSpots() {
        const response = await api.get(`/profileview/${id}`)

        setPost(response.data.post)
        setProfile(response.data.profile)
        setData(response.data)

    }
    loadSpots()
}, [] )

useEffect(() => {
  async function followed() {
    const response = await api.get(`/followed/${id}`)

    setFollowed(response.data.followed)

  }
  followed()
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])


async function Follow(event){
  event.preventDefault()

  await api.post(`/bussines/follow/${id}`)
  setFollowed(true)

}

async function Unfollow(event){
  event.preventDefault()

  await api.delete(`/bussines/unfollow/${id}`)
  setFollowed(false)
}

  return (
<>
<div>
  <Header></Header>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <aside className="col col-xl-3 order-xl-1 col-lg-12 order-lg-1 col-12">
         {profile.map(profile => (
           profile
          ? <div key={profile._id} className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="py-4 px-3 border-bottom">
              <img src={profile.user.avatar ? profile.user.avatar : 'https://serverem.s3.us-east-2.amazonaws.com/l3.png'} style={{height:130,width:130}} className="img-fluid mt-2 rounded-circle" alt="Responsive image" /> 
              <h5 className="font-weight-bold text-dark mb-1 mt-4">{profile.user.name}</h5>
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
          : <Lottie options={lottieOptions
          } 
          height='100%'
          width='100%'
          /> 
          ))}
          <p>Aqui está os curriculos do usuario feito com o nosso <a href='https://generator-em.herokuapp.com/'>Gerador de curriculos</a></p>
          {!!uploadedFiles.length && (
            <FileList files={uploadedFiles} />
          )}
        </aside>
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
              <h6 className="m-0">Sobre</h6>
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
                    <div className="small text-gray-500"> </div>
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
