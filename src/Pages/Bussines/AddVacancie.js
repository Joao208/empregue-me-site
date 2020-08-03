/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState,useMemo} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'react-credit-cards/es/styles-compiled.css'
import '../../vendor/slick/slick.min.css'
import '../../vendor/slick/slick-theme.min.css'
import '../../vendor/icons/feather.css'
import '../../vendor/bootstrap/css/bootstrap.min.css'
import '../../css/style.css'
import '../../css/inputcamera.css'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import api from '../../services/api'
import Header from '../../components/Header Bussines';
import CheckoutForm from '../../components/CheckoutForm Vacancies';

function Feed() {

  const [profile,setProfile] = useState([])
  const [avatar, setAvatar] = useState(null)
  const [salary, setsalary] = useState('')
  const [city, setcity] = useState('')
  const [cargo, setCargo] = useState('')
  const [employment, setEmployment] = useState('')
  const [uf, setuf] = useState('')
  const [description, setdescription] = useState('')
  const [title, setTitle] = useState('')
  const promise = loadStripe("pk_live_51H7wkvGHhRYZj7pYIQuXMJJCurr3ygoPHrFnv41YMlxT6JNEuCgicn6XdGvegpocnNnlqGjY3756jNlTLoOPhVSr00QdkjqMGM");

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/profilebussinesv')
      
      setProfile(response.data.profile)
    }  
    
    loadSpots()
  }, [] )  
      
  const preview = useMemo(() => {
    return avatar ? URL.createObjectURL(avatar) : null
  },[avatar])  

  return (
<>
<div>
  <Header></Header>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main style={{margin:'auto'}} className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <form className="box shadow-sm border rounded bg-white mb-3 osahan-share-post" encType="multipart/form-data">
            <ul className="nav nav-justified border-bottom osahan-line-tab" id="myTab" role="tablist">
              <li className="nav-item">
                <a 
                className="nav-link active" 
                id="home-tab" 
                data-toggle="tab" 
                role="tab" 
                aria-controls="home" 
                aria-selected="true"
                ><i className="feather-edit" />Escrever</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="p-3 d-flex align-items-center w-100"  href="profile">
                  {profile.map(profile => (
                  <div key={profile._id} className="dropdown-list-image mr-3">
                   <a href="/mycompany-profile"><img alt="responsive-img" className="rounded-circle" src={profile.bussines.avatar} /></a> 
                    <div className="status-indicator bg-success" />
                  </div>
                  ))}
                  <div className="w-100">
                    <textarea 
                    placeholder="Descreva sua vaga..." 
                    className="form-control border-0 p-0 shadow-none" 
                    rows={1} 
                    value={description}
                    onChange={event => setdescription(event.target.value)}
                    defaultValue={""} 
                    />
                    <textarea 
                    placeholder="Qual será o salário da vaga..." 
                    className="form-control border-0 p-0 shadow-none" 
                    rows={1} 
                    value={salary}
                    onChange={event => setsalary(event.target.value)}
                    defaultValue={""} 
                    />
                    <textarea 
                    placeholder="Em qual cidade será..." 
                    className="form-control border-0 p-0 shadow-none" 
                    rows={1} 
                    value={city}
                    onChange={event => setcity(event.target.value)}
                    defaultValue={""} 
                    />
                    <textarea 
                    placeholder="Isso é em qual estado..." 
                    className="form-control border-0 p-0 shadow-none" 
                    rows={1} 
                    value={uf}
                    onChange={event => setuf(event.target.value)}
                    defaultValue={""} 
                    />
                    <textarea 
                    placeholder="Cargo..." 
                    className="form-control border-0 p-0 shadow-none" 
                    rows={1} 
                    value={cargo}
                    onChange={event => setCargo(event.target.value)}
                    defaultValue={""} 
                    />
                    <textarea 
                    placeholder="Jornada..." 
                    className="form-control border-0 p-0 shadow-none" 
                    rows={1} 
                    value={employment}
                    onChange={event => setEmployment(event.target.value)}
                    defaultValue={""} 
                    />
                    <textarea 
                    placeholder="Dê um titulo para ela..." 
                    className="form-control border-0 p-0 shadow-none" 
                    rows={1} 
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                    defaultValue={""} 
                    />
                  </div>
                </div>
              </div>
              {!! avatar 
                  && <label
                  id="indexfile"
                  style={{ backgroundImage: `url(${preview})`}}
                  className={avatar ? 'has-avatar' : ''}
                  >
                  </label>
                  }
            </div>
            <div enc className="border-top p-3 d-flex align-items-center">
              <label style={{color:'#000',margin:'auto'}}>
                <i className="feather-image"></i>
                  Adicionar Imagem
                <input style={{display:'none'}} type="file" onChange={event => {
                      setAvatar(event.target.files[0])}
                  }/>
              </label>
            </div>
            <h2 style={{margin:'inherit',textAlign:'center',fontSize:'17px',marginTop:'20px'}}>Para anúnciarmos uma vaga vamos ao pagamento ;)</h2>
            <Elements stripe={promise}>
              <CheckoutForm avatar={avatar} city={city} cargo={cargo} description={description} title={title} uf={uf} employment={employment} salary={salary} />
            </Elements>
          </form>  
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

