
import { useRef } from 'react'
import React from 'react'
import './contact.css'
import call from './Assets/call.png'
import mail from './Assets/mail.png'
import { TextField,Button } from '@mui/material'
import { createMuiTheme,ThemeProvider } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const theme=createMuiTheme({
  palette:{
    primary:{
      main:'#00FFFF'      
    }
  }
})

const Contact = () => {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_14ox91l', 'template_tj20hkb', form.current, 'W_7dsCRKmxiM5OgTR')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('message sent!');
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <ThemeProvider theme={theme}>
    <div >
        <div className="contact">
          <div className="contact1" >
            <div className="title">
              <h1 style={{color:'white'}}>Contact Me</h1>
            </div>
            <div className="mail">
              <img src={mail} alt="mail" style={{marginRight:'5px'}} />
              <a href="mailto:bhuvanroop22@gmail.com" style={{textDecoration:'none',color:'white'}}  >bhuvanroop22@gmail.com</a>
            </div>
            <div className="mail">
              <img src={call} alt="phone"  style={{marginRight:'5px'}}/>
              <p style={{color:'white'}}>+91-6302055239</p>
            </div>
            <div className="contact-media">
                    <a target='blank' href='https://www.linkedin.com/in/irukulla-bhuvan/' className="img">
                        <img src="https://img.icons8.com/?size=512&id=8808&format=png" alt="LinkedIn" />
                    </a>
                    <a target='blank' href='https://github.com/BhuvanRoop'>
                        <img src="https://img.icons8.com/?size=512&id=106440&format=png" alt="GitHub" />
                    </a>
                    <a target='blank' href='https://www.instagram.com/bhuvi_roop/'>
                        <img src="https://img.icons8.com/?size=512&id=32309&format=png" alt="Insta" />
                    </a>
            </div>
            <a href="Bhuvan's_Resume.pdf" download="Bhuvan's Resume.pdf" >
              <button>Download CV</button>
            </a>

          </div>
          <div className="contact2">
            <div className="form">
            <form ref={form}  onSubmit={sendEmail}>
              <TextField fullWidth label='Name' name="name"  type='text'  variant='outlined'  margin="dense"  focused sx={{ input: { color: 'white' } }}  />
              <br />
              <TextField fullWidth label='Email' name="email" type='email' variant='outlined'  margin="dense" focused sx={{ input: { color: 'white' } }}  />
              <br />
              <TextField fullWidth label='Message' rows={4} name="msg" type='text' variant='outlined'  margin="dense" multiline focused inputProps={{ style: { color: "white" } }} />
              <br />
              <Button variant="outlined" endIcon={<SendIcon />} type='submit'>
                Send
              </Button>
          </form>
            
              

            </div>

          </div>
        </div>

        
    </div>
    </ThemeProvider>

  )
}

export default Contact
