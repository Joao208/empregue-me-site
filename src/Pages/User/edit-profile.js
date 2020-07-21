/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect,useMemo} from 'react';
import {useNavigate} from 'react-router'

import api from '../../services/api'
 
import Lottie from 'react-lottie'
import loadinganimate from '../../Animations/loading.json'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header';
import App from '../../components/App/App';

function Feed() {
  const [user, setUser] = useState([])

  const [avatar, setAvatar] = useState(null)
  const [FacebookUrl, setFacebookUrl] = useState('')
  const [InstagramUrl, setInstagramUrl] = useState('')
  const [TwitterUrl, setTwitterUrl] = useState('')
  const [YouTubeUrl, setYouTubeUrl] = useState('')
  const [GithubUrl, setGithubUrl] = useState('')
  const [bio, setBio] = useState('')
  const [profession, setProfession] = useState('')
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
        data.append('FacebookUrl', FacebookUrl)
        data.append('InstagramUrl', InstagramUrl)
        data.append('TwitterUrl', TwitterUrl)
        data.append('YouTubeUrl', YouTubeUrl)
        data.append('GithubUrl', GithubUrl)
        data.append('bio', bio)
        data.append('profession', profession)
       
       const response = await api.post('/profile', data)

       const profile_id = response.data

       sessionStorage.getItem('profile_id', profile_id)

        navigate('/profile')
    }catch{
      toast.error('Falha ao editar o perfil, verifique seus dados');
      setLoading(false)
    }
  }

  useEffect(() => {
    try{
    async function loadSpots() {
      const response = await api.get('/user')

        setUser(response.data)
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
  <Header></Header>
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
                 <img src={user.avatar ? user.avatar : 'https://serverem.s3.us-east-2.amazonaws.com/user.png' } style={{borderRadius:'100%',width:'160px',height:'160px'}} />
                 ))}    
              </label>
             {  /* <button data-toggle="tooltip" data-placement="top" data-original-title="Delete" type="submit" className="btn btn-danger"><i className="feather-trash-2" /></button> */ }
              </div>
          </div>
        {user.map(user => (
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
                    value={bio ? bio : user.bio}
                    onChange={event => setBio(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {user.map(user => (
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Redes sociais</h6>
              <p className="mb-0 mt-0 small">Adicione outros links ao seu perfil.
              </p>
            </div>
            <div className="box-body">
              <div className="p-3 border-bottom">
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-instagram position-absolute text-warning" />
                  <input 
                  placeholder="Add Instagram link" 
                  type="text" 
                  className="form-control" 
                  value={InstagramUrl ? InstagramUrl : user.InstagramUrl}
                  onChange={event => setInstagramUrl(event.target.value)}
                  />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-facebook position-absolute text-primary" />
                  <input 
                  placeholder="Add Facebook link" 
                  type="text" 
                  className="form-control" 
                  value={FacebookUrl ? FacebookUrl : user.FacebookUrl}
                  onChange={event => setFacebookUrl(event.target.value)}
                  />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-twitter position-absolute text-info" />
                  <input 
                  placeholder="Add Twitter link" 
                  type="text" 
                  className="form-control" 
                  value={TwitterUrl ? TwitterUrl : user.TwitterUrl}
                  onChange={event => setTwitterUrl(event.target.value)}
                  />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-youtube position-absolute text-danger" />
                  <input 
                  placeholder="Add Youtube link" 
                  type="text" 
                  className="form-control" 
                  value={YouTubeUrl ? YouTubeUrl : user.YouTubeUrl}
                  onChange={event => setYouTubeUrl(event.target.value)}
                  />
                </div>
                <div className="position-relative icon-form-control mb-0">
                  <i className="feather-github position-absolute text-dark" />
                  <input
                  placeholder="Add Github link" 
                  type="text" 
                  className="form-control"
                  value={GithubUrl ? GithubUrl : user.GithubUrl}
                  onChange={event => setGithubUrl(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
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
                      <label id="emailLabel" className="form-label">
                        Seu número
                        <span className="text-danger">*</span>
                      </label>
                      <div className="form-group">
                        <input className="form-control" readonly="true" type="tel" name="phoneNumber" defaultValue={user.phone} aria-label="Enter your phone number" required aria-describedby="phoneNumberLabel" data-msg="Please enter a valid phone number" data-error-class="u-has-error" data-success-class="u-has-success" />
                        <small className="form-text text-muted">Número {user.phoneConfirme ? 'verificado' : 'não verificado'}</small>
                      </div>
                    </div>
                  {/* End Input */}
                </div>
                <div className="col-sm-6 mb-2">
                  <div className="js-form-message">
                    <label id="organizationLabel" className="form-label">
                      Profissão
                    </label>
                    <div className="form-group">
                      <input  
                      value={profession ? profession : user.profession}
                      onChange={event => setProfession(event.target.value)}
                      type="text" 
                      className="form-control" 
                      name="organization" 
                      placeholder="Ensira uma profissão para que as empresas possam encontra-lo" 
                      aria-label="Enter your organization name" 
                      required 
                      aria-describedby="organizationLabel" 
                      data-msg="Please enter your organization name" 
                      data-error-class="u-has-error" 
                      data-success-class="u-has-success" />
                      <small className="form-text text-muted">Para mais de uma profissão ensira separando-as com virgula.</small>
                    </div>
                  </div>
                </div>
              </div>
              </form>
              ))} 
            </div>
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Curriculums</h6>
              <hr/>
              <App></App>
            </div>           
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Evoluocao profissional
              </h6>
              <hr/>
              <p>
                Acompanhe com porcentagens seu profissionalismo e vocacao (Ainda em producao)
              </p>
              <hr/>
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
