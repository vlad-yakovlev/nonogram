import './index.scss';
import { block } from '../classnames';

import React from 'react';

import Matrix from '../../libs/Matrix';

import Cell from '../Cell';

interface FieldProps {
    matrix: Matrix<Nonogram.CellValue>;
}

const b = block('field');

const Field: React.SFC<FieldProps> = ({ matrix }) => (
    <div className={b()}>
        {matrix.getRows().map((row, rowIndex) => (
            <div
                className={b('row')}
                key={`row_${rowIndex}`}
            >
                {row.map((value, cellIndex) => (
                    <Cell
                        value={value}
                        key={`cell_${rowIndex}_${cellIndex}`}
                    />
                ))}
            </div>
        ))}
    </div>
);

export default Field;
