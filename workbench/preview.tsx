import { Sigil } from "../src/index.js";
import { useId } from "react";
import type { Mark } from "./catalog.js";

export function Preview({ mark }: { mark: Mark }) {
  const clipId = useId();
  if (mark.sigil)
    return (
      <span className="sigils-svg">
        <Sigil name={mark.sigil} />
      </span>
    );
  if (mark.image)
    return <img className="sigils-image" src={mark.image} alt="" />;
  if (!mark.crop) return null;
  const { src, columns, rows, x, y, sheetWidth, sheetHeight } = mark.crop;
  const width = sheetWidth / columns;
  const height = sheetHeight / rows;
  return (
    <svg
      className="sigils-crop"
      viewBox={`${String(x * width)} ${String(y * height)} ${String(width)} ${String(height)}`}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={clipId}>
          <rect x={x * width} y={y * height} width={width} height={height} />
        </clipPath>
      </defs>
      <image
        href={src}
        width={sheetWidth}
        height={sheetHeight}
        clipPath={`url(#${clipId})`}
      />
    </svg>
  );
}
