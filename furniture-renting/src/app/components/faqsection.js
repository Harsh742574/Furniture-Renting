  "use client";

import React from 'react';
import styled from 'styled-components';

const FaqSection = () => {
  return (
    <FaqContainer>
  <Title>Frequently Asked Questions</Title>
  <Faq>
    <Question>What types of furniture do you offer for rent?</Question>
    <Answer>We offer a wide range of furniture including sofas, beds, dining tables, office chairs, and more.</Answer>
  </Faq>
  <Faq>
    <Question>How do I rent furniture from your service?</Question>
    <Answer>You can browse our catalog online, select the items you need, and place an order through our website. Alternatively, you can contact us via the provided form, and our team will assist you.</Answer>
  </Faq>
  <Faq>
    <Question>What are the rental terms and conditions?</Question>
    <Answer>Our rental terms vary depending on the type of furniture and the rental period. We offer flexible rental plans to suit your needs. Please refer to our terms and conditions page for detailed information.</Answer>
  </Faq>
  <Faq>
    <Question>Do you provide delivery and setup services?</Question>
    <Answer>Yes, we provide free delivery and setup services for all rented furniture. Our team ensures that the furniture is assembled and placed according to your requirements.</Answer>
  </Faq>
  <Faq>
    <Question>What are your payment options?</Question>
    <Answer>We accept various payment methods including credit/debit cards, online banking, and cash on delivery. You can choose the option that is most convenient for you.</Answer>
  </Faq>
  <Faq>
    <Question>Can I extend my rental period?</Question>
    <Answer>Yes, you can extend your rental period by contacting our customer support team before the end of your current rental term. Additional charges may apply.</Answer>
  </Faq>
</FaqContainer>
  
  );
};

export default FaqSection;

const FaqContainer = styled.div`
  background-color: #ffffff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #ff6f61;
  text-align: center;
  margin-bottom: 20px;
`;

const Faq = styled.div`
  margin-bottom: 20px;
  padding: 10px 20px;
  border-left: 4px solid #ff6f61;
  background-color: #f9f9f9;
  border-radius: 4px;
`;

const Question = styled.p`
  font-weight: 600;
  font-size: 18px;
  margin: 0;
  color: #333;
`;

const Answer = styled.p`
  margin: 10px 0 0 0;
  font-size: 16px;
  color: #666;
`;
