import React, { Component } from 'react'
import AppRouter from './routers/AppRouter'

export class App extends Component {
  render() {
    return (
      <div>
        <AppRouter/>
      </div>
    )
  }
}

export default App