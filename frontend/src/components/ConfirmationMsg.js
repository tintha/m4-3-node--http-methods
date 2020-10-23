import React from "react";
import styled from "styled-components";

const ConfirmationMsg = (props) => {
  const customer = props.customerInfo;
  console.log(customer);
  return <Wrapper>
    Thank you {customer.givenName}! Your {customer.order} will be shipped to your home in {customer.province}, Canada.
  </Wrapper>
}


const Wrapper = styled.p`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  z-index: 4;
`;

export default ConfirmationMsg;
