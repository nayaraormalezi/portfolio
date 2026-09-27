import type { ReactNode } from "react";
import { WorkArt } from "@/components/WorkArt";
import type { GalleryLayout, VisualSource } from "@/lib/cases";
import styles from "./CaseStudy.module.css";

function frameRatio(source: VisualSource) {
  if (source.type === "image") return source.ratio ?? "16 / 10";
  if (source.visual === "system") return "3 / 2";
  return "4 / 5";
}

export function ProjectImage({ source }: { source: VisualSource }) {
  const media =
    source.type === "image" ? (
      <img src={source.src} alt={source.alt} />
    ) : (
      <WorkArt visual={source.visual} />
    );

  if (source.frame === "device") return <DeviceMockup>{media}</DeviceMockup>;
  return (
    <div className={styles.frame} style={{ aspectRatio: frameRatio(source) }}>
      {media}
    </div>
  );
}

export function DeviceMockup({ children }: { children: ReactNode }) {
  return (
    <div className={styles.device}>
      <div className={styles.screen}>{children}</div>
    </div>
  );
}

export function FullWidthVisual({ source, caption }: { source: VisualSource; caption?: string }) {
  return (
    <figure className={styles.full}>
      <ProjectImage source={source} />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

export function ImageWithCaption({
  source,
  caption,
  align = "start",
}: {
  source: VisualSource;
  caption: string;
  align?: "start" | "end";
}) {
  return (
    <figure className={`${styles.splitVisual} ${align === "end" ? styles.splitEnd : ""}`}>
      <ProjectImage source={source} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export function BeforeAfter({
  before,
  after,
  beforeLabel = "Antes",
  afterLabel = "Depois",
}: {
  before: VisualSource;
  after: VisualSource;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  return (
    <div className={styles.compare}>
      <figure>
        <figcaption>{beforeLabel}</figcaption>
        <ProjectImage source={before} />
      </figure>
      <figure>
        <figcaption>{afterLabel}</figcaption>
        <ProjectImage source={after} />
      </figure>
    </div>
  );
}

export function ScreenShowcase({
  frames,
}: {
  frames: { visual: VisualSource; caption?: string }[];
}) {
  return (
    <div className={styles.showcase}>
      {frames.map((frame, index) => (
        <figure key={`${frame.caption ?? "tela"}-${index}`}>
          <ProjectImage source={frame.visual} />
          {frame.caption ? <figcaption>{frame.caption}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}

export function ImageGallery({
  layout,
  items,
}: {
  layout: GalleryLayout;
  items: { visual: VisualSource; caption?: string }[];
}) {
  if (layout === "compare" && items.length >= 2) {
    return (
      <BeforeAfter
        before={items[0].visual}
        after={items[1].visual}
        beforeLabel={items[0].caption ?? "Antes"}
        afterLabel={items[1].caption ?? "Depois"}
      />
    );
  }

  if (layout === "caption" && items[0]?.caption) {
    return <ImageWithCaption source={items[0].visual} caption={items[0].caption} />;
  }

  if (layout === "sequence" || layout === "pair") {
    return (
      <div className={layout === "pair" ? styles.pair : styles.sequence}>
        {items.map((item, index) => (
          <figure key={`${item.caption ?? "imagem"}-${index}`}>
            <ProjectImage source={item.visual} />
            {item.caption ? <figcaption>{item.caption}</figcaption> : null}
          </figure>
        ))}
      </div>
    );
  }

  return (
    <div className={layout === "surface" ? styles.surfaceStack : styles.stack}>
      {items.map((item, index) => (
        <FullWidthVisual key={`${item.caption ?? "imagem"}-${index}`} source={item.visual} caption={item.caption} />
      ))}
    </div>
  );
}
