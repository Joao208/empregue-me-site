/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react'
import api from '../services/api'
import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';
import Lottie from 'react-lottie'
import loadinganimate from '../loading.json'



import img_logo_svg from '../img/logologin.jpg'

function Feed({history}) {

  const [email, setEmail] = useState('')
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error,setError] = useState('')

  async function ForgotPass(event) {
    event.preventDefault();
    setLoading(true)
    try{
      const response = await api.post('/auth/reset_password', {
        email,
        token,
        password
      });

      console.log(response)

      history.push('/')
    }catch(e){
      setError(e)
      setLoading(false)
    }
    }

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
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href="img/fav.png" />
  <title>Empregue.me | Forgot Password</title>
  {/* Slick Slider */} 
  <link rel="stylesheet" type="text/css" href="vendor/slick/slick.min.css" />
  <link rel="stylesheet" type="text/css" href="vendor/slick/slick-theme.min.css" />
  {/* Feather Icon*/}
  <link href="vendor/icons/feather.css" rel="stylesheet" type="text/css" />
  {/* Bootstrap core CSS */}
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
  {/* Custom styles for this template */}
  <link href="css/style.css" rel="stylesheet" />
  <div className="bg-white">
    <div className="container">
      <div className="row justify-content-center align-items-center d-flex vh-100">
        <div className="col-md-4 mx-auto">
          <div className="osahan-login py-4">
            <div className="text-center mb-4">
            <img src={img_logo_svg} style={{height:'100%',width:'100%',alignContent:'center',alignItems:'center',justifyContent:'center'}}/>
              <h5 className="font-weight-bold mt-3">Primeiro, vamos encontrar sua conta</h5>
              <p className="text-muted">Por favor insira seu email</p>
            </div>
            { !! error && <p style={{textTransform:'uppercase',color:'red',fontSize:16,textAlign:'center'}}>
              Email ou Token incorretos
            </p>}
            <form onSubmit={ForgotPass}>
              <div className="form-group">
                <label className="mb-1">Email</label>
                <div className="position-relative icon-form-control">
                  <i className="feather-user position-absolute" />
                  <input 
                  type="email" 
                  className="form-control"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  />
                </div>
                <label className="mb-1">Token de validação</label>
                <div className="position-relative icon-form-control">
                  <i className="feather-user position-absolute" />
                  <input 
                  type="text" 
                  className="form-control"
                  value={token}
                  onChange={event => setToken(event.target.value)}
                  />
                </div>
                <label className="mb-1">Password</label>
                <div className="position-relative icon-form-control">
                  <i className="feather-user position-absolute" />
                  <input 
                  type="password" 
                  className="form-control"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  />
                </div>

              </div>
              {
                loading
              ? <Lottie options={lottieOptions
              } style={{height:'20%',width:'20%'}} 
              height='20%'
              width='20%'
              />
              : <button className="btn btn-primary btn-block text-uppercase" type="submit" onSubmit={ForgotPass}> Resetar senha </button>
              }
              <div className="py-3 d-flex align-item-center">
                <a href="sign-in">Logar</a>
                <span className="ml-auto"> Novo no Empregue.me? <a className="font-weight-bold" href="sign-up">Cadastrar</a></span>
              </div>
            </form>
          </div>
        </div>
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
