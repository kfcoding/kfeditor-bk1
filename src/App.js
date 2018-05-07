import React, { Component } from 'react';
import styled from 'styled-components';
import Box from 'react-layout-components';
import './App.css';
import Header from "./components/Header/index";
import Editor from "./components/Editor/index";

const Container = styled.div`
  min-height: 100%;
`;

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header/>
        <Container>

          <Editor/>
        </Container>
      </div>
    );
  }
}

export default App;
