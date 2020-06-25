import React,{useEffect,useState} from 'react';
import moment from 'moment'
 
  
import api from '../../services/api'
import img_logo_svg from '../../img/logo.png'
import { useNavigate } from 'react-router';

function Feed() {

  const navigate = useNavigate()
  const [name,setName] = useState('')
  const [jobs, setJobs] = useState([])
  const [profile, setProfile] = useState([])

  useEffect(() => {
    async function loadSpots() {
        const response = await api.get('/vacancies')

        console.log(response.data)
        setJobs(response.data)
    }

    loadSpots()
}, [] )

useEffect(() => {
  async function loadSpots() {
    const response = await api.get('/profileview')
    
    setProfile(response.data.profile)
  }
  
  loadSpots()
}, [] )

async function SearchValue(event){
  event.preventDefault()
  
  navigate(`/conections/${name}`)
}

return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
  <meta name="description" content />
  <meta name="author" content />
    <title>Empregue.me | Jobs</title>
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
        <a href="profile"><img className="rounded-circle"  src={profile.user.avatar} /></a>
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
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="p-3 border-top">
                  <div className="row">
                  {jobs.map(vacancies => (
                    <div key={vacancies._id} className="col-md-6">
                      <a >
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                          <div className="overflow-hidden mr-2">
                             <a href={`https://light-empregue-me.herokuapp.com/job-profile/${vacancies._id}`}><h6 style={{textTransform:'capitalize'}} className="font-weight-bold text-dark mb-0 text-truncate">{vacancies.text.title}</h6></a>
                              <div className="text-truncate text-primary">{vacancies.bussines.nome}</div>
                               <div className="small text-gray-500"><a href={`https://www.google.com.br/maps/place/${vacancies.bussines.cnpjI.logradouro}`}><i className="feather-map-pin" />{vacancies.bussines.cnpjI.logradouro}</a></div>
                            </div>
                            <img className="img-fluid ml-auto" src={vacancies.avatar} />
                          </div>
                          <div className="p-3 job-item-footer">
                          <small className="text-gray-500"><i className="feather-clock" />{moment(vacancies.createdAt).fromNow()}</small>
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

</>
  );
}

export default Feed;
