import React,{useEffect,useMemo} from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import '../css/notification.css'
import socketio from 'socket.io-client'
import api from '../../src/services/api'

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    };

    this.toggleNotifications = this.toggleNotifications.bind(this);
  }

  toggleNotifications() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const user_id = sessionStorage.getItem('user_id')

    const socket = useMemo(() => socketio('https://empregue-me-backend.herokuapp.com/', {
      query: { user_id }
  }), [user_id])

  useEffect(() => {
            socket.on('booking_response', booking => {
                console.log(`${booking.approved ? 'APROVADA' : 'REJEITADA'}`)
            })
  },[socket])

    return (
      <NavItem className="border-right dropdown notifications">
        <NavLink
          className="nav-link-icon text-center"
          onClick={this.toggleNotifications}
        >
          <div className="nav-link-icon__wrapper">
            <i className="feather-bell"></i>
            <Badge pill theme="danger">
              2
            </Badge>
          </div>
        </NavLink>
        <Collapse
          open={this.state.visible}
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
}
