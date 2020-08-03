/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import 'react-credit-cards/es/styles-compiled.css'
import '../../vendor/slick/slick.min.css'
import '../../vendor/slick/slick-theme.min.css'
import '../../vendor/icons/feather.css'
import '../../vendor/bootstrap/css/bootstrap.min.css'
import '../../css/style.css'
import '../../css/inputcamera.css'
import api from '../../services/api'
import Header from '../../components/Header Bussines';
import { Link } from 'react-router-dom';
import {Divider} from '@material-ui/core'

function Feed() {

    const [booking, setBooking] = useState([])
    const [bookingPremium, setBookingPremium] = useState([])

    useEffect(() => {
        async function List() {
            try {
                const response = await api.get('/bussines/requests')
                console.log(response.data)
                setBooking(response.data)

            } catch (error) {
                console.log(error)
            }
        }
        List()
    }, [])
    useEffect(() => {
      async function List() {
          try {
              const response = await api.get('bussines/requests/premium')
              console.log(response.data)
              setBookingPremium(response.data)

          } catch (error) {
              console.log(error)
          }
      }
      List()
  }, [])

  return (
<>
<div>
  <Header></Header>
  <div className="py-4">
    <div className="container">
      <div className="row">
        {/* Main Content */}
        <main style={{margin:'auto',height:'800px',overflowY:'scroll'}} className="col col-xl-6 order-xl-2 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
        <form className="box shadow-sm border rounded bg-white mb-3 osahan-share-post">
            <h3 style={{fontSize:'20px',textAlign:'center',marginBottom:'35px'}}>Todos que pretendem trabalhar com você</h3>
            {bookingPremium.map(book => (
            <div>
                <div>
                    <p><span>{book.user.name}</span> requisitou a vaga de <span>{book.vacancies.title}</span></p> 
            <Link to={`/profileb/${book.user._id}`} style={{display:'inherit'}} className="btn btn-primary btn-lg">Analise o perfil de {book.user.name}{book.user.Premium ? <i style={{color:'#ffe500',fontSize:'20px'}} data-toggle="tooltip" data-placement="top" title="Verified" className="feather-user-plus" /> : null}</Link>
                </div>
                <hr></hr>   
            </div>
            ))}
            <Divider></Divider>
            {booking.map(book => (
            <div>
                <div>
                    <p><span>{book.user.name}</span> requisitou a vaga de <span>{book.vacancies.title}</span></p> 
            <Link to={`/profileb/${book.user._id}`} style={{display:'inherit'}} className="btn btn-primary btn-lg">Analise o perfil de {book.user.name}{book.user.Premium ? <i style={{color:'#ffe500',fontSize:'20px'}} data-toggle="tooltip" data-placement="top" title="Verified" className="feather-user-plus" /> : null}</Link>
                </div>
                <hr></hr>   
            </div>
            ))}
        </form>  
        </main>
      </div>
    </div>
  </div>
  {/* Bootstrap core JavaScript */}
  {/* slick Slider JS*/}
  {/* Custom scripts for all pages*/}
</div>
</>
  );
}


export default Feed;

