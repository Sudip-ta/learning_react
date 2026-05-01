import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className="parent">
      <Card user="Sudipta" age={22} image="https://images.unsplash.com/photo-1768405942784-0d48a1f44fe7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3N3x8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Sundori" age={0} image="https://plus.unsplash.com/premium_photo-1777125999599-8dd0a8264429?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card user="Paglu" age={99} image="https://images.unsplash.com/photo-1776798973362-c985f57c08e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNTF8fHxlbnwwfHx8fHw%3D"/>
    </div>
  )
}

export default App