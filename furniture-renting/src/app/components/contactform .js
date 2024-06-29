// ContactForm.js

import React from 'react';
import { FormContainer, Form, Input, Textarea, Button } from './contactformDesign';

const ContactForm = () => {
  return (
    <FormContainer>
      
      <Form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="418a33c9-177b-42db-9e44-f90fe7c19145" />
        <h2>Send Us A Message</h2>
        <Input type="text" name="name" placeholder="Name" color="black" />
        <Input type="email" name="email" placeholder="Email" color="black" />
        <Textarea placeholder="Message" color="black" />
        <Button type="submit">Send Message</Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
