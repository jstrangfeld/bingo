import BingoState, { BingoStates } from "../BingoState";

import { Button } from "@mantine/core";

function BingoList({ bingoState }: { bingoState: BingoState }) {
  return (
    <table className="col-start-2 table-fixed text-center">
      <thead>
        <tr className="">
          <th className="text-secondary w-[100px] text-center text-5xl">B</th>
          <th className="text-secondary w-[100px] text-center text-5xl">I</th>
          <th className="text-secondary w-[100px] text-center text-5xl">N</th>
          <th className="text-secondary w-[100px] text-center text-5xl">G</th>
          <th className="text-secondary w-[100px] text-center text-5xl">O</th>
        </tr>
      </thead>
      <tbody className="font-digits">
        {Array.from({ length: bingoState.size.rows }).map((_, row) => (
          <tr key={row}>
            {Array.from({ length: bingoState.size.cols }).map((_, col) => (
              <td key={col * bingoState.size.rows + row}>
                <Button
                  size="compact-lg"
                  fz="1.2rem"
                  disabled={
                    ![BingoStates.picked, BingoStates.visible].includes(
                      bingoState.values[col * bingoState.size.rows + row].value,
                    )
                  }
                  w="50%"
                  style={{
                    willChange: "background-color",
                    transitionDuration: "0.5s",
                    transitionDelay: "2s",
                    backgroundColor:
                      bingoState.values[col * bingoState.size.rows + row]
                        .value === BingoStates.picked
                        ? "var(--mantine-color-secondary-9)"
                        : bingoState.values[col * bingoState.size.rows + row]
                              .value === BingoStates.visible
                          ? "var(--mantine-color-primary-9)"
                          : "transparent",
                  }}
                  aria-description="Grow or shake framer animation when the color changes"
                >
                  {bingoState.values[col * bingoState.size.rows + row].key}
                </Button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BingoList;
