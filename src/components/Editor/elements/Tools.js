import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50px;
  position: absolute;
  transform: translateX(-100%);
  top: 0;
  left: 0;
`;

class Tools extends React.Component {
  render() {
    return (
      <Container>
        fd
      </Container>
    );
  }
}

export default Tools;