import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { debounce } from 'lodash';

import { Controlled as CodeMirror } from 'react-codemirror2';
import * as CodeChallengeActions from '../../store/CodeChallenge/actions';

import './CodeChallenge.css';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class CodeChallenge extends PureComponent {
  constructor(props) {
    super(props);

    const { code } = this.props;
    this.state = {
      inputCode: code,
    };
  }

  handleOnBeforeChange = (editor, data, codeFromEditor) => {
    this.setState({
      inputCode: codeFromEditor,
    });
  }

  handleOnChange = (editor, data, codeFromEditor) => {
    const { codeUpdated } = this.props;
    codeUpdated(codeFromEditor);
  }

  render() {
    const {
      code,
      prompt,
      goalCode,
      questionNumber,
    } = this.props;

    const { inputCode } = this.state;

    const styles = {
      codeContainer: {
        display: 'grid',
        gridTemplateRows: '30% 70%',
        gridTemplateColumns: '50% 50%',
      },
      codeMirror: {
        gridColumnStart: 1,
        gridRowStart: 2,
      },
      goalDisplay: {
        gridColumnStart: 1,
        gridColumnEnd: 2,
        gridRowStart: 1,
        border: '1px solid #444',
      },
      iFrameContainer: {
        border: '1px solid #444',
        gridColumnStart: 2,
        gridRowStart: 2,
      },
      iFrame: {
        border: 'none',
        margin: 0,
        padding: 0,
        width: '100%',
      },
      prompt: {
        fontSize: '1.5rem',
      },
      promptContainer: {
        margin: '1.5rem 0',
      },
      questionNumber: {
        fontWeight: '900',
        margin: '0 1rem',
        color: '#777',
      },
    };

    return (
      <React.Fragment>
        <div style={styles.container}>
          <div style={styles.promptContainer}>
            <span style={styles.questionNumber}>
              {questionNumber}
            </span>
            <span style={styles.prompt}>
              {prompt}
            </span>
          </div>
          {goalCode && (
            <div style={styles.goalDisplay}>
              <iframe
                srcDoc={goalCode}
                style={styles.iFrame}
                title="goal-code"
              />
            </div>
          )}
          <div style={styles.codeContainer}>
            <div style={styles.codeMirror}>
              <CodeMirror
                value={inputCode}
                options={{
                  mode: 'xml',
                  theme: 'material',
                  lineNumbers: true,
                  viewportMargin: 50,
                }}
                onBeforeChange={this.handleOnBeforeChange}
                onChange={this.handleOnChange}
              />
            </div>
            <div style={styles.iFrameContainer}>
              <iframe
                srcDoc={code}
                style={styles.iFrame}
                title="code-challenge"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

CodeChallenge.defaultProps = {
  code: null,
  codeUpdated: () => null,
  goalCode: null,
  prompt: '',
  questionNumber: null,
};

CodeChallenge.propTypes = {
  goalCode: PropTypes.string, // the "correct" answer/approach as html, as input by the platform
  prompt: PropTypes.node, // the guidelines for this challenge.  The question text
  questionNumber: PropTypes.number,

  code: PropTypes.string,
  codeUpdated: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  const { codeChallenge } = state;
  return {
    code: codeChallenge.code,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  codeUpdated: (code) => {
    dispatch(CodeChallengeActions.codeUpdated(code));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CodeChallenge);
