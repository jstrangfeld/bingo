import { MotionValue, motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import { Group } from "@mantine/core";
import BingoState from "../BingoState";

export default function Spinner({
  bingoState,
  spinState,
}: {
  bingoState: BingoState;
  spinState: boolean;
}) {
  const [number, setNumber] = useState(99);
  const [letter, setLetter] = useState(" ");
  const [category, ...digits] =
    bingoState.activeIndex > -1
      ? bingoState.values[bingoState.history[bingoState.activeIndex]].key
      : "000";

  useEffect(() => {
    if (number !== 99) {
      setNumber(99);
      setLetter(" ");
    }
    setTimeout(() => {
      setNumber(+digits.join(""));
      setLetter(category);
    }, 500);
  }, [bingoState.activeIndex]);
  console.log(number);
  return bingoState.activeIndex > -1 ? (
    <Group style={{ fontSize, overflow: "hidden" }}>
      <motion.div
        key={letter}
        animate="show"
        initial="hide"
        className="mr-[15px] w-[1ch] text-right"
        variants={{
          show: {
            opacity: 1,
            y: 0,
            transition: {
              ease: "easeInOut",
              duration: 0.5,
              type: "spring",
              damping: 5,
            },
          },
          hide: {
            y: -40,
          },
        }}
      >
        {letter}
      </motion.div>
      <Counter value={number} />
    </Group>
  ) : null;
}

const fontSize = 140;
const padding = 15;
const height = fontSize + padding;

function Counter({ value }: { value: number }) {
  return (
    <>
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </>
  );
}

function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div
      style={{ height }}
      className="relative w-[1ch] overflow-hidden tabular-nums"
    >
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}
