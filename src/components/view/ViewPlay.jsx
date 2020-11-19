import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Play from '../controller/Play'

class ViewPlay extends Component{
    render(){
        return (
         <div>
             <h1 className="centered" style={{fontFamily:'cursive'}}>Enjoy your game!</h1>
             <Play/>   
        </div>
        
        )
    }
}
export default ViewPlay
