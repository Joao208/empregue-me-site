import React,{useEffect} from 'react';
import { useNavigate, useParams } from 'react-router';
import api from '../../services/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Confirmate() {
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        async function Load() {
            try {
              await api.post(`/user/${id}`, async function(err, response){
                if(err){
                  
                }
                if(response){
                  await api.post(`/user/premiun/create`) 
              
                  toast.success('Obrigado por se tornar um premiun ;)')    
                }
              })
            } catch (error) {
              console.log(error)
            } finally {
              navigate('/')
            }
        }
    Load()
    }, []);

    return(
      <img src='https://i.pinimg.com/originals/e0/7f/6a/e07f6af981d70eb773e6b7d7f1899936.gif' alt="Loading..." style={{height:'100vh',width:'100vw'}}/>
  )
}

export default Confirmate;