import React from 'react'
import "./pr_style.css"
import socketIOClient from "socket.io-client";
import {sendMessage} from '../actions/action_socket'
import  {connect} from 'react-redux'


class socket extends React.Component{

  state={

    data:{
      handle:"",
      message:""
    },
  
  }

  componentDidMount() {
    // const obj={
    //   handle:"handle_1",
    //   message:"message_1"
    // }
    // this.props.getChat(obj)
    // const endpoint = "http://localhost:4000";
    // this.socketIo = socketIOClient(endpoint); 

    //  this.socketIo.on("chat",(data)=>{
    //      this.setState({messages:[...this.state.messages,data]});
    //  })
   
    
  }

  handleChange=(event)=>{  
    
   let data = this.state.data
   data[event.target.name] = event.target.value
   this.setState({data});
  }
  handleClick=(event)=>{

    event.preventDefault();
    ///////////

    console.log(this.state.data)
    // this.socketIo.emit('chat',this.state.data) 
    //////////

    this.props.sendMessage(this.state.data)

    const data = {      
        handle:"",
        message:""      
    }
    this.setState({data});
  }

  render(){
  
    return(
    <div className="container" >
      <h1>socket</h1>       
     <label><input type="text" placeholder="Handle" name="handle" value={this.state.data.handle}  onChange={this.handleChange}/> </label>
     <label><input type="text" placeholder="Message" name="message" value={this.state.data.message} onChange={this.handleChange}/></label>
     <label><button id="Send" onClick={this.handleClick}>Send</button></label>
     
     <p>{JSON.stringify(this.props.messages)}</p>
     

    </div>)
  }
}



const mapStateToProps = (state) => {
  console.log(state.sockets.messages)
  return {
    messages:state.sockets.messages
  }

}

//export default socket

export default connect(mapStateToProps,{sendMessage}) (socket)