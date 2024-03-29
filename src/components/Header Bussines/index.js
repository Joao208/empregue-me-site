import React,{useEffect,useState} from 'react';
import api from '../../services/api'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
const img_logo_svg = 'https://serverem.s3.us-east-2.amazonaws.com/logo.PNG'
function Header()  {

    const [profile, setProfile] = useState([])
    const [name, setName] = useState('')
    const navigate = useNavigate()

    async function SearchValue(event){
        event.preventDefault()
        
        navigate(`/conectionsb/${name}`)
      }
      
      useEffect(() => {
        async function loadSpots() {
          const response = await api.get('/profilebussinesv')
          
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
            <link rel="icon" type="image/png" href={'https://serverem.s3.us-east-2.amazonaws.com/fav.PNG'} />
            <title>Empregue.me</title>
            <nav className="navbar navbar-expand navbar-dark bg-dark osahan-nav-top p-0">
                <div className="container">
                <a className="navbar-brand mr-2"  href="/feed"><img alt="responsive-img" src={img_logo_svg} />
                </a>
                <form style={{margin:'initial'}} onSubmit={SearchValue} className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
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
                    <div className="nav-link dropdown-toggle" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                    </div>
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow-sm animated--grow-in" aria-labelledby="searchDropdown">
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/request/list"><i className="feather-user mr-2" /><span className="d-none d-lg-inline">Requisições</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/bussines/jobs"><i className="feather-briefcase mr-2" /><span className="d-none d-lg-inline">Empregos</span></a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/coursesb"><i className="feather-book mr-2" /><span className="d-none d-lg-inline">Cursos</span></Link>
                </li>
                    {profile.map(profile => (
                <div key={profile._id} className="dropdown-list-image mr-3">
                    <a href="mycompany-profile"><img className="rounded-circle" style={{marginLeft:'4px'}} alt="responsive-img" src={profile.bussines.avatar} /></a>
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