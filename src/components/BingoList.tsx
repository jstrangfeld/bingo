import type BingoState from "../BingoState";
import { BingoStates } from "../BingoState";

function BingoList({ bingoState }: { bingoState: BingoState }) {
  return (
    <table className="col-start-2 table-fixed text-center text-xl">
      <thead>
        <tr className="divide-opacity-10 divide-base-content divide-x">
          <th className="text-secondary w-[100px] text-center text-5xl">B</th>
          <th className="text-secondary w-[100px] text-center text-5xl">I</th>
          <th className="text-secondary w-[100px] text-center text-5xl">N</th>
          <th className="text-secondary w-[100px] text-center text-5xl">G</th>
          <th className="text-secondary w-[100px] text-center text-5xl">O</th>
        </tr>
      </thead>
      <tbody className="font-digits">
        {Array.from({ length: bingoState.size.rows }).map((_, row) => (
          <tr
            key={row}
            className="divide-opacity-10 divide-base-content divide-x"
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
                    ? "text-secondary font-bold"
                    : bingoState.values[col * bingoState.size.rows + row]
                          .value === BingoStates.visible
                      ? "text-secondary font-bold"
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
