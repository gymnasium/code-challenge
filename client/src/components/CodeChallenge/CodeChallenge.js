import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Controlled as CodeMirror } from 'react-codemirror2';
import * as CodeChallengeActions from '../../store/CodeChallenge/actions';

import styles from './CodeChallenge.module.css';
import './CodeChallenge.css';
import CodeChallengeHeader from './CodeChallengeHeader';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

const initialState = {
  isGrading: false,
};

class CodeChallenge extends PureComponent {
  state = initialState;

  handleOnBeforeChange = (editor, data, codeFromEditor) => {
    const { codeUpdated } = this.props;
    codeUpdated(codeFromEditor);
  }

  handleResetChallenge = () => {
    const { resetChallenge } = this.props;

    // reset the loading and grading states locally
    this.setState(initialState, () => {
      // reset code and grade in redux
      resetChallenge();
    });
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
      userInputCode,
      grade,
      prompt,
      goalCode,
      questionNumber,
      title,
    } = this.props;

    const {
      isGrading,
    } = this.state;

    return (
      <div className={styles.container}>
        <CodeChallengeHeader
          grade={grade}
          isGrading={isGrading}
          questionNumber={questionNumber}
          prompt={prompt}
          title={title}
        />
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
              value={userInputCode}
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
              srcDoc={userInputCode}
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
        <button
          type="button"
          onClick={this.handleResetChallenge}
          disabled={isGrading}
          className={styles.submit}
        >
          Reset
        </button>
      </div>
    );
  }
}

CodeChallenge.defaultProps = {
  userInputCode: null,
  grade: undefined,
  goalCode: null,
  prompt: '',
  title: 'Loading',
  questionNumber: null,
};

CodeChallenge.propTypes = {
  goalCode: PropTypes.string, // the "correct" answer/approach as html, as input by the platform
  grade: PropTypes.number, // this is their grade for this assessment, if the problem has been graded already
  prompt: PropTypes.node, // the guidelines for this challenge.  The question text
  title: PropTypes.string, // the title of this problem
  questionNumber: PropTypes.number,

  userInputCode: PropTypes.string,
  codeUpdated: PropTypes.func.isRequired,
  resetChallenge: PropTypes.func.isRequired,
  submitForGrading: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const { codeChallenge } = state;

  const {
    userInputCode,
    grade,
  } = codeChallenge;

  return {
    userInputCode,
    grade,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { goalCode } = ownProps;

  return {
    codeUpdated: (code) => {
      dispatch(CodeChallengeActions.codeUpdated(code));
    },
    resetChallenge: () => {
      dispatch(CodeChallengeActions.resetChallenge());
    },
    submitForGrading: () => {
      dispatch(CodeChallengeActions.gradeProblem(goalCode));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CodeChallenge);
