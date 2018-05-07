import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-bottom: 1px solid;
  border-color: rgba(0, 0, 0, 0.2);
  height: 80px;
  background: #fff;
  margin-bottom: 30px;
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
      Kfeditor
      </Container>
    )
  }
}

export default Header;