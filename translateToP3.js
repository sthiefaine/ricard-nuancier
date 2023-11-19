import postcss from "postcss";

import { hexToRgb, hslToRgb, rgbToP3 } from "./src/helpers/colors.js";

export default function () {
  return {
    postcssPlugin: "translateToP3",
    Once(root) {
      const p3Declarations = [];
      root.walkRules(":root", (rule) => {
        rule.walkDecls((decl) => {
          let rgb;
          if (decl.value.startsWith("#")) {
            rgb = hexToRgb(decl.value);
          } else if (decl.value.startsWith("hsl")) {
            rgb = hslToRgb(decl.value);
          } else if (decl.value.startsWith("rgb")) {
            rgb = decl.value;
          }

          if (!rgb) return;

          const p3 = rgbToP3(rgb);
          const p3Value = `color(display-p3 ${p3[0]} ${p3[1]} ${p3[2]})`;
          p3Declarations.push({ prop: decl.prop, value: p3Value });
          decl.remove();
        });

        if (p3Declarations.length > 0) {
          const supportsRule = postcss.atRule({
            name: "supports",
            params: "(color: color(display-p3 1 1 1))",
          });

          const newRule = rule.clone({ nodes: [] });

          p3Declarations.forEach((p3Decl) => {
            newRule.append({ prop: p3Decl.prop, value: p3Decl.value });
          });

          supportsRule.append(newRule);
          rule.replaceWith(supportsRule);
        }
      });
    },
  };
}
