function v(){}function q(e){return e()}function C(){return Object.create(null)}function y(e){e.forEach(q)}function L(e){return typeof e=="function"}function re(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let g;function le(e,t){return e===t?!0:(g||(g=document.createElement("a")),g.href=t,e===g.href)}function T(e){return Object.keys(e).length===0}let b=!1;function H(){b=!0}function P(){b=!1}function z(e,t,n,i){for(;e<t;){const f=e+(t-e>>1);n(f)<=i?e=f+1:t=f}return e}function D(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const r=[];for(let l=0;l<t.length;l++){const o=t[l];o.claim_order!==void 0&&r.push(o)}t=r}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let f=0;for(let r=0;r<t.length;r++){const l=t[r].claim_order,o=(f>0&&t[n[f]].claim_order<=l?f+1:z(1,f,$=>t[n[$]].claim_order,l))-1;i[r]=n[o]+1;const s=o+1;n[s]=r,f=Math.max(s,f)}const a=[],c=[];let u=t.length-1;for(let r=n[f]+1;r!=0;r=i[r-1]){for(a.push(t[r-1]);u>=r;u--)c.push(t[u]);u--}for(;u>=0;u--)c.push(t[u]);a.reverse(),c.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<c.length;r++){for(;l<a.length&&c[r].claim_order>=a[l].claim_order;)l++;const o=l<a.length?a[l]:null;e.insertBefore(c[r],o)}}function R(e,t){if(b){for(D(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ce(e,t,n){b&&!n?R(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function V(e){e.parentNode&&e.parentNode.removeChild(e)}function fe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function W(e){return document.createElement(e)}function k(e){return document.createTextNode(e)}function ue(){return k(" ")}function ae(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function se(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function oe(e){return e.dataset.svelteH}function F(e){return Array.from(e.childNodes)}function G(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function I(e,t,n,i,f=!1){G(e);const a=(()=>{for(let c=e.claim_info.last_index;c<e.length;c++){const u=e[c];if(t(u)){const r=n(u);return r===void 0?e.splice(c,1):e[c]=r,f||(e.claim_info.last_index=c),u}}for(let c=e.claim_info.last_index-1;c>=0;c--){const u=e[c];if(t(u)){const r=n(u);return r===void 0?e.splice(c,1):e[c]=r,f?r===void 0&&e.claim_info.last_index--:e.claim_info.last_index=c,u}}return i()})();return a.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,a}function J(e,t,n,i){return I(e,f=>f.nodeName===t,f=>{const a=[];for(let c=0;c<f.attributes.length;c++){const u=f.attributes[c];n[u.name]||a.push(u.name)}a.forEach(c=>f.removeAttribute(c))},()=>i(t))}function de(e,t,n){return J(e,t,n,W)}function K(e,t){return I(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>k(t),!0)}function _e(e){return K(e," ")}function he(e,t){t=""+t,e.data!==t&&(e.data=t)}let S;function p(e){S=e}const h=[],B=[];let m=[];const O=[],Q=Promise.resolve();let E=!1;function U(){E||(E=!0,Q.then(M))}function N(e){m.push(e)}const w=new Set;let _=0;function M(){if(_!==0)return;const e=S;do{try{for(;_<h.length;){const t=h[_];_++,p(t),X(t.$$)}}catch(t){throw h.length=0,_=0,t}for(p(null),h.length=0,_=0;B.length;)B.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];w.has(n)||(w.add(n),n())}m.length=0}while(h.length);for(;O.length;)O.pop()();E=!1,w.clear(),p(e)}function X(e){if(e.fragment!==null){e.update(),y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}function Y(e){const t=[],n=[];m.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),m=t}const x=new Set;let d;function me(){d={r:0,c:[],p:d}}function pe(){d.r||y(d.c),d=d.p}function Z(e,t){e&&e.i&&(x.delete(e),e.i(t))}function ye(e,t,n,i){if(e&&e.o){if(x.has(e))return;x.add(e),d.c.push(()=>{x.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function $e(e){return e?.length!==void 0?e:Array.from(e)}function ge(e){e&&e.c()}function xe(e,t){e&&e.l(t)}function ee(e,t,n){const{fragment:i,after_update:f}=e.$$;i&&i.m(t,n),N(()=>{const a=e.$$.on_mount.map(q).filter(L);e.$$.on_destroy?e.$$.on_destroy.push(...a):y(a),e.$$.on_mount=[]}),f.forEach(N)}function te(e,t){const n=e.$$;n.fragment!==null&&(Y(n.after_update),y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ne(e,t){e.$$.dirty[0]===-1&&(h.push(e),U(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function be(e,t,n,i,f,a,c,u=[-1]){const r=S;p(e);const l=e.$$={fragment:null,ctx:[],props:a,update:v,not_equal:f,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(r?r.$$.context:[])),callbacks:C(),dirty:u,skip_bound:!1,root:t.target||r.$$.root};c&&c(l.root);let o=!1;if(l.ctx=n?n(e,t.props||{},(s,$,...A)=>{const j=A.length?A[0]:$;return l.ctx&&f(l.ctx[s],l.ctx[s]=j)&&(!l.skip_bound&&l.bound[s]&&l.bound[s](j),o&&ne(e,s)),$}):[],l.update(),o=!0,y(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){H();const s=F(t.target);l.fragment&&l.fragment.l(s),s.forEach(V)}else l.fragment&&l.fragment.c();t.intro&&Z(e.$$.fragment),ee(e,t.target,t.anchor),P(),M()}p(r)}class we{$$=void 0;$$set=void 0;$destroy(){te(this,1),this.$destroy=v}$on(t,n){if(!L(n))return v;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const f=i.indexOf(n);f!==-1&&i.splice(f,1)}}$set(t){this.$$set&&!T(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ie="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ie);export{me as A,oe as B,we as S,F as a,K as b,de as c,V as d,W as e,se as f,ce as g,R as h,be as i,he as j,$e as k,ae as l,ue as m,v as n,_e as o,Z as p,pe as q,ye as r,re as s,k as t,fe as u,ge as v,xe as w,ee as x,te as y,le as z};
