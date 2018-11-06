import React from 'react';
import PropTypes from 'prop-types';

import styles from './CodeChallengeHeader.module.css';

const CodeChallengeHeader = (props) => {
  const {
    grade,
    isGrading,
    prompt,
    questionNumber,
  } = props;

  return (
    <React.Fragment>
      <div className={styles.promptContainer}>
        <span className={styles.questionNumber}>
          {questionNumber}
        </span>
        <span className={styles.prompt}>
          {prompt}
        </span>
      </div>
      {grade && !isGrading && (
        <h1>
          {`You scored ${grade}`}
          {grade > 85 ? '! 🎉' : '.'}
        </h1>
      )}
      {isGrading && (
        <h1>Grading...</h1>
      )}
    </React.Fragment>
  );
};

CodeChallengeHeader.defaultProps = {
  grade: null,
  isGrading: false,
  prompt: '',
  questionNumber: '',
};

CodeChallengeHeader.propTypes = {
  grade: PropTypes.number,
  isGrading: PropTypes.bool,
  prompt: '',
  questionNumber: PropTypes.string,
};

export default CodeChallengeHeader;
