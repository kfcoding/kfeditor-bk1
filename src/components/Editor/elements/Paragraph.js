import React from 'react';
import styled from 'styled-components';
import Tools from "./Tools";

const Container = styled.div`
  margin: 15px 0;
  position: relative;
`;


class Paragraph extends React.Component {
  render() {
    return (
      <Container>
        <Tools/>
        {this.props.children}
      </Container>
    )
  }
}

export default Paragraph;