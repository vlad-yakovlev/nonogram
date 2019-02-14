import 'normalize.css';

import React from 'react';

import { Solver } from '../../libs/Solver';

import Field from '../Field';

const rows = [
    [4],
    [2, 3],
    [4, 3],
    [1, 3, 2],
    [5, 2],
    [4, 2],
    [7, 1],
    [6, 1],
    [9],
    [9],
];

const columns = [
    [6, 1],
    [2, 6],
    [10],
    [1, 8],
    [2, 2, 4],
    [3, 5],
    [6, 2],
    [3, 2],
    [1, 2],
    [2],
];

const solver = new Solver({ rows, columns });

solver.solve();

const App: React.SFC = () => (
    <Field matrix={solver.field} />
);

export default App;
