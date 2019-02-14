export type Variant = Nonogram.CellValue[];

type Gaps = number[];

export function getVariantsByNums(length: number, nums: number[]): Set<Variant> {
    const variants = new Set<Variant>();
    const gapsSet = getGapsSet(length, nums);

    gapsSet.forEach((gaps) => variants.add(getVariant(length, nums, gaps)));

    return variants;
}

function getVariant(length: number, nums: number[], gaps: number[]) {
    const variant: Variant = new Array(length).fill(-1);

    for (let numIndex = 0, varIndex = -1; numIndex < nums.length; numIndex++) {
        variant.fill(1, varIndex += gaps[numIndex], varIndex += nums[numIndex]);
    }

    return variant;
}

function getGapsSet(length: number, nums: number[]): Set<Gaps> {
    const set = new Set<Gaps>();
    const limit = length - nums.reduce((sum, value) => sum + value, -1);
    const base: Gaps = new Array(nums.length).fill(1);

    addGaps(set, limit, base);

    return set;
}

function addGaps(set: Set<Gaps>, limit: number, base: Gaps) {
    set.add(base);

    const total = base.reduce((sum, value) => sum + value, 0);

    if (total >= limit) {
        return;
    }

    base.forEach((value, index) => {
        const next = [...base.slice(0, index), value + 1, ...base.slice(index + 1)];

        addGaps(set, limit, next);
    });
}
