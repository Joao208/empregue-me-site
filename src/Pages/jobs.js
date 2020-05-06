import React,{useEffect,useState} from 'react';

import '../global.css';
import '../App.css';
import '../Sidebar.css';
import '../Main.css';

import api from '../services/api'
import img_logo_svg from '../img/logo.png'
import img_l3 from '../img/l3.png'

function Feed({history}) {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    async function loadSpots() {
        const response = await api.get('/vacancies')

        setJobs(response.data)
        console.log(response)
    }

    loadSpots()
}, [] )






  return (
<>
<div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
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
      <form className="d-none d-sm-inline-block form-inline mr-auto my-2 my-md-0 mw-100 navbar-search">
        <div className="input-group">
          <input type="text" className="form-control shadow-none border-0" placeholder="Search people, jobs & more..." aria-label="Search" aria-describedby="basic-addon2" />
          <div className="input-group-append">
            <button className="btn" type="button">
              <i className="feather-search" />
            </button>
          </div>
        </div>
      </form>
    </div>
  </nav>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
            <form className="job-search p-3 border-bottom">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search jobs" aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-outline-secondary" type="button">
                    <i className="feather-search" />
                  </button>
                </div>
              </div>
            </form>
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
                <h6 className="font-weight-bold text-dark mb-0 text-truncate">{vacancies.text.title}</h6>
                              <div className="text-truncate text-primary">{vacancies.bussines.cnpjI.nome}</div>
               <div className="small text-gray-500"><a href={`https://www.google.com.br/maps/place/${vacancies.bussines.cnpjI.logradouro}`}><i className="feather-map-pin" />{vacancies.bussines.cnpjI.logradouro}</a></div>
                            </div>
                            <img className="img-fluid ml-auto" src={vacancies.avatar} />
                          </div>
                          <div className="p-3 job-item-footer">
                <small className="text-gray-500"><i className="feather-clock" />{vacancies.createdAt}</small>
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
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="shadow-sm rounded bg-white job-item-2 p-3 mb-3">
            <div className="media">
              <div className="u-avatar mr-3">
                <img className="img-fluid" src={img_l3}  alt="Image Description" />
              </div>
              <div className="media-body">
                <div className="mb-3">
                  <h6 className="font-weight-bold mb-0"><a className="text-dark" href="job-profile">C# Developer</a></h6>
                  <a className="d-inline-block small pt-1" href="job-profile">
                    <span className="text-warning">
                      <span className="feather-star" />
                      <span className="feather-star" />
                      <span className="feather-star" />
                      <span className="feather-star text-gray-500" />
                      <span className="feather-star text-gray-500" />
                    </span>
                    <span className="text-dark font-weight-bold ml-2">3.74</span>
                    <span className="text-muted">(567 reviews)</span>
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <div className="border-right pr-3 mr-3">
                    <a className="text-secondary small" href="job-profile">Salaries</a>
                  </div>
                  <a className="small" href="job-profile">Open jobs</a>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>
</div>

</>
  );
}

export default Feed;
