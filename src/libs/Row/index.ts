import { getVariantsByNums, Variant } from './utils';

interface RowConstructorOptions {
    length: number;
    variants: Set<Variant>;
}

interface RowFromNumsOptions {
    length: number;
    nums: number[];
}

export default class Row {
    public static fromNumbers(data: RowFromNumsOptions): Row {
        return new Row({
            ...data,
            variants: getVariantsByNums(data.length, data.nums),
        });
    }

    public length: number;
    public variants: Set<Variant>;

    constructor(data: RowConstructorOptions) {
        this.length = data.length;
        this.variants = data.variants;
    }

    public filter(solution: Variant) {
        this.variants.forEach((variant) => {
            if (solution.some((value, index) => value !== 0 && value !== variant[index])) {
                this.variants.delete(variant);
            }
        });
    }

    public getSolution(): Variant {
        if (!this.variants.size) {
            return new Array(this.length).fill(-1);
        }

        return Array.from(this.variants)
            .reduce((solution, variant) => {
                return solution.map((value, index) => value + variant[index]);
            }, new Array<number>(this.length).fill(0))
            .map((value) => {
                if (value === this.variants.size) {
                    return 1;
                }

                if (value === -this.variants.size) {
                    return -1;
                }

                return 0;
            });
    }
}
