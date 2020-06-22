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
          className="dropdown-menu dropdown-menu-small"
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
                <span className="text-success text-semibold">Google</span> aceitou
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
                <span className="text-danger text-semibold">Google</span>. Não aceitou
                seu curriculo, tente novamente!
              </p>
            </div>
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
  }
}
