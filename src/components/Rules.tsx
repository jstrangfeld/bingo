export default function Rules() {
  return (
    <div className="dropdown dropdown-top">
      <div tabIndex={0} role="button" className="btn">
        Game Rules
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
        <li>One line (standard)</li>
        <li>Two lines</li>
        <li>Four corners</li>
        <li>Giant U</li>
        <li>Giant M</li>
        <li>Giant X</li>
        <li>Blackout</li>
      </ul>
    </div>
  );
}
