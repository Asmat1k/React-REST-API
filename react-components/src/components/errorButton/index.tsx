import React from 'react';
import styles from './errorButton.module.scss';

interface ErrorButtonProps {}

interface ErrorButtonState {
  hasError: boolean;
}

class ErrorButton extends React.Component<ErrorButtonProps, ErrorButtonState> {
  constructor(props: ErrorButtonProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  handleErrorButtonClick() {
    this.setState({ hasError: true }, () => {
      throw new Error('You clicked on the ERROR button');
    });
  }

  render() {
    return (
      <button
        className={styles.errorBtn}
        onClick={() => this.handleErrorButtonClick()}
      >
        error
      </button>
    );
  }
}

export default ErrorButton;
