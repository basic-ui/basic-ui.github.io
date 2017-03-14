import React, { PropTypes } from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

import theme from '../themes';

const styles = {
  container: {
    padding: 10,
    borderBottom: theme.palette.border,
    borderTop: theme.palette.border,
    borderLeft: theme.palette.dashedBorder,
    borderRight: theme.palette.dashedBorder,
    textTransform: 'uppercase',
  },
  asc: {
    color: theme.palette.colorSuccess,
  },
  desc: {
    color: theme.palette.colorDanger,
  },
};

type PropsType = {
  classes: Object,
  className: string,
  column: TableColumn,
  sort: () => void,
  isSorted: boolean,
  ascending: boolean,
};

const TableHeaderCell = ({
  classes,
  className,
  column,
  sort,
  isSorted,
  ascending,
}: PropsType) => (
  <th
    onClick={() => sort(column.field, column.sortFn)}
    className={classnames(
      classes.container,
      className,
      {
        [classes.sorted]: isSorted,
        [classes.asc]: ascending && isSorted,
        [classes.desc]: !ascending && isSorted,
      },
    )}
  >
    {column.name}
  </th>
);

TableHeaderCell.propTypes = {
  classes: PropTypes.object,
  className: PropTypes.string,
  sort: PropTypes.func,
  column: PropTypes.object.isRequired,
  isSorted: PropTypes.bool,
  ascending: PropTypes.bool,
};

export default injectSheet(styles)(TableHeaderCell);
