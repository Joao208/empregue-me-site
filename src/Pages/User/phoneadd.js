/* eslint-disable jsx-a11y/alt-text */
import React, {
    useState
  } from 'react';
  import {useNavigate} from 'react-router-dom'

  import '../global2.css';
  
  import img_logo_svg from '../img/logologin.JPG'
  import api from '../services/api'
  import Lottie from 'react-lottie'
  import loadinganimate from '../loading.json'
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  
  function Feed() {
  
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(false)
    const [fill, setFill] = useState(false)
    const history = useNavigate()

  
    async function PhoneAdd(event) {
      event.preventDefault()
      setFill(false)
      if (!phone) {
        return setFill(true)
      }
      setLoading(true)
      try{
        const response = await api.post('/addphone', {
          phone,
        });
        console.log(response)
        history('/phoneconfirm')
    }catch(e){
      setLoading(false)
      toast.error('Falha ao adicionar número, verifique seus dados');

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
    <link rel="icon" type="image/png" href="img/fav.png" />
    <title>Empregue.me | Add Celular</title>
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
                <h5 className="font-weight-bold mt-3">Adicione um número de telefone</h5>
                <p className="text-muted">Ou pule esta etapa clicando <a href="/edit-profile">aqui</a>.</p>
              </div>
              { !! fill && <p style={{color:'red',fontSize:13,textAlign:'center'}}>
              Preencha todos os dados
            </p>}
              <form onSubmit={PhoneAdd}>
                <div className="form-group">
                  <label className="mb-1">Número</label>
                  <div className="position-relative icon-form-control">
                    <i className="feather-user position-absolute" />
                    <input 
                    className="form-control" 
                    id="email"
                    placeholder="5512123456789"
                    type="tel"
                    pattern="[0-9]{13}"
                    value={phone}
                    onChange={event => setPhone(event.target.value)}
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
              : <button className="btn btn-primary btn-block text-uppercase" type="submit" onSubmit={PhoneAdd}> Adicionar telefone </button>
              }
                <div className="py-3 d-flex align-item-center">
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
  