(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/// <reference path="../../../shared/runtime/runtime-types.d.ts" />
/// <reference path="../../../shared/runtime/dev-globals.d.ts" />
/// <reference path="../../../shared/runtime/dev-protocol.d.ts" />
/// <reference path="../../../shared/runtime/dev-extensions.ts" />
__turbopack_context__.s([
    "connect",
    ()=>connect,
    "setHooks",
    ()=>setHooks,
    "subscribeToUpdate",
    ()=>subscribeToUpdate
]);
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case 'turbopack-connected':
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error('A separate HMR handler was already registered');
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: 'turbopack-subscribe',
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: 'turbopack-unsubscribe',
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: 'ChunkListUpdate',
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted' || updateA.type === 'deleted' && updateB.type === 'added') {
        return undefined;
    }
    if (updateB.type === 'total') {
        // A total update replaces the entire chunk, so it supersedes any prior update.
        return updateB;
    }
    if (updateA.type === 'partial') {
        invariant(updateA.instruction, 'Partial updates are unsupported');
    }
    if (updateB.type === 'partial') {
        invariant(updateB.instruction, 'Partial updates are unsupported');
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: 'EcmascriptMergedUpdate',
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === 'added' && updateB.type === 'deleted') {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === 'deleted' && updateB.type === 'added') {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: 'partial',
            added,
            deleted
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'partial') {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: 'partial',
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === 'added' && updateB.type === 'partial') {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: 'added',
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === 'partial' && updateB.type === 'deleted') {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: 'deleted',
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    'bug',
    'error',
    'fatal'
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    'bug',
    'fatal',
    'error',
    'warning',
    'info',
    'log'
];
const CATEGORY_ORDER = [
    'parse',
    'resolve',
    'code generation',
    'rendering',
    'typescript',
    'other'
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case 'issues':
            break;
        case 'partial':
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === 'notFound') {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}),
"[project]/src/helper/authCookie.js [client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/helper/authMiddleware.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runRequestAuthMiddleware",
    ()=>runRequestAuthMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authCookie$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/authCookie.js [client] (ecmascript)");
;
const runRequestAuthMiddleware = (config)=>{
    const token = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authCookie$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthToken"])();
    const userType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authCookie$2e$js__$5b$client$5d$__$28$ecmascript$29$__["getAuthUserType"])();
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/helper/httpClient.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authMiddleware$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/authMiddleware.js [client] (ecmascript)");
;
;
const httpClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: ("TURBOPACK compile-time value", "https://api.didarads.com/api/v1") || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.VITE_API_BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});
httpClient.interceptors.request.use(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$authMiddleware$2e$js__$5b$client$5d$__$28$ecmascript$29$__["runRequestAuthMiddleware"]);
httpClient.interceptors.response.use((response)=>response, (error)=>Promise.reject(error));
const __TURBOPACK__default__export__ = httpClient;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/api/membership.js [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "submitMembershipRequest",
    ()=>submitMembershipRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$httpClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/helper/httpClient.js [client] (ecmascript)");
;
const submitMembershipRequest = async (payload)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$helper$2f$httpClient$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].post("/membership-requests", payload, {
        requiresAuth: false
    });
    return response.data;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/FaqMembershipPage.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/link.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.mjs [client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gift.mjs [client] (ecmascript) <export default as Gift>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/handshake.mjs [client] (ecmascript) <export default as Handshake>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-question-mark.mjs [client] (ecmascript) <export default as HelpCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/megaphone.mjs [client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.mjs [client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.mjs [client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.mjs [client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/store.mjs [client] (ecmascript) <export default as Store>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$membership$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/api/membership.js [client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const nav = {
    brand: 'کی میای',
    home: 'صفحه اصلی',
    gifts: 'هدایا',
    businesses: 'کسب‌وکارها',
    faq: 'سوالات متداول',
    contact: 'تماس با ما'
};
const customerSteps = [
    {
        title: 'از یکی خرید می‌کنی',
        text: 'از هر کسب‌وکار عضو کی‌میای خرید یا خدمات دریافت می‌کنی.'
    },
    {
        title: 'هدیه‌ات فعال می‌شود',
        text: 'بعد از ثبت خرید، هدیه‌های اختصاصی سایر مجموعه‌های عضو برایت فعال می‌شود.'
    },
    {
        title: 'از هدیه‌ها استفاده می‌کنی',
        text: 'می‌توانی در مدت اعتبار کمپین به مجموعه‌های دیگر مراجعه کرده و هدیه‌های خود را دریافت کنی.'
    },
    {
        title: 'با کسب‌وکارهای جدید آشنا می‌شوی',
        text: 'هر خرید، تو را با خدمات و برندهای جدید شهر آشنا می‌کند.'
    },
    {
        title: 'همه برنده‌اند',
        text: 'مشتری تجربه‌های جدید به دست می‌آورد و کسب‌وکارها بدون رقابت ناسالم، مشتریان جدید جذب می‌کنند.'
    }
];
const businessSteps = [
    'درخواست عضویت ثبت می‌کنید.',
    'تیم کی‌میای مجموعه شما را بررسی می‌کند.',
    'هدیه یا مزیت مناسب کسب‌وکارتان طراحی می‌شود.',
    'مجموعه شما به کمپین اضافه می‌شود.',
    'از طریق تبلیغات شهری، اینستاگرام، پیامک و سایر اعضای شبکه، مشتریان جدید با کسب‌وکار شما آشنا می‌شوند.',
    'گزارش عملکرد کمپین و نتایج همکاری را دریافت می‌کنید.'
];
const faqs = [
    {
        question: 'آیا عضویت رایگان است؟',
        answer: 'فرآیند بررسی اولیه رایگان است و پس از تأیید، شرایط همکاری اعلام می‌شود.'
    },
    {
        question: 'هدیه را چه کسی تعیین می‌کند؟',
        answer: 'هدیه توسط خود مجموعه پیشنهاد می‌شود و تیم کی‌میای برای جذاب‌تر شدن آن مشاوره می‌دهد.'
    },
    {
        question: 'اگر ظرفیت کمپین تکمیل شود چه می‌شود؟',
        answer: 'مجموعه در لیست انتظار کمپین بعدی قرار می‌گیرد.'
    },
    {
        question: 'آیا همه صنف‌ها می‌توانند عضو شوند؟',
        answer: 'خیر. کی‌میای برای حفظ کیفیت شبکه، تعداد مشخصی مجموعه از هر صنف را پذیرش می‌کند.'
    },
    {
        question: 'چقدر طول می‌کشد تا عضو شوم؟',
        answer: 'معمولاً بین ۲۴ تا ۷۲ ساعت پس از ثبت درخواست.'
    }
];
const trustItems = [
    'بیش از ۴۱۰۰ استفاده از پلتفرم در اولین کمپین',
    'ده‌ها کسب‌وکار عضو شبکه',
    'کمپین‌های مشترک شهری',
    'تبلیغات محیطی',
    'تبلیغات دیجیتال',
    'همکاری با بلاگرهای شهر',
    'باشگاه مشتریان'
];
const collectionFields = [
    {
        name: 'businessName',
        label: 'نام مجموعه',
        required: true
    },
    {
        name: 'managerName',
        label: 'نام مدیر',
        required: true
    },
    {
        name: 'phone',
        label: 'شماره تماس',
        type: 'tel',
        required: true
    },
    {
        name: 'whatsapp',
        label: 'واتساپ',
        type: 'tel'
    },
    {
        name: 'address',
        label: 'آدرس',
        type: 'textarea',
        required: true
    },
    {
        name: 'googleLocation',
        label: 'لوکیشن گوگل'
    },
    {
        name: 'instagram',
        label: 'اینستاگرام'
    },
    {
        name: 'website',
        label: 'وب‌سایت'
    }
];
const businessFields = [
    {
        name: 'category',
        label: 'صنف',
        required: true
    },
    {
        name: 'area',
        label: 'متراژ'
    },
    {
        name: 'foundedYear',
        label: 'سال تأسیس'
    },
    {
        name: 'staffCount',
        label: 'تعداد پرسنل'
    },
    {
        name: 'branchCount',
        label: 'تعداد شعب'
    },
    {
        name: 'dailyVisits',
        label: 'میانگین مراجعه روزانه'
    },
    {
        name: 'cooperationProposal',
        label: 'پیشنهاد همکاری',
        type: 'textarea'
    },
    {
        name: 'suggestedGift',
        label: 'هدیه پیشنهادی برای مشتریان',
        required: true
    },
    {
        name: 'giftValue',
        label: 'ارزش تقریبی هدیه'
    },
    {
        name: 'suggestedDiscount',
        label: 'تخفیف پیشنهادی (در صورت تمایل)'
    },
    {
        name: 'giftDescription',
        label: 'توضیح هدیه',
        type: 'textarea'
    }
];
const marketingFields = [
    {
        name: 'hasSmsPanel',
        label: 'آیا پنل پیامکی دارید؟'
    },
    {
        name: 'hasCustomerClub',
        label: 'آیا باشگاه مشتریان دارید؟'
    },
    {
        name: 'hasWebsite',
        label: 'آیا سایت دارید؟'
    },
    {
        name: 'canAdvertise',
        label: 'آیا امکان همکاری تبلیغاتی دارید؟'
    }
];
const initialForm = [
    ...collectionFields,
    ...businessFields,
    ...marketingFields
].reduce((acc, field)=>{
    acc[field.name] = '';
    return acc;
}, {});
function Field({ field, value, onChange, isActive }) {
    if (field.type === 'textarea') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "faq-field faq-field-wide",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        field.label,
                        field.required ? ' *' : ''
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                    lineNumber: 104,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    name: field.name,
                    value: value,
                    onChange: onChange,
                    required: field.required && isActive,
                    rows: 3
                }, void 0, false, {
                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                    lineNumber: 105,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FaqMembershipPage.jsx",
            lineNumber: 103,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "faq-field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    field.label,
                    field.required ? ' *' : ''
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                lineNumber: 112,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: field.name,
                type: field.type || 'text',
                value: value,
                onChange: onChange,
                required: field.required && isActive
            }, void 0, false, {
                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FaqMembershipPage.jsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
_c = Field;
function ToggleField({ field, value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "faq-field",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: field.label
            }, void 0, false, {
                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                name: field.name,
                value: value,
                onChange: onChange,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        children: "انتخاب کنید"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "yes",
                        children: "بله"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "no",
                        children: "خیر"
                    }, void 0, false, {
                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/FaqMembershipPage.jsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
}
_c1 = ToggleField;
function FaqMembershipPage({ isDarkMode = false, onToggleTheme }) {
    _s();
    const [activeStep, setActiveStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(initialForm);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])({
        type: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const formTitle = activeStep === 0 ? 'اطلاعات مجموعه' : 'اطلاعات کسب‌وکار و مارکتینگ';
    const progressText = activeStep === 0 ? '۱ از ۲' : '۲ از ۲';
    const handleChange = (event)=>{
        const { name, value } = event.target;
        setForm((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const goNext = ()=>{
        setStatus({
            type: '',
            message: ''
        });
        setActiveStep(1);
    };
    const goBack = ()=>{
        setStatus({
            type: '',
            message: ''
        });
        setActiveStep(0);
    };
    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (activeStep === 0) {
            goNext();
            return;
        }
        try {
            setIsSubmitting(true);
            setStatus({
                type: '',
                message: ''
            });
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$api$2f$membership$2e$js__$5b$client$5d$__$28$ecmascript$29$__["submitMembershipRequest"])({
                collection: {
                    businessName: form.businessName,
                    managerName: form.managerName,
                    phone: form.phone,
                    whatsapp: form.whatsapp,
                    address: form.address,
                    googleLocation: form.googleLocation,
                    instagram: form.instagram,
                    website: form.website
                },
                business: {
                    category: form.category,
                    area: form.area,
                    foundedYear: form.foundedYear,
                    staffCount: form.staffCount,
                    branchCount: form.branchCount,
                    dailyVisits: form.dailyVisits,
                    cooperationProposal: form.cooperationProposal,
                    suggestedGift: form.suggestedGift,
                    giftValue: form.giftValue,
                    suggestedDiscount: form.suggestedDiscount,
                    giftDescription: form.giftDescription
                },
                marketing: {
                    hasSmsPanel: form.hasSmsPanel,
                    hasCustomerClub: form.hasCustomerClub,
                    hasWebsite: form.hasWebsite,
                    canAdvertise: form.canAdvertise
                }
            });
            setStatus({
                type: 'success',
                message: 'درخواست شما ثبت شد. تیم کی‌میای پس از بررسی با شما تماس می‌گیرد.'
            });
            setForm(initialForm);
            setActiveStep(0);
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.response?.data?.message || 'ارسال اطلاعات انجام نشد. لطفاً دوباره تلاش کنید.'
            });
        } finally{
            setIsSubmitting(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: `page-shell faq-shell ${isDarkMode ? "theme-dark" : ""}`,
        dir: "rtl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "frame faq-frame",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "topbar d-flex align-items-center justify-content-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex align-items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "brand d-flex align-items-center",
                                    href: "/",
                                    "aria-label": nav.home,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gift$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Gift$3e$__["Gift"], {
                                            className: "brand-icon"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: nav.brand
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 217,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "nav-list d-flex align-items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/",
                                                    children: nav.home
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                    lineNumber: 221,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/#gifts",
                                                    children: nav.gifts
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                    lineNumber: 222,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/#brands",
                                                    children: nav.businesses
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                    lineNumber: 223,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/faq",
                                                    className: "active-link",
                                                    children: nav.faq
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                    lineNumber: 224,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                lineNumber: 224,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/#footer",
                                                    children: nav.contact
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                    lineNumber: 225,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                lineNumber: 225,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "home-header-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `home-theme-toggle ${isDarkMode ? 'is-dark' : ''}`,
                                    type: "button",
                                    onClick: onToggleTheme,
                                    "aria-label": isDarkMode ? 'Light mode' : 'Dark mode',
                                    title: isDarkMode ? 'Light mode' : 'Dark mode',
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "home-theme-toggle-icon home-theme-toggle-sun",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {}, void 0, false, {
                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                lineNumber: 237,
                                                columnNumber: 78
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "home-theme-toggle-thumb"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 238,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "home-theme-toggle-icon home-theme-toggle-moon",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {}, void 0, false, {
                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                lineNumber: 239,
                                                columnNumber: 79
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 239,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: "login-btn faq-header-action",
                                    href: "#membership-form",
                                    children: '\u0628\u0631\u0631\u0633\u06cc \u0631\u0627\u06cc\u06af\u0627\u0646 \u0634\u0631\u0627\u06cc\u0637 \u0639\u0636\u0648\u06cc\u062a'
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "faq-hero",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-hero-copy",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "faq-eyebrow",
                                    children: "سایت دیدار"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    children: "بررسی رایگان شرایط عضویت"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "کاربران ابتدا با روند دریافت هدیه و شرایط همکاری آشنا می‌شوند، سپس اطلاعات مجموعه و کسب‌وکار خود را برای بررسی اولیه ارسال می‌کنند."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "faq-primary-link",
                                    href: "#membership-form",
                                    children: "شروع ثبت درخواست"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 246,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-hero-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$question$2d$mark$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HelpCircle$3e$__["HelpCircle"], {}, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: "سوالات متداول"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 254,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "پاسخ‌های کوتاه، فرم مرحله‌ای و ارسال اطلاعات به بک‌اند"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 255,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 252,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                    lineNumber: 245,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "faq-section faq-flow-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-section-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "برای مشتریان"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 261,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "کی‌میای چطور کار می‌کند؟"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 262,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-customer-flow",
                            children: customerSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "faq-step-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "faq-step-number",
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 267,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: step.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 268,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: step.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 269,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, step.title, true, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 266,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "faq-section faq-two-column",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-section-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "برای کسب‌وکارها"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: "مسیر عضویت مجموعه‌ها"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 279,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 277,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                    className: "faq-business-flow",
                                    children: businessSteps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: step
                                        }, step, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 282,
                                            columnNumber: 44
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 276,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "faq-trust-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-trust-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$handshake$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Handshake$3e$__["Handshake"], {}, void 0, false, {
                                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                        lineNumber: 287,
                                        columnNumber: 45
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "چرا کسب‌وکارها به کی‌میای اعتماد می‌کنند؟"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    children: trustItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                    lineNumber: 290,
                                                    columnNumber: 56
                                                }, this),
                                                item
                                            ]
                                        }, item, true, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 290,
                                            columnNumber: 41
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                    lineNumber: 275,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "faq-section",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-section-head",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "پرسش‌ها"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 297,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    children: "سوالات متداول"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 298,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 296,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-list",
                            children: faqs.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                    className: "faq-item",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                            children: item.question
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 303,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: item.answer
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 304,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, item.question, true, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "faq-section faq-form-section",
                    id: "membership-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "faq-form-intro",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "فرم درخواست عضویت"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            children: formTitle
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 314,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "اطلاعات را مرحله‌به‌مرحله وارد کنید. پس از تکمیل مرحله دوم، درخواست برای بررسی به بک‌اند ارسال می‌شود."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-form-progress",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: progressText
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 318,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                style: {
                                                    width: activeStep === 0 ? '50%' : '100%'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                lineNumber: 319,
                                                columnNumber: 20
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 317,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "faq-slider-form",
                            onSubmit: handleSubmit,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-form-window",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "faq-form-track",
                                        style: {
                                            transform: activeStep === 0 ? 'translateX(0)' : 'translateX(-50%)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "faq-form-slide",
                                                "aria-label": "اطلاعات مجموعه",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "faq-form-title",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                                lineNumber: 327,
                                                                columnNumber: 51
                                                            }, this),
                                                            "اطلاعات مجموعه"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "faq-form-grid",
                                                        children: collectionFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                                field: field,
                                                                value: form[field.name],
                                                                onChange: handleChange,
                                                                isActive: activeStep === 0
                                                            }, field.name, false, {
                                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                                lineNumber: 329,
                                                                columnNumber: 54
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                        lineNumber: 328,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: "faq-form-slide",
                                                "aria-label": "اطلاعات کسب‌وکار و مارکتینگ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "faq-form-title",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                                lineNumber: 334,
                                                                columnNumber: 51
                                                            }, this),
                                                            "اطلاعات کسب‌وکار"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                        lineNumber: 334,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "faq-form-grid",
                                                        children: businessFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Field, {
                                                                field: field,
                                                                value: form[field.name],
                                                                onChange: handleChange,
                                                                isActive: activeStep === 1
                                                            }, field.name, false, {
                                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                                lineNumber: 336,
                                                                columnNumber: 52
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                        lineNumber: 335,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "faq-form-title faq-form-title-spaced",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {}, void 0, false, {
                                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                                lineNumber: 339,
                                                                columnNumber: 73
                                                            }, this),
                                                            "اطلاعات مارکتینگ"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                        lineNumber: 339,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "faq-form-grid faq-marketing-grid",
                                                        children: marketingFields.map((field)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToggleField, {
                                                                field: field,
                                                                value: form[field.name],
                                                                onChange: handleChange
                                                            }, field.name, false, {
                                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                                lineNumber: 341,
                                                                columnNumber: 53
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                        lineNumber: 340,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                lineNumber: 333,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                        lineNumber: 325,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 324,
                                    columnNumber: 13
                                }, this),
                                status.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: 'faq-status faq-status-' + status.type,
                                    children: status.message
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 347,
                                    columnNumber: 32
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "faq-form-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "faq-secondary-btn",
                                            type: "button",
                                            onClick: goBack,
                                            disabled: activeStep === 0 || isSubmitting,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                    lineNumber: 351,
                                                    columnNumber: 17
                                                }, this),
                                                " مرحله قبل"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 350,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "faq-submit-btn",
                                            type: "submit",
                                            disabled: isSubmitting,
                                            children: [
                                                activeStep === 0 ? 'مرحله بعد' : isSubmitting ? 'در حال ارسال...' : 'ارسال اطلاعات',
                                                activeStep === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                    lineNumber: 355,
                                                    columnNumber: 37
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$mjs__$5b$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {}, void 0, false, {
                                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                                    lineNumber: 355,
                                                    columnNumber: 53
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                            lineNumber: 353,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                                    lineNumber: 349,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FaqMembershipPage.jsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FaqMembershipPage.jsx",
                    lineNumber: 310,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FaqMembershipPage.jsx",
            lineNumber: 212,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/FaqMembershipPage.jsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s(FaqMembershipPage, "HoA9AOD4xqY/lE2bi9oNijgyiCY=");
_c2 = FaqMembershipPage;
const __TURBOPACK__default__export__ = FaqMembershipPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Field");
__turbopack_context__.k.register(_c1, "ToggleField");
__turbopack_context__.k.register(_c2, "FaqMembershipPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/pages/faq.jsx [client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Faq
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/head.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FaqMembershipPage$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FaqMembershipPage.jsx [client] (ecmascript)");
;
;
;
function Faq({ isDarkMode, onToggleTheme }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$head$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                        children: 'سوالات متداول و درخواست عضویت | کی میای'
                    }, void 0, false, {
                        fileName: "[project]/pages/faq.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: "سوالات متداول کی میای و فرم بررسی رایگان شرایط عضویت کسب و کارها"
                    }, void 0, false, {
                        fileName: "[project]/pages/faq.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/pages/faq.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FaqMembershipPage$2e$jsx__$5b$client$5d$__$28$ecmascript$29$__["default"], {
                isDarkMode: isDarkMode,
                onToggleTheme: onToggleTheme
            }, void 0, false, {
                fileName: "[project]/pages/faq.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Faq;
var _c;
__turbopack_context__.k.register(_c, "Faq");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/pages/faq.jsx [client] (ecmascript)\" } [client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const PAGE_PATH = "/faq";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/pages/faq.jsx [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if ("TURBOPACK compile-time truthy", 1) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}),
"[hmr-entry]/hmr-entry.js { ENTRY => \"[project]/pages/faq\" }", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/pages/faq.jsx [client] (ecmascript)\" } [client] (ecmascript)");
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__1vc1enk._.js.map