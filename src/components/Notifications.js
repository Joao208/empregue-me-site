import React, { useState,useEffect,useMemo } from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import socketio from 'socket.io-client'
import '../css/notification.css'

export default function Notifications(){
  const [visible,setVisible] = useState(false)
  const [approved, setApproved] = useState(false)
  const [Title, setTitle] = useState('')
  const [id, setId] = useState('')
  const [bookingg, setBooking] = useState(false)

  const user_id = sessionStorage.getItem('user_id')

  const socket = useMemo(() => socketio('https://empregue-me-backend.herokuapp.com/', {
      query: { user_id }
  }), [user_id])

  useEffect(() => {
            socket.on('booking_response', booking => {
                setApproved(booking.approved)
                setTitle(booking.vacancies.text.title)
                setId(booking.vacancies.bussines)
                setBooking(true)
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
        { approved ? <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="feather-bell"></i>
              </div>
            </div>
            <a href={`/company-profile/${id}`}> 
            <div className="notification__content">
              <span className="notification__category" style={{color:'green',fontWeight:'bold'}}>Aceito</span>
              <p>
                Isso aí, a vaga de{" "}
                <span className="text-success text-semibold">{Title}</span> foi aprovada
                entre em contato com a empresa agora. Bom trabalho!
              </p>
            </div>
            </a>
          </DropdownItem>
          :<DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="feather-bell"></i>
              </div>
            </div>
          {bookingg
            ?<a href={`/company-profile/${id}`}>
            <div className="notification__content">
              <span className="notification__category" style={{color:'red',fontWeight:'bold'}}>Tente novamente ;)</span>
              <p>
                Infelizmente a vaga de{" "}
                <span className="text-success text-semibold">{Title}</span> não foi aprovada
                , tente novamente!
              </p>
            </div>
            </a>
            : <p>Nenhuma notificação no momento</p>
          }
          </DropdownItem>
          }

        </Collapse>
      </NavItem>
    );
}
