import { useState } from 'react';
import FormMessaging from '../formMessaging';

function ContactForm() {
  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ email, setEmail ] = useState('');
  const [ name, setName ] = useState('');
  const [ isSuccess, setIsSuccess ] = useState(true)
  const [ isValid, setIsValid ] = useState(false)
  console.log(name)
  console.log(email)
  function validate() {
    const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (
      !email.match(emailRegEx) ||
      name.length===0
    ) setIsValid(false)
    else setIsValid(true)
  }
  return (
    <div>
      <h2>Contact Us</h2>
      <label>
        Name 
        <input   type="text" onChange={(event) => 
          {
            setName(event.target.value)
            validate()
          }}/>
      </label>
      <label>
        Email 
        <input placeholder="your@email.com" type="email" onChange={(event) => 
          {
            setEmail(event.target.value)
            validate()
          }}/>
      </label>
      <button disabled={!isValid} onClick={() =>
        {
          validate()
          setIsSubmitted(true)
        }
      }>Submit</button>
      {isSubmitted && isSuccess && isValid &&
        <FormMessaging isError={false} content="Thanks for your details, we'll be in touch!"/>
      }
      {isSubmitted && !isSuccess && isValid &&
      <FormMessaging isError content="Oops something went wrong, please try again!"/>
      }
      {isSubmitted && !isValid &&
      <FormMessaging isError content="Please check the required field and try again"/>
      }
      {!isSubmitted && !isValid &&
      <FormMessaging isError content="Please fill in the form!"/>
      }
    </div>
  )
}

export default ContactForm;