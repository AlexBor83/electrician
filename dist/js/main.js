(()=>{"use strict";function e({timing:e,draw:t,duration:o}){let n=performance.now();requestAnimationFrame((function l(c){let s=(c-n)/o;s>1&&(s=1);let a=e(s);t(a),s<1&&requestAnimationFrame(l)}))}(()=>{const t=document.querySelector("body"),o=document.querySelector(".modal-overlay"),n=document.querySelector(".modal-callback"),l=document.querySelector(".mobile-menu");t.addEventListener("click",(t=>{t.target.closest(".callback-btn")||t.target.closest(".button-services")?(t.preventDefault(),o.style.display="block",l.classList.contains("open")&&l.classList.remove("open"),window.innerWidth>768?e({duration:500,timing:e=>Math.pow(e,2),draw(e){n.style.opacity=e}}):n.style.opacity=1):t.target.closest(".modal-callback")&&!t.target.closest(".modal-close")||(window.innerWidth>768?(e({duration:500,timing:e=>Math.pow(e,2),draw(e){n.style.opacity=1-e}}),setTimeout((()=>o.style.display="none"),1e3)):(n.style.opacity=0,o.style.display="none"))}))})(),(()=>{if(!(window.innerWidth>991)){const e=document.querySelector("body"),t=(document.querySelector(".mob-menu-btn"),document.querySelector(".mobile-menu")),o=(document.querySelector(".mobile-menu-close"),t.querySelectorAll("ul>li>a")),n=()=>{t.classList.toggle("open")};e.addEventListener("click",(e=>{e.target.closest(".mob-menu-btn")?n():(e.target.classList.contains("overlay")||e.target.closest(".mobile-menu-close"))&&t.classList.remove("open"),o.forEach((t=>{e.target===t&&n()}))}))}})()})();