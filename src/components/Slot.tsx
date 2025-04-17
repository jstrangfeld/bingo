export default function Slot({
  imgs = [],
  spinState,
  target,
}: {
  imgs: string[];
  spinState: boolean;
  target: number | null;
}) {
  return (
    <section className="relative h-[200px] w-[200px] overflow-hidden">
      {target === null || isNaN(target) ? null : (
        <>
          <div
            className="h-[172px] w-[172px]"
            style={{
              animation: "spin 1s linear infinite",
              transformStyle: "preserve-3d",
            }}
          >
            {imgs.map((url, idx) => (
              <span
                className="absolute top-0 left-0 h-full w-full origin-center"
                key={idx}
                style={{
                  transform: `rotateX(${-idx * (360 / imgs.length) - 90}deg) rotateY(-180deg) translateZ(-200px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  alt={url.split("text=")[1][0]}
                  className="absolute top-0 left-0 h-full w-full object-cover"
                  src={url}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotate(180deg)",
                  }}
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
                  "absolute top-0 h-[200px] w-[200px] translate-y-full opacity-0",
                ].join(" ")}
                key={idx}
                src={url}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
