import React,{useEffect} from 'react';
import { useParams, useNavigate } from 'react-router';
import api from '../../services/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Confirmate() {
    const {token} = useParams()
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function Load() {
            try {
              await api.post(`/user/confirmate/${token}/${id}`) 
              
              toast.success('Email confirmado')
              navigate('/sign-in')
            } catch (error) {
            }
        }
    Load()
    }, [token]);

    return(
      <img src='https://i.pinimg.com/originals/e0/7f/6a/e07f6af981d70eb773e6b7d7f1899936.gif' alt="Loading..." style={{height:'100vh',width:'100vw'}}/>
  )
}

export default Confirmate;