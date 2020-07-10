/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router';
  
import api from '../../services/api'
import Header from '../../components/Header';
import Lottie from 'react-lottie';
import emptyAnimation from '../../Animations/empty.json'

function Feed() {

  const [users, setUsers] = useState([])
  const [bussines, setBussines] = useState([])
  const [vacancies, setVacancies] = useState([])
  const [userempty, setUserEmpty] = useState(true)
  const [bussinesempty, setBussinesEmpty] = useState(true)
  const [vacanciesempty, setVacanciesEmpty] = useState(true)

  const {named} = useParams()
  
  useEffect(() => {
    async function loadUsers() {
      try {
        const response = await api.get(`/search/${named}`)

        setUsers(response.data.users)
        setBussines(response.data.bussines)
        setVacancies(response.data.vacancies)
        console.log(response.data)

        if(response.data.users){
          setUserEmpty(false)
        }
        if(response.data.bussines){
          setBussinesEmpty(false)
        }
        if(response.data.vacancies){
          setVacanciesEmpty(false)
        }
  
      } catch (e) {
        loadUsers()
      }
    }
    loadUsers()
  }, [])
  
  const lottieOptions = {
    title:'loading',
    loop:true,
    autoplay:true,
    animationData:emptyAnimation
  }


  return (
<>
<div>
  <Header></Header>
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
              {userempty
                  ? <Lottie options={lottieOptions
                    } style={{height:'100%',width:'100%'}} 
                    height='20%'
                    width='20%'
                    />
                 : <div className="row">
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
                }
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
                {vacanciesempty
                  ? <Lottie options={lottieOptions
                    } style={{height:'100%',width:'100%'}} 
                    height='20%'
                    width='20%'
                    />

                 : <div className="row">
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
                }
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
                {bussinesempty
                  ? <Lottie options={lottieOptions
                    } style={{height:'100%',width:'100%'}} 
                    height='20%'
                    width='20%'
                    />
                 : <div className="row">
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
                }
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
