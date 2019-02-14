interface MatrixConstructorOptions {
    width: number;
    height: number;
}

export default class Matrix<T> {
    public readonly width: number;
    public readonly height: number;
    protected content: T[][];

    constructor(data: MatrixConstructorOptions) {
        this.width = data.width;
        this.height = data.height;

        this.content = new Array(this.height);

        for (let i = 0; i < this.height; i++) {
            this.content[i] = new Array(this.width);
        }
    }

    public fill(value: T): Matrix<T> {
        for (let i = 0; i < this.height; i++) {
            this.content[i].fill(value);
        }

        return this;
    }

    public getRow(index: number): T[] {
        return this.content[index];
    }

    public getColumn(index: number): T[] {
        return this.content.reduce((column, row, i) => {
            column[i] = row[index];

            return column;
        }, new Array(this.height));
    }

    public setRow(index: number, row: T[]): Matrix<T> {
        this.content[index] = row;

        return this;
    }

    public setColumn(index: number, column: T[]): Matrix<T> {
        this.content.forEach((row, i) => {
            row[index] = column[i];
        });

        return this;
    }

    public getRows() {
        return this.content;
    }
}
