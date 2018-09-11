import React, { Component } from 'react';

import './CodeChallenge.css';

import { Controlled as CodeMirror } from 'react-codemirror2';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');


class CodeChallenge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '<h1>I ♥ Gymnasium</h1>',
    };
  }

  handleOnBeforeChange = (editor, data, value) => {
    this.setState({
      code: value,
    });
  }

  hanleOnChange = (editor, data, value) => {
    console.log(editor, data, value);
  }

  render() {
    const { code } = this.state;

    const styles = {
      container: {
      },
      iFrame: {
        border: 'none',
        margin: 0,
        padding: 0,
        width: '100%',
      },
    };

    return (
      <React.Fragment>
        <div style={styles.container}>
          <CodeMirror
            value={code}
            options={{
              mode: 'xml',
              theme: 'material',
              lineNumbers: true,
            }}
            onBeforeChange={this.handleOnBeforeChange}
            onChange={this.hanleOnChange}
        />
          <iframe
            srcDoc={code}
            style={styles.iFrame}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default CodeChallenge;
