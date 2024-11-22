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
    <section className="relative w-[200px] h-[200px] overflow-hidden">
      {target === null || isNaN(target) ? null : (
        <>
          <div
            className="w-[172px] h-[172px]"
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
                  transform: `rotateX(${-idx * (360 / imgs.length) - 90}deg) rotateY(-180deg) translateZ(-200px)`,
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  alt={url.split("text=")[1][0]}
                  className="absolute top-0 left-0 w-full h-full object-cover"
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
                  "absolute h-[200px] w-[200px] top-0 opacity-0 translate-y-full",
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
