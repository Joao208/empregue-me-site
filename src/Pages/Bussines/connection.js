/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'
  
import img_logo_svg from '../../img/logo.png'
import api from '../../services/api'
import { useNavigate } from 'react-router';


function Feed() {

  const [users, setUsers] = useState([])
  const [bussines, setBussines] = useState([])
  const [vacancies, setVacancies] = useState([])
  const history = useNavigate()
  const [name,setName] = useState('')
  const [profile, setProfile] = useState([])

  const {named} = useParams()

  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get(`/search/${named}`)

        setUsers(response.data.users)
        setBussines(response.data.bussines)
        setVacancies(response.data.vacancies)
        console.log(response.data)
  
      } catch (e) {
        loadUsers()
      }
    }
    loadUsers()
  }, [])

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/profilebussinesv')
      
      setProfile(response.data.profile)
    }
    
    loadSpots()
  }, [] )
  
  async function SearchValue(event){
    event.preventDefault()
    
    history(`/conections/${name}`)
  }


  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
  <meta name="description" content />
  <meta name="author" content />
  <title>Empregue.me</title>
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
  <nav className="navbar navbar-expand navbar-dark bg-dark osahan-nav-top p-0">
    <div className="container">
      <a className="navbar-brand mr-2"  href="/"><img src={img_logo_svg} />
      </a>
      <form onSubmit={SearchValue} className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input 
          type="search"                   
          placeholder='Buscar pessoas, vagas e empresas'
          aria-label="Search"
          value={name}
          onChange={event => setName(event.target.value)}
          aria-describedby="basic-addon2" 
          className="form-control shadow-none border-0"
          />
          <div>
            <button className="btn" type="button">
              <i className="feather-search" />
            </button>
          </div>
          </div>
      </form>
      <ul className="navbar-nav ml-auto d-flex align-items-center">
      <li className="nav-item dropdown no-arrow d-sm-none">
        <a className="nav-link dropdown-toggle" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <form onSubmit={SearchValue} className="form-inline mr-auto w-100 navbar-search">
          <div className="input-group">
          <input 
          type="search"                   
          placeholder='Buscar pessoas, vagas e empresas'
          aria-label="Search"
          value={name}
          onChange={event => setName(event.target.value)}
          aria-describedby="basic-addon2" 
          className="form-control shadow-none border-0"
          />
          <div>
            <button className="btn" type="button">
              <i className="feather-search" />
            </button>
          </div>
          </div>
          </form>
        </a>
        <div className="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in" aria-labelledby="searchDropdown">
        </div>
      </li>
        {profile.map(profile => (
      <div key={profile._id} className="dropdown-list-image mr-3">
        <a href="profile"><img className="rounded-circle"  src={profile.bussines.avatar} /></a>
        <div className="status-indicator bg-success" />
      </div>
      ))}
      </ul>
    </div>
  </nav>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main className="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
          <h5 className="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">Usuarios Empregue.me com o nome {named}</h5>
            <ul className="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
              <li className="nav-item">
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="p-3">
                  <div className="row">
                  {users.map(user => (
                    <div key={user._id} className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={user.avatar} />
                            </div>
                            <div className="font-weight-bold">
                            <h6 className="font-weight-bold text-dark mb-0">{user.name}</h6>
                              <div className="small text-black-50">Photography</div>
                            </div>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <a type="button" href={`https://light-empregue-me.herokuapp.com/profile/${user._id}`}  className="btn btn-primary btn-sm btn-block"> Ver Perfil </a>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="col col-xl-3 order-xl-2 col-lg-12 order-lg-2 col-12">
          <div className="box shadow-sm mb-3 border rounded bg-white ads-box text-center">
            <div className="image-overlap-2 pt-4">
              <img src="https://api.adorable.io/avatars/268/abott@adorable" className="img-fluid rounded-circle shadow-sm"  alt="Responsive image" />
              <img src="https://api.adorable.io/avatars/268/abott@adorable" className="img-fluid rounded-circle shadow-sm"  alt="Responsive image" />
            </div>
            <div className="p-3 border-bottom">
              <h6 className="text-dark">Empregue.me conectando pessoas<span className="font-weight-bold"> e Empresas</span></h6>
            </div>
          </div>
        </aside>
        <main className="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
          <h5 className="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">Vagas Empregue.me com o nome {named}</h5>
            <ul className="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
              <li className="nav-item">
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="p-3">
                  <div className="row">
                  {vacancies.map(vacancies => (
                    <div key={vacancies._id} className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={vacancies.avatar} />
                            </div>
                            <div className="font-weight-bold">
                            <h6 className="font-weight-bold text-dark mb-0">{vacancies.title}</h6>
                              <div className="small text-black-50">Photography</div>
                            </div>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <a type="button" href={`https://light-empregue-me.herokuapp.com/job-profile/${vacancies._id}`}  className="btn btn-primary btn-sm btn-block"> Ver Vaga </a>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <main className="col col-xl-9 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
          <h5 className="pl-3 pt-3 pr-3 border-bottom mb-0 pb-3">Empresas Empregue.me com o nome {named}</h5>
            <ul className="nav border-bottom osahan-line-tab" id="myTab" role="tablist">
              <li className="nav-item">
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="p-3">
                  <div className="row">
                  {bussines.map(bussines => (
                    <div key={bussines._id} className="col-md-4">
                      <a href="profile">
                        <div className="border network-item rounded mb-3">
                          <div className="p-3 d-flex align-items-center network-item-header">
                            <div className="dropdown-list-image mr-3">
                              <img className="rounded-circle" src={bussines.avatar} />
                            </div>
                            <div className="font-weight-bold">
                            <h6 className="font-weight-bold text-dark mb-0">{bussines.nome}</h6>
                              <div className="small text-black-50">Photography</div>
                            </div>
                          </div>
                          <div className="network-item-footer py-3 d-flex text-center">
                            <div className="col-6 pl-3 pr-1">
                              <a type="button" href={`https://light-empregue-me.herokuapp.com/company-profile/${bussines._id}`}  className="btn btn-primary btn-sm btn-block"> Ver Empresa </a>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</div>
{/* Bootstrap core JavaScript */}
</>
  );
}

export default Feed;
