import React from 'react'
import './footer.css'
import Form from '../pages/Form'



function Footer() {
  return (
    <div className='footer'>
    <div className='bottom'>
      <div>
          <h4>About Company</h4>
          <p>Kerio-Valley is the leading regional security provider for technology-driven <br/>security solutions across North-Rift regions.<br/> Founded and headquartered in Kenya in 2010, the company<br/> has grown in stature and now has offices in Kenya North Rift regions.</p>
      </div>
      <div>
          <h4>Get intouch</h4>
          <a href='/'>Kerio-Valley Headquarters- Eldoret Kenya</a>
          <a href='/'> Tel.: +254 711 069 999</a>
          <a href='/'> Email: info@keriovalley.co.ke</a>
          
      </div>
      <div>
          <h4>Our Solutions</h4>
          <a href='/'>Personal security</a>
          <a href='/'>Home security</a>
          <a href='/'>Enterpise security</a>
          
      </div>
      <div>
          <h4>Newslatter</h4>
          <Form/>
      </div>
      
    </div>
    <p>@The Kerio-Valley Security Agency</p>
  </div>
  )
}

export default Footer
