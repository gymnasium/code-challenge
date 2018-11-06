import React from 'react';
import PropTypes from 'prop-types';

import styles from './CodeChallengeHeader.module.css';

const CodeChallengeHeader = (props) => {
  const {
    grade,
    isGrading,
    prompt,
    questionNumber,
    title,
  } = props;

  return (
    <React.Fragment>
      <header className={styles.titleContainer}>
        <span className={styles.questionNumber}>
          {questionNumber}
        </span>
        <span className={styles.title}>
          {title}
        </span>
      </header>
      <div className={styles.prompt}>
        {prompt}
      </div>
      <div>
        {grade && !isGrading && (
          <h1>
            {`You scored ${grade}`}
            {grade > 85 ? '! 🎉' : '.'}
          </h1>
        )}
        {isGrading && (
          <h1>Grading...</h1>
        )}
      </div>
    </React.Fragment>
  );
};

CodeChallengeHeader.defaultProps = {
  grade: null,
  isGrading: false,
  prompt: '',
  questionNumber: '',
  title: '',
};

CodeChallengeHeader.propTypes = {
  grade: PropTypes.number,
  isGrading: PropTypes.bool,
  prompt: PropTypes.string,
  questionNumber: PropTypes.string,
  title: PropTypes.string,
};

export default CodeChallengeHeader;
