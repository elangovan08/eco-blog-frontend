import{d as t,r as c,j as e,m,a as r}from"./index-CmK9Cohw.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t("Bookmark",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),n=["https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80","https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=900&q=80"];function g({post:a,index:i=0}){var l;const s=typeof a.id=="number"?`/posts/${a.id}`:"/posts",o=Math.max(2,Math.ceil((a.content||"").split(/\s+/).length/180));return e.jsxs(m.article,{whileHover:{y:-8,scale:1.01},transition:{type:"spring",stiffness:260,damping:22},className:"group overflow-hidden rounded-[2rem] border border-white/20 bg-[var(--card)] shadow-2xl shadow-emerald-950/10 backdrop-blur-2xl",children:[e.jsxs("div",{className:"relative overflow-hidden",children:[e.jsx("img",{src:n[i%n.length],alt:a.title,loading:"lazy",className:"h-56 w-full object-cover transition duration-700 group-hover:scale-105"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-emerald-950/45 to-transparent"}),e.jsxs("div",{className:"absolute bottom-4 left-4 flex gap-2",children:[e.jsx("span",{className:"rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-emerald-800 backdrop-blur",children:"Climate"}),e.jsxs("span",{className:"flex items-center gap-1 rounded-full bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur",children:[e.jsx(h,{className:"h-3 w-3"}),o," min"]})]})]}),e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-2xl font-black leading-tight text-[var(--heading)]",children:e.jsx(r,{to:s,className:"transition hover:text-green-600",children:a.title})}),e.jsx("p",{className:"mt-3 line-clamp-3 text-[var(--muted)]",children:a.content}),e.jsxs("div",{className:"mt-5 flex items-center justify-between gap-4",children:[e.jsxs("span",{className:"text-sm text-[var(--muted)]",children:["By ",((l=a.author)==null?void 0:l.username)||"EcoBlog"]}),e.jsxs("div",{className:"flex items-center gap-3 text-sm text-[var(--muted)]",children:[e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx(p,{className:"h-4 w-4"}),a.likeCount||0]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx(d,{className:"h-4 w-4"}),a.bookmarkCount||0]})]})]}),e.jsx("div",{className:"mt-5",children:e.jsxs(r,{to:s,className:"inline-flex items-center gap-2 font-bold text-[var(--brand)] transition hover:gap-3",children:["Read article",e.jsx(x,{className:"h-4 w-4"})]})})]})]})}const f=c.memo(g);export{p as H,f as P};
