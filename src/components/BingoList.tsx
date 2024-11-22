import type BingoState from "../BingoState";
import { BingoStates } from "../BingoState";

function BingoList({ bingoState }: { bingoState: BingoState }) {
  return (
    <table className="col-start-2 table-fixed text-center text-xl">
      <thead>
        <tr className="divide-x divide-opacity-10 divide-base-content">
          <th className="w-[100px] text-5xl text-secondary text-center">B</th>
          <th className="w-[100px] text-5xl text-secondary text-center">I</th>
          <th className="w-[100px] text-5xl text-secondary text-center">N</th>
          <th className="w-[100px] text-5xl text-secondary text-center">G</th>
          <th className="w-[100px] text-5xl text-secondary text-center">O</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: bingoState.size.rows }).map((_, row) => (
          <tr
            key={row}
            className="divide-x divide-opacity-10 divide-base-content"
          >
            {Array.from({ length: bingoState.size.cols }).map((_, col) => (
              <td
                key={col * bingoState.size.rows + row}
                style={{
                  willChange: "color",
                  transitionDuration: "0.5s",
                  transitionDelay: "2s",
                }}
                className={
                  bingoState.values[col * bingoState.size.rows + row].value ===
                  BingoStates.picked
                    ? "font-bold text-secondary"
                    : bingoState.values[col * bingoState.size.rows + row]
                          .value === BingoStates.visible
                      ? "font-bold text-secondary"
                      : "text-neutral"
                }
              >
                {bingoState.values[col * bingoState.size.rows + row].key}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BingoList;
