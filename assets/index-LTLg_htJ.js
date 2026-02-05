(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function pS(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var mh={exports:{}},Vo={};var tv;function mS(){if(tv)return Vo;tv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,o,c){var f=null;if(c!==void 0&&(f=""+c),o.key!==void 0&&(f=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:r,type:s,key:f,ref:o!==void 0?o:null,props:c}}return Vo.Fragment=t,Vo.jsx=n,Vo.jsxs=n,Vo}var ev;function gS(){return ev||(ev=1,mh.exports=mS()),mh.exports}var pt=gS(),gh={exports:{}},pe={};var nv;function vS(){if(nv)return pe;nv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),_=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function x(L,tt,mt){this.props=L,this.context=tt,this.refs=M,this.updater=mt||E}x.prototype.isReactComponent={},x.prototype.setState=function(L,tt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,tt,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=x.prototype;function U(L,tt,mt){this.props=L,this.context=tt,this.refs=M,this.updater=mt||E}var D=U.prototype=new P;D.constructor=U,C(D,x.prototype),D.isPureReactComponent=!0;var I=Array.isArray;function B(){}var F={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function T(L,tt,mt){var wt=mt.ref;return{$$typeof:r,type:L,key:tt,ref:wt!==void 0?wt:null,props:mt}}function R(L,tt){return T(L.type,tt,L.props)}function H(L){return typeof L=="object"&&L!==null&&L.$$typeof===r}function Q(L){var tt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(mt){return tt[mt]})}var J=/\/+/g;function ct(L,tt){return typeof L=="object"&&L!==null&&L.key!=null?Q(""+L.key):tt.toString(36)}function rt(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(B,B):(L.status="pending",L.then(function(tt){L.status==="pending"&&(L.status="fulfilled",L.value=tt)},function(tt){L.status==="pending"&&(L.status="rejected",L.reason=tt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,tt,mt,wt,Ht){var it=typeof L;(it==="undefined"||it==="boolean")&&(L=null);var ht=!1;if(L===null)ht=!0;else switch(it){case"bigint":case"string":case"number":ht=!0;break;case"object":switch(L.$$typeof){case r:case t:ht=!0;break;case v:return ht=L._init,z(ht(L._payload),tt,mt,wt,Ht)}}if(ht)return Ht=Ht(L),ht=wt===""?"."+ct(L,0):wt,I(Ht)?(mt="",ht!=null&&(mt=ht.replace(J,"$&/")+"/"),z(Ht,tt,mt,"",function(kt){return kt})):Ht!=null&&(H(Ht)&&(Ht=R(Ht,mt+(Ht.key==null||L&&L.key===Ht.key?"":(""+Ht.key).replace(J,"$&/")+"/")+ht)),tt.push(Ht)),1;ht=0;var Dt=wt===""?".":wt+":";if(I(L))for(var Gt=0;Gt<L.length;Gt++)wt=L[Gt],it=Dt+ct(wt,Gt),ht+=z(wt,tt,mt,it,Ht);else if(Gt=S(L),typeof Gt=="function")for(L=Gt.call(L),Gt=0;!(wt=L.next()).done;)wt=wt.value,it=Dt+ct(wt,Gt++),ht+=z(wt,tt,mt,it,Ht);else if(it==="object"){if(typeof L.then=="function")return z(rt(L),tt,mt,wt,Ht);throw tt=String(L),Error("Objects are not valid as a React child (found: "+(tt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":tt)+"). If you meant to render a collection of children, use an array instead.")}return ht}function V(L,tt,mt){if(L==null)return L;var wt=[],Ht=0;return z(L,wt,"","",function(it){return tt.call(mt,it,Ht++)}),wt}function nt(L){if(L._status===-1){var tt=L._result;tt=tt(),tt.then(function(mt){(L._status===0||L._status===-1)&&(L._status=1,L._result=mt)},function(mt){(L._status===0||L._status===-1)&&(L._status=2,L._result=mt)}),L._status===-1&&(L._status=0,L._result=tt)}if(L._status===1)return L._result.default;throw L._result}var bt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var tt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(tt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Mt={map:V,forEach:function(L,tt,mt){V(L,function(){tt.apply(this,arguments)},mt)},count:function(L){var tt=0;return V(L,function(){tt++}),tt},toArray:function(L){return V(L,function(tt){return tt})||[]},only:function(L){if(!H(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return pe.Activity=g,pe.Children=Mt,pe.Component=x,pe.Fragment=n,pe.Profiler=o,pe.PureComponent=U,pe.StrictMode=s,pe.Suspense=m,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,pe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},pe.cache=function(L){return function(){return L.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(L,tt,mt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var wt=C({},L.props),Ht=L.key;if(tt!=null)for(it in tt.key!==void 0&&(Ht=""+tt.key),tt)!q.call(tt,it)||it==="key"||it==="__self"||it==="__source"||it==="ref"&&tt.ref===void 0||(wt[it]=tt[it]);var it=arguments.length-2;if(it===1)wt.children=mt;else if(1<it){for(var ht=Array(it),Dt=0;Dt<it;Dt++)ht[Dt]=arguments[Dt+2];wt.children=ht}return T(L.type,Ht,wt)},pe.createContext=function(L){return L={$$typeof:f,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},pe.createElement=function(L,tt,mt){var wt,Ht={},it=null;if(tt!=null)for(wt in tt.key!==void 0&&(it=""+tt.key),tt)q.call(tt,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(Ht[wt]=tt[wt]);var ht=arguments.length-2;if(ht===1)Ht.children=mt;else if(1<ht){for(var Dt=Array(ht),Gt=0;Gt<ht;Gt++)Dt[Gt]=arguments[Gt+2];Ht.children=Dt}if(L&&L.defaultProps)for(wt in ht=L.defaultProps,ht)Ht[wt]===void 0&&(Ht[wt]=ht[wt]);return T(L,it,Ht)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(L){return{$$typeof:h,render:L}},pe.isValidElement=H,pe.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:nt}},pe.memo=function(L,tt){return{$$typeof:p,type:L,compare:tt===void 0?null:tt}},pe.startTransition=function(L){var tt=F.T,mt={};F.T=mt;try{var wt=L(),Ht=F.S;Ht!==null&&Ht(mt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(B,bt)}catch(it){bt(it)}finally{tt!==null&&mt.types!==null&&(tt.types=mt.types),F.T=tt}},pe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},pe.use=function(L){return F.H.use(L)},pe.useActionState=function(L,tt,mt){return F.H.useActionState(L,tt,mt)},pe.useCallback=function(L,tt){return F.H.useCallback(L,tt)},pe.useContext=function(L){return F.H.useContext(L)},pe.useDebugValue=function(){},pe.useDeferredValue=function(L,tt){return F.H.useDeferredValue(L,tt)},pe.useEffect=function(L,tt){return F.H.useEffect(L,tt)},pe.useEffectEvent=function(L){return F.H.useEffectEvent(L)},pe.useId=function(){return F.H.useId()},pe.useImperativeHandle=function(L,tt,mt){return F.H.useImperativeHandle(L,tt,mt)},pe.useInsertionEffect=function(L,tt){return F.H.useInsertionEffect(L,tt)},pe.useLayoutEffect=function(L,tt){return F.H.useLayoutEffect(L,tt)},pe.useMemo=function(L,tt){return F.H.useMemo(L,tt)},pe.useOptimistic=function(L,tt){return F.H.useOptimistic(L,tt)},pe.useReducer=function(L,tt,mt){return F.H.useReducer(L,tt,mt)},pe.useRef=function(L){return F.H.useRef(L)},pe.useState=function(L){return F.H.useState(L)},pe.useSyncExternalStore=function(L,tt,mt){return F.H.useSyncExternalStore(L,tt,mt)},pe.useTransition=function(){return F.H.useTransition()},pe.version="19.2.4",pe}var iv;function np(){return iv||(iv=1,gh.exports=vS()),gh.exports}var mn=np();const ss=pS(mn);var vh={exports:{}},ko={},_h={exports:{}},xh={};var av;function _S(){return av||(av=1,(function(r){function t(z,V){var nt=z.length;z.push(V);t:for(;0<nt;){var bt=nt-1>>>1,Mt=z[bt];if(0<o(Mt,V))z[bt]=V,z[nt]=Mt,nt=bt;else break t}}function n(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var V=z[0],nt=z.pop();if(nt!==V){z[0]=nt;t:for(var bt=0,Mt=z.length,L=Mt>>>1;bt<L;){var tt=2*(bt+1)-1,mt=z[tt],wt=tt+1,Ht=z[wt];if(0>o(mt,nt))wt<Mt&&0>o(Ht,mt)?(z[bt]=Ht,z[wt]=nt,bt=wt):(z[bt]=mt,z[tt]=nt,bt=tt);else if(wt<Mt&&0>o(Ht,nt))z[bt]=Ht,z[wt]=nt,bt=wt;else break t}}return V}function o(z,V){var nt=z.sortIndex-V.sortIndex;return nt!==0?nt:z.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();r.unstable_now=function(){return f.now()-h}}var m=[],p=[],v=1,g=null,_=3,S=!1,E=!1,C=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function D(z){for(var V=n(p);V!==null;){if(V.callback===null)s(p);else if(V.startTime<=z)s(p),V.sortIndex=V.expirationTime,t(m,V);else break;V=n(p)}}function I(z){if(C=!1,D(z),!E)if(n(m)!==null)E=!0,B||(B=!0,Q());else{var V=n(p);V!==null&&rt(I,V.startTime-z)}}var B=!1,F=-1,q=5,T=-1;function R(){return M?!0:!(r.unstable_now()-T<q)}function H(){if(M=!1,B){var z=r.unstable_now();T=z;var V=!0;try{t:{E=!1,C&&(C=!1,P(F),F=-1),S=!0;var nt=_;try{e:{for(D(z),g=n(m);g!==null&&!(g.expirationTime>z&&R());){var bt=g.callback;if(typeof bt=="function"){g.callback=null,_=g.priorityLevel;var Mt=bt(g.expirationTime<=z);if(z=r.unstable_now(),typeof Mt=="function"){g.callback=Mt,D(z),V=!0;break e}g===n(m)&&s(m),D(z)}else s(m);g=n(m)}if(g!==null)V=!0;else{var L=n(p);L!==null&&rt(I,L.startTime-z),V=!1}}break t}finally{g=null,_=nt,S=!1}V=void 0}}finally{V?Q():B=!1}}}var Q;if(typeof U=="function")Q=function(){U(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,ct=J.port2;J.port1.onmessage=H,Q=function(){ct.postMessage(null)}}else Q=function(){x(H,0)};function rt(z,V){F=x(function(){z(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(z){switch(_){case 1:case 2:case 3:var V=3;break;default:V=_}var nt=_;_=V;try{return z()}finally{_=nt}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var nt=_;_=z;try{return V()}finally{_=nt}},r.unstable_scheduleCallback=function(z,V,nt){var bt=r.unstable_now();switch(typeof nt=="object"&&nt!==null?(nt=nt.delay,nt=typeof nt=="number"&&0<nt?bt+nt:bt):nt=bt,z){case 1:var Mt=-1;break;case 2:Mt=250;break;case 5:Mt=1073741823;break;case 4:Mt=1e4;break;default:Mt=5e3}return Mt=nt+Mt,z={id:v++,callback:V,priorityLevel:z,startTime:nt,expirationTime:Mt,sortIndex:-1},nt>bt?(z.sortIndex=nt,t(p,z),n(m)===null&&z===n(p)&&(C?(P(F),F=-1):C=!0,rt(I,nt-bt))):(z.sortIndex=Mt,t(m,z),E||S||(E=!0,B||(B=!0,Q()))),z},r.unstable_shouldYield=R,r.unstable_wrapCallback=function(z){var V=_;return function(){var nt=_;_=V;try{return z.apply(this,arguments)}finally{_=nt}}}})(xh)),xh}var sv;function xS(){return sv||(sv=1,_h.exports=_S()),_h.exports}var yh={exports:{}},Pn={};var rv;function yS(){if(rv)return Pn;rv=1;var r=np();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,v)},Pn.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},Pn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Pn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Pn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:_,fetchPriority:S}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:_,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Pn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Pn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Pn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Pn.requestFormReset=function(m){s.d.r(m)},Pn.unstable_batchedUpdates=function(m,p){return m(p)},Pn.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Pn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Pn.version="19.2.4",Pn}var ov;function SS(){if(ov)return yh.exports;ov=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),yh.exports=yS(),yh.exports}var lv;function MS(){if(lv)return ko;lv=1;var r=xS(),t=np(),n=SS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function h(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=c(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,l=i;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),e;if(d===l)return m(u),i;d=d.sibling}throw Error(s(188))}if(a.return!==l.return)a=u,l=d;else{for(var y=!1,A=u.child;A;){if(A===a){y=!0,a=u,l=d;break}if(A===l){y=!0,l=u,a=d;break}A=A.sibling}if(!y){for(A=d.child;A;){if(A===a){y=!0,a=d,l=u;break}if(A===l){y=!0,l=d,a=u;break}A=A.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==l)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function v(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=v(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,_=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function Q(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var J=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===J?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case x:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case B:return"SuspenseList";case T:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case D:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return i=e.displayName||null,i!==null?i:ct(e.type)||"Memo";case q:i=e._payload,e=e._init;try{return ct(e(i))}catch{}}return null}var rt=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,nt={pending:!1,data:null,method:null,action:null},bt=[],Mt=-1;function L(e){return{current:e}}function tt(e){0>Mt||(e.current=bt[Mt],bt[Mt]=null,Mt--)}function mt(e,i){Mt++,bt[Mt]=e.current,e.current=i}var wt=L(null),Ht=L(null),it=L(null),ht=L(null);function Dt(e,i){switch(mt(it,i),mt(Ht,e),mt(wt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?bg(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=bg(i),e=Eg(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(wt),mt(wt,e)}function Gt(){tt(wt),tt(Ht),tt(it)}function kt(e){e.memoizedState!==null&&mt(ht,e);var i=wt.current,a=Eg(i,e.type);i!==a&&(mt(Ht,e),mt(wt,a))}function ge(e){Ht.current===e&&(tt(wt),tt(Ht)),ht.current===e&&(tt(ht),Io._currentValue=nt)}var Ee,ue;function vt(e){if(Ee===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Ee=i&&i[1]||"",ue=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ee+e+ue}var Et=!1;function yt(e,i){if(!e||Et)return"";Et=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(lt){var st=lt}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(lt){st=lt}e.call(_t.prototype)}}else{try{throw Error()}catch(lt){st=lt}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(lt){if(lt&&st&&typeof lt.stack=="string")return[lt.stack,st.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],A=d[1];if(y&&A){var G=y.split(`
`),et=A.split(`
`);for(u=l=0;l<G.length&&!G[l].includes("DetermineComponentFrameRoot");)l++;for(;u<et.length&&!et[u].includes("DetermineComponentFrameRoot");)u++;if(l===G.length||u===et.length)for(l=G.length-1,u=et.length-1;1<=l&&0<=u&&G[l]!==et[u];)u--;for(;1<=l&&0<=u;l--,u--)if(G[l]!==et[u]){if(l!==1||u!==1)do if(l--,u--,0>u||G[l]!==et[u]){var dt=`
`+G[l].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=l&&0<=u);break}}}finally{Et=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?vt(a):""}function Pt(e,i){switch(e.tag){case 26:case 27:case 5:return vt(e.type);case 16:return vt("Lazy");case 13:return e.child!==i&&i!==null?vt("Suspense Fallback"):vt("Suspense");case 19:return vt("SuspenseList");case 0:case 15:return yt(e.type,!1);case 11:return yt(e.type.render,!1);case 1:return yt(e.type,!0);case 31:return vt("Activity");default:return""}}function O(e){try{var i="",a=null;do i+=Pt(e,a),a=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ne=Object.prototype.hasOwnProperty,Ft=r.unstable_scheduleCallback,ae=r.unstable_cancelCallback,Ut=r.unstable_shouldYield,N=r.unstable_requestPaint,b=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,ut=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,Jt=r.unstable_LowPriority,Lt=r.unstable_IdlePriority,Kt=r.log,oe=r.unstable_setDisableYieldValue,Tt=null,Ct=null;function Yt(e){if(typeof Kt=="function"&&oe(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Tt,e)}catch{}}var Xt=Math.clz32?Math.clz32:X,Ot=Math.log,ve=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ot(e)/ve|0)|0}var It=256,Rt=262144,Wt=4194304;function At(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var u=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~d,l!==0?u=At(l):(y&=A,y!==0?u=At(y):a||(a=A&~e,a!==0&&(u=At(a))))):(A=l&~d,A!==0?u=At(A):y!==0?u=At(y):a||(a=l&~e,a!==0&&(u=At(a)))),u===0?0:i!==0&&i!==u&&(i&d)===0&&(d=u&-u,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:u}function Nt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function fe(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ie(){var e=Wt;return Wt<<=1,(Wt&62914560)===0&&(Wt=4194304),e}function Re(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function On(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Si(e,i,a,l,u,d){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,et=e.hiddenUpdates;for(a=y&~a;0<a;){var dt=31-Xt(a),_t=1<<dt;A[dt]=0,G[dt]=-1;var st=et[dt];if(st!==null)for(et[dt]=null,dt=0;dt<st.length;dt++){var lt=st[dt];lt!==null&&(lt.lane&=-536870913)}a&=~_t}l!==0&&ml(e,l,0),d!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~i))}function ml(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Xt(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Zr(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-Xt(a),u=1<<l;u&i|e[l]&i&&(e[l]|=i),a&=~u}}function Hs(e,i){var a=i&-i;return a=(a&42)!==0?1:Qr(a),(a&(e.suspendedLanes|i))!==0?0:a}function Qr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Gs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kr(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Yg(e.type))}function Li(e,i){var a=V.p;try{return V.p=e,i()}finally{V.p=a}}var ci=Math.random().toString(36).slice(2),on="__reactFiber$"+ci,Sn="__reactProps$"+ci,Mi="__reactContainer$"+ci,Vs="__reactEvents$"+ci,ks="__reactListeners$"+ci,gl="__reactHandles$"+ci,Jr="__reactResources$"+ci,ls="__reactMarker$"+ci;function $r(e){delete e[on],delete e[Sn],delete e[Vs],delete e[ks],delete e[gl]}function Ta(e){var i=e[on];if(i)return i;for(var a=e.parentNode;a;){if(i=a[Mi]||a[on]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=Ug(e);e!==null;){if(a=e[on])return a;e=Ug(e)}return i}e=a,a=e.parentNode}return null}function Aa(e){if(e=e[on]||e[Mi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function cs(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function wa(e){var i=e[Jr];return i||(i=e[Jr]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function w(e){e[ls]=!0}var Y=new Set,ot={};function at(e,i){K(e,i),K(e+"Capture",i)}function K(e,i){for(ot[e]=i,e=0;e<i.length;e++)Y.add(i[e])}var zt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),jt={},Bt={};function Zt(e){return ne.call(Bt,e)?!0:ne.call(jt,e)?!1:zt.test(e)?Bt[e]=!0:(jt[e]=!0,!1)}function $t(e,i,a){if(Zt(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function re(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function te(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}function le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Oe(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(e,i,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ye(e){if(!e._valueTracker){var i=Oe(e)?"checked":"value";e._valueTracker=Qe(e,i,""+e[i])}}function Fe(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=Oe(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function ie(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Pe=/[\n"\\]/g;function he(e){return e.replace(Pe,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Mn(e,i,a,l,u,d,y,A){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),i!=null?y==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+le(i)):e.value!==""+le(i)&&(e.value=""+le(i)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),i!=null?bn(e,y,le(i)):a!=null?bn(e,y,le(a)):l!=null&&e.removeAttribute("value"),u==null&&d!=null&&(e.defaultChecked=!!d),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+le(A):e.removeAttribute("name")}function ji(e,i,a,l,u,d,y,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ye(e);return}a=a!=null?""+le(a):"",i=i!=null?""+le(i):a,A||i===e.value||(e.value=i),e.defaultValue=i}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Ye(e)}function bn(e,i,a){i==="number"&&ie(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ui(e,i,a,l){if(e=e.options,i){i={};for(var u=0;u<a.length;u++)i["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=i.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&l&&(e[a].defaultSelected=!0)}else{for(a=""+le(a),i=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}i!==null||e[u].disabled||(i=e[u])}i!==null&&(i.selected=!0)}}function Be(e,i,a){if(i!=null&&(i=""+le(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+le(a):""}function En(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(s(92));if(rt(l)){if(1<l.length)throw Error(s(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=le(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Ye(e)}function dn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||Tn.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Xs(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in i)l=i[u],i.hasOwnProperty(u)&&a[u]!==l&&An(e,u,l)}else for(var d in i)i.hasOwnProperty(d)&&An(e,d,i[d])}function bi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ux=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vl(e){return fx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var fu=null;function hu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ws=null,qs=null;function Mp(e){var i=Aa(e);if(i&&(e=i.stateNode)){var a=e[Sn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Mn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+he(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var u=l[Sn]||null;if(!u)throw Error(s(90));Mn(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&Fe(l)}break t;case"textarea":Be(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&ui(e,!!a.multiple,i,!1)}}}var du=!1;function bp(e,i,a){if(du)return e(i,a);du=!0;try{var l=e(i);return l}finally{if(du=!1,(Ws!==null||qs!==null)&&(ac(),Ws&&(i=Ws,e=qs,qs=Ws=null,Mp(i),e)))for(i=0;i<e.length;i++)Mp(e[i])}}function to(e,i){var a=e.stateNode;if(a===null)return null;var l=a[Sn]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=!1;if(Qi)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){pu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{pu=!1}var Ca=null,mu=null,_l=null;function Ep(){if(_l)return _l;var e,i=mu,a=i.length,l,u="value"in Ca?Ca.value:Ca.textContent,d=u.length;for(e=0;e<a&&i[e]===u[e];e++);var y=a-e;for(l=1;l<=y&&i[a-l]===u[d-l];l++);return _l=u.slice(e,1<l?1-l:void 0)}function xl(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function yl(){return!0}function Tp(){return!1}function Vn(e){function i(a,l,u,d,y){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?yl:Tp,this.isPropagationStopped=Tp,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=yl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=yl)},persist:function(){},isPersistent:yl}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sl=Vn(us),no=g({},us,{view:0,detail:0}),hx=Vn(no),gu,vu,io,Ml=g({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==io&&(io&&e.type==="mousemove"?(gu=e.screenX-io.screenX,vu=e.screenY-io.screenY):vu=gu=0,io=e),gu)},movementY:function(e){return"movementY"in e?e.movementY:vu}}),Ap=Vn(Ml),dx=g({},Ml,{dataTransfer:0}),px=Vn(dx),mx=g({},no,{relatedTarget:0}),_u=Vn(mx),gx=g({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=Vn(gx),_x=g({},us,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xx=Vn(_x),yx=g({},us,{data:0}),wp=Vn(yx),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ex(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=bx[e])?!!i[e]:!1}function xu(){return Ex}var Tx=g({},no,{key:function(e){if(e.key){var i=Sx[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Mx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ax=Vn(Tx),wx=g({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Vn(wx),Cx=g({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),Rx=Vn(Cx),Dx=g({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ux=Vn(Dx),Nx=g({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Lx=Vn(Nx),Ox=g({},us,{newState:0,oldState:0}),Px=Vn(Ox),zx=[9,13,27,32],yu=Qi&&"CompositionEvent"in window,ao=null;Qi&&"documentMode"in document&&(ao=document.documentMode);var Fx=Qi&&"TextEvent"in window&&!ao,Rp=Qi&&(!yu||ao&&8<ao&&11>=ao),Dp=" ",Up=!1;function Np(e,i){switch(e){case"keyup":return zx.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ys=!1;function Ix(e,i){switch(e){case"compositionend":return Lp(i);case"keypress":return i.which!==32?null:(Up=!0,Dp);case"textInput":return e=i.data,e===Dp&&Up?null:e;default:return null}}function Bx(e,i){if(Ys)return e==="compositionend"||!yu&&Np(e,i)?(e=Ep(),_l=mu=Ca=null,Ys=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rp&&i.locale!=="ko"?null:i.data;default:return null}}var Hx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!Hx[e.type]:i==="textarea"}function Pp(e,i,a,l){Ws?qs?qs.push(l):qs=[l]:Ws=l,i=fc(i,"onChange"),0<i.length&&(a=new Sl("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var so=null,ro=null;function Gx(e){vg(e,0)}function bl(e){var i=cs(e);if(Fe(i))return e}function zp(e,i){if(e==="change")return i}var Fp=!1;if(Qi){var Su;if(Qi){var Mu="oninput"in document;if(!Mu){var Ip=document.createElement("div");Ip.setAttribute("oninput","return;"),Mu=typeof Ip.oninput=="function"}Su=Mu}else Su=!1;Fp=Su&&(!document.documentMode||9<document.documentMode)}function Bp(){so&&(so.detachEvent("onpropertychange",Hp),ro=so=null)}function Hp(e){if(e.propertyName==="value"&&bl(ro)){var i=[];Pp(i,ro,e,hu(e)),bp(Gx,i)}}function Vx(e,i,a){e==="focusin"?(Bp(),so=i,ro=a,so.attachEvent("onpropertychange",Hp)):e==="focusout"&&Bp()}function kx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bl(ro)}function Xx(e,i){if(e==="click")return bl(i)}function Wx(e,i){if(e==="input"||e==="change")return bl(i)}function qx(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Kn=typeof Object.is=="function"?Object.is:qx;function oo(e,i){if(Kn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!ne.call(i,u)||!Kn(e[u],i[u]))return!1}return!0}function Gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vp(e,i){var a=Gp(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gp(a)}}function kp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?kp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=ie(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=ie(e.document)}return i}function bu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Yx=Qi&&"documentMode"in document&&11>=document.documentMode,js=null,Eu=null,lo=null,Tu=!1;function Wp(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||js==null||js!==ie(l)||(l=js,"selectionStart"in l&&bu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),lo&&oo(lo,l)||(lo=l,l=fc(Eu,"onSelect"),0<l.length&&(i=new Sl("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=js)))}function fs(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Zs={animationend:fs("Animation","AnimationEnd"),animationiteration:fs("Animation","AnimationIteration"),animationstart:fs("Animation","AnimationStart"),transitionrun:fs("Transition","TransitionRun"),transitionstart:fs("Transition","TransitionStart"),transitioncancel:fs("Transition","TransitionCancel"),transitionend:fs("Transition","TransitionEnd")},Au={},qp={};Qi&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function hs(e){if(Au[e])return Au[e];if(!Zs[e])return e;var i=Zs[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in qp)return Au[e]=i[a];return e}var Yp=hs("animationend"),jp=hs("animationiteration"),Zp=hs("animationstart"),jx=hs("transitionrun"),Zx=hs("transitionstart"),Qx=hs("transitioncancel"),Qp=hs("transitionend"),Kp=new Map,wu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");wu.push("scrollEnd");function Ei(e,i){Kp.set(e,i),at(i,[e])}var El=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},fi=[],Qs=0,Cu=0;function Tl(){for(var e=Qs,i=Cu=Qs=0;i<e;){var a=fi[i];fi[i++]=null;var l=fi[i];fi[i++]=null;var u=fi[i];fi[i++]=null;var d=fi[i];if(fi[i++]=null,l!==null&&u!==null){var y=l.pending;y===null?u.next=u:(u.next=y.next,y.next=u),l.pending=u}d!==0&&Jp(a,u,d)}}function Al(e,i,a,l){fi[Qs++]=e,fi[Qs++]=i,fi[Qs++]=a,fi[Qs++]=l,Cu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Ru(e,i,a,l){return Al(e,i,a,l),wl(e)}function ds(e,i){return Al(e,null,null,i),wl(e)}function Jp(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var u=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(u=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,u&&i!==null&&(u=31-Xt(a),e=d.hiddenUpdates,l=e[u],l===null?e[u]=[i]:l.push(i),i.lane=a|536870912),d):null}function wl(e){if(50<Uo)throw Uo=0,Bf=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ks={};function Kx(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,i,a,l){return new Kx(e,i,a,l)}function Du(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ki(e,i){var a=e.alternate;return a===null?(a=Jn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $p(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Cl(e,i,a,l,u,d){var y=0;if(l=e,typeof e=="function")Du(e)&&(y=1);else if(typeof e=="string")y=nS(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case T:return e=Jn(31,a,i,u),e.elementType=T,e.lanes=d,e;case C:return ps(a.children,u,d,i);case M:y=8,u|=24;break;case x:return e=Jn(12,a,i,u|2),e.elementType=x,e.lanes=d,e;case I:return e=Jn(13,a,i,u),e.elementType=I,e.lanes=d,e;case B:return e=Jn(19,a,i,u),e.elementType=B,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:y=10;break t;case P:y=9;break t;case D:y=11;break t;case F:y=14;break t;case q:y=16,l=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),l=null}return i=Jn(y,a,i,u),i.elementType=e,i.type=l,i.lanes=d,i}function ps(e,i,a,l){return e=Jn(7,e,l,i),e.lanes=a,e}function Uu(e,i,a){return e=Jn(6,e,null,i),e.lanes=a,e}function tm(e){var i=Jn(18,null,null,0);return i.stateNode=e,i}function Nu(e,i,a){return i=Jn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var em=new WeakMap;function hi(e,i){if(typeof e=="object"&&e!==null){var a=em.get(e);return a!==void 0?a:(i={value:e,source:i,stack:O(i)},em.set(e,i),i)}return{value:e,source:i,stack:O(i)}}var Js=[],$s=0,Rl=null,co=0,di=[],pi=0,Ra=null,Oi=1,Pi="";function Ji(e,i){Js[$s++]=co,Js[$s++]=Rl,Rl=e,co=i}function nm(e,i,a){di[pi++]=Oi,di[pi++]=Pi,di[pi++]=Ra,Ra=e;var l=Oi;e=Pi;var u=32-Xt(l)-1;l&=~(1<<u),a+=1;var d=32-Xt(i)+u;if(30<d){var y=u-u%5;d=(l&(1<<y)-1).toString(32),l>>=y,u-=y,Oi=1<<32-Xt(i)+u|a<<u|l,Pi=d+e}else Oi=1<<d|a<<u|l,Pi=e}function Lu(e){e.return!==null&&(Ji(e,1),nm(e,1,0))}function Ou(e){for(;e===Rl;)Rl=Js[--$s],Js[$s]=null,co=Js[--$s],Js[$s]=null;for(;e===Ra;)Ra=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null,Oi=di[--pi],di[pi]=null}function im(e,i){di[pi++]=Oi,di[pi++]=Pi,di[pi++]=Ra,Oi=i.id,Pi=i.overflow,Ra=e}var wn=null,je=null,we=!1,Da=null,mi=!1,Pu=Error(s(519));function Ua(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw uo(hi(i,e)),Pu}function am(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[on]=e,i[Sn]=l,a){case"dialog":Me("cancel",i),Me("close",i);break;case"iframe":case"object":case"embed":Me("load",i);break;case"video":case"audio":for(a=0;a<Lo.length;a++)Me(Lo[a],i);break;case"source":Me("error",i);break;case"img":case"image":case"link":Me("error",i),Me("load",i);break;case"details":Me("toggle",i);break;case"input":Me("invalid",i),ji(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Me("invalid",i);break;case"textarea":Me("invalid",i),En(i,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||Sg(i.textContent,a)?(l.popover!=null&&(Me("beforetoggle",i),Me("toggle",i)),l.onScroll!=null&&Me("scroll",i),l.onScrollEnd!=null&&Me("scrollend",i),l.onClick!=null&&(i.onclick=Zi),i=!0):i=!1,i||Ua(e,!0)}function sm(e){for(wn=e.return;wn;)switch(wn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:wn=wn.return}}function tr(e){if(e!==wn)return!1;if(!we)return sm(e),we=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||th(e.type,e.memoizedProps)),a=!a),a&&je&&Ua(e),sm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=Dg(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));je=Dg(e)}else i===27?(i=je,Wa(e.type)?(e=sh,sh=null,je=e):je=i):je=wn?vi(e.stateNode.nextSibling):null;return!0}function ms(){je=wn=null,we=!1}function zu(){var e=Da;return e!==null&&(qn===null?qn=e:qn.push.apply(qn,e),Da=null),e}function uo(e){Da===null?Da=[e]:Da.push(e)}var Fu=L(null),gs=null,$i=null;function Na(e,i,a){mt(Fu,i._currentValue),i._currentValue=a}function ta(e){e._currentValue=Fu.current,tt(Fu)}function Iu(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function Bu(e,i,a,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var d=u.dependencies;if(d!==null){var y=u.child;d=d.firstContext;t:for(;d!==null;){var A=d;d=u;for(var G=0;G<i.length;G++)if(A.context===i[G]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),Iu(d.return,a,e),l||(y=null);break t}d=A.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),Iu(y,a,e),y=null}else y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===e){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function er(e,i,a,l){e=null;for(var u=i,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var A=u.type;Kn(u.pendingProps.value,y.value)||(e!==null?e.push(A):e=[A])}}else if(u===ht.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Io):e=[Io])}u=u.return}e!==null&&Bu(i,e,a,l),i.flags|=262144}function Dl(e){for(e=e.firstContext;e!==null;){if(!Kn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function vs(e){gs=e,$i=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Cn(e){return rm(gs,e)}function Ul(e,i){return gs===null&&vs(e),rm(e,i)}function rm(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},$i===null){if(e===null)throw Error(s(308));$i=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else $i=$i.next=i;return a}var Jx=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},$x=r.unstable_scheduleCallback,ty=r.unstable_NormalPriority,ln={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Hu(){return{controller:new Jx,data:new Map,refCount:0}}function fo(e){e.refCount--,e.refCount===0&&$x(ty,function(){e.controller.abort()})}var ho=null,Gu=0,nr=0,ir=null;function ey(e,i){if(ho===null){var a=ho=[];Gu=0,nr=Wf(),ir={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Gu++,i.then(om,om),i}function om(){if(--Gu===0&&ho!==null){ir!==null&&(ir.status="fulfilled");var e=ho;ho=null,nr=0,ir=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ny(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var u=0;u<a.length;u++)(0,a[u])(i)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var lm=z.S;z.S=function(e,i){W0=b(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&ey(e,i),lm!==null&&lm(e,i)};var _s=L(null);function Vu(){var e=_s.current;return e!==null?e:qe.pooledCache}function Nl(e,i){i===null?mt(_s,_s.current):mt(_s,i.pool)}function cm(){var e=Vu();return e===null?null:{parent:ln._currentValue,pool:e}}var ar=Error(s(460)),ku=Error(s(474)),Ll=Error(s(542)),Ol={then:function(){}};function um(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fm(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Zi,Zi),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dm(e),e;default:if(typeof i.status=="string")i.then(Zi,Zi);else{if(e=qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var u=i;u.status="fulfilled",u.value=l}},function(l){if(i.status==="pending"){var u=i;u.status="rejected",u.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,dm(e),e}throw ys=i,ar}}function xs(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,ar):a}}var ys=null;function hm(){if(ys===null)throw Error(s(459));var e=ys;return ys=null,e}function dm(e){if(e===ar||e===Ll)throw Error(s(483))}var sr=null,po=0;function Pl(e){var i=po;return po+=1,sr===null&&(sr=[]),fm(sr,e,i)}function mo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function zl(e,i){throw i.$$typeof===_?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function pm(e){function i(Z,k){if(e){var $=Z.deletions;$===null?(Z.deletions=[k],Z.flags|=16):$.push(k)}}function a(Z,k){if(!e)return null;for(;k!==null;)i(Z,k),k=k.sibling;return null}function l(Z){for(var k=new Map;Z!==null;)Z.key!==null?k.set(Z.key,Z):k.set(Z.index,Z),Z=Z.sibling;return k}function u(Z,k){return Z=Ki(Z,k),Z.index=0,Z.sibling=null,Z}function d(Z,k,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<k?(Z.flags|=67108866,k):$):(Z.flags|=67108866,k)):(Z.flags|=1048576,k)}function y(Z){return e&&Z.alternate===null&&(Z.flags|=67108866),Z}function A(Z,k,$,gt){return k===null||k.tag!==6?(k=Uu($,Z.mode,gt),k.return=Z,k):(k=u(k,$),k.return=Z,k)}function G(Z,k,$,gt){var se=$.type;return se===C?dt(Z,k,$.props.children,gt,$.key):k!==null&&(k.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===q&&xs(se)===k.type)?(k=u(k,$.props),mo(k,$),k.return=Z,k):(k=Cl($.type,$.key,$.props,null,Z.mode,gt),mo(k,$),k.return=Z,k)}function et(Z,k,$,gt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=Nu($,Z.mode,gt),k.return=Z,k):(k=u(k,$.children||[]),k.return=Z,k)}function dt(Z,k,$,gt,se){return k===null||k.tag!==7?(k=ps($,Z.mode,gt,se),k.return=Z,k):(k=u(k,$),k.return=Z,k)}function _t(Z,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=Uu(""+k,Z.mode,$),k.return=Z,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return $=Cl(k.type,k.key,k.props,null,Z.mode,$),mo($,k),$.return=Z,$;case E:return k=Nu(k,Z.mode,$),k.return=Z,k;case q:return k=xs(k),_t(Z,k,$)}if(rt(k)||Q(k))return k=ps(k,Z.mode,$,null),k.return=Z,k;if(typeof k.then=="function")return _t(Z,Pl(k),$);if(k.$$typeof===U)return _t(Z,Ul(Z,k),$);zl(Z,k)}return null}function st(Z,k,$,gt){var se=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return se!==null?null:A(Z,k,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===se?G(Z,k,$,gt):null;case E:return $.key===se?et(Z,k,$,gt):null;case q:return $=xs($),st(Z,k,$,gt)}if(rt($)||Q($))return se!==null?null:dt(Z,k,$,gt,null);if(typeof $.then=="function")return st(Z,k,Pl($),gt);if($.$$typeof===U)return st(Z,k,Ul(Z,$),gt);zl(Z,$)}return null}function lt(Z,k,$,gt,se){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Z=Z.get($)||null,A(k,Z,""+gt,se);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case S:return Z=Z.get(gt.key===null?$:gt.key)||null,G(k,Z,gt,se);case E:return Z=Z.get(gt.key===null?$:gt.key)||null,et(k,Z,gt,se);case q:return gt=xs(gt),lt(Z,k,$,gt,se)}if(rt(gt)||Q(gt))return Z=Z.get($)||null,dt(k,Z,gt,se,null);if(typeof gt.then=="function")return lt(Z,k,$,Pl(gt),se);if(gt.$$typeof===U)return lt(Z,k,$,Ul(k,gt),se);zl(k,gt)}return null}function Qt(Z,k,$,gt){for(var se=null,Ne=null,ee=k,_e=k=0,Ae=null;ee!==null&&_e<$.length;_e++){ee.index>_e?(Ae=ee,ee=null):Ae=ee.sibling;var Le=st(Z,ee,$[_e],gt);if(Le===null){ee===null&&(ee=Ae);break}e&&ee&&Le.alternate===null&&i(Z,ee),k=d(Le,k,_e),Ne===null?se=Le:Ne.sibling=Le,Ne=Le,ee=Ae}if(_e===$.length)return a(Z,ee),we&&Ji(Z,_e),se;if(ee===null){for(;_e<$.length;_e++)ee=_t(Z,$[_e],gt),ee!==null&&(k=d(ee,k,_e),Ne===null?se=ee:Ne.sibling=ee,Ne=ee);return we&&Ji(Z,_e),se}for(ee=l(ee);_e<$.length;_e++)Ae=lt(ee,Z,_e,$[_e],gt),Ae!==null&&(e&&Ae.alternate!==null&&ee.delete(Ae.key===null?_e:Ae.key),k=d(Ae,k,_e),Ne===null?se=Ae:Ne.sibling=Ae,Ne=Ae);return e&&ee.forEach(function(Qa){return i(Z,Qa)}),we&&Ji(Z,_e),se}function ce(Z,k,$,gt){if($==null)throw Error(s(151));for(var se=null,Ne=null,ee=k,_e=k=0,Ae=null,Le=$.next();ee!==null&&!Le.done;_e++,Le=$.next()){ee.index>_e?(Ae=ee,ee=null):Ae=ee.sibling;var Qa=st(Z,ee,Le.value,gt);if(Qa===null){ee===null&&(ee=Ae);break}e&&ee&&Qa.alternate===null&&i(Z,ee),k=d(Qa,k,_e),Ne===null?se=Qa:Ne.sibling=Qa,Ne=Qa,ee=Ae}if(Le.done)return a(Z,ee),we&&Ji(Z,_e),se;if(ee===null){for(;!Le.done;_e++,Le=$.next())Le=_t(Z,Le.value,gt),Le!==null&&(k=d(Le,k,_e),Ne===null?se=Le:Ne.sibling=Le,Ne=Le);return we&&Ji(Z,_e),se}for(ee=l(ee);!Le.done;_e++,Le=$.next())Le=lt(ee,Z,_e,Le.value,gt),Le!==null&&(e&&Le.alternate!==null&&ee.delete(Le.key===null?_e:Le.key),k=d(Le,k,_e),Ne===null?se=Le:Ne.sibling=Le,Ne=Le);return e&&ee.forEach(function(dS){return i(Z,dS)}),we&&Ji(Z,_e),se}function We(Z,k,$,gt){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var se=$.key;k!==null;){if(k.key===se){if(se=$.type,se===C){if(k.tag===7){a(Z,k.sibling),gt=u(k,$.props.children),gt.return=Z,Z=gt;break t}}else if(k.elementType===se||typeof se=="object"&&se!==null&&se.$$typeof===q&&xs(se)===k.type){a(Z,k.sibling),gt=u(k,$.props),mo(gt,$),gt.return=Z,Z=gt;break t}a(Z,k);break}else i(Z,k);k=k.sibling}$.type===C?(gt=ps($.props.children,Z.mode,gt,$.key),gt.return=Z,Z=gt):(gt=Cl($.type,$.key,$.props,null,Z.mode,gt),mo(gt,$),gt.return=Z,Z=gt)}return y(Z);case E:t:{for(se=$.key;k!==null;){if(k.key===se)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Z,k.sibling),gt=u(k,$.children||[]),gt.return=Z,Z=gt;break t}else{a(Z,k);break}else i(Z,k);k=k.sibling}gt=Nu($,Z.mode,gt),gt.return=Z,Z=gt}return y(Z);case q:return $=xs($),We(Z,k,$,gt)}if(rt($))return Qt(Z,k,$,gt);if(Q($)){if(se=Q($),typeof se!="function")throw Error(s(150));return $=se.call($),ce(Z,k,$,gt)}if(typeof $.then=="function")return We(Z,k,Pl($),gt);if($.$$typeof===U)return We(Z,k,Ul(Z,$),gt);zl(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Z,k.sibling),gt=u(k,$),gt.return=Z,Z=gt):(a(Z,k),gt=Uu($,Z.mode,gt),gt.return=Z,Z=gt),y(Z)):a(Z,k)}return function(Z,k,$,gt){try{po=0;var se=We(Z,k,$,gt);return sr=null,se}catch(ee){if(ee===ar||ee===Ll)throw ee;var Ne=Jn(29,ee,null,Z.mode);return Ne.lanes=gt,Ne.return=Z,Ne}}}var Ss=pm(!0),mm=pm(!1),La=!1;function Xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Oa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(ze&2)!==0){var u=l.pending;return u===null?i.next=i:(i.next=u.next,u.next=i),l.pending=i,i=wl(e),Jp(e,null,a),i}return Al(e,l,i,a),wl(e)}function go(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Zr(e,a)}}function qu(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?u=d=i:d=d.next=i}else u=d=i;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Yu=!1;function vo(){if(Yu){var e=ir;if(e!==null)throw e}}function _o(e,i,a,l){Yu=!1;var u=e.updateQueue;La=!1;var d=u.firstBaseUpdate,y=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,et=G.next;G.next=null,y===null?d=et:y.next=et,y=G;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,A=dt.lastBaseUpdate,A!==y&&(A===null?dt.firstBaseUpdate=et:A.next=et,dt.lastBaseUpdate=G))}if(d!==null){var _t=u.baseState;y=0,dt=et=G=null,A=d;do{var st=A.lane&-536870913,lt=st!==A.lane;if(lt?(Te&st)===st:(l&st)===st){st!==0&&st===nr&&(Yu=!0),dt!==null&&(dt=dt.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Qt=e,ce=A;st=i;var We=a;switch(ce.tag){case 1:if(Qt=ce.payload,typeof Qt=="function"){_t=Qt.call(We,_t,st);break t}_t=Qt;break t;case 3:Qt.flags=Qt.flags&-65537|128;case 0:if(Qt=ce.payload,st=typeof Qt=="function"?Qt.call(We,_t,st):Qt,st==null)break t;_t=g({},_t,st);break t;case 2:La=!0}}st=A.callback,st!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[st]:lt.push(st))}else lt={lane:st,tag:A.tag,payload:A.payload,callback:A.callback,next:null},dt===null?(et=dt=lt,G=_t):dt=dt.next=lt,y|=st;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;lt=A,A=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);dt===null&&(G=_t),u.baseState=G,u.firstBaseUpdate=et,u.lastBaseUpdate=dt,d===null&&(u.shared.lanes=0),Ha|=y,e.lanes=y,e.memoizedState=_t}}function gm(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function vm(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)gm(a[e],i)}var rr=L(null),Fl=L(0);function _m(e,i){e=ca,mt(Fl,e),mt(rr,i),ca=e|i.baseLanes}function ju(){mt(Fl,ca),mt(rr,rr.current)}function Zu(){ca=Fl.current,tt(rr),tt(Fl)}var $n=L(null),gi=null;function za(e){var i=e.alternate;mt(an,an.current&1),mt($n,e),gi===null&&(i===null||rr.current!==null||i.memoizedState!==null)&&(gi=e)}function Qu(e){mt(an,an.current),mt($n,e),gi===null&&(gi=e)}function xm(e){e.tag===22?(mt(an,an.current),mt($n,e),gi===null&&(gi=e)):Fa()}function Fa(){mt(an,an.current),mt($n,$n.current)}function ti(e){tt($n),gi===e&&(gi=null),tt(an)}var an=L(0);function Il(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ih(a)||ah(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var ea=0,me=null,ke=null,cn=null,Bl=!1,or=!1,Ms=!1,Hl=0,xo=0,lr=null,iy=0;function tn(){throw Error(s(321))}function Ku(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!Kn(e[a],i[a]))return!1;return!0}function Ju(e,i,a,l,u,d){return ea=d,me=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=e===null||e.memoizedState===null?n0:pf,Ms=!1,d=a(l,u),Ms=!1,or&&(d=Sm(i,a,l,u)),ym(e),d}function ym(e){z.H=Mo;var i=ke!==null&&ke.next!==null;if(ea=0,cn=ke=me=null,Bl=!1,xo=0,lr=null,i)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&Dl(e)&&(un=!0))}function Sm(e,i,a,l){me=e;var u=0;do{if(or&&(lr=null),xo=0,or=!1,25<=u)throw Error(s(301));if(u+=1,cn=ke=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}z.H=i0,d=i(a,l)}while(or);return d}function ay(){var e=z.H,i=e.useState()[0];return i=typeof i.then=="function"?yo(i):i,e=e.useState()[0],(ke!==null?ke.memoizedState:null)!==e&&(me.flags|=1024),i}function $u(){var e=Hl!==0;return Hl=0,e}function tf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function ef(e){if(Bl){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Bl=!1}ea=0,cn=ke=me=null,or=!1,xo=Hl=0,lr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?me.memoizedState=cn=e:cn=cn.next=e,cn}function sn(){if(ke===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var i=cn===null?me.memoizedState:cn.next;if(i!==null)cn=i,ke=e;else{if(e===null)throw me.alternate===null?Error(s(467)):Error(s(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},cn===null?me.memoizedState=cn=e:cn=cn.next=e}return cn}function Gl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yo(e){var i=xo;return xo+=1,lr===null&&(lr=[]),e=fm(lr,e,i),i=me,(cn===null?i.memoizedState:cn.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?n0:pf),e}function Vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yo(e);if(e.$$typeof===U)return Cn(e)}throw Error(s(438,String(e)))}function nf(e){var i=null,a=me.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=me.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(u){return u.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Gl(),me.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=R;return i.index++,a}function na(e,i){return typeof i=="function"?i(e):i}function kl(e){var i=sn();return af(i,ke,e)}function af(e,i,a){var l=e.queue;if(l===null)throw Error(s(311));l.lastRenderedReducer=a;var u=e.baseQueue,d=l.pending;if(d!==null){if(u!==null){var y=u.next;u.next=d.next,d.next=y}i.baseQueue=u=d,l.pending=null}if(d=e.baseState,u===null)e.memoizedState=d;else{i=u.next;var A=y=null,G=null,et=i,dt=!1;do{var _t=et.lane&-536870913;if(_t!==et.lane?(Te&_t)===_t:(ea&_t)===_t){var st=et.revertLane;if(st===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),_t===nr&&(dt=!0);else if((ea&st)===st){et=et.next,st===nr&&(dt=!0);continue}else _t={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(A=G=_t,y=d):G=G.next=_t,me.lanes|=st,Ha|=st;_t=et.action,Ms&&a(d,_t),d=et.hasEagerState?et.eagerState:a(d,_t)}else st={lane:_t,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},G===null?(A=G=st,y=d):G=G.next=st,me.lanes|=_t,Ha|=_t;et=et.next}while(et!==null&&et!==i);if(G===null?y=d:G.next=A,!Kn(d,e.memoizedState)&&(un=!0,dt&&(a=ir,a!==null)))throw a;e.memoizedState=d,e.baseState=y,e.baseQueue=G,l.lastRenderedState=d}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function sf(e){var i=sn(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var l=a.dispatch,u=a.pending,d=i.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do d=e(d,y.action),y=y.next;while(y!==u);Kn(d,i.memoizedState)||(un=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function Mm(e,i,a){var l=me,u=sn(),d=we;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var y=!Kn((ke||u).memoizedState,a);if(y&&(u.memoizedState=a,un=!0),u=u.queue,lf(Tm.bind(null,l,u,e),[e]),u.getSnapshot!==i||y||cn!==null&&cn.memoizedState.tag&1){if(l.flags|=2048,cr(9,{destroy:void 0},Em.bind(null,l,u,a,i),null),qe===null)throw Error(s(349));d||(ea&127)!==0||bm(l,i,a)}return a}function bm(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=me.updateQueue,i===null?(i=Gl(),me.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Em(e,i,a,l){i.value=a,i.getSnapshot=l,Am(i)&&wm(e)}function Tm(e,i,a){return a(function(){Am(i)&&wm(e)})}function Am(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!Kn(e,a)}catch{return!0}}function wm(e){var i=ds(e,2);i!==null&&Yn(i,e,2)}function rf(e){var i=Bn();if(typeof e=="function"){var a=e;if(e=a(),Ms){Yt(!0);try{a()}finally{Yt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:e},i}function Cm(e,i,a,l){return e.baseState=a,af(e,ke,typeof l=="function"?l:na)}function sy(e,i,a,l,u){if(ql(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};z.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,Rm(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Rm(e,i){var a=i.action,l=i.payload,u=e.state;if(i.isTransition){var d=z.T,y={};z.T=y;try{var A=a(u,l),G=z.S;G!==null&&G(y,A),Dm(e,i,A)}catch(et){of(e,i,et)}finally{d!==null&&y.types!==null&&(d.types=y.types),z.T=d}}else try{d=a(u,l),Dm(e,i,d)}catch(et){of(e,i,et)}}function Dm(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){Um(e,i,l)},function(l){return of(e,i,l)}):Um(e,i,a)}function Um(e,i,a){i.status="fulfilled",i.value=a,Nm(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Rm(e,a)))}function of(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Nm(i),i=i.next;while(i!==l)}e.action=null}function Nm(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Lm(e,i){return i}function Om(e,i){if(we){var a=qe.formState;if(a!==null){t:{var l=me;if(we){if(je){e:{for(var u=je,d=mi;u.nodeType!==8;){if(!d){u=null;break e}if(u=vi(u.nextSibling),u===null){u=null;break e}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){je=vi(u.nextSibling),l=u.data==="F!";break t}}Ua(l)}l=!1}l&&(i=a[0])}}return a=Bn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:i},a.queue=l,a=$m.bind(null,me,l),l.dispatch=a,l=rf(!1),d=df.bind(null,me,!1,l.queue),l=Bn(),u={state:i,dispatch:null,action:e,pending:null},l.queue=u,a=sy.bind(null,me,u,d,a),u.dispatch=a,l.memoizedState=e,[i,a,!1]}function Pm(e){var i=sn();return zm(i,ke,e)}function zm(e,i,a){if(i=af(e,i,Lm)[0],e=kl(na)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=yo(i)}catch(y){throw y===ar?Ll:y}else l=i;i=sn();var u=i.queue,d=u.dispatch;return a!==i.memoizedState&&(me.flags|=2048,cr(9,{destroy:void 0},ry.bind(null,u,a),null)),[l,d,e]}function ry(e,i){e.action=i}function Fm(e){var i=sn(),a=ke;if(a!==null)return zm(i,a,e);sn(),i=i.memoizedState,a=sn();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function cr(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=me.updateQueue,i===null&&(i=Gl(),me.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Im(){return sn().memoizedState}function Xl(e,i,a,l){var u=Bn();me.flags|=e,u.memoizedState=cr(1|i,{destroy:void 0},a,l===void 0?null:l)}function Wl(e,i,a,l){var u=sn();l=l===void 0?null:l;var d=u.memoizedState.inst;ke!==null&&l!==null&&Ku(l,ke.memoizedState.deps)?u.memoizedState=cr(i,d,a,l):(me.flags|=e,u.memoizedState=cr(1|i,d,a,l))}function Bm(e,i){Xl(8390656,8,e,i)}function lf(e,i){Wl(2048,8,e,i)}function oy(e){me.flags|=4;var i=me.updateQueue;if(i===null)i=Gl(),me.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function Hm(e){var i=sn().memoizedState;return oy({ref:i,nextImpl:e}),function(){if((ze&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function Gm(e,i){return Wl(4,2,e,i)}function Vm(e,i){return Wl(4,4,e,i)}function km(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Xm(e,i,a){a=a!=null?a.concat([e]):null,Wl(4,4,km.bind(null,i,e),a)}function cf(){}function Wm(e,i){var a=sn();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&Ku(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function qm(e,i){var a=sn();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&Ku(i,l[1]))return l[0];if(l=e(),Ms){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[l,i],l}function uf(e,i,a){return a===void 0||(ea&1073741824)!==0&&(Te&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=Y0(),me.lanes|=e,Ha|=e,a)}function Ym(e,i,a,l){return Kn(a,i)?a:rr.current!==null?(e=uf(e,a,l),Kn(e,i)||(un=!0),e):(ea&42)===0||(ea&1073741824)!==0&&(Te&261930)===0?(un=!0,e.memoizedState=a):(e=Y0(),me.lanes|=e,Ha|=e,i)}function jm(e,i,a,l,u){var d=V.p;V.p=d!==0&&8>d?d:8;var y=z.T,A={};z.T=A,df(e,!1,i,a);try{var G=u(),et=z.S;if(et!==null&&et(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var dt=ny(G,l);So(e,i,dt,ii(e))}else So(e,i,l,ii(e))}catch(_t){So(e,i,{then:function(){},status:"rejected",reason:_t},ii())}finally{V.p=d,y!==null&&A.types!==null&&(y.types=A.types),z.T=y}}function ly(){}function ff(e,i,a,l){if(e.tag!==5)throw Error(s(476));var u=Zm(e).queue;jm(e,u,i,nt,a===null?ly:function(){return Qm(e),a(l)})}function Zm(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:nt,baseState:nt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:nt},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:na,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Qm(e){var i=Zm(e);i.next===null&&(i=e.alternate.memoizedState),So(e,i.next.queue,{},ii())}function hf(){return Cn(Io)}function Km(){return sn().memoizedState}function Jm(){return sn().memoizedState}function cy(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=ii();e=Oa(a);var l=Pa(i,e,a);l!==null&&(Yn(l,i,a),go(l,i,a)),i={cache:Hu()},e.payload=i;return}i=i.return}}function uy(e,i,a){var l=ii();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(e)?t0(i,a):(a=Ru(e,i,a,l),a!==null&&(Yn(a,e,l),e0(a,i,l)))}function $m(e,i,a){var l=ii();So(e,i,a,l)}function So(e,i,a,l){var u={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ql(e))t0(i,u);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,A=d(y,a);if(u.hasEagerState=!0,u.eagerState=A,Kn(A,y))return Al(e,i,u,0),qe===null&&Tl(),!1}catch{}if(a=Ru(e,i,u,l),a!==null)return Yn(a,e,l),e0(a,i,l),!0}return!1}function df(e,i,a,l){if(l={lane:2,revertLane:Wf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(i)throw Error(s(479))}else i=Ru(e,a,l,2),i!==null&&Yn(i,e,2)}function ql(e){var i=e.alternate;return e===me||i!==null&&i===me}function t0(e,i){or=Bl=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function e0(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Zr(e,a)}}var Mo={readContext:Cn,use:Vl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};Mo.useEffectEvent=tn;var n0={readContext:Cn,use:Vl,useCallback:function(e,i){return Bn().memoizedState=[e,i===void 0?null:i],e},useContext:Cn,useEffect:Bm,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Xl(4194308,4,km.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Xl(4194308,4,e,i)},useInsertionEffect:function(e,i){Xl(4,2,e,i)},useMemo:function(e,i){var a=Bn();i=i===void 0?null:i;var l=e();if(Ms){Yt(!0);try{e()}finally{Yt(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=Bn();if(a!==void 0){var u=a(i);if(Ms){Yt(!0);try{a(i)}finally{Yt(!1)}}}else u=i;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=uy.bind(null,me,e),[l.memoizedState,e]},useRef:function(e){var i=Bn();return e={current:e},i.memoizedState=e},useState:function(e){e=rf(e);var i=e.queue,a=$m.bind(null,me,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:cf,useDeferredValue:function(e,i){var a=Bn();return uf(a,e,i)},useTransition:function(){var e=rf(!1);return e=jm.bind(null,me,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=me,u=Bn();if(we){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),qe===null)throw Error(s(349));(Te&127)!==0||bm(l,i,a)}u.memoizedState=a;var d={value:a,getSnapshot:i};return u.queue=d,Bm(Tm.bind(null,l,d,e),[e]),l.flags|=2048,cr(9,{destroy:void 0},Em.bind(null,l,d,a,i),null),a},useId:function(){var e=Bn(),i=qe.identifierPrefix;if(we){var a=Pi,l=Oi;a=(l&~(1<<32-Xt(l)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Hl++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=iy++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:hf,useFormState:Om,useActionState:Om,useOptimistic:function(e){var i=Bn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=df.bind(null,me,!0,a),a.dispatch=i,[e,i]},useMemoCache:nf,useCacheRefresh:function(){return Bn().memoizedState=cy.bind(null,me)},useEffectEvent:function(e){var i=Bn(),a={impl:e};return i.memoizedState=a,function(){if((ze&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},pf={readContext:Cn,use:Vl,useCallback:Wm,useContext:Cn,useEffect:lf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:kl,useRef:Im,useState:function(){return kl(na)},useDebugValue:cf,useDeferredValue:function(e,i){var a=sn();return Ym(a,ke.memoizedState,e,i)},useTransition:function(){var e=kl(na)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:yo(e),i]},useSyncExternalStore:Mm,useId:Km,useHostTransitionStatus:hf,useFormState:Pm,useActionState:Pm,useOptimistic:function(e,i){var a=sn();return Cm(a,ke,e,i)},useMemoCache:nf,useCacheRefresh:Jm};pf.useEffectEvent=Hm;var i0={readContext:Cn,use:Vl,useCallback:Wm,useContext:Cn,useEffect:lf,useImperativeHandle:Xm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:sf,useRef:Im,useState:function(){return sf(na)},useDebugValue:cf,useDeferredValue:function(e,i){var a=sn();return ke===null?uf(a,e,i):Ym(a,ke.memoizedState,e,i)},useTransition:function(){var e=sf(na)[0],i=sn().memoizedState;return[typeof e=="boolean"?e:yo(e),i]},useSyncExternalStore:Mm,useId:Km,useHostTransitionStatus:hf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e,i){var a=sn();return ke!==null?Cm(a,ke,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:nf,useCacheRefresh:Jm};i0.useEffectEvent=Hm;function mf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:g({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var gf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=ii(),u=Oa(l);u.payload=i,a!=null&&(u.callback=a),i=Pa(e,u,l),i!==null&&(Yn(i,e,l),go(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=ii(),u=Oa(l);u.tag=1,u.payload=i,a!=null&&(u.callback=a),i=Pa(e,u,l),i!==null&&(Yn(i,e,l),go(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=ii(),l=Oa(a);l.tag=2,i!=null&&(l.callback=i),i=Pa(e,l,a),i!==null&&(Yn(i,e,a),go(i,e,a))}};function a0(e,i,a,l,u,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,y):i.prototype&&i.prototype.isPureReactComponent?!oo(a,l)||!oo(u,d):!0}function s0(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&gf.enqueueReplaceState(i,i.state,null)}function bs(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function r0(e){El(e)}function o0(e){console.error(e)}function l0(e){El(e)}function Yl(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function c0(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function vf(e,i,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){Yl(e,i)},a}function u0(e){return e=Oa(e),e.tag=3,e}function f0(e,i,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=l.value;e.payload=function(){return u(d)},e.callback=function(){c0(i,a,l)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){c0(i,a,l),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function fy(e,i,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&er(i,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?sc():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===Ol?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),Vf(e,l,u)),!1;case 22:return a.flags|=65536,l===Ol?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),Vf(e,l,u)),!1}throw Error(s(435,a.tag))}return Vf(e,l,u),sc(),!1}if(we)return i=$n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=u,l!==Pu&&(e=Error(s(422),{cause:l}),uo(hi(e,a)))):(l!==Pu&&(i=Error(s(423),{cause:l}),uo(hi(i,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=hi(l,a),u=vf(e.stateNode,l,u),qu(e,u),en!==4&&(en=2)),!1;var d=Error(s(520),{cause:l});if(d=hi(d,a),Do===null?Do=[d]:Do.push(d),en!==4&&(en=2),i===null)return!0;l=hi(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=vf(a.stateNode,l,e),qu(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ga===null||!Ga.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=u0(u),f0(u,e,a,l),qu(a,u),!1}a=a.return}while(a!==null);return!1}var _f=Error(s(461)),un=!1;function Rn(e,i,a,l){i.child=e===null?mm(i,null,a,l):Ss(i,e.child,a,l)}function h0(e,i,a,l,u){a=a.render;var d=i.ref;if("ref"in l){var y={};for(var A in l)A!=="ref"&&(y[A]=l[A])}else y=l;return vs(i),l=Ju(e,i,a,y,d,u),A=$u(),e!==null&&!un?(tf(e,i,u),ia(e,i,u)):(we&&A&&Lu(i),i.flags|=1,Rn(e,i,l,u),i.child)}function d0(e,i,a,l,u){if(e===null){var d=a.type;return typeof d=="function"&&!Du(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,p0(e,i,d,l,u)):(e=Cl(a.type,null,l,i,i.mode,u),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Af(e,u)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:oo,a(y,l)&&e.ref===i.ref)return ia(e,i,u)}return i.flags|=1,e=Ki(d,l),e.ref=i.ref,e.return=i,i.child=e}function p0(e,i,a,l,u){if(e!==null){var d=e.memoizedProps;if(oo(d,l)&&e.ref===i.ref)if(un=!1,i.pendingProps=l=d,Af(e,u))(e.flags&131072)!==0&&(un=!0);else return i.lanes=e.lanes,ia(e,i,u)}return xf(e,i,a,l,u)}function m0(e,i,a,l){var u=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(l=i.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~d}else l=0,i.child=null;return g0(e,i,d,a,l)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nl(i,d!==null?d.cachePool:null),d!==null?_m(i,d):ju(),xm(i);else return l=i.lanes=536870912,g0(e,i,d!==null?d.baseLanes|a:a,a,l)}else d!==null?(Nl(i,d.cachePool),_m(i,d),Fa(),i.memoizedState=null):(e!==null&&Nl(i,null),ju(),Fa());return Rn(e,i,u,a),i.child}function bo(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function g0(e,i,a,l,u){var d=Vu();return d=d===null?null:{parent:ln._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},e!==null&&Nl(i,null),ju(),xm(i),e!==null&&er(e,i,l,!0),i.childLanes=u,null}function jl(e,i){return i=Ql({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function v0(e,i,a){return Ss(i,e.child,null,a),e=jl(i,i.pendingProps),e.flags|=2,ti(i),i.memoizedState=null,e}function hy(e,i,a){var l=i.pendingProps,u=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(we){if(l.mode==="hidden")return e=jl(i,l),i.lanes=536870912,bo(null,e);if(Qu(i),(e=je)?(e=Rg(e,mi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=i,i.child=a,wn=i,je=null)):e=null,e===null)throw Ua(i);return i.lanes=536870912,null}return jl(i,l)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(Qu(i),u)if(i.flags&256)i.flags&=-257,i=v0(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(un||er(e,i,a,!1),u=(a&e.childLanes)!==0,un||u){if(l=qe,l!==null&&(y=Hs(l,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,ds(e,y),Yn(l,e,y),_f;sc(),i=v0(e,i,a)}else e=d.treeContext,je=vi(y.nextSibling),wn=i,we=!0,Da=null,mi=!1,e!==null&&im(i,e),i=jl(i,l),i.flags|=4096;return i}return e=Ki(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Zl(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function xf(e,i,a,l,u){return vs(i),a=Ju(e,i,a,l,void 0,u),l=$u(),e!==null&&!un?(tf(e,i,u),ia(e,i,u)):(we&&l&&Lu(i),i.flags|=1,Rn(e,i,a,u),i.child)}function _0(e,i,a,l,u,d){return vs(i),i.updateQueue=null,a=Sm(i,l,a,u),ym(e),l=$u(),e!==null&&!un?(tf(e,i,d),ia(e,i,d)):(we&&l&&Lu(i),i.flags|=1,Rn(e,i,a,d),i.child)}function x0(e,i,a,l,u){if(vs(i),i.stateNode===null){var d=Ks,y=a.contextType;typeof y=="object"&&y!==null&&(d=Cn(y)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=gf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},Xu(i),y=a.contextType,d.context=typeof y=="object"&&y!==null?Cn(y):Ks,d.state=i.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(mf(i,a,y,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&gf.enqueueReplaceState(d,d.state,null),_o(i,l,d,u),vo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var A=i.memoizedProps,G=bs(a,A);d.props=G;var et=d.context,dt=a.contextType;y=Ks,typeof dt=="object"&&dt!==null&&(y=Cn(dt));var _t=a.getDerivedStateFromProps;dt=typeof _t=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,dt||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||et!==y)&&s0(i,d,l,y),La=!1;var st=i.memoizedState;d.state=st,_o(i,l,d,u),vo(),et=i.memoizedState,A||st!==et||La?(typeof _t=="function"&&(mf(i,a,_t,l),et=i.memoizedState),(G=La||a0(i,a,G,l,st,et,y))?(dt||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=et),d.props=l,d.state=et,d.context=y,l=G):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,Wu(e,i),y=i.memoizedProps,dt=bs(a,y),d.props=dt,_t=i.pendingProps,st=d.context,et=a.contextType,G=Ks,typeof et=="object"&&et!==null&&(G=Cn(et)),A=a.getDerivedStateFromProps,(et=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==_t||st!==G)&&s0(i,d,l,G),La=!1,st=i.memoizedState,d.state=st,_o(i,l,d,u),vo();var lt=i.memoizedState;y!==_t||st!==lt||La||e!==null&&e.dependencies!==null&&Dl(e.dependencies)?(typeof A=="function"&&(mf(i,a,A,l),lt=i.memoizedState),(dt=La||a0(i,a,dt,l,st,lt,G)||e!==null&&e.dependencies!==null&&Dl(e.dependencies))?(et||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,lt,G),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,lt,G)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=lt),d.props=l,d.state=lt,d.context=G,l=dt):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Zl(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Ss(i,e.child,null,u),i.child=Ss(i,null,a,u)):Rn(e,i,a,u),i.memoizedState=d.state,e=i.child):e=ia(e,i,u),e}function y0(e,i,a,l){return ms(),i.flags|=256,Rn(e,i,a,l),i.child}var yf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Sf(e){return{baseLanes:e,cachePool:cm()}}function Mf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=ni),e}function S0(e,i,a){var l=i.pendingProps,u=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),y&&(u=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,e===null){if(we){if(u?za(i):Fa(),(e=je)?(e=Rg(e,mi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:Oi,overflow:Pi}:null,retryLane:536870912,hydrationErrors:null},a=tm(e),a.return=i,i.child=a,wn=i,je=null)):e=null,e===null)throw Ua(i);return ah(e)?i.lanes=32:i.lanes=536870912,null}var A=l.children;return l=l.fallback,u?(Fa(),u=i.mode,A=Ql({mode:"hidden",children:A},u),l=ps(l,u,a,null),A.return=i,l.return=i,A.sibling=l,i.child=A,l=i.child,l.memoizedState=Sf(a),l.childLanes=Mf(e,y,a),i.memoizedState=yf,bo(null,l)):(za(i),bf(i,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(d)i.flags&256?(za(i),i.flags&=-257,i=Ef(e,i,a)):i.memoizedState!==null?(Fa(),i.child=e.child,i.flags|=128,i=null):(Fa(),A=l.fallback,u=i.mode,l=Ql({mode:"visible",children:l.children},u),A=ps(A,u,a,null),A.flags|=2,l.return=i,A.return=i,l.sibling=A,i.child=l,Ss(i,e.child,null,a),l=i.child,l.memoizedState=Sf(a),l.childLanes=Mf(e,y,a),i.memoizedState=yf,i=bo(null,l));else if(za(i),ah(A)){if(y=A.nextSibling&&A.nextSibling.dataset,y)var et=y.dgst;y=et,l=Error(s(419)),l.stack="",l.digest=y,uo({value:l,source:null,stack:null}),i=Ef(e,i,a)}else if(un||er(e,i,a,!1),y=(a&e.childLanes)!==0,un||y){if(y=qe,y!==null&&(l=Hs(y,a),l!==0&&l!==G.retryLane))throw G.retryLane=l,ds(e,l),Yn(y,e,l),_f;ih(A)||sc(),i=Ef(e,i,a)}else ih(A)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,je=vi(A.nextSibling),wn=i,we=!0,Da=null,mi=!1,e!==null&&im(i,e),i=bf(i,l.children),i.flags|=4096);return i}return u?(Fa(),A=l.fallback,u=i.mode,G=e.child,et=G.sibling,l=Ki(G,{mode:"hidden",children:l.children}),l.subtreeFlags=G.subtreeFlags&65011712,et!==null?A=Ki(et,A):(A=ps(A,u,a,null),A.flags|=2),A.return=i,l.return=i,l.sibling=A,i.child=l,bo(null,l),l=i.child,A=e.child.memoizedState,A===null?A=Sf(a):(u=A.cachePool,u!==null?(G=ln._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=cm(),A={baseLanes:A.baseLanes|a,cachePool:u}),l.memoizedState=A,l.childLanes=Mf(e,y,a),i.memoizedState=yf,bo(e.child,l)):(za(i),a=e.child,e=a.sibling,a=Ki(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(y=i.deletions,y===null?(i.deletions=[e],i.flags|=16):y.push(e)),i.child=a,i.memoizedState=null,a)}function bf(e,i){return i=Ql({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Ql(e,i){return e=Jn(22,e,null,i),e.lanes=0,e}function Ef(e,i,a){return Ss(i,e.child,null,a),e=bf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function M0(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),Iu(e.return,i,a)}function Tf(e,i,a,l,u,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=a,y.tailMode=u,y.treeForkCount=d)}function b0(e,i,a){var l=i.pendingProps,u=l.revealOrder,d=l.tail;l=l.children;var y=an.current,A=(y&2)!==0;if(A?(y=y&1|2,i.flags|=128):y&=1,mt(an,y),Rn(e,i,l,a),l=we?co:0,!A&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&M0(e,a,i);else if(e.tag===19)M0(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=i.child,u=null;a!==null;)e=a.alternate,e!==null&&Il(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=i.child,i.child=null):(u=a.sibling,a.sibling=null),Tf(i,!1,u,a,d,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=i.child,i.child=null;u!==null;){if(e=u.alternate,e!==null&&Il(e)===null){i.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Tf(i,!0,a,null,d,l);break;case"together":Tf(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function ia(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Ha|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(er(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=Ki(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=Ki(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Af(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Dl(e)))}function dy(e,i,a){switch(i.tag){case 3:Dt(i,i.stateNode.containerInfo),Na(i,ln,e.memoizedState.cache),ms();break;case 27:case 5:kt(i);break;case 4:Dt(i,i.stateNode.containerInfo);break;case 10:Na(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Qu(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(za(i),i.flags|=128,null):(a&i.child.childLanes)!==0?S0(e,i,a):(za(i),e=ia(e,i,a),e!==null?e.sibling:null);za(i);break;case 19:var u=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(er(e,i,a,!1),l=(a&i.childLanes)!==0),u){if(l)return b0(e,i,a);i.flags|=128}if(u=i.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),mt(an,an.current),l)break;return null;case 22:return i.lanes=0,m0(e,i,a,i.pendingProps);case 24:Na(i,ln,e.memoizedState.cache)}return ia(e,i,a)}function E0(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)un=!0;else{if(!Af(e,a)&&(i.flags&128)===0)return un=!1,dy(e,i,a);un=(e.flags&131072)!==0}else un=!1,we&&(i.flags&1048576)!==0&&nm(i,co,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=xs(i.elementType),i.type=e,typeof e=="function")Du(e)?(l=bs(e,l),i.tag=1,i=x0(null,i,e,l,a)):(i.tag=0,i=xf(null,i,e,l,a));else{if(e!=null){var u=e.$$typeof;if(u===D){i.tag=11,i=h0(null,i,e,l,a);break t}else if(u===F){i.tag=14,i=d0(null,i,e,l,a);break t}}throw i=ct(e)||e,Error(s(306,i,""))}}return i;case 0:return xf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,u=bs(l,i.pendingProps),x0(e,i,l,u,a);case 3:t:{if(Dt(i,i.stateNode.containerInfo),e===null)throw Error(s(387));l=i.pendingProps;var d=i.memoizedState;u=d.element,Wu(e,i),_o(i,l,null,a);var y=i.memoizedState;if(l=y.cache,Na(i,ln,l),l!==d.cache&&Bu(i,[ln],a,!0),vo(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=y0(e,i,l,a);break t}else if(l!==u){u=hi(Error(s(424)),i),uo(u),i=y0(e,i,l,a);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=vi(e.firstChild),wn=i,we=!0,Da=null,mi=!0,a=mm(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ms(),l===u){i=ia(e,i,a);break t}Rn(e,i,l,a)}i=i.child}return i;case 26:return Zl(e,i),e===null?(a=Pg(i.type,null,i.pendingProps,null))?i.memoizedState=a:we||(a=i.type,e=i.pendingProps,l=hc(it.current).createElement(a),l[on]=i,l[Sn]=e,Dn(l,a,e),w(l),i.stateNode=l):i.memoizedState=Pg(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return kt(i),e===null&&we&&(l=i.stateNode=Ng(i.type,i.pendingProps,it.current),wn=i,mi=!0,u=je,Wa(i.type)?(sh=u,je=vi(l.firstChild)):je=u),Rn(e,i,i.pendingProps.children,a),Zl(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&we&&((u=l=je)&&(l=ky(l,i.type,i.pendingProps,mi),l!==null?(i.stateNode=l,wn=i,je=vi(l.firstChild),mi=!1,u=!0):u=!1),u||Ua(i)),kt(i),u=i.type,d=i.pendingProps,y=e!==null?e.memoizedProps:null,l=d.children,th(u,d)?l=null:y!==null&&th(u,y)&&(i.flags|=32),i.memoizedState!==null&&(u=Ju(e,i,ay,null,null,a),Io._currentValue=u),Zl(e,i),Rn(e,i,l,a),i.child;case 6:return e===null&&we&&((e=a=je)&&(a=Xy(a,i.pendingProps,mi),a!==null?(i.stateNode=a,wn=i,je=null,e=!0):e=!1),e||Ua(i)),null;case 13:return S0(e,i,a);case 4:return Dt(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Ss(i,null,l,a):Rn(e,i,l,a),i.child;case 11:return h0(e,i,i.type,i.pendingProps,a);case 7:return Rn(e,i,i.pendingProps,a),i.child;case 8:return Rn(e,i,i.pendingProps.children,a),i.child;case 12:return Rn(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,Na(i,i.type,l.value),Rn(e,i,l.children,a),i.child;case 9:return u=i.type._context,l=i.pendingProps.children,vs(i),u=Cn(u),l=l(u),i.flags|=1,Rn(e,i,l,a),i.child;case 14:return d0(e,i,i.type,i.pendingProps,a);case 15:return p0(e,i,i.type,i.pendingProps,a);case 19:return b0(e,i,a);case 31:return hy(e,i,a);case 22:return m0(e,i,a,i.pendingProps);case 24:return vs(i),l=Cn(ln),e===null?(u=Vu(),u===null&&(u=qe,d=Hu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),i.memoizedState={parent:l,cache:u},Xu(i),Na(i,ln,u)):((e.lanes&a)!==0&&(Wu(e,i),_o(i,null,null,a),vo()),u=e.memoizedState,d=i.memoizedState,u.parent!==l?(u={parent:l,cache:l},i.memoizedState=u,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=u),Na(i,ln,l)):(l=d.cache,Na(i,ln,l),l!==u.cache&&Bu(i,[ln],a,!0))),Rn(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function aa(e){e.flags|=4}function wf(e,i,a,l,u){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(K0())e.flags|=8192;else throw ys=Ol,ku}else e.flags&=-16777217}function T0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hg(i))if(K0())e.flags|=8192;else throw ys=Ol,ku}function Kl(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ie():536870912,e.lanes|=i,dr|=i)}function Eo(e,i){if(!we)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ze(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function py(e,i,a){var l=i.pendingProps;switch(Ou(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(i),null;case 1:return Ze(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ta(ln),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(tr(i)?aa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,zu())),Ze(i),null;case 26:var u=i.type,d=i.memoizedState;return e===null?(aa(i),d!==null?(Ze(i),T0(i,d)):(Ze(i),wf(i,u,null,l,a))):d?d!==e.memoizedState?(aa(i),Ze(i),T0(i,d)):(Ze(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&aa(i),Ze(i),wf(i,u,e,l,a)),null;case 27:if(ge(i),a=it.current,u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&aa(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Ze(i),null}e=wt.current,tr(i)?am(i):(e=Ng(u,l,a),i.stateNode=e,aa(i))}return Ze(i),null;case 5:if(ge(i),u=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&aa(i);else{if(!l){if(i.stateNode===null)throw Error(s(166));return Ze(i),null}if(d=wt.current,tr(i))am(i);else{var y=hc(it.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(u,{is:l.is}):y.createElement(u)}}d[on]=i,d[Sn]=l;t:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break t;for(;y.sibling===null;){if(y.return===null||y.return===i)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;t:switch(Dn(d,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&aa(i)}}return Ze(i),wf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&aa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(s(166));if(e=it.current,tr(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,u=wn,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[on]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Sg(e.nodeValue,a)),e||Ua(i,!0)}else e=hc(e).createTextNode(l),e[on]=i,i.stateNode=e}return Ze(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(l=tr(i),a!==null){if(e===null){if(!l)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),e=!1}else a=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(ti(i),i):(ti(i),null);if((i.flags&128)!==0)throw Error(s(558))}return Ze(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=tr(i),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=i.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=i}else ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ze(i),u=!1}else u=zu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return i.flags&256?(ti(i),i):(ti(i),null)}return ti(i),(i.flags&128)!==0?(i.lanes=a,i):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=i.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==u&&(l.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),Kl(i,i.updateQueue),Ze(i),null);case 4:return Gt(),e===null&&Zf(i.stateNode.containerInfo),Ze(i),null;case 10:return ta(i.type),Ze(i),null;case 19:if(tt(an),l=i.memoizedState,l===null)return Ze(i),null;if(u=(i.flags&128)!==0,d=l.rendering,d===null)if(u)Eo(l,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=Il(e),d!==null){for(i.flags|=128,Eo(l,!1),e=d.updateQueue,i.updateQueue=e,Kl(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)$p(a,e),a=a.sibling;return mt(an,an.current&1|2),we&&Ji(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&b()>nc&&(i.flags|=128,u=!0,Eo(l,!1),i.lanes=4194304)}else{if(!u)if(e=Il(d),e!==null){if(i.flags|=128,u=!0,e=e.updateQueue,i.updateQueue=e,Kl(i,e),Eo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!we)return Ze(i),null}else 2*b()-l.renderingStartTime>nc&&a!==536870912&&(i.flags|=128,u=!0,Eo(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=b(),e.sibling=null,a=an.current,mt(an,u?a&1|2:a&1),we&&Ji(i,l.treeForkCount),e):(Ze(i),null);case 22:case 23:return ti(i),Zu(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(Ze(i),i.subtreeFlags&6&&(i.flags|=8192)):Ze(i),a=i.updateQueue,a!==null&&Kl(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&tt(_s),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),ta(ln),Ze(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function my(e,i){switch(Ou(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return ta(ln),Gt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ge(i),null;case 31:if(i.memoizedState!==null){if(ti(i),i.alternate===null)throw Error(s(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(ti(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));ms()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return tt(an),null;case 4:return Gt(),null;case 10:return ta(i.type),null;case 22:case 23:return ti(i),Zu(),e!==null&&tt(_s),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return ta(ln),null;case 25:return null;default:return null}}function A0(e,i){switch(Ou(i),i.tag){case 3:ta(ln),Gt();break;case 26:case 27:case 5:ge(i);break;case 4:Gt();break;case 31:i.memoizedState!==null&&ti(i);break;case 13:ti(i);break;case 19:tt(an);break;case 10:ta(i.type);break;case 22:case 23:ti(i),Zu(),e!==null&&tt(_s);break;case 24:ta(ln)}}function To(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){l=void 0;var d=a.create,y=a.inst;l=d(),y.destroy=l}a=a.next}while(a!==u)}}catch(A){Ge(i,i.return,A)}}function Ia(e,i,a){try{var l=i.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var d=u.next;l=d;do{if((l.tag&e)===e){var y=l.inst,A=y.destroy;if(A!==void 0){y.destroy=void 0,u=i;var G=a,et=A;try{et()}catch(dt){Ge(u,G,dt)}}}l=l.next}while(l!==d)}}catch(dt){Ge(i,i.return,dt)}}function w0(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{vm(i,a)}catch(l){Ge(e,e.return,l)}}}function C0(e,i,a){a.props=bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Ge(e,i,l)}}function Ao(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(u){Ge(e,i,u)}}function zi(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){Ge(e,i,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ge(e,i,u)}else a.current=null}function R0(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){Ge(e,e.return,u)}}function Cf(e,i,a){try{var l=e.stateNode;Fy(l,e.type,a,i),l[Sn]=i}catch(u){Ge(e,e.return,u)}}function D0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Rf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||D0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Df(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Zi));else if(l!==4&&(l===27&&Wa(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Df(e,i,a),e=e.sibling;e!==null;)Df(e,i,a),e=e.sibling}function Jl(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Jl(e,i,a),e=e.sibling;e!==null;)Jl(e,i,a),e=e.sibling}function U0(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,u=i.attributes;u.length;)i.removeAttributeNode(u[0]);Dn(i,l,a),i[on]=e,i[Sn]=a}catch(d){Ge(e,e.return,d)}}var sa=!1,fn=!1,Uf=!1,N0=typeof WeakSet=="function"?WeakSet:Set,_n=null;function gy(e,i){if(e=e.containerInfo,Jf=xc,e=Xp(e),bu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var y=0,A=-1,G=-1,et=0,dt=0,_t=e,st=null;e:for(;;){for(var lt;_t!==a||u!==0&&_t.nodeType!==3||(A=y+u),_t!==d||l!==0&&_t.nodeType!==3||(G=y+l),_t.nodeType===3&&(y+=_t.nodeValue.length),(lt=_t.firstChild)!==null;)st=_t,_t=lt;for(;;){if(_t===e)break e;if(st===a&&++et===u&&(A=y),st===d&&++dt===l&&(G=y),(lt=_t.nextSibling)!==null)break;_t=st,st=_t.parentNode}_t=lt}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for($f={focusedElem:e,selectionRange:a},xc=!1,_n=i;_n!==null;)if(i=_n,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,_n=e;else for(;_n!==null;){switch(i=_n,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,u=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var Qt=bs(a.type,u);e=l.getSnapshotBeforeUpdate(Qt,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(ce){Ge(a,a.return,ce)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)nh(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":nh(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,_n=e;break}_n=i.return}}function L0(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:oa(e,a),l&4&&To(5,a);break;case 1:if(oa(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(y){Ge(a,a.return,y)}else{var u=bs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(u,i,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Ge(a,a.return,y)}}l&64&&w0(a),l&512&&Ao(a,a.return);break;case 3:if(oa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{vm(e,i)}catch(y){Ge(a,a.return,y)}}break;case 27:i===null&&l&4&&U0(a);case 26:case 5:oa(e,a),i===null&&l&4&&R0(a),l&512&&Ao(a,a.return);break;case 12:oa(e,a);break;case 31:oa(e,a),l&4&&z0(e,a);break;case 13:oa(e,a),l&4&&F0(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ty.bind(null,a),Wy(e,a))));break;case 22:if(l=a.memoizedState!==null||sa,!l){i=i!==null&&i.memoizedState!==null||fn,u=sa;var d=fn;sa=l,(fn=i)&&!d?la(e,a,(a.subtreeFlags&8772)!==0):oa(e,a),sa=u,fn=d}break;case 30:break;default:oa(e,a)}}function O0(e){var i=e.alternate;i!==null&&(e.alternate=null,O0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&$r(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,kn=!1;function ra(e,i,a){for(a=a.child;a!==null;)P0(e,i,a),a=a.sibling}function P0(e,i,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Tt,a)}catch{}switch(a.tag){case 26:fn||zi(a,i),ra(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||zi(a,i);var l=Ke,u=kn;Wa(a.type)&&(Ke=a.stateNode,kn=!1),ra(e,i,a),Po(a.stateNode),Ke=l,kn=u;break;case 5:fn||zi(a,i);case 6:if(l=Ke,u=kn,Ke=null,ra(e,i,a),Ke=l,kn=u,Ke!==null)if(kn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(d){Ge(a,i,d)}else try{Ke.removeChild(a.stateNode)}catch(d){Ge(a,i,d)}break;case 18:Ke!==null&&(kn?(e=Ke,wg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Sr(e)):wg(Ke,a.stateNode));break;case 4:l=Ke,u=kn,Ke=a.stateNode.containerInfo,kn=!0,ra(e,i,a),Ke=l,kn=u;break;case 0:case 11:case 14:case 15:Ia(2,a,i),fn||Ia(4,a,i),ra(e,i,a);break;case 1:fn||(zi(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&C0(a,i,l)),ra(e,i,a);break;case 21:ra(e,i,a);break;case 22:fn=(l=fn)||a.memoizedState!==null,ra(e,i,a),fn=l;break;default:ra(e,i,a)}}function z0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Sr(e)}catch(a){Ge(i,i.return,a)}}}function F0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Sr(e)}catch(a){Ge(i,i.return,a)}}function vy(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new N0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new N0),i;default:throw Error(s(435,e.tag))}}function $l(e,i){var a=vy(e);i.forEach(function(l){if(!a.has(l)){a.add(l);var u=Ay.bind(null,e,l);l.then(u,u)}})}function Xn(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],d=e,y=i,A=y;t:for(;A!==null;){switch(A.tag){case 27:if(Wa(A.type)){Ke=A.stateNode,kn=!1;break t}break;case 5:Ke=A.stateNode,kn=!1;break t;case 3:case 4:Ke=A.stateNode.containerInfo,kn=!0;break t}A=A.return}if(Ke===null)throw Error(s(160));P0(d,y,u),Ke=null,kn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)I0(i,e),i=i.sibling}var Ti=null;function I0(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xn(i,e),Wn(e),l&4&&(Ia(3,e,e.return),To(3,e),Ia(5,e,e.return));break;case 1:Xn(i,e),Wn(e),l&512&&(fn||a===null||zi(a,a.return)),l&64&&sa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=Ti;if(Xn(i,e),Wn(e),l&512&&(fn||a===null||zi(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(l){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ls]||d[on]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(l),u.head.insertBefore(d,u.querySelector("head > title"))),Dn(d,l,a),d[on]=e,w(d),l=d;break t;case"link":var y=Ig("link","href",u).get(l+(a.href||""));if(y){for(var A=0;A<y.length;A++)if(d=y[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(A,1);break e}}d=u.createElement(l),Dn(d,l,a),u.head.appendChild(d);break;case"meta":if(y=Ig("meta","content",u).get(l+(a.content||""))){for(A=0;A<y.length;A++)if(d=y[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(A,1);break e}}d=u.createElement(l),Dn(d,l,a),u.head.appendChild(d);break;default:throw Error(s(468,l))}d[on]=e,w(d),l=d}e.stateNode=l}else Bg(u,e.type,e.stateNode);else e.stateNode=Fg(u,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?Bg(u,e.type,e.stateNode):Fg(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xn(i,e),Wn(e),l&512&&(fn||a===null||zi(a,a.return)),a!==null&&l&4&&Cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xn(i,e),Wn(e),l&512&&(fn||a===null||zi(a,a.return)),e.flags&32){u=e.stateNode;try{dn(u,"")}catch(Qt){Ge(e,e.return,Qt)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,Cf(e,u,a!==null?a.memoizedProps:u)),l&1024&&(Uf=!0);break;case 6:if(Xn(i,e),Wn(e),l&4){if(e.stateNode===null)throw Error(s(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(Qt){Ge(e,e.return,Qt)}}break;case 3:if(mc=null,u=Ti,Ti=dc(i.containerInfo),Xn(i,e),Ti=u,Wn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Sr(i.containerInfo)}catch(Qt){Ge(e,e.return,Qt)}Uf&&(Uf=!1,B0(e));break;case 4:l=Ti,Ti=dc(e.stateNode.containerInfo),Xn(i,e),Wn(e),Ti=l;break;case 12:Xn(i,e),Wn(e);break;case 31:Xn(i,e),Wn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$l(e,l)));break;case 13:Xn(i,e),Wn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ec=b()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$l(e,l)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,et=sa,dt=fn;if(sa=et||u,fn=dt||G,Xn(i,e),fn=dt,sa=et,Wn(e),l&8192)t:for(i=e.stateNode,i._visibility=u?i._visibility&-2:i._visibility|1,u&&(a===null||G||sa||fn||Es(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){G=a=i;try{if(d=G.stateNode,u)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{A=G.stateNode;var _t=G.memoizedProps.style,st=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Qt){Ge(G,G.return,Qt)}}}else if(i.tag===6){if(a===null){G=i;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(Qt){Ge(G,G.return,Qt)}}}else if(i.tag===18){if(a===null){G=i;try{var lt=G.stateNode;u?Cg(lt,!0):Cg(G.stateNode,!1)}catch(Qt){Ge(G,G.return,Qt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,$l(e,a))));break;case 19:Xn(i,e),Wn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,$l(e,l)));break;case 30:break;case 21:break;default:Xn(i,e),Wn(e)}}function Wn(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(D0(l)){a=l;break}l=l.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,d=Rf(e);Jl(e,d,u);break;case 5:var y=a.stateNode;a.flags&32&&(dn(y,""),a.flags&=-33);var A=Rf(e);Jl(e,A,y);break;case 3:case 4:var G=a.stateNode.containerInfo,et=Rf(e);Df(e,et,G);break;default:throw Error(s(161))}}catch(dt){Ge(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function B0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;B0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function oa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)L0(e,i.alternate,i),i=i.sibling}function Es(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ia(4,i,i.return),Es(i);break;case 1:zi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&C0(i,i.return,a),Es(i);break;case 27:Po(i.stateNode);case 26:case 5:zi(i,i.return),Es(i);break;case 22:i.memoizedState===null&&Es(i);break;case 30:Es(i);break;default:Es(i)}e=e.sibling}}function la(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,u=e,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:la(u,d,a),To(4,d);break;case 1:if(la(u,d,a),l=d,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ge(l,l.return,et)}if(l=d,u=l.updateQueue,u!==null){var A=l.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)gm(G[u],A)}catch(et){Ge(l,l.return,et)}}a&&y&64&&w0(d),Ao(d,d.return);break;case 27:U0(d);case 26:case 5:la(u,d,a),a&&l===null&&y&4&&R0(d),Ao(d,d.return);break;case 12:la(u,d,a);break;case 31:la(u,d,a),a&&y&4&&z0(u,d);break;case 13:la(u,d,a),a&&y&4&&F0(u,d);break;case 22:d.memoizedState===null&&la(u,d,a),Ao(d,d.return);break;case 30:break;default:la(u,d,a)}i=i.sibling}}function Nf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&fo(a))}function Lf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&fo(e))}function Ai(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)H0(e,i,a,l),i=i.sibling}function H0(e,i,a,l){var u=i.flags;switch(i.tag){case 0:case 11:case 15:Ai(e,i,a,l),u&2048&&To(9,i);break;case 1:Ai(e,i,a,l);break;case 3:Ai(e,i,a,l),u&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&fo(e)));break;case 12:if(u&2048){Ai(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,y=d.id,A=d.onPostCommit;typeof A=="function"&&A(y,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ge(i,i.return,G)}}else Ai(e,i,a,l);break;case 31:Ai(e,i,a,l);break;case 13:Ai(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Ai(e,i,a,l):wo(e,i):d._visibility&2?Ai(e,i,a,l):(d._visibility|=2,ur(e,i,a,l,(i.subtreeFlags&10256)!==0||!1)),u&2048&&Nf(y,i);break;case 24:Ai(e,i,a,l),u&2048&&Lf(i.alternate,i);break;default:Ai(e,i,a,l)}}function ur(e,i,a,l,u){for(u=u&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,y=i,A=a,G=l,et=y.flags;switch(y.tag){case 0:case 11:case 15:ur(d,y,A,G,u),To(8,y);break;case 23:break;case 22:var dt=y.stateNode;y.memoizedState!==null?dt._visibility&2?ur(d,y,A,G,u):wo(d,y):(dt._visibility|=2,ur(d,y,A,G,u)),u&&et&2048&&Nf(y.alternate,y);break;case 24:ur(d,y,A,G,u),u&&et&2048&&Lf(y.alternate,y);break;default:ur(d,y,A,G,u)}i=i.sibling}}function wo(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,u=l.flags;switch(l.tag){case 22:wo(a,l),u&2048&&Nf(l.alternate,l);break;case 24:wo(a,l),u&2048&&Lf(l.alternate,l);break;default:wo(a,l)}i=i.sibling}}var Co=8192;function fr(e,i,a){if(e.subtreeFlags&Co)for(e=e.child;e!==null;)G0(e,i,a),e=e.sibling}function G0(e,i,a){switch(e.tag){case 26:fr(e,i,a),e.flags&Co&&e.memoizedState!==null&&iS(a,Ti,e.memoizedState,e.memoizedProps);break;case 5:fr(e,i,a);break;case 3:case 4:var l=Ti;Ti=dc(e.stateNode.containerInfo),fr(e,i,a),Ti=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Co,Co=16777216,fr(e,i,a),Co=l):fr(e,i,a));break;default:fr(e,i,a)}}function V0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Ro(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];_n=l,X0(l,e)}V0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)k0(e),e=e.sibling}function k0(e){switch(e.tag){case 0:case 11:case 15:Ro(e),e.flags&2048&&Ia(9,e,e.return);break;case 3:Ro(e);break;case 12:Ro(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,tc(e)):Ro(e);break;default:Ro(e)}}function tc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];_n=l,X0(l,e)}V0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ia(8,i,i.return),tc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,tc(i));break;default:tc(i)}e=e.sibling}}function X0(e,i){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ia(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:fo(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,_n=l;else t:for(a=e;_n!==null;){l=_n;var u=l.sibling,d=l.return;if(O0(l),l===a){_n=null;break t}if(u!==null){u.return=d,_n=u;break t}_n=d}}}var _y={getCacheForType:function(e){var i=Cn(ln),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return Cn(ln).controller.signal}},xy=typeof WeakMap=="function"?WeakMap:Map,ze=0,qe=null,Se=null,Te=0,He=0,ei=null,Ba=!1,hr=!1,Of=!1,ca=0,en=0,Ha=0,Ts=0,Pf=0,ni=0,dr=0,Do=null,qn=null,zf=!1,ec=0,W0=0,nc=1/0,ic=null,Ga=null,pn=0,Va=null,pr=null,ua=0,Ff=0,If=null,q0=null,Uo=0,Bf=null;function ii(){return(ze&2)!==0&&Te!==0?Te&-Te:z.T!==null?Wf():Kr()}function Y0(){if(ni===0)if((Te&536870912)===0||we){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),ni=e}else ni=536870912;return e=$n.current,e!==null&&(e.flags|=32),ni}function Yn(e,i,a){(e===qe&&(He===2||He===9)||e.cancelPendingCommit!==null)&&(mr(e,0),ka(e,Te,ni,!1)),On(e,a),((ze&2)===0||e!==qe)&&(e===qe&&((ze&2)===0&&(Ts|=a),en===4&&ka(e,Te,ni,!1)),Fi(e))}function j0(e,i,a){if((ze&6)!==0)throw Error(s(327));var l=!a&&(i&127)===0&&(i&e.expiredLanes)===0||Nt(e,i),u=l?My(e,i):Gf(e,i,!0),d=l;do{if(u===0){hr&&!l&&ka(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!yy(a)){u=Gf(e,i,!1),d=!1;continue}if(u===2){if(d=i,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;t:{var A=e;u=Do;var G=A.current.memoizedState.isDehydrated;if(G&&(mr(A,y).flags|=256),y=Gf(A,y,!1),y!==2){if(Of&&!G){A.errorRecoveryDisabledLanes|=d,Ts|=d,u=4;break t}d=qn,qn=u,d!==null&&(qn===null?qn=d:qn.push.apply(qn,d))}u=y}if(d=!1,u!==2)continue}}if(u===1){mr(e,0),ka(e,i,0,!0);break}t:{switch(l=e,d=u,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:ka(l,i,ni,!Ba);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(u=ec+300-b(),10<u)){if(ka(l,i,ni,!Ba),xt(l,0,!0)!==0)break t;ua=i,l.timeoutHandle=Tg(Z0.bind(null,l,a,qn,ic,zf,i,ni,Ts,dr,Ba,d,"Throttled",-0,0),u);break t}Z0(l,a,qn,ic,zf,i,ni,Ts,dr,Ba,d,null,-0,0)}}break}while(!0);Fi(e)}function Z0(e,i,a,l,u,d,y,A,G,et,dt,_t,st,lt){if(e.timeoutHandle=-1,_t=i.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},G0(i,d,_t);var Qt=(d&62914560)===d?ec-b():(d&4194048)===d?W0-b():0;if(Qt=aS(_t,Qt),Qt!==null){ua=d,e.cancelPendingCommit=Qt(ig.bind(null,e,i,d,a,l,u,y,A,G,dt,_t,null,st,lt)),ka(e,d,y,!et);return}}ig(e,i,d,a,l,u,y,A,G)}function yy(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],d=u.getSnapshot;u=u.value;try{if(!Kn(d(),u))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ka(e,i,a,l){i&=~Pf,i&=~Ts,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var u=i;0<u;){var d=31-Xt(u),y=1<<d;l[d]=-1,u&=~y}a!==0&&ml(e,a,i)}function ac(){return(ze&6)===0?(No(0),!1):!0}function Hf(){if(Se!==null){if(He===0)var e=Se.return;else e=Se,$i=gs=null,ef(e),sr=null,po=0,e=Se;for(;e!==null;)A0(e.alternate,e),e=e.return;Se=null}}function mr(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Hy(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ua=0,Hf(),qe=e,Se=a=Ki(e.current,null),Te=i,He=0,ei=null,Ba=!1,hr=Nt(e,i),Of=!1,dr=ni=Pf=Ts=Ha=en=0,qn=Do=null,zf=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var u=31-Xt(l),d=1<<u;i|=e[u],l&=~d}return ca=i,Tl(),a}function Q0(e,i){me=null,z.H=Mo,i===ar||i===Ll?(i=hm(),He=3):i===ku?(i=hm(),He=4):He=i===_f?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,ei=i,Se===null&&(en=1,Yl(e,hi(i,e.current)))}function K0(){var e=$n.current;return e===null?!0:(Te&4194048)===Te?gi===null:(Te&62914560)===Te||(Te&536870912)!==0?e===gi:!1}function J0(){var e=z.H;return z.H=Mo,e===null?Mo:e}function $0(){var e=z.A;return z.A=_y,e}function sc(){en=4,Ba||(Te&4194048)!==Te&&$n.current!==null||(hr=!0),(Ha&134217727)===0&&(Ts&134217727)===0||qe===null||ka(qe,Te,ni,!1)}function Gf(e,i,a){var l=ze;ze|=2;var u=J0(),d=$0();(qe!==e||Te!==i)&&(ic=null,mr(e,i)),i=!1;var y=en;t:do try{if(He!==0&&Se!==null){var A=Se,G=ei;switch(He){case 8:Hf(),y=6;break t;case 3:case 2:case 9:case 6:$n.current===null&&(i=!0);var et=He;if(He=0,ei=null,gr(e,A,G,et),a&&hr){y=0;break t}break;default:et=He,He=0,ei=null,gr(e,A,G,et)}}Sy(),y=en;break}catch(dt){Q0(e,dt)}while(!0);return i&&e.shellSuspendCounter++,$i=gs=null,ze=l,z.H=u,z.A=d,Se===null&&(qe=null,Te=0,Tl()),y}function Sy(){for(;Se!==null;)tg(Se)}function My(e,i){var a=ze;ze|=2;var l=J0(),u=$0();qe!==e||Te!==i?(ic=null,nc=b()+500,mr(e,i)):hr=Nt(e,i);t:do try{if(He!==0&&Se!==null){i=Se;var d=ei;e:switch(He){case 1:He=0,ei=null,gr(e,i,d,1);break;case 2:case 9:if(um(d)){He=0,ei=null,eg(i);break}i=function(){He!==2&&He!==9||qe!==e||(He=7),Fi(e)},d.then(i,i);break t;case 3:He=7;break t;case 4:He=5;break t;case 7:um(d)?(He=0,ei=null,eg(i)):(He=0,ei=null,gr(e,i,d,7));break;case 5:var y=null;switch(Se.tag){case 26:y=Se.memoizedState;case 5:case 27:var A=Se;if(y?Hg(y):A.stateNode.complete){He=0,ei=null;var G=A.sibling;if(G!==null)Se=G;else{var et=A.return;et!==null?(Se=et,rc(et)):Se=null}break e}}He=0,ei=null,gr(e,i,d,5);break;case 6:He=0,ei=null,gr(e,i,d,6);break;case 8:Hf(),en=6;break t;default:throw Error(s(462))}}by();break}catch(dt){Q0(e,dt)}while(!0);return $i=gs=null,z.H=l,z.A=u,ze=a,Se!==null?0:(qe=null,Te=0,Tl(),en)}function by(){for(;Se!==null&&!Ut();)tg(Se)}function tg(e){var i=E0(e.alternate,e,ca);e.memoizedProps=e.pendingProps,i===null?rc(e):Se=i}function eg(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=_0(a,i,i.pendingProps,i.type,void 0,Te);break;case 11:i=_0(a,i,i.pendingProps,i.type.render,i.ref,Te);break;case 5:ef(i);default:A0(a,i),i=Se=$p(i,ca),i=E0(a,i,ca)}e.memoizedProps=e.pendingProps,i===null?rc(e):Se=i}function gr(e,i,a,l){$i=gs=null,ef(i),sr=null,po=0;var u=i.return;try{if(fy(e,u,i,a,Te)){en=1,Yl(e,hi(a,e.current)),Se=null;return}}catch(d){if(u!==null)throw Se=u,d;en=1,Yl(e,hi(a,e.current)),Se=null;return}i.flags&32768?(we||l===1?e=!0:hr||(Te&536870912)!==0?e=!1:(Ba=e=!0,(l===2||l===9||l===3||l===6)&&(l=$n.current,l!==null&&l.tag===13&&(l.flags|=16384))),ng(i,e)):rc(i)}function rc(e){var i=e;do{if((i.flags&32768)!==0){ng(i,Ba);return}e=i.return;var a=py(i.alternate,i,ca);if(a!==null){Se=a;return}if(i=i.sibling,i!==null){Se=i;return}Se=i=e}while(i!==null);en===0&&(en=5)}function ng(e,i){do{var a=my(e.alternate,e);if(a!==null){a.flags&=32767,Se=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Se=e;return}Se=e=a}while(e!==null);en=6,Se=null}function ig(e,i,a,l,u,d,y,A,G){e.cancelPendingCommit=null;do oc();while(pn!==0);if((ze&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=Cu,Si(e,a,d,y,A,G),e===qe&&(Se=qe=null,Te=0),pr=i,Va=e,ua=a,Ff=d,If=u,q0=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,wy(ft,function(){return lg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,u=V.p,V.p=2,y=ze,ze|=4;try{gy(e,i,a)}finally{ze=y,V.p=u,z.T=l}}pn=1,ag(),sg(),rg()}}function ag(){if(pn===1){pn=0;var e=Va,i=pr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var l=V.p;V.p=2;var u=ze;ze|=4;try{I0(i,e);var d=$f,y=Xp(e.containerInfo),A=d.focusedElem,G=d.selectionRange;if(y!==A&&A&&A.ownerDocument&&kp(A.ownerDocument.documentElement,A)){if(G!==null&&bu(A)){var et=G.start,dt=G.end;if(dt===void 0&&(dt=et),"selectionStart"in A)A.selectionStart=et,A.selectionEnd=Math.min(dt,A.value.length);else{var _t=A.ownerDocument||document,st=_t&&_t.defaultView||window;if(st.getSelection){var lt=st.getSelection(),Qt=A.textContent.length,ce=Math.min(G.start,Qt),We=G.end===void 0?ce:Math.min(G.end,Qt);!lt.extend&&ce>We&&(y=We,We=ce,ce=y);var Z=Vp(A,ce),k=Vp(A,We);if(Z&&k&&(lt.rangeCount!==1||lt.anchorNode!==Z.node||lt.anchorOffset!==Z.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var $=_t.createRange();$.setStart(Z.node,Z.offset),lt.removeAllRanges(),ce>We?(lt.addRange($),lt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),lt.addRange($))}}}}for(_t=[],lt=A;lt=lt.parentNode;)lt.nodeType===1&&_t.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var gt=_t[A];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}xc=!!Jf,$f=Jf=null}finally{ze=u,V.p=l,z.T=a}}e.current=i,pn=2}}function sg(){if(pn===2){pn=0;var e=Va,i=pr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var l=V.p;V.p=2;var u=ze;ze|=4;try{L0(e,i.alternate,i)}finally{ze=u,V.p=l,z.T=a}}pn=3}}function rg(){if(pn===4||pn===3){pn=0,N();var e=Va,i=pr,a=ua,l=q0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?pn=5:(pn=0,pr=Va=null,og(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ga=null),Gs(a),i=i.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Tt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,u=V.p,V.p=2,z.T=null;try{for(var d=e.onRecoverableError,y=0;y<l.length;y++){var A=l[y];d(A.value,{componentStack:A.stack})}}finally{z.T=i,V.p=u}}(ua&3)!==0&&oc(),Fi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Bf?Uo++:(Uo=0,Bf=e):Uo=0,No(0)}}function og(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,fo(i)))}function oc(){return ag(),sg(),rg(),lg()}function lg(){if(pn!==5)return!1;var e=Va,i=Ff;Ff=0;var a=Gs(ua),l=z.T,u=V.p;try{V.p=32>a?32:a,z.T=null,a=If,If=null;var d=Va,y=ua;if(pn=0,pr=Va=null,ua=0,(ze&6)!==0)throw Error(s(331));var A=ze;if(ze|=4,k0(d.current),H0(d,d.current,y,a),ze=A,No(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Tt,d)}catch{}return!0}finally{V.p=u,z.T=l,og(e,i)}}function cg(e,i,a){i=hi(a,i),i=vf(e.stateNode,i,2),e=Pa(e,i,2),e!==null&&(On(e,2),Fi(e))}function Ge(e,i,a){if(e.tag===3)cg(e,e,a);else for(;i!==null;){if(i.tag===3){cg(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ga===null||!Ga.has(l))){e=hi(a,e),a=u0(2),l=Pa(i,a,2),l!==null&&(f0(a,l,i,e),On(l,2),Fi(l));break}}i=i.return}}function Vf(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new xy;var u=new Set;l.set(i,u)}else u=l.get(i),u===void 0&&(u=new Set,l.set(i,u));u.has(a)||(Of=!0,u.add(a),e=Ey.bind(null,e,i,a),i.then(e,e))}function Ey(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qe===e&&(Te&a)===a&&(en===4||en===3&&(Te&62914560)===Te&&300>b()-ec?(ze&2)===0&&mr(e,0):Pf|=a,dr===Te&&(dr=0)),Fi(e)}function ug(e,i){i===0&&(i=Ie()),e=ds(e,i),e!==null&&(On(e,i),Fi(e))}function Ty(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),ug(e,a)}function Ay(e,i){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(s(314))}l!==null&&l.delete(i),ug(e,a)}function wy(e,i){return Ft(e,i)}var lc=null,vr=null,kf=!1,cc=!1,Xf=!1,Xa=0;function Fi(e){e!==vr&&e.next===null&&(vr===null?lc=vr=e:vr=vr.next=e),cc=!0,kf||(kf=!0,Ry())}function No(e,i){if(!Xf&&cc){Xf=!0;do for(var a=!1,l=lc;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var d=0;else{var y=l.suspendedLanes,A=l.pingedLanes;d=(1<<31-Xt(42|e)+1)-1,d&=u&~(y&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,pg(l,d))}else d=Te,d=xt(l,l===qe?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Nt(l,d)||(a=!0,pg(l,d));l=l.next}while(a);Xf=!1}}function Cy(){fg()}function fg(){cc=kf=!1;var e=0;Xa!==0&&By()&&(e=Xa);for(var i=b(),a=null,l=lc;l!==null;){var u=l.next,d=hg(l,i);d===0?(l.next=null,a===null?lc=u:a.next=u,u===null&&(vr=a)):(a=l,(e!==0||(d&3)!==0)&&(cc=!0)),l=u}pn!==0&&pn!==5||No(e),Xa!==0&&(Xa=0)}function hg(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-Xt(d),A=1<<y,G=u[y];G===-1?((A&a)===0||(A&l)!==0)&&(u[y]=fe(A,i)):G<=i&&(e.expiredLanes|=A),d&=~A}if(i=qe,a=Te,a=xt(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(He===2||He===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&ae(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Nt(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&ae(l),Gs(a)){case 2:case 8:a=St;break;case 32:a=ft;break;case 268435456:a=Lt;break;default:a=ft}return l=dg.bind(null,e),a=Ft(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&ae(l),e.callbackPriority=2,e.callbackNode=null,2}function dg(e,i){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(oc()&&e.callbackNode!==a)return null;var l=Te;return l=xt(e,e===qe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(j0(e,l,i),hg(e,b()),e.callbackNode!=null&&e.callbackNode===a?dg.bind(null,e):null)}function pg(e,i){if(oc())return null;j0(e,i,!0)}function Ry(){Gy(function(){(ze&6)!==0?Ft(ut,Cy):fg()})}function Wf(){if(Xa===0){var e=nr;e===0&&(e=It,It<<=1,(It&261888)===0&&(It=256)),Xa=e}return Xa}function mg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vl(""+e)}function gg(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function Dy(e,i,a,l,u){if(i==="submit"&&a&&a.stateNode===u){var d=mg((u[Sn]||null).action),y=l.submitter;y&&(i=(i=y[Sn]||null)?mg(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var A=new Sl("action","action",null,l,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Xa!==0){var G=y?gg(u,y):new FormData(u);ff(a,{pending:!0,data:G,method:u.method,action:d},null,G)}}else typeof d=="function"&&(A.preventDefault(),G=y?gg(u,y):new FormData(u),ff(a,{pending:!0,data:G,method:u.method,action:d},d,G))},currentTarget:u}]})}}for(var qf=0;qf<wu.length;qf++){var Yf=wu[qf],Uy=Yf.toLowerCase(),Ny=Yf[0].toUpperCase()+Yf.slice(1);Ei(Uy,"on"+Ny)}Ei(Yp,"onAnimationEnd"),Ei(jp,"onAnimationIteration"),Ei(Zp,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(jx,"onTransitionRun"),Ei(Zx,"onTransitionStart"),Ei(Qx,"onTransitionCancel"),Ei(Qp,"onTransitionEnd"),K("onMouseEnter",["mouseout","mouseover"]),K("onMouseLeave",["mouseout","mouseover"]),K("onPointerEnter",["pointerout","pointerover"]),K("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lo));function vg(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],u=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var y=l.length-1;0<=y;y--){var A=l[y],G=A.instance,et=A.currentTarget;if(A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=et;try{d(u)}catch(dt){El(dt)}u.currentTarget=null,d=G}else for(y=0;y<l.length;y++){if(A=l[y],G=A.instance,et=A.currentTarget,A=A.listener,G!==d&&u.isPropagationStopped())break t;d=A,u.currentTarget=et;try{d(u)}catch(dt){El(dt)}u.currentTarget=null,d=G}}}}function Me(e,i){var a=i[Vs];a===void 0&&(a=i[Vs]=new Set);var l=e+"__bubble";a.has(l)||(_g(i,e,2,!1),a.add(l))}function jf(e,i,a){var l=0;i&&(l|=4),_g(a,e,l,i)}var uc="_reactListening"+Math.random().toString(36).slice(2);function Zf(e){if(!e[uc]){e[uc]=!0,Y.forEach(function(a){a!=="selectionchange"&&(Ly.has(a)||jf(a,!1,e),jf(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[uc]||(i[uc]=!0,jf("selectionchange",!1,i))}}function _g(e,i,a,l){switch(Yg(i)){case 2:var u=oS;break;case 8:u=lS;break;default:u=uh}a=u.bind(null,i,a,e),u=void 0,!pu||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(i,a,{capture:!0,passive:u}):e.addEventListener(i,a,!0):u!==void 0?e.addEventListener(i,a,{passive:u}):e.addEventListener(i,a,!1)}function Qf(e,i,a,l,u){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var A=l.stateNode.containerInfo;if(A===u)break;if(y===4)for(y=l.return;y!==null;){var G=y.tag;if((G===3||G===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;A!==null;){if(y=Ta(A),y===null)return;if(G=y.tag,G===5||G===6||G===26||G===27){l=d=y;continue t}A=A.parentNode}}l=l.return}bp(function(){var et=d,dt=hu(a),_t=[];t:{var st=Kp.get(e);if(st!==void 0){var lt=Sl,Qt=e;switch(e){case"keypress":if(xl(a)===0)break t;case"keydown":case"keyup":lt=Ax;break;case"focusin":Qt="focus",lt=_u;break;case"focusout":Qt="blur",lt=_u;break;case"beforeblur":case"afterblur":lt=_u;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=Rx;break;case Yp:case jp:case Zp:lt=vx;break;case Qp:lt=Ux;break;case"scroll":case"scrollend":lt=hx;break;case"wheel":lt=Lx;break;case"copy":case"cut":case"paste":lt=xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=Cp;break;case"toggle":case"beforetoggle":lt=Px}var ce=(i&4)!==0,We=!ce&&(e==="scroll"||e==="scrollend"),Z=ce?st!==null?st+"Capture":null:st;ce=[];for(var k=et,$;k!==null;){var gt=k;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||Z===null||(gt=to(k,Z),gt!=null&&ce.push(Oo(k,gt,$))),We)break;k=k.return}0<ce.length&&(st=new lt(st,Qt,null,a,dt),_t.push({event:st,listeners:ce}))}}if((i&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",st&&a!==fu&&(Qt=a.relatedTarget||a.fromElement)&&(Ta(Qt)||Qt[Mi]))break t;if((lt||st)&&(st=dt.window===dt?dt:(st=dt.ownerDocument)?st.defaultView||st.parentWindow:window,lt?(Qt=a.relatedTarget||a.toElement,lt=et,Qt=Qt?Ta(Qt):null,Qt!==null&&(We=c(Qt),ce=Qt.tag,Qt!==We||ce!==5&&ce!==27&&ce!==6)&&(Qt=null)):(lt=null,Qt=et),lt!==Qt)){if(ce=Ap,gt="onMouseLeave",Z="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ce=Cp,gt="onPointerLeave",Z="onPointerEnter",k="pointer"),We=lt==null?st:cs(lt),$=Qt==null?st:cs(Qt),st=new ce(gt,k+"leave",lt,a,dt),st.target=We,st.relatedTarget=$,gt=null,Ta(dt)===et&&(ce=new ce(Z,k+"enter",Qt,a,dt),ce.target=$,ce.relatedTarget=We,gt=ce),We=gt,lt&&Qt)e:{for(ce=Oy,Z=lt,k=Qt,$=0,gt=Z;gt;gt=ce(gt))$++;gt=0;for(var se=k;se;se=ce(se))gt++;for(;0<$-gt;)Z=ce(Z),$--;for(;0<gt-$;)k=ce(k),gt--;for(;$--;){if(Z===k||k!==null&&Z===k.alternate){ce=Z;break e}Z=ce(Z),k=ce(k)}ce=null}else ce=null;lt!==null&&xg(_t,st,lt,ce,!1),Qt!==null&&We!==null&&xg(_t,We,Qt,ce,!0)}}t:{if(st=et?cs(et):window,lt=st.nodeName&&st.nodeName.toLowerCase(),lt==="select"||lt==="input"&&st.type==="file")var Ne=zp;else if(Op(st))if(Fp)Ne=Wx;else{Ne=kx;var ee=Vx}else lt=st.nodeName,!lt||lt.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?et&&bi(et.elementType)&&(Ne=zp):Ne=Xx;if(Ne&&(Ne=Ne(e,et))){Pp(_t,Ne,a,dt);break t}ee&&ee(e,st,et),e==="focusout"&&et&&st.type==="number"&&et.memoizedProps.value!=null&&bn(st,"number",st.value)}switch(ee=et?cs(et):window,e){case"focusin":(Op(ee)||ee.contentEditable==="true")&&(js=ee,Eu=et,lo=null);break;case"focusout":lo=Eu=js=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,Wp(_t,a,dt);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":Wp(_t,a,dt)}var _e;if(yu)t:{switch(e){case"compositionstart":var Ae="onCompositionStart";break t;case"compositionend":Ae="onCompositionEnd";break t;case"compositionupdate":Ae="onCompositionUpdate";break t}Ae=void 0}else Ys?Np(e,a)&&(Ae="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ae="onCompositionStart");Ae&&(Rp&&a.locale!=="ko"&&(Ys||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Ys&&(_e=Ep()):(Ca=dt,mu="value"in Ca?Ca.value:Ca.textContent,Ys=!0)),ee=fc(et,Ae),0<ee.length&&(Ae=new wp(Ae,e,null,a,dt),_t.push({event:Ae,listeners:ee}),_e?Ae.data=_e:(_e=Lp(a),_e!==null&&(Ae.data=_e)))),(_e=Fx?Ix(e,a):Bx(e,a))&&(Ae=fc(et,"onBeforeInput"),0<Ae.length&&(ee=new wp("onBeforeInput","beforeinput",null,a,dt),_t.push({event:ee,listeners:Ae}),ee.data=_e)),Dy(_t,e,et,a,dt)}vg(_t,i)})}function Oo(e,i,a){return{instance:e,listener:i,currentTarget:a}}function fc(e,i){for(var a=i+"Capture",l=[];e!==null;){var u=e,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=to(e,a),u!=null&&l.unshift(Oo(e,u,d)),u=to(e,i),u!=null&&l.push(Oo(e,u,d))),e.tag===3)return l;e=e.return}return[]}function Oy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function xg(e,i,a,l,u){for(var d=i._reactName,y=[];a!==null&&a!==l;){var A=a,G=A.alternate,et=A.stateNode;if(A=A.tag,G!==null&&G===l)break;A!==5&&A!==26&&A!==27||et===null||(G=et,u?(et=to(a,d),et!=null&&y.unshift(Oo(a,et,G))):u||(et=to(a,d),et!=null&&y.push(Oo(a,et,G)))),a=a.return}y.length!==0&&e.push({event:i,listeners:y})}var Py=/\r\n?/g,zy=/\u0000|\uFFFD/g;function yg(e){return(typeof e=="string"?e:""+e).replace(Py,`
`).replace(zy,"")}function Sg(e,i){return i=yg(i),yg(e)===i}function Xe(e,i,a,l,u,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||dn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&dn(e,""+l);break;case"className":re(e,"class",l);break;case"tabIndex":re(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":re(e,a,l);break;case"style":Xs(e,l,d);break;case"data":if(i!=="object"){re(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=vl(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xe(e,i,"name",u.name,u,null),Xe(e,i,"formEncType",u.formEncType,u,null),Xe(e,i,"formMethod",u.formMethod,u,null),Xe(e,i,"formTarget",u.formTarget,u,null)):(Xe(e,i,"encType",u.encType,u,null),Xe(e,i,"method",u.method,u,null),Xe(e,i,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=vl(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Zi);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=vl(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Me("beforetoggle",e),Me("toggle",e),$t(e,"popover",l);break;case"xlinkActuate":te(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":te(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":te(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":te(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":te(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":te(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":te(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":$t(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ux.get(a)||a,$t(e,a,l))}}function Kf(e,i,a,l,u,d){switch(a){case"style":Xs(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(s(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof l=="string"?dn(e,l):(typeof l=="number"||typeof l=="bigint")&&dn(e,""+l);break;case"onScroll":l!=null&&Me("scroll",e);break;case"onScrollEnd":l!=null&&Me("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ot.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),i=a.slice(2,u?a.length-7:void 0),d=e[Sn]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,u),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,u);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):$t(e,a,l)}}}function Dn(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",e),Me("load",e);var l=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(e,i,d,y,a,null)}}u&&Xe(e,i,"srcSet",a.srcSet,a,null),l&&Xe(e,i,"src",a.src,a,null);return;case"input":Me("invalid",e);var A=d=y=u=null,G=null,et=null;for(l in a)if(a.hasOwnProperty(l)){var dt=a[l];if(dt!=null)switch(l){case"name":u=dt;break;case"type":y=dt;break;case"checked":G=dt;break;case"defaultChecked":et=dt;break;case"value":d=dt;break;case"defaultValue":A=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(s(137,i));break;default:Xe(e,i,l,dt,a,null)}}ji(e,d,A,G,et,y,u,!1);return;case"select":Me("invalid",e),l=y=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":y=A;break;case"multiple":l=A;default:Xe(e,i,u,A,a,null)}i=d,a=y,e.multiple=!!l,i!=null?ui(e,!!l,i,!1):a!=null&&ui(e,!!l,a,!0);return;case"textarea":Me("invalid",e),d=u=l=null;for(y in a)if(a.hasOwnProperty(y)&&(A=a[y],A!=null))switch(y){case"value":l=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Xe(e,i,y,A,a,null)}En(e,l,u,d);return;case"option":for(G in a)a.hasOwnProperty(G)&&(l=a[G],l!=null)&&(G==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Xe(e,i,G,l,a,null));return;case"dialog":Me("beforetoggle",e),Me("toggle",e),Me("cancel",e),Me("close",e);break;case"iframe":case"object":Me("load",e);break;case"video":case"audio":for(l=0;l<Lo.length;l++)Me(Lo[l],e);break;case"image":Me("error",e),Me("load",e);break;case"details":Me("toggle",e);break;case"embed":case"source":case"link":Me("error",e),Me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(l=a[et],l!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(e,i,et,l,a,null)}return;default:if(bi(i)){for(dt in a)a.hasOwnProperty(dt)&&(l=a[dt],l!==void 0&&Kf(e,i,dt,l,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(l=a[A],l!=null&&Xe(e,i,A,l,a,null))}function Fy(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,y=null,A=null,G=null,et=null,dt=null;for(lt in a){var _t=a[lt];if(a.hasOwnProperty(lt)&&_t!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":G=_t;default:l.hasOwnProperty(lt)||Xe(e,i,lt,null,l,_t)}}for(var st in l){var lt=l[st];if(_t=a[st],l.hasOwnProperty(st)&&(lt!=null||_t!=null))switch(st){case"type":d=lt;break;case"name":u=lt;break;case"checked":et=lt;break;case"defaultChecked":dt=lt;break;case"value":y=lt;break;case"defaultValue":A=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,i));break;default:lt!==_t&&Xe(e,i,st,lt,l,_t)}}Mn(e,y,A,G,et,dt,d,u);return;case"select":lt=y=A=st=null;for(d in a)if(G=a[d],a.hasOwnProperty(d)&&G!=null)switch(d){case"value":break;case"multiple":lt=G;default:l.hasOwnProperty(d)||Xe(e,i,d,null,l,G)}for(u in l)if(d=l[u],G=a[u],l.hasOwnProperty(u)&&(d!=null||G!=null))switch(u){case"value":st=d;break;case"defaultValue":A=d;break;case"multiple":y=d;default:d!==G&&Xe(e,i,u,d,l,G)}i=A,a=y,l=lt,st!=null?ui(e,!!a,st,!1):!!l!=!!a&&(i!=null?ui(e,!!a,i,!0):ui(e,!!a,a?[]:"",!1));return;case"textarea":lt=st=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Xe(e,i,A,null,l,u)}for(y in l)if(u=l[y],d=a[y],l.hasOwnProperty(y)&&(u!=null||d!=null))switch(y){case"value":st=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==d&&Xe(e,i,y,u,l,d)}Be(e,st,lt);return;case"option":for(var Qt in a)st=a[Qt],a.hasOwnProperty(Qt)&&st!=null&&!l.hasOwnProperty(Qt)&&(Qt==="selected"?e.selected=!1:Xe(e,i,Qt,null,l,st));for(G in l)st=l[G],lt=a[G],l.hasOwnProperty(G)&&st!==lt&&(st!=null||lt!=null)&&(G==="selected"?e.selected=st&&typeof st!="function"&&typeof st!="symbol":Xe(e,i,G,st,l,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ce in a)st=a[ce],a.hasOwnProperty(ce)&&st!=null&&!l.hasOwnProperty(ce)&&Xe(e,i,ce,null,l,st);for(et in l)if(st=l[et],lt=a[et],l.hasOwnProperty(et)&&st!==lt&&(st!=null||lt!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(s(137,i));break;default:Xe(e,i,et,st,l,lt)}return;default:if(bi(i)){for(var We in a)st=a[We],a.hasOwnProperty(We)&&st!==void 0&&!l.hasOwnProperty(We)&&Kf(e,i,We,void 0,l,st);for(dt in l)st=l[dt],lt=a[dt],!l.hasOwnProperty(dt)||st===lt||st===void 0&&lt===void 0||Kf(e,i,dt,st,l,lt);return}}for(var Z in a)st=a[Z],a.hasOwnProperty(Z)&&st!=null&&!l.hasOwnProperty(Z)&&Xe(e,i,Z,null,l,st);for(_t in l)st=l[_t],lt=a[_t],!l.hasOwnProperty(_t)||st===lt||st==null&&lt==null||Xe(e,i,_t,st,l,lt)}function Mg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Iy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var u=a[l],d=u.transferSize,y=u.initiatorType,A=u.duration;if(d&&A&&Mg(y)){for(y=0,A=u.responseEnd,l+=1;l<a.length;l++){var G=a[l],et=G.startTime;if(et>A)break;var dt=G.transferSize,_t=G.initiatorType;dt&&Mg(_t)&&(G=G.responseEnd,y+=dt*(G<A?1:(A-et)/(G-et)))}if(--l,i+=8*(d+y)/(u.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Jf=null,$f=null;function hc(e){return e.nodeType===9?e:e.ownerDocument}function bg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Eg(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function th(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var eh=null;function By(){var e=window.event;return e&&e.type==="popstate"?e===eh?!1:(eh=e,!0):(eh=null,!1)}var Tg=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(e){return Ag.resolve(null).then(e).catch(Vy)}:Tg;function Vy(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function wg(e,i){var a=i,l=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(u),Sr(i);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Po(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Po(a);for(var d=a.firstChild;d;){var y=d.nextSibling,A=d.nodeName;d[ls]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&Po(e.ownerDocument.body);a=u}while(a);Sr(i)}function Cg(e,i){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function nh(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":nh(a),$r(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ky(e,i,a,l){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ls])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=vi(e.nextSibling),e===null)break}return null}function Xy(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=vi(e.nextSibling),e===null))return null;return e}function Rg(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=vi(e.nextSibling),e===null))return null;return e}function ih(e){return e.data==="$?"||e.data==="$~"}function ah(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Wy(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function vi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var sh=null;function Dg(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return vi(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function Ug(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function Ng(e,i,a){switch(i=hc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Po(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);$r(e)}var _i=new Map,Lg=new Set;function dc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fa=V.d;V.d={f:qy,r:Yy,D:jy,C:Zy,L:Qy,m:Ky,X:$y,S:Jy,M:tS};function qy(){var e=fa.f(),i=ac();return e||i}function Yy(e){var i=Aa(e);i!==null&&i.tag===5&&i.type==="form"?Qm(i):fa.r(e)}var _r=typeof document>"u"?null:document;function Og(e,i,a){var l=_r;if(l&&typeof i=="string"&&i){var u=he(i);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Lg.has(u)||(Lg.add(u),e={rel:e,crossOrigin:a,href:i},l.querySelector(u)===null&&(i=l.createElement("link"),Dn(i,"link",e),w(i),l.head.appendChild(i)))}}function jy(e){fa.D(e),Og("dns-prefetch",e,null)}function Zy(e,i){fa.C(e,i),Og("preconnect",e,i)}function Qy(e,i,a){fa.L(e,i,a);var l=_r;if(l&&e&&i){var u='link[rel="preload"][as="'+he(i)+'"]';i==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+he(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+he(a.imageSizes)+'"]')):u+='[href="'+he(e)+'"]';var d=u;switch(i){case"style":d=xr(e);break;case"script":d=yr(e)}_i.has(d)||(e=g({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),_i.set(d,e),l.querySelector(u)!==null||i==="style"&&l.querySelector(zo(d))||i==="script"&&l.querySelector(Fo(d))||(i=l.createElement("link"),Dn(i,"link",e),w(i),l.head.appendChild(i)))}}function Ky(e,i){fa.m(e,i);var a=_r;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",u='link[rel="modulepreload"][as="'+he(l)+'"][href="'+he(e)+'"]',d=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=yr(e)}if(!_i.has(d)&&(e=g({rel:"modulepreload",href:e},i),_i.set(d,e),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fo(d)))return}l=a.createElement("link"),Dn(l,"link",e),w(l),a.head.appendChild(l)}}}function Jy(e,i,a){fa.S(e,i,a);var l=_r;if(l&&e){var u=wa(l).hoistableStyles,d=xr(e);i=i||"default";var y=u.get(d);if(!y){var A={loading:0,preload:null};if(y=l.querySelector(zo(d)))A.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},a),(a=_i.get(d))&&rh(e,a);var G=y=l.createElement("link");w(G),Dn(G,"link",e),G._p=new Promise(function(et,dt){G.onload=et,G.onerror=dt}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,pc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:A},u.set(d,y)}}}function $y(e,i){fa.X(e,i);var a=_r;if(a&&e){var l=wa(a).hoistableScripts,u=yr(e),d=l.get(u);d||(d=a.querySelector(Fo(u)),d||(e=g({src:e,async:!0},i),(i=_i.get(u))&&oh(e,i),d=a.createElement("script"),w(d),Dn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function tS(e,i){fa.M(e,i);var a=_r;if(a&&e){var l=wa(a).hoistableScripts,u=yr(e),d=l.get(u);d||(d=a.querySelector(Fo(u)),d||(e=g({src:e,async:!0,type:"module"},i),(i=_i.get(u))&&oh(e,i),d=a.createElement("script"),w(d),Dn(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(u,d))}}function Pg(e,i,a,l){var u=(u=it.current)?dc(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=xr(a.href),a=wa(u).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=xr(a.href);var d=wa(u).hoistableStyles,y=d.get(e);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=u.querySelector(zo(e)))&&!d._p&&(y.instance=d,y.state.loading=5),_i.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(e,a),d||eS(u,e,a,y.state))),i&&l===null)throw Error(s(528,""));return y}if(i&&l!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=yr(a),a=wa(u).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function xr(e){return'href="'+he(e)+'"'}function zo(e){return'link[rel="stylesheet"]['+e+"]"}function zg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function eS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),Dn(i,"link",a),w(i),e.head.appendChild(i))}function yr(e){return'[src="'+he(e)+'"]'}function Fo(e){return"script[async]"+e}function Fg(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+he(a.href)+'"]');if(l)return i.instance=l,w(l),l;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),w(l),Dn(l,"style",u),pc(l,a.precedence,e),i.instance=l;case"stylesheet":u=xr(a.href);var d=e.querySelector(zo(u));if(d)return i.state.loading|=4,i.instance=d,w(d),d;l=zg(a),(u=_i.get(u))&&rh(l,u),d=(e.ownerDocument||e).createElement("link"),w(d);var y=d;return y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),Dn(d,"link",l),i.state.loading|=4,pc(d,a.precedence,e),i.instance=d;case"script":return d=yr(a.src),(u=e.querySelector(Fo(d)))?(i.instance=u,w(u),u):(l=a,(u=_i.get(d))&&(l=g({},a),oh(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),w(u),Dn(u,"link",l),e.head.appendChild(u),i.instance=u);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,pc(l,a.precedence,e));return i.instance}function pc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,d=u,y=0;y<l.length;y++){var A=l[y];if(A.dataset.precedence===i)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function rh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function oh(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var mc=null;function Ig(e,i,a){if(mc===null){var l=new Map,u=mc=new Map;u.set(a,l)}else u=mc,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var d=a[u];if(!(d[ls]||d[on]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=e+y;var A=l.get(y);A?A.push(d):l.set(y,[d])}}return l}function Bg(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function nS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Hg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function iS(e,i,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=xr(l.href),d=i.querySelector(zo(u));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=gc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=d,w(d);return}d=i.ownerDocument||i,l=zg(l),(u=_i.get(u))&&rh(l,u),d=d.createElement("link"),w(d);var y=d;y._p=new Promise(function(A,G){y.onload=A,y.onerror=G}),Dn(d,"link",l),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=gc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var lh=0;function aS(e,i){return e.stylesheets&&e.count===0&&_c(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&lh===0&&(lh=62500*Iy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_c(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>lh?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function gc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_c(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function _c(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,i.forEach(sS,e),vc=null,gc.call(e))}function sS(e,i){if(!(i.state.loading&4)){var a=vc.get(e);if(a)var l=a.get(null);else{a=new Map,vc.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var y=u[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),l=y)}l&&a.set(null,l)}u=i.instance,y=u.getAttribute("data-precedence"),d=a.get(y)||l,d===l&&a.set(null,u),a.set(y,u),this.count++,l=gc.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),d?d.parentNode.insertBefore(u,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),i.state.loading|=4}}var Io={$$typeof:U,Provider:null,Consumer:null,_currentValue:nt,_currentValue2:nt,_threadCount:0};function rS(e,i,a,l,u,d,y,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Re(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Re(0),this.hiddenUpdates=Re(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function Gg(e,i,a,l,u,d,y,A,G,et,dt,_t){return e=new rS(e,i,a,y,G,et,dt,_t,A),i=1,d===!0&&(i|=24),d=Jn(3,null,null,i),e.current=d,d.stateNode=e,i=Hu(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},Xu(d),e}function Vg(e){return e?(e=Ks,e):Ks}function kg(e,i,a,l,u,d){u=Vg(u),l.context===null?l.context=u:l.pendingContext=u,l=Oa(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Pa(e,l,i),a!==null&&(Yn(a,e,i),go(a,e,i))}function Xg(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function ch(e,i){Xg(e,i),(e=e.alternate)&&Xg(e,i)}function Wg(e){if(e.tag===13||e.tag===31){var i=ds(e,67108864);i!==null&&Yn(i,e,67108864),ch(e,67108864)}}function qg(e){if(e.tag===13||e.tag===31){var i=ii();i=Qr(i);var a=ds(e,i);a!==null&&Yn(a,e,i),ch(e,i)}}var xc=!0;function oS(e,i,a,l){var u=z.T;z.T=null;var d=V.p;try{V.p=2,uh(e,i,a,l)}finally{V.p=d,z.T=u}}function lS(e,i,a,l){var u=z.T;z.T=null;var d=V.p;try{V.p=8,uh(e,i,a,l)}finally{V.p=d,z.T=u}}function uh(e,i,a,l){if(xc){var u=fh(l);if(u===null)Qf(e,i,l,yc,a),jg(e,l);else if(uS(u,e,i,a,l))l.stopPropagation();else if(jg(e,l),i&4&&-1<cS.indexOf(e)){for(;u!==null;){var d=Aa(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=At(d.pendingLanes);if(y!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;y;){var G=1<<31-Xt(y);A.entanglements[1]|=G,y&=~G}Fi(d),(ze&6)===0&&(nc=b()+500,No(0))}}break;case 31:case 13:A=ds(d,2),A!==null&&Yn(A,d,2),ac(),ch(d,2)}if(d=fh(l),d===null&&Qf(e,i,l,yc,a),d===u)break;u=d}u!==null&&l.stopPropagation()}else Qf(e,i,l,null,a)}}function fh(e){return e=hu(e),hh(e)}var yc=null;function hh(e){if(yc=null,e=Ta(e),e!==null){var i=c(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===31){if(e=h(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return yc=e,null}function Yg(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case ut:return 2;case St:return 8;case ft:case Jt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var dh=!1,qa=null,Ya=null,ja=null,Bo=new Map,Ho=new Map,Za=[],cS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jg(e,i){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":ja=null;break;case"pointerover":case"pointerout":Bo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ho.delete(i.pointerId)}}function Go(e,i,a,l,u,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[u]},i!==null&&(i=Aa(i),i!==null&&Wg(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,u!==null&&i.indexOf(u)===-1&&i.push(u),e)}function uS(e,i,a,l,u){switch(i){case"focusin":return qa=Go(qa,e,i,a,l,u),!0;case"dragenter":return Ya=Go(Ya,e,i,a,l,u),!0;case"mouseover":return ja=Go(ja,e,i,a,l,u),!0;case"pointerover":var d=u.pointerId;return Bo.set(d,Go(Bo.get(d)||null,e,i,a,l,u)),!0;case"gotpointercapture":return d=u.pointerId,Ho.set(d,Go(Ho.get(d)||null,e,i,a,l,u)),!0}return!1}function Zg(e){var i=Ta(e.target);if(i!==null){var a=c(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Li(e.priority,function(){qg(a)});return}}else if(i===31){if(i=h(a),i!==null){e.blockedOn=i,Li(e.priority,function(){qg(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Sc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=fh(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);fu=l,a.target.dispatchEvent(l),fu=null}else return i=Aa(a),i!==null&&Wg(i),e.blockedOn=a,!1;i.shift()}return!0}function Qg(e,i,a){Sc(e)&&a.delete(i)}function fS(){dh=!1,qa!==null&&Sc(qa)&&(qa=null),Ya!==null&&Sc(Ya)&&(Ya=null),ja!==null&&Sc(ja)&&(ja=null),Bo.forEach(Qg),Ho.forEach(Qg)}function Mc(e,i){e.blockedOn===i&&(e.blockedOn=null,dh||(dh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,fS)))}var bc=null;function Kg(e){bc!==e&&(bc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){bc===e&&(bc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],u=e[i+2];if(typeof l!="function"){if(hh(l||a)===null)continue;break}var d=Aa(a);d!==null&&(e.splice(i,3),i-=3,ff(d,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function Sr(e){function i(G){return Mc(G,e)}qa!==null&&Mc(qa,e),Ya!==null&&Mc(Ya,e),ja!==null&&Mc(ja,e),Bo.forEach(i),Ho.forEach(i);for(var a=0;a<Za.length;a++){var l=Za[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Zg(a),a.blockedOn===null&&Za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],d=a[l+1],y=u[Sn]||null;if(typeof d=="function")y||Kg(a);else if(y){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,y=d[Sn]||null)A=y.formAction;else if(hh(u)!==null)continue}else A=y.action;typeof A=="function"?a[l+1]=A:(a.splice(l,3),l-=3),Kg(a)}}}function Jg(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function i(){u!==null&&(u(),u=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),u!==null&&(u(),u=null)}}}function ph(e){this._internalRoot=e}Ec.prototype.render=ph.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,l=ii();kg(a,l,e,i,null,null)},Ec.prototype.unmount=ph.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;kg(e.current,2,null,e,null,null),ac(),i[Mi]=null}};function Ec(e){this._internalRoot=e}Ec.prototype.unstable_scheduleHydration=function(e){if(e){var i=Kr();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Za.length&&i!==0&&i<Za[a].priority;a++);Za.splice(a,0,e),a===0&&Zg(e)}};var $g=t.version;if($g!=="19.2.4")throw Error(s(527,$g,"19.2.4"));V.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var hS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{Tt=Tc.inject(hS),Ct=Tc}catch{}}return ko.createRoot=function(e,i){if(!o(e))throw Error(s(299));var a=!1,l="",u=r0,d=o0,y=l0;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(u=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=Gg(e,1,!1,null,null,a,l,null,u,d,y,Jg),e[Mi]=i.current,Zf(e),new ph(i)},ko.hydrateRoot=function(e,i,a){if(!o(e))throw Error(s(299));var l=!1,u="",d=r0,y=o0,A=l0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),i=Gg(e,1,!0,i,a??null,l,u,G,d,y,A,Jg),i.context=Vg(null),a=i.current,l=ii(),l=Qr(l),u=Oa(l),u.callback=null,Pa(a,u,l),a=l,i.current.lanes=a,On(i,a),Fi(i),e[Mi]=i.current,Zf(e),new Ec(i)},ko.version="19.2.4",ko}var cv;function bS(){if(cv)return vh.exports;cv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),vh.exports=MS(),vh.exports}var ES=bS(),Sh,uv;function TS(){if(uv)return Sh;uv=1;var r={linear:function(t,n,s,o){var c=s-n;return c*t/o+n},easeInQuad:function(t,n,s,o){var c=s-n;return c*(t/=o)*t+n},easeOutQuad:function(t,n,s,o){var c=s-n;return-c*(t/=o)*(t-2)+n},easeInOutQuad:function(t,n,s,o){var c=s-n;return(t/=o/2)<1?c/2*t*t+n:-c/2*(--t*(t-2)-1)+n},easeInCubic:function(t,n,s,o){var c=s-n;return c*(t/=o)*t*t+n},easeOutCubic:function(t,n,s,o){var c=s-n;return c*((t=t/o-1)*t*t+1)+n},easeInOutCubic:function(t,n,s,o){var c=s-n;return(t/=o/2)<1?c/2*t*t*t+n:c/2*((t-=2)*t*t+2)+n},easeInQuart:function(t,n,s,o){var c=s-n;return c*(t/=o)*t*t*t+n},easeOutQuart:function(t,n,s,o){var c=s-n;return-c*((t=t/o-1)*t*t*t-1)+n},easeInOutQuart:function(t,n,s,o){var c=s-n;return(t/=o/2)<1?c/2*t*t*t*t+n:-c/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(t,n,s,o){var c=s-n;return c*(t/=o)*t*t*t*t+n},easeOutQuint:function(t,n,s,o){var c=s-n;return c*((t=t/o-1)*t*t*t*t+1)+n},easeInOutQuint:function(t,n,s,o){var c=s-n;return(t/=o/2)<1?c/2*t*t*t*t*t+n:c/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(t,n,s,o){var c=s-n;return-c*Math.cos(t/o*(Math.PI/2))+c+n},easeOutSine:function(t,n,s,o){var c=s-n;return c*Math.sin(t/o*(Math.PI/2))+n},easeInOutSine:function(t,n,s,o){var c=s-n;return-c/2*(Math.cos(Math.PI*t/o)-1)+n},easeInExpo:function(t,n,s,o){var c=s-n;return t==0?n:c*Math.pow(2,10*(t/o-1))+n},easeOutExpo:function(t,n,s,o){var c=s-n;return t==o?n+c:c*(-Math.pow(2,-10*t/o)+1)+n},easeInOutExpo:function(t,n,s,o){var c=s-n;return t===0?n:t===o?n+c:(t/=o/2)<1?c/2*Math.pow(2,10*(t-1))+n:c/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(t,n,s,o){var c=s-n;return-c*(Math.sqrt(1-(t/=o)*t)-1)+n},easeOutCirc:function(t,n,s,o){var c=s-n;return c*Math.sqrt(1-(t=t/o-1)*t)+n},easeInOutCirc:function(t,n,s,o){var c=s-n;return(t/=o/2)<1?-c/2*(Math.sqrt(1-t*t)-1)+n:c/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(t,n,s,o){var c=s-n,f,h,m;return m=1.70158,h=0,f=c,t===0?n:(t/=o)===1?n+c:(h||(h=o*.3),f<Math.abs(c)?(f=c,m=h/4):m=h/(2*Math.PI)*Math.asin(c/f),-(f*Math.pow(2,10*(t-=1))*Math.sin((t*o-m)*(2*Math.PI)/h))+n)},easeOutElastic:function(t,n,s,o){var c=s-n,f,h,m;return m=1.70158,h=0,f=c,t===0?n:(t/=o)===1?n+c:(h||(h=o*.3),f<Math.abs(c)?(f=c,m=h/4):m=h/(2*Math.PI)*Math.asin(c/f),f*Math.pow(2,-10*t)*Math.sin((t*o-m)*(2*Math.PI)/h)+c+n)},easeInOutElastic:function(t,n,s,o){var c=s-n,f,h,m;return m=1.70158,h=0,f=c,t===0?n:(t/=o/2)===2?n+c:(h||(h=o*(.3*1.5)),f<Math.abs(c)?(f=c,m=h/4):m=h/(2*Math.PI)*Math.asin(c/f),t<1?-.5*(f*Math.pow(2,10*(t-=1))*Math.sin((t*o-m)*(2*Math.PI)/h))+n:f*Math.pow(2,-10*(t-=1))*Math.sin((t*o-m)*(2*Math.PI)/h)*.5+c+n)},easeInBack:function(t,n,s,o,c){var f=s-n;return c===void 0&&(c=1.70158),f*(t/=o)*t*((c+1)*t-c)+n},easeOutBack:function(t,n,s,o,c){var f=s-n;return c===void 0&&(c=1.70158),f*((t=t/o-1)*t*((c+1)*t+c)+1)+n},easeInOutBack:function(t,n,s,o,c){var f=s-n;return c===void 0&&(c=1.70158),(t/=o/2)<1?f/2*(t*t*(((c*=1.525)+1)*t-c))+n:f/2*((t-=2)*t*(((c*=1.525)+1)*t+c)+2)+n},easeInBounce:function(t,n,s,o){var c=s-n,f;return f=r.easeOutBounce(o-t,0,c,o),c-f+n},easeOutBounce:function(t,n,s,o){var c=s-n;return(t/=o)<1/2.75?c*(7.5625*t*t)+n:t<2/2.75?c*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?c*(7.5625*(t-=2.25/2.75)*t+.9375)+n:c*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(t,n,s,o){var c=s-n,f;return t<o/2?(f=r.easeInBounce(t*2,0,c,o),f*.5+n):(f=r.easeOutBounce(t*2-o,0,c,o),f*.5+c*.5+n)}};return Sh=r,Sh}var AS=TS();function wS(r){return r*Math.PI/180}function ri(r,t){return r+Math.random()*(t-r)}function CS(r,t){return Math.floor(r+Math.random()*(t-r+1))}var el;(function(r){r[r.Circle=0]="Circle",r[r.Square=1]="Square",r[r.Strip=2]="Strip"})(el||(el={}));var is;(function(r){r[r.Positive=1]="Positive",r[r.Negative=-1]="Negative"})(is||(is={}));const RS=1e3/60;class DS{constructor(t,n,s,o){this.getOptions=n;const{colors:c,initialVelocityX:f,initialVelocityY:h}=this.getOptions();this.context=t,this.x=s,this.y=o,this.w=ri(5,20),this.h=ri(5,20),this.radius=ri(5,10),this.vx=typeof f=="number"?ri(-f,f):ri(f.min,f.max),this.vy=typeof h=="number"?ri(-h,0):ri(h.min,h.max),this.shape=CS(0,2),this.angle=wS(ri(0,360)),this.angularSpin=ri(-.2,.2),this.color=c[Math.floor(Math.random()*c.length)],this.rotateY=ri(0,1),this.rotationDirection=ri(0,1)?is.Positive:is.Negative}update(t){const{gravity:n,wind:s,friction:o,opacity:c,drawShape:f}=this.getOptions(),h=t/RS;this.x+=this.vx*h,this.y+=this.vy*h,this.vy+=n*h,this.vx+=s*h,this.vx*=o**h,this.vy*=o**h,this.rotateY>=1&&this.rotationDirection===is.Positive?this.rotationDirection=is.Negative:this.rotateY<=-1&&this.rotationDirection===is.Negative&&(this.rotationDirection=is.Positive);const m=.1*this.rotationDirection*h;if(this.rotateY+=m,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=c,this.context.lineCap="round",this.context.lineWidth=2,f&&typeof f=="function")f.call(this,this.context);else switch(this.shape){case el.Circle:{this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break}case el.Square:{this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break}case el.Strip:{this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h);break}}this.context.closePath(),this.context.restore()}}class US{constructor(t,n){this.x=0,this.y=0,this.w=0,this.h=0,this.lastNumberOfPieces=0,this.tweenProgress=0,this.tweenFrom=0,this.particles=[],this.particlesGenerated=0,this.removeParticleAt=o=>{this.particles.splice(o,1)},this.getParticle=()=>{const o=ri(this.x,this.w+this.x),c=ri(this.y,this.h+this.y);return new DS(this.context,this.getOptions,o,c)},this.animate=o=>{const{canvas:c,context:f,particlesGenerated:h,lastNumberOfPieces:m}=this,{run:p,recycle:v,numberOfPieces:g,debug:_,tweenFunction:S,tweenDuration:E}=this.getOptions();if(!p)return!1;const C=this.particles.length,M=v?C:h;if(M<g){m!==g&&(this.tweenProgress=0,this.tweenFrom=M,this.lastNumberOfPieces=g),this.tweenProgress=Math.min(E,Math.max(0,this.tweenProgress+o));const x=S(this.tweenProgress,this.tweenFrom,g,E),P=Math.round(x-M);for(let U=0;U<P;U++)this.particles.push(this.getParticle());this.particlesGenerated+=P}_&&(f.font="12px sans-serif",f.fillStyle="#333",f.textAlign="right",f.fillText(`Particles: ${C}`,c.width-10,c.height-20));for(let x=this.particles.length-1;x>=0;x--){const P=this.particles[x];P.update(o),(P.y>c.height||P.y<-100||P.x>c.width+100||P.x<-100)&&(v&&M<=g?this.particles[x]=this.getParticle():this.removeParticleAt(x))}return C>0||M<g},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.getOptions=n}}const ip={width:typeof window<"u"?window.innerWidth:300,height:typeof window<"u"?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:AS.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0};class NS{constructor(t,n){this.lastFrameTime=0,this.setOptionsWithDefaults=o=>{const c={confettiSource:{x:0,y:0,w:this.canvas.width,h:0}};this._options={...c,...ip,...o},Object.assign(this,o.confettiSource)},this.update=(o=0)=>{const{options:{run:c,onConfettiComplete:f,frameRate:h},canvas:m,context:p}=this,v=Math.min(o-this.lastFrameTime,50);if(h&&v<1e3/h){this.rafId=requestAnimationFrame(this.update);return}this.lastFrameTime=o-(h?v%h:0),c&&(p.fillStyle="white",p.clearRect(0,0,m.width,m.height)),this.generator.animate(v)?this.rafId=requestAnimationFrame(this.update):(f&&typeof f=="function"&&this.generator.particlesGenerated>0&&f.call(this,this),this._options.run=!1)},this.reset=()=>{this.generator&&this.generator.particlesGenerated>0&&(this.generator.particlesGenerated=0,this.generator.particles=[],this.generator.lastNumberOfPieces=0)},this.stop=()=>{this.options={run:!1},this.rafId&&(cancelAnimationFrame(this.rafId),this.rafId=void 0)},this.canvas=t;const s=this.canvas.getContext("2d");if(!s)throw new Error("Could not get canvas context");this.context=s,this.generator=new US(this.canvas,()=>this.options),this.options=n,this.update()}get options(){return this._options}set options(t){const n=this._options?.run,s=this._options?.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),typeof t.recycle=="boolean"&&t.recycle&&s===!1&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),typeof t.run=="boolean"&&t.run&&n===!1&&this.update()}}const LS=ss.createRef();class ap extends ss.Component{constructor(t){super(t),this.canvas=ss.createRef(),this.canvas=t.canvasRef||LS}componentDidMount(){if(this.canvas.current){const t=Mh(this.props)[0];this.confetti=new NS(this.canvas.current,t)}}componentDidUpdate(){const t=Mh(this.props)[0];this.confetti&&(this.confetti.options=t)}componentWillUnmount(){this.confetti&&this.confetti.stop(),this.confetti=void 0}render(){const[t,n]=Mh(this.props),s={zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0,...n.style};return pt.jsx("canvas",{width:t.width,height:t.height,ref:this.canvas,...n,style:s})}}ap.defaultProps={...ip};ap.displayName="ReactConfetti";function Mh(r){const t={},n={},s={},o=[...Object.keys(ip),"confettiSource","drawShape","onConfettiComplete","frameRate"],c=["canvasRef"];for(const f in r){const h=r[f];o.includes(f)?t[f]=h:c.includes(f)?c[f]=h:s[f]=h}return[t,s,n]}const OS=ss.forwardRef((r,t)=>pt.jsx(ap,{canvasRef:t,...r})),PS=[{title:"Hey Lopamudra... 🌹",message:"From the moment I met you, I knew you were different. Your smile lights up every room, and your laugh is the most beautiful sound I've ever heard. You're not just cool and funny—you're incredibly smart, kind, and you have this amazing way of making everyone around you feel special. I love how we can talk about books for hours and then switch to discussing the latest romcom we watched."},{title:"What I Love About You 💫",message:"Lopamudra, you make me smile even on my worst days. Your sense of humor is infectious, and the way you understand me without me having to explain everything is magical. I love how passionate you get when talking about a book you've just finished, and how you cry at the same romcom scenes every time we watch them together. You're genuine, loving, and absolutely wonderful."},{title:"Our Perfect Connection 💭",message:"We share so much, Lopamudra—our love for books, our appreciation for good stories, our ability to laugh together until our stomachs hurt. You get my jokes, you understand my thoughts, and somehow you always know exactly what to say. Whether we're discussing the latest novel we've read or debating which romcom couple is the cutest, every conversation with you feels like home."},{title:"You Make Me Better 💕",message:"Lopamudra, you inspire me to be a better person every single day. Your kindness, your intelligence, your way of seeing the world—it all makes me want to grow and become someone worthy of your amazing heart. You make me laugh when I'm sad, you listen when I need to talk, and you understand me in ways I never thought possible."},{title:"My Heart's Truth 🌟",message:"I love everything about you, Lopamudra. I love how you get excited about new book releases, how you quote your favorite movies, how you make even the simplest moments feel special. You're cool without trying, funny without forcing it, and loving in the most natural way. You've become such an important part of my life, and I can't imagine it without you."},{title:"Our Beautiful Moments 💬",message:"Every moment we've shared has been precious, Lopamudra. From our book discussions to our movie marathons, from our inside jokes to our comfortable silences—each memory is a treasure. You make ordinary days extraordinary just by being yourself. Your presence in my life has brought so much joy, laughter, and love."},{title:"Your Bengali Magic ✨",message:"Lopamudra, I swear you've done some Bengali jadoo on me! The way you speak, your cultural richness, your traditions—everything about your Bengali heritage makes you even more enchanting. When you talk about your favorite Bengali books or share stories from your culture, I fall in love with you all over again. You're my beautiful Bengali princess! 👑"},{title:"My Wifeyy Forever 💍",message:"Lopamudra, calling you my 'wifeyy' isn't just cute—it's how I see our future. I dream of a lifetime with you, sharing morning teas, reading books together on lazy Sundays, and growing old while still laughing at each other's jokes. You're not just my girlfriend; you're my future wife, my partner, my everything. I want to spend forever making you happy."},{title:"Your Adorable Quirks 🥰",message:"Lopamudra, I love all your little quirks! The way you get excited about plot twists, how you dramatically react to romantic scenes, your cute expressions when you're thinking deeply about something. Even the way you argue about which book character is better—it's all so endearing. These little things make you uniquely you, and I cherish every single one."},{title:"Our Future Dreams 🌈",message:"I dream about our future together, Lopamudra. I see us traveling to new places, building a library of books we've read together, maybe even writing our own love story. I imagine cozy evenings where we're both reading different books but stealing glances at each other. I want to create a beautiful life with you, filled with love, laughter, and endless adventures."},{title:"You Complete Me 💖",message:"Before you, Lopamudra, I didn't know what it meant to feel complete. You've filled spaces in my heart I didn't even know were empty. Your love has made me whole, your presence has brought peace to my chaos, and your smile has become my favorite sight in the world. You're not just part of my life—you ARE my life."},{title:"This Valentine's Day 💝",message:"Lopamudra, I'm here with my heart wide open, asking you to be my Valentine. Not just for today, but for all the days to come. I want to share more books with you, watch more romcoms together, create more inside jokes, and build beautiful memories. You're amazing, and I'd be the luckiest person in the world if you'd be mine. Will you be my Valentine, Lopamudra? 🌹"}],yn={colors:{background:"#0a0a0a",heartPrimary:"#ff0844",particleColor:"#ff1744",textGlow:"rgba(255, 8, 68, 0.8)"},text:{question:"Lopamudra... Will You Be My",valentine:"Valentine? 💝",yesButton:"Yes, I will! 💕",maybeButton:"Let me think... 🌹",successTitle:"🎉 You Just Made Me The Happiest Person Alive! 🎉",successMessages:["Thank you for saying yes, Lopamudra! You've made my heart so full of joy 💕","I promise to cherish every moment we share together ✨","You're the most amazing person I know, and I'm so lucky 🌹","I can't wait to create beautiful memories with you, Lopamudra 💖","You've just made this the best Valentine's Day ever! 🙏"],compliments:PS.map((r,t)=>({title:r.title,message:r.message,delay:t*8e3}))},animation:{heartbeatSpeed:1.5,confettiPieces:400}},zS=()=>{const[r,t]=mn.useState({width:typeof window<"u"?window.innerWidth:1e3,height:typeof window<"u"?window.innerHeight:1e3});return mn.useEffect(()=>{const n=()=>{t({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),r};const sp="182",FS=0,fv=1,IS=2,Kc=1,__=2,Ko=3,os=0,Zn=1,_a=2,ya=0,Fr=1,hv=2,dv=3,pv=4,BS=5,Ls=100,HS=101,GS=102,VS=103,kS=104,XS=200,WS=201,qS=202,YS=203,ad=204,sd=205,jS=206,ZS=207,QS=208,KS=209,JS=210,$S=211,tM=212,eM=213,nM=214,rd=0,od=1,ld=2,Br=3,cd=4,ud=5,fd=6,hd=7,rp=0,iM=1,aM=2,Vi=0,x_=1,y_=2,S_=3,M_=4,b_=5,E_=6,T_=7,A_=300,Is=301,Hr=302,dd=303,pd=304,ru=306,md=1e3,xa=1001,gd=1002,Un=1003,sM=1004,Ac=1005,In=1006,bh=1007,zs=1008,li=1009,w_=1010,C_=1011,sl=1012,op=1013,Xi=1014,Hi=1015,Ma=1016,lp=1017,cp=1018,rl=1020,R_=35902,D_=35899,U_=1021,N_=1022,Ui=1023,ba=1026,Fs=1027,L_=1028,up=1029,Gr=1030,fp=1031,hp=1033,Jc=33776,$c=33777,tu=33778,eu=33779,vd=35840,_d=35841,xd=35842,yd=35843,Sd=36196,Md=37492,bd=37496,Ed=37488,Td=37489,Ad=37490,wd=37491,Cd=37808,Rd=37809,Dd=37810,Ud=37811,Nd=37812,Ld=37813,Od=37814,Pd=37815,zd=37816,Fd=37817,Id=37818,Bd=37819,Hd=37820,Gd=37821,Vd=36492,kd=36494,Xd=36495,Wd=36283,qd=36284,Yd=36285,jd=36286,rM=3200,O_=0,oM=1,as="",yi="srgb",Vr="srgb-linear",iu="linear",Ve="srgb",Mr=7680,mv=519,lM=512,cM=513,uM=514,dp=515,fM=516,hM=517,pp=518,dM=519,gv=35044,vv="300 es",Gi=2e3,au=2001;function P_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function su(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pM(){const r=su("canvas");return r.style.display="block",r}const _v={};function xv(...r){const t="THREE."+r.shift();console.log(t,...r)}function de(...r){const t="THREE."+r.shift();console.warn(t,...r)}function De(...r){const t="THREE."+r.shift();console.error(t,...r)}function ol(...r){const t=r.join(" ");t in _v||(_v[t]=!0,de(...r))}function mM(r,t,n){return new Promise(function(s,o){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}class Wr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(n)===-1&&s[t].push(n)}hasEventListener(t,n){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(n)!==-1}removeEventListener(t,n){const s=this._listeners;if(s===void 0)return;const o=s[t];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const s=n[t.type];if(s!==void 0){t.target=this;const o=s.slice(0);for(let c=0,f=o.length;c<f;c++)o[c].call(this,t);t.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eh=Math.PI/180,Zd=180/Math.PI;function qr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(zn[r&255]+zn[r>>8&255]+zn[r>>16&255]+zn[r>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[n&63|128]+zn[n>>8&255]+"-"+zn[n>>16&255]+zn[n>>24&255]+zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]).toLowerCase()}function be(r,t,n){return Math.max(t,Math.min(n,r))}function gM(r,t){return(r%t+t)%t}function Th(r,t,n){return(1-n)*r+n*t}function Xo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class qt{constructor(t=0,n=0){qt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,s=this.y,o=t.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y;return n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*o+t.x,this.y=c*o+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hl{constructor(t=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=s,this._w=o}static slerpFlat(t,n,s,o,c,f,h){let m=s[o+0],p=s[o+1],v=s[o+2],g=s[o+3],_=c[f+0],S=c[f+1],E=c[f+2],C=c[f+3];if(h<=0){t[n+0]=m,t[n+1]=p,t[n+2]=v,t[n+3]=g;return}if(h>=1){t[n+0]=_,t[n+1]=S,t[n+2]=E,t[n+3]=C;return}if(g!==C||m!==_||p!==S||v!==E){let M=m*_+p*S+v*E+g*C;M<0&&(_=-_,S=-S,E=-E,C=-C,M=-M);let x=1-h;if(M<.9995){const P=Math.acos(M),U=Math.sin(P);x=Math.sin(x*P)/U,h=Math.sin(h*P)/U,m=m*x+_*h,p=p*x+S*h,v=v*x+E*h,g=g*x+C*h}else{m=m*x+_*h,p=p*x+S*h,v=v*x+E*h,g=g*x+C*h;const P=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=P,p*=P,v*=P,g*=P}}t[n]=m,t[n+1]=p,t[n+2]=v,t[n+3]=g}static multiplyQuaternionsFlat(t,n,s,o,c,f){const h=s[o],m=s[o+1],p=s[o+2],v=s[o+3],g=c[f],_=c[f+1],S=c[f+2],E=c[f+3];return t[n]=h*E+v*g+m*S-p*_,t[n+1]=m*E+v*_+p*g-h*S,t[n+2]=p*E+v*S+h*_-m*g,t[n+3]=v*E-h*g-m*_-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,s,o){return this._x=t,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const s=t._x,o=t._y,c=t._z,f=t._order,h=Math.cos,m=Math.sin,p=h(s/2),v=h(o/2),g=h(c/2),_=m(s/2),S=m(o/2),E=m(c/2);switch(f){case"XYZ":this._x=_*v*g+p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g-_*S*E;break;case"YXZ":this._x=_*v*g+p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g+_*S*E;break;case"ZXY":this._x=_*v*g-p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g-_*S*E;break;case"ZYX":this._x=_*v*g-p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g+_*S*E;break;case"YZX":this._x=_*v*g+p*S*E,this._y=p*S*g+_*v*E,this._z=p*v*E-_*S*g,this._w=p*v*g-_*S*E;break;case"XZY":this._x=_*v*g-p*S*E,this._y=p*S*g-_*v*E,this._z=p*v*E+_*S*g,this._w=p*v*g+_*S*E;break;default:de("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const s=n/2,o=Math.sin(s);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,s=n[0],o=n[4],c=n[8],f=n[1],h=n[5],m=n[9],p=n[2],v=n[6],g=n[10],_=s+h+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-m)*S,this._y=(c-p)*S,this._z=(f-o)*S}else if(s>h&&s>g){const S=2*Math.sqrt(1+s-h-g);this._w=(v-m)/S,this._x=.25*S,this._y=(o+f)/S,this._z=(c+p)/S}else if(h>g){const S=2*Math.sqrt(1+h-s-g);this._w=(c-p)/S,this._x=(o+f)/S,this._y=.25*S,this._z=(m+v)/S}else{const S=2*Math.sqrt(1+g-s-h);this._w=(f-o)/S,this._x=(c+p)/S,this._y=(m+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let s=t.dot(n)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,n){const s=this.angleTo(t);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const s=t._x,o=t._y,c=t._z,f=t._w,h=n._x,m=n._y,p=n._z,v=n._w;return this._x=s*v+f*h+o*p-c*m,this._y=o*v+f*m+c*h-s*p,this._z=c*v+f*p+s*m-o*h,this._w=f*v-s*h-o*m-c*p,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let s=t._x,o=t._y,c=t._z,f=t._w,h=this.dot(t);h<0&&(s=-s,o=-o,c=-c,f=-f,h=-h);let m=1-n;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,n=Math.sin(n*p)/v,this._x=this._x*m+s*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this._onChangeCallback()}else this._x=this._x*m+s*n,this._y=this._y*m+o*n,this._z=this._z*m+c*n,this._w=this._w*m+f*n,this.normalize();return this}slerpQuaternions(t,n,s){return this.copy(t).slerp(n,s)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(t),o*Math.cos(t),c*Math.sin(n),c*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,n=0,s=0){j.prototype.isVector3=!0,this.x=t,this.y=n,this.z=s}set(t,n,s){return s===void 0&&(s=this.z),this.x=t,this.y=n,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(yv.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(yv.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=t.elements,f=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*f,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*f,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*f,this}applyQuaternion(t){const n=this.x,s=this.y,o=this.z,c=t.x,f=t.y,h=t.z,m=t.w,p=2*(f*o-h*s),v=2*(h*n-c*o),g=2*(c*s-f*n);return this.x=n+m*p+f*g-h*v,this.y=s+m*v+h*p-c*g,this.z=o+m*g+c*v-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,s=this.y,o=this.z,c=t.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const s=t.x,o=t.y,c=t.z,f=n.x,h=n.y,m=n.z;return this.x=o*m-c*h,this.y=c*f-s*m,this.z=s*h-o*f,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const s=t.dot(this)/n;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Ah.copy(this).projectOnVector(t),this.sub(Ah)}reflect(t){return this.sub(Ah.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(t)/n;return Math.acos(be(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,s=this.y-t.y,o=this.z-t.z;return n*n+s*s+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,s){const o=Math.sin(n)*t;return this.x=o*Math.sin(s),this.y=Math.cos(n)*t,this.z=o*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,s){return this.x=t*Math.sin(n),this.y=s,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(t),this.y=n,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ah=new j,yv=new hl;class xe{constructor(t,n,s,o,c,f,h,m,p){xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,f,h,m,p)}set(t,n,s,o,c,f,h,m,p){const v=this.elements;return v[0]=t,v[1]=o,v[2]=h,v[3]=n,v[4]=c,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(t,n,s){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,f=s[0],h=s[3],m=s[6],p=s[1],v=s[4],g=s[7],_=s[2],S=s[5],E=s[8],C=o[0],M=o[3],x=o[6],P=o[1],U=o[4],D=o[7],I=o[2],B=o[5],F=o[8];return c[0]=f*C+h*P+m*I,c[3]=f*M+h*U+m*B,c[6]=f*x+h*D+m*F,c[1]=p*C+v*P+g*I,c[4]=p*M+v*U+g*B,c[7]=p*x+v*D+g*F,c[2]=_*C+S*P+E*I,c[5]=_*M+S*U+E*B,c[8]=_*x+S*D+E*F,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8];return n*f*v-n*h*p-s*c*v+s*h*m+o*c*p-o*f*m}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=v*f-h*p,_=h*m-v*c,S=p*c-f*m,E=n*g+s*_+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=g*C,t[1]=(o*p-v*s)*C,t[2]=(h*s-o*f)*C,t[3]=_*C,t[4]=(v*n-o*m)*C,t[5]=(o*c-h*n)*C,t[6]=S*C,t[7]=(s*m-p*n)*C,t[8]=(f*n-s*c)*C,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,s,o,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*f+p*h)+f+t,-o*p,o*m,-o*(-p*f+m*h)+h+n,0,0,1),this}scale(t,n){return this.premultiply(wh.makeScale(t,n)),this}rotate(t){return this.premultiply(wh.makeRotation(-t)),this}translate(t,n){return this.premultiply(wh.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<9;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wh=new xe,Sv=new xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mv=new xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vM(){const r={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(o,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===Ve&&(o.r=Sa(o.r),o.g=Sa(o.g),o.b=Sa(o.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ve&&(o.r=Ir(o.r),o.g=Ir(o.g),o.b=Ir(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===as?iu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,f){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ol("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ol("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,c)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Vr]:{primaries:t,whitePoint:s,transfer:iu,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:t,whitePoint:s,transfer:Ve,toXYZ:Sv,fromXYZ:Mv,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),r}const Ue=vM();function Sa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ir(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let br;class _M{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{br===void 0&&(br=su("canvas")),br.width=t.width,br.height=t.height;const o=br.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),s=br}return s.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=su("canvas");n.width=t.width,n.height=t.height;const s=n.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const o=s.getImageData(0,0,t.width,t.height),c=o.data;for(let f=0;f<c.length;f++)c[f]=Sa(c[f]/255)*255;return s.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Sa(n[s]/255)*255):n[s]=Sa(n[s]);return{data:n,width:t.width,height:t.height}}else return de("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xM=0;class mp{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=qr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let f=0,h=o.length;f<h;f++)o[f].isDataTexture?c.push(Ch(o[f].image)):c.push(Ch(o[f]))}else c=Ch(o);s.url=c}return n||(t.images[this.uuid]=s),s}}function Ch(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?_M.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(de("Texture: Unable to serialize Texture."),{})}let yM=0;const Rh=new j;class Gn extends Wr{constructor(t=Gn.DEFAULT_IMAGE,n=Gn.DEFAULT_MAPPING,s=xa,o=xa,c=In,f=zs,h=Ui,m=li,p=Gn.DEFAULT_ANISOTROPY,v=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=qr(),this.name="",this.source=new mp(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Rh).x}get height(){return this.source.getSize(Rh).y}get depth(){return this.source.getSize(Rh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const s=t[n];if(s===void 0){de(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){de(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&s&&o.isVector2&&s.isVector2||o&&s&&o.isVector3&&s.isVector3||o&&s&&o.isMatrix3&&s.isMatrix3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==A_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case md:t.x=t.x-Math.floor(t.x);break;case xa:t.x=t.x<0?0:1;break;case gd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case md:t.y=t.y-Math.floor(t.y);break;case xa:t.y=t.y<0?0:1;break;case gd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=A_;Gn.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,n=0,s=0,o=1){nn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,s,o){return this.x=t,this.y=n,this.z=s,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,s=this.y,o=this.z,c=this.w,f=t.elements;return this.x=f[0]*n+f[4]*s+f[8]*o+f[12]*c,this.y=f[1]*n+f[5]*s+f[9]*o+f[13]*c,this.z=f[2]*n+f[6]*s+f[10]*o+f[14]*c,this.w=f[3]*n+f[7]*s+f[11]*o+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,s,o,c;const m=t.elements,p=m[0],v=m[4],g=m[8],_=m[1],S=m[5],E=m[9],C=m[2],M=m[6],x=m[10];if(Math.abs(v-_)<.01&&Math.abs(g-C)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+C)<.1&&Math.abs(E+M)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(p+1)/2,D=(S+1)/2,I=(x+1)/2,B=(v+_)/4,F=(g+C)/4,q=(E+M)/4;return U>D&&U>I?U<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(U),o=B/s,c=F/s):D>I?D<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(D),s=B/o,c=q/o):I<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt(I),s=F/c,o=q/c),this.set(s,o,c,n),this}let P=Math.sqrt((M-E)*(M-E)+(g-C)*(g-C)+(_-v)*(_-v));return Math.abs(P)<.001&&(P=1),this.x=(M-E)/P,this.y=(g-C)/P,this.z=(_-v)/P,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=be(this.x,t.x,n.x),this.y=be(this.y,t.y,n.y),this.z=be(this.z,t.z,n.z),this.w=be(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=be(this.x,t,n),this.y=be(this.y,t,n),this.z=be(this.z,t,n),this.w=be(this.w,t,n),this}clampLength(t,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,s){return this.x=t.x+(n.x-t.x)*s,this.y=t.y+(n.y-t.y)*s,this.z=t.z+(n.z-t.z)*s,this.w=t.w+(n.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SM extends Wr{constructor(t=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=s.depth,this.scissor=new nn(0,0,t,n),this.scissorTest=!1,this.viewport=new nn(0,0,t,n);const o={width:t,height:n,depth:s.depth},c=new Gn(o);this.textures=[];const f=s.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const n={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,s=1){if(this.width!==t||this.height!==n||this.depth!==s){this.width=t,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=s,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new mp(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ki extends SM{constructor(t=1,n=1,s={}){super(t,n,s),this.isWebGLRenderTarget=!0}}class z_ extends Gn{constructor(t=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class MM extends Gn{constructor(t=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:s,depth:o},this.magFilter=Un,this.minFilter=Un,this.wrapR=xa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dl{constructor(t=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n+=3)this.expandByPoint(wi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,s=t.count;n<s;n++)this.expandByPoint(wi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,s=t.length;n<s;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const s=wi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)t.isMesh===!0?t.getVertexPosition(f,wi):wi.fromBufferAttribute(c,f),wi.applyMatrix4(t.matrixWorld),this.expandByPoint(wi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),wc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wc.copy(s.boundingBox)),wc.applyMatrix4(t.matrixWorld),this.union(wc)}const o=t.children;for(let c=0,f=o.length;c<f;c++)this.expandByObject(o[c],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wi),wi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,s;return t.normal.x>0?(n=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),n<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wo),Cc.subVectors(this.max,Wo),Er.subVectors(t.a,Wo),Tr.subVectors(t.b,Wo),Ar.subVectors(t.c,Wo),Ka.subVectors(Tr,Er),Ja.subVectors(Ar,Tr),As.subVectors(Er,Ar);let n=[0,-Ka.z,Ka.y,0,-Ja.z,Ja.y,0,-As.z,As.y,Ka.z,0,-Ka.x,Ja.z,0,-Ja.x,As.z,0,-As.x,-Ka.y,Ka.x,0,-Ja.y,Ja.x,0,-As.y,As.x,0];return!Dh(n,Er,Tr,Ar,Cc)||(n=[1,0,0,0,1,0,0,0,1],!Dh(n,Er,Tr,Ar,Cc))?!1:(Rc.crossVectors(Ka,Ja),n=[Rc.x,Rc.y,Rc.z],Dh(n,Er,Tr,Ar,Cc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ha=[new j,new j,new j,new j,new j,new j,new j,new j],wi=new j,wc=new dl,Er=new j,Tr=new j,Ar=new j,Ka=new j,Ja=new j,As=new j,Wo=new j,Cc=new j,Rc=new j,ws=new j;function Dh(r,t,n,s,o){for(let c=0,f=r.length-3;c<=f;c+=3){ws.fromArray(r,c);const h=o.x*Math.abs(ws.x)+o.y*Math.abs(ws.y)+o.z*Math.abs(ws.z),m=t.dot(ws),p=n.dot(ws),v=s.dot(ws);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const bM=new dl,qo=new j,Uh=new j;class ou{constructor(t=new j,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const s=this.center;n!==void 0?s.copy(n):bM.setFromPoints(t).getCenter(s);let o=0;for(let c=0,f=t.length;c<f;c++)o=Math.max(o,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const s=this.center.distanceToSquared(t);return n.copy(t),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qo.subVectors(t,this.center);const n=qo.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(qo,o/s),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Uh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qo.copy(t.center).add(Uh)),this.expandByPoint(qo.copy(t.center).sub(Uh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const da=new j,Nh=new j,Dc=new j,$a=new j,Lh=new j,Uc=new j,Oh=new j;class F_{constructor(t=new j,n=new j(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,da)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=da.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(da.copy(this.origin).addScaledVector(this.direction,n),da.distanceToSquared(t))}distanceSqToSegment(t,n,s,o){Nh.copy(t).add(n).multiplyScalar(.5),Dc.copy(n).sub(t).normalize(),$a.copy(this.origin).sub(Nh);const c=t.distanceTo(n)*.5,f=-this.direction.dot(Dc),h=$a.dot(this.direction),m=-$a.dot(Dc),p=$a.lengthSq(),v=Math.abs(1-f*f);let g,_,S,E;if(v>0)if(g=f*m-h,_=f*h-m,E=c*v,g>=0)if(_>=-E)if(_<=E){const C=1/v;g*=C,_*=C,S=g*(g+f*_+2*h)+_*(f*g+_+2*m)+p}else _=c,g=Math.max(0,-(f*_+h)),S=-g*g+_*(_+2*m)+p;else _=-c,g=Math.max(0,-(f*_+h)),S=-g*g+_*(_+2*m)+p;else _<=-E?(g=Math.max(0,-(-f*c+h)),_=g>0?-c:Math.min(Math.max(-c,-m),c),S=-g*g+_*(_+2*m)+p):_<=E?(g=0,_=Math.min(Math.max(-c,-m),c),S=_*(_+2*m)+p):(g=Math.max(0,-(f*c+h)),_=g>0?c:Math.min(Math.max(-c,-m),c),S=-g*g+_*(_+2*m)+p);else _=f>0?-c:c,g=Math.max(0,-(f*_+h)),S=-g*g+_*(_+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Nh).addScaledVector(Dc,_),S}intersectSphere(t,n){da.subVectors(t.center,this.origin);const s=da.dot(this.direction),o=da.dot(da)-s*s,c=t.radius*t.radius;if(o>c)return null;const f=Math.sqrt(c-o),h=s-f,m=s+f;return m<0?null:h<0?this.at(m,n):this.at(h,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/n;return s>=0?s:null}intersectPlane(t,n){const s=this.distanceToPlane(t);return s===null?null:this.at(s,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let s,o,c,f,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(s=(t.min.x-_.x)*p,o=(t.max.x-_.x)*p):(s=(t.max.x-_.x)*p,o=(t.min.x-_.x)*p),v>=0?(c=(t.min.y-_.y)*v,f=(t.max.y-_.y)*v):(c=(t.max.y-_.y)*v,f=(t.min.y-_.y)*v),s>f||c>o||((c>s||isNaN(s))&&(s=c),(f<o||isNaN(o))&&(o=f),g>=0?(h=(t.min.z-_.z)*g,m=(t.max.z-_.z)*g):(h=(t.max.z-_.z)*g,m=(t.min.z-_.z)*g),s>m||h>o)||((h>s||s!==s)&&(s=h),(m<o||o!==o)&&(o=m),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(t){return this.intersectBox(t,da)!==null}intersectTriangle(t,n,s,o,c){Lh.subVectors(n,t),Uc.subVectors(s,t),Oh.crossVectors(Lh,Uc);let f=this.direction.dot(Oh),h;if(f>0){if(o)return null;h=1}else if(f<0)h=-1,f=-f;else return null;$a.subVectors(this.origin,t);const m=h*this.direction.dot(Uc.crossVectors($a,Uc));if(m<0)return null;const p=h*this.direction.dot(Lh.cross($a));if(p<0||m+p>f)return null;const v=-h*$a.dot(Oh);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,n,s,o,c,f,h,m,p,v,g,_,S,E,C,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,s,o,c,f,h,m,p,v,g,_,S,E,C,M)}set(t,n,s,o,c,f,h,m,p,v,g,_,S,E,C,M){const x=this.elements;return x[0]=t,x[4]=n,x[8]=s,x[12]=o,x[1]=c,x[5]=f,x[9]=h,x[13]=m,x[2]=p,x[6]=v,x[10]=g,x[14]=_,x[3]=S,x[7]=E,x[11]=C,x[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const n=this.elements,s=t.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(t){const n=this.elements,s=t.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,s){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,n,s){return this.set(t.x,n.x,s.x,0,t.y,n.y,s.y,0,t.z,n.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,s=t.elements,o=1/wr.setFromMatrixColumn(t,0).length(),c=1/wr.setFromMatrixColumn(t,1).length(),f=1/wr.setFromMatrixColumn(t,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*f,n[9]=s[9]*f,n[10]=s[10]*f,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,s=t.x,o=t.y,c=t.z,f=Math.cos(s),h=Math.sin(s),m=Math.cos(o),p=Math.sin(o),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const _=f*v,S=f*g,E=h*v,C=h*g;n[0]=m*v,n[4]=-m*g,n[8]=p,n[1]=S+E*p,n[5]=_-C*p,n[9]=-h*m,n[2]=C-_*p,n[6]=E+S*p,n[10]=f*m}else if(t.order==="YXZ"){const _=m*v,S=m*g,E=p*v,C=p*g;n[0]=_+C*h,n[4]=E*h-S,n[8]=f*p,n[1]=f*g,n[5]=f*v,n[9]=-h,n[2]=S*h-E,n[6]=C+_*h,n[10]=f*m}else if(t.order==="ZXY"){const _=m*v,S=m*g,E=p*v,C=p*g;n[0]=_-C*h,n[4]=-f*g,n[8]=E+S*h,n[1]=S+E*h,n[5]=f*v,n[9]=C-_*h,n[2]=-f*p,n[6]=h,n[10]=f*m}else if(t.order==="ZYX"){const _=f*v,S=f*g,E=h*v,C=h*g;n[0]=m*v,n[4]=E*p-S,n[8]=_*p+C,n[1]=m*g,n[5]=C*p+_,n[9]=S*p-E,n[2]=-p,n[6]=h*m,n[10]=f*m}else if(t.order==="YZX"){const _=f*m,S=f*p,E=h*m,C=h*p;n[0]=m*v,n[4]=C-_*g,n[8]=E*g+S,n[1]=g,n[5]=f*v,n[9]=-h*v,n[2]=-p*v,n[6]=S*g+E,n[10]=_-C*g}else if(t.order==="XZY"){const _=f*m,S=f*p,E=h*m,C=h*p;n[0]=m*v,n[4]=-g,n[8]=p*v,n[1]=_*g+C,n[5]=f*v,n[9]=S*g-E,n[2]=E*g-S,n[6]=h*v,n[10]=C*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(EM,t,TM)}lookAt(t,n,s){const o=this.elements;return ai.subVectors(t,n),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),ts.crossVectors(s,ai),ts.lengthSq()===0&&(Math.abs(s.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),ts.crossVectors(s,ai)),ts.normalize(),Nc.crossVectors(ai,ts),o[0]=ts.x,o[4]=Nc.x,o[8]=ai.x,o[1]=ts.y,o[5]=Nc.y,o[9]=ai.y,o[2]=ts.z,o[6]=Nc.z,o[10]=ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const s=t.elements,o=n.elements,c=this.elements,f=s[0],h=s[4],m=s[8],p=s[12],v=s[1],g=s[5],_=s[9],S=s[13],E=s[2],C=s[6],M=s[10],x=s[14],P=s[3],U=s[7],D=s[11],I=s[15],B=o[0],F=o[4],q=o[8],T=o[12],R=o[1],H=o[5],Q=o[9],J=o[13],ct=o[2],rt=o[6],z=o[10],V=o[14],nt=o[3],bt=o[7],Mt=o[11],L=o[15];return c[0]=f*B+h*R+m*ct+p*nt,c[4]=f*F+h*H+m*rt+p*bt,c[8]=f*q+h*Q+m*z+p*Mt,c[12]=f*T+h*J+m*V+p*L,c[1]=v*B+g*R+_*ct+S*nt,c[5]=v*F+g*H+_*rt+S*bt,c[9]=v*q+g*Q+_*z+S*Mt,c[13]=v*T+g*J+_*V+S*L,c[2]=E*B+C*R+M*ct+x*nt,c[6]=E*F+C*H+M*rt+x*bt,c[10]=E*q+C*Q+M*z+x*Mt,c[14]=E*T+C*J+M*V+x*L,c[3]=P*B+U*R+D*ct+I*nt,c[7]=P*F+U*H+D*rt+I*bt,c[11]=P*q+U*Q+D*z+I*Mt,c[15]=P*T+U*J+D*V+I*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],s=t[4],o=t[8],c=t[12],f=t[1],h=t[5],m=t[9],p=t[13],v=t[2],g=t[6],_=t[10],S=t[14],E=t[3],C=t[7],M=t[11],x=t[15],P=m*S-p*_,U=h*S-p*g,D=h*_-m*g,I=f*S-p*v,B=f*_-m*v,F=f*g-h*v;return n*(C*P-M*U+x*D)-s*(E*P-M*I+x*B)+o*(E*U-C*I+x*F)-c*(E*D-C*B+M*F)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,s){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=s),this}invert(){const t=this.elements,n=t[0],s=t[1],o=t[2],c=t[3],f=t[4],h=t[5],m=t[6],p=t[7],v=t[8],g=t[9],_=t[10],S=t[11],E=t[12],C=t[13],M=t[14],x=t[15],P=g*M*p-C*_*p+C*m*S-h*M*S-g*m*x+h*_*x,U=E*_*p-v*M*p-E*m*S+f*M*S+v*m*x-f*_*x,D=v*C*p-E*g*p+E*h*S-f*C*S-v*h*x+f*g*x,I=E*g*m-v*C*m-E*h*_+f*C*_+v*h*M-f*g*M,B=n*P+s*U+o*D+c*I;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/B;return t[0]=P*F,t[1]=(C*_*c-g*M*c-C*o*S+s*M*S+g*o*x-s*_*x)*F,t[2]=(h*M*c-C*m*c+C*o*p-s*M*p-h*o*x+s*m*x)*F,t[3]=(g*m*c-h*_*c-g*o*p+s*_*p+h*o*S-s*m*S)*F,t[4]=U*F,t[5]=(v*M*c-E*_*c+E*o*S-n*M*S-v*o*x+n*_*x)*F,t[6]=(E*m*c-f*M*c-E*o*p+n*M*p+f*o*x-n*m*x)*F,t[7]=(f*_*c-v*m*c+v*o*p-n*_*p-f*o*S+n*m*S)*F,t[8]=D*F,t[9]=(E*g*c-v*C*c-E*s*S+n*C*S+v*s*x-n*g*x)*F,t[10]=(f*C*c-E*h*c+E*s*p-n*C*p-f*s*x+n*h*x)*F,t[11]=(v*h*c-f*g*c-v*s*p+n*g*p+f*s*S-n*h*S)*F,t[12]=I*F,t[13]=(v*C*o-E*g*o+E*s*_-n*C*_-v*s*M+n*g*M)*F,t[14]=(E*h*o-f*C*o-E*s*m+n*C*m+f*s*M-n*h*M)*F,t[15]=(f*g*o-v*h*o+v*s*m-n*g*m-f*s*_+n*h*_)*F,this}scale(t){const n=this.elements,s=t.x,o=t.y,c=t.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(t,n,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),s=Math.sin(t);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,f=t.x,h=t.y,m=t.z,p=c*f,v=c*h;return this.set(p*f+s,p*h-o*m,p*m+o*h,0,p*h+o*m,v*h+s,v*m-o*f,0,p*m-o*h,v*m+o*f,c*m*m+s,0,0,0,0,1),this}makeScale(t,n,s){return this.set(t,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,n,s,o,c,f){return this.set(1,s,c,0,t,1,f,0,n,o,1,0,0,0,0,1),this}compose(t,n,s){const o=this.elements,c=n._x,f=n._y,h=n._z,m=n._w,p=c+c,v=f+f,g=h+h,_=c*p,S=c*v,E=c*g,C=f*v,M=f*g,x=h*g,P=m*p,U=m*v,D=m*g,I=s.x,B=s.y,F=s.z;return o[0]=(1-(C+x))*I,o[1]=(S+D)*I,o[2]=(E-U)*I,o[3]=0,o[4]=(S-D)*B,o[5]=(1-(_+x))*B,o[6]=(M+P)*B,o[7]=0,o[8]=(E+U)*F,o[9]=(M-P)*F,o[10]=(1-(_+C))*F,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,s){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let c=wr.set(o[0],o[1],o[2]).length();const f=wr.set(o[4],o[5],o[6]).length(),h=wr.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),Ci.copy(this);const p=1/c,v=1/f,g=1/h;return Ci.elements[0]*=p,Ci.elements[1]*=p,Ci.elements[2]*=p,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=g,Ci.elements[9]*=g,Ci.elements[10]*=g,n.setFromRotationMatrix(Ci),s.x=c,s.y=f,s.z=h,this}makePerspective(t,n,s,o,c,f,h=Gi,m=!1){const p=this.elements,v=2*c/(n-t),g=2*c/(s-o),_=(n+t)/(n-t),S=(s+o)/(s-o);let E,C;if(m)E=c/(f-c),C=f*c/(f-c);else if(h===Gi)E=-(f+c)/(f-c),C=-2*f*c/(f-c);else if(h===au)E=-f/(f-c),C=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=g,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,n,s,o,c,f,h=Gi,m=!1){const p=this.elements,v=2/(n-t),g=2/(s-o),_=-(n+t)/(n-t),S=-(s+o)/(s-o);let E,C;if(m)E=1/(f-c),C=f/(f-c);else if(h===Gi)E=-2/(f-c),C=-(f+c)/(f-c);else if(h===au)E=-1/(f-c),C=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=g,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=E,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const n=this.elements,s=t.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(t,n=0){for(let s=0;s<16;s++)this.elements[s]=t[s+n];return this}toArray(t=[],n=0){const s=this.elements;return t[n]=s[0],t[n+1]=s[1],t[n+2]=s[2],t[n+3]=s[3],t[n+4]=s[4],t[n+5]=s[5],t[n+6]=s[6],t[n+7]=s[7],t[n+8]=s[8],t[n+9]=s[9],t[n+10]=s[10],t[n+11]=s[11],t[n+12]=s[12],t[n+13]=s[13],t[n+14]=s[14],t[n+15]=s[15],t}}const wr=new j,Ci=new Je,EM=new j(0,0,0),TM=new j(1,1,1),ts=new j,Nc=new j,ai=new j,bv=new Je,Ev=new hl;class Wi{constructor(t=0,n=0,s=0,o=Wi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,s,o=this._order){return this._x=t,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,s=!0){const o=t.elements,c=o[0],f=o[4],h=o[8],m=o[1],p=o[5],v=o[9],g=o[2],_=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(be(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-be(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(be(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:de("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,s){return bv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bv,n,s)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return Ev.setFromEuler(this),this.setFromQuaternion(Ev,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wi.DEFAULT_ORDER="XYZ";class I_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let AM=0;const Tv=new j,Cr=new hl,pa=new Je,Lc=new j,Yo=new j,wM=new j,CM=new hl,Av=new j(1,0,0),wv=new j(0,1,0),Cv=new j(0,0,1),Rv={type:"added"},RM={type:"removed"},Rr={type:"childadded",child:null},Ph={type:"childremoved",child:null};class Nn extends Wr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new j,n=new Wi,s=new hl,o=new j(1,1,1);function c(){s.setFromEuler(n,!1)}function f(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Je},normalMatrix:{value:new xe}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Cr.setFromAxisAngle(t,n),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(t,n){return Cr.setFromAxisAngle(t,n),this.quaternion.premultiply(Cr),this}rotateX(t){return this.rotateOnAxis(Av,t)}rotateY(t){return this.rotateOnAxis(wv,t)}rotateZ(t){return this.rotateOnAxis(Cv,t)}translateOnAxis(t,n){return Tv.copy(t).applyQuaternion(this.quaternion),this.position.add(Tv.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Av,t)}translateY(t){return this.translateOnAxis(wv,t)}translateZ(t){return this.translateOnAxis(Cv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pa.copy(this.matrixWorld).invert())}lookAt(t,n,s){t.isVector3?Lc.copy(t):Lc.set(t,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pa.lookAt(Yo,Lc,this.up):pa.lookAt(Lc,Yo,this.up),this.quaternion.setFromRotationMatrix(pa),o&&(pa.extractRotation(o.matrixWorld),Cr.setFromRotationMatrix(pa),this.quaternion.premultiply(Cr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rv),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(RM),Ph.child=t,this.dispatchEvent(Ph),Ph.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pa.multiply(t.parent.matrixWorld)),t.applyMatrix4(pa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rv),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const f=this.children[s].getObjectByProperty(t,n);if(f!==void 0)return f}}getObjectsByProperty(t,n,s=[]){this[t]===n&&s.push(this);const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].getObjectsByProperty(t,n,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,t,wM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,CM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(t)}updateWorldMatrix(t,n){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,f=o.length;c<f;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",s={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(h=>({...h})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));o.material=h}else o.material=c(t.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];o.animations.push(c(t.animations,m))}}if(n){const h=f(t.geometries),m=f(t.materials),p=f(t.textures),v=f(t.images),g=f(t.shapes),_=f(t.skeletons),S=f(t.animations),E=f(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=o,s;function f(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let s=0;s<t.children.length;s++){const o=t.children[s];this.add(o.clone())}return this}}Nn.DEFAULT_UP=new j(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ri=new j,ma=new j,zh=new j,ga=new j,Dr=new j,Ur=new j,Dv=new j,Fh=new j,Ih=new j,Bh=new j,Hh=new nn,Gh=new nn,Vh=new nn;class Di{constructor(t=new j,n=new j,s=new j){this.a=t,this.b=n,this.c=s}static getNormal(t,n,s,o){o.subVectors(s,n),Ri.subVectors(t,n),o.cross(Ri);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(t,n,s,o,c){Ri.subVectors(o,n),ma.subVectors(s,n),zh.subVectors(t,n);const f=Ri.dot(Ri),h=Ri.dot(ma),m=Ri.dot(zh),p=ma.dot(ma),v=ma.dot(zh),g=f*p-h*h;if(g===0)return c.set(0,0,0),null;const _=1/g,S=(p*m-h*v)*_,E=(f*v-h*m)*_;return c.set(1-S-E,E,S)}static containsPoint(t,n,s,o){return this.getBarycoord(t,n,s,o,ga)===null?!1:ga.x>=0&&ga.y>=0&&ga.x+ga.y<=1}static getInterpolation(t,n,s,o,c,f,h,m){return this.getBarycoord(t,n,s,o,ga)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ga.x),m.addScaledVector(f,ga.y),m.addScaledVector(h,ga.z),m)}static getInterpolatedAttribute(t,n,s,o,c,f){return Hh.setScalar(0),Gh.setScalar(0),Vh.setScalar(0),Hh.fromBufferAttribute(t,n),Gh.fromBufferAttribute(t,s),Vh.fromBufferAttribute(t,o),f.setScalar(0),f.addScaledVector(Hh,c.x),f.addScaledVector(Gh,c.y),f.addScaledVector(Vh,c.z),f}static isFrontFacing(t,n,s,o){return Ri.subVectors(s,n),ma.subVectors(t,n),Ri.cross(ma).dot(o)<0}set(t,n,s){return this.a.copy(t),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(t,n,s,o){return this.a.copy(t[n]),this.b.copy(t[s]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,s,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ri.subVectors(this.c,this.b),ma.subVectors(this.a,this.b),Ri.cross(ma).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Di.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Di.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,s,o,c){return Di.getInterpolation(t,this.a,this.b,this.c,n,s,o,c)}containsPoint(t){return Di.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Di.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const s=this.a,o=this.b,c=this.c;let f,h;Dr.subVectors(o,s),Ur.subVectors(c,s),Fh.subVectors(t,s);const m=Dr.dot(Fh),p=Ur.dot(Fh);if(m<=0&&p<=0)return n.copy(s);Ih.subVectors(t,o);const v=Dr.dot(Ih),g=Ur.dot(Ih);if(v>=0&&g<=v)return n.copy(o);const _=m*g-v*p;if(_<=0&&m>=0&&v<=0)return f=m/(m-v),n.copy(s).addScaledVector(Dr,f);Bh.subVectors(t,c);const S=Dr.dot(Bh),E=Ur.dot(Bh);if(E>=0&&S<=E)return n.copy(c);const C=S*p-m*E;if(C<=0&&p>=0&&E<=0)return h=p/(p-E),n.copy(s).addScaledVector(Ur,h);const M=v*E-S*g;if(M<=0&&g-v>=0&&S-E>=0)return Dv.subVectors(c,o),h=(g-v)/(g-v+(S-E)),n.copy(o).addScaledVector(Dv,h);const x=1/(M+C+_);return f=C*x,h=_*x,n.copy(s).addScaledVector(Dr,f).addScaledVector(Ur,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const B_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Oc={h:0,s:0,l:0};function kh(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Ce{constructor(t,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,s)}set(t,n,s){if(n===void 0&&s===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=yi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ue.colorSpaceToWorking(this,n),this}setRGB(t,n,s,o=Ue.workingColorSpace){return this.r=t,this.g=n,this.b=s,Ue.colorSpaceToWorking(this,o),this}setHSL(t,n,s,o=Ue.workingColorSpace){if(t=gM(t,1),n=be(n,0,1),s=be(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,f=2*s-c;this.r=kh(f,c,t+1/3),this.g=kh(f,c,t),this.b=kh(f,c,t-1/3)}return Ue.colorSpaceToWorking(this,o),this}setStyle(t,n=yi){function s(c){c!==void 0&&parseFloat(c)<1&&de("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=o[1],h=o[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:de("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=o[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(f===6)return this.setHex(parseInt(c,16),n);de("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=yi){const s=B_[t.toLowerCase()];return s!==void 0?this.setHex(s,n):de("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Sa(t.r),this.g=Sa(t.g),this.b=Sa(t.b),this}copyLinearToSRGB(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=yi){return Ue.workingToColorSpace(Fn.copy(this),t),Math.round(be(Fn.r*255,0,255))*65536+Math.round(be(Fn.g*255,0,255))*256+Math.round(be(Fn.b*255,0,255))}getHexString(t=yi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ue.workingColorSpace){Ue.workingToColorSpace(Fn.copy(this),n);const s=Fn.r,o=Fn.g,c=Fn.b,f=Math.max(s,o,c),h=Math.min(s,o,c);let m,p;const v=(h+f)/2;if(h===f)m=0,p=0;else{const g=f-h;switch(p=v<=.5?g/(f+h):g/(2-f-h),f){case s:m=(o-c)/g+(o<c?6:0);break;case o:m=(c-s)/g+2;break;case c:m=(s-o)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,n=Ue.workingColorSpace){return Ue.workingToColorSpace(Fn.copy(this),n),t.r=Fn.r,t.g=Fn.g,t.b=Fn.b,t}getStyle(t=yi){Ue.workingToColorSpace(Fn.copy(this),t);const n=Fn.r,s=Fn.g,o=Fn.b;return t!==yi?`color(${t} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(t,n,s){return this.getHSL(es),this.setHSL(es.h+t,es.s+n,es.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,s){return this.r=t.r+(n.r-t.r)*s,this.g=t.g+(n.g-t.g)*s,this.b=t.b+(n.b-t.b)*s,this}lerpHSL(t,n){this.getHSL(es),t.getHSL(Oc);const s=Th(es.h,Oc.h,n),o=Th(es.s,Oc.s,n),c=Th(es.l,Oc.l,n);return this.setHSL(s,o,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,s=this.g,o=this.b,c=t.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ce;Ce.NAMES=B_;let DM=0;class Yr extends Wr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=Fr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ad,this.blendDst=sd,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mr,this.stencilZFail=Mr,this.stencilZPass=Mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const s=t[n];if(s===void 0){de(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){de(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Fr&&(s.blending=this.blending),this.side!==os&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ad&&(s.blendSrc=this.blendSrc),this.blendDst!==sd&&(s.blendDst=this.blendDst),this.blendEquation!==Ls&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(n){const c=o(t.textures),f=o(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class H_ extends Yr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const hn=new j,Pc=new qt;let UM=0;class Ni{constructor(t,n,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:UM++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=s,this.usage=gv,this.updateRanges=[],this.gpuType=Hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,s){t*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[t+o]=n.array[s+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Pc.fromBufferAttribute(this,n),Pc.applyMatrix3(t),this.setXY(n,Pc.x,Pc.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix3(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyMatrix4(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(t){for(let n=0,s=this.count;n<s;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(t),this.setXYZ(n,hn.x,hn.y,hn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let s=this.array[t*this.itemSize+n];return this.normalized&&(s=Xo(s,this.array)),s}setComponent(t,n,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+n]=s,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Xo(n,this.array)),n}setX(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Xo(n,this.array)),n}setY(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Xo(n,this.array)),n}setZ(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Xo(n,this.array)),n}setW(t,n){return this.normalized&&(n=jn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,s){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array)),this.array[t+0]=n,this.array[t+1]=s,this}setXYZ(t,n,s,o){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array),o=jn(o,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this}setXYZW(t,n,s,o,c){return t*=this.itemSize,this.normalized&&(n=jn(n,this.array),s=jn(s,this.array),o=jn(o,this.array),c=jn(c,this.array)),this.array[t+0]=n,this.array[t+1]=s,this.array[t+2]=o,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gv&&(t.usage=this.usage),t}}class G_ extends Ni{constructor(t,n,s){super(new Uint16Array(t),n,s)}}class V_ extends Ni{constructor(t,n,s){super(new Uint32Array(t),n,s)}}class Ln extends Ni{constructor(t,n,s){super(new Float32Array(t),n,s)}}let NM=0;const xi=new Je,Xh=new Nn,Nr=new j,si=new dl,jo=new dl,xn=new j;class Qn extends Wr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(P_(t)?V_:G_)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,s=0){this.groups.push({start:t,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new xe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xi.makeRotationFromQuaternion(t),this.applyMatrix4(xi),this}rotateX(t){return xi.makeRotationX(t),this.applyMatrix4(xi),this}rotateY(t){return xi.makeRotationY(t),this.applyMatrix4(xi),this}rotateZ(t){return xi.makeRotationZ(t),this.applyMatrix4(xi),this}translate(t,n,s){return xi.makeTranslation(t,n,s),this.applyMatrix4(xi),this}scale(t,n,s){return xi.makeScale(t,n,s),this.applyMatrix4(xi),this}lookAt(t){return Xh.lookAt(t),Xh.updateMatrix(),this.applyMatrix4(Xh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=t.length;o<c;o++){const f=t[o];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ln(s,3))}else{const s=Math.min(t.length,n.count);for(let o=0;o<s;o++){const c=t[o];n.setXYZ(o,c.x,c.y,c.z||0)}t.length>n.count&&de("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];si.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ou);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const s=this.boundingSphere.center;if(si.setFromBufferAttribute(t),n)for(let c=0,f=n.length;c<f;c++){const h=n[c];jo.setFromBufferAttribute(h),this.morphTargetsRelative?(xn.addVectors(si.min,jo.min),si.expandByPoint(xn),xn.addVectors(si.max,jo.max),si.expandByPoint(xn)):(si.expandByPoint(jo.min),si.expandByPoint(jo.max))}si.getCenter(s);let o=0;for(let c=0,f=t.count;c<f;c++)xn.fromBufferAttribute(t,c),o=Math.max(o,s.distanceToSquared(xn));if(n)for(let c=0,f=n.length;c<f;c++){const h=n[c],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)xn.fromBufferAttribute(h,p),m&&(Nr.fromBufferAttribute(t,p),xn.add(Nr)),o=Math.max(o,s.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let q=0;q<s.count;q++)h[q]=new j,m[q]=new j;const p=new j,v=new j,g=new j,_=new qt,S=new qt,E=new qt,C=new j,M=new j;function x(q,T,R){p.fromBufferAttribute(s,q),v.fromBufferAttribute(s,T),g.fromBufferAttribute(s,R),_.fromBufferAttribute(c,q),S.fromBufferAttribute(c,T),E.fromBufferAttribute(c,R),v.sub(p),g.sub(p),S.sub(_),E.sub(_);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(H),M.copy(g).multiplyScalar(S.x).addScaledVector(v,-E.x).multiplyScalar(H),h[q].add(C),h[T].add(C),h[R].add(C),m[q].add(M),m[T].add(M),m[R].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let q=0,T=P.length;q<T;++q){const R=P[q],H=R.start,Q=R.count;for(let J=H,ct=H+Q;J<ct;J+=3)x(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const U=new j,D=new j,I=new j,B=new j;function F(q){I.fromBufferAttribute(o,q),B.copy(I);const T=h[q];U.copy(T),U.sub(I.multiplyScalar(I.dot(T))).normalize(),D.crossVectors(B,T);const H=D.dot(m[q])<0?-1:1;f.setXYZW(q,U.x,U.y,U.z,H)}for(let q=0,T=P.length;q<T;++q){const R=P[q],H=R.start,Q=R.count;for(let J=H,ct=H+Q;J<ct;J+=3)F(t.getX(J+0)),F(t.getX(J+1)),F(t.getX(J+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const o=new j,c=new j,f=new j,h=new j,m=new j,p=new j,v=new j,g=new j;if(t)for(let _=0,S=t.count;_<S;_+=3){const E=t.getX(_+0),C=t.getX(_+1),M=t.getX(_+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,C),f.fromBufferAttribute(n,M),v.subVectors(f,c),g.subVectors(o,c),v.cross(g),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),h.add(v),m.add(v),p.add(v),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let _=0,S=n.count;_<S;_+=3)o.fromBufferAttribute(n,_+0),c.fromBufferAttribute(n,_+1),f.fromBufferAttribute(n,_+2),v.subVectors(f,c),g.subVectors(o,c),v.cross(g),s.setXYZ(_+0,v.x,v.y,v.z),s.setXYZ(_+1,v.x,v.y,v.z),s.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,s=t.count;n<s;n++)xn.fromBufferAttribute(t,n),xn.normalize(),t.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function t(h,m){const p=h.array,v=h.itemSize,g=h.normalized,_=new p.constructor(m.length*v);let S=0,E=0;for(let C=0,M=m.length;C<M;C++){h.isInterleavedBufferAttribute?S=m[C]*h.data.stride+h.offset:S=m[C]*v;for(let x=0;x<v;x++)_[E++]=p[S++]}return new Ni(_,v,g)}if(this.index===null)return de("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Qn,s=this.index.array,o=this.attributes;for(const h in o){const m=o[h],p=t(m,s);n.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let v=0,g=p.length;v<g;v++){const _=p[v],S=t(_,s);m.push(S)}n.morphAttributes[h]=m}n.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];n.addGroup(p.start,p.count,p.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const o={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,_=p.length;g<_;g++){const S=p[g];v.push(S.toJSON(t.data))}v.length>0&&(o[m]=v,c=!0)}c&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const o=t.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(n))}const c=t.morphAttributes;for(const p in c){const v=[],g=c[p];for(let _=0,S=g.length;_<S;_++)v.push(g[_].clone(n));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uv=new Je,Cs=new F_,zc=new ou,Nv=new j,Fc=new j,Ic=new j,Bc=new j,Wh=new j,Hc=new j,Lv=new j,Gc=new j;class rn extends Nn{constructor(t=new Qn,n=new H_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;n.fromBufferAttribute(o,t);const h=this.morphTargetInfluences;if(c&&h){Hc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=h[m],g=c[m];v!==0&&(Wh.fromBufferAttribute(g,t),f?Hc.addScaledVector(Wh,v):Hc.addScaledVector(Wh.sub(n),v))}n.add(Hc)}return n}raycast(t,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(c),Cs.copy(t.ray).recast(t.near),!(zc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(zc,Nv)===null||Cs.origin.distanceToSquared(Nv)>(t.far-t.near)**2))&&(Uv.copy(c).invert(),Cs.copy(t.ray).applyMatrix4(Uv),!(s.boundingBox!==null&&Cs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,n,Cs)))}_computeIntersections(t,n,s){let o;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,_=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(f))for(let E=0,C=_.length;E<C;E++){const M=_[E],x=f[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(h.count,Math.min(M.start+M.count,S.start+S.count));for(let D=P,I=U;D<I;D+=3){const B=h.getX(D),F=h.getX(D+1),q=h.getX(D+2);o=Vc(this,x,t,s,p,v,g,B,F,q),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let M=E,x=C;M<x;M+=3){const P=h.getX(M),U=h.getX(M+1),D=h.getX(M+2);o=Vc(this,f,t,s,p,v,g,P,U,D),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}else if(m!==void 0)if(Array.isArray(f))for(let E=0,C=_.length;E<C;E++){const M=_[E],x=f[M.materialIndex],P=Math.max(M.start,S.start),U=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=P,I=U;D<I;D+=3){const B=D,F=D+1,q=D+2;o=Vc(this,x,t,s,p,v,g,B,F,q),o&&(o.faceIndex=Math.floor(D/3),o.face.materialIndex=M.materialIndex,n.push(o))}}else{const E=Math.max(0,S.start),C=Math.min(m.count,S.start+S.count);for(let M=E,x=C;M<x;M+=3){const P=M,U=M+1,D=M+2;o=Vc(this,f,t,s,p,v,g,P,U,D),o&&(o.faceIndex=Math.floor(M/3),n.push(o))}}}}function LM(r,t,n,s,o,c,f,h){let m;if(t.side===Zn?m=s.intersectTriangle(f,c,o,!0,h):m=s.intersectTriangle(o,c,f,t.side===os,h),m===null)return null;Gc.copy(h),Gc.applyMatrix4(r.matrixWorld);const p=n.ray.origin.distanceTo(Gc);return p<n.near||p>n.far?null:{distance:p,point:Gc.clone(),object:r}}function Vc(r,t,n,s,o,c,f,h,m,p){r.getVertexPosition(h,Fc),r.getVertexPosition(m,Ic),r.getVertexPosition(p,Bc);const v=LM(r,t,n,s,Fc,Ic,Bc,Lv);if(v){const g=new j;Di.getBarycoord(Lv,Fc,Ic,Bc,g),o&&(v.uv=Di.getInterpolatedAttribute(o,h,m,p,g,new qt)),c&&(v.uv1=Di.getInterpolatedAttribute(c,h,m,p,g,new qt)),f&&(v.normal=Di.getInterpolatedAttribute(f,h,m,p,g,new j),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const _={a:h,b:m,c:p,normal:new j,materialIndex:0};Di.getNormal(Fc,Ic,Bc,_.normal),v.face=_,v.barycoord=g}return v}class pl extends Qn{constructor(t=1,n=1,s=1,o=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:f};const h=this;o=Math.floor(o),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],v=[],g=[];let _=0,S=0;E("z","y","x",-1,-1,s,n,t,f,c,0),E("z","y","x",1,-1,s,n,-t,f,c,1),E("x","z","y",1,1,t,s,n,o,f,2),E("x","z","y",1,-1,t,s,-n,o,f,3),E("x","y","z",1,-1,t,n,s,o,c,4),E("x","y","z",-1,-1,t,n,-s,o,c,5),this.setIndex(m),this.setAttribute("position",new Ln(p,3)),this.setAttribute("normal",new Ln(v,3)),this.setAttribute("uv",new Ln(g,2));function E(C,M,x,P,U,D,I,B,F,q,T){const R=D/F,H=I/q,Q=D/2,J=I/2,ct=B/2,rt=F+1,z=q+1;let V=0,nt=0;const bt=new j;for(let Mt=0;Mt<z;Mt++){const L=Mt*H-J;for(let tt=0;tt<rt;tt++){const mt=tt*R-Q;bt[C]=mt*P,bt[M]=L*U,bt[x]=ct,p.push(bt.x,bt.y,bt.z),bt[C]=0,bt[M]=0,bt[x]=B>0?1:-1,v.push(bt.x,bt.y,bt.z),g.push(tt/F),g.push(1-Mt/q),V+=1}}for(let Mt=0;Mt<q;Mt++)for(let L=0;L<F;L++){const tt=_+L+rt*Mt,mt=_+L+rt*(Mt+1),wt=_+(L+1)+rt*(Mt+1),Ht=_+(L+1)+rt*Mt;m.push(tt,mt,Ht),m.push(mt,wt,Ht),nt+=6}h.addGroup(S,nt,T),S+=nt,_+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(r){const t={};for(const n in r){t[n]={};for(const s in r[n]){const o=r[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(de("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][s]=null):t[n][s]=o.clone():Array.isArray(o)?t[n][s]=o.slice():t[n][s]=o}}return t}function Hn(r){const t={};for(let n=0;n<r.length;n++){const s=kr(r[n]);for(const o in s)t[o]=s[o]}return t}function OM(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function k_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ue.workingColorSpace}const PM={clone:kr,merge:Hn};var zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Yr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=OM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const f=this.uniforms[o].value;f&&f.isTexture?n.uniforms[o]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?n.uniforms[o]={type:"c",value:f.getHex()}:f&&f.isVector2?n.uniforms[o]={type:"v2",value:f.toArray()}:f&&f.isVector3?n.uniforms[o]={type:"v3",value:f.toArray()}:f&&f.isVector4?n.uniforms[o]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?n.uniforms[o]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?n.uniforms[o]={type:"m4",value:f.toArray()}:n.uniforms[o]={value:f}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class X_ extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Gi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new j,Ov=new qt,Pv=new qt;class oi extends X_{constructor(t=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Zd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Eh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zd*2*Math.atan(Math.tan(Eh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,s){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ns.x,ns.y).multiplyScalar(-t/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ns.x,ns.y).multiplyScalar(-t/ns.z)}getViewSize(t,n){return this.getViewBounds(t,Ov,Pv),n.subVectors(Pv,Ov)}setViewOffset(t,n,s,o,c,f){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(Eh*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*o/m,n-=f.offsetY*s/p,o*=f.width/m,s*=f.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Lr=-90,Or=1;class IM extends Nn{constructor(t,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new oi(Lr,Or,t,n);o.layers=this.layers,this.add(o);const c=new oi(Lr,Or,t,n);c.layers=this.layers,this.add(c);const f=new oi(Lr,Or,t,n);f.layers=this.layers,this.add(f);const h=new oi(Lr,Or,t,n);h.layers=this.layers,this.add(h);const m=new oi(Lr,Or,t,n);m.layers=this.layers,this.add(m);const p=new oi(Lr,Or,t,n);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[s,o,c,f,h,m]=n;for(const p of n)this.remove(p);if(t===Gi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===au)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of n)this.add(p),p.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,v]=this.children,g=t.getRenderTarget(),_=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,o),t.render(n,c),t.setRenderTarget(s,1,o),t.render(n,f),t.setRenderTarget(s,2,o),t.render(n,h),t.setRenderTarget(s,3,o),t.render(n,m),t.setRenderTarget(s,4,o),t.render(n,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,o),t.render(n,v),t.setRenderTarget(g,_,S),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class W_ extends Gn{constructor(t=[],n=Is,s,o,c,f,h,m,p,v){super(t,n,s,o,c,f,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class q_ extends ki{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},o=[s,s,s,s,s,s];this.texture=new W_(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new pl(5,5,5),c=new qi({name:"CubemapFromEquirect",uniforms:kr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:ya});c.uniforms.tEquirect.value=n;const f=new rn(o,c),h=n.minFilter;return n.minFilter===zs&&(n.minFilter=In),new IM(1,10,this).update(t,f),n.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(t,n=!0,s=!0,o=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(n,s,o);t.setRenderTarget(c)}}class Jo extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BM={type:"move"};class qh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const s of t.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,s){let o=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const C of t.hand.values()){const M=n.getJointPose(C,s),x=this._getHandJoint(p,C);M!==null&&(x.matrix.fromArray(M.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=M.radius),x.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=v.position.distanceTo(g.position),S=.02,E=.005;p.inputState.pinching&&_>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&_<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=n.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(o=n.getPose(t.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(BM)))}return h!==null&&(h.visible=o!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const s=new Jo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[n.jointName]=s,t.add(s)}return t.joints[n.jointName]}}class HM extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wi,this.environmentIntensity=1,this.environmentRotation=new Wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class GM extends Gn{constructor(t=null,n=1,s=1,o,c,f,h,m,p=Un,v=Un,g,_){super(null,f,h,m,p,v,o,c,g,_),this.isDataTexture=!0,this.image={data:t,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yh=new j,VM=new j,kM=new xe;class Ns{constructor(t=new j(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,s,o){return this.normal.set(t,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,s){const o=Yh.subVectors(s,n).cross(VM.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const s=t.delta(Yh),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const n=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return n<0&&s>0||s<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const s=n||kM.getNormalMatrix(t),o=this.coplanarPoint(Yh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new ou,XM=new qt(.5,.5),kc=new j;class gp{constructor(t=new Ns,n=new Ns,s=new Ns,o=new Ns,c=new Ns,f=new Ns){this.planes=[t,n,s,o,c,f]}set(t,n,s,o,c,f){const h=this.planes;return h[0].copy(t),h[1].copy(n),h[2].copy(s),h[3].copy(o),h[4].copy(c),h[5].copy(f),this}copy(t){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,n=Gi,s=!1){const o=this.planes,c=t.elements,f=c[0],h=c[1],m=c[2],p=c[3],v=c[4],g=c[5],_=c[6],S=c[7],E=c[8],C=c[9],M=c[10],x=c[11],P=c[12],U=c[13],D=c[14],I=c[15];if(o[0].setComponents(p-f,S-v,x-E,I-P).normalize(),o[1].setComponents(p+f,S+v,x+E,I+P).normalize(),o[2].setComponents(p+h,S+g,x+C,I+U).normalize(),o[3].setComponents(p-h,S-g,x-C,I-U).normalize(),s)o[4].setComponents(m,_,M,D).normalize(),o[5].setComponents(p-m,S-_,x-M,I-D).normalize();else if(o[4].setComponents(p-m,S-_,x-M,I-D).normalize(),n===Gi)o[5].setComponents(p+m,S+_,x+M,I+D).normalize();else if(n===au)o[5].setComponents(m,_,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(t){Rs.center.set(0,0,0);const n=XM.distanceTo(t.center);return Rs.radius=.7071067811865476+n,Rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(t){const n=this.planes,s=t.center,o=-t.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(kc.x=o.normal.x>0?t.max.x:t.min.x,kc.y=o.normal.y>0?t.max.y:t.min.y,kc.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(kc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Y_ extends Yr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const zv=new Je,Qd=new F_,Xc=new ou,Wc=new j;class WM extends Nn{constructor(t=new Qn,n=new Y_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const s=this.geometry,o=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Xc.copy(s.boundingSphere),Xc.applyMatrix4(o),Xc.radius+=c,t.ray.intersectsSphere(Xc)===!1)return;zv.copy(o).invert(),Qd.copy(t.ray).applyMatrix4(zv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=s.index,g=s.attributes.position;if(p!==null){const _=Math.max(0,f.start),S=Math.min(p.count,f.start+f.count);for(let E=_,C=S;E<C;E++){const M=p.getX(E);Wc.fromBufferAttribute(g,M),Fv(Wc,M,m,o,t,n,this)}}else{const _=Math.max(0,f.start),S=Math.min(g.count,f.start+f.count);for(let E=_,C=S;E<C;E++)Wc.fromBufferAttribute(g,E),Fv(Wc,E,m,o,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=o.length;c<f;c++){const h=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Fv(r,t,n,s,o,c,f){const h=Qd.distanceSqToPoint(r);if(h<n){const m=new j;Qd.closestPointToPoint(r,m),m.applyMatrix4(s);const p=o.ray.origin.distanceTo(m);if(p<o.near||p>o.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class ll extends Gn{constructor(t,n,s=Xi,o,c,f,h=Un,m=Un,p,v=ba,g=1){if(v!==ba&&v!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:t,height:n,depth:g};super(_,o,c,f,h,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new mp(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class qM extends ll{constructor(t,n=Xi,s=Is,o,c,f=Un,h=Un,m,p=ba){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,n,s,o,c,f,h,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class j_ extends Gn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class nl extends Qn{constructor(t=1,n=1,s=1,o=32,c=1,f=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:s,radialSegments:o,heightSegments:c,openEnded:f,thetaStart:h,thetaLength:m};const p=this;o=Math.floor(o),c=Math.floor(c);const v=[],g=[],_=[],S=[];let E=0;const C=[],M=s/2;let x=0;P(),f===!1&&(t>0&&U(!0),n>0&&U(!1)),this.setIndex(v),this.setAttribute("position",new Ln(g,3)),this.setAttribute("normal",new Ln(_,3)),this.setAttribute("uv",new Ln(S,2));function P(){const D=new j,I=new j;let B=0;const F=(n-t)/s;for(let q=0;q<=c;q++){const T=[],R=q/c,H=R*(n-t)+t;for(let Q=0;Q<=o;Q++){const J=Q/o,ct=J*m+h,rt=Math.sin(ct),z=Math.cos(ct);I.x=H*rt,I.y=-R*s+M,I.z=H*z,g.push(I.x,I.y,I.z),D.set(rt,F,z).normalize(),_.push(D.x,D.y,D.z),S.push(J,1-R),T.push(E++)}C.push(T)}for(let q=0;q<o;q++)for(let T=0;T<c;T++){const R=C[T][q],H=C[T+1][q],Q=C[T+1][q+1],J=C[T][q+1];(t>0||T!==0)&&(v.push(R,H,J),B+=3),(n>0||T!==c-1)&&(v.push(H,Q,J),B+=3)}p.addGroup(x,B,0),x+=B}function U(D){const I=E,B=new qt,F=new j;let q=0;const T=D===!0?t:n,R=D===!0?1:-1;for(let Q=1;Q<=o;Q++)g.push(0,M*R,0),_.push(0,R,0),S.push(.5,.5),E++;const H=E;for(let Q=0;Q<=o;Q++){const ct=Q/o*m+h,rt=Math.cos(ct),z=Math.sin(ct);F.x=T*z,F.y=M*R,F.z=T*rt,g.push(F.x,F.y,F.z),_.push(0,R,0),B.x=rt*.5+.5,B.y=z*.5*R+.5,S.push(B.x,B.y),E++}for(let Q=0;Q<o;Q++){const J=I+Q,ct=H+Q;D===!0?v.push(ct,ct+1,J):v.push(ct+1,ct,J),q+=3}p.addGroup(x,q,D===!0?1:2),x+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nl(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){de("Curve: .getPoint() not implemented.")}getPointAt(t,n){const s=this.getUtoTmapping(t);return this.getPoint(s,n)}getPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return n}getSpacedPoints(t=5){const n=[];for(let s=0;s<=t;s++)n.push(this.getPointAt(s/t));return n}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let s,o=this.getPoint(0),c=0;n.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(o),n.push(c),o=s;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,n=null){const s=this.getLengths();let o=0;const c=s.length;let f;n?f=n:f=t*s[c-1];let h=0,m=c-1,p;for(;h<=m;)if(o=Math.floor(h+(m-h)/2),p=s[o]-f,p<0)h=o+1;else if(p>0)m=o-1;else{m=o;break}if(o=m,s[o]===f)return o/(c-1);const v=s[o],_=s[o+1]-v,S=(f-v)/_;return(o+S)/(c-1)}getTangent(t,n){let o=t-1e-4,c=t+1e-4;o<0&&(o=0),c>1&&(c=1);const f=this.getPoint(o),h=this.getPoint(c),m=n||(f.isVector2?new qt:new j);return m.copy(h).sub(f).normalize(),m}getTangentAt(t,n){const s=this.getUtoTmapping(t);return this.getTangent(s,n)}computeFrenetFrames(t,n=!1){const s=new j,o=[],c=[],f=[],h=new j,m=new Je;for(let S=0;S<=t;S++){const E=S/t;o[S]=this.getTangentAt(E,new j)}c[0]=new j,f[0]=new j;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),g=Math.abs(o[0].y),_=Math.abs(o[0].z);v<=p&&(p=v,s.set(1,0,0)),g<=p&&(p=g,s.set(0,1,0)),_<=p&&s.set(0,0,1),h.crossVectors(o[0],s).normalize(),c[0].crossVectors(o[0],h),f[0].crossVectors(o[0],c[0]);for(let S=1;S<=t;S++){if(c[S]=c[S-1].clone(),f[S]=f[S-1].clone(),h.crossVectors(o[S-1],o[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(be(o[S-1].dot(o[S]),-1,1));c[S].applyMatrix4(m.makeRotationAxis(h,E))}f[S].crossVectors(o[S],c[S])}if(n===!0){let S=Math.acos(be(c[0].dot(c[t]),-1,1));S/=t,o[0].dot(h.crossVectors(c[0],c[t]))>0&&(S=-S);for(let E=1;E<=t;E++)c[E].applyMatrix4(m.makeRotationAxis(o[E],S*E)),f[E].crossVectors(o[E],c[E])}return{tangents:o,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class vp extends Yi{constructor(t=0,n=0,s=1,o=1,c=0,f=Math.PI*2,h=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=n,this.xRadius=s,this.yRadius=o,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=h,this.aRotation=m}getPoint(t,n=new qt){const s=n,o=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=o;for(;c>o;)c-=o;c<Number.EPSILON&&(f?c=0:c=o),this.aClockwise===!0&&!f&&(c===o?c=-o:c=c-o);const h=this.aStartAngle+t*c;let m=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),_=m-this.aX,S=p-this.aY;m=_*v-S*g+this.aX,p=_*g+S*v+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class YM extends vp{constructor(t,n,s,o,c,f){super(t,n,s,s,o,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function _p(){let r=0,t=0,n=0,s=0;function o(c,f,h,m){r=c,t=h,n=-3*c+3*f-2*h-m,s=2*c-2*f+h+m}return{initCatmullRom:function(c,f,h,m,p){o(f,h,p*(h-c),p*(m-f))},initNonuniformCatmullRom:function(c,f,h,m,p,v,g){let _=(f-c)/p-(h-c)/(p+v)+(h-f)/v,S=(h-f)/v-(m-f)/(v+g)+(m-h)/g;_*=v,S*=v,o(f,h,_,S)},calc:function(c){const f=c*c,h=f*c;return r+t*c+n*f+s*h}}}const qc=new j,jh=new _p,Zh=new _p,Qh=new _p;class jM extends Yi{constructor(t=[],n=!1,s="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=n,this.curveType=s,this.tension=o}getPoint(t,n=new j){const s=n,o=this.points,c=o.length,f=(c-(this.closed?0:1))*t;let h=Math.floor(f),m=f-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/c)+1)*c:m===0&&h===c-1&&(h=c-2,m=1);let p,v;this.closed||h>0?p=o[(h-1)%c]:(qc.subVectors(o[0],o[1]).add(o[0]),p=qc);const g=o[h%c],_=o[(h+1)%c];if(this.closed||h+2<c?v=o[(h+2)%c]:(qc.subVectors(o[c-1],o[c-2]).add(o[c-1]),v=qc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(g),S),C=Math.pow(g.distanceToSquared(_),S),M=Math.pow(_.distanceToSquared(v),S);C<1e-4&&(C=1),E<1e-4&&(E=C),M<1e-4&&(M=C),jh.initNonuniformCatmullRom(p.x,g.x,_.x,v.x,E,C,M),Zh.initNonuniformCatmullRom(p.y,g.y,_.y,v.y,E,C,M),Qh.initNonuniformCatmullRom(p.z,g.z,_.z,v.z,E,C,M)}else this.curveType==="catmullrom"&&(jh.initCatmullRom(p.x,g.x,_.x,v.x,this.tension),Zh.initCatmullRom(p.y,g.y,_.y,v.y,this.tension),Qh.initCatmullRom(p.z,g.z,_.z,v.z,this.tension));return s.set(jh.calc(m),Zh.calc(m),Qh.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const o=t.points[n];this.points.push(o.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const o=this.points[n];t.points.push(o.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const o=t.points[n];this.points.push(new j().fromArray(o))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Iv(r,t,n,s,o){const c=(s-t)*.5,f=(o-n)*.5,h=r*r,m=r*h;return(2*n-2*s+c+f)*m+(-3*n+3*s-2*c-f)*h+c*r+n}function ZM(r,t){const n=1-r;return n*n*t}function QM(r,t){return 2*(1-r)*r*t}function KM(r,t){return r*r*t}function il(r,t,n,s){return ZM(r,t)+QM(r,n)+KM(r,s)}function JM(r,t){const n=1-r;return n*n*n*t}function $M(r,t){const n=1-r;return 3*n*n*r*t}function tb(r,t){return 3*(1-r)*r*r*t}function eb(r,t){return r*r*r*t}function al(r,t,n,s,o){return JM(r,t)+$M(r,n)+tb(r,s)+eb(r,o)}class Z_ extends Yi{constructor(t=new qt,n=new qt,s=new qt,o=new qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=n,this.v2=s,this.v3=o}getPoint(t,n=new qt){const s=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(al(t,o.x,c.x,f.x,h.x),al(t,o.y,c.y,f.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class nb extends Yi{constructor(t=new j,n=new j,s=new j,o=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=n,this.v2=s,this.v3=o}getPoint(t,n=new j){const s=n,o=this.v0,c=this.v1,f=this.v2,h=this.v3;return s.set(al(t,o.x,c.x,f.x,h.x),al(t,o.y,c.y,f.y,h.y),al(t,o.z,c.z,f.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Q_ extends Yi{constructor(t=new qt,n=new qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=n}getPoint(t,n=new qt){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new qt){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ib extends Yi{constructor(t=new j,n=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=n}getPoint(t,n=new j){const s=n;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,n){return this.getPoint(t,n)}getTangent(t,n=new j){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,n){return this.getTangent(t,n)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class K_ extends Yi{constructor(t=new qt,n=new qt,s=new qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new qt){const s=n,o=this.v0,c=this.v1,f=this.v2;return s.set(il(t,o.x,c.x,f.x),il(t,o.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ab extends Yi{constructor(t=new j,n=new j,s=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=n,this.v2=s}getPoint(t,n=new j){const s=n,o=this.v0,c=this.v1,f=this.v2;return s.set(il(t,o.x,c.x,f.x),il(t,o.y,c.y,f.y),il(t,o.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class J_ extends Yi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,n=new qt){const s=n,o=this.points,c=(o.length-1)*t,f=Math.floor(c),h=c-f,m=o[f===0?f:f-1],p=o[f],v=o[f>o.length-2?o.length-1:f+1],g=o[f>o.length-3?o.length-1:f+2];return s.set(Iv(h,m.x,p.x,v.x,g.x),Iv(h,m.y,p.y,v.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const o=t.points[n];this.points.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let n=0,s=this.points.length;n<s;n++){const o=this.points[n];t.points.push(o.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let n=0,s=t.points.length;n<s;n++){const o=t.points[n];this.points.push(new qt().fromArray(o))}return this}}var Kd=Object.freeze({__proto__:null,ArcCurve:YM,CatmullRomCurve3:jM,CubicBezierCurve:Z_,CubicBezierCurve3:nb,EllipseCurve:vp,LineCurve:Q_,LineCurve3:ib,QuadraticBezierCurve:K_,QuadraticBezierCurve3:ab,SplineCurve:J_});class sb extends Yi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(n)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kd[s](n,t))}return this}getPoint(t,n){const s=t*this.getLength(),o=this.getCurveLengths();let c=0;for(;c<o.length;){if(o[c]>=s){const f=o[c]-s,h=this.curves[c],m=h.getLength(),p=m===0?0:1-f/m;return h.getPointAt(p,n)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let n=0;for(let s=0,o=this.curves.length;s<o;s++)n+=this.curves[s].getLength(),t.push(n);return this.cacheLengths=t,t}getSpacedPoints(t=40){const n=[];for(let s=0;s<=t;s++)n.push(this.getPoint(s/t));return this.autoClose&&n.push(n[0]),n}getPoints(t=12){const n=[];let s;for(let o=0,c=this.curves;o<c.length;o++){const f=c[o],h=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(h);for(let p=0;p<m.length;p++){const v=m[p];s&&s.equals(v)||(n.push(v),s=v)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(t){super.copy(t),this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const o=t.curves[n];this.curves.push(o.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let n=0,s=this.curves.length;n<s;n++){const o=this.curves[n];t.curves.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let n=0,s=t.curves.length;n<s;n++){const o=t.curves[n];this.curves.push(new Kd[o.type]().fromJSON(o))}return this}}class Bv extends sb{constructor(t){super(),this.type="Path",this.currentPoint=new qt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let n=1,s=t.length;n<s;n++)this.lineTo(t[n].x,t[n].y);return this}moveTo(t,n){return this.currentPoint.set(t,n),this}lineTo(t,n){const s=new Q_(this.currentPoint.clone(),new qt(t,n));return this.curves.push(s),this.currentPoint.set(t,n),this}quadraticCurveTo(t,n,s,o){const c=new K_(this.currentPoint.clone(),new qt(t,n),new qt(s,o));return this.curves.push(c),this.currentPoint.set(s,o),this}bezierCurveTo(t,n,s,o,c,f){const h=new Z_(this.currentPoint.clone(),new qt(t,n),new qt(s,o),new qt(c,f));return this.curves.push(h),this.currentPoint.set(c,f),this}splineThru(t){const n=[this.currentPoint.clone()].concat(t),s=new J_(n);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,n,s,o,c,f){const h=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+h,n+m,s,o,c,f),this}absarc(t,n,s,o,c,f){return this.absellipse(t,n,s,s,o,c,f),this}ellipse(t,n,s,o,c,f,h,m){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+p,n+v,s,o,c,f,h,m),this}absellipse(t,n,s,o,c,f,h,m){const p=new vp(t,n,s,o,c,f,h,m);if(this.curves.length>0){const g=p.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $_ extends Bv{constructor(t){super(t),this.uuid=qr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const n=[];for(let s=0,o=this.holes.length;s<o;s++)n[s]=this.holes[s].getPoints(t);return n}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const o=t.holes[n];this.holes.push(o.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let n=0,s=this.holes.length;n<s;n++){const o=this.holes[n];t.holes.push(o.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let n=0,s=t.holes.length;n<s;n++){const o=t.holes[n];this.holes.push(new Bv().fromJSON(o))}return this}}function rb(r,t,n=2){const s=t&&t.length,o=s?t[0]*n:r.length;let c=tx(r,0,o,n,!0);const f=[];if(!c||c.next===c.prev)return f;let h,m,p;if(s&&(c=fb(r,t,c,n)),r.length>80*n){h=r[0],m=r[1];let v=h,g=m;for(let _=n;_<o;_+=n){const S=r[_],E=r[_+1];S<h&&(h=S),E<m&&(m=E),S>v&&(v=S),E>g&&(g=E)}p=Math.max(v-h,g-m),p=p!==0?32767/p:0}return cl(c,f,n,h,m,p,0),f}function tx(r,t,n,s,o){let c;if(o===Mb(r,t,n,s)>0)for(let f=t;f<n;f+=s)c=Hv(f/s|0,r[f],r[f+1],c);else for(let f=n-s;f>=t;f-=s)c=Hv(f/s|0,r[f],r[f+1],c);return c&&Xr(c,c.next)&&(fl(c),c=c.next),c}function Bs(r,t){if(!r)return r;t||(t=r);let n=r,s;do if(s=!1,!n.steiner&&(Xr(n,n.next)||$e(n.prev,n,n.next)===0)){if(fl(n),n=t=n.prev,n===n.next)break;s=!0}else n=n.next;while(s||n!==t);return t}function cl(r,t,n,s,o,c,f){if(!r)return;!f&&c&&gb(r,s,o,c);let h=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(c?lb(r,s,o,c):ob(r)){t.push(m.i,r.i,p.i),fl(r),r=p.next,h=p.next;continue}if(r=p,r===h){f?f===1?(r=cb(Bs(r),t),cl(r,t,n,s,o,c,2)):f===2&&ub(r,t,n,s,o,c):cl(Bs(r),t,n,s,o,c,1);break}}}function ob(r){const t=r.prev,n=r,s=r.next;if($e(t,n,s)>=0)return!1;const o=t.x,c=n.x,f=s.x,h=t.y,m=n.y,p=s.y,v=Math.min(o,c,f),g=Math.min(h,m,p),_=Math.max(o,c,f),S=Math.max(h,m,p);let E=s.next;for(;E!==t;){if(E.x>=v&&E.x<=_&&E.y>=g&&E.y<=S&&$o(o,h,c,m,f,p,E.x,E.y)&&$e(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function lb(r,t,n,s){const o=r.prev,c=r,f=r.next;if($e(o,c,f)>=0)return!1;const h=o.x,m=c.x,p=f.x,v=o.y,g=c.y,_=f.y,S=Math.min(h,m,p),E=Math.min(v,g,_),C=Math.max(h,m,p),M=Math.max(v,g,_),x=Jd(S,E,t,n,s),P=Jd(C,M,t,n,s);let U=r.prevZ,D=r.nextZ;for(;U&&U.z>=x&&D&&D.z<=P;){if(U.x>=S&&U.x<=C&&U.y>=E&&U.y<=M&&U!==o&&U!==f&&$o(h,v,m,g,p,_,U.x,U.y)&&$e(U.prev,U,U.next)>=0||(U=U.prevZ,D.x>=S&&D.x<=C&&D.y>=E&&D.y<=M&&D!==o&&D!==f&&$o(h,v,m,g,p,_,D.x,D.y)&&$e(D.prev,D,D.next)>=0))return!1;D=D.nextZ}for(;U&&U.z>=x;){if(U.x>=S&&U.x<=C&&U.y>=E&&U.y<=M&&U!==o&&U!==f&&$o(h,v,m,g,p,_,U.x,U.y)&&$e(U.prev,U,U.next)>=0)return!1;U=U.prevZ}for(;D&&D.z<=P;){if(D.x>=S&&D.x<=C&&D.y>=E&&D.y<=M&&D!==o&&D!==f&&$o(h,v,m,g,p,_,D.x,D.y)&&$e(D.prev,D,D.next)>=0)return!1;D=D.nextZ}return!0}function cb(r,t){let n=r;do{const s=n.prev,o=n.next.next;!Xr(s,o)&&nx(s,n,n.next,o)&&ul(s,o)&&ul(o,s)&&(t.push(s.i,n.i,o.i),fl(n),fl(n.next),n=r=o),n=n.next}while(n!==r);return Bs(n)}function ub(r,t,n,s,o,c){let f=r;do{let h=f.next.next;for(;h!==f.prev;){if(f.i!==h.i&&xb(f,h)){let m=ix(f,h);f=Bs(f,f.next),m=Bs(m,m.next),cl(f,t,n,s,o,c,0),cl(m,t,n,s,o,c,0);return}h=h.next}f=f.next}while(f!==r)}function fb(r,t,n,s){const o=[];for(let c=0,f=t.length;c<f;c++){const h=t[c]*s,m=c<f-1?t[c+1]*s:r.length,p=tx(r,h,m,s,!1);p===p.next&&(p.steiner=!0),o.push(_b(p))}o.sort(hb);for(let c=0;c<o.length;c++)n=db(o[c],n);return n}function hb(r,t){let n=r.x-t.x;if(n===0&&(n=r.y-t.y,n===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),o=(t.next.y-t.y)/(t.next.x-t.x);n=s-o}return n}function db(r,t){const n=pb(r,t);if(!n)return t;const s=ix(n,r);return Bs(s,s.next),Bs(n,n.next)}function pb(r,t){let n=t;const s=r.x,o=r.y;let c=-1/0,f;if(Xr(r,n))return n;do{if(Xr(r,n.next))return n.next;if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const g=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(g<=s&&g>c&&(c=g,f=n.x<n.next.x?n:n.next,g===s))return f}n=n.next}while(n!==t);if(!f)return null;const h=f,m=f.x,p=f.y;let v=1/0;n=f;do{if(s>=n.x&&n.x>=m&&s!==n.x&&ex(o<p?s:c,o,m,p,o<p?c:s,o,n.x,n.y)){const g=Math.abs(o-n.y)/(s-n.x);ul(n,r)&&(g<v||g===v&&(n.x>f.x||n.x===f.x&&mb(f,n)))&&(f=n,v=g)}n=n.next}while(n!==h);return f}function mb(r,t){return $e(r.prev,r,t.prev)<0&&$e(t.next,r,r.next)<0}function gb(r,t,n,s){let o=r;do o.z===0&&(o.z=Jd(o.x,o.y,t,n,s)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==r);o.prevZ.nextZ=null,o.prevZ=null,vb(o)}function vb(r){let t,n=1;do{let s=r,o;r=null;let c=null;for(t=0;s;){t++;let f=s,h=0;for(let p=0;p<n&&(h++,f=f.nextZ,!!f);p++);let m=n;for(;h>0||m>0&&f;)h!==0&&(m===0||!f||s.z<=f.z)?(o=s,s=s.nextZ,h--):(o=f,f=f.nextZ,m--),c?c.nextZ=o:r=o,o.prevZ=c,c=o;s=f}c.nextZ=null,n*=2}while(t>1);return r}function Jd(r,t,n,s,o){return r=(r-n)*o|0,t=(t-s)*o|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function _b(r){let t=r,n=r;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==r);return n}function ex(r,t,n,s,o,c,f,h){return(o-f)*(t-h)>=(r-f)*(c-h)&&(r-f)*(s-h)>=(n-f)*(t-h)&&(n-f)*(c-h)>=(o-f)*(s-h)}function $o(r,t,n,s,o,c,f,h){return!(r===f&&t===h)&&ex(r,t,n,s,o,c,f,h)}function xb(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!yb(r,t)&&(ul(r,t)&&ul(t,r)&&Sb(r,t)&&($e(r.prev,r,t.prev)||$e(r,t.prev,t))||Xr(r,t)&&$e(r.prev,r,r.next)>0&&$e(t.prev,t,t.next)>0)}function $e(r,t,n){return(t.y-r.y)*(n.x-t.x)-(t.x-r.x)*(n.y-t.y)}function Xr(r,t){return r.x===t.x&&r.y===t.y}function nx(r,t,n,s){const o=jc($e(r,t,n)),c=jc($e(r,t,s)),f=jc($e(n,s,r)),h=jc($e(n,s,t));return!!(o!==c&&f!==h||o===0&&Yc(r,n,t)||c===0&&Yc(r,s,t)||f===0&&Yc(n,r,s)||h===0&&Yc(n,t,s))}function Yc(r,t,n){return t.x<=Math.max(r.x,n.x)&&t.x>=Math.min(r.x,n.x)&&t.y<=Math.max(r.y,n.y)&&t.y>=Math.min(r.y,n.y)}function jc(r){return r>0?1:r<0?-1:0}function yb(r,t){let n=r;do{if(n.i!==r.i&&n.next.i!==r.i&&n.i!==t.i&&n.next.i!==t.i&&nx(n,n.next,r,t))return!0;n=n.next}while(n!==r);return!1}function ul(r,t){return $e(r.prev,r,r.next)<0?$e(r,t,r.next)>=0&&$e(r,r.prev,t)>=0:$e(r,t,r.prev)<0||$e(r,r.next,t)<0}function Sb(r,t){let n=r,s=!1;const o=(r.x+t.x)/2,c=(r.y+t.y)/2;do n.y>c!=n.next.y>c&&n.next.y!==n.y&&o<(n.next.x-n.x)*(c-n.y)/(n.next.y-n.y)+n.x&&(s=!s),n=n.next;while(n!==r);return s}function ix(r,t){const n=$d(r.i,r.x,r.y),s=$d(t.i,t.x,t.y),o=r.next,c=t.prev;return r.next=t,t.prev=r,n.next=o,o.prev=n,s.next=n,n.prev=s,c.next=s,s.prev=c,s}function Hv(r,t,n,s){const o=$d(r,t,n);return s?(o.next=s.next,o.prev=s,s.next.prev=o,s.next=o):(o.prev=o,o.next=o),o}function fl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function $d(r,t,n){return{i:r,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Mb(r,t,n,s){let o=0;for(let c=t,f=n-s;c<n;c+=s)o+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return o}class bb{static triangulate(t,n,s=2){return rb(t,n,s)}}class zr{static area(t){const n=t.length;let s=0;for(let o=n-1,c=0;c<n;o=c++)s+=t[o].x*t[c].y-t[c].x*t[o].y;return s*.5}static isClockWise(t){return zr.area(t)<0}static triangulateShape(t,n){const s=[],o=[],c=[];Gv(t),Vv(s,t);let f=t.length;n.forEach(Gv);for(let m=0;m<n.length;m++)o.push(f),f+=n[m].length,Vv(s,n[m]);const h=bb.triangulate(s,o);for(let m=0;m<h.length;m+=3)c.push(h.slice(m,m+3));return c}}function Gv(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Vv(r,t){for(let n=0;n<t.length;n++)r.push(t[n].x),r.push(t[n].y)}class xp extends Qn{constructor(t=new $_([new qt(.5,.5),new qt(-.5,.5),new qt(-.5,-.5),new qt(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:n},t=Array.isArray(t)?t:[t];const s=this,o=[],c=[];for(let h=0,m=t.length;h<m;h++){const p=t[h];f(p)}this.setAttribute("position",new Ln(o,3)),this.setAttribute("uv",new Ln(c,2)),this.computeVertexNormals();function f(h){const m=[],p=n.curveSegments!==void 0?n.curveSegments:12,v=n.steps!==void 0?n.steps:1,g=n.depth!==void 0?n.depth:1;let _=n.bevelEnabled!==void 0?n.bevelEnabled:!0,S=n.bevelThickness!==void 0?n.bevelThickness:.2,E=n.bevelSize!==void 0?n.bevelSize:S-.1,C=n.bevelOffset!==void 0?n.bevelOffset:0,M=n.bevelSegments!==void 0?n.bevelSegments:3;const x=n.extrudePath,P=n.UVGenerator!==void 0?n.UVGenerator:Eb;let U,D=!1,I,B,F,q;if(x){U=x.getSpacedPoints(v),D=!0,_=!1;const vt=x.isCatmullRomCurve3?x.closed:!1;I=x.computeFrenetFrames(v,vt),B=new j,F=new j,q=new j}_||(M=0,S=0,E=0,C=0);const T=h.extractPoints(p);let R=T.shape;const H=T.holes;if(!zr.isClockWise(R)){R=R.reverse();for(let vt=0,Et=H.length;vt<Et;vt++){const yt=H[vt];zr.isClockWise(yt)&&(H[vt]=yt.reverse())}}function J(vt){const yt=10000000000000001e-36;let Pt=vt[0];for(let O=1;O<=vt.length;O++){const ne=O%vt.length,Ft=vt[ne],ae=Ft.x-Pt.x,Ut=Ft.y-Pt.y,N=ae*ae+Ut*Ut,b=Math.max(Math.abs(Ft.x),Math.abs(Ft.y),Math.abs(Pt.x),Math.abs(Pt.y)),W=yt*b*b;if(N<=W){vt.splice(ne,1),O--;continue}Pt=Ft}}J(R),H.forEach(J);const ct=H.length,rt=R;for(let vt=0;vt<ct;vt++){const Et=H[vt];R=R.concat(Et)}function z(vt,Et,yt){return Et||De("ExtrudeGeometry: vec does not exist"),vt.clone().addScaledVector(Et,yt)}const V=R.length;function nt(vt,Et,yt){let Pt,O,ne;const Ft=vt.x-Et.x,ae=vt.y-Et.y,Ut=yt.x-vt.x,N=yt.y-vt.y,b=Ft*Ft+ae*ae,W=Ft*N-ae*Ut;if(Math.abs(W)>Number.EPSILON){const ut=Math.sqrt(b),St=Math.sqrt(Ut*Ut+N*N),ft=Et.x-ae/ut,Jt=Et.y+Ft/ut,Lt=yt.x-N/St,Kt=yt.y+Ut/St,oe=((Lt-ft)*N-(Kt-Jt)*Ut)/(Ft*N-ae*Ut);Pt=ft+Ft*oe-vt.x,O=Jt+ae*oe-vt.y;const Tt=Pt*Pt+O*O;if(Tt<=2)return new qt(Pt,O);ne=Math.sqrt(Tt/2)}else{let ut=!1;Ft>Number.EPSILON?Ut>Number.EPSILON&&(ut=!0):Ft<-Number.EPSILON?Ut<-Number.EPSILON&&(ut=!0):Math.sign(ae)===Math.sign(N)&&(ut=!0),ut?(Pt=-ae,O=Ft,ne=Math.sqrt(b)):(Pt=Ft,O=ae,ne=Math.sqrt(b/2))}return new qt(Pt/ne,O/ne)}const bt=[];for(let vt=0,Et=rt.length,yt=Et-1,Pt=vt+1;vt<Et;vt++,yt++,Pt++)yt===Et&&(yt=0),Pt===Et&&(Pt=0),bt[vt]=nt(rt[vt],rt[yt],rt[Pt]);const Mt=[];let L,tt=bt.concat();for(let vt=0,Et=ct;vt<Et;vt++){const yt=H[vt];L=[];for(let Pt=0,O=yt.length,ne=O-1,Ft=Pt+1;Pt<O;Pt++,ne++,Ft++)ne===O&&(ne=0),Ft===O&&(Ft=0),L[Pt]=nt(yt[Pt],yt[ne],yt[Ft]);Mt.push(L),tt=tt.concat(L)}let mt;if(M===0)mt=zr.triangulateShape(rt,H);else{const vt=[],Et=[];for(let yt=0;yt<M;yt++){const Pt=yt/M,O=S*Math.cos(Pt*Math.PI/2),ne=E*Math.sin(Pt*Math.PI/2)+C;for(let Ft=0,ae=rt.length;Ft<ae;Ft++){const Ut=z(rt[Ft],bt[Ft],ne);Gt(Ut.x,Ut.y,-O),Pt===0&&vt.push(Ut)}for(let Ft=0,ae=ct;Ft<ae;Ft++){const Ut=H[Ft];L=Mt[Ft];const N=[];for(let b=0,W=Ut.length;b<W;b++){const ut=z(Ut[b],L[b],ne);Gt(ut.x,ut.y,-O),Pt===0&&N.push(ut)}Pt===0&&Et.push(N)}}mt=zr.triangulateShape(vt,Et)}const wt=mt.length,Ht=E+C;for(let vt=0;vt<V;vt++){const Et=_?z(R[vt],tt[vt],Ht):R[vt];D?(F.copy(I.normals[0]).multiplyScalar(Et.x),B.copy(I.binormals[0]).multiplyScalar(Et.y),q.copy(U[0]).add(F).add(B),Gt(q.x,q.y,q.z)):Gt(Et.x,Et.y,0)}for(let vt=1;vt<=v;vt++)for(let Et=0;Et<V;Et++){const yt=_?z(R[Et],tt[Et],Ht):R[Et];D?(F.copy(I.normals[vt]).multiplyScalar(yt.x),B.copy(I.binormals[vt]).multiplyScalar(yt.y),q.copy(U[vt]).add(F).add(B),Gt(q.x,q.y,q.z)):Gt(yt.x,yt.y,g/v*vt)}for(let vt=M-1;vt>=0;vt--){const Et=vt/M,yt=S*Math.cos(Et*Math.PI/2),Pt=E*Math.sin(Et*Math.PI/2)+C;for(let O=0,ne=rt.length;O<ne;O++){const Ft=z(rt[O],bt[O],Pt);Gt(Ft.x,Ft.y,g+yt)}for(let O=0,ne=H.length;O<ne;O++){const Ft=H[O];L=Mt[O];for(let ae=0,Ut=Ft.length;ae<Ut;ae++){const N=z(Ft[ae],L[ae],Pt);D?Gt(N.x,N.y+U[v-1].y,U[v-1].x+yt):Gt(N.x,N.y,g+yt)}}}it(),ht();function it(){const vt=o.length/3;if(_){let Et=0,yt=V*Et;for(let Pt=0;Pt<wt;Pt++){const O=mt[Pt];kt(O[2]+yt,O[1]+yt,O[0]+yt)}Et=v+M*2,yt=V*Et;for(let Pt=0;Pt<wt;Pt++){const O=mt[Pt];kt(O[0]+yt,O[1]+yt,O[2]+yt)}}else{for(let Et=0;Et<wt;Et++){const yt=mt[Et];kt(yt[2],yt[1],yt[0])}for(let Et=0;Et<wt;Et++){const yt=mt[Et];kt(yt[0]+V*v,yt[1]+V*v,yt[2]+V*v)}}s.addGroup(vt,o.length/3-vt,0)}function ht(){const vt=o.length/3;let Et=0;Dt(rt,Et),Et+=rt.length;for(let yt=0,Pt=H.length;yt<Pt;yt++){const O=H[yt];Dt(O,Et),Et+=O.length}s.addGroup(vt,o.length/3-vt,1)}function Dt(vt,Et){let yt=vt.length;for(;--yt>=0;){const Pt=yt;let O=yt-1;O<0&&(O=vt.length-1);for(let ne=0,Ft=v+M*2;ne<Ft;ne++){const ae=V*ne,Ut=V*(ne+1),N=Et+Pt+ae,b=Et+O+ae,W=Et+O+Ut,ut=Et+Pt+Ut;ge(N,b,W,ut)}}}function Gt(vt,Et,yt){m.push(vt),m.push(Et),m.push(yt)}function kt(vt,Et,yt){Ee(vt),Ee(Et),Ee(yt);const Pt=o.length/3,O=P.generateTopUV(s,o,Pt-3,Pt-2,Pt-1);ue(O[0]),ue(O[1]),ue(O[2])}function ge(vt,Et,yt,Pt){Ee(vt),Ee(Et),Ee(Pt),Ee(Et),Ee(yt),Ee(Pt);const O=o.length/3,ne=P.generateSideWallUV(s,o,O-6,O-3,O-2,O-1);ue(ne[0]),ue(ne[1]),ue(ne[3]),ue(ne[1]),ue(ne[2]),ue(ne[3])}function Ee(vt){o.push(m[vt*3+0]),o.push(m[vt*3+1]),o.push(m[vt*3+2])}function ue(vt){c.push(vt.x),c.push(vt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),n=this.parameters.shapes,s=this.parameters.options;return Tb(n,s,t)}static fromJSON(t,n){const s=[];for(let c=0,f=t.shapes.length;c<f;c++){const h=n[t.shapes[c]];s.push(h)}const o=t.options.extrudePath;return o!==void 0&&(t.options.extrudePath=new Kd[o.type]().fromJSON(o)),new xp(s,t.options)}}const Eb={generateTopUV:function(r,t,n,s,o){const c=t[n*3],f=t[n*3+1],h=t[s*3],m=t[s*3+1],p=t[o*3],v=t[o*3+1];return[new qt(c,f),new qt(h,m),new qt(p,v)]},generateSideWallUV:function(r,t,n,s,o,c){const f=t[n*3],h=t[n*3+1],m=t[n*3+2],p=t[s*3],v=t[s*3+1],g=t[s*3+2],_=t[o*3],S=t[o*3+1],E=t[o*3+2],C=t[c*3],M=t[c*3+1],x=t[c*3+2];return Math.abs(h-v)<Math.abs(f-p)?[new qt(f,1-m),new qt(p,1-g),new qt(_,1-E),new qt(C,1-x)]:[new qt(h,1-m),new qt(v,1-g),new qt(S,1-E),new qt(M,1-x)]}};function Tb(r,t,n){if(n.shapes=[],Array.isArray(r))for(let s=0,o=r.length;s<o;s++){const c=r[s];n.shapes.push(c.uuid)}else n.shapes.push(r.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}class lu extends Qn{constructor(t=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:s,heightSegments:o};const c=t/2,f=n/2,h=Math.floor(s),m=Math.floor(o),p=h+1,v=m+1,g=t/h,_=n/m,S=[],E=[],C=[],M=[];for(let x=0;x<v;x++){const P=x*_-f;for(let U=0;U<p;U++){const D=U*g-c;E.push(D,-P,0),C.push(0,0,1),M.push(U/h),M.push(1-x/m)}}for(let x=0;x<m;x++)for(let P=0;P<h;P++){const U=P+p*x,D=P+p*(x+1),I=P+1+p*(x+1),B=P+1+p*x;S.push(U,D,B),S.push(D,I,B)}this.setIndex(S),this.setAttribute("position",new Ln(E,3)),this.setAttribute("normal",new Ln(C,3)),this.setAttribute("uv",new Ln(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new lu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Os extends Qn{constructor(t=1,n=32,s=16,o=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:s,phiStart:o,phiLength:c,thetaStart:f,thetaLength:h},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const m=Math.min(f+h,Math.PI);let p=0;const v=[],g=new j,_=new j,S=[],E=[],C=[],M=[];for(let x=0;x<=s;x++){const P=[],U=x/s;let D=0;x===0&&f===0?D=.5/n:x===s&&m===Math.PI&&(D=-.5/n);for(let I=0;I<=n;I++){const B=I/n;g.x=-t*Math.cos(o+B*c)*Math.sin(f+U*h),g.y=t*Math.cos(f+U*h),g.z=t*Math.sin(o+B*c)*Math.sin(f+U*h),E.push(g.x,g.y,g.z),_.copy(g).normalize(),C.push(_.x,_.y,_.z),M.push(B+D,1-U),P.push(p++)}v.push(P)}for(let x=0;x<s;x++)for(let P=0;P<n;P++){const U=v[x][P+1],D=v[x][P],I=v[x+1][P],B=v[x+1][P+1];(x!==0||f>0)&&S.push(U,D,B),(x!==s-1||m<Math.PI)&&S.push(D,I,B)}this.setIndex(S),this.setAttribute("position",new Ln(E,3)),this.setAttribute("normal",new Ln(C,3)),this.setAttribute("uv",new Ln(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Os(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ab extends qi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class va extends Yr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ce(16777215),this.specular=new Ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=O_,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wi,this.combine=rp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class wb extends Yr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cb extends Yr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class yp extends Nn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Kh=new Je,kv=new j,Xv=new j;class ax{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.mapType=li,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gp,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,s=this.matrix;kv.setFromMatrixPosition(t.matrixWorld),n.position.copy(kv),Xv.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(Xv),n.updateMatrixWorld(),Kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kh,n.coordinateSystem,n.reversedDepth),n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Kh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Rb extends ax{constructor(){super(new oi(90,1,.5,500)),this.isPointLightShadow=!0}}class Db extends yp{constructor(t,n,s=0,o=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=o,this.shadow=new Rb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Sp extends X_{constructor(t=-1,n=1,s=1,o=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,s,o,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-t,f=s+t,h=o+n,m=o-n;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ub extends ax{constructor(){super(new Sp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Nb extends yp{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new Ub}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Lb extends yp{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ob extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Wv(r,t,n,s){const o=Pb(s);switch(n){case U_:return r*t;case L_:return r*t/o.components*o.byteLength;case up:return r*t/o.components*o.byteLength;case Gr:return r*t*2/o.components*o.byteLength;case fp:return r*t*2/o.components*o.byteLength;case N_:return r*t*3/o.components*o.byteLength;case Ui:return r*t*4/o.components*o.byteLength;case hp:return r*t*4/o.components*o.byteLength;case Jc:case $c:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tu:case eu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _d:case yd:return Math.max(r,16)*Math.max(t,8)/4;case vd:case xd:return Math.max(r,8)*Math.max(t,8)/2;case Sd:case Md:case Ed:case Td:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case bd:case Ad:case wd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Cd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Rd:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Dd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ud:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Nd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ld:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Od:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zd:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Fd:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Id:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Hd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Gd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vd:case kd:case Xd:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wd:case qd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Yd:case jd:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Pb(r){switch(r){case li:case w_:return{byteLength:1,components:1};case sl:case C_:case Ma:return{byteLength:2,components:1};case lp:case cp:return{byteLength:2,components:4};case Xi:case op:case Hi:return{byteLength:4,components:1};case R_:case D_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?de("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);function sx(){let r=null,t=!1,n=null,s=null;function o(c,f){n(c,f),s=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(s=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function zb(r){const t=new WeakMap;function n(h,m){const p=h.array,v=h.usage,g=p.byteLength,_=r.createBuffer();r.bindBuffer(m,_),r.bufferData(m,p,v),h.onUploadCallback();let S;if(p instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=r.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=r.SHORT;else if(p instanceof Uint32Array)S=r.UNSIGNED_INT;else if(p instanceof Int32Array)S=r.INT;else if(p instanceof Int8Array)S=r.BYTE;else if(p instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,h),g.length===0)r.bufferSubData(p,0,v);else{g.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<g.length;S++){const E=g[_],C=g[S];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++_,g[_]=C)}g.length=_+1;for(let S=0,E=g.length;S<E;S++){const C=g[S];r.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(r.deleteBuffer(m.buffer),t.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=t.get(h);(!v||v.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,n(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:o,remove:c,update:f}}var Fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ib=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dE="gl_FragColor = linearToOutputTexel( gl_FragColor );",pE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ME=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,TE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,BE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,e1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,r1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,f1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,h1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,v1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,E1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,A1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,w1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,D1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,O1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,P1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const z1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,k1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,W1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,iT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,aT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ye={alphahash_fragment:Fb,alphahash_pars_fragment:Ib,alphamap_fragment:Bb,alphamap_pars_fragment:Hb,alphatest_fragment:Gb,alphatest_pars_fragment:Vb,aomap_fragment:kb,aomap_pars_fragment:Xb,batching_pars_vertex:Wb,batching_vertex:qb,begin_vertex:Yb,beginnormal_vertex:jb,bsdfs:Zb,iridescence_fragment:Qb,bumpmap_pars_fragment:Kb,clipping_planes_fragment:Jb,clipping_planes_pars_fragment:$b,clipping_planes_pars_vertex:tE,clipping_planes_vertex:eE,color_fragment:nE,color_pars_fragment:iE,color_pars_vertex:aE,color_vertex:sE,common:rE,cube_uv_reflection_fragment:oE,defaultnormal_vertex:lE,displacementmap_pars_vertex:cE,displacementmap_vertex:uE,emissivemap_fragment:fE,emissivemap_pars_fragment:hE,colorspace_fragment:dE,colorspace_pars_fragment:pE,envmap_fragment:mE,envmap_common_pars_fragment:gE,envmap_pars_fragment:vE,envmap_pars_vertex:_E,envmap_physical_pars_fragment:RE,envmap_vertex:xE,fog_vertex:yE,fog_pars_vertex:SE,fog_fragment:ME,fog_pars_fragment:bE,gradientmap_pars_fragment:EE,lightmap_pars_fragment:TE,lights_lambert_fragment:AE,lights_lambert_pars_fragment:wE,lights_pars_begin:CE,lights_toon_fragment:DE,lights_toon_pars_fragment:UE,lights_phong_fragment:NE,lights_phong_pars_fragment:LE,lights_physical_fragment:OE,lights_physical_pars_fragment:PE,lights_fragment_begin:zE,lights_fragment_maps:FE,lights_fragment_end:IE,logdepthbuf_fragment:BE,logdepthbuf_pars_fragment:HE,logdepthbuf_pars_vertex:GE,logdepthbuf_vertex:VE,map_fragment:kE,map_pars_fragment:XE,map_particle_fragment:WE,map_particle_pars_fragment:qE,metalnessmap_fragment:YE,metalnessmap_pars_fragment:jE,morphinstance_vertex:ZE,morphcolor_vertex:QE,morphnormal_vertex:KE,morphtarget_pars_vertex:JE,morphtarget_vertex:$E,normal_fragment_begin:t1,normal_fragment_maps:e1,normal_pars_fragment:n1,normal_pars_vertex:i1,normal_vertex:a1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:r1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:c1,opaque_fragment:u1,packing:f1,premultiplied_alpha_fragment:h1,project_vertex:d1,dithering_fragment:p1,dithering_pars_fragment:m1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:v1,shadowmap_pars_fragment:_1,shadowmap_pars_vertex:x1,shadowmap_vertex:y1,shadowmask_pars_fragment:S1,skinbase_vertex:M1,skinning_pars_vertex:b1,skinning_vertex:E1,skinnormal_vertex:T1,specularmap_fragment:A1,specularmap_pars_fragment:w1,tonemapping_fragment:C1,tonemapping_pars_fragment:R1,transmission_fragment:D1,transmission_pars_fragment:U1,uv_pars_fragment:N1,uv_pars_vertex:L1,uv_vertex:O1,worldpos_vertex:P1,background_vert:z1,background_frag:F1,backgroundCube_vert:I1,backgroundCube_frag:B1,cube_vert:H1,cube_frag:G1,depth_vert:V1,depth_frag:k1,distance_vert:X1,distance_frag:W1,equirect_vert:q1,equirect_frag:Y1,linedashed_vert:j1,linedashed_frag:Z1,meshbasic_vert:Q1,meshbasic_frag:K1,meshlambert_vert:J1,meshlambert_frag:$1,meshmatcap_vert:tT,meshmatcap_frag:eT,meshnormal_vert:nT,meshnormal_frag:iT,meshphong_vert:aT,meshphong_frag:sT,meshphysical_vert:rT,meshphysical_frag:oT,meshtoon_vert:lT,meshtoon_frag:cT,points_vert:uT,points_frag:fT,shadow_vert:hT,shadow_frag:dT,sprite_vert:pT,sprite_frag:mT},Vt={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xe}},envmap:{envMap:{value:null},envMapRotation:{value:new xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xe},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0},uvTransform:{value:new xe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xe},alphaMap:{value:null},alphaMapTransform:{value:new xe},alphaTest:{value:0}}},Bi={basic:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Hn([Vt.common,Vt.specularmap,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,Vt.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Hn([Vt.common,Vt.envmap,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.roughnessmap,Vt.metalnessmap,Vt.fog,Vt.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Hn([Vt.common,Vt.aomap,Vt.lightmap,Vt.emissivemap,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.gradientmap,Vt.fog,Vt.lights,{emissive:{value:new Ce(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Hn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,Vt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Hn([Vt.points,Vt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Hn([Vt.common,Vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Hn([Vt.common,Vt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Hn([Vt.common,Vt.bumpmap,Vt.normalmap,Vt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Hn([Vt.sprite,Vt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Hn([Vt.common,Vt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Hn([Vt.lights,Vt.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};Bi.physical={uniforms:Hn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xe},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xe},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xe},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const Zc={r:0,b:0,g:0},Ds=new Wi,gT=new Je;function vT(r,t,n,s,o,c,f){const h=new Ce(0);let m=c===!0?0:1,p,v,g=null,_=0,S=null;function E(U){let D=U.isScene===!0?U.background:null;return D&&D.isTexture&&(D=(U.backgroundBlurriness>0?n:t).get(D)),D}function C(U){let D=!1;const I=E(U);I===null?x(h,m):I&&I.isColor&&(x(I,1),D=!0);const B=r.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,f):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(U,D){const I=E(D);I&&(I.isCubeTexture||I.mapping===ru)?(v===void 0&&(v=new rn(new pl(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:kr(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(B,F,q){this.matrixWorld.copyPosition(q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Ds.copy(D.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(gT.makeRotationFromEuler(Ds)),v.material.toneMapped=Ue.getTransfer(I.colorSpace)!==Ve,(g!==I||_!==I.version||S!==r.toneMapping)&&(v.material.needsUpdate=!0,g=I,_=I.version,S=r.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(p===void 0&&(p=new rn(new lu(2,2),new qi({name:"BackgroundMaterial",uniforms:kr(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=I,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ue.getTransfer(I.colorSpace)!==Ve,I.matrixAutoUpdate===!0&&I.updateMatrix(),p.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||_!==I.version||S!==r.toneMapping)&&(p.material.needsUpdate=!0,g=I,_=I.version,S=r.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function x(U,D){U.getRGB(Zc,k_(r)),s.buffers.color.setClear(Zc.r,Zc.g,Zc.b,D,f)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,D=1){h.set(U),m=D,x(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,x(h,m)},render:C,addToRenderList:M,dispose:P}}function _T(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=_(null);let c=o,f=!1;function h(R,H,Q,J,ct){let rt=!1;const z=g(J,Q,H);c!==z&&(c=z,p(c.object)),rt=S(R,J,Q,ct),rt&&E(R,J,Q,ct),ct!==null&&t.update(ct,r.ELEMENT_ARRAY_BUFFER),(rt||f)&&(f=!1,D(R,H,Q,J),ct!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return r.createVertexArray()}function p(R){return r.bindVertexArray(R)}function v(R){return r.deleteVertexArray(R)}function g(R,H,Q){const J=Q.wireframe===!0;let ct=s[R.id];ct===void 0&&(ct={},s[R.id]=ct);let rt=ct[H.id];rt===void 0&&(rt={},ct[H.id]=rt);let z=rt[J];return z===void 0&&(z=_(m()),rt[J]=z),z}function _(R){const H=[],Q=[],J=[];for(let ct=0;ct<n;ct++)H[ct]=0,Q[ct]=0,J[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:J,object:R,attributes:{},index:null}}function S(R,H,Q,J){const ct=c.attributes,rt=H.attributes;let z=0;const V=Q.getAttributes();for(const nt in V)if(V[nt].location>=0){const Mt=ct[nt];let L=rt[nt];if(L===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),Mt===void 0||Mt.attribute!==L||L&&Mt.data!==L.data)return!0;z++}return c.attributesNum!==z||c.index!==J}function E(R,H,Q,J){const ct={},rt=H.attributes;let z=0;const V=Q.getAttributes();for(const nt in V)if(V[nt].location>=0){let Mt=rt[nt];Mt===void 0&&(nt==="instanceMatrix"&&R.instanceMatrix&&(Mt=R.instanceMatrix),nt==="instanceColor"&&R.instanceColor&&(Mt=R.instanceColor));const L={};L.attribute=Mt,Mt&&Mt.data&&(L.data=Mt.data),ct[nt]=L,z++}c.attributes=ct,c.attributesNum=z,c.index=J}function C(){const R=c.newAttributes;for(let H=0,Q=R.length;H<Q;H++)R[H]=0}function M(R){x(R,0)}function x(R,H){const Q=c.newAttributes,J=c.enabledAttributes,ct=c.attributeDivisors;Q[R]=1,J[R]===0&&(r.enableVertexAttribArray(R),J[R]=1),ct[R]!==H&&(r.vertexAttribDivisor(R,H),ct[R]=H)}function P(){const R=c.newAttributes,H=c.enabledAttributes;for(let Q=0,J=H.length;Q<J;Q++)H[Q]!==R[Q]&&(r.disableVertexAttribArray(Q),H[Q]=0)}function U(R,H,Q,J,ct,rt,z){z===!0?r.vertexAttribIPointer(R,H,Q,ct,rt):r.vertexAttribPointer(R,H,Q,J,ct,rt)}function D(R,H,Q,J){C();const ct=J.attributes,rt=Q.getAttributes(),z=H.defaultAttributeValues;for(const V in rt){const nt=rt[V];if(nt.location>=0){let bt=ct[V];if(bt===void 0&&(V==="instanceMatrix"&&R.instanceMatrix&&(bt=R.instanceMatrix),V==="instanceColor"&&R.instanceColor&&(bt=R.instanceColor)),bt!==void 0){const Mt=bt.normalized,L=bt.itemSize,tt=t.get(bt);if(tt===void 0)continue;const mt=tt.buffer,wt=tt.type,Ht=tt.bytesPerElement,it=wt===r.INT||wt===r.UNSIGNED_INT||bt.gpuType===op;if(bt.isInterleavedBufferAttribute){const ht=bt.data,Dt=ht.stride,Gt=bt.offset;if(ht.isInstancedInterleavedBuffer){for(let kt=0;kt<nt.locationSize;kt++)x(nt.location+kt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let kt=0;kt<nt.locationSize;kt++)M(nt.location+kt);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let kt=0;kt<nt.locationSize;kt++)U(nt.location+kt,L/nt.locationSize,wt,Mt,Dt*Ht,(Gt+L/nt.locationSize*kt)*Ht,it)}else{if(bt.isInstancedBufferAttribute){for(let ht=0;ht<nt.locationSize;ht++)x(nt.location+ht,bt.meshPerAttribute);R.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ht=0;ht<nt.locationSize;ht++)M(nt.location+ht);r.bindBuffer(r.ARRAY_BUFFER,mt);for(let ht=0;ht<nt.locationSize;ht++)U(nt.location+ht,L/nt.locationSize,wt,Mt,L*Ht,L/nt.locationSize*ht*Ht,it)}}else if(z!==void 0){const Mt=z[V];if(Mt!==void 0)switch(Mt.length){case 2:r.vertexAttrib2fv(nt.location,Mt);break;case 3:r.vertexAttrib3fv(nt.location,Mt);break;case 4:r.vertexAttrib4fv(nt.location,Mt);break;default:r.vertexAttrib1fv(nt.location,Mt)}}}}P()}function I(){q();for(const R in s){const H=s[R];for(const Q in H){const J=H[Q];for(const ct in J)v(J[ct].object),delete J[ct];delete H[Q]}delete s[R]}}function B(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const Q in H){const J=H[Q];for(const ct in J)v(J[ct].object),delete J[ct];delete H[Q]}delete s[R.id]}function F(R){for(const H in s){const Q=s[H];if(Q[R.id]===void 0)continue;const J=Q[R.id];for(const ct in J)v(J[ct].object),delete J[ct];delete Q[R.id]}}function q(){T(),f=!0,c!==o&&(c=o,p(c.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:q,resetDefaultState:T,dispose:I,releaseStatesOfGeometry:B,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:M,disableUnusedAttributes:P}}function xT(r,t,n){let s;function o(p){s=p}function c(p,v){r.drawArrays(s,p,v),n.update(v,s,1)}function f(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),n.update(v,s,g))}function h(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let S=0;for(let E=0;E<g;E++)S+=v[E];n.update(S,s,1)}function m(p,v,g,_){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)f(p[E],v[E],_[E]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,v,0,_,0,g);let E=0;for(let C=0;C<g;C++)E+=v[C]*_[C];n.update(E,s,1)}}this.setMode=o,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function yT(r,t,n,s){let o;function c(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function f(F){return!(F!==Ui&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const q=F===Ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==li&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Hi&&!q)}function m(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=n.precision!==void 0?n.precision:"highp";const v=m(p);v!==p&&(de("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=n.logarithmicDepthBuffer===!0,_=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),U=r.getParameter(r.MAX_VARYING_VECTORS),D=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),B=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:M,maxAttributes:x,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:D,maxSamples:I,samples:B}}function ST(r){const t=this;let n=null,s=0,o=!1,c=!1;const f=new Ns,h=new xe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||s!==0||o;return o=_,s=g.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,_){n=v(g,_,0)},this.setState=function(g,_,S){const E=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,x=r.get(g);if(!o||E===null||E.length===0||c&&!M)c?v(null):p();else{const P=c?0:s,U=P*4;let D=x.clippingState||null;m.value=D,D=v(E,_,U,S);for(let I=0;I!==U;++I)D[I]=n[I];x.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==n&&(m.value=n,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,_,S,E){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=m.value,E!==!0||M===null){const x=S+C*4,P=_.matrixWorldInverse;h.getNormalMatrix(P),(M===null||M.length<x)&&(M=new Float32Array(x));for(let U=0,D=S;U!==C;++U,D+=4)f.copy(g[U]).applyMatrix4(P,h),f.normal.toArray(M,D),M[D+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function MT(r){let t=new WeakMap;function n(f,h){return h===dd?f.mapping=Is:h===pd&&(f.mapping=Hr),f}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===dd||h===pd)if(t.has(f)){const m=t.get(f).texture;return n(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new q_(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",o),n(p.texture,f.mapping)}else return null}}return f}function o(f){const h=f.target;h.removeEventListener("dispose",o);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const rs=4,qv=[.125,.215,.35,.446,.526,.582],Ps=20,bT=256,Zo=new Sp,Yv=new Ce;let Jh=null,$h=0,td=0,ed=!1;const ET=new j;class jv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,s=.1,o=100,c={}){const{size:f=256,position:h=ET}=c;Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,o,m,h),n>0&&this._blur(m,0,0,n),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Jh,$h,td),this._renderer.xr.enabled=ed,t.scissorTest=!1,Pr(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Is||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Jh=this._renderer.getRenderTarget(),$h=this._renderer.getActiveCubeFace(),td=this._renderer.getActiveMipmapLevel(),ed=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ma,format:Ui,colorSpace:Vr,depthBuffer:!1},o=Zv(t,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zv(t,n,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=TT(c)),this._blurMaterial=wT(c,t,n),this._ggxMaterial=AT(c,t,n)}return o}_compileMaterial(t){const n=new rn(new Qn,t);this._renderer.compile(n,Zo)}_sceneToCubeUV(t,n,s,o,c){const m=new oi(90,1,n,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(Yv),g.toneMapping=Vi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rn(new pl,new H_({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let x=!1;const P=t.background;P?P.isColor&&(M.color.copy(P),t.background=null,x=!0):(M.color.copy(Yv),x=!0);for(let U=0;U<6;U++){const D=U%3;D===0?(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+v[U],c.y,c.z)):D===1?(m.up.set(0,0,p[U]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+v[U],c.z)):(m.up.set(0,p[U],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+v[U]));const I=this._cubeSize;Pr(o,D*I,U>2?I:0,I,I),g.setRenderTarget(o),x&&g.render(C,m),g.render(t,m)}g.toneMapping=S,g.autoClear=_,t.background=P}_textureToCubeUV(t,n){const s=this._renderer,o=t.mapping===Is||t.mapping===Hr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qv());const c=o?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;Pr(n,0,0,3*m,2*m),s.setRenderTarget(n),s.render(f,Zo)}_applyPMREM(t){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(t,c-1,c);n.autoClear=s}_applyGGXFilter(t,n,s){const o=this._renderer,c=this._pingPongRenderTarget,f=this._ggxMaterial,h=this._lodMeshes[s];h.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),_=0+p*1.25,S=g*_,{_lodMax:E}=this,C=this._sizeLods[s],M=3*C*(s>E-rs?s-E+rs:0),x=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=S,m.mipInt.value=E-n,Pr(c,M,x,3*C,2*C),o.setRenderTarget(c),o.render(h,Zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,Pr(t,M,x,3*C,2*C),o.setRenderTarget(t),o.render(h,Zo)}_blur(t,n,s,o,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,n,s,o,"latitudinal",c),this._halfBlur(f,t,s,s,o,"longitudinal",c)}_halfBlur(t,n,s,o,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[o];g.material=p;const _=p.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*Ps-1),C=c/E,M=isFinite(c)?1+Math.floor(v*C):Ps;M>Ps&&de(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Ps}`);const x=[];let P=0;for(let F=0;F<Ps;++F){const q=F/C,T=Math.exp(-q*q/2);x.push(T),F===0?P+=T:F<M&&(P+=2*T)}for(let F=0;F<x.length;F++)x[F]=x[F]/P;_.envMap.value=t.texture,_.samples.value=M,_.weights.value=x,_.latitudinal.value=f==="latitudinal",h&&(_.poleAxis.value=h);const{_lodMax:U}=this;_.dTheta.value=E,_.mipInt.value=U-s;const D=this._sizeLods[o],I=3*D*(o>U-rs?o-U+rs:0),B=4*(this._cubeSize-D);Pr(n,I,B,3*D,2*D),m.setRenderTarget(n),m.render(g,Zo)}}function TT(r){const t=[],n=[],s=[];let o=r;const c=r-rs+1+qv.length;for(let f=0;f<c;f++){const h=Math.pow(2,o);t.push(h);let m=1/h;f>r-rs?m=qv[f-r+rs-1]:f===0&&(m=0),n.push(m);const p=1/(h-2),v=-p,g=1+p,_=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,E=6,C=3,M=2,x=1,P=new Float32Array(C*E*S),U=new Float32Array(M*E*S),D=new Float32Array(x*E*S);for(let B=0;B<S;B++){const F=B%3*2/3-1,q=B>2?0:-1,T=[F,q,0,F+2/3,q,0,F+2/3,q+1,0,F,q,0,F+2/3,q+1,0,F,q+1,0];P.set(T,C*E*B),U.set(_,M*E*B);const R=[B,B,B,B,B,B];D.set(R,x*E*B)}const I=new Qn;I.setAttribute("position",new Ni(P,C)),I.setAttribute("uv",new Ni(U,M)),I.setAttribute("faceIndex",new Ni(D,x)),s.push(new rn(I,null)),o>rs&&o--}return{lodMeshes:s,sizeLods:t,sigmas:n}}function Zv(r,t,n){const s=new ki(r,t,n);return s.texture.mapping=ru,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Pr(r,t,n,s,o){r.viewport.set(t,n,s,o),r.scissor.set(t,n,s,o)}function AT(r,t,n){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function wT(r,t,n){const s=new Float32Array(Ps),o=new j(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Ps,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Qv(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Kv(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function cu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function CT(r){let t=new WeakMap,n=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===dd||m===pd,v=m===Is||m===Hr;if(p||v){let g=t.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new jv(r)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const S=h.image;return p&&S&&S.height>0||v&&S&&o(S)?(n===null&&(n=new jv(r)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function o(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function RT(r){const t={};function n(s){if(t[s]!==void 0)return t[s];const o=r.getExtension(s);return t[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&ol("WebGLRenderer: "+s+" extension not supported."),o}}}function DT(r,t,n,s){const o={},c=new WeakMap;function f(g){const _=g.target;_.index!==null&&t.remove(_.index);for(const E in _.attributes)t.remove(_.attributes[E]);_.removeEventListener("dispose",f),delete o[_.id];const S=c.get(_);S&&(t.remove(S),c.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function h(g,_){return o[_.id]===!0||(_.addEventListener("dispose",f),o[_.id]=!0,n.memory.geometries++),_}function m(g){const _=g.attributes;for(const S in _)t.update(_[S],r.ARRAY_BUFFER)}function p(g){const _=[],S=g.index,E=g.attributes.position;let C=0;if(S!==null){const P=S.array;C=S.version;for(let U=0,D=P.length;U<D;U+=3){const I=P[U+0],B=P[U+1],F=P[U+2];_.push(I,B,B,F,F,I)}}else if(E!==void 0){const P=E.array;C=E.version;for(let U=0,D=P.length/3-1;U<D;U+=3){const I=U+0,B=U+1,F=U+2;_.push(I,B,B,F,F,I)}}else return;const M=new(P_(_)?V_:G_)(_,1);M.version=C;const x=c.get(g);x&&t.remove(x),c.set(g,M)}function v(g){const _=c.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function UT(r,t,n){let s;function o(_){s=_}let c,f;function h(_){c=_.type,f=_.bytesPerElement}function m(_,S){r.drawElements(s,S,c,_*f),n.update(S,s,1)}function p(_,S,E){E!==0&&(r.drawElementsInstanced(s,S,c,_*f,E),n.update(S,s,E))}function v(_,S,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,_,0,E);let M=0;for(let x=0;x<E;x++)M+=S[x];n.update(M,s,1)}function g(_,S,E,C){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let x=0;x<_.length;x++)p(_[x]/f,S[x],C[x]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,_,0,C,0,E);let x=0;for(let P=0;P<E;P++)x+=S[P]*C[P];n.update(x,s,1)}}this.setMode=o,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function NT(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,h){switch(n.calls++,f){case r.TRIANGLES:n.triangles+=h*(c/3);break;case r.LINES:n.lines+=h*(c/2);break;case r.LINE_STRIP:n.lines+=h*(c-1);break;case r.LINE_LOOP:n.lines+=h*c;break;case r.POINTS:n.points+=h*c;break;default:De("WebGLInfo: Unknown draw mode:",f);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:s}}function LT(r,t,n){const s=new WeakMap,o=new nn;function c(f,h,m){const p=f.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let _=s.get(h);if(_===void 0||_.count!==g){let R=function(){q.dispose(),s.delete(h),h.removeEventListener("dispose",R)};var S=R;_!==void 0&&_.texture.dispose();const E=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,M=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let D=0;E===!0&&(D=1),C===!0&&(D=2),M===!0&&(D=3);let I=h.attributes.position.count*D,B=1;I>t.maxTextureSize&&(B=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const F=new Float32Array(I*B*4*g),q=new z_(F,I,B,g);q.type=Hi,q.needsUpdate=!0;const T=D*4;for(let H=0;H<g;H++){const Q=x[H],J=P[H],ct=U[H],rt=I*B*4*H;for(let z=0;z<Q.count;z++){const V=z*T;E===!0&&(o.fromBufferAttribute(Q,z),F[rt+V+0]=o.x,F[rt+V+1]=o.y,F[rt+V+2]=o.z,F[rt+V+3]=0),C===!0&&(o.fromBufferAttribute(J,z),F[rt+V+4]=o.x,F[rt+V+5]=o.y,F[rt+V+6]=o.z,F[rt+V+7]=0),M===!0&&(o.fromBufferAttribute(ct,z),F[rt+V+8]=o.x,F[rt+V+9]=o.y,F[rt+V+10]=o.z,F[rt+V+11]=ct.itemSize===4?o.w:1)}}_={count:g,texture:q,size:new qt(I,B)},s.set(h,_),h.addEventListener("dispose",R)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,n);else{let E=0;for(let M=0;M<p.length;M++)E+=p[M];const C=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",_.texture,n),m.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:c}}function OT(r,t,n,s){let o=new WeakMap;function c(m){const p=s.render.frame,v=m.geometry,g=t.get(m,v);if(o.get(g)!==p&&(t.update(g),o.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),o.get(m)!==p&&(n.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,r.ARRAY_BUFFER),o.set(m,p))),m.isSkinnedMesh){const _=m.skeleton;o.get(_)!==p&&(_.update(),o.set(_,p))}return g}function f(){o=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:c,dispose:f}}const PT={[x_]:"LINEAR_TONE_MAPPING",[y_]:"REINHARD_TONE_MAPPING",[S_]:"CINEON_TONE_MAPPING",[M_]:"ACES_FILMIC_TONE_MAPPING",[E_]:"AGX_TONE_MAPPING",[T_]:"NEUTRAL_TONE_MAPPING",[b_]:"CUSTOM_TONE_MAPPING"};function zT(r,t,n,s,o){const c=new ki(t,n,{type:r,depthBuffer:s,stencilBuffer:o}),f=new ki(t,n,{type:Ma,depthBuffer:!1,stencilBuffer:!1}),h=new Qn;h.setAttribute("position",new Ln([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ln([0,2,0,0,2,0],2));const m=new Ab({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new rn(h,m),v=new Sp(-1,1,1,-1,0,1);let g=null,_=null,S=!1,E,C=null,M=[],x=!1;this.setSize=function(P,U){c.setSize(P,U),f.setSize(P,U);for(let D=0;D<M.length;D++){const I=M[D];I.setSize&&I.setSize(P,U)}},this.setEffects=function(P){M=P,x=M.length>0&&M[0].isRenderPass===!0;const U=c.width,D=c.height;for(let I=0;I<M.length;I++){const B=M[I];B.setSize&&B.setSize(U,D)}},this.begin=function(P,U){if(S||P.toneMapping===Vi&&M.length===0)return!1;if(C=U,U!==null){const D=U.width,I=U.height;(c.width!==D||c.height!==I)&&this.setSize(D,I)}return x===!1&&P.setRenderTarget(c),E=P.toneMapping,P.toneMapping=Vi,!0},this.hasRenderPass=function(){return x},this.end=function(P,U){P.toneMapping=E,S=!0;let D=c,I=f;for(let B=0;B<M.length;B++){const F=M[B];if(F.enabled!==!1&&(F.render(P,I,D,U),F.needsSwap!==!1)){const q=D;D=I,I=q}}if(g!==P.outputColorSpace||_!==P.toneMapping){g=P.outputColorSpace,_=P.toneMapping,m.defines={},Ue.getTransfer(g)===Ve&&(m.defines.SRGB_TRANSFER="");const B=PT[_];B&&(m.defines[B]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=D.texture,P.setRenderTarget(C),P.render(p,v),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){c.dispose(),f.dispose(),h.dispose(),m.dispose()}}const rx=new Gn,tp=new ll(1,1),ox=new z_,lx=new MM,cx=new W_,Jv=[],$v=[],t_=new Float32Array(16),e_=new Float32Array(9),n_=new Float32Array(4);function jr(r,t,n){const s=r[0];if(s<=0||s>0)return r;const o=t*n;let c=Jv[o];if(c===void 0&&(c=new Float32Array(o),Jv[o]=c),t!==0){s.toArray(c,0);for(let f=1,h=0;f!==t;++f)h+=n,r[f].toArray(c,h)}return c}function gn(r,t){if(r.length!==t.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==t[n])return!1;return!0}function vn(r,t){for(let n=0,s=t.length;n<s;n++)r[n]=t[n]}function uu(r,t){let n=$v[t];n===void 0&&(n=new Int32Array(t),$v[t]=n);for(let s=0;s!==t;++s)n[s]=r.allocateTextureUnit();return n}function FT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function IT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2fv(this.addr,t),vn(n,t)}}function BT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(gn(n,t))return;r.uniform3fv(this.addr,t),vn(n,t)}}function HT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4fv(this.addr,t),vn(n,t)}}function GT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(gn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),vn(n,t)}else{if(gn(n,s))return;n_.set(s),r.uniformMatrix2fv(this.addr,!1,n_),vn(n,s)}}function VT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(gn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),vn(n,t)}else{if(gn(n,s))return;e_.set(s),r.uniformMatrix3fv(this.addr,!1,e_),vn(n,s)}}function kT(r,t){const n=this.cache,s=t.elements;if(s===void 0){if(gn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),vn(n,t)}else{if(gn(n,s))return;t_.set(s),r.uniformMatrix4fv(this.addr,!1,t_),vn(n,s)}}function XT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function WT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2iv(this.addr,t),vn(n,t)}}function qT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;r.uniform3iv(this.addr,t),vn(n,t)}}function YT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4iv(this.addr,t),vn(n,t)}}function jT(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function ZT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gn(n,t))return;r.uniform2uiv(this.addr,t),vn(n,t)}}function QT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gn(n,t))return;r.uniform3uiv(this.addr,t),vn(n,t)}}function KT(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gn(n,t))return;r.uniform4uiv(this.addr,t),vn(n,t)}}function JT(r,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(tp.compareFunction=n.isReversedDepthBuffer()?pp:dp,c=tp):c=rx,n.setTexture2D(t||c,o)}function $T(r,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(t||lx,o)}function tA(r,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(t||cx,o)}function eA(r,t,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(t||ox,o)}function nA(r){switch(r){case 5126:return FT;case 35664:return IT;case 35665:return BT;case 35666:return HT;case 35674:return GT;case 35675:return VT;case 35676:return kT;case 5124:case 35670:return XT;case 35667:case 35671:return WT;case 35668:case 35672:return qT;case 35669:case 35673:return YT;case 5125:return jT;case 36294:return ZT;case 36295:return QT;case 36296:return KT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return tA;case 36289:case 36303:case 36311:case 36292:return eA}}function iA(r,t){r.uniform1fv(this.addr,t)}function aA(r,t){const n=jr(t,this.size,2);r.uniform2fv(this.addr,n)}function sA(r,t){const n=jr(t,this.size,3);r.uniform3fv(this.addr,n)}function rA(r,t){const n=jr(t,this.size,4);r.uniform4fv(this.addr,n)}function oA(r,t){const n=jr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function lA(r,t){const n=jr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function cA(r,t){const n=jr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function uA(r,t){r.uniform1iv(this.addr,t)}function fA(r,t){r.uniform2iv(this.addr,t)}function hA(r,t){r.uniform3iv(this.addr,t)}function dA(r,t){r.uniform4iv(this.addr,t)}function pA(r,t){r.uniform1uiv(this.addr,t)}function mA(r,t){r.uniform2uiv(this.addr,t)}function gA(r,t){r.uniform3uiv(this.addr,t)}function vA(r,t){r.uniform4uiv(this.addr,t)}function _A(r,t,n){const s=this.cache,o=t.length,c=uu(n,o);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));let f;this.type===r.SAMPLER_2D_SHADOW?f=tp:f=rx;for(let h=0;h!==o;++h)n.setTexture2D(t[h]||f,c[h])}function xA(r,t,n){const s=this.cache,o=t.length,c=uu(n,o);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==o;++f)n.setTexture3D(t[f]||lx,c[f])}function yA(r,t,n){const s=this.cache,o=t.length,c=uu(n,o);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==o;++f)n.setTextureCube(t[f]||cx,c[f])}function SA(r,t,n){const s=this.cache,o=t.length,c=uu(n,o);gn(s,c)||(r.uniform1iv(this.addr,c),vn(s,c));for(let f=0;f!==o;++f)n.setTexture2DArray(t[f]||ox,c[f])}function MA(r){switch(r){case 5126:return iA;case 35664:return aA;case 35665:return sA;case 35666:return rA;case 35674:return oA;case 35675:return lA;case 35676:return cA;case 5124:case 35670:return uA;case 35667:case 35671:return fA;case 35668:case 35672:return hA;case 35669:case 35673:return dA;case 5125:return pA;case 36294:return mA;case 36295:return gA;case 36296:return vA;case 35678:case 36198:case 36298:case 36306:case 35682:return _A;case 35679:case 36299:case 36307:return xA;case 35680:case 36300:case 36308:case 36293:return yA;case 36289:case 36303:case 36311:case 36292:return SA}}class bA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.setValue=nA(n.type)}}class EA{constructor(t,n,s){this.id=t,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=MA(n.type)}}class TA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,s){const o=this.seq;for(let c=0,f=o.length;c!==f;++c){const h=o[c];h.setValue(t,n[h.id],s)}}}const nd=/(\w+)(\])?(\[|\.)?/g;function i_(r,t){r.seq.push(t),r.map[t.id]=t}function AA(r,t,n){const s=r.name,o=s.length;for(nd.lastIndex=0;;){const c=nd.exec(s),f=nd.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===o){i_(n,p===void 0?new bA(h,r,t):new EA(h,r,t));break}else{let g=n.map[h];g===void 0&&(g=new TA(h),i_(n,g)),n=g}}}class nu{constructor(t,n){this.seq=[],this.map={};const s=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const h=t.getActiveUniform(n,f),m=t.getUniformLocation(n,h.name);AA(h,m,this)}const o=[],c=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(f):c.push(f);o.length>0&&(this.seq=o.concat(c))}setValue(t,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(t,s,o)}setOptional(t,n,s){const o=n[s];o!==void 0&&this.setValue(t,s,o)}static upload(t,n,s,o){for(let c=0,f=n.length;c!==f;++c){const h=n[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,o)}}static seqWithValue(t,n){const s=[];for(let o=0,c=t.length;o!==c;++o){const f=t[o];f.id in n&&s.push(f)}return s}}function a_(r,t,n){const s=r.createShader(t);return r.shaderSource(s,n),r.compileShader(s),s}const wA=37297;let CA=0;function RA(r,t){const n=r.split(`
`),s=[],o=Math.max(t-6,0),c=Math.min(t+6,n.length);for(let f=o;f<c;f++){const h=f+1;s.push(`${h===t?">":" "} ${h}: ${n[f]}`)}return s.join(`
`)}const s_=new xe;function DA(r){Ue._getMatrix(s_,Ue.workingColorSpace,r);const t=`mat3( ${s_.elements.map(n=>n.toFixed(4))} )`;switch(Ue.getTransfer(r)){case iu:return[t,"LinearTransferOETF"];case Ve:return[t,"sRGBTransferOETF"];default:return de("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function r_(r,t,n){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return n.toUpperCase()+`

`+c+`

`+RA(r.getShaderSource(t),h)}else return c}function UA(r,t){const n=DA(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const NA={[x_]:"Linear",[y_]:"Reinhard",[S_]:"Cineon",[M_]:"ACESFilmic",[E_]:"AgX",[T_]:"Neutral",[b_]:"Custom"};function LA(r,t){const n=NA[t];return n===void 0?(de("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qc=new j;function OA(){Ue.getLuminanceCoefficients(Qc);const r=Qc.x.toFixed(4),t=Qc.y.toFixed(4),n=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(tl).join(`
`)}function zA(r){const t=[];for(const n in r){const s=r[n];s!==!1&&t.push("#define "+n+" "+s)}return t.join(`
`)}function FA(r,t){const n={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=r.getActiveAttrib(t,o),f=c.name;let h=1;c.type===r.FLOAT_MAT2&&(h=2),c.type===r.FLOAT_MAT3&&(h=3),c.type===r.FLOAT_MAT4&&(h=4),n[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:h}}return n}function tl(r){return r!==""}function o_(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function l_(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const IA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ep(r){return r.replace(IA,HA)}const BA=new Map;function HA(r,t){let n=ye[t];if(n===void 0){const s=BA.get(t);if(s!==void 0)n=ye[s],de('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return ep(n)}const GA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(r){return r.replace(GA,VA)}function VA(r,t,n,s){let o="";for(let c=parseInt(t);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function u_(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const kA={[Kc]:"SHADOWMAP_TYPE_PCF",[Ko]:"SHADOWMAP_TYPE_VSM"};function XA(r){return kA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const WA={[Is]:"ENVMAP_TYPE_CUBE",[Hr]:"ENVMAP_TYPE_CUBE",[ru]:"ENVMAP_TYPE_CUBE_UV"};function qA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":WA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const YA={[Hr]:"ENVMAP_MODE_REFRACTION"};function jA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":YA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ZA={[rp]:"ENVMAP_BLENDING_MULTIPLY",[iM]:"ENVMAP_BLENDING_MIX",[aM]:"ENVMAP_BLENDING_ADD"};function QA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ZA[r.combine]||"ENVMAP_BLENDING_NONE"}function KA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function JA(r,t,n,s){const o=r.getContext(),c=n.defines;let f=n.vertexShader,h=n.fragmentShader;const m=XA(n),p=qA(n),v=jA(n),g=QA(n),_=KA(n),S=PA(n),E=zA(c),C=o.createProgram();let M,x,P=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(M=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(tl).join(`
`),M.length>0&&(M+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(tl).join(`
`),x.length>0&&(x+=`
`)):(M=[u_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(tl).join(`
`),x=[u_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.envMap?"#define "+v:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+m:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Vi?"#define TONE_MAPPING":"",n.toneMapping!==Vi?ye.tonemapping_pars_fragment:"",n.toneMapping!==Vi?LA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,UA("linearToOutputTexel",n.outputColorSpace),OA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(tl).join(`
`)),f=ep(f),f=o_(f,n),f=l_(f,n),h=ep(h),h=o_(h,n),h=l_(h,n),f=c_(f),h=c_(h),n.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,x=["#define varying in",n.glslVersion===vv?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const U=P+M+f,D=P+x+h,I=a_(o,o.VERTEX_SHADER,U),B=a_(o,o.FRAGMENT_SHADER,D);o.attachShader(C,I),o.attachShader(C,B),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(H){if(r.debug.checkShaderErrors){const Q=o.getProgramInfoLog(C)||"",J=o.getShaderInfoLog(I)||"",ct=o.getShaderInfoLog(B)||"",rt=Q.trim(),z=J.trim(),V=ct.trim();let nt=!0,bt=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(nt=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,C,I,B);else{const Mt=r_(o,I,"vertex"),L=r_(o,B,"fragment");De("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+rt+`
`+Mt+`
`+L)}else rt!==""?de("WebGLProgram: Program Info Log:",rt):(z===""||V==="")&&(bt=!1);bt&&(H.diagnostics={runnable:nt,programLog:rt,vertexShader:{log:z,prefix:M},fragmentShader:{log:V,prefix:x}})}o.deleteShader(I),o.deleteShader(B),q=new nu(o,C),T=FA(o,C)}let q;this.getUniforms=function(){return q===void 0&&F(this),q};let T;this.getAttributes=function(){return T===void 0&&F(this),T};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(C,wA)),R},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=CA++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=I,this.fragmentShader=B,this}let $A=0;class t2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,s=t.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(o)===!1&&(f.add(o),o.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let s=n.get(t);return s===void 0&&(s=new Set,n.set(t,s)),s}_getShaderStage(t){const n=this.shaderCache;let s=n.get(t);return s===void 0&&(s=new e2(t),n.set(t,s)),s}}class e2{constructor(t){this.id=$A++,this.code=t,this.usedTimes=0}}function n2(r,t,n,s,o,c,f){const h=new I_,m=new t2,p=new Set,v=[],g=new Map,_=o.logarithmicDepthBuffer;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return p.add(T),T===0?"uv":`uv${T}`}function M(T,R,H,Q,J){const ct=Q.fog,rt=J.geometry,z=T.isMeshStandardMaterial?Q.environment:null,V=(T.isMeshStandardMaterial?n:t).get(T.envMap||z),nt=V&&V.mapping===ru?V.image.height:null,bt=E[T.type];T.precision!==null&&(S=o.getMaxPrecision(T.precision),S!==T.precision&&de("WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const Mt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,L=Mt!==void 0?Mt.length:0;let tt=0;rt.morphAttributes.position!==void 0&&(tt=1),rt.morphAttributes.normal!==void 0&&(tt=2),rt.morphAttributes.color!==void 0&&(tt=3);let mt,wt,Ht,it;if(bt){const Re=Bi[bt];mt=Re.vertexShader,wt=Re.fragmentShader}else mt=T.vertexShader,wt=T.fragmentShader,m.update(T),Ht=m.getVertexShaderID(T),it=m.getFragmentShaderID(T);const ht=r.getRenderTarget(),Dt=r.state.buffers.depth.getReversed(),Gt=J.isInstancedMesh===!0,kt=J.isBatchedMesh===!0,ge=!!T.map,Ee=!!T.matcap,ue=!!V,vt=!!T.aoMap,Et=!!T.lightMap,yt=!!T.bumpMap,Pt=!!T.normalMap,O=!!T.displacementMap,ne=!!T.emissiveMap,Ft=!!T.metalnessMap,ae=!!T.roughnessMap,Ut=T.anisotropy>0,N=T.clearcoat>0,b=T.dispersion>0,W=T.iridescence>0,ut=T.sheen>0,St=T.transmission>0,ft=Ut&&!!T.anisotropyMap,Jt=N&&!!T.clearcoatMap,Lt=N&&!!T.clearcoatNormalMap,Kt=N&&!!T.clearcoatRoughnessMap,oe=W&&!!T.iridescenceMap,Tt=W&&!!T.iridescenceThicknessMap,Ct=ut&&!!T.sheenColorMap,Yt=ut&&!!T.sheenRoughnessMap,Xt=!!T.specularMap,Ot=!!T.specularColorMap,ve=!!T.specularIntensityMap,X=St&&!!T.transmissionMap,It=St&&!!T.thicknessMap,Rt=!!T.gradientMap,Wt=!!T.alphaMap,At=T.alphaTest>0,xt=!!T.alphaHash,Nt=!!T.extensions;let fe=Vi;T.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(fe=r.toneMapping);const Ie={shaderID:bt,shaderType:T.type,shaderName:T.name,vertexShader:mt,fragmentShader:wt,defines:T.defines,customVertexShaderID:Ht,customFragmentShaderID:it,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:kt,batchingColor:kt&&J._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&J.instanceColor!==null,instancingMorph:Gt&&J.morphTexture!==null,outputColorSpace:ht===null?r.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Vr,alphaToCoverage:!!T.alphaToCoverage,map:ge,matcap:Ee,envMap:ue,envMapMode:ue&&V.mapping,envMapCubeUVHeight:nt,aoMap:vt,lightMap:Et,bumpMap:yt,normalMap:Pt,displacementMap:O,emissiveMap:ne,normalMapObjectSpace:Pt&&T.normalMapType===oM,normalMapTangentSpace:Pt&&T.normalMapType===O_,metalnessMap:Ft,roughnessMap:ae,anisotropy:Ut,anisotropyMap:ft,clearcoat:N,clearcoatMap:Jt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Kt,dispersion:b,iridescence:W,iridescenceMap:oe,iridescenceThicknessMap:Tt,sheen:ut,sheenColorMap:Ct,sheenRoughnessMap:Yt,specularMap:Xt,specularColorMap:Ot,specularIntensityMap:ve,transmission:St,transmissionMap:X,thicknessMap:It,gradientMap:Rt,opaque:T.transparent===!1&&T.blending===Fr&&T.alphaToCoverage===!1,alphaMap:Wt,alphaTest:At,alphaHash:xt,combine:T.combine,mapUv:ge&&C(T.map.channel),aoMapUv:vt&&C(T.aoMap.channel),lightMapUv:Et&&C(T.lightMap.channel),bumpMapUv:yt&&C(T.bumpMap.channel),normalMapUv:Pt&&C(T.normalMap.channel),displacementMapUv:O&&C(T.displacementMap.channel),emissiveMapUv:ne&&C(T.emissiveMap.channel),metalnessMapUv:Ft&&C(T.metalnessMap.channel),roughnessMapUv:ae&&C(T.roughnessMap.channel),anisotropyMapUv:ft&&C(T.anisotropyMap.channel),clearcoatMapUv:Jt&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:oe&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&C(T.sheenRoughnessMap.channel),specularMapUv:Xt&&C(T.specularMap.channel),specularColorMapUv:Ot&&C(T.specularColorMap.channel),specularIntensityMapUv:ve&&C(T.specularIntensityMap.channel),transmissionMapUv:X&&C(T.transmissionMap.channel),thicknessMapUv:It&&C(T.thicknessMap.channel),alphaMapUv:Wt&&C(T.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Pt||Ut),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!rt.attributes.uv&&(ge||Wt),fog:!!ct,useFog:T.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Dt,skinning:J.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:tt,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:T.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:fe,decodeVideoTexture:ge&&T.map.isVideoTexture===!0&&Ue.getTransfer(T.map.colorSpace)===Ve,decodeVideoTextureEmissive:ne&&T.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(T.emissiveMap.colorSpace)===Ve,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===_a,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Nt&&T.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&T.extensions.multiDraw===!0||kt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ie.vertexUv1s=p.has(1),Ie.vertexUv2s=p.has(2),Ie.vertexUv3s=p.has(3),p.clear(),Ie}function x(T){const R=[];if(T.shaderID?R.push(T.shaderID):(R.push(T.customVertexShaderID),R.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)R.push(H),R.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(P(R,T),U(R,T),R.push(r.outputColorSpace)),R.push(T.customProgramCacheKey),R.join()}function P(T,R){T.push(R.precision),T.push(R.outputColorSpace),T.push(R.envMapMode),T.push(R.envMapCubeUVHeight),T.push(R.mapUv),T.push(R.alphaMapUv),T.push(R.lightMapUv),T.push(R.aoMapUv),T.push(R.bumpMapUv),T.push(R.normalMapUv),T.push(R.displacementMapUv),T.push(R.emissiveMapUv),T.push(R.metalnessMapUv),T.push(R.roughnessMapUv),T.push(R.anisotropyMapUv),T.push(R.clearcoatMapUv),T.push(R.clearcoatNormalMapUv),T.push(R.clearcoatRoughnessMapUv),T.push(R.iridescenceMapUv),T.push(R.iridescenceThicknessMapUv),T.push(R.sheenColorMapUv),T.push(R.sheenRoughnessMapUv),T.push(R.specularMapUv),T.push(R.specularColorMapUv),T.push(R.specularIntensityMapUv),T.push(R.transmissionMapUv),T.push(R.thicknessMapUv),T.push(R.combine),T.push(R.fogExp2),T.push(R.sizeAttenuation),T.push(R.morphTargetsCount),T.push(R.morphAttributeCount),T.push(R.numDirLights),T.push(R.numPointLights),T.push(R.numSpotLights),T.push(R.numSpotLightMaps),T.push(R.numHemiLights),T.push(R.numRectAreaLights),T.push(R.numDirLightShadows),T.push(R.numPointLightShadows),T.push(R.numSpotLightShadows),T.push(R.numSpotLightShadowsWithMaps),T.push(R.numLightProbes),T.push(R.shadowMapType),T.push(R.toneMapping),T.push(R.numClippingPlanes),T.push(R.numClipIntersection),T.push(R.depthPacking)}function U(T,R){h.disableAll(),R.instancing&&h.enable(0),R.instancingColor&&h.enable(1),R.instancingMorph&&h.enable(2),R.matcap&&h.enable(3),R.envMap&&h.enable(4),R.normalMapObjectSpace&&h.enable(5),R.normalMapTangentSpace&&h.enable(6),R.clearcoat&&h.enable(7),R.iridescence&&h.enable(8),R.alphaTest&&h.enable(9),R.vertexColors&&h.enable(10),R.vertexAlphas&&h.enable(11),R.vertexUv1s&&h.enable(12),R.vertexUv2s&&h.enable(13),R.vertexUv3s&&h.enable(14),R.vertexTangents&&h.enable(15),R.anisotropy&&h.enable(16),R.alphaHash&&h.enable(17),R.batching&&h.enable(18),R.dispersion&&h.enable(19),R.batchingColor&&h.enable(20),R.gradientMap&&h.enable(21),T.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),T.push(h.mask)}function D(T){const R=E[T.type];let H;if(R){const Q=Bi[R];H=PM.clone(Q.uniforms)}else H=T.uniforms;return H}function I(T,R){let H=g.get(R);return H!==void 0?++H.usedTimes:(H=new JA(r,R,T,c),v.push(H),g.set(R,H)),H}function B(T){if(--T.usedTimes===0){const R=v.indexOf(T);v[R]=v[v.length-1],v.pop(),g.delete(T.cacheKey),T.destroy()}}function F(T){m.remove(T)}function q(){m.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:D,acquireProgram:I,releaseProgram:B,releaseShaderCache:F,programs:v,dispose:q}}function i2(){let r=new WeakMap;function t(f){return r.has(f)}function n(f){let h=r.get(f);return h===void 0&&(h={},r.set(f,h)),h}function s(f){r.delete(f)}function o(f,h,m){r.get(f)[h]=m}function c(){r=new WeakMap}return{has:t,get:n,remove:s,update:o,dispose:c}}function a2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function f_(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function h_(){const r=[];let t=0;const n=[],s=[],o=[];function c(){t=0,n.length=0,s.length=0,o.length=0}function f(g,_,S,E,C,M){let x=r[t];return x===void 0?(x={id:g.id,object:g,geometry:_,material:S,groupOrder:E,renderOrder:g.renderOrder,z:C,group:M},r[t]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=S,x.groupOrder=E,x.renderOrder=g.renderOrder,x.z=C,x.group=M),t++,x}function h(g,_,S,E,C,M){const x=f(g,_,S,E,C,M);S.transmission>0?s.push(x):S.transparent===!0?o.push(x):n.push(x)}function m(g,_,S,E,C,M){const x=f(g,_,S,E,C,M);S.transmission>0?s.unshift(x):S.transparent===!0?o.unshift(x):n.unshift(x)}function p(g,_){n.length>1&&n.sort(g||a2),s.length>1&&s.sort(_||f_),o.length>1&&o.sort(_||f_)}function v(){for(let g=t,_=r.length;g<_;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:h,unshift:m,finish:v,sort:p}}function s2(){let r=new WeakMap;function t(s,o){const c=r.get(s);let f;return c===void 0?(f=new h_,r.set(s,[f])):o>=c.length?(f=new h_,c.push(f)):f=c[o],f}function n(){r=new WeakMap}return{get:t,dispose:n}}function r2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new j,color:new Ce};break;case"SpotLight":n={position:new j,direction:new j,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":n={color:new Ce,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=n,n}}}function o2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let l2=0;function c2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function u2(r){const t=new r2,n=o2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new j);const o=new j,c=new Je,f=new Je;function h(p){let v=0,g=0,_=0;for(let T=0;T<9;T++)s.probe[T].set(0,0,0);let S=0,E=0,C=0,M=0,x=0,P=0,U=0,D=0,I=0,B=0,F=0;p.sort(c2);for(let T=0,R=p.length;T<R;T++){const H=p[T],Q=H.color,J=H.intensity,ct=H.distance;let rt=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Gr?rt=H.shadow.map.texture:rt=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=Q.r*J,g+=Q.g*J,_+=Q.b*J;else if(H.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(H.sh.coefficients[z],J);F++}else if(H.isDirectionalLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const V=H.shadow,nt=n.get(H);nt.shadowIntensity=V.intensity,nt.shadowBias=V.bias,nt.shadowNormalBias=V.normalBias,nt.shadowRadius=V.radius,nt.shadowMapSize=V.mapSize,s.directionalShadow[S]=nt,s.directionalShadowMap[S]=rt,s.directionalShadowMatrix[S]=H.shadow.matrix,P++}s.directional[S]=z,S++}else if(H.isSpotLight){const z=t.get(H);z.position.setFromMatrixPosition(H.matrixWorld),z.color.copy(Q).multiplyScalar(J),z.distance=ct,z.coneCos=Math.cos(H.angle),z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),z.decay=H.decay,s.spot[C]=z;const V=H.shadow;if(H.map&&(s.spotLightMap[I]=H.map,I++,V.updateMatrices(H),H.castShadow&&B++),s.spotLightMatrix[C]=V.matrix,H.castShadow){const nt=n.get(H);nt.shadowIntensity=V.intensity,nt.shadowBias=V.bias,nt.shadowNormalBias=V.normalBias,nt.shadowRadius=V.radius,nt.shadowMapSize=V.mapSize,s.spotShadow[C]=nt,s.spotShadowMap[C]=rt,D++}C++}else if(H.isRectAreaLight){const z=t.get(H);z.color.copy(Q).multiplyScalar(J),z.halfWidth.set(H.width*.5,0,0),z.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=z,M++}else if(H.isPointLight){const z=t.get(H);if(z.color.copy(H.color).multiplyScalar(H.intensity),z.distance=H.distance,z.decay=H.decay,H.castShadow){const V=H.shadow,nt=n.get(H);nt.shadowIntensity=V.intensity,nt.shadowBias=V.bias,nt.shadowNormalBias=V.normalBias,nt.shadowRadius=V.radius,nt.shadowMapSize=V.mapSize,nt.shadowCameraNear=V.camera.near,nt.shadowCameraFar=V.camera.far,s.pointShadow[E]=nt,s.pointShadowMap[E]=rt,s.pointShadowMatrix[E]=H.shadow.matrix,U++}s.point[E]=z,E++}else if(H.isHemisphereLight){const z=t.get(H);z.skyColor.copy(H.color).multiplyScalar(J),z.groundColor.copy(H.groundColor).multiplyScalar(J),s.hemi[x]=z,x++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Vt.LTC_FLOAT_1,s.rectAreaLTC2=Vt.LTC_FLOAT_2):(s.rectAreaLTC1=Vt.LTC_HALF_1,s.rectAreaLTC2=Vt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=_;const q=s.hash;(q.directionalLength!==S||q.pointLength!==E||q.spotLength!==C||q.rectAreaLength!==M||q.hemiLength!==x||q.numDirectionalShadows!==P||q.numPointShadows!==U||q.numSpotShadows!==D||q.numSpotMaps!==I||q.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=C,s.rectArea.length=M,s.point.length=E,s.hemi.length=x,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=U,s.pointShadowMap.length=U,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=U,s.spotLightMatrix.length=D+I-B,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=F,q.directionalLength=S,q.pointLength=E,q.spotLength=C,q.rectAreaLength=M,q.hemiLength=x,q.numDirectionalShadows=P,q.numPointShadows=U,q.numSpotShadows=D,q.numSpotMaps=I,q.numLightProbes=F,s.version=l2++)}function m(p,v){let g=0,_=0,S=0,E=0,C=0;const M=v.matrixWorldInverse;for(let x=0,P=p.length;x<P;x++){const U=p[x];if(U.isDirectionalLight){const D=s.directional[g];D.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(M),g++}else if(U.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),D.direction.sub(o),D.direction.transformDirection(M),S++}else if(U.isRectAreaLight){const D=s.rectArea[E];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),f.identity(),c.copy(U.matrixWorld),c.premultiply(M),f.extractRotation(c),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),E++}else if(U.isPointLight){const D=s.point[_];D.position.setFromMatrixPosition(U.matrixWorld),D.position.applyMatrix4(M),_++}else if(U.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(U.matrixWorld),D.direction.transformDirection(M),C++}}}return{setup:h,setupView:m,state:s}}function d_(r){const t=new u2(r),n=[],s=[];function o(v){p.camera=v,n.length=0,s.length=0}function c(v){n.push(v)}function f(v){s.push(v)}function h(){t.setup(n)}function m(v){t.setupView(n,v)}const p={lightsArray:n,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function f2(r){let t=new WeakMap;function n(o,c=0){const f=t.get(o);let h;return f===void 0?(h=new d_(r),t.set(o,[h])):c>=f.length?(h=new d_(r),f.push(h)):h=f[c],h}function s(){t=new WeakMap}return{get:n,dispose:s}}const h2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,d2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,p2=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],m2=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],p_=new Je,Qo=new j,id=new j;function g2(r,t,n){let s=new gp;const o=new qt,c=new qt,f=new nn,h=new wb,m=new Cb,p={},v=n.maxTextureSize,g={[os]:Zn,[Zn]:os,[_a]:_a},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:h2,fragmentShader:d2}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new Qn;E.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new rn(E,_),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let x=this.type;this.render=function(B,F,q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||B.length===0)return;B.type===__&&(de("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),B.type=Kc);const T=r.getRenderTarget(),R=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),Q=r.state;Q.setBlending(ya),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const J=x!==this.type;J&&F.traverse(function(ct){ct.material&&(Array.isArray(ct.material)?ct.material.forEach(rt=>rt.needsUpdate=!0):ct.material.needsUpdate=!0)});for(let ct=0,rt=B.length;ct<rt;ct++){const z=B[ct],V=z.shadow;if(V===void 0){de("WebGLShadowMap:",z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const nt=V.getFrameExtents();if(o.multiply(nt),c.copy(V.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(c.x=Math.floor(v/nt.x),o.x=c.x*nt.x,V.mapSize.x=c.x),o.y>v&&(c.y=Math.floor(v/nt.y),o.y=c.y*nt.y,V.mapSize.y=c.y)),V.map===null||J===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ko){if(z.isPointLight){de("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ki(o.x,o.y,{format:Gr,type:Ma,minFilter:In,magFilter:In,generateMipmaps:!1}),V.map.texture.name=z.name+".shadowMap",V.map.depthTexture=new ll(o.x,o.y,Hi),V.map.depthTexture.name=z.name+".shadowMapDepth",V.map.depthTexture.format=ba,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un}else{z.isPointLight?(V.map=new q_(o.x),V.map.depthTexture=new qM(o.x,Xi)):(V.map=new ki(o.x,o.y),V.map.depthTexture=new ll(o.x,o.y,Xi)),V.map.depthTexture.name=z.name+".shadowMap",V.map.depthTexture.format=ba;const Mt=r.state.buffers.depth.getReversed();this.type===Kc?(V.map.depthTexture.compareFunction=Mt?pp:dp,V.map.depthTexture.minFilter=In,V.map.depthTexture.magFilter=In):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Un,V.map.depthTexture.magFilter=Un)}V.camera.updateProjectionMatrix()}const bt=V.map.isWebGLCubeRenderTarget?6:1;for(let Mt=0;Mt<bt;Mt++){if(V.map.isWebGLCubeRenderTarget)r.setRenderTarget(V.map,Mt),r.clear();else{Mt===0&&(r.setRenderTarget(V.map),r.clear());const L=V.getViewport(Mt);f.set(c.x*L.x,c.y*L.y,c.x*L.z,c.y*L.w),Q.viewport(f)}if(z.isPointLight){const L=V.camera,tt=V.matrix,mt=z.distance||L.far;mt!==L.far&&(L.far=mt,L.updateProjectionMatrix()),Qo.setFromMatrixPosition(z.matrixWorld),L.position.copy(Qo),id.copy(L.position),id.add(p2[Mt]),L.up.copy(m2[Mt]),L.lookAt(id),L.updateMatrixWorld(),tt.makeTranslation(-Qo.x,-Qo.y,-Qo.z),p_.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),V._frustum.setFromProjectionMatrix(p_,L.coordinateSystem,L.reversedDepth)}else V.updateMatrices(z);s=V.getFrustum(),D(F,q,V.camera,z,this.type)}V.isPointLightShadow!==!0&&this.type===Ko&&P(V,q),V.needsUpdate=!1}x=this.type,M.needsUpdate=!1,r.setRenderTarget(T,R,H)};function P(B,F){const q=t.update(C);_.defines.VSM_SAMPLES!==B.blurSamples&&(_.defines.VSM_SAMPLES=B.blurSamples,S.defines.VSM_SAMPLES=B.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ki(o.x,o.y,{format:Gr,type:Ma})),_.uniforms.shadow_pass.value=B.map.depthTexture,_.uniforms.resolution.value=B.mapSize,_.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(F,null,q,_,C,null),S.uniforms.shadow_pass.value=B.mapPass.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(F,null,q,S,C,null)}function U(B,F,q,T){let R=null;const H=q.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(H!==void 0)R=H;else if(R=q.isPointLight===!0?m:h,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Q=R.uuid,J=F.uuid;let ct=p[Q];ct===void 0&&(ct={},p[Q]=ct);let rt=ct[J];rt===void 0&&(rt=R.clone(),ct[J]=rt,F.addEventListener("dispose",I)),R=rt}if(R.visible=F.visible,R.wireframe=F.wireframe,T===Ko?R.side=F.shadowSide!==null?F.shadowSide:F.side:R.side=F.shadowSide!==null?F.shadowSide:g[F.side],R.alphaMap=F.alphaMap,R.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,R.map=F.map,R.clipShadows=F.clipShadows,R.clippingPlanes=F.clippingPlanes,R.clipIntersection=F.clipIntersection,R.displacementMap=F.displacementMap,R.displacementScale=F.displacementScale,R.displacementBias=F.displacementBias,R.wireframeLinewidth=F.wireframeLinewidth,R.linewidth=F.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const Q=r.properties.get(R);Q.light=q}return R}function D(B,F,q,T,R){if(B.visible===!1)return;if(B.layers.test(F.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&R===Ko)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,B.matrixWorld);const J=t.update(B),ct=B.material;if(Array.isArray(ct)){const rt=J.groups;for(let z=0,V=rt.length;z<V;z++){const nt=rt[z],bt=ct[nt.materialIndex];if(bt&&bt.visible){const Mt=U(B,bt,T,R);B.onBeforeShadow(r,B,F,q,J,Mt,nt),r.renderBufferDirect(q,null,J,Mt,B,nt),B.onAfterShadow(r,B,F,q,J,Mt,nt)}}}else if(ct.visible){const rt=U(B,ct,T,R);B.onBeforeShadow(r,B,F,q,J,rt,null),r.renderBufferDirect(q,null,J,rt,B,null),B.onAfterShadow(r,B,F,q,J,rt,null)}}const Q=B.children;for(let J=0,ct=Q.length;J<ct;J++)D(Q[J],F,q,T,R)}function I(B){B.target.removeEventListener("dispose",I);for(const q in p){const T=p[q],R=B.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}const v2={[rd]:od,[ld]:fd,[cd]:hd,[Br]:ud,[od]:rd,[fd]:ld,[hd]:cd,[ud]:Br};function _2(r,t){function n(){let X=!1;const It=new nn;let Rt=null;const Wt=new nn(0,0,0,0);return{setMask:function(At){Rt!==At&&!X&&(r.colorMask(At,At,At,At),Rt=At)},setLocked:function(At){X=At},setClear:function(At,xt,Nt,fe,Ie){Ie===!0&&(At*=fe,xt*=fe,Nt*=fe),It.set(At,xt,Nt,fe),Wt.equals(It)===!1&&(r.clearColor(At,xt,Nt,fe),Wt.copy(It))},reset:function(){X=!1,Rt=null,Wt.set(-1,0,0,0)}}}function s(){let X=!1,It=!1,Rt=null,Wt=null,At=null;return{setReversed:function(xt){if(It!==xt){const Nt=t.get("EXT_clip_control");xt?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),It=xt;const fe=At;At=null,this.setClear(fe)}},getReversed:function(){return It},setTest:function(xt){xt?ht(r.DEPTH_TEST):Dt(r.DEPTH_TEST)},setMask:function(xt){Rt!==xt&&!X&&(r.depthMask(xt),Rt=xt)},setFunc:function(xt){if(It&&(xt=v2[xt]),Wt!==xt){switch(xt){case rd:r.depthFunc(r.NEVER);break;case od:r.depthFunc(r.ALWAYS);break;case ld:r.depthFunc(r.LESS);break;case Br:r.depthFunc(r.LEQUAL);break;case cd:r.depthFunc(r.EQUAL);break;case ud:r.depthFunc(r.GEQUAL);break;case fd:r.depthFunc(r.GREATER);break;case hd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Wt=xt}},setLocked:function(xt){X=xt},setClear:function(xt){At!==xt&&(It&&(xt=1-xt),r.clearDepth(xt),At=xt)},reset:function(){X=!1,Rt=null,Wt=null,At=null,It=!1}}}function o(){let X=!1,It=null,Rt=null,Wt=null,At=null,xt=null,Nt=null,fe=null,Ie=null;return{setTest:function(Re){X||(Re?ht(r.STENCIL_TEST):Dt(r.STENCIL_TEST))},setMask:function(Re){It!==Re&&!X&&(r.stencilMask(Re),It=Re)},setFunc:function(Re,On,Si){(Rt!==Re||Wt!==On||At!==Si)&&(r.stencilFunc(Re,On,Si),Rt=Re,Wt=On,At=Si)},setOp:function(Re,On,Si){(xt!==Re||Nt!==On||fe!==Si)&&(r.stencilOp(Re,On,Si),xt=Re,Nt=On,fe=Si)},setLocked:function(Re){X=Re},setClear:function(Re){Ie!==Re&&(r.clearStencil(Re),Ie=Re)},reset:function(){X=!1,It=null,Rt=null,Wt=null,At=null,xt=null,Nt=null,fe=null,Ie=null}}}const c=new n,f=new s,h=new o,m=new WeakMap,p=new WeakMap;let v={},g={},_=new WeakMap,S=[],E=null,C=!1,M=null,x=null,P=null,U=null,D=null,I=null,B=null,F=new Ce(0,0,0),q=0,T=!1,R=null,H=null,Q=null,J=null,ct=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,V=0;const nt=r.getParameter(r.VERSION);nt.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(nt)[1]),z=V>=1):nt.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),z=V>=2);let bt=null,Mt={};const L=r.getParameter(r.SCISSOR_BOX),tt=r.getParameter(r.VIEWPORT),mt=new nn().fromArray(L),wt=new nn().fromArray(tt);function Ht(X,It,Rt,Wt){const At=new Uint8Array(4),xt=r.createTexture();r.bindTexture(X,xt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Nt=0;Nt<Rt;Nt++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(It,0,r.RGBA,1,1,Wt,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(It+Nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return xt}const it={};it[r.TEXTURE_2D]=Ht(r.TEXTURE_2D,r.TEXTURE_2D,1),it[r.TEXTURE_CUBE_MAP]=Ht(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[r.TEXTURE_2D_ARRAY]=Ht(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),it[r.TEXTURE_3D]=Ht(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),ht(r.DEPTH_TEST),f.setFunc(Br),yt(!1),Pt(fv),ht(r.CULL_FACE),vt(ya);function ht(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function Dt(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function Gt(X,It){return g[X]!==It?(r.bindFramebuffer(X,It),g[X]=It,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=It),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=It),!0):!1}function kt(X,It){let Rt=S,Wt=!1;if(X){Rt=_.get(It),Rt===void 0&&(Rt=[],_.set(It,Rt));const At=X.textures;if(Rt.length!==At.length||Rt[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Nt=At.length;xt<Nt;xt++)Rt[xt]=r.COLOR_ATTACHMENT0+xt;Rt.length=At.length,Wt=!0}}else Rt[0]!==r.BACK&&(Rt[0]=r.BACK,Wt=!0);Wt&&r.drawBuffers(Rt)}function ge(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const Ee={[Ls]:r.FUNC_ADD,[HS]:r.FUNC_SUBTRACT,[GS]:r.FUNC_REVERSE_SUBTRACT};Ee[VS]=r.MIN,Ee[kS]=r.MAX;const ue={[XS]:r.ZERO,[WS]:r.ONE,[qS]:r.SRC_COLOR,[ad]:r.SRC_ALPHA,[JS]:r.SRC_ALPHA_SATURATE,[QS]:r.DST_COLOR,[jS]:r.DST_ALPHA,[YS]:r.ONE_MINUS_SRC_COLOR,[sd]:r.ONE_MINUS_SRC_ALPHA,[KS]:r.ONE_MINUS_DST_COLOR,[ZS]:r.ONE_MINUS_DST_ALPHA,[$S]:r.CONSTANT_COLOR,[tM]:r.ONE_MINUS_CONSTANT_COLOR,[eM]:r.CONSTANT_ALPHA,[nM]:r.ONE_MINUS_CONSTANT_ALPHA};function vt(X,It,Rt,Wt,At,xt,Nt,fe,Ie,Re){if(X===ya){C===!0&&(Dt(r.BLEND),C=!1);return}if(C===!1&&(ht(r.BLEND),C=!0),X!==BS){if(X!==M||Re!==T){if((x!==Ls||D!==Ls)&&(r.blendEquation(r.FUNC_ADD),x=Ls,D=Ls),Re)switch(X){case Fr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hv:r.blendFunc(r.ONE,r.ONE);break;case dv:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case pv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:De("WebGLState: Invalid blending: ",X);break}else switch(X){case Fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case hv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case dv:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case pv:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",X);break}P=null,U=null,I=null,B=null,F.set(0,0,0),q=0,M=X,T=Re}return}At=At||It,xt=xt||Rt,Nt=Nt||Wt,(It!==x||At!==D)&&(r.blendEquationSeparate(Ee[It],Ee[At]),x=It,D=At),(Rt!==P||Wt!==U||xt!==I||Nt!==B)&&(r.blendFuncSeparate(ue[Rt],ue[Wt],ue[xt],ue[Nt]),P=Rt,U=Wt,I=xt,B=Nt),(fe.equals(F)===!1||Ie!==q)&&(r.blendColor(fe.r,fe.g,fe.b,Ie),F.copy(fe),q=Ie),M=X,T=!1}function Et(X,It){X.side===_a?Dt(r.CULL_FACE):ht(r.CULL_FACE);let Rt=X.side===Zn;It&&(Rt=!Rt),yt(Rt),X.blending===Fr&&X.transparent===!1?vt(ya):vt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),c.setMask(X.colorWrite);const Wt=X.stencilWrite;h.setTest(Wt),Wt&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),ne(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):Dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function yt(X){R!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),R=X)}function Pt(X){X!==FS?(ht(r.CULL_FACE),X!==H&&(X===fv?r.cullFace(r.BACK):X===IS?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Dt(r.CULL_FACE),H=X}function O(X){X!==Q&&(z&&r.lineWidth(X),Q=X)}function ne(X,It,Rt){X?(ht(r.POLYGON_OFFSET_FILL),(J!==It||ct!==Rt)&&(r.polygonOffset(It,Rt),J=It,ct=Rt)):Dt(r.POLYGON_OFFSET_FILL)}function Ft(X){X?ht(r.SCISSOR_TEST):Dt(r.SCISSOR_TEST)}function ae(X){X===void 0&&(X=r.TEXTURE0+rt-1),bt!==X&&(r.activeTexture(X),bt=X)}function Ut(X,It,Rt){Rt===void 0&&(bt===null?Rt=r.TEXTURE0+rt-1:Rt=bt);let Wt=Mt[Rt];Wt===void 0&&(Wt={type:void 0,texture:void 0},Mt[Rt]=Wt),(Wt.type!==X||Wt.texture!==It)&&(bt!==Rt&&(r.activeTexture(Rt),bt=Rt),r.bindTexture(X,It||it[X]),Wt.type=X,Wt.texture=It)}function N(){const X=Mt[bt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function ut(){try{r.texSubImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function St(){try{r.texSubImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function Jt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function Lt(){try{r.texStorage2D(...arguments)}catch(X){De("WebGLState:",X)}}function Kt(){try{r.texStorage3D(...arguments)}catch(X){De("WebGLState:",X)}}function oe(){try{r.texImage2D(...arguments)}catch(X){De("WebGLState:",X)}}function Tt(){try{r.texImage3D(...arguments)}catch(X){De("WebGLState:",X)}}function Ct(X){mt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),mt.copy(X))}function Yt(X){wt.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),wt.copy(X))}function Xt(X,It){let Rt=p.get(It);Rt===void 0&&(Rt=new WeakMap,p.set(It,Rt));let Wt=Rt.get(X);Wt===void 0&&(Wt=r.getUniformBlockIndex(It,X.name),Rt.set(X,Wt))}function Ot(X,It){const Wt=p.get(It).get(X);m.get(It)!==Wt&&(r.uniformBlockBinding(It,Wt,X.__bindingPointIndex),m.set(It,Wt))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},bt=null,Mt={},g={},_=new WeakMap,S=[],E=null,C=!1,M=null,x=null,P=null,U=null,D=null,I=null,B=null,F=new Ce(0,0,0),q=0,T=!1,R=null,H=null,Q=null,J=null,ct=null,mt.set(0,0,r.canvas.width,r.canvas.height),wt.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:ht,disable:Dt,bindFramebuffer:Gt,drawBuffers:kt,useProgram:ge,setBlending:vt,setMaterial:Et,setFlipSided:yt,setCullFace:Pt,setLineWidth:O,setPolygonOffset:ne,setScissorTest:Ft,activeTexture:ae,bindTexture:Ut,unbindTexture:N,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:oe,texImage3D:Tt,updateUBOMapping:Xt,uniformBlockBinding:Ot,texStorage2D:Lt,texStorage3D:Kt,texSubImage2D:ut,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:Jt,scissor:Ct,viewport:Yt,reset:ve}}function x2(r,t,n,s,o,c,f){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new qt,v=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(N,b){return S?new OffscreenCanvas(N,b):su("canvas")}function C(N,b,W){let ut=1;const St=Ut(N);if((St.width>W||St.height>W)&&(ut=W/Math.max(St.width,St.height)),ut<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const ft=Math.floor(ut*St.width),Jt=Math.floor(ut*St.height);g===void 0&&(g=E(ft,Jt));const Lt=b?E(ft,Jt):g;return Lt.width=ft,Lt.height=Jt,Lt.getContext("2d").drawImage(N,0,0,ft,Jt),de("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ft+"x"+Jt+")."),Lt}else return"data"in N&&de("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),N;return N}function M(N){return N.generateMipmaps}function x(N){r.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function U(N,b,W,ut,St=!1){if(N!==null){if(r[N]!==void 0)return r[N];de("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let ft=b;if(b===r.RED&&(W===r.FLOAT&&(ft=r.R32F),W===r.HALF_FLOAT&&(ft=r.R16F),W===r.UNSIGNED_BYTE&&(ft=r.R8)),b===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.R8UI),W===r.UNSIGNED_SHORT&&(ft=r.R16UI),W===r.UNSIGNED_INT&&(ft=r.R32UI),W===r.BYTE&&(ft=r.R8I),W===r.SHORT&&(ft=r.R16I),W===r.INT&&(ft=r.R32I)),b===r.RG&&(W===r.FLOAT&&(ft=r.RG32F),W===r.HALF_FLOAT&&(ft=r.RG16F),W===r.UNSIGNED_BYTE&&(ft=r.RG8)),b===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.RG8UI),W===r.UNSIGNED_SHORT&&(ft=r.RG16UI),W===r.UNSIGNED_INT&&(ft=r.RG32UI),W===r.BYTE&&(ft=r.RG8I),W===r.SHORT&&(ft=r.RG16I),W===r.INT&&(ft=r.RG32I)),b===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),W===r.UNSIGNED_INT&&(ft=r.RGB32UI),W===r.BYTE&&(ft=r.RGB8I),W===r.SHORT&&(ft=r.RGB16I),W===r.INT&&(ft=r.RGB32I)),b===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),W===r.UNSIGNED_INT&&(ft=r.RGBA32UI),W===r.BYTE&&(ft=r.RGBA8I),W===r.SHORT&&(ft=r.RGBA16I),W===r.INT&&(ft=r.RGBA32I)),b===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),b===r.RGBA){const Jt=St?iu:Ue.getTransfer(ut);W===r.FLOAT&&(ft=r.RGBA32F),W===r.HALF_FLOAT&&(ft=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ft=Jt===Ve?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function D(N,b){let W;return N?b===null||b===Xi||b===rl?W=r.DEPTH24_STENCIL8:b===Hi?W=r.DEPTH32F_STENCIL8:b===sl&&(W=r.DEPTH24_STENCIL8,de("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xi||b===rl?W=r.DEPTH_COMPONENT24:b===Hi?W=r.DEPTH_COMPONENT32F:b===sl&&(W=r.DEPTH_COMPONENT16),W}function I(N,b){return M(N)===!0||N.isFramebufferTexture&&N.minFilter!==Un&&N.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?b.mipmaps.length:1}function B(N){const b=N.target;b.removeEventListener("dispose",B),q(b),b.isVideoTexture&&v.delete(b)}function F(N){const b=N.target;b.removeEventListener("dispose",F),R(b)}function q(N){const b=s.get(N);if(b.__webglInit===void 0)return;const W=N.source,ut=_.get(W);if(ut){const St=ut[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&T(N),Object.keys(ut).length===0&&_.delete(W)}s.remove(N)}function T(N){const b=s.get(N);r.deleteTexture(b.__webglTexture);const W=N.source,ut=_.get(W);delete ut[b.__cacheKey],f.memory.textures--}function R(N){const b=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ut=0;ut<6;ut++){if(Array.isArray(b.__webglFramebuffer[ut]))for(let St=0;St<b.__webglFramebuffer[ut].length;St++)r.deleteFramebuffer(b.__webglFramebuffer[ut][St]);else r.deleteFramebuffer(b.__webglFramebuffer[ut]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[ut])}else{if(Array.isArray(b.__webglFramebuffer))for(let ut=0;ut<b.__webglFramebuffer.length;ut++)r.deleteFramebuffer(b.__webglFramebuffer[ut]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ut=0;ut<b.__webglColorRenderbuffer.length;ut++)b.__webglColorRenderbuffer[ut]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[ut]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=N.textures;for(let ut=0,St=W.length;ut<St;ut++){const ft=s.get(W[ut]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),f.memory.textures--),s.remove(W[ut])}s.remove(N)}let H=0;function Q(){H=0}function J(){const N=H;return N>=o.maxTextures&&de("WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),H+=1,N}function ct(N){const b=[];return b.push(N.wrapS),b.push(N.wrapT),b.push(N.wrapR||0),b.push(N.magFilter),b.push(N.minFilter),b.push(N.anisotropy),b.push(N.internalFormat),b.push(N.format),b.push(N.type),b.push(N.generateMipmaps),b.push(N.premultiplyAlpha),b.push(N.flipY),b.push(N.unpackAlignment),b.push(N.colorSpace),b.join()}function rt(N,b){const W=s.get(N);if(N.isVideoTexture&&Ft(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&W.__version!==N.version){const ut=N.image;if(ut===null)de("WebGLRenderer: Texture marked for update but no image data found.");else if(ut.complete===!1)de("WebGLRenderer: Texture marked for update but image is incomplete");else{it(W,N,b);return}}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+b)}function z(N,b){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){it(W,N,b);return}else N.isExternalTexture&&(W.__webglTexture=N.sourceTexture?N.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+b)}function V(N,b){const W=s.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&W.__version!==N.version){it(W,N,b);return}n.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+b)}function nt(N,b){const W=s.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&W.__version!==N.version){ht(W,N,b);return}n.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+b)}const bt={[md]:r.REPEAT,[xa]:r.CLAMP_TO_EDGE,[gd]:r.MIRRORED_REPEAT},Mt={[Un]:r.NEAREST,[sM]:r.NEAREST_MIPMAP_NEAREST,[Ac]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[bh]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},L={[lM]:r.NEVER,[dM]:r.ALWAYS,[cM]:r.LESS,[dp]:r.LEQUAL,[uM]:r.EQUAL,[pp]:r.GEQUAL,[fM]:r.GREATER,[hM]:r.NOTEQUAL};function tt(N,b){if(b.type===Hi&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===bh||b.magFilter===Ac||b.magFilter===zs||b.minFilter===In||b.minFilter===bh||b.minFilter===Ac||b.minFilter===zs)&&de("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,bt[b.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,bt[b.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,bt[b.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,Mt[b.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,Mt[b.minFilter]),b.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,L[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Un||b.minFilter!==Ac&&b.minFilter!==zs||b.type===Hi&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(N,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function mt(N,b){let W=!1;N.__webglInit===void 0&&(N.__webglInit=!0,b.addEventListener("dispose",B));const ut=b.source;let St=_.get(ut);St===void 0&&(St={},_.set(ut,St));const ft=ct(b);if(ft!==N.__cacheKey){St[ft]===void 0&&(St[ft]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,W=!0),St[ft].usedTimes++;const Jt=St[N.__cacheKey];Jt!==void 0&&(St[N.__cacheKey].usedTimes--,Jt.usedTimes===0&&T(b)),N.__cacheKey=ft,N.__webglTexture=St[ft].texture}return W}function wt(N,b,W){return Math.floor(Math.floor(N/W)/b)}function Ht(N,b,W,ut){const ft=N.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,W,ut,b.data);else{ft.sort((Tt,Ct)=>Tt.start-Ct.start);let Jt=0;for(let Tt=1;Tt<ft.length;Tt++){const Ct=ft[Jt],Yt=ft[Tt],Xt=Ct.start+Ct.count,Ot=wt(Yt.start,b.width,4),ve=wt(Ct.start,b.width,4);Yt.start<=Xt+1&&Ot===ve&&wt(Yt.start+Yt.count-1,b.width,4)===Ot?Ct.count=Math.max(Ct.count,Yt.start+Yt.count-Ct.start):(++Jt,ft[Jt]=Yt)}ft.length=Jt+1;const Lt=r.getParameter(r.UNPACK_ROW_LENGTH),Kt=r.getParameter(r.UNPACK_SKIP_PIXELS),oe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let Tt=0,Ct=ft.length;Tt<Ct;Tt++){const Yt=ft[Tt],Xt=Math.floor(Yt.start/4),Ot=Math.ceil(Yt.count/4),ve=Xt%b.width,X=Math.floor(Xt/b.width),It=Ot,Rt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ve),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),n.texSubImage2D(r.TEXTURE_2D,0,ve,X,It,Rt,W,ut,b.data)}N.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Lt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,oe)}}function it(N,b,W){let ut=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ut=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ut=r.TEXTURE_3D);const St=mt(N,b),ft=b.source;n.bindTexture(ut,N.__webglTexture,r.TEXTURE0+W);const Jt=s.get(ft);if(ft.version!==Jt.__version||St===!0){n.activeTexture(r.TEXTURE0+W);const Lt=Ue.getPrimaries(Ue.workingColorSpace),Kt=b.colorSpace===as?null:Ue.getPrimaries(b.colorSpace),oe=b.colorSpace===as||Lt===Kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Tt=C(b.image,!1,o.maxTextureSize);Tt=ae(b,Tt);const Ct=c.convert(b.format,b.colorSpace),Yt=c.convert(b.type);let Xt=U(b.internalFormat,Ct,Yt,b.colorSpace,b.isVideoTexture);tt(ut,b);let Ot;const ve=b.mipmaps,X=b.isVideoTexture!==!0,It=Jt.__version===void 0||St===!0,Rt=ft.dataReady,Wt=I(b,Tt);if(b.isDepthTexture)Xt=D(b.format===Fs,b.type),It&&(X?n.texStorage2D(r.TEXTURE_2D,1,Xt,Tt.width,Tt.height):n.texImage2D(r.TEXTURE_2D,0,Xt,Tt.width,Tt.height,0,Ct,Yt,null));else if(b.isDataTexture)if(ve.length>0){X&&It&&n.texStorage2D(r.TEXTURE_2D,Wt,Xt,ve[0].width,ve[0].height);for(let At=0,xt=ve.length;At<xt;At++)Ot=ve[At],X?Rt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Ot.width,Ot.height,Ct,Yt,Ot.data):n.texImage2D(r.TEXTURE_2D,At,Xt,Ot.width,Ot.height,0,Ct,Yt,Ot.data);b.generateMipmaps=!1}else X?(It&&n.texStorage2D(r.TEXTURE_2D,Wt,Xt,Tt.width,Tt.height),Rt&&Ht(b,Tt,Ct,Yt)):n.texImage2D(r.TEXTURE_2D,0,Xt,Tt.width,Tt.height,0,Ct,Yt,Tt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&It&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Wt,Xt,ve[0].width,ve[0].height,Tt.depth);for(let At=0,xt=ve.length;At<xt;At++)if(Ot=ve[At],b.format!==Ui)if(Ct!==null)if(X){if(Rt)if(b.layerUpdates.size>0){const Nt=Wv(Ot.width,Ot.height,b.format,b.type);for(const fe of b.layerUpdates){const Ie=Ot.data.subarray(fe*Nt/Ot.data.BYTES_PER_ELEMENT,(fe+1)*Nt/Ot.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,fe,Ot.width,Ot.height,1,Ct,Ie)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ot.width,Ot.height,Tt.depth,Ct,Ot.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,At,Xt,Ot.width,Ot.height,Tt.depth,0,Ot.data,0,0);else de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Rt&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,At,0,0,0,Ot.width,Ot.height,Tt.depth,Ct,Yt,Ot.data):n.texImage3D(r.TEXTURE_2D_ARRAY,At,Xt,Ot.width,Ot.height,Tt.depth,0,Ct,Yt,Ot.data)}else{X&&It&&n.texStorage2D(r.TEXTURE_2D,Wt,Xt,ve[0].width,ve[0].height);for(let At=0,xt=ve.length;At<xt;At++)Ot=ve[At],b.format!==Ui?Ct!==null?X?Rt&&n.compressedTexSubImage2D(r.TEXTURE_2D,At,0,0,Ot.width,Ot.height,Ct,Ot.data):n.compressedTexImage2D(r.TEXTURE_2D,At,Xt,Ot.width,Ot.height,0,Ot.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Rt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Ot.width,Ot.height,Ct,Yt,Ot.data):n.texImage2D(r.TEXTURE_2D,At,Xt,Ot.width,Ot.height,0,Ct,Yt,Ot.data)}else if(b.isDataArrayTexture)if(X){if(It&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Wt,Xt,Tt.width,Tt.height,Tt.depth),Rt)if(b.layerUpdates.size>0){const At=Wv(Tt.width,Tt.height,b.format,b.type);for(const xt of b.layerUpdates){const Nt=Tt.data.subarray(xt*At/Tt.data.BYTES_PER_ELEMENT,(xt+1)*At/Tt.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Tt.width,Tt.height,1,Ct,Yt,Nt)}b.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Yt,Tt.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Xt,Tt.width,Tt.height,Tt.depth,0,Ct,Yt,Tt.data);else if(b.isData3DTexture)X?(It&&n.texStorage3D(r.TEXTURE_3D,Wt,Xt,Tt.width,Tt.height,Tt.depth),Rt&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Ct,Yt,Tt.data)):n.texImage3D(r.TEXTURE_3D,0,Xt,Tt.width,Tt.height,Tt.depth,0,Ct,Yt,Tt.data);else if(b.isFramebufferTexture){if(It)if(X)n.texStorage2D(r.TEXTURE_2D,Wt,Xt,Tt.width,Tt.height);else{let At=Tt.width,xt=Tt.height;for(let Nt=0;Nt<Wt;Nt++)n.texImage2D(r.TEXTURE_2D,Nt,Xt,At,xt,0,Ct,Yt,null),At>>=1,xt>>=1}}else if(ve.length>0){if(X&&It){const At=Ut(ve[0]);n.texStorage2D(r.TEXTURE_2D,Wt,Xt,At.width,At.height)}for(let At=0,xt=ve.length;At<xt;At++)Ot=ve[At],X?Rt&&n.texSubImage2D(r.TEXTURE_2D,At,0,0,Ct,Yt,Ot):n.texImage2D(r.TEXTURE_2D,At,Xt,Ct,Yt,Ot);b.generateMipmaps=!1}else if(X){if(It){const At=Ut(Tt);n.texStorage2D(r.TEXTURE_2D,Wt,Xt,At.width,At.height)}Rt&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,Yt,Tt)}else n.texImage2D(r.TEXTURE_2D,0,Xt,Ct,Yt,Tt);M(b)&&x(ut),Jt.__version=ft.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function ht(N,b,W){if(b.image.length!==6)return;const ut=mt(N,b),St=b.source;n.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+W);const ft=s.get(St);if(St.version!==ft.__version||ut===!0){n.activeTexture(r.TEXTURE0+W);const Jt=Ue.getPrimaries(Ue.workingColorSpace),Lt=b.colorSpace===as?null:Ue.getPrimaries(b.colorSpace),Kt=b.colorSpace===as||Jt===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const oe=b.isCompressedTexture||b.image[0].isCompressedTexture,Tt=b.image[0]&&b.image[0].isDataTexture,Ct=[];for(let xt=0;xt<6;xt++)!oe&&!Tt?Ct[xt]=C(b.image[xt],!0,o.maxCubemapSize):Ct[xt]=Tt?b.image[xt].image:b.image[xt],Ct[xt]=ae(b,Ct[xt]);const Yt=Ct[0],Xt=c.convert(b.format,b.colorSpace),Ot=c.convert(b.type),ve=U(b.internalFormat,Xt,Ot,b.colorSpace),X=b.isVideoTexture!==!0,It=ft.__version===void 0||ut===!0,Rt=St.dataReady;let Wt=I(b,Yt);tt(r.TEXTURE_CUBE_MAP,b);let At;if(oe){X&&It&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Wt,ve,Yt.width,Yt.height);for(let xt=0;xt<6;xt++){At=Ct[xt].mipmaps;for(let Nt=0;Nt<At.length;Nt++){const fe=At[Nt];b.format!==Ui?Xt!==null?X?Rt&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,0,0,fe.width,fe.height,Xt,fe.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,ve,fe.width,fe.height,0,fe.data):de("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,0,0,fe.width,fe.height,Xt,Ot,fe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt,ve,fe.width,fe.height,0,Xt,Ot,fe.data)}}}else{if(At=b.mipmaps,X&&It){At.length>0&&Wt++;const xt=Ut(Ct[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Wt,ve,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Tt){X?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Ct[xt].width,Ct[xt].height,Xt,Ot,Ct[xt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ve,Ct[xt].width,Ct[xt].height,0,Xt,Ot,Ct[xt].data);for(let Nt=0;Nt<At.length;Nt++){const Ie=At[Nt].image[xt].image;X?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,0,0,Ie.width,Ie.height,Xt,Ot,Ie.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,ve,Ie.width,Ie.height,0,Xt,Ot,Ie.data)}}else{X?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Xt,Ot,Ct[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ve,Xt,Ot,Ct[xt]);for(let Nt=0;Nt<At.length;Nt++){const fe=At[Nt];X?Rt&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,0,0,Xt,Ot,fe.image[xt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Nt+1,ve,Xt,Ot,fe.image[xt])}}}M(b)&&x(r.TEXTURE_CUBE_MAP),ft.__version=St.version,b.onUpdate&&b.onUpdate(b)}N.__version=b.version}function Dt(N,b,W,ut,St,ft){const Jt=c.convert(W.format,W.colorSpace),Lt=c.convert(W.type),Kt=U(W.internalFormat,Jt,Lt,W.colorSpace),oe=s.get(b),Tt=s.get(W);if(Tt.__renderTarget=b,!oe.__hasExternalTextures){const Ct=Math.max(1,b.width>>ft),Yt=Math.max(1,b.height>>ft);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?n.texImage3D(St,ft,Kt,Ct,Yt,b.depth,0,Jt,Lt,null):n.texImage2D(St,ft,Kt,Ct,Yt,0,Jt,Lt,null)}n.bindFramebuffer(r.FRAMEBUFFER,N),ne(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ut,St,Tt.__webglTexture,0,O(b)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ut,St,Tt.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(N,b,W){if(r.bindRenderbuffer(r.RENDERBUFFER,N),b.depthBuffer){const ut=b.depthTexture,St=ut&&ut.isDepthTexture?ut.type:null,ft=D(b.stencilBuffer,St),Jt=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;ne(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(b),ft,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(b),ft,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ft,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Jt,r.RENDERBUFFER,N)}else{const ut=b.textures;for(let St=0;St<ut.length;St++){const ft=ut[St],Jt=c.convert(ft.format,ft.colorSpace),Lt=c.convert(ft.type),Kt=U(ft.internalFormat,Jt,Lt,ft.colorSpace);ne(b)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(b),Kt,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(b),Kt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,Kt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function kt(N,b,W){const ut=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,N),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(b.depthTexture);if(St.__renderTarget=b,(!St.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),ut){if(St.__webglInit===void 0&&(St.__webglInit=!0,b.depthTexture.addEventListener("dispose",B)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),tt(r.TEXTURE_CUBE_MAP,b.depthTexture);const oe=c.convert(b.depthTexture.format),Tt=c.convert(b.depthTexture.type);let Ct;b.depthTexture.format===ba?Ct=r.DEPTH_COMPONENT24:b.depthTexture.format===Fs&&(Ct=r.DEPTH24_STENCIL8);for(let Yt=0;Yt<6;Yt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Yt,0,Ct,b.width,b.height,0,oe,Tt,null)}}else rt(b.depthTexture,0);const ft=St.__webglTexture,Jt=O(b),Lt=ut?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,Kt=b.depthTexture.format===Fs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===ba)ne(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Kt,Lt,ft,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,Kt,Lt,ft,0);else if(b.depthTexture.format===Fs)ne(b)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Kt,Lt,ft,0,Jt):r.framebufferTexture2D(r.FRAMEBUFFER,Kt,Lt,ft,0);else throw new Error("Unknown depthTexture format")}function ge(N){const b=s.get(N),W=N.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==N.depthTexture){const ut=N.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),ut){const St=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,ut.removeEventListener("dispose",St)};ut.addEventListener("dispose",St),b.__depthDisposeCallback=St}b.__boundDepthTexture=ut}if(N.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let ut=0;ut<6;ut++)kt(b.__webglFramebuffer[ut],N,ut);else{const ut=N.texture.mipmaps;ut&&ut.length>0?kt(b.__webglFramebuffer[0],N,0):kt(b.__webglFramebuffer,N,0)}else if(W){b.__webglDepthbuffer=[];for(let ut=0;ut<6;ut++)if(n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[ut]),b.__webglDepthbuffer[ut]===void 0)b.__webglDepthbuffer[ut]=r.createRenderbuffer(),Gt(b.__webglDepthbuffer[ut],N,!1);else{const St=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer[ut];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ft)}}else{const ut=N.texture.mipmaps;if(ut&&ut.length>0?n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Gt(b.__webglDepthbuffer,N,!1);else{const St=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(N,b,W){const ut=s.get(N);b!==void 0&&Dt(ut.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&ge(N)}function ue(N){const b=N.texture,W=s.get(N),ut=s.get(b);N.addEventListener("dispose",F);const St=N.textures,ft=N.isWebGLCubeRenderTarget===!0,Jt=St.length>1;if(Jt||(ut.__webglTexture===void 0&&(ut.__webglTexture=r.createTexture()),ut.__version=b.version,f.memory.textures++),ft){W.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[Lt]=[];for(let Kt=0;Kt<b.mipmaps.length;Kt++)W.__webglFramebuffer[Lt][Kt]=r.createFramebuffer()}else W.__webglFramebuffer[Lt]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let Lt=0;Lt<b.mipmaps.length;Lt++)W.__webglFramebuffer[Lt]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Jt)for(let Lt=0,Kt=St.length;Lt<Kt;Lt++){const oe=s.get(St[Lt]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),f.memory.textures++)}if(N.samples>0&&ne(N)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Lt=0;Lt<St.length;Lt++){const Kt=St[Lt];W.__webglColorRenderbuffer[Lt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Lt]);const oe=c.convert(Kt.format,Kt.colorSpace),Tt=c.convert(Kt.type),Ct=U(Kt.internalFormat,oe,Tt,Kt.colorSpace,N.isXRRenderTarget===!0),Yt=O(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,Ct,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,W.__webglColorRenderbuffer[Lt])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(W.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,ut.__webglTexture),tt(r.TEXTURE_CUBE_MAP,b);for(let Lt=0;Lt<6;Lt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Dt(W.__webglFramebuffer[Lt][Kt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Kt);else Dt(W.__webglFramebuffer[Lt],N,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(b)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Jt){for(let Lt=0,Kt=St.length;Lt<Kt;Lt++){const oe=St[Lt],Tt=s.get(oe);let Ct=r.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ct=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ct,Tt.__webglTexture),tt(Ct,oe),Dt(W.__webglFramebuffer,N,oe,r.COLOR_ATTACHMENT0+Lt,Ct,0),M(oe)&&x(Ct)}n.unbindTexture()}else{let Lt=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Lt=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Lt,ut.__webglTexture),tt(Lt,b),b.mipmaps&&b.mipmaps.length>0)for(let Kt=0;Kt<b.mipmaps.length;Kt++)Dt(W.__webglFramebuffer[Kt],N,b,r.COLOR_ATTACHMENT0,Lt,Kt);else Dt(W.__webglFramebuffer,N,b,r.COLOR_ATTACHMENT0,Lt,0);M(b)&&x(Lt),n.unbindTexture()}N.depthBuffer&&ge(N)}function vt(N){const b=N.textures;for(let W=0,ut=b.length;W<ut;W++){const St=b[W];if(M(St)){const ft=P(N),Jt=s.get(St).__webglTexture;n.bindTexture(ft,Jt),x(ft),n.unbindTexture()}}}const Et=[],yt=[];function Pt(N){if(N.samples>0){if(ne(N)===!1){const b=N.textures,W=N.width,ut=N.height;let St=r.COLOR_BUFFER_BIT;const ft=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Jt=s.get(N),Lt=b.length>1;if(Lt)for(let oe=0;oe<b.length;oe++)n.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer);const Kt=N.texture.mipmaps;Kt&&Kt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let oe=0;oe<b.length;oe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),Lt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[oe]);const Tt=s.get(b[oe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Tt,0)}r.blitFramebuffer(0,0,W,ut,0,0,W,ut,St,r.NEAREST),m===!0&&(Et.length=0,yt.length=0,Et.push(r.COLOR_ATTACHMENT0+oe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Et.push(ft),yt.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,yt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Et))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Lt)for(let oe=0;oe<b.length;oe++){n.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,Jt.__webglColorRenderbuffer[oe]);const Tt=s.get(b[oe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Jt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.TEXTURE_2D,Tt,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Jt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&m){const b=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function O(N){return Math.min(o.maxSamples,N.samples)}function ne(N){const b=s.get(N);return N.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ft(N){const b=f.render.frame;v.get(N)!==b&&(v.set(N,b),N.update())}function ae(N,b){const W=N.colorSpace,ut=N.format,St=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||W!==Vr&&W!==as&&(Ue.getTransfer(W)===Ve?(ut!==Ui||St!==li)&&de("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",W)),b}function Ut(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=J,this.resetTextureUnits=Q,this.setTexture2D=rt,this.setTexture2DArray=z,this.setTexture3D=V,this.setTextureCube=nt,this.rebindTextures=Ee,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function y2(r,t){function n(s,o=as){let c;const f=Ue.getTransfer(o);if(s===li)return r.UNSIGNED_BYTE;if(s===lp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===cp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===R_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===D_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===w_)return r.BYTE;if(s===C_)return r.SHORT;if(s===sl)return r.UNSIGNED_SHORT;if(s===op)return r.INT;if(s===Xi)return r.UNSIGNED_INT;if(s===Hi)return r.FLOAT;if(s===Ma)return r.HALF_FLOAT;if(s===U_)return r.ALPHA;if(s===N_)return r.RGB;if(s===Ui)return r.RGBA;if(s===ba)return r.DEPTH_COMPONENT;if(s===Fs)return r.DEPTH_STENCIL;if(s===L_)return r.RED;if(s===up)return r.RED_INTEGER;if(s===Gr)return r.RG;if(s===fp)return r.RG_INTEGER;if(s===hp)return r.RGBA_INTEGER;if(s===Jc||s===$c||s===tu||s===eu)if(f===Ve)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===eu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===vd||s===_d||s===xd||s===yd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===vd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===_d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===yd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Sd||s===Md||s===bd||s===Ed||s===Td||s===Ad||s===wd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Sd||s===Md)return f===Ve?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===bd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Ed)return c.COMPRESSED_R11_EAC;if(s===Td)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Ad)return c.COMPRESSED_RG11_EAC;if(s===wd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Cd||s===Rd||s===Dd||s===Ud||s===Nd||s===Ld||s===Od||s===Pd||s===zd||s===Fd||s===Id||s===Bd||s===Hd||s===Gd)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Cd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Rd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Dd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ud)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ld)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Od)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Pd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===zd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Fd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Id)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Bd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Hd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Gd)return f===Ve?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vd||s===kd||s===Xd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===Vd)return f===Ve?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===kd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Xd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Wd||s===qd||s===Yd||s===jd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Wd)return c.COMPRESSED_RED_RGTC1_EXT;if(s===qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Yd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===jd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===rl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}const S2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class b2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const s=new j_(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,s=new qi({vertexShader:S2,fragmentShader:M2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rn(new lu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E2 extends Wr{constructor(t,n){super();const s=this;let o=null,c=1,f=null,h="local-floor",m=1,p=null,v=null,g=null,_=null,S=null,E=null;const C=typeof XRWebGLBinding<"u",M=new b2,x={},P=n.getContextAttributes();let U=null,D=null;const I=[],B=[],F=new qt;let q=null;const T=new oi;T.viewport=new nn;const R=new oi;R.viewport=new nn;const H=[T,R],Q=new Ob;let J=null,ct=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=I[it];return ht===void 0&&(ht=new qh,I[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=I[it];return ht===void 0&&(ht=new qh,I[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=I[it];return ht===void 0&&(ht=new qh,I[it]=ht),ht.getHandSpace()};function rt(it){const ht=B.indexOf(it.inputSource);if(ht===-1)return;const Dt=I[ht];Dt!==void 0&&(Dt.update(it.inputSource,it.frame,p||f),Dt.dispatchEvent({type:it.type,data:it.inputSource}))}function z(){o.removeEventListener("select",rt),o.removeEventListener("selectstart",rt),o.removeEventListener("selectend",rt),o.removeEventListener("squeeze",rt),o.removeEventListener("squeezestart",rt),o.removeEventListener("squeezeend",rt),o.removeEventListener("end",z),o.removeEventListener("inputsourceschange",V);for(let it=0;it<I.length;it++){const ht=B[it];ht!==null&&(B[it]=null,I[it].disconnect(ht))}J=null,ct=null,M.reset();for(const it in x)delete x[it];t.setRenderTarget(U),S=null,_=null,g=null,o=null,D=null,Ht.stop(),s.isPresenting=!1,t.setPixelRatio(q),t.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){c=it,s.isPresenting===!0&&de("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){h=it,s.isPresenting===!0&&de("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(it){p=it},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(it){if(o=it,o!==null){if(U=t.getRenderTarget(),o.addEventListener("select",rt),o.addEventListener("selectstart",rt),o.addEventListener("selectend",rt),o.addEventListener("squeeze",rt),o.addEventListener("squeezestart",rt),o.addEventListener("squeezeend",rt),o.addEventListener("end",z),o.addEventListener("inputsourceschange",V),P.xrCompatible!==!0&&await n.makeXRCompatible(),q=t.getPixelRatio(),t.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Dt=null,Gt=null,kt=null;P.depth&&(kt=P.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Dt=P.stencil?Fs:ba,Gt=P.stencil?rl:Xi);const ge={colorFormat:n.RGBA8,depthFormat:kt,scaleFactor:c};g=this.getBinding(),_=g.createProjectionLayer(ge),o.updateRenderState({layers:[_]}),t.setPixelRatio(1),t.setSize(_.textureWidth,_.textureHeight,!1),D=new ki(_.textureWidth,_.textureHeight,{format:Ui,type:li,depthTexture:new ll(_.textureWidth,_.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,Dt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const Dt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(o,n,Dt),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new ki(S.framebufferWidth,S.framebufferHeight,{format:Ui,type:li,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await o.requestReferenceSpace(h),Ht.setContext(o),Ht.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function V(it){for(let ht=0;ht<it.removed.length;ht++){const Dt=it.removed[ht],Gt=B.indexOf(Dt);Gt>=0&&(B[Gt]=null,I[Gt].disconnect(Dt))}for(let ht=0;ht<it.added.length;ht++){const Dt=it.added[ht];let Gt=B.indexOf(Dt);if(Gt===-1){for(let ge=0;ge<I.length;ge++)if(ge>=B.length){B.push(Dt),Gt=ge;break}else if(B[ge]===null){B[ge]=Dt,Gt=ge;break}if(Gt===-1)break}const kt=I[Gt];kt&&kt.connect(Dt)}}const nt=new j,bt=new j;function Mt(it,ht,Dt){nt.setFromMatrixPosition(ht.matrixWorld),bt.setFromMatrixPosition(Dt.matrixWorld);const Gt=nt.distanceTo(bt),kt=ht.projectionMatrix.elements,ge=Dt.projectionMatrix.elements,Ee=kt[14]/(kt[10]-1),ue=kt[14]/(kt[10]+1),vt=(kt[9]+1)/kt[5],Et=(kt[9]-1)/kt[5],yt=(kt[8]-1)/kt[0],Pt=(ge[8]+1)/ge[0],O=Ee*yt,ne=Ee*Pt,Ft=Gt/(-yt+Pt),ae=Ft*-yt;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(ae),it.translateZ(Ft),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),kt[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{const Ut=Ee+Ft,N=ue+Ft,b=O-ae,W=ne+(Gt-ae),ut=vt*ue/N*Ut,St=Et*ue/N*Ut;it.projectionMatrix.makePerspective(b,W,ut,St,Ut,N),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function L(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(o===null)return;let ht=it.near,Dt=it.far;M.texture!==null&&(M.depthNear>0&&(ht=M.depthNear),M.depthFar>0&&(Dt=M.depthFar)),Q.near=R.near=T.near=ht,Q.far=R.far=T.far=Dt,(J!==Q.near||ct!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),J=Q.near,ct=Q.far),Q.layers.mask=it.layers.mask|6,T.layers.mask=Q.layers.mask&3,R.layers.mask=Q.layers.mask&5;const Gt=it.parent,kt=Q.cameras;L(Q,Gt);for(let ge=0;ge<kt.length;ge++)L(kt[ge],Gt);kt.length===2?Mt(Q,T,R):Q.projectionMatrix.copy(T.projectionMatrix),tt(it,Q,Gt)};function tt(it,ht,Dt){Dt===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(Dt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Zd*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(_===null&&S===null))return m},this.setFoveation=function(it){m=it,_!==null&&(_.fixedFoveation=it),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=it)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Q)},this.getCameraTexture=function(it){return x[it]};let mt=null;function wt(it,ht){if(v=ht.getViewerPose(p||f),E=ht,v!==null){const Dt=v.views;S!==null&&(t.setRenderTargetFramebuffer(D,S.framebuffer),t.setRenderTarget(D));let Gt=!1;Dt.length!==Q.cameras.length&&(Q.cameras.length=0,Gt=!0);for(let ue=0;ue<Dt.length;ue++){const vt=Dt[ue];let Et=null;if(S!==null)Et=S.getViewport(vt);else{const Pt=g.getViewSubImage(_,vt);Et=Pt.viewport,ue===0&&(t.setRenderTargetTextures(D,Pt.colorTexture,Pt.depthStencilTexture),t.setRenderTarget(D))}let yt=H[ue];yt===void 0&&(yt=new oi,yt.layers.enable(ue),yt.viewport=new nn,H[ue]=yt),yt.matrix.fromArray(vt.transform.matrix),yt.matrix.decompose(yt.position,yt.quaternion,yt.scale),yt.projectionMatrix.fromArray(vt.projectionMatrix),yt.projectionMatrixInverse.copy(yt.projectionMatrix).invert(),yt.viewport.set(Et.x,Et.y,Et.width,Et.height),ue===0&&(Q.matrix.copy(yt.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),Gt===!0&&Q.cameras.push(yt)}const kt=o.enabledFeatures;if(kt&&kt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const ue=g.getDepthInformation(Dt[0]);ue&&ue.isValid&&ue.texture&&M.init(ue,o.renderState)}if(kt&&kt.includes("camera-access")&&C){t.state.unbindTexture(),g=s.getBinding();for(let ue=0;ue<Dt.length;ue++){const vt=Dt[ue].camera;if(vt){let Et=x[vt];Et||(Et=new j_,x[vt]=Et);const yt=g.getCameraImage(vt);Et.sourceTexture=yt}}}}for(let Dt=0;Dt<I.length;Dt++){const Gt=B[Dt],kt=I[Dt];Gt!==null&&kt!==void 0&&kt.update(Gt,ht,p||f)}mt&&mt(it,ht),ht.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ht}),E=null}const Ht=new sx;Ht.setAnimationLoop(wt),this.setAnimationLoop=function(it){mt=it},this.dispose=function(){}}}const Us=new Wi,T2=new Je;function A2(r,t){function n(M,x){M.matrixAutoUpdate===!0&&M.updateMatrix(),x.value.copy(M.matrix)}function s(M,x){x.color.getRGB(M.fogColor.value,k_(r)),x.isFog?(M.fogNear.value=x.near,M.fogFar.value=x.far):x.isFogExp2&&(M.fogDensity.value=x.density)}function o(M,x,P,U,D){x.isMeshBasicMaterial||x.isMeshLambertMaterial?c(M,x):x.isMeshToonMaterial?(c(M,x),g(M,x)):x.isMeshPhongMaterial?(c(M,x),v(M,x)):x.isMeshStandardMaterial?(c(M,x),_(M,x),x.isMeshPhysicalMaterial&&S(M,x,D)):x.isMeshMatcapMaterial?(c(M,x),E(M,x)):x.isMeshDepthMaterial?c(M,x):x.isMeshDistanceMaterial?(c(M,x),C(M,x)):x.isMeshNormalMaterial?c(M,x):x.isLineBasicMaterial?(f(M,x),x.isLineDashedMaterial&&h(M,x)):x.isPointsMaterial?m(M,x,P,U):x.isSpriteMaterial?p(M,x):x.isShadowMaterial?(M.color.value.copy(x.color),M.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function c(M,x){M.opacity.value=x.opacity,x.color&&M.diffuse.value.copy(x.color),x.emissive&&M.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.bumpMap&&(M.bumpMap.value=x.bumpMap,n(x.bumpMap,M.bumpMapTransform),M.bumpScale.value=x.bumpScale,x.side===Zn&&(M.bumpScale.value*=-1)),x.normalMap&&(M.normalMap.value=x.normalMap,n(x.normalMap,M.normalMapTransform),M.normalScale.value.copy(x.normalScale),x.side===Zn&&M.normalScale.value.negate()),x.displacementMap&&(M.displacementMap.value=x.displacementMap,n(x.displacementMap,M.displacementMapTransform),M.displacementScale.value=x.displacementScale,M.displacementBias.value=x.displacementBias),x.emissiveMap&&(M.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,M.emissiveMapTransform)),x.specularMap&&(M.specularMap.value=x.specularMap,n(x.specularMap,M.specularMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest);const P=t.get(x),U=P.envMap,D=P.envMapRotation;U&&(M.envMap.value=U,Us.copy(D),Us.x*=-1,Us.y*=-1,Us.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),M.envMapRotation.value.setFromMatrix4(T2.makeRotationFromEuler(Us)),M.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=x.reflectivity,M.ior.value=x.ior,M.refractionRatio.value=x.refractionRatio),x.lightMap&&(M.lightMap.value=x.lightMap,M.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,M.lightMapTransform)),x.aoMap&&(M.aoMap.value=x.aoMap,M.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,M.aoMapTransform))}function f(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform))}function h(M,x){M.dashSize.value=x.dashSize,M.totalSize.value=x.dashSize+x.gapSize,M.scale.value=x.scale}function m(M,x,P,U){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.size.value=x.size*P,M.scale.value=U*.5,x.map&&(M.map.value=x.map,n(x.map,M.uvTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function p(M,x){M.diffuse.value.copy(x.color),M.opacity.value=x.opacity,M.rotation.value=x.rotation,x.map&&(M.map.value=x.map,n(x.map,M.mapTransform)),x.alphaMap&&(M.alphaMap.value=x.alphaMap,n(x.alphaMap,M.alphaMapTransform)),x.alphaTest>0&&(M.alphaTest.value=x.alphaTest)}function v(M,x){M.specular.value.copy(x.specular),M.shininess.value=Math.max(x.shininess,1e-4)}function g(M,x){x.gradientMap&&(M.gradientMap.value=x.gradientMap)}function _(M,x){M.metalness.value=x.metalness,x.metalnessMap&&(M.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,M.metalnessMapTransform)),M.roughness.value=x.roughness,x.roughnessMap&&(M.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,M.roughnessMapTransform)),x.envMap&&(M.envMapIntensity.value=x.envMapIntensity)}function S(M,x,P){M.ior.value=x.ior,x.sheen>0&&(M.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),M.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(M.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,M.sheenColorMapTransform)),x.sheenRoughnessMap&&(M.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,M.sheenRoughnessMapTransform))),x.clearcoat>0&&(M.clearcoat.value=x.clearcoat,M.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(M.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,M.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(M.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Zn&&M.clearcoatNormalScale.value.negate())),x.dispersion>0&&(M.dispersion.value=x.dispersion),x.iridescence>0&&(M.iridescence.value=x.iridescence,M.iridescenceIOR.value=x.iridescenceIOR,M.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(M.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,M.iridescenceMapTransform)),x.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),x.transmission>0&&(M.transmission.value=x.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),x.transmissionMap&&(M.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,M.transmissionMapTransform)),M.thickness.value=x.thickness,x.thicknessMap&&(M.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=x.attenuationDistance,M.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(M.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(M.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=x.specularIntensity,M.specularColor.value.copy(x.specularColor),x.specularColorMap&&(M.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,M.specularColorMapTransform)),x.specularIntensityMap&&(M.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,x){x.matcap&&(M.matcap.value=x.matcap)}function C(M,x){const P=t.get(x).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function w2(r,t,n,s){let o={},c={},f=[];const h=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const D=U.program;s.uniformBlockBinding(P,D)}function p(P,U){let D=o[P.id];D===void 0&&(E(P),D=v(P),o[P.id]=D,P.addEventListener("dispose",M));const I=U.program;s.updateUBOMapping(P,I);const B=t.render.frame;c[P.id]!==B&&(_(P),c[P.id]=B)}function v(P){const U=g();P.__bindingPointIndex=U;const D=r.createBuffer(),I=P.__size,B=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,D),r.bufferData(r.UNIFORM_BUFFER,I,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,U,D),D}function g(){for(let P=0;P<h;P++)if(f.indexOf(P)===-1)return f.push(P),P;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(P){const U=o[P.id],D=P.uniforms,I=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,U);for(let B=0,F=D.length;B<F;B++){const q=Array.isArray(D[B])?D[B]:[D[B]];for(let T=0,R=q.length;T<R;T++){const H=q[T];if(S(H,B,T,I)===!0){const Q=H.__offset,J=Array.isArray(H.value)?H.value:[H.value];let ct=0;for(let rt=0;rt<J.length;rt++){const z=J[rt],V=C(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,Q+ct,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,ct),ct+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Q,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(P,U,D,I){const B=P.value,F=U+"_"+D;if(I[F]===void 0)return typeof B=="number"||typeof B=="boolean"?I[F]=B:I[F]=B.clone(),!0;{const q=I[F];if(typeof B=="number"||typeof B=="boolean"){if(q!==B)return I[F]=B,!0}else if(q.equals(B)===!1)return q.copy(B),!0}return!1}function E(P){const U=P.uniforms;let D=0;const I=16;for(let F=0,q=U.length;F<q;F++){const T=Array.isArray(U[F])?U[F]:[U[F]];for(let R=0,H=T.length;R<H;R++){const Q=T[R],J=Array.isArray(Q.value)?Q.value:[Q.value];for(let ct=0,rt=J.length;ct<rt;ct++){const z=J[ct],V=C(z),nt=D%I,bt=nt%V.boundary,Mt=nt+bt;D+=bt,Mt!==0&&I-Mt<V.storage&&(D+=I-Mt),Q.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=D,D+=V.storage}}}const B=D%I;return B>0&&(D+=I-B),P.__size=D,P.__cache={},this}function C(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?de("WebGLRenderer: Texture samplers can not be part of an uniforms group."):de("WebGLRenderer: Unsupported uniform value type.",P),U}function M(P){const U=P.target;U.removeEventListener("dispose",M);const D=f.indexOf(U.__bindingPointIndex);f.splice(D,1),r.deleteBuffer(o[U.id]),delete o[U.id],delete c[U.id]}function x(){for(const P in o)r.deleteBuffer(o[P]);f=[],o={},c={}}return{bind:m,update:p,dispose:x}}const C2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function R2(){return Ii===null&&(Ii=new GM(C2,16,16,Gr,Ma),Ii.name="DFG_LUT",Ii.minFilter=In,Ii.magFilter=In,Ii.wrapS=xa,Ii.wrapT=xa,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class D2{constructor(t={}){const{canvas:n=pM(),context:s=null,depth:o=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:S=li}=t;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=f;const C=S,M=new Set([hp,fp,up]),x=new Set([li,Xi,sl,rl,lp,cp]),P=new Uint32Array(4),U=new Int32Array(4);let D=null,I=null;const B=[],F=[];let q=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let R=!1;this._outputColorSpace=yi;let H=0,Q=0,J=null,ct=-1,rt=null;const z=new nn,V=new nn;let nt=null;const bt=new Ce(0);let Mt=0,L=n.width,tt=n.height,mt=1,wt=null,Ht=null;const it=new nn(0,0,L,tt),ht=new nn(0,0,L,tt);let Dt=!1;const Gt=new gp;let kt=!1,ge=!1;const Ee=new Je,ue=new j,vt=new nn,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Pt(){return J===null?mt:1}let O=s;function ne(w,Y){return n.getContext(w,Y)}try{const w={alpha:!0,depth:o,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sp}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",Re,!1),O===null){const Y="webgl2";if(O=ne(Y,w),O===null)throw ne(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw De("WebGLRenderer: "+w.message),w}let Ft,ae,Ut,N,b,W,ut,St,ft,Jt,Lt,Kt,oe,Tt,Ct,Yt,Xt,Ot,ve,X,It,Rt,Wt,At;function xt(){Ft=new RT(O),Ft.init(),Rt=new y2(O,Ft),ae=new yT(O,Ft,t,Rt),Ut=new _2(O,Ft),ae.reversedDepthBuffer&&_&&Ut.buffers.depth.setReversed(!0),N=new NT(O),b=new i2,W=new x2(O,Ft,Ut,b,ae,Rt,N),ut=new MT(T),St=new CT(T),ft=new zb(O),Wt=new _T(O,ft),Jt=new DT(O,ft,N,Wt),Lt=new OT(O,Jt,ft,N),ve=new LT(O,ae,W),Yt=new ST(b),Kt=new n2(T,ut,St,Ft,ae,Wt,Yt),oe=new A2(T,b),Tt=new s2,Ct=new f2(Ft),Ot=new vT(T,ut,St,Ut,Lt,E,m),Xt=new g2(T,Lt,ae),At=new w2(O,N,ae,Ut),X=new xT(O,Ft,N),It=new UT(O,Ft,N),N.programs=Kt.programs,T.capabilities=ae,T.extensions=Ft,T.properties=b,T.renderLists=Tt,T.shadowMap=Xt,T.state=Ut,T.info=N}xt(),C!==li&&(q=new zT(C,n.width,n.height,o,c));const Nt=new E2(T,O);this.xr=Nt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Ft.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ft.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(w){w!==void 0&&(mt=w,this.setSize(L,tt,!1))},this.getSize=function(w){return w.set(L,tt)},this.setSize=function(w,Y,ot=!0){if(Nt.isPresenting){de("WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,tt=Y,n.width=Math.floor(w*mt),n.height=Math.floor(Y*mt),ot===!0&&(n.style.width=w+"px",n.style.height=Y+"px"),q!==null&&q.setSize(n.width,n.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(L*mt,tt*mt).floor()},this.setDrawingBufferSize=function(w,Y,ot){L=w,tt=Y,mt=ot,n.width=Math.floor(w*ot),n.height=Math.floor(Y*ot),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(C===li){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}q.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(it)},this.setViewport=function(w,Y,ot,at){w.isVector4?it.set(w.x,w.y,w.z,w.w):it.set(w,Y,ot,at),Ut.viewport(z.copy(it).multiplyScalar(mt).round())},this.getScissor=function(w){return w.copy(ht)},this.setScissor=function(w,Y,ot,at){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,Y,ot,at),Ut.scissor(V.copy(ht).multiplyScalar(mt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(w){Ut.setScissorTest(Dt=w)},this.setOpaqueSort=function(w){wt=w},this.setTransparentSort=function(w){Ht=w},this.getClearColor=function(w){return w.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,ot=!0){let at=0;if(w){let K=!1;if(J!==null){const zt=J.texture.format;K=M.has(zt)}if(K){const zt=J.texture.type,jt=x.has(zt),Bt=Ot.getClearColor(),Zt=Ot.getClearAlpha(),$t=Bt.r,re=Bt.g,te=Bt.b;jt?(P[0]=$t,P[1]=re,P[2]=te,P[3]=Zt,O.clearBufferuiv(O.COLOR,0,P)):(U[0]=$t,U[1]=re,U[2]=te,U[3]=Zt,O.clearBufferiv(O.COLOR,0,U))}else at|=O.COLOR_BUFFER_BIT}Y&&(at|=O.DEPTH_BUFFER_BIT),ot&&(at|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),Ot.dispose(),Tt.dispose(),Ct.dispose(),b.dispose(),ut.dispose(),St.dispose(),Lt.dispose(),Wt.dispose(),At.dispose(),Kt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",Gs),Nt.removeEventListener("sessionend",Kr),Li.stop()};function fe(w){w.preventDefault(),xv("WebGLRenderer: Context Lost."),R=!0}function Ie(){xv("WebGLRenderer: Context Restored."),R=!1;const w=N.autoReset,Y=Xt.enabled,ot=Xt.autoUpdate,at=Xt.needsUpdate,K=Xt.type;xt(),N.autoReset=w,Xt.enabled=Y,Xt.autoUpdate=ot,Xt.needsUpdate=at,Xt.type=K}function Re(w){De("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function On(w){const Y=w.target;Y.removeEventListener("dispose",On),Si(Y)}function Si(w){ml(w),b.remove(w)}function ml(w){const Y=b.get(w).programs;Y!==void 0&&(Y.forEach(function(ot){Kt.releaseProgram(ot)}),w.isShaderMaterial&&Kt.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,ot,at,K,zt){Y===null&&(Y=Et);const jt=K.isMesh&&K.matrixWorld.determinant()<0,Bt=ls(w,Y,ot,at,K);Ut.setMaterial(at,jt);let Zt=ot.index,$t=1;if(at.wireframe===!0){if(Zt=Jt.getWireframeAttribute(ot),Zt===void 0)return;$t=2}const re=ot.drawRange,te=ot.attributes.position;let le=re.start*$t,Oe=(re.start+re.count)*$t;zt!==null&&(le=Math.max(le,zt.start*$t),Oe=Math.min(Oe,(zt.start+zt.count)*$t)),Zt!==null?(le=Math.max(le,0),Oe=Math.min(Oe,Zt.count)):te!=null&&(le=Math.max(le,0),Oe=Math.min(Oe,te.count));const Qe=Oe-le;if(Qe<0||Qe===1/0)return;Wt.setup(K,at,Bt,ot,Zt);let Ye,Fe=X;if(Zt!==null&&(Ye=ft.get(Zt),Fe=It,Fe.setIndex(Ye)),K.isMesh)at.wireframe===!0?(Ut.setLineWidth(at.wireframeLinewidth*Pt()),Fe.setMode(O.LINES)):Fe.setMode(O.TRIANGLES);else if(K.isLine){let ie=at.linewidth;ie===void 0&&(ie=1),Ut.setLineWidth(ie*Pt()),K.isLineSegments?Fe.setMode(O.LINES):K.isLineLoop?Fe.setMode(O.LINE_LOOP):Fe.setMode(O.LINE_STRIP)}else K.isPoints?Fe.setMode(O.POINTS):K.isSprite&&Fe.setMode(O.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)ol("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Fe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))Fe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ie=K._multiDrawStarts,Pe=K._multiDrawCounts,he=K._multiDrawCount,Mn=Zt?ft.get(Zt).bytesPerElement:1,ji=b.get(at).currentProgram.getUniforms();for(let bn=0;bn<he;bn++)ji.setValue(O,"_gl_DrawID",bn),Fe.render(ie[bn]/Mn,Pe[bn])}else if(K.isInstancedMesh)Fe.renderInstances(le,Qe,K.count);else if(ot.isInstancedBufferGeometry){const ie=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Pe=Math.min(ot.instanceCount,ie);Fe.renderInstances(le,Qe,Pe)}else Fe.render(le,Qe)};function Zr(w,Y,ot){w.transparent===!0&&w.side===_a&&w.forceSinglePass===!1?(w.side=Zn,w.needsUpdate=!0,ks(w,Y,ot),w.side=os,w.needsUpdate=!0,ks(w,Y,ot),w.side=_a):ks(w,Y,ot)}this.compile=function(w,Y,ot=null){ot===null&&(ot=w),I=Ct.get(ot),I.init(Y),F.push(I),ot.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),w!==ot&&w.traverseVisible(function(K){K.isLight&&K.layers.test(Y.layers)&&(I.pushLight(K),K.castShadow&&I.pushShadow(K))}),I.setupLights();const at=new Set;return w.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const zt=K.material;if(zt)if(Array.isArray(zt))for(let jt=0;jt<zt.length;jt++){const Bt=zt[jt];Zr(Bt,ot,K),at.add(Bt)}else Zr(zt,ot,K),at.add(zt)}),I=F.pop(),at},this.compileAsync=function(w,Y,ot=null){const at=this.compile(w,Y,ot);return new Promise(K=>{function zt(){if(at.forEach(function(jt){b.get(jt).currentProgram.isReady()&&at.delete(jt)}),at.size===0){K(w);return}setTimeout(zt,10)}Ft.get("KHR_parallel_shader_compile")!==null?zt():setTimeout(zt,10)})};let Hs=null;function Qr(w){Hs&&Hs(w)}function Gs(){Li.stop()}function Kr(){Li.start()}const Li=new sx;Li.setAnimationLoop(Qr),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(w){Hs=w,Nt.setAnimationLoop(w),w===null?Li.stop():Li.start()},Nt.addEventListener("sessionstart",Gs),Nt.addEventListener("sessionend",Kr),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const ot=Nt.enabled===!0&&Nt.isPresenting===!0,at=q!==null&&(J===null||ot)&&q.begin(T,J);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(q===null||q.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(Y),Y=Nt.getCamera()),w.isScene===!0&&w.onBeforeRender(T,w,Y,J),I=Ct.get(w,F.length),I.init(Y),F.push(I),Ee.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Gt.setFromProjectionMatrix(Ee,Gi,Y.reversedDepth),ge=this.localClippingEnabled,kt=Yt.init(this.clippingPlanes,ge),D=Tt.get(w,B.length),D.init(),B.push(D),Nt.enabled===!0&&Nt.isPresenting===!0){const jt=T.xr.getDepthSensingMesh();jt!==null&&ci(jt,Y,-1/0,T.sortObjects)}ci(w,Y,0,T.sortObjects),D.finish(),T.sortObjects===!0&&D.sort(wt,Ht),yt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,yt&&Ot.addToRenderList(D,w),this.info.render.frame++,kt===!0&&Yt.beginShadows();const K=I.state.shadowsArray;if(Xt.render(K,w,Y),kt===!0&&Yt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&q.hasRenderPass())===!1){const jt=D.opaque,Bt=D.transmissive;if(I.setupLights(),Y.isArrayCamera){const Zt=Y.cameras;if(Bt.length>0)for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t];Sn(jt,Bt,w,te)}yt&&Ot.render(w);for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t];on(D,w,te,te.viewport)}}else Bt.length>0&&Sn(jt,Bt,w,Y),yt&&Ot.render(w),on(D,w,Y)}J!==null&&Q===0&&(W.updateMultisampleRenderTarget(J),W.updateRenderTargetMipmap(J)),at&&q.end(T),w.isScene===!0&&w.onAfterRender(T,w,Y),Wt.resetDefaultState(),ct=-1,rt=null,F.pop(),F.length>0?(I=F[F.length-1],kt===!0&&Yt.setGlobalState(T.clippingPlanes,I.state.camera)):I=null,B.pop(),B.length>0?D=B[B.length-1]:D=null};function ci(w,Y,ot,at){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)ot=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)I.pushLight(w),w.castShadow&&I.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Gt.intersectsSprite(w)){at&&vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const jt=Lt.update(w),Bt=w.material;Bt.visible&&D.push(w,jt,Bt,ot,vt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Gt.intersectsObject(w))){const jt=Lt.update(w),Bt=w.material;if(at&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),vt.copy(w.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),vt.copy(jt.boundingSphere.center)),vt.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Bt)){const Zt=jt.groups;for(let $t=0,re=Zt.length;$t<re;$t++){const te=Zt[$t],le=Bt[te.materialIndex];le&&le.visible&&D.push(w,jt,le,ot,vt.z,te)}}else Bt.visible&&D.push(w,jt,Bt,ot,vt.z,null)}}const zt=w.children;for(let jt=0,Bt=zt.length;jt<Bt;jt++)ci(zt[jt],Y,ot,at)}function on(w,Y,ot,at){const{opaque:K,transmissive:zt,transparent:jt}=w;I.setupLightsView(ot),kt===!0&&Yt.setGlobalState(T.clippingPlanes,ot),at&&Ut.viewport(z.copy(at)),K.length>0&&Mi(K,Y,ot),zt.length>0&&Mi(zt,Y,ot),jt.length>0&&Mi(jt,Y,ot),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Sn(w,Y,ot,at){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[at.id]===void 0){const le=Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[at.id]=new ki(1,1,{generateMipmaps:!0,type:le?Ma:li,minFilter:zs,samples:ae.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace})}const zt=I.state.transmissionRenderTarget[at.id],jt=at.viewport||z;zt.setSize(jt.z*T.transmissionResolutionScale,jt.w*T.transmissionResolutionScale);const Bt=T.getRenderTarget(),Zt=T.getActiveCubeFace(),$t=T.getActiveMipmapLevel();T.setRenderTarget(zt),T.getClearColor(bt),Mt=T.getClearAlpha(),Mt<1&&T.setClearColor(16777215,.5),T.clear(),yt&&Ot.render(ot);const re=T.toneMapping;T.toneMapping=Vi;const te=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),I.setupLightsView(at),kt===!0&&Yt.setGlobalState(T.clippingPlanes,at),Mi(w,ot,at),W.updateMultisampleRenderTarget(zt),W.updateRenderTargetMipmap(zt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Oe=0,Qe=Y.length;Oe<Qe;Oe++){const Ye=Y[Oe],{object:Fe,geometry:ie,material:Pe,group:he}=Ye;if(Pe.side===_a&&Fe.layers.test(at.layers)){const Mn=Pe.side;Pe.side=Zn,Pe.needsUpdate=!0,Vs(Fe,ot,at,ie,Pe,he),Pe.side=Mn,Pe.needsUpdate=!0,le=!0}}le===!0&&(W.updateMultisampleRenderTarget(zt),W.updateRenderTargetMipmap(zt))}T.setRenderTarget(Bt,Zt,$t),T.setClearColor(bt,Mt),te!==void 0&&(at.viewport=te),T.toneMapping=re}function Mi(w,Y,ot){const at=Y.isScene===!0?Y.overrideMaterial:null;for(let K=0,zt=w.length;K<zt;K++){const jt=w[K],{object:Bt,geometry:Zt,group:$t}=jt;let re=jt.material;re.allowOverride===!0&&at!==null&&(re=at),Bt.layers.test(ot.layers)&&Vs(Bt,Y,ot,Zt,re,$t)}}function Vs(w,Y,ot,at,K,zt){w.onBeforeRender(T,Y,ot,at,K,zt),w.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),K.onBeforeRender(T,Y,ot,at,w,zt),K.transparent===!0&&K.side===_a&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,T.renderBufferDirect(ot,Y,at,K,w,zt),K.side=os,K.needsUpdate=!0,T.renderBufferDirect(ot,Y,at,K,w,zt),K.side=_a):T.renderBufferDirect(ot,Y,at,K,w,zt),w.onAfterRender(T,Y,ot,at,K,zt)}function ks(w,Y,ot){Y.isScene!==!0&&(Y=Et);const at=b.get(w),K=I.state.lights,zt=I.state.shadowsArray,jt=K.state.version,Bt=Kt.getParameters(w,K.state,zt,Y,ot),Zt=Kt.getProgramCacheKey(Bt);let $t=at.programs;at.environment=w.isMeshStandardMaterial?Y.environment:null,at.fog=Y.fog,at.envMap=(w.isMeshStandardMaterial?St:ut).get(w.envMap||at.environment),at.envMapRotation=at.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,$t===void 0&&(w.addEventListener("dispose",On),$t=new Map,at.programs=$t);let re=$t.get(Zt);if(re!==void 0){if(at.currentProgram===re&&at.lightsStateVersion===jt)return Jr(w,Bt),re}else Bt.uniforms=Kt.getUniforms(w),w.onBeforeCompile(Bt,T),re=Kt.acquireProgram(Bt,Zt),$t.set(Zt,re),at.uniforms=Bt.uniforms;const te=at.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(te.clippingPlanes=Yt.uniform),Jr(w,Bt),at.needsLights=Ta(w),at.lightsStateVersion=jt,at.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),at.currentProgram=re,at.uniformsList=null,re}function gl(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=nu.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function Jr(w,Y){const ot=b.get(w);ot.outputColorSpace=Y.outputColorSpace,ot.batching=Y.batching,ot.batchingColor=Y.batchingColor,ot.instancing=Y.instancing,ot.instancingColor=Y.instancingColor,ot.instancingMorph=Y.instancingMorph,ot.skinning=Y.skinning,ot.morphTargets=Y.morphTargets,ot.morphNormals=Y.morphNormals,ot.morphColors=Y.morphColors,ot.morphTargetsCount=Y.morphTargetsCount,ot.numClippingPlanes=Y.numClippingPlanes,ot.numIntersection=Y.numClipIntersection,ot.vertexAlphas=Y.vertexAlphas,ot.vertexTangents=Y.vertexTangents,ot.toneMapping=Y.toneMapping}function ls(w,Y,ot,at,K){Y.isScene!==!0&&(Y=Et),W.resetTextureUnits();const zt=Y.fog,jt=at.isMeshStandardMaterial?Y.environment:null,Bt=J===null?T.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Vr,Zt=(at.isMeshStandardMaterial?St:ut).get(at.envMap||jt),$t=at.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,re=!!ot.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),te=!!ot.morphAttributes.position,le=!!ot.morphAttributes.normal,Oe=!!ot.morphAttributes.color;let Qe=Vi;at.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Qe=T.toneMapping);const Ye=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Fe=Ye!==void 0?Ye.length:0,ie=b.get(at),Pe=I.state.lights;if(kt===!0&&(ge===!0||w!==rt)){const Tn=w===rt&&at.id===ct;Yt.setState(at,w,Tn)}let he=!1;at.version===ie.__version?(ie.needsLights&&ie.lightsStateVersion!==Pe.state.version||ie.outputColorSpace!==Bt||K.isBatchedMesh&&ie.batching===!1||!K.isBatchedMesh&&ie.batching===!0||K.isBatchedMesh&&ie.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ie.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ie.instancing===!1||!K.isInstancedMesh&&ie.instancing===!0||K.isSkinnedMesh&&ie.skinning===!1||!K.isSkinnedMesh&&ie.skinning===!0||K.isInstancedMesh&&ie.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ie.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ie.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ie.instancingMorph===!1&&K.morphTexture!==null||ie.envMap!==Zt||at.fog===!0&&ie.fog!==zt||ie.numClippingPlanes!==void 0&&(ie.numClippingPlanes!==Yt.numPlanes||ie.numIntersection!==Yt.numIntersection)||ie.vertexAlphas!==$t||ie.vertexTangents!==re||ie.morphTargets!==te||ie.morphNormals!==le||ie.morphColors!==Oe||ie.toneMapping!==Qe||ie.morphTargetsCount!==Fe)&&(he=!0):(he=!0,ie.__version=at.version);let Mn=ie.currentProgram;he===!0&&(Mn=ks(at,Y,K));let ji=!1,bn=!1,ui=!1;const Be=Mn.getUniforms(),En=ie.uniforms;if(Ut.useProgram(Mn.program)&&(ji=!0,bn=!0,ui=!0),at.id!==ct&&(ct=at.id,bn=!0),ji||rt!==w){Ut.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Be.setValue(O,"projectionMatrix",w.projectionMatrix),Be.setValue(O,"viewMatrix",w.matrixWorldInverse);const An=Be.map.cameraPosition;An!==void 0&&An.setValue(O,ue.setFromMatrixPosition(w.matrixWorld)),ae.logarithmicDepthBuffer&&Be.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Be.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),rt!==w&&(rt=w,bn=!0,ui=!0)}if(ie.needsLights&&(Pe.state.directionalShadowMap.length>0&&Be.setValue(O,"directionalShadowMap",Pe.state.directionalShadowMap,W),Pe.state.spotShadowMap.length>0&&Be.setValue(O,"spotShadowMap",Pe.state.spotShadowMap,W),Pe.state.pointShadowMap.length>0&&Be.setValue(O,"pointShadowMap",Pe.state.pointShadowMap,W)),K.isSkinnedMesh){Be.setOptional(O,K,"bindMatrix"),Be.setOptional(O,K,"bindMatrixInverse");const Tn=K.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),Be.setValue(O,"boneTexture",Tn.boneTexture,W))}K.isBatchedMesh&&(Be.setOptional(O,K,"batchingTexture"),Be.setValue(O,"batchingTexture",K._matricesTexture,W),Be.setOptional(O,K,"batchingIdTexture"),Be.setValue(O,"batchingIdTexture",K._indirectTexture,W),Be.setOptional(O,K,"batchingColorTexture"),K._colorsTexture!==null&&Be.setValue(O,"batchingColorTexture",K._colorsTexture,W));const dn=ot.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ve.update(K,ot,Mn),(bn||ie.receiveShadow!==K.receiveShadow)&&(ie.receiveShadow=K.receiveShadow,Be.setValue(O,"receiveShadow",K.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(En.envMap.value=Zt,En.flipEnvMap.value=Zt.isCubeTexture&&Zt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&Y.environment!==null&&(En.envMapIntensity.value=Y.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=R2()),bn&&(Be.setValue(O,"toneMappingExposure",T.toneMappingExposure),ie.needsLights&&$r(En,ui),zt&&at.fog===!0&&oe.refreshFogUniforms(En,zt),oe.refreshMaterialUniforms(En,at,mt,tt,I.state.transmissionRenderTarget[w.id]),nu.upload(O,gl(ie),En,W)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(nu.upload(O,gl(ie),En,W),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Be.setValue(O,"center",K.center),Be.setValue(O,"modelViewMatrix",K.modelViewMatrix),Be.setValue(O,"normalMatrix",K.normalMatrix),Be.setValue(O,"modelMatrix",K.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const Tn=at.uniformsGroups;for(let An=0,Xs=Tn.length;An<Xs;An++){const bi=Tn[An];At.update(bi,Mn),At.bind(bi,Mn)}}return Mn}function $r(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function Ta(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(w,Y,ot){const at=b.get(w);at.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),b.get(w.texture).__webglTexture=Y,b.get(w.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ot,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){const ot=b.get(w);ot.__webglFramebuffer=Y,ot.__useDefaultFramebuffer=Y===void 0};const Aa=O.createFramebuffer();this.setRenderTarget=function(w,Y=0,ot=0){J=w,H=Y,Q=ot;let at=null,K=!1,zt=!1;if(w){const Bt=b.get(w);if(Bt.__useDefaultFramebuffer!==void 0){Ut.bindFramebuffer(O.FRAMEBUFFER,Bt.__webglFramebuffer),z.copy(w.viewport),V.copy(w.scissor),nt=w.scissorTest,Ut.viewport(z),Ut.scissor(V),Ut.setScissorTest(nt),ct=-1;return}else if(Bt.__webglFramebuffer===void 0)W.setupRenderTarget(w);else if(Bt.__hasExternalTextures)W.rebindTextures(w,b.get(w.texture).__webglTexture,b.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const re=w.depthTexture;if(Bt.__boundDepthTexture!==re){if(re!==null&&b.has(re)&&(w.width!==re.image.width||w.height!==re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(w)}}const Zt=w.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(zt=!0);const $t=b.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray($t[Y])?at=$t[Y][ot]:at=$t[Y],K=!0):w.samples>0&&W.useMultisampledRTT(w)===!1?at=b.get(w).__webglMultisampledFramebuffer:Array.isArray($t)?at=$t[ot]:at=$t,z.copy(w.viewport),V.copy(w.scissor),nt=w.scissorTest}else z.copy(it).multiplyScalar(mt).floor(),V.copy(ht).multiplyScalar(mt).floor(),nt=Dt;if(ot!==0&&(at=Aa),Ut.bindFramebuffer(O.FRAMEBUFFER,at)&&Ut.drawBuffers(w,at),Ut.viewport(z),Ut.scissor(V),Ut.setScissorTest(nt),K){const Bt=b.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Bt.__webglTexture,ot)}else if(zt){const Bt=Y;for(let Zt=0;Zt<w.textures.length;Zt++){const $t=b.get(w.textures[Zt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Zt,$t.__webglTexture,ot,Bt)}}else if(w!==null&&ot!==0){const Bt=b.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Bt.__webglTexture,ot)}ct=-1},this.readRenderTargetPixels=function(w,Y,ot,at,K,zt,jt,Bt=0){if(!(w&&w.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Zt=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&jt!==void 0&&(Zt=Zt[jt]),Zt){Ut.bindFramebuffer(O.FRAMEBUFFER,Zt);try{const $t=w.textures[Bt],re=$t.format,te=$t.type;if(!ae.textureFormatReadable(re)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(te)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-at&&ot>=0&&ot<=w.height-K&&(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Bt),O.readPixels(Y,ot,at,K,Rt.convert(re),Rt.convert(te),zt))}finally{const $t=J!==null?b.get(J).__webglFramebuffer:null;Ut.bindFramebuffer(O.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(w,Y,ot,at,K,zt,jt,Bt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Zt=b.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&jt!==void 0&&(Zt=Zt[jt]),Zt)if(Y>=0&&Y<=w.width-at&&ot>=0&&ot<=w.height-K){Ut.bindFramebuffer(O.FRAMEBUFFER,Zt);const $t=w.textures[Bt],re=$t.format,te=$t.type;if(!ae.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const le=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,le),O.bufferData(O.PIXEL_PACK_BUFFER,zt.byteLength,O.STREAM_READ),w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Bt),O.readPixels(Y,ot,at,K,Rt.convert(re),Rt.convert(te),0);const Oe=J!==null?b.get(J).__webglFramebuffer:null;Ut.bindFramebuffer(O.FRAMEBUFFER,Oe);const Qe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await mM(O,Qe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,le),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,zt),O.deleteBuffer(le),O.deleteSync(Qe),zt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,ot=0){const at=Math.pow(2,-ot),K=Math.floor(w.image.width*at),zt=Math.floor(w.image.height*at),jt=Y!==null?Y.x:0,Bt=Y!==null?Y.y:0;W.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,ot,0,0,jt,Bt,K,zt),Ut.unbindTexture()};const cs=O.createFramebuffer(),wa=O.createFramebuffer();this.copyTextureToTexture=function(w,Y,ot=null,at=null,K=0,zt=null){zt===null&&(K!==0?(ol("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),zt=K,K=0):zt=0);let jt,Bt,Zt,$t,re,te,le,Oe,Qe;const Ye=w.isCompressedTexture?w.mipmaps[zt]:w.image;if(ot!==null)jt=ot.max.x-ot.min.x,Bt=ot.max.y-ot.min.y,Zt=ot.isBox3?ot.max.z-ot.min.z:1,$t=ot.min.x,re=ot.min.y,te=ot.isBox3?ot.min.z:0;else{const dn=Math.pow(2,-K);jt=Math.floor(Ye.width*dn),Bt=Math.floor(Ye.height*dn),w.isDataArrayTexture?Zt=Ye.depth:w.isData3DTexture?Zt=Math.floor(Ye.depth*dn):Zt=1,$t=0,re=0,te=0}at!==null?(le=at.x,Oe=at.y,Qe=at.z):(le=0,Oe=0,Qe=0);const Fe=Rt.convert(Y.format),ie=Rt.convert(Y.type);let Pe;Y.isData3DTexture?(W.setTexture3D(Y,0),Pe=O.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(W.setTexture2DArray(Y,0),Pe=O.TEXTURE_2D_ARRAY):(W.setTexture2D(Y,0),Pe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,Y.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,Y.unpackAlignment);const he=O.getParameter(O.UNPACK_ROW_LENGTH),Mn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ji=O.getParameter(O.UNPACK_SKIP_PIXELS),bn=O.getParameter(O.UNPACK_SKIP_ROWS),ui=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ye.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ye.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,$t),O.pixelStorei(O.UNPACK_SKIP_ROWS,re),O.pixelStorei(O.UNPACK_SKIP_IMAGES,te);const Be=w.isDataArrayTexture||w.isData3DTexture,En=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){const dn=b.get(w),Tn=b.get(Y),An=b.get(dn.__renderTarget),Xs=b.get(Tn.__renderTarget);Ut.bindFramebuffer(O.READ_FRAMEBUFFER,An.__webglFramebuffer),Ut.bindFramebuffer(O.DRAW_FRAMEBUFFER,Xs.__webglFramebuffer);for(let bi=0;bi<Zt;bi++)Be&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,b.get(w).__webglTexture,K,te+bi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,b.get(Y).__webglTexture,zt,Qe+bi)),O.blitFramebuffer($t,re,jt,Bt,le,Oe,jt,Bt,O.DEPTH_BUFFER_BIT,O.NEAREST);Ut.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(K!==0||w.isRenderTargetTexture||b.has(w)){const dn=b.get(w),Tn=b.get(Y);Ut.bindFramebuffer(O.READ_FRAMEBUFFER,cs),Ut.bindFramebuffer(O.DRAW_FRAMEBUFFER,wa);for(let An=0;An<Zt;An++)Be?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,dn.__webglTexture,K,te+An):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dn.__webglTexture,K),En?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Tn.__webglTexture,zt,Qe+An):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Tn.__webglTexture,zt),K!==0?O.blitFramebuffer($t,re,jt,Bt,le,Oe,jt,Bt,O.COLOR_BUFFER_BIT,O.NEAREST):En?O.copyTexSubImage3D(Pe,zt,le,Oe,Qe+An,$t,re,jt,Bt):O.copyTexSubImage2D(Pe,zt,le,Oe,$t,re,jt,Bt);Ut.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else En?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Pe,zt,le,Oe,Qe,jt,Bt,Zt,Fe,ie,Ye.data):Y.isCompressedArrayTexture?O.compressedTexSubImage3D(Pe,zt,le,Oe,Qe,jt,Bt,Zt,Fe,Ye.data):O.texSubImage3D(Pe,zt,le,Oe,Qe,jt,Bt,Zt,Fe,ie,Ye):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,zt,le,Oe,jt,Bt,Fe,ie,Ye.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,zt,le,Oe,Ye.width,Ye.height,Fe,Ye.data):O.texSubImage2D(O.TEXTURE_2D,zt,le,Oe,jt,Bt,Fe,ie,Ye);O.pixelStorei(O.UNPACK_ROW_LENGTH,he),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Mn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ji),O.pixelStorei(O.UNPACK_SKIP_ROWS,bn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ui),zt===0&&Y.generateMipmaps&&O.generateMipmap(Pe),Ut.unbindTexture()},this.initRenderTarget=function(w){b.get(w).__webglFramebuffer===void 0&&W.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?W.setTextureCube(w,0):w.isData3DTexture?W.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?W.setTexture2DArray(w,0):W.setTexture2D(w,0),Ut.unbindTexture()},this.resetState=function(){H=0,Q=0,J=null,Ut.reset(),Wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ue._getUnpackColorSpace()}}const U2=()=>{const r=mn.useRef(null);return mn.useEffect(()=>{if(!r.current)return;const t=new HM;t.background=new Ce(yn.colors.background);const n=new oi(75,window.innerWidth/window.innerHeight,.1,1e3);n.position.set(0,2,8),n.lookAt(0,0,0);const s=new D2({antialias:!0});s.setSize(window.innerWidth,window.innerHeight),s.shadowMap.enabled=!0,s.shadowMap.type=__,r.current.appendChild(s.domElement);const o=(T,R,H=!1)=>{const Q=new Jo,J=new nl(.3,.4,H?1:1.5,8),ct=new va({color:T}),rt=new rn(J,ct);rt.position.y=H?.5:.75,Q.add(rt);const z=new Os(.25,16,16),V=new va({color:"#ffdbac"}),nt=new rn(z,V);nt.position.y=H?1.25:1.75,Q.add(nt);const bt=new Os(.04,8,8),Mt=new va({color:"#000000"}),L=new rn(bt,Mt);L.position.set(-.08,H?1.3:1.8,.2),Q.add(L);const tt=new rn(bt,Mt);tt.position.set(.08,H?1.3:1.8,.2),Q.add(tt);const mt=new Os(.03,8,8),wt=new va({color:"#ff6b9d"}),Ht=new rn(mt,wt);Ht.position.set(0,H?1.2:1.7,.22),Ht.scale.set(1.5,.5,.5),Q.add(Ht);const it=new Os(.02,8,8),ht=new va({color:"#ffdbac"}),Dt=new rn(it,ht);Dt.position.set(0,H?1.25:1.75,.24),Q.add(Dt);const Gt=new Os(.28,16,16),kt=T==="#e24a90"?"#8B4513":"#654321",ge=new va({color:kt}),Ee=new rn(Gt,ge);Ee.position.set(0,H?1.35:1.85,-.05),Ee.scale.set(1,.8,1),Q.add(Ee);const ue=new nl(.1,.1,.8,8),vt=new va({color:"#ffdbac"}),Et=new rn(ue,vt);Et.position.set(-.5,H?.8:1.2,0),Et.rotation.z=H?-Math.PI/3:Math.PI/6,Q.add(Et);const yt=new rn(ue,vt);if(yt.position.set(.5,H?.8:1.2,0),yt.rotation.z=H?Math.PI/3:-Math.PI/6,Q.add(yt),!H){const Pt=new nl(.12,.12,.8,8),O=new va({color:T}),ne=new rn(Pt,O);ne.position.set(-.2,-.4,0),Q.add(ne);const Ft=new rn(Pt,O);Ft.position.set(.2,-.4,0),Q.add(Ft)}return Q.position.copy(R),Q},c=o("#4a90e2",new j(-1.5,0,0),!0),f=o("#e24a90",new j(1.5,0,0),!1);t.add(c),t.add(f);const h=new $_,m=0,p=0;h.moveTo(m+.25,p+.25),h.bezierCurveTo(m+.25,p+.25,m+.2,p,m,p),h.bezierCurveTo(m-.3,p,m-.3,p+.35,m-.3,p+.35),h.bezierCurveTo(m-.3,p+.55,m-.15,p+.77,m+.25,p+.95),h.bezierCurveTo(m+.6,p+.77,m+.8,p+.55,m+.8,p+.35),h.bezierCurveTo(m+.8,p+.35,m+.8,p,m+.5,p),h.bezierCurveTo(m+.35,p,m+.25,p+.25,m+.25,p+.25);const v={depth:.2,bevelEnabled:!0,bevelSegments:5,steps:2,bevelSize:.05,bevelThickness:.05},g=new xp(h,v),_=new va({color:yn.colors.heartPrimary,emissive:yn.colors.heartPrimary,emissiveIntensity:.3}),S=new rn(g,_);S.position.set(-.25,2,0),S.rotation.z=Math.PI,t.add(S);const E=new Qn,C=500,M=new Float32Array(C*3);for(let T=0;T<C*3;T++)M[T]=(Math.random()-.5)*8;E.setAttribute("position",new Ni(M,3));const x=new Y_({size:.03,color:yn.colors.particleColor,transparent:!0,opacity:.6}),P=new WM(E,x);t.add(P);const U=new Lb(16777215,.6);t.add(U);const D=new Nb(16777215,.8);D.position.set(5,10,5),D.castShadow=!0,t.add(D);const I=new Db(yn.colors.heartPrimary,1,10);I.position.set(0,3,2),t.add(I);let B=0;const F=()=>{requestAnimationFrame(F),B+=.01,S.rotation.y=Math.sin(B*.5)*.2;const T=1+Math.sin(B*2)*.1;S.scale.set(T,T,T),c.rotation.y=Math.sin(B*.3)*.05,f.rotation.y=Math.sin(B*.3+Math.PI)*.05,P.rotation.y+=.002,s.render(t,n)};F();const q=()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",q),()=>{window.removeEventListener("resize",q),r.current&&r.current.removeChild(s.domElement),s.dispose()}},[]),r},m_=r=>{let t;const n=new Set,s=(p,v)=>{const g=typeof p=="function"?p(t):p;if(!Object.is(g,t)){const _=t;t=v??(typeof g!="object"||g===null)?g:Object.assign({},t,g),n.forEach(S=>S(t,_))}},o=()=>t,h={setState:s,getState:o,getInitialState:()=>m,subscribe:p=>(n.add(p),()=>n.delete(p))},m=t=r(s,o,h);return h},N2=(r=>r?m_(r):m_),L2=r=>r;function O2(r,t=L2){const n=ss.useSyncExternalStore(r.subscribe,ss.useCallback(()=>t(r.getState()),[r,t]),ss.useCallback(()=>t(r.getInitialState()),[r,t]));return ss.useDebugValue(n),n}const g_=r=>{const t=N2(r),n=s=>O2(t,s);return Object.assign(n,t),n},P2=(r=>r?g_(r):g_),Ea=P2((r,t)=>({showMessage:!1,showConfetti:!1,saidYes:!1,showCompliments:!1,currentCompliment:0,hasStarted:!1,showTransition:!1,handleStart:()=>r({showTransition:!0}),handleTransitionComplete:()=>{r({hasStarted:!0,showTransition:!1}),setTimeout(()=>{r({showCompliments:!0,currentCompliment:1})},500);const n=yn.text.compliments.length*12e3+3e3;setTimeout(()=>{r({showCompliments:!1,showMessage:!0})},n)},handleYesClick:()=>r({saidYes:!0,showConfetti:!0}),nextCompliment:()=>{const{currentCompliment:n}=t(),s=yn.text.compliments;n<s.length&&r({currentCompliment:n+1})},reset:()=>r({showMessage:!1,showConfetti:!1,saidYes:!1,showCompliments:!1,currentCompliment:0,hasStarted:!1,showTransition:!1})})),z2=()=>{const{showCompliments:r,currentCompliment:t,nextCompliment:n}=Ea(),s=mn.useRef(null),o=mn.useRef(!1),c=()=>{s.current&&clearTimeout(s.current),s.current=setTimeout(()=>{o.current||n()},12e3)},f=()=>{o.current=!0},h=()=>{o.current=!1,c()};return mn.useEffect(()=>{if(!r)return;const m=yn.text.compliments;if(!(t>=m.length))return c(),()=>{s.current&&clearTimeout(s.current)}},[r,t,n]),{pauseTimer:f,resumeTimer:h}},F2=()=>{const r=zS(),{showConfetti:t}=Ea();return t?pt.jsx(OS,{width:r.width,height:r.height,numberOfPieces:yn.animation.confettiPieces,recycle:!0,colors:["#ff0844","#ff1744","#ff6b9d","#ff4081","#f50057","#ff80ab"]}):null},I2=()=>{const r=U2();return pt.jsx("div",{ref:r,className:"absolute inset-0"})},B2=()=>{const{saidYes:r}=Ea();return r?pt.jsx("div",{className:"absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-2 py-4",children:pt.jsxs("div",{className:"bg-gradient-to-br from-pink-900/95 to-red-900/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 w-full max-w-xs sm:max-w-lg md:max-w-2xl mx-2 shadow-2xl border-2 sm:border-4 border-pink-400 animate-bounce-in max-h-[90vh] overflow-y-auto",style:{boxShadow:"0 0 60px rgba(255, 8, 68, 0.8), 0 0 100px rgba(255, 107, 157, 0.6)",animation:"slideIn 0.5s ease-out"},children:[pt.jsx("h2",{className:"text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-white text-center mb-3 sm:mb-4 md:mb-6 leading-tight",style:{textShadow:"0 0 20px rgba(255, 255, 255, 0.8)",fontFamily:"Georgia, serif"},children:yn.text.successTitle}),pt.jsx("div",{className:"space-y-2 sm:space-y-3 md:space-y-4",children:yn.text.successMessages.map((t,n)=>pt.jsx("p",{className:"text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-pink-100 text-center animate-fade-in leading-relaxed px-2",style:{animationDelay:`${n*.2}s`,fontFamily:"Georgia, serif",textShadow:"0 2px 4px rgba(0,0,0,0.5)"},children:t},n))}),pt.jsx("div",{className:"mt-4 sm:mt-6 md:mt-8 text-center",children:pt.jsx("div",{className:"inline-block",children:["💕","💖","💗","💓","💝","❤️","🌹","✨"].map((t,n)=>pt.jsx("span",{className:"text-xl sm:text-2xl md:text-3xl lg:text-4xl mx-1 sm:mx-2 inline-block animate-float",style:{animationDelay:`${n*.1}s`,display:"inline-block"},children:t},n))})})]})}):null},H2=()=>{const{showMessage:r,handleYesClick:t}=Ea(),n=o=>{const c=o.getBoundingClientRect(),f=window.innerWidth,h=window.innerHeight,m=20,p=Math.max(0,f-c.width-m),v=Math.max(0,h-c.height-m);let g=Math.random()*p,_=Math.random()*v;g>f*.3&&g<f*.7&&(g=g<f/2?0:p),_>h*.3&&_<h*.7&&(_=_<h/2?0:v),o.style.position="fixed",o.style.left=`${g}px`,o.style.top=`${_}px`,o.style.zIndex="9999",o.style.transition="left 0.15s ease-out, top 0.15s ease-out, transform 0.15s",o.style.transform="scale(0.9)"},s=o=>{o.preventDefault(),n(o.currentTarget)};return pt.jsxs("div",{className:`absolute inset-0 flex flex-col items-center justify-center pointer-events-none transition-all duration-1000 px-4 ${r?"opacity-100":"opacity-0"}`,children:[pt.jsx("h1",{className:"text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 md:mb-8 animate-pulse text-center",style:{textShadow:`0 0 20px ${yn.colors.textGlow}, 0 0 40px rgba(255, 8, 68, 0.6), 0 0 60px rgba(255, 8, 68, 0.4)`,fontFamily:"Georgia, serif"},children:yn.text.question}),pt.jsx("h2",{className:"text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-red-500 mb-6 sm:mb-8 md:mb-12 text-center",style:{textShadow:"0 0 30px rgba(255, 23, 68, 1), 0 0 60px rgba(255, 23, 68, 0.8)",fontFamily:"Georgia, serif",animation:`heartbeat ${yn.animation.heartbeatSpeed}s ease-in-out infinite`},children:yn.text.valentine}),pt.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 sm:gap-6 pointer-events-auto w-full max-w-lg",children:[pt.jsx("button",{className:"px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 sm:hover:scale-110 transition-all duration-300 w-full sm:w-auto",style:{boxShadow:"0 0 20px rgba(255, 23, 68, 0.6)"},onClick:t,children:yn.text.yesButton}),pt.jsx("button",{className:"px-6 sm:px-8 md:px-12 py-3 sm:py-4 bg-gray-800 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-lg border-2 border-red-400 w-full sm:w-auto select-none",onMouseEnter:s,onTouchStart:s,onTouchMove:s,onClick:o=>o.preventDefault(),children:yn.text.maybeButton})]})]})},G2=()=>pt.jsx("style",{children:`
    * {
      -webkit-tap-highlight-color: transparent;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    body {
      overflow: hidden;
      position: fixed;
      width: 100%;
      height: 100%;
      -webkit-overflow-scrolling: touch;
    }

    @media (max-width: 640px) {
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    }

    @keyframes heartbeat {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-50px) scale(0.8);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes slide-in-right {
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fade-in {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes float {
      0%,
      100% {
        transform: translateY(0px) rotate(0deg);
      }
      25% {
        transform: translateY(-20px) rotate(5deg);
      }
      50% {
        transform: translateY(-10px) rotate(-5deg);
      }
      75% {
        transform: translateY(-15px) rotate(3deg);
      }
    }

    @keyframes sparkle {
      0%, 100% {
        opacity: 0.3;
        transform: scale(0.8);
      }
      50% {
        opacity: 1;
        transform: scale(1.2);
      }
    }

    .animate-fade-in {
      animation: fade-in 0.6s ease-out forwards;
      opacity: 0;
    }

    .animate-float {
      animation: float 4s ease-in-out infinite;
    }

    .animate-sparkle {
      animation: sparkle 2s ease-in-out infinite;
    }

    .animate-slide-in-right {
      animation: slide-in-right 0.7s ease-out forwards;
    }

    /* Mobile-specific optimizations */
    @media (max-width: 768px) {
      .animate-heartbeat {
        animation: heartbeat 2s ease-in-out infinite;
      }
      
      button {
        min-height: 44px;
        min-width: 44px;
      }
    }
  `}),V2=()=>{const{showCompliments:r,currentCompliment:t}=Ea(),{pauseTimer:n,resumeTimer:s}=z2();if(!r)return null;const o=yn.text.compliments,c=o[t-1];return c?pt.jsxs("div",{className:"absolute inset-0 flex items-center justify-center z-30 pointer-events-none bg-gradient-to-br from-pink-900/90 via-purple-900/90 to-rose-900/90 backdrop-blur-sm",children:[pt.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[...Array(20)].map((f,h)=>pt.jsx("div",{className:"absolute text-pink-300/30 animate-float",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,fontSize:`${Math.random()*20+10}px`,animationDelay:`${Math.random()*5}s`,animationDuration:`${Math.random()*3+2}s`},children:"❤️"},h))}),pt.jsxs("div",{className:"max-w-6xl mx-2 sm:mx-4 w-full relative px-2 sm:px-0",children:[pt.jsxs("div",{className:"text-center mb-4 sm:mb-6",children:[pt.jsxs("div",{className:"mb-2 sm:mb-4",children:[pt.jsx("span",{className:"text-2xl sm:text-4xl animate-pulse",children:"💍"}),pt.jsx("span",{className:"text-xl sm:text-3xl mx-2 sm:mx-4",children:"✨"}),pt.jsx("span",{className:"text-2xl sm:text-4xl animate-pulse",children:"💍"})]}),pt.jsx("h1",{className:"text-2xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4 animate-pulse px-2",style:{textShadow:"0 0 40px rgba(255, 215, 0, 0.8), 0 0 60px rgba(255, 8, 68, 0.6)",fontFamily:"Georgia, serif",background:"linear-gradient(45deg, #FFD700, #FF69B4, #FFD700)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"My Wifeyyy💝 Lopamudra 👑"}),pt.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-yellow-200 mb-2 sm:mb-3 px-2",style:{fontFamily:"Georgia, serif",textShadow:"0 0 20px rgba(255, 215, 0, 0.8)"},children:"✨ Why You're So Special ✨"}),pt.jsxs("div",{className:"flex justify-center items-center space-x-2 sm:space-x-4",children:[pt.jsx("span",{className:"text-lg sm:text-xl",children:"🌹"}),pt.jsxs("span",{className:"text-sm sm:text-lg text-pink-200",children:["Step ",t," of ",o.length]}),pt.jsx("span",{className:"text-lg sm:text-xl",children:"🌹"})]})]}),pt.jsxs("div",{className:"relative bg-gradient-to-br from-white/95 via-pink-50/95 to-rose-100/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-10 shadow-2xl border-2 sm:border-4 border-yellow-300/60 text-center transform transition-all duration-700 animate-slide-in-right pointer-events-auto cursor-pointer mx-2 sm:mx-0",style:{boxShadow:"0 0 80px rgba(255, 215, 0, 0.4), 0 0 120px rgba(255, 8, 68, 0.3), inset 0 0 60px rgba(255, 255, 255, 0.1)",minHeight:"250px",maxHeight:"90vh",display:"flex",flexDirection:"column",justifyContent:"center",overflow:"auto"},onMouseEnter:n,onMouseLeave:s,onTouchStart:n,onTouchEnd:s,children:[pt.jsx("div",{className:"absolute top-2 sm:top-4 left-2 sm:left-4 text-xl sm:text-3xl text-yellow-500",children:"✨"}),pt.jsx("div",{className:"absolute top-2 sm:top-4 right-2 sm:right-4 text-xl sm:text-3xl text-yellow-500",children:"✨"}),pt.jsx("div",{className:"absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-xl sm:text-3xl text-yellow-500",children:"✨"}),pt.jsx("div",{className:"absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-xl sm:text-3xl text-yellow-500",children:"✨"}),pt.jsx("div",{className:"mb-3 sm:mb-4",children:pt.jsxs("span",{className:"inline-block px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full text-white text-sm sm:text-base font-bold shadow-lg",children:["💎 Step ",t," 💎"]})}),pt.jsx("h3",{className:"text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 px-2",style:{textShadow:"0 0 30px rgba(255, 215, 0, 0.8)",fontFamily:"Georgia, serif",background:"linear-gradient(45deg, #8B0000, #DC143C, #FF1493)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:c.title}),pt.jsx("p",{className:"text-sm sm:text-base md:text-xl leading-relaxed max-w-3xl mx-auto text-gray-800 px-2",style:{fontFamily:"Georgia, serif",textShadow:"0 2px 4px rgba(0,0,0,0.1)",lineHeight:"1.6"},children:c.message}),pt.jsxs("div",{className:"flex justify-center items-center mt-3 sm:mt-4 space-x-2 sm:space-x-4",children:[pt.jsx("div",{className:"w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"}),pt.jsx("span",{className:"text-xl sm:text-2xl",children:"💖"}),pt.jsx("div",{className:"w-8 sm:w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent"})]})]},t),pt.jsxs("div",{className:"mt-4 sm:mt-6 text-center px-2",children:[pt.jsx("div",{className:"flex justify-center mb-3 sm:mb-4",children:pt.jsx("div",{className:"flex space-x-1 sm:space-x-2 flex-wrap justify-center",children:o.map((f,h)=>pt.jsx("div",{className:`w-2 h-2 sm:w-4 sm:h-4 rounded-full transition-all duration-500 border border-2 ${h<t?"bg-gradient-to-r from-yellow-400 to-pink-400 border-yellow-300 scale-110 shadow-lg":"bg-pink-200/50 border-pink-300/50"}`},h))})}),pt.jsx("div",{className:"w-full bg-gradient-to-r from-pink-200/30 via-purple-200/30 to-rose-200/30 rounded-full h-1 sm:h-2 max-w-xs sm:max-w-md mx-auto border border-pink-300/30",children:pt.jsx("div",{className:"bg-gradient-to-r from-yellow-400 via-pink-400 to-rose-400 h-1 sm:h-2 rounded-full transition-all duration-700 shadow-lg",style:{width:`${t/o.length*100}%`}})}),pt.jsx("p",{className:"text-yellow-200 mt-2 sm:mt-3 text-sm sm:text-base px-2",style:{fontFamily:"Georgia, serif"},children:"🌹 Creating memories just for you 🌹"})]})]})]}):null},k2="/assets/how-do-I-stop-loving-you-Bo14GGQK.mp3",X2=()=>{const r=mn.useRef(null),{hasStarted:t}=Ea();return mn.useEffect(()=>{const n=r.current;n&&t&&(n.volume=.3,n.loop=!0,n.play().catch(()=>{console.log("Autoplay blocked or failed")}))},[t]),pt.jsx("audio",{ref:r,src:k2,preload:"auto"})},W2=()=>Array.from({length:15},()=>({left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,fontSize:`${Math.random()*30+15}px`,animationDelay:`${Math.random()*5}s`,animationDuration:`${Math.random()*4+3}s`})),v_=({text:r,speed:t=100,delay:n=0,className:s="",style:o={}})=>{const[c,f]=mn.useState(""),[h,m]=mn.useState(0),[p,v]=mn.useState(!0);return mn.useEffect(()=>{const g=setTimeout(()=>{if(h<r.length){const _=setTimeout(()=>{f(r.slice(0,h+1)),m(h+1)},t);return()=>clearTimeout(_)}},n);return()=>clearTimeout(g)},[h,r,t,n]),mn.useEffect(()=>{const g=setInterval(()=>{v(_=>!_)},500);return()=>clearInterval(g)},[]),pt.jsxs("span",{className:s,style:o,children:[c,h<r.length&&pt.jsx("span",{className:`inline-block ${p?"opacity-100":"opacity-0"}`,children:"|"})]})},q2=()=>{const[r]=mn.useState(W2),{hasStarted:t,showTransition:n,handleStart:s}=Ea();if(t||n)return null;const o=()=>{document.documentElement.requestFullscreen&&document.documentElement.requestFullscreen().catch(()=>{}),s()};return pt.jsxs("div",{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-purple-900/50 to-pink-900/50 z-50 px-4",children:[pt.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:r.map((c,f)=>pt.jsx("div",{className:"absolute text-pink-300/20 animate-float",style:c,children:"❤️"},f))}),pt.jsxs("div",{className:"text-center relative z-10 w-full max-w-4xl",children:[pt.jsxs("div",{className:"mb-8 sm:mb-12",children:[pt.jsx(v_,{text:"Hiii Wifeyy ❤️",speed:150,className:"text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white block mb-2 sm:mb-4",style:{fontFamily:"Georgia, serif",textShadow:"0 0 30px rgba(255, 8, 68, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)"}}),pt.jsx(v_,{text:"✨ Forever and Always ✨",speed:80,delay:3e3,className:"text-lg sm:text-xl md:text-2xl lg:text-3xl text-yellow-200 block",style:{fontFamily:"Georgia, serif",textShadow:"0 0 20px rgba(255, 215, 0, 0.8)"}})]}),pt.jsx("div",{className:"mb-8 sm:mb-12",children:pt.jsx("div",{className:"text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 sm:mb-8 cursor-pointer hover:scale-110 transition-transform duration-300 inline-block",onClick:o,style:{animation:"heartbeat 1.5s ease-in-out infinite",filter:"drop-shadow(0 0 30px #ff0844) drop-shadow(0 0 60px #FFD700)"},children:"💖"})}),pt.jsxs("div",{className:"max-w-2xl mx-2 sm:mx-4",children:[pt.jsx("p",{className:"text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-center leading-relaxed mb-3 sm:mb-4",children:"💍 Click the heart to begin your royal experience, My Wifeyyy💝 👑"}),pt.jsx("p",{className:"text-pink-200 text-base sm:text-lg md:text-xl lg:text-xl font-serif text-center leading-relaxed italic",children:"✨ I think you did some Bengali jadoo on me... because I'm completely under your spell! 🪄💕"}),pt.jsxs("div",{className:"flex justify-center items-center mt-6 sm:mt-8 space-x-4 sm:space-x-6",children:[pt.jsx("span",{className:"text-2xl sm:text-3xl animate-sparkle",children:"✨"}),pt.jsx("span",{className:"text-3xl sm:text-4xl",children:"🌹"}),pt.jsx("span",{className:"text-2xl sm:text-3xl animate-sparkle",children:"✨"})]})]})]})]})},Y2=({text:r,onComplete:t,className:n="",style:s={}})=>{const[o,c]=mn.useState(r.length);return mn.useEffect(()=>{const f=setInterval(()=>{c(h=>h<=0?(clearInterval(f),setTimeout(t,300),0):h-1)},200);return()=>clearInterval(f)},[t]),pt.jsxs("div",{className:`relative flex justify-center ${n}`,style:s,children:[pt.jsx("span",{className:"invisible whitespace-pre",children:r}),pt.jsx("span",{className:"absolute left-1/2 top-0 -translate-x-1/2 whitespace-pre",children:r.split("").map((f,h)=>pt.jsx("span",{className:"inline-block transition-all duration-500",style:{opacity:h<o?1:0,transform:h<o?"scale(1)":"scale(1.5)",transitionDelay:`${h*100}ms`},children:f===" "?" ":f},h))})]})},j2=()=>{const{showTransition:r,handleTransitionComplete:t}=Ea();return r?pt.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-purple-900/80 to-pink-900/80 z-40 px-4",children:pt.jsx(Y2,{text:"HI WIFEYYY",onComplete:t,className:"text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold",style:{fontFamily:"Georgia, serif",color:"#FFD700",textShadow:"0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 8, 68, 0.6)",letterSpacing:"0.1em"}})}):null},Z2=()=>{const{saidYes:r}=Ea();return r?pt.jsxs("div",{className:"absolute inset-0 flex items-center justify-center z-40 bg-gradient-to-br from-red-900/90 via-pink-900/90 to-purple-900/90 backdrop-blur-sm pointer-events-auto p-4",children:[pt.jsx("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[...Array(30)].map((t,n)=>pt.jsx("div",{className:"absolute text-pink-300/40 animate-float",style:{left:`${Math.random()*100}%`,top:`${Math.random()*100}%`,fontSize:`${Math.random()*30+15}px`,animationDelay:`${Math.random()*5}s`,animationDuration:`${Math.random()*4+3}s`},children:"💖"},n))}),pt.jsxs("div",{className:"bg-gradient-to-br from-white/95 via-pink-50/95 to-rose-100/95 backdrop-blur-md rounded-3xl p-8 md:p-12 w-full max-w-5xl shadow-2xl border-4 border-red-300/60 text-center relative overflow-hidden",style:{boxShadow:"0 0 80px rgba(255, 0, 68, 0.4), 0 0 120px rgba(255, 8, 68, 0.3), inset 0 0 60px rgba(255, 255, 255, 0.2)"},children:[pt.jsx("div",{className:"absolute top-4 left-4 text-4xl text-red-500 animate-pulse",children:"💕"}),pt.jsx("div",{className:"absolute top-4 right-4 text-4xl text-red-500 animate-pulse",children:"💕"}),pt.jsx("div",{className:"absolute bottom-4 left-4 text-4xl text-red-500 animate-pulse",children:"💕"}),pt.jsx("div",{className:"absolute bottom-4 right-4 text-4xl text-red-500 animate-pulse",children:"💕"}),pt.jsx("div",{className:"mb-8",children:pt.jsx("h2",{className:"text-5xl md:text-7xl font-bold mb-6 animate-pulse",style:{fontFamily:"Georgia, serif",background:"linear-gradient(45deg, #DC143C, #FF1493, #FF69B4, #DC143C)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textShadow:"0 0 40px rgba(220, 20, 60, 0.8)"},children:"🎉 You Made Me The Happiest! 🎉"})}),pt.jsxs("div",{className:"space-y-8 text-xl md:text-3xl leading-relaxed",style:{fontFamily:"Georgia, serif"},children:[pt.jsxs("p",{className:"animate-fade-in text-gray-800 font-medium",style:{textShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:["💕 ",pt.jsx("strong",{className:"text-red-600",children:"Lopamudra, you just made me the happiest person alive!"})," 💕"]}),pt.jsxs("p",{className:"animate-fade-in text-gray-700",style:{animationDelay:"0.5s",textShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:["I am ",pt.jsx("span",{className:"text-red-500 font-bold",children:"forever grateful"})," that you said yes. You've filled my heart with so much ",pt.jsx("span",{className:"text-pink-600 font-bold",children:"joy and love"}),"."]}),pt.jsxs("p",{className:"animate-fade-in text-gray-700",style:{animationDelay:"1s",textShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:["I promise to always make you ",pt.jsx("span",{className:"text-red-500 font-bold",children:"happy"}),", to bring ",pt.jsx("span",{className:"text-pink-600 font-bold",children:"smiles"})," to your face every single day."]}),pt.jsxs("p",{className:"animate-fade-in text-gray-700",style:{animationDelay:"1.5s",textShadow:"0 2px 4px rgba(0,0,0,0.1)"},children:["You're my ",pt.jsx("span",{className:"text-red-600 font-bold",children:"everything"}),", and I can't wait to create ",pt.jsx("span",{className:"text-pink-600 font-bold",children:"beautiful memories"})," together."]}),pt.jsxs("div",{className:"flex justify-center items-center mt-8 space-x-4",children:[pt.jsx("div",{className:"w-20 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent"}),pt.jsx("span",{className:"text-4xl animate-pulse",children:"💖"}),pt.jsx("div",{className:"w-20 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent"})]}),pt.jsx("p",{className:"animate-fade-in text-3xl md:text-4xl font-bold",style:{animationDelay:"2s",background:"linear-gradient(45deg, #DC143C, #FF1493, #FF69B4)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",textShadow:"0 0 30px rgba(220, 20, 60, 0.6)"},children:"✨ Forever yours, with all my love ✨"})]}),pt.jsxs("div",{className:"mt-10 flex justify-center space-x-6 text-5xl",children:[pt.jsx("span",{className:"animate-bounce",style:{color:"#DC143C"},children:"💖"}),pt.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.2s",color:"#FF1493"},children:"🌹"}),pt.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.4s",color:"#FF69B4"},children:"💕"}),pt.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.6s",color:"#DC143C"},children:"💖"})]})]})]}):null};function Q2(){return pt.jsxs("div",{className:"relative w-full h-screen overflow-hidden touch-manipulation",children:[pt.jsx(q2,{}),pt.jsx(j2,{}),pt.jsx(X2,{}),pt.jsx(I2,{}),pt.jsx(V2,{}),pt.jsx(F2,{}),pt.jsx(B2,{}),pt.jsx(H2,{}),pt.jsx(Z2,{}),pt.jsx(G2,{})]})}ES.createRoot(document.getElementById("root")).render(pt.jsx(mn.StrictMode,{children:pt.jsx(Q2,{})}));
