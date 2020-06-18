/* eslint-disable jsx-a11y/alt-text */
import React, {
    useState,useEffect
  } from 'react';
  
   
  import img_logo_svg from '../../img/logologin.JPG'
  import api from '../../services/api'
  import Lottie from 'react-lottie'
  import loadinganimate from '../../Animations/loading.json'
  import {useNavigate} from 'react-router'  
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useRecaptcha, Badge } from 'react-recaptcha-hook'

  const Feed = ({ action, sitekey, onToken }) => {

    const execute = useRecaptcha({ sitekey, hideDefaultBadge: true });
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useNavigate()
  
    async function SignIn(event) {
      event.preventDefault();
      setLoading(true)
      try{
        const response = await api.post('/auth/bussinesauthenticate', {
          email,
          password
        });
        console.log(response)
        const {
          bussines,
          token
        } = response.data;
  
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('bussines',JSON.stringify(bussines))
        history('/')
      }catch(e){
       setLoading(false)
       toast.error('Falha na autenticação, verifique seus dados');
      }
    }
    useEffect(() => {
      const getToken = async () => {
        const token = await execute(action);
        onToken(token);
      };
  
      getToken();
    }, []);
  
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
        <title>Empregue.me para empresas | Login</title>
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
                <h5 className="font-weight-bold mt-3">Bem vindo de volta</h5>
                <p className="text-muted">Não perca a sua próxima oportunidade de contratar funcionrios melhores. Entre para se manter atualizado sobre o seu mundo profissional.</p>
              </div>
              <form onSubmit={SignIn}>
                <div className="form-group">
                  <label className="mb-1">Email</label>
                  <div className="position-relative icon-form-control">
                    <i className="feather-user position-absolute" />
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
                  <label className="mb-1">Senha</label>
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
                {
                loading
              ? <Lottie options={lottieOptions
              } style={{height:'20%',width:'20%'}} 
              height='20%'
              width='20%'
              />
              : <button className="btn btn-primary btn-block text-uppercase" type="submit" onSubmit={SignIn}> Logar </button>
              }
                <a className="btn btn-block text-uppercase" href="/sign-in"style={{backgroundColor:"#007dff",color:"white"}} > Quero ser contratado </a> 
                <a className="btn btn-block text-uppercase" style={{backgroundColor:"#00c7e4",color:"white"}} href="#"> Quero ensinar </a> 
                <div className="py-3 d-flex align-item-center">
                  <a href="forgot-password">Esqueceu a senha?</a>
                  <span className="ml-auto"> Novo no Empregue.me? <a className="font-weight-bold" href="/bussinessign-up">Crie agora</a></span>
                  {/* <Recaptcha 
                    sitekey={"6LcBAqYZAAAAAIgecheCn5AHGEv_wkOqt3xKDsfo"}
                    ref="recaptcha"
                    onResolved={ () => console.log( 'Human detected.' ) }
                  />  */}
                  <Badge />
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
    )
  }
  
  export default Feed;
