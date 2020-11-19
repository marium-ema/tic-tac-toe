import React, {Component} from 'react'

export class ViewHome extends Component{
    render(){
        return (
        <div className="App">
            <header className="App-header">
                <img src={process.env.PUBLIC_URL + '/images/favicon.ico'} className="App-logo" alt="logo" />
                <p style={{fontFamily:'cursive', fontSize:'40px'}}>
                Welcome to Tic-Tac-Toe game!
                </p>
            </header>
        </div> )
    }
}
export default ViewHome
