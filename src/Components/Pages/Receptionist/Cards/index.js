import React, { useRef } from 'react';
import styled from 'styled-components';
import Card from './Card';
import ReactToPrint from 'react-to-print';
import { useLocation } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f1f2f6;
`;

const Content = styled.div`
  max-width: 400px;
`;

const Index = (props) => {
  debugger;
   //const data = props.data !== undefined ? props.data : null;
  // console(data);

  const location = useLocation();
  const data = location.state;

  const componentRef = useRef();

  return (
    <Wrapper>
      <Content>
        <Card
          name=""
          email="johndoe@example.com"
          phone="555-1234"
          barcodeValue="1234567890"
          barcodeColor="red"
          ref={componentRef}
        />
        <ReactToPrint
          trigger={() => <button>Print</button>}
          content={() => componentRef.current}
        />
      </Content>
    </Wrapper>
  );
};

export default Index;