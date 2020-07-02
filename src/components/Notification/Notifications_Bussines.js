import React, { useState,useEffect,useMemo } from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import {toast} from 'react-toastify'
import socketio from 'socket.io-client'
import '../../css/notification.css'
import api from '../../services/api'


export default function Notifications(){
  const [visible,setVisible] = useState(false)
  const [bookingg, setBooking] = useState(false)
  const [loadding, setLoadding] = useState(false)
  const [response, setResponse] = useState([])

  const user_id = sessionStorage.getItem('user_id')

  const socket = useMemo(() => socketio('https://empregue-me-backend.herokuapp.com/', {
      query: { user_id }
  }), [user_id])

  useEffect(() => {
            socket.on('booking_request', booking => {
                console.log(booking)
                setBooking(true)
                setResponse([booking])
            })
  },[socket])

  async function HandleButton(event) {
    event.preventDefault()
    try {
      if(visible === true){
        setVisible(false)
      }else{
      setVisible(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

    useEffect(() => {
    async function notifications(){
      try {
        const response = await api.get('/bussines/notifications')
        console.log(response.data)
        console.log(typeof response.data)
          setResponse(response.data.bookings)
      } catch (error) {
        console.log(error)
      }
    }
    notifications()
  },[])


    return (
      <NavItem className="border-right dropdown notifications">
        <NavLink
          className="nav-link-icon text-center"
          onClick={HandleButton}
        >
          <div className="nav-link-icon__wrapper">
            <i className="feather-bell"></i>
            <Badge pill theme="danger">
              1
            </Badge>
          </div>
        </NavLink>
        <Collapse
          open={visible}
          className="navbar-expand navbar-nav dropdown-menu"
        >
      {response.map(response => (
       <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="feather-bell"></i>
              </div>
            </div>
            {bookingg
            ?<div className="notification__content">
              <span className="notification__category" style={{color:'green',fontWeight:'bold'}}>{response.user.name}</span>
              <p>
                O usuario{" "}
                <a href={`/profileb/${response.user._id}`}><span className="text-success text-semibold">{response.user.name}</span></a> requisitou
                sua vaga em {response.vacancies.text.title}.Veja o curriculo do usuario!
              </p>
              <div style={{flexDirection:'row'}}>
              { loadding ? <p>Aguarde...</p>
              : <button onClick={
              async function Accept(event){
                event.preventDefault()
                setLoadding(true)
                try{
                await api.post(`/bookings/${response._id}/approvals`)
                setLoadding(false)
                toast.success('Aceitado ;)')
              }catch{
                setLoadding(false)
                toast.error('Erro, tente novamente ;)')
                }
              }
              } style={{color:'white',fontWeight:'bold',backgroundColor:'green',border:'none',marginRight:'20px'}}>Aceitar</button>
            }
              {loadding ? <div></div> 
              :<button onClick={
              async function Accept(event){
                event.preventDefault()
                setLoadding(true)
                try{
                await api.post(`/bookings/${response._id}/rejectins`)
                setLoadding(false)
                toast.success('Rejeitado ;)')
                }catch{
                setLoadding(false)
                toast.error('Erro, tente novamente ;)')
                }
              }} style={{color:'white',fontWeight:'bold',backgroundColor:'red',border:'none'}}>Rejeitar</button>              
            }
              </div>
            </div>
            : <p>Nenhuma notificação no momento</p>
          }
          </DropdownItem>
          ))}
        </Collapse>
      </NavItem>
    );
}
