/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect,useState} from 'react';
import moment from 'moment'

import api from '../../services/api'
import Header from '../../components/Header';

function Feed() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    async function loadSpots() {
        const response = await api.get('/vacancies')

        setJobs(response.data)
    }

    loadSpots()
}, [] )


return (
<>
<div>
  <Header></Header>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main style={{margin:'auto'}} className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div className="p-3 border-top">
                  <div className="row">
                  {jobs.map(vacancies => (
                    <div key={vacancies._id} className="col-md-6">
                      <a href={`https://light-empregue-me.herokuapp.com/job-profile/${vacancies._id}`}>
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                          <div className="overflow-hidden mr-2">
                             <a href={`https://light-empregue-me.herokuapp.com/job-profile/${vacancies._id}`}><h6 style={{textTransform:'capitalize'}} className="font-weight-bold text-dark mb-0 text-truncate">{vacancies.title}</h6></a>
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
