import React,{useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import api from '../../services/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadImg from '../../img/loadani.gif'

function Confirmate() {
    const {token} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function Load() {
            try {
              const response = await api.post(`/user/confirmate/${token}`) 
              
              console.log(response.data)
              toast.success('Email confirmado')
              navigate('/')
            } catch (error) {
                console.log(error)
            }
        }
    Load()
    }, [token]);

    return(
      <img src={LoadImg} alt="Loading..." style={{height:'100vh',width:'100vw'}}/>
  )
}

export default Confirmate;