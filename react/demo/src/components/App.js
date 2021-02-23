import React, { Comment } from 'react'

class App extends Comment {
  render() {
    return ( // jsx = js + XML
      <ul className="items">
        <li>vue</li>
        <li>react</li>
        <li>{ false ? 'react' : 'REACT' }</li>
      </ul>
    )
  }
}

export default App