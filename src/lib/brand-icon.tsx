import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Render the supplied square artwork at the platform's icon size.
// The original file is also used by the compact header logo.
export async function renderBrandIcon(size: number) {
  const symbol = await readFile(join(process.cwd(), "public/images/brand/integrity-symbol.png"));
  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "white" }}>
        {/* ImageResponse renders image bytes directly, outside Next's image optimizer. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`data:image/png;base64,${symbol.toString("base64")}`} width={size} height={size} alt="" />
      </div>
    ),
    { width: size, height: size },
  );
}
