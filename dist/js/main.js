(()=>{"use strict";function e({timing:e,draw:t,duration:o}){let c=performance.now();requestAnimationFrame((function l(n){let s=(n-c)/o;s>1&&(s=1);let a=e(s);t(a),s<1&&requestAnimationFrame(l)}))}(()=>{const t=document.querySelector("body"),o=document.querySelector(".modal-overlay"),c=document.querySelector(".modal-callback"),l=document.querySelector(".mobile-menu");t.addEventListener("click",(t=>{t.target.closest(".callback-btn")||t.target.closest(".button-services")?(t.preventDefault(),o.style.display="block",l.classList.contains("open")&&l.classList.remove("open"),window.innerWidth>768?e({duration:500,timing:e=>Math.pow(e,2),draw(e){c.style.opacity=e}}):c.style.opacity=1):t.target.closest(".modal-callback")&&!t.target.closest(".modal-close")||(window.innerWidth>768?(e({duration:500,timing:e=>Math.pow(e,2),draw(e){c.style.opacity=1-e}}),setTimeout((()=>o.style.display="none"),1e3)):(c.style.opacity=0,o.style.display="none"))}))})(),(()=>{if(!(window.innerWidth>991)){const e=document.querySelector("body"),t=(document.querySelector(".mob-menu-btn"),document.querySelector(".mobile-menu")),o=(document.querySelector(".mobile-menu-close"),t.querySelectorAll("ul>li>a")),c=()=>{t.classList.toggle("open")};e.addEventListener("click",(e=>{e.target.closest(".mob-menu-btn")?c():(e.target.classList.contains("overlay")||e.target.closest(".mobile-menu-close"))&&t.classList.remove("open"),o.forEach((t=>{e.target===t&&c()}))}))}})(),(()=>{document.querySelector("body");const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element");e.addEventListener("click",(e=>{t.forEach(((o,c)=>{e.target.closest(".element")&&(t[c].classList.contains("active")?t[c].classList.remove("active"):e.target.closest(".element")===t[c]&&t[c].classList.toggle("active"))}))}))})()})();