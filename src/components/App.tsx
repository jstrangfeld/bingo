import BingoState, { BingoStates } from "../BingoState";

import BingoList from "./BingoList";
import Rules from "./Rules";
import Spinner from "./Spinner";
import { useState } from "react";

function App() {
  const [bingoState, setBingoState] = useState(() => BingoState());
  const [spinState, setSpinState] = useState(false);

  return (
    <>
      <nav className="navbar md:fixed bg-base-300 drop-shadow-lg flex place-content-between px-8">
        <h1 className="text-primary text-xl">Grandfriends Bingo</h1>
        <h1 className="text-primary text-xl">
          Upper Moreland Elementary School HSA
        </h1>
      </nav>
      <main className="grid grid-rows-[1fr] md:grid-cols-[1fr_1fr] items-center h-svh">
        <section className="md:col-start-2 grid grid-cols-[16px_1fr_16px]">
          <BingoList bingoState={bingoState} />
        </section>
        <section className="md:col-start-1 md:row-start-1 ml-4 flex flex-col gap-16">
          <Rules />
          <Spinner bingoState={bingoState} spinState={spinState} />
          <div />
        </section>
      </main>
      <footer className="md:fixed bottom-4 left-4">
        <button
          className="btn btn-primary btn-lg"
          disabled={spinState}
          onClick={() => {
            setSpinState(true);
            setBingoState((prev) => {
              const prevBingoState = { ...prev };
              if (
                prevBingoState.activeIndex >=
                prevBingoState.history.length - 1
              )
                return prevBingoState;
              if (prevBingoState.activeIndex > -1)
                prevBingoState.values[
                  prevBingoState.history[prevBingoState.activeIndex]
                ].value = BingoStates.visible;
              prevBingoState.values[
                prevBingoState.history[prevBingoState.activeIndex + 1]
              ].value = BingoStates.picked;
              prevBingoState.activeIndex = prevBingoState.activeIndex + 1;
              return prevBingoState;
            });
            setTimeout(() => setSpinState(false), 2000);
          }}
        >
          SPIN
        </button>
        <button
          className="btn btn-base-300 ml-8"
          onClick={() =>
            confirm("Are you sure you want to reset?") && location.reload()
          }
        >
          Reset
        </button>
      </footer>
    </>
  );
}

export default App;
