import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Controlled as CodeMirror } from 'react-codemirror2';
import * as CodeChallengeActions from '../../store/CodeChallenge/actions';

import styles from './CodeChallenge.module.css';
import './CodeChallenge.css';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class CodeChallenge extends PureComponent {
  constructor(props) {
    super(props);

    const { code } = this.props;
    this.state = {
      inputCode: code,
      isGrading: false,
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

  handleSubmitForGrading = () => {
    const { submitForGrading } = this.props;

    this.setIsGrading(true);

    submitForGrading();

    // just a dummy timeout
    setTimeout(
      this.setIsGrading,
      3000,
    );
  }

  setIsGrading = (isGrading = false) => {
    this.setState({
      isGrading,
    });
  }

  render() {
    const {
      code,
      prompt,
      goalCode,
      questionNumber,
    } = this.props;

    const {
      isGrading,
      inputCode,
    } = this.state;

    return (
      <React.Fragment>
        <div className={styles.container}>
          <div className={styles.promptContainer}>
            <span className={styles.questionNumber}>
              {questionNumber}
            </span>
            <span className={styles.prompt}>
              {prompt}
            </span>
          </div>
          {goalCode && (
            <div className={styles.goalDisplay}>
              <iframe
                srcDoc={goalCode}
                className={styles.iFrame}
                title="goal-code"
              />
            </div>
          )}
          <div className={styles.codeContainer}>
            <div className={styles.codeMirror}>
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
            <div className={styles.iFrameContainer}>
              <iframe
                srcDoc={code}
                className={styles.iFrame}
                title="code-challenge"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={this.handleSubmitForGrading}
            disabled={isGrading}
            className={styles.submit}
          >
            Submit
          </button>
        </div>
      </React.Fragment>
    );
  }
}

CodeChallenge.defaultProps = {
  code: null,
  goalCode: null,
  prompt: '',
  questionNumber: null,
};

CodeChallenge.propTypes = {
  goalCode: PropTypes.string, // the "correct" answer/approach as html, as input by the platform
  prompt: PropTypes.node, // the guidelines for this challenge.  The question text
  questionNumber: PropTypes.number,

  code: PropTypes.string,
  codeUpdated: PropTypes.func.isRequired,
  submitForGrading: PropTypes.func.isRequired,
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
  submitForGrading: () => {
    dispatch(CodeChallengeActions.gradeProblem());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CodeChallenge);
