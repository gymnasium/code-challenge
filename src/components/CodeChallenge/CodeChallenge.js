import React from 'react'

import './CodeChallenge.css';

import { UnControlled as CodeMirror } from 'react-codemirror2'
require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');



const CodeChallenge = (props) => {
  return <CodeMirror
    value='<h1>I ♥ react-codemirror2</h1>'
    options={{
      mode: 'xml',
      theme: 'material',
      lineNumbers: true
    }}
    onChange={(editor, data, value) => {
    }}
  />
};

export default CodeChallenge;