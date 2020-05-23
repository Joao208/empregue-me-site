import React,{useEffect,useState} from 'react';
import moment from 'moment'
import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import api from '../services/api'
import img_logo_svg from '../img/logo.png'
import { useParams } from 'react-router';
import EmptyAnimation from '../empty.json'
import Lottie from 'react-lottie'

function Feed() {
  const title = useParams()
  const [jobs, setJobs] = useState([])

  const lottieOptions = {
    title:'loading',
    loop:true,
    autoplay:true,
    animationData:EmptyAnimation
  }


  useEffect(() => {
    async function loadSpots() {
        const response = await api.get(`/searchvacancies`,{
            title
        })

        setJobs(response.data)
    }

    loadSpots()
}, [] )

  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
  <meta name="description" content />
  <meta name="author" content />
  <link rel="icon" type="image/png" href="img/fav.png" />
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
      <a className="navbar-brand mr-2" href="index"><img src={img_logo_svg} />
      </a>
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
                  {jobs
                    ? jobs.map(vacancies => (
                    <div key={vacancies._id} className="col-md-6">
                      <a >
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                          <div className="overflow-hidden mr-2">
                             <a href={`https://light-empregue-me.herokuapp.com/job-profile/${vacancies._id}`}><h6 style={{textTransform:'capitalize'}} className="font-weight-bold text-dark mb-0 text-truncate">{vacancies.text.title}</h6></a>
                              <div className="text-truncate text-primary">{vacancies.bussines.cnpjI.nome}</div>
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
                    ))
                   : <Lottie options={lottieOptions} 
                   height='100%'
                   width='100%'
                   /> 
       
                }
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
