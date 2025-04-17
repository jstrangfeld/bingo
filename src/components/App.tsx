import BingoState, { BingoStates } from "../BingoState";

import { useState } from "react";
import BingoList from "./BingoList";
import Rules from "./Rules";
import Spinner from "./Spinner";

function App() {
  const [bingoState, setBingoState] = useState(() => BingoState());
  const [spinState, setSpinState] = useState(false);

  return (
    <div>
      <nav className="font-heading navbar">
        <h1 className="text-4xl before:content-(--title)">&nbsp;</h1>
      </nav>
      <main className="font-body grid grid-rows-[1fr] items-center md:grid-cols-[1fr_1fr]">
        <section className="grid grid-cols-[16px_1fr_16px] md:col-start-2">
          <BingoList bingoState={bingoState} />
        </section>
        <section className="ml-4 flex flex-col gap-16 md:col-start-1 md:row-start-1">
          <Spinner bingoState={bingoState} spinState={spinState} />
        </section>
      </main>
      <footer className="dock">
        <button
          className="btn btn-primary btn-lg text-3xl"
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
          className="btn btn-neutral btn-lg text-secondary ml-8 text-3xl"
          onClick={() =>
            confirm("Are you sure you want to reset?") && location.reload()
          }
        >
          Reset
        </button>
        <Rules />
        <div className="dropdown dropdown-top">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg
              width="12px"
              height="12px"
              className="inline-block h-2 w-2 fill-current opacity-60"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost w-full justify-start"
                aria-label="Default"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost w-full justify-start"
                aria-label="Retro"
                value="retro"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost w-full justify-start"
                aria-label="Cyberpunk"
                value="cyberpunk"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost w-full justify-start"
                aria-label="Valentine"
                value="valentine"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                className="theme-controller btn btn-sm btn-block btn-ghost w-full justify-start"
                aria-label="Aqua"
                value="aqua"
              />
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
