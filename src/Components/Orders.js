import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  background: #333;
  justify-content: center;
  height: 100vh;
  align-items: center
`
const Heading = styled.h1`
  color: #fff;
  font-size: 14px;

`
function Orders() {
  return (
     <>
      <Wrapper>
        <Heading>
          Hello
        </Heading>
      </Wrapper>
     </>
  );
}

export default Orders;
