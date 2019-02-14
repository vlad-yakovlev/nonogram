import './index.scss';
import { block } from '../classnames';

import React from 'react';

interface CellProps {
    value: Nonogram.CellValue;
}

const b = block('cell');

const Cell: React.SFC<CellProps> = ({ value }) => {
    const fill = value === 1;
    const cross = value === -1;

    return <div className={b({ fill, cross })} />;
};

export default Cell;
