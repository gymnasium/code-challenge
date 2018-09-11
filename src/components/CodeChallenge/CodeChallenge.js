import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Controlled as CodeMirror } from 'react-codemirror2';
import * as CodeChallengeActions from '../../store/CodeChallenge/actions';

import './CodeChallenge.css';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

class CodeChallenge extends Component {
  handleOnBeforeChange = (editor, data, value) => {
    const { codeUpdated } = this.props;

    codeUpdated(value);
  }

  handleOnChange = (editor, data, value) => {
  }

  render() {
    const { code } = this.props;

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
            onChange={this.handleOnChange}
          />
          <iframe
            srcDoc={code}
            style={styles.iFrame}
            title="code-challenge"
          />
        </div>
      </React.Fragment>
    );
  }
}

CodeChallenge.defaultProps = {
  code: null,
  codeUpdated: () => null,
};

CodeChallenge.propTypes = {
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
