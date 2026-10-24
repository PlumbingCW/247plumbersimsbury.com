(function(){
  document.documentElement.classList.remove("no-js");
  var t=document.getElementById("mob-toggle"),d=document.getElementById("mob-drawer"),o=document.getElementById("mob-overlay"),c=document.getElementById("drawer-close");
  if(t&&d&&o){
    var open=function(){d.removeAttribute("hidden");o.classList.add("visible");t.setAttribute("aria-expanded","true");t.setAttribute("aria-label","Close navigation menu");document.documentElement.style.overflow="hidden";};
    var close=function(){d.setAttribute("hidden","");o.classList.remove("visible");t.setAttribute("aria-expanded","false");t.setAttribute("aria-label","Open navigation menu");document.documentElement.style.overflow="";};
    t.addEventListener("click",function(){t.getAttribute("aria-expanded")==="true"?close():open();});
    if(c){c.addEventListener("click",close);}
    o.addEventListener("click",close);
    d.querySelectorAll("a").forEach(function(a){a.addEventListener("click",close);});
    document.addEventListener("keydown",function(e){if(e.key==="Escape"){close();}});
    window.matchMedia("(min-width:769px)").addEventListener("change",function(m){if(m.matches){close();}});
  }
  document.querySelectorAll(".faq-q").forEach(function(b){
    b.addEventListener("click",function(){
      var a=document.getElementById(b.getAttribute("aria-controls"));
      var isOpen=b.getAttribute("aria-expanded")==="true";
      b.setAttribute("aria-expanded",isOpen?"false":"true");
      if(a){a.style.maxHeight=isOpen?"0px":a.scrollHeight+"px";}
    });
  });
  window.addEventListener("resize",function(){
    document.querySelectorAll(".faq-q[aria-expanded='true']").forEach(function(b){
      var a=document.getElementById(b.getAttribute("aria-controls"));
      if(a){a.style.maxHeight=a.scrollHeight+"px";}
    });
  });
})();
