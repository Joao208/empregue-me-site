import React, { useState,useEffect,useMemo } from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import socketio from 'socket.io-client'
import '../css/notification.css'
import api from '../services/api'

export default function Notifications(){
  const [visible,setVisible] = useState(false)
  const [bookingg, setBooking] = useState(false)
  const [response, setResponse] = useState([])

  const user_id = sessionStorage.getItem('user_id')

  const socket = useMemo(() => socketio('https://empregue-me-backend.herokuapp.com/', {
      query: { user_id }
  }), [user_id])

  useEffect(() => {
            socket.on('booking_response', booking => {
                setBooking(true)
                setResponse(booking.bookings)
            })
  },[socket])

  useEffect(() => {
    async function notifications(){
      try {
        const response = await api.get('/notifications')
        console.log(response.data)
        console.log(typeof response.data)
          setResponse(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    notifications()
  },[])

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
    return (
      <NavItem className="border-right dropdown notifications">
        <NavLink
          className="nav-link-icon text-center"
          onClick={HandleButton}
        >
          <div className="nav-link-icon__wrapper">
            <i className="feather-bell"></i>
            {response.map(response => (
            <Badge pill theme="danger">
              1
            </Badge>
            ))}
          </div>
        </NavLink>
        <Collapse
          open={visible}
          className="navbar-expand navbar-nav dropdown-menu"
        >
        {response.map(response => (
         response.bookings.approved ? <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="feather-bell"></i>
              </div>
            </div>
            <a href={`/job-profile/${response.bookings.vacancies}`}> 
            <div className="notification__content">
              <span className="notification__category" style={{color:'green',fontWeight:'bold'}}>Aceito</span>
              <p>
                Isso aí, a requisição em uma de suas vagas{" "}
                <span className="text-success text-semibold">foi aprovada</span> clique agora e confira.
                 Bom trabalho!
              </p>
            </div>
            {
              console.log(response.bookings.approved)
            }
            </a>
          </DropdownItem>
          :<DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="feather-bell"></i>
              </div>
            </div>
          {bookingg
            ?<a href={`/job-profile/${response.bookings.vacancies}`}>
            <div className="notification__content">
              <span className="notification__category" style={{color:'red',fontWeight:'bold'}}>Tente novamente ;(</span>
                <p>
                Ha não, a requisição em uma de suas vagas{" "}
                <span className="text-success text-semibold">foi rejeitada</span> clique agora e confira o porque. 
                Tente novamente!
              </p>
            </div>
            </a>
            : <p>Nenhuma notificação no momento</p>
          }
          </DropdownItem>
        ))} 
        </Collapse>
      </NavItem>
    );
}
