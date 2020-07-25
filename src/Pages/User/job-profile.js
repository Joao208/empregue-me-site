/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useState,useEffect} from 'react';
import moment from 'moment'
import {useParams} from 'react-router'

import Lottie from 'react-lottie'
import loadinganimate from '../../Animations/loading.json'
import api from '../../services/api'
import completedAnimate from '../../Animations/completed.json'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';

function Feed() {

  const [jobs, setJobs] = useState([])
  const [title, setTitle] = useState('')
  const [description, setdescription] = useState('')
  const [salary, setsalary] = useState('')
  const [city, setcity] = useState('')
  const [uf, setuf] = useState('')
  const [avatar, setavatar] = useState('')
  const [logradouro, setlogradouro] = useState('')
  const [nome, setNome] = useState('')
  const [loading,setLoading] = useState(false)
  const [completed, setCompleted] = useState(false)
  const [button,setButton] = useState(true)
  const [cargo, setCargo] = useState('')
  const [employment, setEmployment] = useState('')
  const [bussines_id, setBussines_id] = useState('')
  const {id} = useParams()

  useEffect(() => {
    async function loadSpots() {
        const response = await api.get(`/vacancie/${id}`)

        setJobs(response.data)
        setTitle(response.data.title)
        setdescription(response.data.text.description)
        setsalary(response.data.text.salary)
        setcity(response.data.text.city)
        setuf(response.data.text.uf)
        setavatar(response.data.bussines.avatar)
        setlogradouro(response.data.bussines.cnpjI.logradouro)
        setNome(response.data.bussines.nome)
        setCargo(response.data.text.cargo)
        setEmployment(response.data.text.employment)
        setBussines_id(response.data.bussines._id)
    }

    loadSpots()
}, [] )


async function handleSubmit(event) {
  event.preventDefault();
  setButton(false)
  setLoading(true)
  try{
  await api.post(`vacancies/${id}/booking`)

  setLoading(false)
  setCompleted(true)
  }catch{
    setLoading(false)
    setButton(true)
    toast.error('Falha ao requisitar vaga, verifique seus dados');
  }

}

const lottieOptions = {
  title:'loading',
  loop:true,
  autoplay:true,
  animationData:loadinganimate
}

const lottieOptionscompleted = {
  title:'loading',
  loop:true,
  autoplay:true,
  animationData:completedAnimate
}

  return (
<>

<div>
  <Header></Header>
  <div className="profile-cover text-center">
    <img className="img-fluid" style={{width:'100%',height:'250px'}} src={jobs.avatar ? jobs.avatar : 'https://serverem.s3.us-east-2.amazonaws.com/job-profile.jpg'} />
  </div>
  
  <div className="bg-white shadow-sm border-bottom">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="d-flex align-items-center py-3">
            <div className="profile-left">
              <h5 style={{textTransform:'capitalize'}} className="font-weight-bold text-dark mb-1 mt-0">{title}</h5>
              <p className="mb-0 text-muted"><a className="mr-2 font-weight-bold"  href={`/company-profile/${bussines_id}`}>{nome}</a></p>
            </div>
            <form onSubmit={handleSubmit} className="profile-right ml-auto">
            {
              !! button
              && <button className="btn btn-primary btn-block text-uppercase" type="submit" onSubmit={handleSubmit}>Ingressar</button>

            }
            {
                !! loading
              && <Lottie options={lottieOptions
              }
              height='100px'
              width='100px'
              className="btn btn-primary btn-block text-uppercase"
              />
              }
            {
                !! completed 
               && <Lottie options={lottieOptionscompleted
                } 
                height='100px'
                width='100px'
                className="btn btn-primary btn-block text-uppercase"
                />
               
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Visão geral da vaga</h6>
            </div>
            <div className="box-body p-3">
              <p>{description}</p>
            </div>
          </div>
          <div className="box shadow-sm border rounded bg-white mb-3">
            <div className="box-title border-bottom p-3">
              <h6 className="m-0">Detalhes da vaga</h6>
            </div>
            <div className="box-body">
              <table className="table table-borderless mb-0">
                <tbody>
                  <tr className="border-bottom">
                    <th className="p-3">Cargo</th>
                    <td className="p-3">{cargo}
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Salario</th>
                    <td className="p-3">R${salary},00</td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Employment Type</th>
                    <td className="p-3">{employment}
                    </td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Cidade</th>
                    <td className="p-3">{city}</td>
                  </tr>
                  <tr className="border-bottom">
                    <th className="p-3">Estado</th>
                    <td className="p-3">{uf}</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </main>
        <aside className="col col-xl-3 order-xl-1 col-lg-6 order-lg-2 col-md-6 col-sm-6 col-12">
          <div className="box mb-3 shadow-sm border rounded bg-white profile-box text-center">
            <div className="p-5">
              <img src={avatar ? avatar : 'https://serverem.s3.us-east-2.amazonaws.com/clogo2.png'} className="img-fluid"  alt="Responsive image" />
            </div>
            <div className="p-3 border-top border-bottom">
             <Link to={`/company-profile/${bussines_id}`}><h5 className="font-weight-bold text-dark mb-1 mt-0">{nome}</h5></Link> 
            <a href=""><p className="mb-0 text-muted">{logradouro}
              </p></a>  
            </div>
            <div className="p-3">
              <div className="d-flex align-items-top mb-2">
                <p className="mb-0 text-muted">Postado</p>
                <p className="font-weight-bold text-dark mb-0 mt-0 ml-auto">{moment(jobs.createdAt).fromNow()}</p>
              </div>
            </div>
          </div>
        </aside>
        <aside className="col col-xl-3 order-xl-3 col-lg-6 order-lg-3 col-md-6 col-sm-6 col-12">
          <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center">
              <div className="p-3">
              <button type="button" className="btn btn-outline-gold pl-4 pr-4"> Contratar Premiun </button>
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
