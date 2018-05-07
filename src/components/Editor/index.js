import React from 'react';
import Plain from 'slate-plain-serializer';
import styled from 'styled-components';

import {Editor} from 'slate-react';
import { Value } from 'slate';

import ReactDOM from 'react-dom'
import initialValue from './value.json'
import Paragraph from "./elements/Paragraph";

const Container = styled.div.attrs({
  // contentEditable: "true"
})`
  width: 900px;
  padding: 40px;
  margin: 0px auto;
  background: #fff;
  color: #3B454E;
`;

const Title = styled.div`
  margin: 20px 0 40px 0;
  font-size: 22px;
  height: 45px;
  line-height: 45px;
`;

function CodeNode(props) {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}

class MainEditor extends React.Component {
  state = {
    value: Value.fromJSON({
      document: {
        nodes: [{
          object: 'block',
          type: 'paragraph',
          text: ''
        }]
      }
    })
  };

  onChange = ({ value }) => {
    this.setState({ value })
    console.log(value.toJSON())
  };
  onKeyDown = (event, change) => {
    // event.preventDefault();

    switch (event.key) {
      case 'Enter':
        change.insertBlock('paragraph');
        return false;
    }

    return false;

    if (event.key != '`' || !event.ctrlKey) return;
    event.preventDefault()
    // Determine whether any of the currently selected blocks are code blocks.
    const isCode = change.value.blocks.some(block => block.type == 'code')

    // Toggle the block type depending on `isCode`.
    change.setBlocks(isCode ? 'paragraph' : 'code')
    return true
  }

  renderNode = props => {
    switch (props.node.type) {
      case 'code':
        return <CodeNode {...props} />
      case 'paragraph':
        return <Paragraph {...props} />
    }
  }

  render() {

    return (
      <Container>
        <Title placeholder={"在这里输入标题"} contentEditable={true}></Title>
        <Editor
          value={this.state.value}
          placeholder={'从这里开始写内容'}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          renderNode={this.renderNode}
        >
        </Editor>
      </Container>
    )
  }
}

export default MainEditor;