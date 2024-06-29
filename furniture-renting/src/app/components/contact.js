  // App.js
  "use client";
  import React from 'react';
  import styled from 'styled-components';
  import ContactForm from './contactform ';
  import InfoSection from './infosection';
  import FaqSection from './faqsection';


  const contact = () => {
    return (
      <Container>
        
        <Header>
          <h1>Contact us and get your deal of choice</h1>
        </Header>
        <Content>
          <InfoSection />
          <ContactForm />
          <FaqSection />
        </Content>
      </Container>
    );
  };

  export default contact;

  const Container = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: #f8f9fa;
    background : url("./images/pic1.jpeg ")
    color: #212529;
    background: 
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
  `;

  const Header = styled.header`
    text-align: center;
    margin-bottom: 40px;
    h1 {
      font-size: 2.5rem;
      font-weight: 700;
      color: #343a40;
    }
  `;

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  `;
