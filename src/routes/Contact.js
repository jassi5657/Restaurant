import React from 'react'
import "./App.css"
import styled from 'styled-components';
import Footer from "../components/Footer"

const Contact = () => {
  const Wrapper = styled.section``;


  return (
    <Wrapper>
      <div>
        <h1 className='Title'>Feel Free To Contact Us </h1>

        <div className="slider-contact">

        </div>

      </div>
      <br />
      <br />




      <h1 className='Title1'>Our Location</h1>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.3402771309934!2d75.99678931462226!3d31.183577170816005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a9482f0d52939%3A0xdde7d819f8ca67d9!2sNew%20Pizza%20Planet!5e0!3m2!1sen!2sin!4v1681127383790!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
        <h1 className='Title1'>Write Us</h1>
      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xayzloyg" method='POST'>
            <input type="text" name='username' placeholder='Enter Your Username' autoComplete='off' required />

            <input type="email" name='Email' placeholder='Enter Your Email Address' autoComplete='off' required />

            <textarea name="message" id="" cols="40" rows="4" placeholder='Enter Your Message Here'></textarea>
    <button className='btn-contact' type='submit'>Send</button>
            

          </form>
        </div>
      </div>
     
      <Footer/>
    </Wrapper>
  )
}

export default Contact
