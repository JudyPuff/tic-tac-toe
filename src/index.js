import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
    {props.value}
    </button>
  )
}
// class Square extends React.Component {
//     render() {
//       return (
//         <button className="square" onClick={() => this.props.onClick({value:'X'})}>
//           {this.props.value}
//         </button>
//       )
//     }
//   }
// NB: onClick={props.onClick()} would not work b/c it'd call props.onClick immediatly instead of passing it down!!
  
  class Board extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        squares: Array(9).fill(null),
        xIsNext:true,
      }
    }

    handleClick(i) {
      const squares =
      this.state.squares.slice()
        if (calculateWinner(squres) || squares[i]) {
          return
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
          squares: squares,
        xIsNext: !this.state.xIsNext,})
    }

    renderSquare(i) {
      return ( // putting a ( to stop auto insertion of ; after return
      <Square // passing 2 props from Board to Square: value and onClick (see below)
      value={this.state.squares[i]} 
      onClick={() => this.handleClick(i)}
      />
      );
    }
  
    render() {
      const winner =
      calculateWinner(this.state.squares)
      let status
      if (winner) {
        status = 'Winner: ' + winner
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O')
      }
      // calling the calculateWinner function to check if anyone has won instead of showing next player
      // const status = 'Next player: ' + (this.state.sIsNext ? 'X' : 'O')
      
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squres[a] && squres[a] === squres[b] && squres[c]) {
      return squres[a]
    }
  }
  return null
}


  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  