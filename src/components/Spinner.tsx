import BingoState from "../BingoState";
import Slot from "./Slot";

export default function Spinner({
  bingoState,
  spinState,
}: {
  bingoState: BingoState;
  spinState: boolean;
}) {
  return (
    <div className="w-[600px] flex items-center overflow-clip bg-black">
      <Slot
        imgs={[
          "https://placehold.co/200x200/black/magenta?text=B&font=roboto",
          "https://placehold.co/200x200/black/magenta?text=I&font=roboto",
          "https://placehold.co/200x200/black/magenta?text=N&font=roboto",
          "https://placehold.co/200x200/black/magenta?text=G&font=roboto",
          "https://placehold.co/200x200/black/magenta?text=O&font=roboto",
        ]}
        spinState={spinState}
        target={
          bingoState.activeIndex > -1
            ? "BINGO".indexOf(
                bingoState.values[bingoState.history[bingoState.activeIndex]]
                  .key[0]
              )
            : null
        }
      />
      <Slot
        imgs={[
          "https://placehold.co/200x200/black/gold?text=0&font=roboto",
          "https://placehold.co/200x200/black/gold?text=1&font=roboto",
          "https://placehold.co/200x200/black/gold?text=2&font=roboto",
          "https://placehold.co/200x200/black/gold?text=3&font=roboto",
          "https://placehold.co/200x200/black/gold?text=4&font=roboto",
          "https://placehold.co/200x200/black/gold?text=5&font=roboto",
          "https://placehold.co/200x200/black/gold?text=6&font=roboto",
          "https://placehold.co/200x200/black/gold?text=7&font=roboto",
        ]}
        spinState={spinState}
        target={
          bingoState.activeIndex > -1
            ? bingoState.values[bingoState.history[bingoState.activeIndex]].key
                .length === 3
              ? +bingoState.values[bingoState.history[bingoState.activeIndex]]
                  .key[1]
              : 0
            : null
        }
      />
      <Slot
        imgs={[
          "https://placehold.co/200x200/black/gold?text=0&font=roboto",
          "https://placehold.co/200x200/black/gold?text=1&font=roboto",
          "https://placehold.co/200x200/black/gold?text=2&font=roboto",
          "https://placehold.co/200x200/black/gold?text=3&font=roboto",
          "https://placehold.co/200x200/black/gold?text=4&font=roboto",
          "https://placehold.co/200x200/black/gold?text=5&font=roboto",
          "https://placehold.co/200x200/black/gold?text=6&font=roboto",
          "https://placehold.co/200x200/black/gold?text=7&font=roboto",
          "https://placehold.co/200x200/black/gold?text=8&font=roboto",
          "https://placehold.co/200x200/black/gold?text=9&font=roboto",
        ]}
        spinState={spinState}
        target={
          bingoState.activeIndex > -1
            ? bingoState.values[bingoState.history[bingoState.activeIndex]].key
                .length === 3
              ? +bingoState.values[bingoState.history[bingoState.activeIndex]]
                  .key[2]
              : +bingoState.values[bingoState.history[bingoState.activeIndex]]
                  .key[1]
            : null
        }
      />
    </div>
  );
}
