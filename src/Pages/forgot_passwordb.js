/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react'
import api from '../services/api'
import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';


import img_logo_svg from '../img/logologin.png'

function Feed({history}) {

  const [email, setEmail] = useState('')

  async function ForgotPass(event) {
    event.preventDefault();
      const response = await api.post('/auth/forgot_password_bussines', {
        email,
      });

      console.log(response)

      history.push('/reset-password')
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
            <img src={img_logo_svg} style={{height:'100%',width:'50%',alignContent:'center',alignItems:'center',justifyContent:'center'}}/>
              <h5 className="font-weight-bold mt-3">Primeiro, vamos encontrar sua conta</h5>
              <p className="text-muted">Por favor insira seu email</p>
            </div>
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
              </div>
              <button className="btn btn-primary btn-block text-uppercase" type="submit">Achar conta</button>
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
