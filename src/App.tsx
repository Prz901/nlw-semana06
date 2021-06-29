import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Switch do react router dom - Nunca deixa duas rotas serem acessadas ao mesmo tempo

import Home from './pages/Home'
import { NewRoom } from './pages/newRoom'
import { Room } from './pages/Room'

import { AuthContextProvider } from './contexts/AuthContext'

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rooms/new' component={NewRoom} />
          <Route path='/rooms/:id' component={Room} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  )
}

export default App
