import { motion } from "framer-motion";

export default function Slot({
  imgs = [],
  target,
}: {
  imgs: string[];
  target: number | null;
}) {
  const imgPositionInWheel = (idx: number) => -idx * (360 / imgs.length);
  return target === null || isNaN(target) ? null : (
    <motion.div
      className="relative w-[100px] h-[100px]"
      style={{ perspective: "50cm" }}
    >
      {imgs.map((url, idx) => (
        <motion.img
          key={idx}
          src={url}
          alt={url.slice(-1)}
          className="absolute top-0 left-0 w-full"
          style={{
            originZ: 200,
            backfaceVisibility: "hidden",
            rotateX: imgPositionInWheel(idx),
          }}
          animate={{
            rotateX: -360 * (target + 1) + imgPositionInWheel(idx + target),
          }}
          transition={{ type: "bounce", duration: 3 }}
        />
      ))}
    </motion.div>
  );
}
