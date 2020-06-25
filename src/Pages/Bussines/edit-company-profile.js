import React,{useState,useEffect,useMemo} from 'react';
import {useNavigate} from 'react-router'
 
  
import img_logo_svg from '../../img/logo.png'
import imguser from '../../img/user.png'
import api from '../../services/api'
 
import Lottie from 'react-lottie'
import loadinganimate from '../../Animations/loading.json'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Feed() {
  const [user, setUser] = useState([])

  const [avatar, setAvatar] = useState(null)
  const [bio, setBio] = useState('')
  const [site, setSite] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : null
  },[avatar])

  async function CreateProfile(event) {
    event.preventDefault()
    setLoading(true)
    try{
    const data = new FormData()

        data.append('avatar', avatar)
        data.append('bio', bio)
        data.append('site', site)
       
       const response = await api.post('/profilebussines', data)

       console.log(response)

       const profile_id = response.data

       sessionStorage.getItem('profile_id', profile_id)

        navigate('/mycompany-profile')
    }catch{
      setLoading(false)
      toast.error('Falha ao editar o perfil, verifique seus dados');

    }
  }

  useEffect(() => {
    try{
    async function loadSpots() {
      const response = await api.get('/mybussines')

        setUser(response.data)

        console.log(response)
        console.log(typeof response.data)
    }

    loadSpots()
  }catch{
    navigate('/sign-in')
  }
}, [] )

const lottieOptions = {
  title:'loading',
  loop:true,
  autoplay:true,
  animationData:loadinganimate
}


  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
  <meta name="description" content />
  <meta name="author" content />
    <title>Empregue.me | Profile</title>
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
  <nav className="navbar navbar-expand navbar-light bg-white border-bottom osahan-nav-top p-0">
    <div className="container">
      <a className="navbar-brand mr-2" href="index"><img src={img_logo_svg} />
      </a>
    </div>
  </nav>
  <form onSubmit={CreateProfile} className="py-4" encType="multipart/form-data">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <aside className="col-md-4">
          <div className="mb-3 border rounded bg-white profile-box text-center w-10">
            <div className="p-4 d-flex align-items-center">
            <label
                id="avatar"
                style={{ backgroundImage: `url(${preview})`}}
                className={avatar ? 'has-avatar' : ''}
                >
                  <input 
                  id="fileAttachmentBtn" 
                  name="file-attachment"                   
                  className="d-none"
                  type="file" 
                  onChange={event => {
                    setAvatar(event.target.files[0])}
                 }/>
                 { user.map(user => (
                 <img src={user.avatar ? user.avatar : imguser } style={{borderRadius:'30px',width:'100%',height:'100%'}} />
                 ))}    
              </label>
             {  /* <button data-toggle="tooltip" data-placement="top" data-original-title="Delete" type="submit" className="btn btn-danger"><i className="feather-trash-2" /></button> */ }
              </div>
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Sobre</h6>
              <p className="mb-0 mt-0 small">Fale sobre você na bio.
              </p>
            </div>
            <div className="box-body">
              <div className="p-3 border-bottom">
                <div className="form-group mb-4">
                  <label className="mb-1">BIO</label>
                  <div className="position-relative">
                    <textarea 
                    className="form-control" 
                    rows={4} name="text" 
                    placeholder="Nós do Empregue.me e as Empresas parceiras queremos saber mais de você, descreva aqui na bio..." 
                    value={bio}
                    onChange={event => setBio(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main className="col-md-8">
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Informações Basicas</h6>
            </div>
            <div className="box-body p-3">
            {user.map(user => ( 
              <form key={user._id} className="js-validate" noValidate="novalidate">
                <div className="row">
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="nameLabel" className="form-label">
                        Nome
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input type="text"  readonly="true" className="form-control" name="name" placeholder={user.name} aria-label="Enter your name" required aria-describedby="nameLabel" data-msg="Please enter your name." data-error-class="u-has-error" data-success-class="u-has-success" />
                        <small className="form-text text-muted">Exibido aos outros usúarios.</small>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="row">
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="emailLabel" className="form-label">
                        Email
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input type="email" readonly="true" className="form-control" name="email" placeholder={user.email} aria-label="Enter your email address" required aria-describedby="emailLabel" data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success" />
                        <small className="form-text text-muted">Nunca compartilhe seu email com ninguém.</small>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="row">
                  {/* Input */}
                  <div className="col-sm-6 mb-2">
                    <div className="js-form-message">
                      <label id="nameLabel" className="form-label">
                        Site
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        placeholder={user.name} 
                        aria-label="Enter your name"
                        required aria-describedby="nameLabel" 
                        data-msg="Please enter your name." 
                        data-error-class="u-has-error" 
                        data-success-class="u-has-success" 
                        value={site}
                        onChange={event => setSite(event.target.value)}   
                       />
                        <small className="form-text text-muted">Exibido aos outros usúarios.</small>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
              </form>
              ))} 
            </div>
          </div>
          <div >
          <div className="mb-3 text-right">
            <a className="font-weight-bold btn btn-link rounded p-3" href="/profile"> &nbsp;&nbsp;&nbsp;&nbsp; Cancelar &nbsp;&nbsp;&nbsp;&nbsp; </a>
            {
                loading
              ? <Lottie options={lottieOptions
              } style={{height:'20%',width:'20%'}} 
              height='20%'
              width='20%'
              />
              : <button className="btn btn-primary btn-block text-uppercase" type="submit" onSubmit={CreateProfile}> Salvar Perfil </button>
              }          
            </div>
          </div>
        </main>
      </div>
    </div>
  </form>
</div>
{/* Bootstrap core JavaScript */}
</>
  );
}

export default Feed;
