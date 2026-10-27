import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const htmlPath = path.join(root, "components", "site", "home-page.generated.html");
const publicRoot = path.join(root, "public");

function readSize(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const ext = path.extname(filePath).toLowerCase();
  const buffer = fs.readFileSync(filePath);

  if (ext === ".svg") {
    const text = buffer.toString("utf8");
    const width = text.match(/\bwidth=["']?([0-9.]+)/i)?.[1];
    const height = text.match(/\bheight=["']?([0-9.]+)/i)?.[1];
    if (width && height) return { width: Math.round(Number(width)), height: Math.round(Number(height)) };

    const viewBox = text.match(/\bviewBox=["'][^"']*?\s([0-9.]+)\s([0-9.]+)["']/i);
    if (viewBox) return { width: Math.round(Number(viewBox[1])), height: Math.round(Number(viewBox[2])) };
  }

  if (ext === ".png" && buffer.length >= 24 && buffer.toString("ascii", 1, 4) === "PNG") {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
  }

  if ((ext === ".jpg" || ext === ".jpeg") && buffer[0] === 0xff && buffer[1] === 0xd8) {
    let offset = 2;
    while (offset < buffer.length) {
      if (buffer[offset] !== 0xff) break;
      const marker = buffer[offset + 1];
      const length = buffer.readUInt16BE(offset + 2);
      if (marker >= 0xc0 && marker <= 0xc3) {
        return { width: buffer.readUInt16BE(offset + 7), height: buffer.readUInt16BE(offset + 5) };
      }
      offset += 2 + length;
    }
  }

  return null;
}

function normalizeImageTag(tag) {
  if (/\bwidth=/.test(tag) && /\bheight=/.test(tag)) return tag;

  const src = tag.match(/\bsrc=["']([^"']+)["']/i)?.[1];
  if (!src || !src.startsWith("/")) return tag;

  const size = readSize(path.join(publicRoot, src));
  if (!size) return tag;

  let next = tag;
  if (!/\bwidth=/.test(next)) next = next.replace(/<img/i, `<img width="${size.width}"`);
  if (!/\bheight=/.test(next)) next = next.replace(/<img/i, `<img height="${size.height}"`);
  return next;
}

let html = fs.readFileSync(htmlPath, "utf8");

html = html.replace(
  '<input type="text" placeholder="Share your filing or registration requirement">',
  '<input id="homepage-requirement" name="requirement" type="text" placeholder="Share your filing or registration requirement">',
);

html = html.replace(/<img\b[^>]*>/gi, normalizeImageTag);

fs.writeFileSync(htmlPath, html);
