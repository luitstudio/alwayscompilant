import fs from "node:fs";
import path from "node:path";
import parse, { Element } from "html-react-parser";
import { applyAlwaysCompliantContent } from "@/data/site";
import { SiteHeader } from "@/components/site/SiteHeader";

function getTemplateBody() {
  const templatePath = path.join(
    process.cwd(),
    "sastik-html-package",
    "Sastik",
    "home-3.html",
  );
  const source = fs.readFileSync(templatePath, "utf8");
  const body = source.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1];

  if (!body) {
    throw new Error("Unable to locate the Home-3 body markup.");
  }

  return applyAlwaysCompliantContent(
    body
      .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/href="javascript:void\(0\);"/g, 'href="#!"'),
  );
}

export function SastikTemplate() {
  return <>{parse(getTemplateBody(), {
    replace(domNode) {
      if (domNode instanceof Element && domNode.attribs["data-shared-site-header"] === "true") {
        return <SiteHeader legacyBehavior />;
      }
    },
  })}</>;
}
