import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const userData = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1681494630816-6711406f51f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwd29ya2luZyUyMHByb2Zlc3Npb25hbCUyMHBvdHJhaXR8ZW58MHx8MHx8fDA%3D',
    },
    {
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwd29ya2luZyUyMHByb2Zlc3Npb25hbCUyMHBvdHJhaXR8ZW58MHx8MHx8fDA%3D',
    },
    {
      img: 'https://images.unsplash.com/photo-1718209881007-c0ecdfc00f9d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29ycG9yYXRlJTIwd29ya2luZyUyMHByb2Zlc3Npb25hbCUyMHBvdHJhaXR8ZW58MHx8MHx8fDA%3D',
    },
    {
      img: 'https://images.unsplash.com/photo-1600878459138-e1123b37cb30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvcnBvcmF0ZSUyMHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBwb3RyYWl0fGVufDB8fDB8fHww'
    },
    {
      img: 'https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvcnBvcmF0ZSUyMHdvcmtpbmclMjBwcm9mZXNzaW9uYWwlMjBwb3RyYWl0fGVufDB8fDB8fHww'
    }
  ]
  return (
    <div>
      <Section1 userData={userData}/>
      <Section2/>
    </div>
  )
}

export default App