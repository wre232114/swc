import { _ as _object_spread } from "@swc/helpers/_/_object_spread";
import { _ as _object_spread_props } from "@swc/helpers/_/_object_spread_props";
import { _ as _object_without_properties } from "@swc/helpers/_/_object_without_properties";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home() {
    var _this = this;
    var icon = [
        16,
        32,
        96,
        192
    ].map(function(s) {
        return {
            href: "/favicon.svg",
            sizes: "".concat(s, "x").concat(s)
        };
    });
    return /*#__PURE__*/ React.createElement("div", {
        className: styles.container,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 12,
            columnNumber: 9
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(Head, {
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 13,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("title", {
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 14,
            columnNumber: 17
        },
        __self: this
    }, "Create Next App"), /*#__PURE__*/ React.createElement("meta", {
        name: "description",
        content: "Generated by create next app",
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 15,
            columnNumber: 17
        },
        __self: this
    }), icon.map(function(_param) /*#__PURE__*/ {
        var href = _param.href, linkProps = _object_without_properties(_param, [
            "href"
        ]);
        return React.createElement("link", _object_spread_props(_object_spread({
            href: href
        }, linkProps), {
            rel: "icon",
            key: href,
            __source: {
                fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
                lineNumber: 20,
                columnNumber: 21
            },
            __self: _this
        }));
    })), /*#__PURE__*/ React.createElement("main", {
        className: styles.main,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 24,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h1", {
        className: styles.title,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 25,
            columnNumber: 17
        },
        __self: this
    }, "Welcome to ", /*#__PURE__*/ React.createElement("a", {
        href: "https://nextjs.org",
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 26,
            columnNumber: 32
        },
        __self: this
    }, "Next.js!")), /*#__PURE__*/ React.createElement("p", {
        className: styles.description,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 29,
            columnNumber: 17
        },
        __self: this
    }, "Get started by editing", " ", /*#__PURE__*/ React.createElement("code", {
        className: styles.code,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 31,
            columnNumber: 21
        },
        __self: this
    }, "pages/index.js")), /*#__PURE__*/ React.createElement("div", {
        className: styles.grid,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 34,
            columnNumber: 17
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("a", {
        href: "https://nextjs.org/docs",
        className: styles.card,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 35,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h2", {
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 36,
            columnNumber: 25
        },
        __self: this
    }, "Documentation →"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 37,
            columnNumber: 25
        },
        __self: this
    }, "Find in-depth information about Next.js features and API.")), /*#__PURE__*/ React.createElement("a", {
        href: "https://nextjs.org/learn",
        className: styles.card,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 43,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h2", {
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 44,
            columnNumber: 25
        },
        __self: this
    }, "Learn →"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 45,
            columnNumber: 25
        },
        __self: this
    }, "Learn about Next.js in an interactive course with quizzes!")), /*#__PURE__*/ React.createElement("a", {
        href: "https://github.com/vercel/next.js/tree/canary/examples",
        className: styles.card,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 51,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h2", {
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 55,
            columnNumber: 25
        },
        __self: this
    }, "Examples →"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 56,
            columnNumber: 25
        },
        __self: this
    }, "Discover and deploy boilerplate example Next.js projects.")), /*#__PURE__*/ React.createElement("a", {
        href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        className: styles.card,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 62,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("h2", {
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 66,
            columnNumber: 25
        },
        __self: this
    }, "Deploy →"), /*#__PURE__*/ React.createElement("p", {
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 67,
            columnNumber: 25
        },
        __self: this
    }, "Instantly deploy your Next.js site to a public URL with Vercel.")))), /*#__PURE__*/ React.createElement("footer", {
        className: styles.footer,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 75,
            columnNumber: 13
        },
        __self: this
    }, /*#__PURE__*/ React.createElement("a", {
        href: "https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
        target: "_blank",
        rel: "noopener noreferrer",
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 76,
            columnNumber: 17
        },
        __self: this
    }, "Powered by", " ", /*#__PURE__*/ React.createElement("span", {
        className: styles.logo,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 82,
            columnNumber: 21
        },
        __self: this
    }, /*#__PURE__*/ React.createElement(Image, {
        src: "/vercel.svg",
        alt: "Vercel Logo",
        width: 72,
        height: 16,
        __source: {
            fileName: "$DIR/tests/vercel/loader-only/next-33291/2-classic/input/index.js",
            lineNumber: 83,
            columnNumber: 25
        },
        __self: this
    })))));
}
