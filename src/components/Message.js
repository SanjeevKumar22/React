
import React from 'react';
class Message extends React.Component {
    constructor(){
        super();
        this.state={message: 'welcome visitor'}
    }

    
    render() {
        
        return(
      
        <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.setState({message: 'welcome vikas'})}>Subscribe</button>
        </div>
    )}
    
}
export default Message