import type BingoState from "../BingoState";
import { BingoStates } from "../BingoState";

function BingoList({ bingoState }: { bingoState: BingoState }) {
  return (
    <table className="col-start-2 table-fixed text-center">
      <thead>
        <tr className="divide-x divide-opacity-10 divide-base-content">
          <th>
            <img
              className="inline"
              src="https://placehold.co/50x50/1a103d/512e91?text=B&font=roboto"
              alt="B"
            />
          </th>
          <th>
            <img
              className="inline"
              src="https://placehold.co/50x50/1a103d/512e91?text=I&font=roboto"
              alt="I"
            />
          </th>
          <th>
            <img
              className="inline"
              src="https://placehold.co/50x50/1a103d/512e91?text=N&font=roboto"
              alt="N"
            />
          </th>
          <th>
            <img
              className="inline"
              src="https://placehold.co/50x50/1a103d/512e91?text=G&font=roboto"
              alt="G"
            />
          </th>
          <th>
            <img
              className="inline"
              src="https://placehold.co/50x50/1a103d/512e91?text=O&font=roboto"
              alt="O"
            />
          </th>
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
                  transitionDelay: "3s",
                }}
                className={
                  bingoState.values[col * bingoState.size.rows + row].value ===
                  BingoStates.picked
                    ? "font-bold text-accent"
                    : bingoState.values[col * bingoState.size.rows + row]
                          .value === BingoStates.visible
                      ? "font-bold text-secondary"
                      : "text-base-content text-opacity-30"
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
