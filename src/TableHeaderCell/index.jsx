// @flow

import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { injectSheet } from '../themes';


export const styles = {
  container: {
    padding: ({ theme }: Theme) => theme.tableCellPadding,
    borderBottom: ({ theme }: Theme) => theme.border,
    borderTop: ({ theme }: Theme) => theme.border,
    borderLeft: ({ theme }: Theme) => theme.dashedBorder,
    borderRight: ({ theme }: Theme) => theme.dashedBorder,
    textTransform: 'uppercase',
    userSelect: 'none',
  },
  asc: {
    color: ({ theme }: Theme) => theme.colorSuccess,
  },
  desc: {
    color: ({ theme }: Theme) => theme.colorDanger,
  },
  sortable: {
    cursor: 'pointer',
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
    onClick={column.noSort ? f => f : () => sort(column.field, column.sortFn)}
    className={classnames(
      classes.container,
      className,
      {
        [classes.sorted]: isSorted,
        [classes.asc]: ascending && isSorted,
        [classes.desc]: !ascending && isSorted,
        [classes.sortable]: !column.noSort || column.sortFn,
      }
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
