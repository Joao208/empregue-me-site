/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState,useEffect} from 'react';

import api from '../../services/api'
import Lottie from 'react-lottie'
import loadinganimate from '../../Animations/loading.json'

import img_logo_svg from '../../img/logologin.JPG'
import {useNavigate} from 'react-router'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recaptcha from '../../components/Recaptcha';

function Feed() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [loading, setLoading] = useState(false)
  const [fill, setFill] = useState(false)
  const navigate = useNavigate()


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const { latitude, longitude } = position.coords;

            setLatitude(latitude)
            setLongitude(longitude)
        },
        (error) => {
        },
        {
            timeout: 30000
        }
    )
})


  async function SignUp(event) {
    event.preventDefault();
    setFill(false)
    if (!email || !password || !name) 
      return setFill(true)
    
    if (!longitude || !latitude )
      return toast.error('Ops, não conseguimos obter sua localização')

    setLoading(true)
    try{
      const response = await api.post('/userregister', {
        name,
        latitude,
        longitude,
        email,
        password
      })

      const {
        token,
        user,
        _id
      } = response.data;

      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user',JSON.stringify(user))
      sessionStorage.setItem('user_id', _id)
      toast.success('Confirme seu email')
      navigate('/phone')
    }  catch(e){
      setLoading(false)
      toast.error('Falha na autenticação, verifique seus dados');
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
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
  <meta name="description" content />
  <meta name="author" content />
    <title>Empregue.me | Registro</title>
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
              <a href="index"><img src={img_logo_svg} style={{height:'100%',width:'100%',alignContent:'center',alignItems:'center',justifyContent:'center'}} /></a>
              <h5 className="font-weight-bold mt-3">Junte-se ao Empregue.me</h5>
              <p className="text-muted">Aproveite ao máximo sua vida profissional</p>
            </div>
            { !! fill && <p style={{color:'red',fontSize:13,textAlign:'center'}}>
              Preencha todos os dados
            </p>}
            <form onSubmit={SignUp}>
              <div className="form-row">
                <div className="col">
                  <div className="form-group">
                    <label className="mb-1">Nome</label>
                    <div className="position-relative icon-form-control">
                      <i className="feather-user position-absolute" />
                      <input 
                      type="text" 
                      className="form-control" 
                      id="name"
                      value={name}
                      onChange={event => setName(event.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="mb-1">Email</label>
                <div className="position-relative icon-form-control">
                  <i className="feather-at-sign position-absolute" />
                  <input 
                  type="email" 
                  className="form-control" 
                  id="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="mb-1">Senha (6 ou mais caracteres)</label>
                <div className="position-relative icon-form-control">
                  <i className="feather-unlock position-absolute" />
                  <input 
                  type="password" 
                  className="form-control" 
                  id="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                />
                </div>
              </div>
              <div className="form-group">
                <label className="mb-1">Você concorda com o Contrato de <a  href="">Usuario</a>, <a  href=""> Politica de Privacidade</a>, e <a  href="">Cookies</a>.</label>
              </div>
              {
                loading
              ? <Lottie options={lottieOptions
              } style={{height:'20%',width:'20%'}} 
              height='20%'
              width='20%'
              />
              : <button className="btn btn-primary btn-block text-uppercase" type="submit" style={{marginBottom:'2%'}} onSubmit={SignUp}> Concordar e Criar </button>
              }
              <Recaptcha></Recaptcha>
             <a className="btn btn-block text-uppercase" href="/bussinessign-up"style={{backgroundColor:"#007dff",color:"white"}} > Quero contratar </a> 
              <a className="btn btn-block text-uppercase" style={{backgroundColor:"#00c7e4",color:"white"}} href="/school/sign-up"> Quero ensinar </a> 
              <div className="py-3 d-flex align-item-center">
                <span className="ml-auto"> Ja é usuario? <a className="font-weight-bold" href="sign-in">Logar</a></span>
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
