import React from 'react'
import './Home.css'
import HomeSecurity from './HomeSecurity'
import Card from './Card'
import SignIn from './SignIn'

function Home() {
  return (
    <div>
    <div className='home'>
     <SignIn/>
    </div>
     <div className='hi'>
          <Card/>
     </div>
     </div>
  )
}

export default Home
