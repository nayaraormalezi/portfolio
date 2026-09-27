export function Arrow({ direction = "forward" }: { direction?: "forward" | "back" }) {
  const back = direction === "back";

  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" data-direction={direction}>
      <path
        d={back ? "M13.5 8H2.5M6.8 3.8 2.5 8l4.3 4.2" : "M2.5 8h11M9.2 3.8 13.5 8l-4.3 4.2"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
