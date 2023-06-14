import React from 'react'
import './Home.css'
import HomeSecurity from './HomeSecurity'
import Card from './Card'

function Home() {
  return (
    <div className='home'>
      <h1>"GET PEACE OF MIND,KNOWING YOUR HOME AND BUSINESS IS SECURE!!"</h1>
      <div className='hi'>
        <img src='https://media.istockphoto.com/id/1409181133/photo/large-home-exterior-nevada.webp?b=1&s=170667a&w=0&k=20&c=8jOyZYnQ8pP0YN6X1Oc_6nxlvZV20NFlGJ6bd_3jt3M='/>
        
        <HomeSecurity/>
        </div>
        <Card/>
    </div>
  )
}

export default Home
