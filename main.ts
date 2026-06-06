import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const assets = path.join(dist, "assets");

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(assets, { recursive: true });

for (const file of fs.readdirSync(path.join(root, "public"))) {
  fs.copyFileSync(path.join(root, "public", file), path.join(dist, file));
}

fs.copyFileSync(path.join(root, "src", "styles.css"), path.join(assets, "styles.css"));

let script = fs.readFileSync(path.join(root, "src", "main.ts"), "utf8");
script = script.replace(/import "\.\/styles\.css";\s*/, "");
script = script.replace(/type IconName[\s\S]*?;\s*\n\n/, "");
script = script.replace(/type Service[\s\S]*?};\s*\n\n/, "");
script = script.replace(/ as IconName/g, "");
script = script.replace(/document\.querySelector<[^>]+>\(/g, "document.querySelector(");
script = script.replace(/: [A-Za-z][A-Za-z0-9_<>,\[\] ]+(?=\s*[=),{])/g, "");

fs.writeFileSync(path.join(assets, "main.js"), script, "utf8");

const html = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#030303" />
    <meta
      name="description"
      content="Drey Vieira Barbearia em Campo Grande MS. Cortes masculinos, barba, barba premium e atendimento personalizado."
    />
    <title>Drey Vieira Barbearia</title>
    <link rel="icon" type="image/png" href="/logo.png" />
    <link rel="stylesheet" href="/assets/styles.css" />
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/assets/main.js"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(dist, "index.html"), html, "utf8");
console.log("Build concluido em dist/");
