import React,{useState,useEffect,useMemo} from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import img_logo_svg from '../img/logo.png'
import api from '../services/api'
import '../inputcamera.css'


function Feed({history}) {

  const [user, setUser] = useState([])

  const [avatar, setAvatar] = useState(null)
  const [FacebookUrl, setFacebookUrl] = useState('')
  const [InstagramUrl, setInstagramUrl] = useState('')
  const [TwitterUrl, setTwitterUrl] = useState('')
  const [YouTubeUrl, setYouTubeUrl] = useState('')
  const [GithubUrl, setGithubUrl] = useState('')
  const [bio, setBio] = useState('')

  const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : null
  },[avatar])

  async function CreateProfile(event) {
    event.preventDefault();

    const data = new FormData()

        data.append('avatar', avatar)
        data.append('FacebookUrl', FacebookUrl)
        data.append('InstagramUrl', InstagramUrl)
        data.append('TwitterUrl', TwitterUrl)
        data.append('YouTubeUrl', YouTubeUrl)
        data.append('GithubUrl', GithubUrl)
        data.append('bio', bio)
       
       const response = await api.post('/profile', data)

       console.log(response)

       const profile_id = response.data

       sessionStorage.getItem('profile_id', profile_id)

        history.push('/profile')
  }

  useEffect(() => {
    async function loadSpots() {
        const response = await api.get('/user')

        setUser(response.data)

        console.log(response)
        console.log(typeof response.data)
    }

    loadSpots()
}, [] )

  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href="img/fav.png" />
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
                id="thumbnail"
                style={{ backgroundImage: `url(${preview})`}}
                className={avatar ? 'has-avatar' : ''}
                >
                  <i className="feather-image" />
                  <input 
                  id="fileAttachmentBtn" 
                  name="file-attachment"                   
                  className="d-none"
                  type="file" 
                  onChange={event => {
                    setAvatar(event.target.files[0])}
                 }/>
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
                    placeholder="Começar Biografia" 
                    value={bio}
                    onChange={event => setBio(event.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  value={InstagramUrl}
                  onChange={event => setInstagramUrl(event.target.value)}
                  />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-facebook position-absolute text-primary" />
                  <input 
                  placeholder="Add Facebook link" 
                  type="text" 
                  className="form-control" 
                  value={FacebookUrl}
                  onChange={event => setFacebookUrl(event.target.value)}
                  />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-twitter position-absolute text-info" />
                  <input 
                  placeholder="Add Twitter link" 
                  type="text" 
                  className="form-control" 
                  value={TwitterUrl}
                  onChange={event => setTwitterUrl(event.target.value)}
                  />
                </div>
                <div className="position-relative icon-form-control mb-2">
                  <i className="feather-youtube position-absolute text-danger" />
                  <input 
                  placeholder="Add Youtube link" 
                  type="text" 
                  className="form-control" 
                  value={YouTubeUrl}
                  onChange={event => setYouTubeUrl(event.target.value)}
                  />
                </div>
                <div className="position-relative icon-form-control mb-0">
                  <i className="feather-github position-absolute text-dark" />
                  <input
                  placeholder="Add Github link" 
                  type="text" 
                  className="form-control"
                  value={GithubUrl}
                  onChange={event => setGithubUrl(event.target.value)}
                  />
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
                        <input type="text" className="form-control" name="name" placeholder={user.name} aria-label="Enter your name" required aria-describedby="nameLabel" data-msg="Please enter your name." data-error-class="u-has-error" data-success-class="u-has-success" />
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
                        <input type="email" className="form-control" name="email" placeholder={user.email} aria-label="Enter your email address" required aria-describedby="emailLabel" data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success" />
                        <small className="form-text text-muted">Nunca compartilhe seu email com ninguém.</small>
                      </div>
                    </div>
                  </div>
                  {/* End Input */}
                </div>
              </form>
              ))} 
            </div>
          </div>
          <div className="border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Curriculums
              </h6>
              <hr/>
              <a className="font-weight-bold btn btn-primary rounded p-3" href="/curriculum"> &nbsp;&nbsp;&nbsp;&nbsp;  Criar curriculo &nbsp;&nbsp;&nbsp;&nbsp; </a>
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
              <a className="font-weight-bold btn btn-primary rounded p-3" href="/curriculum"> &nbsp;&nbsp;&nbsp;&nbsp; Fazer teste &nbsp;&nbsp;&nbsp;&nbsp; </a>
            </div>           
          </div>
          <div >
          <div className="mb-3 text-right">
            <a className="font-weight-bold btn btn-link rounded p-3" href="/profile"> &nbsp;&nbsp;&nbsp;&nbsp; Cancelar &nbsp;&nbsp;&nbsp;&nbsp; </a>
            <button className="font-weight-bold btn btn-primary rounded p-3" style={{color:"white"}}> &nbsp;&nbsp;&nbsp;&nbsp;  Criar perfil &nbsp;&nbsp;&nbsp;&nbsp; </button>
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
