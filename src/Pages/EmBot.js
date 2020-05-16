import React, { Component } from 'react'

class EmBot extends Component {
 constructor(props){
     super(props)
 }
 componentDidMount(){
    (function(d, m){
        var kommunicateSettings = {"appId":"d6b3d78e4ffd18a27cf2ea580901ac2d","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
      })(document, window.kommunicate || {})
 }
 render(){
     return(
         <div></div>
     )
 }
}

export default EmBot