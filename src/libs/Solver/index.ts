import Row from '../Row';
import Matrix from '../Matrix';

interface SolverConstructorOptions {
    rows: number[][];
    columns: number[][];
}

export class Solver {
    public field: Matrix<Nonogram.CellValue>;
    public rows: Row[];
    public columns: Row[];

    constructor(data: SolverConstructorOptions) {
        this.field = new Matrix({
            width: data.columns.length,
            height: data.rows.length,
        });

        this.field.fill(0);

        this.rows = data.rows.map((row) => {
            return Row.fromNumbers({
                length: this.field.width,
                nums: row,
            });
        });

        this.columns = data.columns.map((column) => {
            return Row.fromNumbers({
                length: this.field.height,
                nums: column,
            });
        });
    }

    public step() {
        this.rows.forEach((row, index) => {
            row.filter(this.field.getRow(index));

            this.field.setRow(index, row.getSolution());
        });

        this.columns.forEach((column, index) => {
            column.filter(this.field.getColumn(index));

            this.field.setColumn(index, column.getSolution());
        });
    }

    public countUnknown(): number {
        let count = 0;

        this.field.getRows().forEach((row) => {
            row.forEach((value) => {
                if (value === 0) {
                    count++;
                }
            });
        });

        return count;
    }

    public solve() {
        let unknown = this.countUnknown();
        let prevUnknown = Infinity;

        while (unknown < prevUnknown) {
            this.step();

            prevUnknown = unknown;
            unknown = this.countUnknown();
        }
    }
}
