import React from "react";
import { NavItem, NavLink, Badge, Collapse, DropdownItem } from "shards-react";
import '../css/notification.css'
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
                <a href={'/profile/:id'}><span className="text-success text-semibold">Joao</span></a> requisitou sua vaga 
                de <a href={'/job-profile/:id'}><span className="text-success text-semibold">Atendente</span></a> veja já.
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
                O usuario{" "}
                <a href={'/profile/:id'}><span className="text-success text-semibold">Joao</span></a> requisitou sua vaga 
                de <a href={'/job-profile/:id'}><span className="text-success text-semibold">Atendente</span></a> veja já.
              </p>
            </div>
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
