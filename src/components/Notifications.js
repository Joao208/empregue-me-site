import React, { useState,useEffect,useMemo } from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import socketio from 'socket.io-client'
import '../css/notification.css'

export default function Notifications(){
  const [visible,setVisible] = useState(false)

  const user_id = sessionStorage.getItem('user_id')

  const socket = useMemo(() => socketio('https://empregue-me-backend.herokuapp.com/', {
      query: { user_id }
  }), [user_id])

  useEffect(() => {
            socket.on('booking_response', booking => {
                console.log(booking)
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
              2
            </Badge>
          </div>
        </NavLink>
        <Collapse
          open={visible}
          className="navbar-expand navbar-nav dropdown-menu"
        >
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="feather-bell"></i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category" style={{color:'green',fontWeight:'bold'}}>Aceito</span>
              <p>
                Isso aí, a empresa{" "}
                <a href={'/company-profile/:id'}><span className="text-success text-semibold">Google</span></a> aceitou
                seu curriculo. Bom trabalho!
              </p>
            </div>
          </DropdownItem>
          <DropdownItem>
            <div className="notification__icon-wrapper">
              <div className="notification__icon">
                <i className="feather-bell"></i>
              </div>
            </div>
            <div className="notification__content">
              <span className="notification__category" style={{color:'red',fontWeight:'bold'}}>Tente novamente ;)</span>
              <p>
                Infelizmente a empresa{" "}
                <a href={'/company-profile/:id'}><span className="text-success text-semibold">Google</span></a> Não aceitou
                seu curriculo, tente novamente!
              </p>
            </div>
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
}
