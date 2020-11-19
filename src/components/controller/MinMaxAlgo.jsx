import {calculateWinner} from './CalculateWinner';

export function isBoardFull(board){
    for(let c=0;c<9;c++){
        if(board[c]==null)
            return false;
    }
    return true;
}

export function emptySquares(board){
    let squareList = [];
    for(let i=0;i<9;i++){
        if(board[i]==null)
            squareList.push(i);
    }
    return squareList;
}

export function minMaxAlgo(board, player){
    const aiPlayer="O";
    const huPlayer="X";
    let availSpotList = emptySquares(board);

    //terminating conditions
    if(isBoardFull(board)){
        return {score:0};
    }
    if(calculateWinner(board)=="X"){
        return {score: -10};
    }
    if(calculateWinner(board)=="O"){
        return {score: 10};
    }
    ////

    let moveObjList = [];
    for(let i=0;i<availSpotList.length;i++){
        let moveObj = {};
        moveObj.index=availSpotList[i];
        board[availSpotList[i]]=player;

        if(player==aiPlayer){
            let result = minMaxAlgo(board,huPlayer);
            moveObj.score = result.score;
        }
        else{
            let result = minMaxAlgo(board,aiPlayer);
            moveObj.score = result.score;
        }
        board[availSpotList[i]]=null;
        moveObjList.push(moveObj);
    }

    let bestMove;
    if(player==aiPlayer){
        let bestScore = -100;
        for(let i=0; i<moveObjList.length;i++){
            if(moveObjList[i].score>bestScore){
                bestScore=moveObjList[i].score;
                bestMove=i;
            }
        }
    }
    else{
        let minScore = 100;
        for(let i=0; i<moveObjList.length;i++){
            if(moveObjList[i].score<minScore){
                minScore=moveObjList[i].score;
                bestMove=i;
            }
        }
    }

    return moveObjList[bestMove];

}