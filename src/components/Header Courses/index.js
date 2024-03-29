import React,{useState} from 'react';
import {useNavigate,Link} from 'react-router-dom'

function Header()  {

    const [name, setName] = useState('')
    const navigate = useNavigate()

    async function SearchValue(event){
        event.preventDefault()
        
        navigate(`/courses/search/${name}`)
      }
      
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
                <a className="navbar-brand mr-2"  href="/"><img src={'https://serverem.s3.us-east-2.amazonaws.com/logo.PNG'} alt="responsive-img" />
                </a>
                <form style={{margin:'initial'}} onSubmit={SearchValue} className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                    <input 
                    type="search"                   
                    placeholder='Buscar classes de cursos'
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
                    placeholder='Buscar classes de cursos'
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
                    <Link className="nav-link" to="/jobs"><i className="feather-briefcase mr-2" /><span className="d-none d-lg-inline">Empregos</span></Link>
                </li>
                </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;