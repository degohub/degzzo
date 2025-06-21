(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/GlobalClients.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GlobalPartnerSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const partners = [
    {
        name: "Partner A",
        slug: "partner-a",
        logos: [
            {
                src: "/clients/Degzzo-ms.webp",
                link: "/Partners/unique"
            },
            {
                src: "/clients/Degzzo-mw.webp",
                link: "/Partners/unique"
            }
        ],
        interval: 2000
    },
    {
        name: "Partner B",
        slug: "partner-b",
        logos: [
            {
                src: "/clients/Degzzo-ns.webp",
                link: "/partners/unique"
            },
            {
                src: "/clients/Degzzo-uc.webp",
                link: "/partners/unique"
            }
        ],
        interval: 3000
    },
    {
        name: "Partner C",
        slug: "partner-c",
        logos: [
            {
                src: "/clients/Degzzo-ymk.webp",
                link: "/partners/unique"
            },
            {
                src: "/clients/Degzzo-ms.webp",
                link: "/partners/unique"
            }
        ],
        interval: 2500
    },
    {
        name: "Partner D",
        slug: "partner-d",
        logos: [
            {
                src: "/clients/Degzzo-ch.webp",
                link: "/partners/partner-d/logo1"
            },
            {
                src: "/clients/Degzzo-nht.webp",
                link: "/partners/partner-d/logo2"
            }
        ],
        interval: 4000
    },
    {
        name: "Partner E",
        slug: "partner-e",
        logos: [
            {
                src: "/clients/Degzzo-nht1.webp",
                link: "/partners/partner-e/logo1"
            },
            {
                src: "/clients/Degzzo-uc.webp",
                link: "/partners/partner-e/logo2"
            }
        ],
        interval: 3500
    },
    {
        name: "Partner F",
        slug: "partner-f",
        logos: [
            {
                src: "/clients/Degzzo-tb.webp",
                link: "/partners/partner-f/logo1"
            },
            {
                src: "/clients/Degzzo-rr.webp",
                link: "/partners/partner-f/logo2"
            }
        ],
        interval: 2200
    }
];
function GlobalPartnerSection() {
    _s();
    const [logoIndexes, setLogoIndexes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(partners.map({
        "GlobalPartnerSection.useState": ()=>0
    }["GlobalPartnerSection.useState"]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalPartnerSection.useEffect": ()=>{
            const intervals = partners.map({
                "GlobalPartnerSection.useEffect.intervals": (partner, i)=>setInterval({
                        "GlobalPartnerSection.useEffect.intervals": ()=>{
                            setLogoIndexes({
                                "GlobalPartnerSection.useEffect.intervals": (prev)=>{
                                    const newIndexes = [
                                        ...prev
                                    ];
                                    newIndexes[i] = newIndexes[i] === 0 ? 1 : 0;
                                    return newIndexes;
                                }
                            }["GlobalPartnerSection.useEffect.intervals"]);
                        }
                    }["GlobalPartnerSection.useEffect.intervals"], partner.interval)
            }["GlobalPartnerSection.useEffect.intervals"]);
            return ({
                "GlobalPartnerSection.useEffect": ()=>intervals.forEach(clearInterval)
            })["GlobalPartnerSection.useEffect"];
        }
    }["GlobalPartnerSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative py-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-5 mx-auto text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-10",
                    initial: {
                        opacity: 1,
                        y: 30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    viewport: {
                        once: true
                    },
                    children: "Our Global Clients"
                }, void 0, false, {
                    fileName: "[project]/components/GlobalClients.jsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6 md:gap-10",
                    children: partners.map((partner, index)=>{
                        const activeLogo = partner.logos[logoIndexes[index]];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `text-center ${[
                                "Partner G",
                                "Partner H"
                            ].includes(partner.name) ? "hidden md:block" : ""}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center relative w-full max-w-[80px] sm:max-w-[130px] md:max-w-[100px] mx-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: activeLogo.link,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                        mode: "wait",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                            src: activeLogo.src,
                                            alt: partner.name,
                                            initial: {
                                                opacity: 1
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            exit: {
                                                opacity: 0
                                            },
                                            transition: {
                                                duration: 0.2
                                            },
                                            className: "w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-300 cursor-pointer"
                                        }, activeLogo.src, false, {
                                            fileName: "[project]/components/GlobalClients.jsx",
                                            lineNumber: 108,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/GlobalClients.jsx",
                                        lineNumber: 107,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/GlobalClients.jsx",
                                    lineNumber: 106,
                                    columnNumber: 11
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/GlobalClients.jsx",
                                lineNumber: 105,
                                columnNumber: 9
                            }, this)
                        }, index, false, {
                            fileName: "[project]/components/GlobalClients.jsx",
                            lineNumber: 99,
                            columnNumber: 7
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/GlobalClients.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/GlobalClients.jsx",
            lineNumber: 84,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/GlobalClients.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
_s(GlobalPartnerSection, "ugO2VprtDlscdAeSVRh9hy75FdY=");
_c = GlobalPartnerSection;
var _c;
__turbopack_context__.k.register(_c, "GlobalPartnerSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/industries/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>IndustriesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlobalClients$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GlobalClients.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
const industries = [
    {
        title: "SportsTech",
        description: "We design immersive digital experiences for the sports industry—whether it’s athlete analytics, fantasy league dashboards, or live match tracking platforms. Our UI/UX elevates engagement and enhances performance management through intuitive, fast, and mobile-ready design.",
        image: "/images/industries/sportstech.jpg",
        link: "/industries/sportstech"
    },
    {
        title: "Real Estate",
        description: "Our real estate solutions focus on turning property discovery into a frictionless experience—integrating advanced search filters, virtual tours, and interactive maps. We prioritize user trust, visual clarity, and conversion-focused layouts that make browsing, booking, and buying seamless.",
        image: "/images/industries/realestate.jpg",
        link: "/industries/realestate"
    },
    {
        title: "E-Commerce",
        description: "From single-brand stores to large-scale marketplaces, we create e-commerce platforms that convert. Fast-loading UIs, smart product discovery, smooth cart flows, and clean mobile-first design—our solutions are crafted to boost conversions and create loyal shoppers.",
        image: "/images/industries/ecom.jpg",
        link: "/industries/ecom"
    },
    {
        title: "Fintech",
        description: "Trust and clarity drive fintech UX. We design secure, data-rich interfaces for neobanks, crypto platforms, lending apps, and investment dashboards—ensuring users always feel confident in every financial decision. Compliance, clarity, and conversion are at the core.",
        image: "/images/industries/fintech.jpg",
        link: "/industries/fintech"
    },
    {
        title: "Telecom",
        description: "Telecom design must simplify the complex. We design platforms that manage plans, services, payments, and support—turning legacy systems into modern, scalable tools. Our UI frameworks support both B2C and enterprise B2B environments with ease.",
        image: "/images/industries/telecom.jpg",
        link: "/industries/telecom"
    },
    {
        title: "EdTech",
        description: "Education needs to be engaging and accessible. We create learning platforms with gamified content, smart dashboards, collaborative tools, and responsive course design. From K–12 to higher ed and professional upskilling, we tailor experiences for every learner.",
        image: "/images/industries/edtech.jpg",
        link: "/industries/edtech"
    },
    {
        title: "Healthcare",
        description: "We build healthcare products with empathy. From patient portals and appointment apps to EMR systems and mental health tools—our design ensures accessibility, clarity, and compliance. We make digital care feel human.",
        image: "/images/industries/healthcare.jpg",
        link: "/industries/healthcare"
    },
    {
        title: "Agriculture",
        description: "In agri-tech, clarity and utility matter most. We craft apps and dashboards for crop monitoring, logistics, supply chain tracking, and farm management. Our interfaces empower rural and enterprise users alike with intuitive, data-driven tools.",
        image: "/images/industries/agriculture.jpg",
        link: "/industries/agriculture"
    },
    {
        title: "Enterprise",
        description: "Enterprise software should be powerful, not painful. We design internal tools, dashboards, CRMs, and ERPs that reduce friction, increase productivity, and look as good as they function. Our scalable UI systems fit startups and Fortune 500s alike.",
        image: "/images/industries/enterprise.jpg",
        link: "/industries/enterprise"
    }
];
function IndustriesPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: " py-16 px-5 bg-gray-50 text-gray-800",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GlobalClients$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/industries/page.jsx",
                    lineNumber: 77,
                    columnNumber: 10
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl mt-10 font-bold text-center mb-4",
                    children: "Reimagining industries through design"
                }, void 0, false, {
                    fileName: "[project]/src/app/industries/page.jsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-center text-gray-600 mb-12 max-w-2xl mx-auto",
                    children: "From agriculture, e-commerce, edtech and enterprise solutions to fintech, healthcare, hospitality, IoT and HR solutions, we have designed it all."
                }, void 0, false, {
                    fileName: "[project]/src/app/industries/page.jsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 gap-15",
                    children: industries.map((industry, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row bg-white rounded-xl shadow hover:shadow-md overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full md:w-1/2 h-80 relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: industry.image,
                                        alt: industry.title,
                                        fill: true,
                                        className: "object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/industries/page.jsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/industries/page.jsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full md:w-1/2 p-6 flex flex-col justify-between",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-2",
                                                children: industry.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/industries/page.jsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 mb-4",
                                                children: industry.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/industries/page.jsx",
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/industries/page.jsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/industries/page.jsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/app/industries/page.jsx",
                            lineNumber: 88,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/industries/page.jsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/industries/page.jsx",
            lineNumber: 76,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/industries/page.jsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
}
_c = IndustriesPage;
var _c;
__turbopack_context__.k.register(_c, "IndustriesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_52d90ffc._.js.map