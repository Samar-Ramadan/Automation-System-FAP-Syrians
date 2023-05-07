import React from 'react';
import styled from 'styled-components';
import Barcode from 'react-barcode';

const StyledCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Name = styled.h2`
  color: #2c3e50;
  font-size: 24px;
  margin-top: 0;
`;

const Info = styled.p`
  color: #7f8c8d;
  font-size: 16px;
  margin: 5px 0;
`;

const BarcodeWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const RedBarcode = styled(Barcode)`
  rect {
    fill: #e74c3c;
  }
`;

const BlueBarcode = styled(Barcode)`
  rect {
    fill: #3498db;
  }
`;

const Card = React.forwardRef((props, ref) => {
  return (
    <StyledCard ref={ref}>
      <Name>{props.name}</Name>
      <Info>Email: {props.email}</Info>
      <Info>Phone: {props.phone}</Info>
      <BarcodeWrapper>
        {props.barcodeColor === 'red' ? (
          <RedBarcode value={props.barcodeValue} />
        ) : (
          <BlueBarcode value={props.barcodeValue} />
        )}
      </BarcodeWrapper>
    </StyledCard>
  );
});

export default Card;