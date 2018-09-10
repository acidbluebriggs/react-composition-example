export const ascendingSort = (a, b) => (a > b ? 1 : b > a ? -1 : 0)
export const descendingSort = (a, b) => -1 * ascendingSort(a, b)
