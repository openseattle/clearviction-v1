import { readFileSync, writeFileSync } from "fs";
import prettier from "prettier";

async function AppIndex() {
    // generate page paths from App.jsx in the /src folder.
    const fileContent = readFileSync("./src/App.jsx", "utf-8");
    const pagePaths = fileContent.split(/\r?\n/).reduce((acc, line) => {
        if (
            line.includes("<Route") &&
            line.includes("path=") &&
            !line.includes("404") &&
            !line.includes(":pageId") &&
            !line.includes("//")
        ) {
            acc.push(
                line
                    .slice(line.indexOf("path=") + 5, line.length)
                    .replaceAll('"', "")
                    .replaceAll("/", "")
                    .replaceAll(">", "")
                    .trim()
            );
        }
        return acc;
    }, []);

    return pagePaths;
}

async function calculatorIndex() {
    // generate page paths from calculatorPages.ts in /src/data/ folder
    const fileContent = readFileSync("./src/data/calculatorPages.ts", "utf-8");
    const pagePaths = fileContent.split(/\r?\n/).reduce((acc, line) => {
        if (line.includes("href:") && line.includes("CALC_PREFIX") && !line.includes("//")) {
            acc.push(
                `calculator/${line
                    .replaceAll("href:", "")
                    .replaceAll("`", "")
                    .replaceAll("$", "")
                    .replaceAll("/", "")
                    .replaceAll(",", "")
                    .replaceAll("{CALC_PREFIX}", "")
                    .trim()}`
            );
        }
        return acc;
    }, []);

    return pagePaths;
}

async function generate() {
    const prettierConfig = await prettier.resolveConfig("./.prettierrc.json");
    const pagePaths = await AppIndex();
    const calculatorPages = await calculatorIndex();
    const allPaths = pagePaths.concat(calculatorPages);

    const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${allPaths
            .map(path => {
                return `
                <url>
                    <loc>${`https://clearviction.org/${path}`}</loc>
                </url>
            `;
            })
            .join("")}
    </urlset>
    `;

    const formatted = prettier.format(sitemap, {
        ...prettierConfig,
        parser: "html",
    });

    // eslint-disable-next-line no-sync
    writeFileSync("public/sitemap.xml", formatted);
}

generate();
