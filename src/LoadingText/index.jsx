import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';
import palette from '../themes';

const styles = {
  container: {
    display: 'inline',
    color: palette.textColorPrimary,
  },
  loading: {
    color: palette.colorMuted,
  },
};

const LoadingText = ({
  children,
  displayFn = f => f,
  isLoading,
  isError,
  loadingText = 'Loading...',
  errorText = 'Error!',
  className,
  classes,
}) => {
  let renderText = displayFn(children);
  if (isError) {
    renderText = errorText;
  } else if (isLoading) {
    renderText = loadingText;
  }
  return (
    <div className={classnames(className, classes.container)}>
      {renderText}
    </div>
  );
};

LoadingText.propTypes = {
  displayFn: PropTypes.func,
  loadingText: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  errorText: PropTypes.string,
  isError: PropTypes.bool,
};

export default injectSheet(styles)(LoadingText);
