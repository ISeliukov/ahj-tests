!function(){"use strict";var t={};function s(t){const s=t.toString();let e=0;for(let t=0;t<s.length;t++)e+=parseInt(s[t],10);return e}function e(t,s,e){const r=document.querySelectorAll("#logo-group div");for(const a of r)a.classList.contains(e)?(a.classList.add("selectedcardtype"),a.classList.remove(s)):(t?a.classList.add(s):a.classList.remove(s),a.classList.remove("selectedcardtype"))}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),function(){var s;t.g.importScripts&&(s=t.g.location+"");var e=t.g.document;if(!s&&e&&(e.currentScript&&(s=e.currentScript.src),!s)){var r=e.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!s;)s=r[a--].src}if(!s)throw new Error("Automatic publicPath is not supported in this browser");s=s.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=s}(),document.getElementById("entercard").addEventListener("input",(t=>{const s=document.getElementById("entercardTyp"),r=t.target.value;console.log(t,t.target,r);const a=function(t){const s=[{start:"2",typ:"Мир",classes:"sn-mir"},{start:"4",typ:"VISA",classes:"sn-visa"},{start:"50",typ:"Maestro",classes:"sn-maestro"},{start:"56",typ:"Maestro",classes:"sn-maestro"},{start:"57",typ:"Maestro",classes:"sn-maestro"},{start:"58",typ:"Maestro",classes:"sn-maestro"},{start:"51",typ:"MasterCard",classes:"sn-mastercard"},{start:"52",typ:"MasterCard",classes:"sn-mastercard"},{start:"53",typ:"MasterCard",classes:"sn-mastercard"},{start:"54",typ:"MasterCard",classes:"sn-mastercard"},{start:"55",typ:"MasterCard",classes:"sn-mastercard"},{start:"62",typ:"China UnionPay",classes:"sn-unionpay"},{start:"63",typ:"Maestro",classes:"sn-maestro"},{start:"67",typ:"Maestro",classes:"sn-maestro"}].filter((s=>t.startsWith(s.start)));if(1===s.length)return s[0]}(r);console.log(a),a?(s.innerText=a.typ,e(!0,"sn-unselected",a.classes)):(s.innerText="",e(!1,"sn-unselected",""))})),document.getElementById("enterbutton").addEventListener("click",(t=>{t.preventDefault();const e=document.getElementById("entercard"),r=e.value,a=document.getElementById("entercardState"),n=function(t){let e=0;for(let r=0;r<t.length-1;r++){let a;a=r%2==0?s(parseInt(2*t[r],10)):parseInt(t[r],10),e+=a}return{LastDigit:parseInt(t[t.length-1],10),calcLastDigit:9*e%10}}(r);n.LastDigit===n.calcLastDigit?(a.innerText="проверено",a.classList.remove("invisible"),a.classList.remove("errormsg"),a.classList.add("successmsg"),e.classList.remove("invalid"),e.classList.add("valid")):(a.innerText="ошибка",a.classList.remove("invisible"),a.classList.remove("successmsg"),a.classList.add("errormsg"),e.classList.add("invalid"),e.classList.remove("valid"))})),document.addEventListener("DOMContentLoaded",(()=>{console.log("Module started!")})),t.p}();
//# sourceMappingURL=app.js.map