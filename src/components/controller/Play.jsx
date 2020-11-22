import React, {Component} from 'react';
import {calculateWinner} from './CalculateWinner';
import {isBoardFull,emptySquares, minMaxAlgo} from './MinMaxAlgo';

export class Play extends Component{

    state = {
        boardStatus: [null,null, null, null, null, null, null, null, null],
        aiPlayer: "O",
        huPlayer: "X",
        buttonIdList: ["b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8"],
        gameOver: false,
        stepNumber:0,
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.newGame = this.newGame.bind(this);
    }

    aiMoveTrigger(){
        let aiMoveObj = minMaxAlgo(this.state.boardStatus, this.state.aiPlayer);
        let curBoard = this.state.boardStatus;
        curBoard[aiMoveObj.index]=this.state.aiPlayer;
        this.setState({
            boardStatus:curBoard, 
            stepNumber:this.state.stepNumber+1
        });
    }

    handleClick(button){
        
        //human move -- selecting the specific button where he clicked and putting his sign
        let buttonId = document.getElementById(button).id;
        let index = -1;
    
        for(let c=0;c<9;c++){
            let str = "b"+c;
            if(str == buttonId){
                index = c;
                break;
            } 
        
        }
        let curBoard = this.state.boardStatus;
        curBoard[index]=this.state.huPlayer;
        this.setState({
            boardStatus:curBoard,
            stepNumber:this.state.stepNumber+1
        });
      
        // AI move after 1 second
        setTimeout(
            () => this.aiMoveTrigger(), 
            1000
        );  
    }

    newGame(){
        let resetBoard = new Array(9).fill(null);
        this.setState({
            boardStatus:resetBoard,
            stepNumber:0
        });
    }

    render(){

        let winner = calculateWinner(this.state.boardStatus);
        let boardFull = isBoardFull(this.state.boardStatus);
        let gameOver = (winner || boardFull) ? true : false;
        let turn="";
        if(!gameOver && this.state.stepNumber%2==0)
            turn="Your Turn"
        else if(!gameOver && this.state.stepNumber%2!=0)  
            turn="Computer's Turn"  
       
        return ( 
            <div className="body-block">
                <div className="centered">
                {gameOver==false?
                     <h2 className="sub-heading">{turn}</h2>:
                     <div className="centered"><h2 className="sub-heading">{winner? 'Winner is '+winner+' ' : 'Game draw! '}</h2><h2 className="reset" onClick={this.newGame}>Try again?</h2></div>
                }
                </div>
                <div className="centered">
                    <div className="board">
                        {
                            this.state.boardStatus.map((sq,i)=>
                                <button id={this.state.buttonIdList[i]} className="square" 
                                        onClick={() => !this.state.boardStatus[i] && !gameOver && this.state.stepNumber%2==0 ? this.handleClick(this.state.buttonIdList[i]) : ''}
                                >{this.state.boardStatus[i]}</button>
                            )
                        } 

                    </div>
                </div> 
            </div>
        
        )
    }
}
export default Play