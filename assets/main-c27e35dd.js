(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const e of n)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const e={};return n.integrity&&(e.integrity=n.integrity),n.referrerPolicy&&(e.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?e.credentials="include":n.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(n){if(n.ep)return;n.ep=!0;const e=t(n);fetch(n.href,e)}})();$(document).ready(function(){console.log("isMobile",c()),AOS.init(),$(".menu").click(function(){$(this).toggleClass("open menu--white"),$(".nav-menu").toggleClass("open"),$(".header").toggleClass("header--in-overlay")}),w(),v(),h(),$(document).on("scroll",()=>{$("body").hasClass("recruitment")&&($(window).scrollTop()>10?$(".header").removeClass("header--transparent"):$(".header").addClass("header--transparent"))})});const g=()=>{gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);let i=gsap.utils.toArray(".development-path__panel");const o=document.querySelector(".development-path");let t;gsap.to(i,{xPercent:-100*(i.length-1),ease:"none",scrollTrigger:{trigger:".development-path",pin:!0,scrub:1,start:"top top",onEnter:r=>{t=r},end:()=>"+="+o.offsetWidth}}),document.querySelector("#development-path-prev").addEventListener("click",r=>{e("prev")}),document.querySelector("#development-path-next").addEventListener("click",r=>{e("next")});const e=r=>{if(!t)return;const d=(t.end-t.start)/(i.length-1),p=i.map((a,u)=>t.start+d*u);let s;r==="next"?s=p.findIndex(a=>a>window.scrollY):s=p.findIndex(a=>a>window.scrollY-2),console.log(s),r==="prev"&&(s=s-1),s!==-1&&gsap.to(window,{scrollTo:`${p[s]+1}`,duration:.5})}},f=()=>{$(".life__right").mousemove(function(t){setTimeout(i.bind(null,t),200)});function i(t){o(t,".life__img-1",-100),o(t,".life__img-2",-70),o(t,".life__img-3",-50),o(t,".life__img-4",-30)}function o(t,l,n){var e=$(".life__right"),r=t.pageX-e.offset().left,d=t.pageY-e.offset().top;TweenMax.to(l,1,{x:(r-e.width()/2)/e.width()*n,y:(d-e.height()/2)/e.height()*n,ease:Power2.easeOut})}},m=()=>$("body#page-main").length>0,h=()=>{if($("body#page-recruitment").length===0)return;const i=$(".banner__jobs span");let o=0;const t=setInterval(()=>{if(o===i.length)return clearInterval(t);i.removeClass("active"),o++,console.log(i[o]),$(`.banner__jobs span:nth-child(${o})`).addClass("active")},2e3);new Swiper(".swiper",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0}})},v=()=>{if($("body#page-job-detail").length===0)return;const i=()=>{const l=document.querySelector("footer").getBoundingClientRect();return Math.min(l.bottom,window.innerHeight)-Math.max(l.top,0)+50},o=()=>{$(".job-detail__content").css("padding-top",$(".job-detail__title").outerHeight())};$(".modal__close").on("click",()=>{$("#recruitment-modal").toggleClass("hidden")}),$("#open-send-cv-form").on("click",()=>{$("#recruitment-modal").removeClass("hidden")}),c()&&setTimeout(()=>{o()},500),$(window).bind("scroll",function(){c()?(window.scrollY>10?$(".job-detail").addClass("simple"):$(".job-detail").removeClass("simple"),setTimeout(()=>{o()},500)):i()>0?$(".job-detail__title").css("top",-i()+"px"):$(".job-detail__title").css("top",0)})},w=()=>{m()&&(c()?(new Swiper(".quality",{loop:!0,slidesPerView:"auto",centeredSlides:!0,spaceBetween:16,navigation:{}}),new Swiper(".development-path",{slidesPerView:"auto",navigation:{nextEl:"#development-path-next",prevEl:"#development-path-prev"}})):(g(),f()))},c=()=>$(window).width()<=768;
