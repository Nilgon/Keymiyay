module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/src/components/LoginModal.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-in.mjs [ssr] (ecmascript) <export default as LogIn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/smartphone.mjs [ssr] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.mjs [ssr] (ecmascript) <export default as X>");
;
;
;
const t = {
    title: "\u0648\u0631\u0648\u062f / \u062b\u0628\u062a \u0646\u0627\u0645",
    mobile: "\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644",
    otp: "\u06a9\u062f \u062a\u0627\u06cc\u06cc\u062f",
    wait: "\u0644\u0637\u0641\u0627 \u0635\u0628\u0631 \u06a9\u0646\u06cc\u062f...",
    send: "\u0627\u0631\u0633\u0627\u0644 \u06a9\u062f",
    login: "\u0648\u0631\u0648\u062f",
    close: "\u0628\u0633\u062a\u0646"
};
function LoginModal({ loginError, isLoading, onClose, onSendOtp, onVerifyOtp }) {
    const [mobile, setMobile] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])("");
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(1);
    const handleSendOtp = async (e)=>{
        e.preventDefault();
        const success = await onSendOtp(mobile);
        if (success) {
            setStep(2);
        }
    };
    const handleVerifyOtp = async (e)=>{
        e.preventDefault();
        await onVerifyOtp(mobile, otp);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "login-backdrop",
        onClick: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
            className: "login-modal",
            onClick: (e)=>e.stopPropagation(),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                    className: "modal-head",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "modal-mark",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$in$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogIn$3e$__["LogIn"], {}, void 0, false, {
                                fileName: "[project]/src/components/LoginModal.jsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoginModal.jsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: "modal-close",
                            type: "button",
                            "aria-label": t.close,
                            onClick: onClose,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                                fileName: "[project]/src/components/LoginModal.jsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoginModal.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LoginModal.jsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                    children: t.title
                }, void 0, false, {
                    fileName: "[project]/src/components/LoginModal.jsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                    onSubmit: step === 1 ? handleSendOtp : handleVerifyOtp,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "login-field",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    children: t.mobile
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoginModal.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "input-shell",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"], {}, void 0, false, {
                                            fileName: "[project]/src/components/LoginModal.jsx",
                                            lineNumber: 78,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            placeholder: "09123456789",
                                            value: mobile,
                                            onChange: (e)=>setMobile(e.target.value),
                                            disabled: step === 2
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/LoginModal.jsx",
                                            lineNumber: 80,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/LoginModal.jsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LoginModal.jsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "login-field",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                                    children: t.otp
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoginModal.jsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "input-shell",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "12345",
                                        value: otp,
                                        onChange: (e)=>setOtp(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/LoginModal.jsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/LoginModal.jsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/LoginModal.jsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "login-error",
                            children: loginError
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoginModal.jsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            className: "login-submit",
                            type: "submit",
                            disabled: isLoading,
                            children: isLoading ? t.wait : step === 1 ? t.send : t.login
                        }, void 0, false, {
                            fileName: "[project]/src/components/LoginModal.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/LoginModal.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/LoginModal.jsx",
            lineNumber: 46,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/LoginModal.jsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = LoginModal;
}),
"[project]/src/assets/images/coffee-beans.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/coffee-beans.32zwkaua_9mbj.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/images/coffee-beans.jpg.mjs { IMAGE => \"[project]/src/assets/images/coffee-beans.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffee$2d$beans$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/coffee-beans.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffee$2d$beans$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 120,
    height: 180,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAUDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwC9bXwWSQShTD8vkhQQwHfPNefaJ3Xkf//Z"
};
}),
"[project]/src/assets/images/daily-dessert.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/daily-dessert.2whov_3-nmh0f.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/images/daily-dessert.jpg.mjs { IMAGE => \"[project]/src/assets/images/daily-dessert.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$daily$2d$dessert$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/daily-dessert.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$daily$2d$dessert$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 180,
    height: 120,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDEfT9Pm0OUraLGkUyoQDyxx13dRXLLmU73O1qDhorH/9k="
};
}),
"[project]/src/assets/images/gallery-dining.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/gallery-dining.2icqw3mf1z911.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/images/gallery-dining.jpg.mjs { IMAGE => \"[project]/src/assets/images/gallery-dining.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$dining$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/gallery-dining.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$dining$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 340,
    height: 510,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAUDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDnvFmm6HY6jE17dyF5oVYeWRkjA+ZgBxn+lYx5raGsuW/vH//Z"
};
}),
"[project]/src/assets/images/gallery-restaurant.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/gallery-restaurant.1gh6hs_e5rc_k.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/images/gallery-restaurant.jpg.mjs { IMAGE => \"[project]/src/assets/images/gallery-restaurant.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$restaurant$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/gallery-restaurant.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$restaurant$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 340,
    height: 255,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDMufF0Gos0lxZM2cEDfx+XT9KqUHK2plGai3of/9k="
};
}),
"[project]/src/assets/images/gallery-salad.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/gallery-salad.295dcpx_pt4dt.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/images/gallery-salad.jpg.mjs { IMAGE => \"[project]/src/assets/images/gallery-salad.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$salad$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/gallery-salad.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$salad$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 340,
    height: 227,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCjHqcrTtId29X8sHdwAPb8a5eT96pGjkvhaP/Z"
};
}),
"[project]/src/assets/images/gallery-table.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/gallery-table.20_1ki_k5ju67.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/images/gallery-table.jpg.mjs { IMAGE => \"[project]/src/assets/images/gallery-table.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$table$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/gallery-table.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$table$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 340,
    height: 227,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDs2i2+Go9jEOWDbsnqTz3qJw5YaBTnzzuz/9k="
};
}),
"[project]/src/assets/images/iced-americano.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/iced-americano.0znl_1lmmgli9.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/images/iced-americano.jpg.mjs { IMAGE => \"[project]/src/assets/images/iced-americano.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$iced$2d$americano$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/iced-americano.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$iced$2d$americano$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 360,
    height: 540,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAUDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDJ8VbLy+jbY6YU/wCrHHJ6de1cftDt9gup/9k="
};
}),
"[project]/src/assets/images/restaurant-menu.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/restaurant-menu.1xgkoqrx-dp9-.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/images/restaurant-menu.jpg.mjs { IMAGE => \"[project]/src/assets/images/restaurant-menu.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$restaurant$2d$menu$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/restaurant-menu.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$restaurant$2d$menu$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 180,
    height: 270,
    blurWidth: 5,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAUDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDJa8t4FVJIrcj+ENtwOByPY1xyjJyO5Om1qf/Z"
};
}),
"[project]/src/assets/images/skin-care.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/skin-care.0q_ojo9v7m_od.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/images/skin-care.jpg.mjs { IMAGE => \"[project]/src/assets/images/skin-care.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$skin$2d$care$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/skin-care.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$skin$2d$care$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 360,
    height: 240,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDL8UJJZLaQiZpY3JX5ydwGfXNZQb3N6iWx/9k="
};
}),
"[project]/src/assets/images/sunglasses.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/sunglasses.0hn-8z_r-20x-.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/images/sunglasses.jpg.mjs { IMAGE => \"[project]/src/assets/images/sunglasses.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$sunglasses$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/sunglasses.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$sunglasses$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 360,
    height: 360,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1pZbr7QytHF5GDtYMd3bHH50hn//Z"
};
}),
"[project]/src/assets/images/vr-game.jpg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/vr-game.11x759-rus68t.jpg" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/assets/images/vr-game.jpg.mjs { IMAGE => \"[project]/src/assets/images/vr-game.jpg (static in ecmascript, tag client)\" } [ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$vr$2d$game$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/images/vr-game.jpg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$vr$2d$game$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 360,
    height: 240,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDXl8R3IfPlrkLxyQM+ta4f36Um9zbGU1ScFE//2Q=="
};
}),
"[project]/src/data/siteData.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activeGifts",
    ()=>activeGifts,
    "dashboardActions",
    ()=>dashboardActions,
    "dashboardNavLinks",
    ()=>dashboardNavLinks,
    "galleryImages",
    ()=>galleryImages,
    "giftHistory",
    ()=>giftHistory,
    "gifts",
    ()=>gifts,
    "infoCards",
    ()=>infoCards,
    "mobileBottomNav",
    ()=>mobileBottomNav,
    "mobileProfileLinks",
    ()=>mobileProfileLinks,
    "navLinks",
    ()=>navLinks,
    "stars",
    ()=>stars,
    "stats",
    ()=>stats,
    "tabs",
    ()=>tabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.mjs [ssr] (ecmascript) <export default as CircleHelp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-list.mjs [ssr] (ecmascript) <export default as ClipboardList>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [ssr] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.mjs [ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.mjs [ssr] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shirt.mjs [ssr] (ecmascript) <export default as Shirt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$x$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SquareX$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/square-x.mjs [ssr] (ecmascript) <export default as SquareX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.mjs [ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [ssr] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffee$2d$beans$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$coffee$2d$beans$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/coffee-beans.jpg.mjs { IMAGE => "[project]/src/assets/images/coffee-beans.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$daily$2d$dessert$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$daily$2d$dessert$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/daily-dessert.jpg.mjs { IMAGE => "[project]/src/assets/images/daily-dessert.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$dining$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$dining$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/gallery-dining.jpg.mjs { IMAGE => "[project]/src/assets/images/gallery-dining.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$restaurant$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$restaurant$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/gallery-restaurant.jpg.mjs { IMAGE => "[project]/src/assets/images/gallery-restaurant.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$salad$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$salad$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/gallery-salad.jpg.mjs { IMAGE => "[project]/src/assets/images/gallery-salad.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$table$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$table$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/gallery-table.jpg.mjs { IMAGE => "[project]/src/assets/images/gallery-table.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$iced$2d$americano$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$iced$2d$americano$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/iced-americano.jpg.mjs { IMAGE => "[project]/src/assets/images/iced-americano.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$restaurant$2d$menu$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$restaurant$2d$menu$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/restaurant-menu.jpg.mjs { IMAGE => "[project]/src/assets/images/restaurant-menu.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$skin$2d$care$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$skin$2d$care$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/skin-care.jpg.mjs { IMAGE => "[project]/src/assets/images/skin-care.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$sunglasses$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$sunglasses$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/sunglasses.jpg.mjs { IMAGE => "[project]/src/assets/images/sunglasses.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$vr$2d$game$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$vr$2d$game$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/images/vr-game.jpg.mjs { IMAGE => "[project]/src/assets/images/vr-game.jpg (static in ecmascript, tag client)" } [ssr] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
;
;
;
;
;
const getImageSrc = (image)=>image?.src || image;
const navLinks = [
    'صفحه اصلی',
    'هدایا',
    'کسب‌وکارها',
    'فروشگاهی',
    'باشگاه مشتریان',
    'درباره ما',
    'تماس با ما'
];
const dashboardNavLinks = [
    'صفحه اصلی',
    'سوالات',
    'کسب‌وکارها',
    'فروشگاهی',
    'باشگاه مشتریان',
    'خبرها',
    'تماس با ما'
];
const tabs = [
    'درباره ما',
    'محصولات و خدمات',
    'هدایا',
    'گالری',
    'نظرات کاربران',
    'موقعیت'
];
const infoCards = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
        text: 'کرج، خیابان المهدی، نبش خیابان گل'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"],
        title: 'ساعات کاری',
        text: '۱۲:۰۰ - ۲۳:۰۰'
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
        text: '۰۹۱۲ ۲۴۵ ۶۷۸۹'
    }
];
const gifts = [
    {
        title: 'آیس آمریکانو رایگان',
        place: 'کافه در ملل',
        badge: 'رایگان',
        badgeClass: 'gift-free',
        image: getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$iced$2d$americano$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$iced$2d$americano$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"])
    },
    {
        title: 'دسر روز رایگان',
        place: 'رستوران ملل',
        badge: 'رایگان',
        badgeClass: 'gift-free',
        image: getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$daily$2d$dessert$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$daily$2d$dessert$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"])
    },
    {
        title: '٪۲۰ تخفیف روی کل منو',
        place: 'رستوران ملل',
        badge: 'تخفیف',
        badgeClass: 'gift-discount',
        image: getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$restaurant$2d$menu$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$restaurant$2d$menu$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"])
    }
];
const galleryImages = [
    getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$dining$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$dining$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]),
    getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$salad$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$salad$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]),
    getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$table$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$table$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"]),
    getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$restaurant$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$gallery$2d$restaurant$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"])
];
const stars = Array.from({
    length: 5
});
const dashboardActions = [
    {
        title: 'اطلاعات حساب',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    },
    {
        title: 'کد معرف',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$x$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SquareX$3e$__["SquareX"]
    },
    {
        title: 'کیف پول',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
    },
    {
        title: 'فرآیندها',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$list$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardList$3e$__["ClipboardList"]
    },
    {
        title: 'هدیه‌های من',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"]
    }
];
const mobileProfileLinks = [
    {
        title: 'هدیه‌های من',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"]
    },
    {
        title: 'فرایندها و کش‌بک‌ها',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shirt$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shirt$3e$__["Shirt"]
    },
    {
        title: 'کیف پول',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
    },
    {
        title: 'کد معرف',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$x$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__SquareX$3e$__["SquareX"]
    },
    {
        title: 'تنظیمات',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"]
    },
    {
        title: 'پشتیبانی و سوالات متداول',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleHelp$3e$__["CircleHelp"]
    }
];
const mobileBottomNav = [
    {
        id: 'home',
        title: 'پیشخوان',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"]
    },
    {
        id: 'club',
        title: 'باشگاه مشتریان',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"]
    },
    {
        id: 'shop',
        title: 'فروشگاهی',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"]
    },
    {
        id: 'gifts',
        title: 'هدایا',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"]
    },
    {
        id: 'account',
        title: 'حساب',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"]
    }
];
const activeGifts = [
    {
        title: 'یک بازی VR رایگان',
        place: 'VR Game',
        time: 'تا ۳ روز دیگر',
        image: getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$vr$2d$game$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$vr$2d$game$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"])
    },
    {
        title: 'پاکسازی پوست رایگان',
        place: 'ماندیا',
        time: 'تا ۱۰ روز دیگر',
        image: getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$skin$2d$care$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$skin$2d$care$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"])
    },
    {
        title: 'عینک آفتابی رایگان',
        place: 'بریلان',
        time: 'تا ۵ روز دیگر',
        image: getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$sunglasses$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$sunglasses$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"])
    },
    {
        title: 'آیس آمریکانو رایگان',
        place: 'کافه چی',
        time: 'تا ۲ روز دیگر',
        image: getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$iced$2d$americano$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$iced$2d$americano$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"])
    }
];
const giftHistory = [
    {
        title: '٪۰ تخفیف رستوران ملل',
        date: 'استفاده شده در ۱۴۰۳/۰۲/۱۵',
        image: getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$restaurant$2d$menu$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$restaurant$2d$menu$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"])
    },
    {
        title: 'دسر روز رایگان',
        date: 'استفاده شده در ۱۴۰۳/۰۱/۲۸',
        image: getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$daily$2d$dessert$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$daily$2d$dessert$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"])
    },
    {
        title: 'قهوه رایگان',
        date: 'استفاده شده در ۱۴۰۲/۱۲/۰۵',
        image: getImageSrc(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$images$2f$coffee$2d$beans$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$images$2f$coffee$2d$beans$2e$jpg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"])
    }
];
const stats = [
    {
        label: 'هدیه‌های دریافت شده',
        value: '۲۳'
    },
    {
        label: 'امتیاز کل',
        value: '۲۸,۵۰۰'
    },
    {
        label: 'هدیه استفاده شده',
        value: '۱۶'
    }
];
}),
"[project]/src/components/MobileBottomNav.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/siteData.js [ssr] (ecmascript)");
;
;
function MobileBottomNav({ currentPage, isLoggedIn, onNavigate }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
        className: "mobile-bottom-nav",
        "aria-label": "ناوبری موبایل",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$siteData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mobileBottomNav"].map(({ id, title, icon: Icon })=>{
            const isActive = id === 'account' && currentPage === 'dashboard';
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                className: isActive ? 'active' : '',
                type: "button",
                onClick: ()=>onNavigate(id),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                        fileName: "[project]/src/components/MobileBottomNav.jsx",
                        lineNumber: 11,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        children: id === 'account' && !isLoggedIn ? 'ورود' : title
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileBottomNav.jsx",
                        lineNumber: 12,
                        columnNumber: 13
                    }, this)
                ]
            }, id, true, {
                fileName: "[project]/src/components/MobileBottomNav.jsx",
                lineNumber: 10,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/MobileBottomNav.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = MobileBottomNav;
}),
"[project]/src/api/auth.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "sendOtp",
    ()=>sendOtp,
    "verifyOtp",
    ()=>verifyOtp
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/node_modules/axios)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const authClient = __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://api.didarads.com/api/v1") || process.env.VITE_API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
const sendOtp = async (mobile)=>{
    const response = await authClient.post("/discount/send-otp", {
        mobile
    });
    return response.data;
};
const verifyOtp = async ({ mobile, otp })=>{
    const response = await authClient.post("/register-mobile", {
        mobile,
        otp
    });
    return response.data;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/helper/authCookie.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TOKEN_COOKIE_NAME",
    ()=>TOKEN_COOKIE_NAME,
    "USER_TYPE_COOKIE_NAME",
    ()=>USER_TYPE_COOKIE_NAME,
    "clearAuthToken",
    ()=>clearAuthToken,
    "getAuthToken",
    ()=>getAuthToken,
    "getAuthUserType",
    ()=>getAuthUserType,
    "hasAuthToken",
    ()=>hasAuthToken,
    "setAuthToken",
    ()=>setAuthToken
]);
const TOKEN_COOKIE_NAME = "keymiyay_token";
const USER_TYPE_COOKIE_NAME = "keymiyay_user_type";
const TOKEN_MAX_AGE_SECONDS = 60 * 60 * 24 * 7;
const canUseDocument = ()=>typeof document !== "undefined";
const getCookie = (name)=>{
    if (!canUseDocument()) {
        return null;
    }
    const cookie = document.cookie.split(";").map((item)=>item.trim()).find((item)=>item.startsWith(name + "="));
    return cookie ? decodeURIComponent(cookie.slice(name.length + 1)) : null;
};
const setCookie = (name, value)=>{
    if (!canUseDocument() || !value) {
        return;
    }
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = name + "=" + encodeURIComponent(value) + "; Max-Age=" + TOKEN_MAX_AGE_SECONDS + "; Path=/; SameSite=Lax" + secure;
};
const clearCookie = (name)=>{
    if (!canUseDocument()) {
        return;
    }
    document.cookie = name + "=; Max-Age=0; Path=/; SameSite=Lax";
};
const getAuthToken = ()=>getCookie(TOKEN_COOKIE_NAME);
const getAuthUserType = ()=>getCookie(USER_TYPE_COOKIE_NAME);
const hasAuthToken = ()=>Boolean(getAuthToken());
const setAuthToken = (token, userType)=>{
    setCookie(TOKEN_COOKIE_NAME, token);
    if (userType) {
        setCookie(USER_TYPE_COOKIE_NAME, userType);
    }
};
const clearAuthToken = ()=>{
    clearCookie(TOKEN_COOKIE_NAME);
    clearCookie(USER_TYPE_COOKIE_NAME);
};
}),
"[project]/src/helper/authMiddleware.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runRequestAuthMiddleware",
    ()=>runRequestAuthMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authCookie$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/authCookie.js [ssr] (ecmascript)");
;
const runRequestAuthMiddleware = (config)=>{
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authCookie$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAuthToken"])();
    const userType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authCookie$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getAuthUserType"])();
    const requiresAuth = Boolean(config.requiresAuth);
    const requiredUserType = config.requiredUserType || "user";
    if (requiresAuth && !token) {
        return Promise.reject(new Error("Authentication is required for this request."));
    }
    if (requiresAuth && userType && userType !== requiredUserType) {
        return Promise.reject(new Error("This user is not allowed to perform this request."));
    }
    config.headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...config.headers
    };
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
};
}),
"[project]/src/helper/httpClient.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import, [project]/node_modules/axios)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authMiddleware$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/authMiddleware.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
const httpClient = __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$2c$__$5b$project$5d2f$node_modules$2f$axios$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://api.didarads.com/api/v1") || process.env.VITE_API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
httpClient.interceptors.request.use(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authMiddleware$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["runRequestAuthMiddleware"]);
httpClient.interceptors.response.use((response)=>response, (error)=>Promise.reject(error));
const __TURBOPACK__default__export__ = httpClient;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/api/home.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "getHomePageData",
    ()=>getHomePageData,
    "requestDiscountCode",
    ()=>requestDiscountCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$httpClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/httpClient.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$httpClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$httpClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
const getHomePageData = async ()=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$httpClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].get("/home", {
        requiresAuth: false
    });
    return response.data;
};
const requestDiscountCode = async (offer)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$httpClient$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].post("/discount/request", {
        discount_id: offer?.id || offer?.discount_id || offer?.discountId,
        offer_id: offer?.offer_id || offer?.offerId || offer?.id,
        title: offer?.title
    }, {
        requiresAuth: true
    });
    return response.data;
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/components/HomePage.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [ssr] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [ssr] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shopping-bag.mjs [ssr] (ecmascript) <export default as ShoppingBag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.mjs [ssr] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2d$percent$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TicketPercent$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket-percent.mjs [ssr] (ecmascript) <export default as TicketPercent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoginModal$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/LoginModal.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileBottomNav$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/MobileBottomNav.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/auth.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$home$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/home.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authCookie$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/authCookie.js [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$home$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$home$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
;
;
;
;
const t = {
    brand: "\u06a9\u06cc \u0645\u06cc\u0627\u06cc",
    home: "\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc",
    gifts: "\u0647\u062f\u0627\u06cc\u0627",
    businesses: "\u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631\u0647\u0627",
    shop: "\u0641\u0631\u0648\u0634\u06af\u0627\u0647\u06cc",
    club: "\u0628\u0627\u0634\u06af\u0627\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646",
    faq: "\u0633\u0648\u0627\u0644\u0627\u062a \u0645\u062a\u062f\u0627\u0648\u0644",
    contact: "\u062a\u0645\u0627\u0633 \u0628\u0627 \u0645\u0627",
    darkMode: "\u062d\u0627\u0644\u062a \u062a\u0627\u0631\u06cc\u06a9",
    lightMode: "\u062d\u0627\u0644\u062a \u0631\u0648\u0634\u0646",
    login: "\u0648\u0631\u0648\u062f / \u062b\u0628\u062a \u0646\u0627\u0645",
    restaurant: "\u0631\u0633\u062a\u0648\u0631\u0627\u0646 \u0645\u0644\u0644",
    free: "\u0631\u0627\u06cc\u06af\u0627\u0646",
    discount: "\u062a\u062e\u0641\u06cc\u0641",
    special: "\u0648\u06cc\u0698\u0647",
    bastani: "\u0628\u0633\u062a\u0646\u06cc",
    barial: "\u0628\u0631\u06cc\u0627\u0644",
    dorato: "\u062f\u0648\u0631\u0627\u062a\u0648",
    ibamo: "\u0627\u06cc\u0628\u0627\u0645\u0648",
    mojalal: "\u0645\u062c\u0644\u0627\u0644",
    bakhshi: "\u0628\u062e\u0634\u06cc",
    heroKicker: "\u062f\u0646\u06cc\u0627\u06cc \u0647\u062f\u06cc\u0647\u200c\u0647\u0627 \u0648 \u062a\u062e\u0641\u06cc\u0641\u200c\u0647\u0627",
    heroTitle: "\u06a9\u06cc \u0645\u06cc\u0627\u06cc\u061b \u06cc\u06a9 \u0634\u0631\u0648\u0639 \u0647\u0645\u0627\u0647\u0646\u06af \u0628\u0627 \u0628\u0627\u0642\u06cc \u0633\u0627\u06cc\u062a",
    heroText: "\u0628\u0631\u0646\u062f\u0647\u0627\u060c \u0647\u062f\u06cc\u0647\u200c\u0647\u0627 \u0648 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f\u0647\u0627\u06cc \u0648\u06cc\u0698\u0647 \u0628\u0627 \u0647\u0645\u0627\u0646 \u0632\u0628\u0627\u0646 \u0628\u0635\u0631\u06cc \u0635\u0641\u062d\u0627\u062a \u062f\u0627\u062e\u0644\u06cc \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0634\u062f\u0647\u200c\u0627\u0646\u062f.",
    viewRestaurant: "\u0645\u0634\u0627\u0647\u062f\u0647 \u0635\u0641\u062d\u0647 \u0631\u0633\u062a\u0648\u0631\u0627\u0646",
    seeGifts: "\u062f\u06cc\u062f\u0646 \u0647\u062f\u0627\u06cc\u0627",
    selectedBrands: "\u0628\u0631\u0646\u062f\u0647\u0627\u06cc \u0645\u0646\u062a\u062e\u0628",
    popularBusinesses: "\u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631\u0647\u0627\u06cc \u0645\u062d\u0628\u0648\u0628",
    fastPath: "\u0645\u0633\u06cc\u0631 \u0633\u0631\u06cc\u0639 \u0628\u0631\u0627\u06cc \u067e\u06cc\u062f\u0627 \u06a9\u0631\u062f\u0646 \u0647\u062f\u06cc\u0647",
    freshOffers: "\u067e\u06cc\u0634\u0646\u0647\u0627\u062f\u0647\u0627\u06cc \u062a\u0627\u0632\u0647",
    activeGifts: "\u0647\u062f\u06cc\u0647\u200c\u0647\u0627 \u0648 \u062a\u062e\u0641\u06cc\u0641\u200c\u0647\u0627\u06cc \u0641\u0639\u0627\u0644",
    all: "\u0645\u0634\u0627\u0647\u062f\u0647 \u0647\u0645\u0647",
    receive: "\u062f\u0631\u06cc\u0627\u0641\u062a",
    close: "\u0628\u0633\u062a\u0646",
    wait: "\u0644\u0637\u0641\u0627 \u0635\u0628\u0631 \u06a9\u0646\u06cc\u062f...",
    discountCode: "\u06a9\u062f \u062a\u062e\u0641\u06cc\u0641 \u0634\u0645\u0627",
    discountRequested: "\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0634\u0645\u0627 \u062b\u0628\u062a \u0634\u062f.",
    discountFailed: "\u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u062f \u062a\u062e\u0641\u06cc\u0641 \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f.",
    search: "\u062c\u0633\u062a\u062c\u0648\u06cc \u0628\u0631\u0646\u062f\u060c \u0647\u062f\u06cc\u0647 \u06cc\u0627 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f...",
    bannerAlt: "\u0628\u0646\u0631 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0648\u06cc\u0698\u0647",
    footerText: "\u0647\u062f\u06cc\u0647\u200c\u0647\u0627\u060c \u062a\u062e\u0641\u06cc\u0641\u200c\u0647\u0627 \u0648 \u0628\u0627\u0634\u06af\u0627\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u062f\u0631 \u06cc\u06a9 \u062a\u062c\u0631\u0628\u0647 \u0633\u0627\u062f\u0647 \u0648 \u0647\u0645\u0627\u0647\u0646\u06af.",
    gift1: "\u0622\u06cc\u0633 \u0622\u0645\u0631\u06cc\u06a9\u0627\u0646\u0648 \u0631\u0627\u06cc\u06af\u0627\u0646",
    gift2: "\u06f2\u06f0\u066a \u062a\u062e\u0641\u06cc\u0641 \u0633\u0641\u0627\u0631\u0634 \u0627\u0632 \u0628\u0631\u06cc\u0627\u0644",
    gift3: "\u0647\u062f\u06cc\u0647 \u0648\u06cc\u0698\u0647 \u062e\u0631\u06cc\u062f \u0627\u0632 \u062f\u0648\u0631\u0627\u062a\u0648",
    sendFailed: "\u0627\u0631\u0633\u0627\u0644 \u06a9\u062f \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f.",
    serverError: "\u062e\u0637\u0627 \u062f\u0631 \u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627 \u0633\u0631\u0648\u0631"
};
const asset = (path)=>`/home/${path}`;
const storyDisplayTitleByTitle = {
    [t.bastani]: "\u0628\u0627\u0633\u062a\u0627\u0646\u06cc",
    [t.mojalal]: "\u0645\u062c\u0644\u0644"
};
const getStoryDisplayTitle = (title)=>storyDisplayTitleByTitle[title] || title;
const storyVideoByTitle = {
    [t.barial]: asset('videos/barial.mp4'),
    [t.bastani]: asset('videos/bastani.mp4'),
    [getStoryDisplayTitle(t.bastani)]: asset('videos/bastani.mp4'),
    [t.dorato]: asset('videos/dorato.mp4'),
    [t.ibamo]: asset('videos/ibamo.mp4'),
    [t.mojalal]: asset('videos/mojalal.mp4'),
    [getStoryDisplayTitle(t.mojalal)]: asset('videos/mojalal.mp4'),
    [t.bakhshi]: asset('videos/bakhshi.mp4')
};
const extraSliderBanners = [
    {
        title: t.ibamo,
        image: asset('img/banner/bannerweb ibamo.telegram.jpg')
    },
    {
        title: t.mojalal,
        image: asset('img/banner/bannerweb mojalal.telegram.jpg')
    },
    {
        title: t.dorato,
        image: asset('img/banner/bannerweb dorato.telegram.jpg')
    }
];
const mergeExtraBanners = (banners)=>[
        ...banners,
        ...extraSliderBanners
    ];
const apiBaseUrl = ("TURBOPACK compile-time value", "https://api.didarads.com/api/v1") || process.env.VITE_API_BASE_URL || '';
const normalizeMediaUrl = (value, fallback)=>{
    if (!value) {
        return fallback;
    }
    if (/^(https?:|data:|blob:|\/)/.test(value)) {
        return value;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            return new URL(value, apiBaseUrl).toString();
        } catch  {
            return `/${value}`;
        }
    }
    return `/${value}`;
};
const defaultHomeData = {
    stories: [
        {
            title: getStoryDisplayTitle(t.bastani),
            image: asset('img/logo bastani.jpg'),
            video: storyVideoByTitle[t.bastani]
        },
        {
            title: t.barial,
            image: asset('img/barial.jpg'),
            video: storyVideoByTitle[t.barial]
        },
        {
            title: t.dorato,
            image: asset('img/logo dorato.jpg'),
            video: storyVideoByTitle[t.dorato]
        },
        {
            title: t.ibamo,
            image: asset('img/logo ibamo.jpg'),
            video: storyVideoByTitle[t.ibamo]
        },
        {
            title: getStoryDisplayTitle(t.mojalal),
            image: asset('img/mojalal.jpg'),
            video: storyVideoByTitle[t.mojalal]
        },
        {
            title: t.bakhshi,
            image: asset('img/bakhshi.jpg'),
            video: storyVideoByTitle[t.bakhshi]
        }
    ],
    banners: [
        {
            title: t.bastani,
            image: asset('img/banner/bannerweb bastani.6ff0aa72.jpg')
        },
        {
            title: t.barial,
            image: asset('img/banner/bannerweb barial.15abe337.jpg')
        },
        {
            title: t.bakhshi,
            image: asset('img/banner/bannerweb bakhshi.e2078af9 (1).jpg')
        }
    ],
    brands: [
        {
            title: t.restaurant,
            image: asset('img/logo-6.b6f80db0.png'),
            href: '/restaurant'
        },
        {
            title: t.barial,
            image: asset('img/barial.jpg'),
            href: '/restaurant'
        },
        {
            title: t.dorato,
            image: asset('img/logo dorato.jpg'),
            href: '/restaurant'
        },
        {
            title: t.bastani,
            image: asset('img/logo bastani.jpg'),
            href: '/restaurant'
        },
        {
            title: t.ibamo,
            image: asset('img/logo ibamo.jpg'),
            href: '/restaurant'
        },
        {
            title: t.mojalal,
            image: asset('img/mojalal.jpg'),
            href: '/restaurant'
        }
    ],
    categories: [
        {
            title: t.gifts,
            icon: 'Gift'
        },
        {
            title: t.restaurant,
            icon: 'Store'
        },
        {
            title: t.shop,
            icon: 'ShoppingBag'
        },
        {
            title: t.club,
            icon: 'Star'
        },
        {
            title: t.special,
            icon: 'Sparkles'
        }
    ],
    offers: [
        {
            title: t.gift1,
            brand: t.restaurant,
            tag: t.free,
            image: asset('img/logo-6.b6f80db0.png')
        },
        {
            title: t.gift2,
            brand: t.barial,
            tag: t.discount,
            image: asset('img/barial.jpg')
        },
        {
            title: t.gift3,
            brand: t.dorato,
            tag: t.special,
            image: asset('img/logo dorato.jpg')
        }
    ]
};
const categoryIcons = {
    Gift: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"],
    Store: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"],
    ShoppingBag: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$bag$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingBag$3e$__["ShoppingBag"],
    Star: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
    Sparkles: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
};
const normalizeList = (value, fallback)=>Array.isArray(value) && value.length ? value : fallback;
const firstValue = (item, keys)=>keys.map((key)=>item?.[key]).find(Boolean);
const resolveHomeData = (data)=>data?.data || data?.home || data?.homepage || data || {};
const isRestaurantBrand = (title = '')=>title === t.restaurant || title.toLowerCase().includes('restaurant') || title.includes('\u0645\u0644\u0644');
const normalizeImage = (item, fallback)=>normalizeMediaUrl(firstValue(item, [
        'image',
        'image_url',
        'imageUrl',
        'logo',
        'logo_url',
        'thumbnail',
        'thumbnail_url',
        'poster'
    ]), fallback);
const normalizeStories = (items)=>items.map((story, index)=>{
        const rawTitle = firstValue(story, [
            'title',
            'name',
            'brand',
            'business_name'
        ]) || `${t.selectedBrands} ${index + 1}`;
        const title = getStoryDisplayTitle(rawTitle);
        return {
            ...story,
            title,
            image: normalizeImage(story, defaultHomeData.stories[index % defaultHomeData.stories.length].image),
            video: normalizeMediaUrl(firstValue(story, [
                'video',
                'video_url',
                'videoUrl',
                'media',
                'media_url',
                'mediaUrl',
                'story_video',
                'storyVideo'
            ]) || storyVideoByTitle[title] || storyVideoByTitle[rawTitle], '')
        };
    });
const normalizeCards = (items, fallback)=>items.map((item, index)=>({
            ...item,
            title: firstValue(item, [
                'title',
                'name',
                'brand',
                'business_name'
            ]) || fallback[index % fallback.length].title,
            image: normalizeImage(item, fallback[index % fallback.length].image),
            href: firstValue(item, [
                'href',
                'url',
                'link'
            ]) || fallback[index % fallback.length].href
        }));
const normalizeOffers = (items)=>items.map((offer, index)=>({
            ...offer,
            id: firstValue(offer, [
                'id',
                'discount_id',
                'discountId',
                'offer_id',
                'offerId'
            ]),
            title: firstValue(offer, [
                'title',
                'name',
                'gift_title',
                'giftTitle'
            ]) || defaultHomeData.offers[index % defaultHomeData.offers.length].title,
            brand: firstValue(offer, [
                'brand',
                'business',
                'business_name',
                'place'
            ]) || defaultHomeData.offers[index % defaultHomeData.offers.length].brand,
            tag: firstValue(offer, [
                'tag',
                'badge',
                'type',
                'discount_type'
            ]) || defaultHomeData.offers[index % defaultHomeData.offers.length].tag,
            image: normalizeImage(offer, defaultHomeData.offers[index % defaultHomeData.offers.length].image)
        }));
const normalizeHomeData = (payload)=>{
    const data = resolveHomeData(payload);
    const brands = normalizeCards(normalizeList(data?.brands || data?.businesses || data?.stores, defaultHomeData.brands), defaultHomeData.brands).map((brand)=>isRestaurantBrand(brand.title) ? {
            ...brand,
            image: defaultHomeData.brands[0].image,
            href: brand.href || '/restaurant'
        } : brand);
    return {
        stories: normalizeStories(normalizeList(data?.stories || data?.story || data?.story_items, defaultHomeData.stories)),
        banners: normalizeCards(normalizeList(data?.banners || data?.sliders || data?.slides, defaultHomeData.banners), defaultHomeData.banners),
        brands,
        categories: normalizeList(data?.categories, defaultHomeData.categories),
        offers: normalizeOffers(normalizeList(data?.offers || data?.gifts || data?.discounts, defaultHomeData.offers))
    };
};
const getDiscountCode = (data)=>firstValue(data, [
        'code',
        'discount_code',
        'discountCode',
        'coupon',
        'coupon_code',
        'couponCode'
    ]) || firstValue(data?.data, [
        'code',
        'discount_code',
        'discountCode',
        'coupon',
        'coupon_code',
        'couponCode'
    ]);
const getDiscountMessage = (data)=>firstValue(data, [
        'message',
        'text'
    ]) || firstValue(data?.data, [
        'message',
        'text'
    ]);
function HomePage({ isDarkMode = false, onToggleTheme }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [homeData, setHomeData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(defaultHomeData);
    const [isLoginOpen, setIsLoginOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [spinningStory, setSpinningStory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [activeBanner, setActiveBanner] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [bannerDragOffset, setBannerDragOffset] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(0);
    const [isBannerDragging, setIsBannerDragging] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const bannerTimerRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const dragStartRef = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useRef"])(null);
    const [loginError, setLoginError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [activeStory, setActiveStory] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [pendingOffer, setPendingOffer] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [discountPopup, setDiscountPopup] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [isRequestingDiscount, setIsRequestingDiscount] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const bannerItems = mergeExtraBanners(homeData.banners.length ? homeData.banners : defaultHomeData.banners);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        let isMounted = true;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$home$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["getHomePageData"])().then((data)=>{
            if (isMounted) {
                setHomeData(normalizeHomeData(data));
            }
        }).catch(()=>{
            if (isMounted) {
                setHomeData(defaultHomeData);
            }
        });
        return ()=>{
            isMounted = false;
        };
    }, []);
    const clearBannerTimer = ()=>{
        if (bannerTimerRef.current) {
            window.clearTimeout(bannerTimerRef.current);
            bannerTimerRef.current = null;
        }
    };
    const resetBannerTimer = ()=>{
        clearBannerTimer();
        bannerTimerRef.current = window.setTimeout(()=>{
            setActiveBanner((current)=>(current + 1) % bannerItems.length);
        }, 4200);
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        resetBannerTimer();
        return ()=>{
            clearBannerTimer();
        };
    }, [
        activeBanner,
        bannerItems.length
    ]);
    const openLogin = ()=>{
        setLoginError('');
        setIsLoginOpen(true);
    };
    const spinStory = (title)=>{
        setSpinningStory(title);
        window.setTimeout(()=>setSpinningStory(null), 950);
    };
    const openStory = (story)=>{
        spinStory(story.title);
        setActiveStory(story);
    };
    const showPreviousBanner = ()=>{
        setActiveBanner((current)=>(current - 1 + bannerItems.length) % bannerItems.length);
    };
    const showNextBanner = ()=>{
        setActiveBanner((current)=>(current + 1) % bannerItems.length);
    };
    const showBanner = (index)=>{
        setActiveBanner(index);
    };
    const startBannerDrag = (clientX)=>{
        clearBannerTimer();
        dragStartRef.current = clientX;
        setIsBannerDragging(true);
        setBannerDragOffset(0);
    };
    const handleBannerPointerDown = (event)=>{
        if (event.button !== undefined && event.button !== 0) {
            return;
        }
        event.currentTarget.setPointerCapture(event.pointerId);
        startBannerDrag(event.clientX);
    };
    const moveBannerDrag = (clientX)=>{
        if (dragStartRef.current === null) {
            return;
        }
        setBannerDragOffset(clientX - dragStartRef.current);
    };
    const finishBannerDrag = (clientX)=>{
        if (dragStartRef.current === null) {
            return;
        }
        const distance = clientX - dragStartRef.current;
        dragStartRef.current = null;
        setIsBannerDragging(false);
        setBannerDragOffset(0);
        if (Math.abs(distance) < 45) {
            resetBannerTimer();
            return;
        }
        if (distance < 0) {
            showNextBanner();
            return;
        }
        showPreviousBanner();
    };
    const handleBannerPointerUp = (event)=>{
        finishBannerDrag(event.clientX);
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
            event.currentTarget.releasePointerCapture(event.pointerId);
        }
    };
    const cancelBannerDrag = ()=>{
        if (dragStartRef.current !== null) {
            resetBannerTimer();
        }
        dragStartRef.current = null;
        setIsBannerDragging(false);
        setBannerDragOffset(0);
    };
    const closeLogin = ()=>{
        setLoginError('');
        setIsLoginOpen(false);
    };
    const handleSendOtp = async (mobile)=>{
        try {
            setIsLoading(true);
            setLoginError('');
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["sendOtp"])(mobile);
            if (data.status === 'otp_sent') {
                return true;
            }
            setLoginError(t.sendFailed);
            return false;
        } catch (error) {
            setLoginError(error.response?.data?.message || t.serverError);
            return false;
        } finally{
            setIsLoading(false);
        }
    };
    const handleVerifyOtp = async (mobile, otp)=>{
        try {
            setIsLoading(true);
            setLoginError('');
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$auth$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["verifyOtp"])({
                mobile,
                otp
            });
            if (data.token) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authCookie$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["setAuthToken"])(data.token, data.user?.type || data.userType || data.role);
            }
            setIsLoginOpen(false);
            if (pendingOffer) {
                const offerToClaim = pendingOffer;
                setPendingOffer(null);
                await handleReceiveOffer(offerToClaim, true);
                return;
            }
            router.push('/dashboard');
        } catch (error) {
            setLoginError(error.response?.data?.message || error.message);
        } finally{
            setIsLoading(false);
        }
    };
    const handleReceiveOffer = async (offer, skipAuthCheck = false)=>{
        if (!skipAuthCheck && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authCookie$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hasAuthToken"])()) {
            setPendingOffer(offer);
            openLogin();
            return;
        }
        try {
            setIsRequestingDiscount(true);
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$home$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["requestDiscountCode"])(offer);
            setDiscountPopup({
                offer,
                code: getDiscountCode(data),
                message: getDiscountMessage(data) || t.discountRequested
            });
        } catch (error) {
            setDiscountPopup({
                offer,
                code: '',
                message: error.response?.data?.message || error.message || t.discountFailed
            });
        } finally{
            setIsRequestingDiscount(false);
        }
    };
    const handleMobileNav = (id)=>{
        if (id === 'home') {
            router.push('/');
            return;
        }
        if (id === 'shop') {
            router.push('/restaurant');
            return;
        }
        if (id === 'gifts') {
            document.getElementById('gifts')?.scrollIntoView({
                behavior: 'smooth'
            });
            return;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authCookie$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hasAuthToken"])()) {
            openLogin();
            return;
        }
        router.push('/dashboard');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("main", {
        className: `page-shell home-shell ${isDarkMode ? 'theme-dark' : ''}`,
        dir: "rtl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                className: "frame home-frame",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                        className: "topbar d-flex align-items-center justify-content-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "d-flex align-items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        className: "brand d-flex align-items-center",
                                        href: "/",
                                        "aria-label": t.home,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                                className: "brand-icon"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 508,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: t.brand
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 509,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 507,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("nav", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                            className: "nav-list d-flex align-items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/",
                                                        children: t.home
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 513,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HomePage.jsx",
                                                    lineNumber: 513,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                        href: "#gifts",
                                                        children: t.gifts
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 514,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HomePage.jsx",
                                                    lineNumber: 514,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                        href: "#brands",
                                                        children: t.businesses
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 515,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HomePage.jsx",
                                                    lineNumber: 515,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                        href: "#categories",
                                                        children: t.shop
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 516,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HomePage.jsx",
                                                    lineNumber: 516,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/faq",
                                                        children: t.faq
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 517,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HomePage.jsx",
                                                    lineNumber: 517,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: openLogin,
                                                        children: t.club
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 518,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HomePage.jsx",
                                                    lineNumber: 518,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                        href: "#footer",
                                                        children: t.contact
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 519,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/HomePage.jsx",
                                                    lineNumber: 519,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/HomePage.jsx",
                                            lineNumber: 512,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 511,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 506,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "home-header-actions",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: `home-theme-toggle ${isDarkMode ? 'is-dark' : ''}`,
                                        type: "button",
                                        onClick: onToggleTheme,
                                        "aria-label": isDarkMode ? t.lightMode : t.darkMode,
                                        title: isDarkMode ? t.lightMode : t.darkMode,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "home-theme-toggle-icon home-theme-toggle-sun",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/HomePage.jsx",
                                                    lineNumber: 531,
                                                    columnNumber: 78
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 531,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "home-theme-toggle-thumb"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 532,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "home-theme-toggle-icon home-theme-toggle-moon",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/HomePage.jsx",
                                                    lineNumber: 533,
                                                    columnNumber: 79
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 533,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 524,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "login-btn home-login-btn",
                                        type: "button",
                                        onClick: openLogin,
                                        children: t.login
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 535,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 523,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomePage.jsx",
                        lineNumber: 505,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "home-search-row",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("label", {
                            className: "home-search-field",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomePage.jsx",
                                    lineNumber: 541,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                    placeholder: t.search
                                }, void 0, false, {
                                    fileName: "[project]/src/components/HomePage.jsx",
                                    lineNumber: 542,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/HomePage.jsx",
                            lineNumber: 540,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HomePage.jsx",
                        lineNumber: 539,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "home-stories",
                        "aria-label": t.selectedBrands,
                        children: homeData.stories.map((story)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                className: `home-story ${spinningStory === story.title ? 'is-spinning' : ''}`,
                                type: "button",
                                onClick: ()=>openStory(story),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "home-story-ring",
                                        children: story.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("video", {
                                            src: story.video,
                                            poster: story.image,
                                            preload: "metadata",
                                            muted: true,
                                            playsInline: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomePage.jsx",
                                            lineNumber: 556,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                            src: story.image,
                                            alt: story.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomePage.jsx",
                                            lineNumber: 558,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 554,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        children: story.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 561,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, story.title, true, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 548,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/HomePage.jsx",
                        lineNumber: 546,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "home-hero-grid",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "home-banner-slider",
                                "aria-label": t.bannerAlt,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: 'home-banner-viewport' + (isBannerDragging ? ' is-dragging' : ''),
                                        onPointerDown: handleBannerPointerDown,
                                        onPointerMove: (event)=>moveBannerDrag(event.clientX),
                                        onPointerUp: handleBannerPointerUp,
                                        onPointerCancel: cancelBannerDrag,
                                        onLostPointerCapture: cancelBannerDrag,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "home-banner-track",
                                            style: {
                                                transform: 'translateX(calc(' + activeBanner * -100 + '% + ' + bannerDragOffset + 'px))'
                                            },
                                            children: bannerItems.map((banner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "home-banner-slide",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                        src: banner.image,
                                                        alt: `${t.bannerAlt} ${banner.title}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 579,
                                                        columnNumber: 21
                                                    }, this)
                                                }, `${banner.title}-${index}`, false, {
                                                    fileName: "[project]/src/components/HomePage.jsx",
                                                    lineNumber: 578,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomePage.jsx",
                                            lineNumber: 576,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 568,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "home-banner-nav home-banner-nav-prev",
                                        type: "button",
                                        onClick: showNextBanner,
                                        "aria-label": "Next banner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
                                            fileName: "[project]/src/components/HomePage.jsx",
                                            lineNumber: 586,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 585,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "home-banner-nav home-banner-nav-next",
                                        type: "button",
                                        onClick: showPreviousBanner,
                                        "aria-label": "Previous banner",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {}, void 0, false, {
                                            fileName: "[project]/src/components/HomePage.jsx",
                                            lineNumber: 589,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 588,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "home-banner-dots",
                                        "aria-label": "Banner navigation",
                                        children: bannerItems.map((banner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                className: index === activeBanner ? 'is-active' : '',
                                                type: "button",
                                                onClick: ()=>showBanner(index),
                                                "aria-label": 'Show banner ' + (index + 1)
                                            }, `${banner.title}-${index}`, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 594,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 592,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 567,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("aside", {
                                className: "home-profile-card",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "home-profile-logo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {}, void 0, false, {
                                            fileName: "[project]/src/components/HomePage.jsx",
                                            lineNumber: 607,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 606,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                        className: "home-eyebrow",
                                        children: t.heroKicker
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 609,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        children: t.heroTitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 610,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: t.heroText
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 611,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "home-hero-actions",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                className: "home-primary-action",
                                                href: "/restaurant",
                                                children: t.viewRestaurant
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 613,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                href: "#gifts",
                                                children: t.seeGifts
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 614,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 612,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 605,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomePage.jsx",
                        lineNumber: 566,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "home-section",
                        id: "brands",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "home-section-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: t.selectedBrands
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 622,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                children: t.popularBusinesses
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 623,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 621,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "home-text-action",
                                        type: "button",
                                        children: t.all
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 625,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 620,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "home-brand-grid",
                                children: homeData.brands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                                        className: "home-brand-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: brand.image,
                                                alt: brand.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 630,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("strong", {
                                                children: brand.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 631,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, brand.title, true, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 629,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 627,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomePage.jsx",
                        lineNumber: 619,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "home-section",
                        id: "categories",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "home-section-head",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                            children: t.gifts
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomePage.jsx",
                                            lineNumber: 640,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                            children: t.fastPath
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/HomePage.jsx",
                                            lineNumber: 641,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/HomePage.jsx",
                                    lineNumber: 639,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 638,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "home-category-grid",
                                children: homeData.categories.map(({ title, icon })=>{
                                    const Icon = categoryIcons[icon] || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                                        className: "home-category-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 650,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 651,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, title, true, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 649,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 644,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomePage.jsx",
                        lineNumber: 637,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                        className: "home-section",
                        id: "gifts",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "home-section-head",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                children: t.freshOffers
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 661,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                children: t.activeGifts
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 662,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 660,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        className: "home-text-action",
                                        type: "button",
                                        children: t.all
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 664,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 659,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "home-offer-grid",
                                children: homeData.offers.map((offer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
                                        className: "home-offer-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                                                src: offer.image,
                                                alt: offer.brand
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 669,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "home-offer-copy",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: offer.brand
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 671,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                        children: offer.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 672,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 670,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "home-offer-footer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2d$percent$2e$mjs__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TicketPercent$3e$__["TicketPercent"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/HomePage.jsx",
                                                                lineNumber: 675,
                                                                columnNumber: 25
                                                            }, this),
                                                            " ",
                                                            offer.tag
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 675,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>handleReceiveOffer(offer),
                                                        disabled: isRequestingDiscount,
                                                        children: isRequestingDiscount ? t.wait : t.receive
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/HomePage.jsx",
                                                        lineNumber: 676,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/HomePage.jsx",
                                                lineNumber: 674,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, offer.title, true, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 668,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 666,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomePage.jsx",
                        lineNumber: 658,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("footer", {
                        className: "home-footer",
                        id: "footer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                        children: t.brand
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 686,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                        children: t.footerText
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 687,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 685,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "home-footer-links",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        children: t.home
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 690,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/restaurant",
                                        children: t.restaurant
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 691,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: openLogin,
                                        children: t.club
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomePage.jsx",
                                        lineNumber: 692,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomePage.jsx",
                                lineNumber: 689,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomePage.jsx",
                        lineNumber: 684,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HomePage.jsx",
                lineNumber: 504,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$MobileBottomNav$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                currentPage: "home",
                isLoggedIn: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authCookie$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["hasAuthToken"])(),
                onNavigate: handleMobileNav
            }, void 0, false, {
                fileName: "[project]/src/components/HomePage.jsx",
                lineNumber: 697,
                columnNumber: 7
            }, this),
            isLoginOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$LoginModal$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                loginError: loginError,
                isLoading: isLoading,
                onClose: closeLogin,
                onSendOtp: handleSendOtp,
                onVerifyOtp: handleVerifyOtp
            }, void 0, false, {
                fileName: "[project]/src/components/HomePage.jsx",
                lineNumber: 700,
                columnNumber: 9
            }, this),
            activeStory && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "home-popup-backdrop",
                onClick: ()=>setActiveStory(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                    className: "home-story-popup",
                    onClick: (event)=>event.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "home-popup-close",
                            onClick: ()=>setActiveStory(null),
                            children: t.close
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomePage.jsx",
                            lineNumber: 712,
                            columnNumber: 13
                        }, this),
                        activeStory.video ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("video", {
                            src: activeStory.video,
                            controls: true,
                            autoPlay: true,
                            playsInline: true,
                            preload: "auto"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomePage.jsx",
                            lineNumber: 714,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("img", {
                            src: activeStory.image,
                            alt: activeStory.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomePage.jsx",
                            lineNumber: 716,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            children: activeStory.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomePage.jsx",
                            lineNumber: 718,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HomePage.jsx",
                    lineNumber: 711,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HomePage.jsx",
                lineNumber: 710,
                columnNumber: 9
            }, this),
            discountPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "home-popup-backdrop",
                onClick: ()=>setDiscountPopup(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                    className: "home-discount-popup",
                    onClick: (event)=>event.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "home-popup-close",
                            onClick: ()=>setDiscountPopup(null),
                            children: t.close
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomePage.jsx",
                            lineNumber: 726,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                            className: "home-eyebrow",
                            children: discountPopup.offer?.brand
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomePage.jsx",
                            lineNumber: 727,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                            children: discountPopup.code ? t.discountCode : discountPopup.offer?.title
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomePage.jsx",
                            lineNumber: 728,
                            columnNumber: 13
                        }, this),
                        discountPopup.code && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "home-discount-code",
                            children: discountPopup.code
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomePage.jsx",
                            lineNumber: 729,
                            columnNumber: 36
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                            children: discountPopup.message
                        }, void 0, false, {
                            fileName: "[project]/src/components/HomePage.jsx",
                            lineNumber: 730,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/HomePage.jsx",
                    lineNumber: 725,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/HomePage.jsx",
                lineNumber: 724,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HomePage.jsx",
        lineNumber: 503,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = HomePage;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/pages/index.jsx [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomePage$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HomePage.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomePage$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomePage$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
function Home({ isDarkMode, onToggleTheme }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: 'کی میای'
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "صفحه اصلی کی میای برای مشاهده هدایا، برندها و پیشنهادهای ویژه"
                    }, void 0, false, {
                        fileName: "[project]/pages/index.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/index.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomePage$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                isDarkMode: isDarkMode,
                onToggleTheme: onToggleTheme
            }, void 0, false, {
                fileName: "[project]/pages/index.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0j3i2lm._.js.map