export default function Slot({
  imgs = [],
  spinState,
  target,
}: {
  imgs: string[];
  spinState: boolean;
  target: number | null;
}) {
  return target === null || isNaN(target) ? null : (
    <section className="relative w-[100px] h-[100px] overflow-hidden">
      <div
        className="w-[86px] h-[86px]"
        style={{
          animation: "spin 1s linear infinite",
          transformStyle: "preserve-3d",
        }}
      >
        {imgs.map((url, idx) => (
          <span
            className="absolute top-0 left-0 w-full h-full origin-center"
            key={idx}
            style={{
              transform: `rotateX(${-idx * (360 / imgs.length)}deg) rotateY(180deg) translateZ(-100px)`,
              transformStyle: "preserve-3d",
            }}
          >
            <img
              alt={url.split("text=")[1][0]}
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={url}
              style={{ backfaceVisibility: "hidden" }}
            />
          </span>
        ))}
      </div>
      <div className="absolute top-0 h-full w-full">
        {imgs.map((url, idx) => (
          <img
            alt={url.split("text=")[1][0]}
            className={[
              !spinState && idx === target ? "picked" : "",
              "absolute h-[100px] w-[100px] top-0 opacity-0 translate-y-full",
            ].join(" ")}
            key={idx}
            src={url}
            style={{
              transition: "0.25s linear transform,0.25s linear opacity",
            }}
          />
        ))}
      </div>
    </section>
  );
}
