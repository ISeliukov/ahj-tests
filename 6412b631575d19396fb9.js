import{Checker}from"./Checker";import CardType from"./CardType";function shadowIcons(e,s,t){const c=document.querySelectorAll("#logo-group div");for(const n of c)n.classList.contains(t)?(n.classList.add("selectedcardtype"),n.classList.remove(s)):(e?n.classList.add(s):n.classList.remove(s),n.classList.remove("selectedcardtype"))}document.getElementById("entercard").addEventListener("input",(e=>{const s=document.getElementById("entercardTyp"),t=e.target.value;console.log(e,e.target,t);const c=CardType(t);console.log(c),c?(s.innerText=c.typ,shadowIcons(!0,"sn-unselected",c.classes)):(s.innerText="",shadowIcons(!1,"sn-unselected",""))})),document.getElementById("enterbutton").addEventListener("click",(e=>{e.preventDefault();const s=document.getElementById("entercard"),t=s.value,c=document.getElementById("entercardState"),n=Checker(t);n.LastDigit===n.calcLastDigit?(c.innerText="проверено",c.classList.remove("invisible"),c.classList.remove("errormsg"),c.classList.add("successmsg"),s.classList.remove("invalid"),s.classList.add("valid")):(c.innerText="ошибка",c.classList.remove("invisible"),c.classList.remove("successmsg"),c.classList.add("errormsg"),s.classList.add("invalid"),s.classList.remove("valid"))})),document.addEventListener("DOMContentLoaded",(()=>{console.log("Module started!")}));