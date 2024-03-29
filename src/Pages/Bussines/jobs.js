import React,{useEffect,useState} from 'react';
import moment from 'moment'
  
import api from '../../services/api'
import { useNavigate } from 'react-router';
import Header from '../../components/Header Bussines';
import { Link } from 'react-router-dom';

function Feed() {

  const [jobs, setJobs] = useState([])
  const navigate = useNavigate()

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
                <button onClick={
                  async function Link(event){
                    event.preventDefault()
                    navigate('/my/vacancies')
                  }
                } style={{background:'#00b3ec',borderRadius:'10px',borderColor:'#00b3ec',color:'#fff',fontFamily:'monospace',margin:'auto',display:'flex'}}>Minhas vagas</button>
                <div className="p-3 border-top">
                  <div className="row">
                  {jobs.map(vacancies => (
                    <div key={vacancies._id} className="col-md-6">
                      <a >
                        <div className="border job-item mb-3">
                          <div className="d-flex align-items-center p-3 job-item-header">
                          <div className="overflow-hidden mr-2">
                             <Link to={`/bussines/jobs-profile/${vacancies._id}`}><h6 style={{textTransform:'capitalize'}} className="font-weight-bold text-dark mb-0 text-truncate">{vacancies.title}</h6></Link>
                             <Link to={`/company-profileb/${vacancies.bussines._id}`}><div className="text-truncate text-primary">{vacancies.bussines.nome}</div></Link>
                               <div className="small text-gray-500"><a href={`https://www.google.com.br/maps/place/${vacancies.bussines.cnpjI.logradouro}`}><i className="feather-map-pin" />{vacancies.bussines.cnpjI.logradouro}</a></div>
                            </div>
                            <img style={{borderRadius:'20px'}} className="img-fluid ml-auto" src={vacancies.avatar} />
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
