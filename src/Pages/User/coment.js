/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React,{useEffect,useState} from 'react';
import { ReactTinyLink } from "react-tiny-link";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
import moment from 'moment'
import '../../vendor/slick/slick.min.css'
import '../../vendor/slick/slick-theme.min.css'
import '../../vendor/icons/feather.css'
import '../../vendor/bootstrap/css/bootstrap.min.css'
import '../../css/style.css'

import '../../css/inputcamera.css'

import img_logo_svg from '../../img/logo.png'
import img_job1 from '../../img/job1.png'
import img_ads1 from '../../img/ads1.png'
import img_fav from '../../img/fav.png'
import api from '../../services/api'
import { useNavigate, useParams } from 'react-router';
import loadinganimate from '../../Animations/lazyload.json'
import {MapContainer} from '../../style.js'
import AdSense from 'react-adsense';
import Lottie from 'react-lottie'

function Feed() {

  const history = useNavigate()
  const [name,setName] = useState('')
  
  const [profile, setProfile] = useState([])
  const [postd, setPosts] = useState('')
  const [text, setTextt] = useState('')
  const {id} = useParams()

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/profileview')
      
      setProfile(response.data.profile)
    }
    
    loadSpots()
  }, [] )
  
  async function SearchValue(event){
    event.preventDefault()
    
    history(`/conections/${name}`)
  }

  useEffect(() => {
    async function Feed() {
      try{
      const response = await api.get(`/coments/add/populate/${id}`)
      console.log(response.data)

      }catch(e){
      console.log(e)
      }
    }
    
    Feed()
  }, [] )

    


  return (
<>

</>
  );
}


export default Feed;

