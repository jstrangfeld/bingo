import BingoState from "../BingoState";
import Slot from "./Slot";

export default function Spinner({
  bingoState,
  spinState,
}: {
  bingoState: BingoState;
  spinState: boolean;
}) {
  const primary = "36948e";
  const neutral = "DEDDBA";
  return (
    <div>
      <div className="bg-accent z-1 flex w-[600px] items-center overflow-clip">
        <Slot
          imgs={[
            `https://placehold.co/200x200/${primary}/${neutral}?text=B&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=I&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=N&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=G&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=O&font=open+sans`,
          ]}
          spinState={spinState}
          target={
            bingoState.activeIndex > -1
              ? "BINGO".indexOf(
                  bingoState.values[bingoState.history[bingoState.activeIndex]]
                    .key[0],
                )
              : null
          }
        />
        <Slot
          imgs={[
            `https://placehold.co/200x200/${primary}/${neutral}?text=0&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=1&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=2&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=3&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=4&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=5&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=6&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=7&font=open+sans`,
          ]}
          spinState={spinState}
          target={
            bingoState.activeIndex > -1
              ? bingoState.values[bingoState.history[bingoState.activeIndex]]
                  .key.length === 3
                ? +bingoState.values[bingoState.history[bingoState.activeIndex]]
                    .key[1]
                : 0
              : null
          }
        />
        <Slot
          imgs={[
            `https://placehold.co/200x200/${primary}/${neutral}?text=0&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=1&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=2&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=3&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=4&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=5&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=6&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=7&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=8&font=open+sans`,
            `https://placehold.co/200x200/${primary}/${neutral}?text=9&font=open+sans`,
          ]}
          spinState={spinState}
          target={
            bingoState.activeIndex > -1
              ? bingoState.values[bingoState.history[bingoState.activeIndex]]
                  .key.length === 3
                ? +bingoState.values[bingoState.history[bingoState.activeIndex]]
                    .key[2]
                : +bingoState.values[bingoState.history[bingoState.activeIndex]]
                    .key[1]
              : null
          }
        />
      </div>
    </div>
  );
}
