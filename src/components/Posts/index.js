import React, { useState} from "react";
import { NavItem, NavLink, Collapse, DropdownItem } from "shards-react";
import api from '../../services/api'
import '../../css/notification.css'

export default function Notifications(){
  const [visible,setVisible] = useState(false)
  const [response, setResponse] = useState([])

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
            <span>...</span>
          </div>
        </NavLink>
       <Collapse
          open={visible}
          className="navbar-expandd navbar-navd dropdown-menud"
        >
        <DropdownItem>
            <form className="notification__content">
              <button onClick={
                  async function Delete(){
                    try {
                      await api.delete('/posts/:id')
                    } catch (error) {
                      console.log(error)
                    }
                  }                
              } className="notification__category" style={{color:'red',fontWeight:'bold',backgroundColor:'none',border:'none'}}>Deletar</button>
            </form>
          </DropdownItem>
        </Collapse>
      </NavItem>
    );
}
