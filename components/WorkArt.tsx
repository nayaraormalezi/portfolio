import type { ReactNode } from "react";
import type { ProjectVisual } from "@/lib/content";
import styles from "./WorkArt.module.css";

const frames: Record<ProjectVisual, { viewBox: string; node: ReactNode }> = {
  recovery: {
    viewBox: "0 0 800 1000",
    node: (
      <>
        <rect width="800" height="1000" fill="#e7e8f2" />
        <rect x="70" y="90" width="500" height="760" rx="40" fill="#ffffff" />
        <rect
          x="190"
          y="180"
          width="500"
          height="720"
          rx="40"
          fill="#f7f7fa"
          stroke="#181818"
          strokeOpacity="0.28"
        />
        <path d="M270 360h180" stroke="#5c56e8" strokeWidth="5" />
        <path d="M270 420h280" stroke="#181818" strokeOpacity="0.35" strokeWidth="2" />
        <path d="M270 468h210" stroke="#181818" strokeOpacity="0.18" strokeWidth="2" />
        <path d="M270 516h150" stroke="#181818" strokeOpacity="0.18" strokeWidth="2" />
        <rect x="270" y="620" width="150" height="46" rx="23" fill="#181818" />
        <path d="M460 760h140" stroke="#5c56e8" strokeWidth="5" />
      </>
    ),
  },
  superapp: {
    viewBox: "0 0 800 1000",
    node: (
      <>
        <rect width="800" height="1000" fill="#181818" />
        <rect x="230" y="120" width="340" height="760" rx="48" fill="#f7f7fa" />
        <rect x="268" y="210" width="264" height="150" rx="22" fill="#eceef6" />
        <circle cx="300" cy="430" r="8" fill="#5c56e8" />
        <path d="M324 430h160" stroke="#181818" strokeOpacity="0.35" strokeWidth="2" />
        <rect x="268" y="480" width="120" height="150" rx="20" fill="#ffffff" />
        <rect x="404" y="480" width="128" height="150" rx="20" fill="#d8d0c3" />
        <rect x="268" y="660" width="264" height="72" rx="36" fill="#181818" />
      </>
    ),
  },
  system: {
    viewBox: "0 0 1200 800",
    node: (
      <>
        <rect width="1200" height="800" fill="#f7f4ee" />
        <rect x="90" y="110" width="250" height="250" rx="36" fill="#eceef6" />
        <rect x="380" y="110" width="170" height="170" rx="28" fill="none" stroke="#181818" strokeOpacity="0.4" />
        <rect x="590" y="150" width="120" height="120" rx="60" fill="#5c56e8" />
        <rect x="760" y="110" width="320" height="150" rx="28" fill="#181818" />
        <rect x="90" y="410" width="420" height="160" rx="28" fill="#ffffff" stroke="#181818" strokeOpacity="0.2" />
        <rect x="550" y="400" width="200" height="260" rx="32" fill="#d8d0c3" />
        <rect x="790" y="310" width="280" height="200" rx="32" fill="#eceef6" />
        <path d="M140 490h180" stroke="#5c56e8" strokeWidth="4" />
      </>
    ),
  },
  prisma: {
    viewBox: "0 0 800 1000",
    node: (
      <>
        <rect width="800" height="1000" fill="#e6dfd3" />
        <circle cx="430" cy="500" r="250" fill="none" stroke="#181818" strokeOpacity="0.28" strokeWidth="2" />
        <circle cx="430" cy="500" r="140" fill="none" stroke="#181818" strokeOpacity="0.5" strokeWidth="2" />
        <rect x="406" y="476" width="48" height="48" fill="#5c56e8" />
        <path d="M80 180h200" stroke="#181818" strokeOpacity="0.35" strokeWidth="2" />
        <path d="M80 230h120" stroke="#5c56e8" strokeWidth="4" />
        <path d="M80 760h240" stroke="#181818" strokeOpacity="0.4" strokeWidth="2" />
        <path d="M80 810h150" stroke="#181818" strokeOpacity="0.22" strokeWidth="2" />
      </>
    ),
  },
  enterprise: {
    viewBox: "0 0 800 1000",
    node: (
      <>
        <rect width="800" height="1000" fill="#f6f3ed" />
        <path d="M120 160h8v700" stroke="#181818" strokeOpacity="0.35" strokeWidth="2" />
        <rect x="170" y="180" width="500" height="54" rx="8" fill="#eceef6" />
        <rect x="170" y="260" width="360" height="54" rx="8" fill="#181818" />
        <rect x="170" y="340" width="500" height="54" rx="8" fill="#ffffff" stroke="#181818" strokeOpacity="0.18" />
        <rect x="170" y="420" width="220" height="54" rx="8" fill="#5c56e8" />
        <rect x="410" y="420" width="260" height="54" rx="8" fill="#eceef6" />
        <rect x="170" y="500" width="500" height="54" rx="8" fill="#d8d0c3" />
        <rect x="170" y="580" width="300" height="54" rx="8" fill="#ffffff" stroke="#181818" strokeOpacity="0.18" />
        <rect x="170" y="680" width="180" height="36" rx="18" fill="#181818" />
      </>
    ),
  },
};

export function WorkArt({ visual }: { visual: ProjectVisual }) {
  const frame = frames[visual];
  return (
    <svg
      className={styles.art}
      viewBox={frame.viewBox}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {frame.node}
    </svg>
  );
}
