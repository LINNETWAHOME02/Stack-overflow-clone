import React, {Component} from "react";

class ChatBot extends Component {
   componentDidMount(){
    (function(d, m){
        var kommunicateSettings = 
            {"appId":"30d417aa1e768f1daf0fac4ce97b095a1","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }
   render(){
    return(
        <div>
        <h2>This is our chat bot</h2>
        </div>
    )
   }
}

export default ChatBot;