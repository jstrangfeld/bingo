import arrayShuffle from "array-shuffle";

const enum BingoStates {
  unselected = "unselected",
  picked = "picked",
  visible = "visible",
}
type BingoState = {
  activeIndex: number;
  columnHeaders: string[];
  history: number[];
  rowHeaders: string[];
  size: { rows: number; cols: number };
  title: string | null;
  values: { key: string; value: BingoStates }[];
};

function BingoState(options: Partial<BingoState> = {}): BingoState {
  const defaultOptions: BingoState = {
    activeIndex: -1,
    columnHeaders: ["B", "I", "N", "G", "O"],
    history: [],
    rowHeaders: [],
    size: { rows: 15, cols: 5 },
    title: null,
    values: [],
  };
  const opts = { ...defaultOptions, ...options };

  function generateValues() {
    return Array.from({ length: 5 }, (_, cols) =>
      Array.from({ length: 15 }, (_, rows) => ({
        key: `${opts.columnHeaders[cols]}${cols * opts.size.rows + rows + 1}`,
        value: BingoStates.unselected,
      })),
    ).flat();
  }

  const values = generateValues();

  return {
    ...opts,
    history: arrayShuffle(Object.keys(values).map(Number)),
    values,
  };
}

export default BingoState;
export { BingoStates };
