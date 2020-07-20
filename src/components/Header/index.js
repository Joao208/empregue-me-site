import React,{useEffect,useState} from 'react';
import Notification from '../../components/Notification/Notifications'
import api from '../../services/api'
import {useNavigate,Link} from 'react-router-dom'
import img_fav from '../../img/fav.png'
import img_logo_svg from '../../img/logo.png'

function Header()  {

    const [profile, setProfile] = useState([])
    const [name, setName] = useState('')
    const navigate = useNavigate()

    async function SearchValue(event){
        event.preventDefault()
        
        navigate(`/conections/${name}`)
      }
      
      useEffect(() => {
        async function loadSpots() {
          const response = await api.get('/profileview')
          
          setProfile(response.data.profile)
        }
        
        loadSpots()
      }, [] )    
    
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
            <meta name="description" content />
            <meta name="author" content />
            <link rel="icon" type="image/png" href={img_fav} />
            <title>Empregue.me</title>
            <nav className="navbar navbar-expand navbar-dark bg-dark osahan-nav-top p-0">
                <div className="container">
                <a className="navbar-brand mr-2"  href="/"><img src={img_logo_svg} alt="responsive-img" />
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
                <li className="nav-item">
                    <Link className="nav-link" to="/jobs"><i className="feather-briefcase mr-2" /><span className="d-none d-lg-inline">Empregos</span></Link>
                </li>
                <Notification></Notification>
                    {profile.map(profile => (
                <div key={profile._id} className="dropdown-list-image mr-3">
                    <a href="profile"><img alt="responsive-img" className="rounded-circle" style={{marginLeft:'4px'}}  src={profile.user.avatar} /></a>
                    <div className="status-indicator bg-success" />
                </div>
                ))}
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;