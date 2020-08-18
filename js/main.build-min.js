!function(e){var t={};function i(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t,i){"use strict";function n(e,t){let i="";if(-1!==t.indexOf(",")){const i="./media/images/"+t.slice(0,t.indexOf(",")),n="./media/images/"+t.slice(t.indexOf(",")+1);for(let t=0;t<e.length;t++)if("SOURCE"===e[t].nodeName){let s=e[t].getAttribute("type").split("/")[1],r="jpeg"===s?"jpg":s,o="jpeg"===s?"jpg":s+" 2x";e[t].setAttribute("srcset",`${i}.${r}, ${n}.${o}`)}else{const n=e[t].dataset&&e[t].dataset.type?e[t].dataset.type:"jpg";e[t].src=i+"."+n}}else{i="./media/images/"+t+".";for(let t=0;t<e.length;t++)if("SOURCE"===e[t].nodeName){let n=e[t].getAttribute("type").split("/")[1];n="jpeg"===n?"jpg":n,e[t].setAttribute("srcset",i+n)}else{const n=e[t].dataset&&e[t].dataset.type?e[t].dataset.type:"jpg";e[t].src=i+n}}}i.d(t,"a",function(){return n})},function(e,t,i){e.exports=i(2)},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(3),s=(i.n(n),i(4)),r=(i.n(s),i(5)),o=(i.n(r),i(6)),c=(i.n(o),i(7)),a=(i.n(c),i(0),i(8),i(9),i(10));i.n(a)},function(e,t){jQuery(window).on("load",function(){var e=jQuery(".anchor"),t=jQuery("html,body");e.on("click",function(e){e.preventDefault();const i=jQuery(".page-header");i.removeClass("nav-active");let n=i.outerHeight();t.animate({scrollTop:jQuery(jQuery(this).attr("href")).offset().top-n},1e3)})})},function(e,t){jQuery(function(){jQuery(".form-validation").formValidation({errorClass:"validation-error",errorFormClass:"form-error",addClassToParent:".input-container",skipFields:".skip-field",successClass:"input-success",successSendClass:"form-sent"})}),function(e){"use strict";var t=function(){var t=function(e,t){this.$field=e,this.$fields=t};t.prototype={reg:{email:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,number:"^[0-9]+$"},checkField:function(){return{state:this.run(),$fields:this.$field.add(this.additionalFields)}},run:function(){var t;switch(this.$field.get(0).tagName.toUpperCase()){case"SELECT":t="select";break;case"TEXTAREA":t="text";break;default:t=this.$field.data("type")||this.$field.attr("type")}var i="check_"+t,n=!0;return e.isFunction(this[i])&&(n=this[i]())&&this.$field.data("confirm")&&(n=this.check_confirm()),n},check_email:function(){var e=this.getValue(),t=this.$field.data("required")||e.length;return!(t&&!this.check_regexp(e,this.reg.email))&&(!!t||null)},check_number:function(){var e=this.getValue(),t=this.$field.data("required"),i=this.check_regexp(e,this.reg.number),n=t||e.length;if(n&&!i)return!1;var s=this.$field.data("min"),r=this.$field.data("max");return e=+e,!(s&&(e<s||!i)||r&&(e>r||!i))&&(!!(n||s||r)||null)},check_password:function(){return this.check_text()},check_text:function(){var e=this.getValue(),t=this.$field.data("required");if(this.$field.data("required")&&!e.length)return!1;var i=+this.$field.data("min"),n=+this.$field.data("max");if(i&&e.length<i||n&&e.length>n)return!1;var s=this.$field.data("regexp");return!(s&&!this.check_regexp(e,s))&&(!!(t||i||n||s)||null)},check_confirm:function(){for(var e=this.getValue(),t=this.$fields.filter('[data-confirm="'+this.$field.data("confirm")+'"]'),i=!0,n=t.length-1;n>=0;n--)if(t.eq(n).val()!==e||!e.length){i=!1;break}return this.additionalFields=t,i},check_select:function(){var e=this.$field.data("required");return(!e||0!==this.$field.get(0).selectedIndex)&&(!!e||null)},check_radio:function(){var e=this.$fields.filter('[name="'+this.$field.attr("name")+'"]'),t=this.$field.data("required");return!(t&&!e.filter(":checked").length)&&(this.additionalFields=e,!!t||null)},check_checkbox:function(){var e=this.$field.data("required");return!(e&&!this.$field.prop("checked"))&&(!!e||null)},check_at_least_one:function(){var e=this.$fields.filter('[data-name="'+this.$field.data("name")+'"]');return!!e.filter(":checked").length&&(this.additionalFields=e,!0)},check_regexp:function(e,t){return new RegExp(t).test(e)},getValue:function(){return this.$field.data("trim")&&this.$field.val(e.trim(this.$field.val())),this.$field.val()}};var i=function(t,i){this.$form=e(t).attr("novalidate","novalidate"),this.options=i};return i.prototype={buildSelector:function(e){return":input:not("+this.options.skipDefaultFields+(this.options.skipFields?","+this.options.skipFields:"")+")"},init:function(){this.fieldsSelector=this.buildSelector(":input"),this.$form.on("submit",this.submitHandler.bind(this)).on("keyup blur",this.fieldsSelector,this.changeHandler.bind(this)).on("change",this.buildSelector("select"),this.changeHandler.bind(this)).on("focus",this.fieldsSelector,this.focusHandler.bind(this))},submitHandler:function(i){var n=this,s=this.getFormFields();return this.getClassTarget(s).removeClass(this.options.errorClass+" "+this.options.successClass),this.setFormState(!0),s.each(function(i,r){var o=e(r);n.getClassTarget(o).hasClass(n.options.errorClass)||n.setState(new t(o,s).checkField())}),this.checkSuccess(s,i)},checkSuccess:function(e,t){var i=0===this.getClassTarget(e||this.getFormFields()).filter("."+this.options.errorClass).length;return t&&i&&this.options.successSendClass&&(t.preventDefault(),grecaptcha.execute()),this.setFormState(i),i},changeHandler:function(i){var n=e(i.target);n.data("interactive")&&this.setState(new t(n,this.getFormFields()).checkField()),this.checkSuccess()},focusHandler:function(t){var i=e(t.target);this.getClassTarget(i).removeClass(this.options.errorClass+" "+this.options.successClass),this.checkSuccess()},setState:function(e){this.getClassTarget(e.$fields).toggleClass(this.options.errorClass,null!==e.state&&!e.state).toggleClass(this.options.successClass,null!==e.state&&this.options.successClass&&!!e.state)},setFormState:function(e){this.options.errorFormClass&&this.$form.toggleClass(this.options.errorFormClass,!e)},getClassTarget:function(e){return this.options.addClassToParent?e.closest(this.options.addClassToParent):e},getFormFields:function(){return this.$form.find(this.fieldsSelector)}},i}();e(".form-validation").each(function(){let t=e(this);e(".form-message").find(".close").click(function(){t.removeClass("form-sent"),t.trigger("reset")})}),e.fn.formValidation=function(i){return i=e.extend({},{errorClass:"input-error",successClass:"",errorFormClass:"",addClassToParent:"",skipDefaultFields:":button, :submit, :image, :hidden, :reset",skipFields:"",successSendClass:""},i),this.each(function(){new t(this,i).init()})}}(jQuery)},function(e,t){setTimeout(function(){jQuery(".page-header").classOnScroll({fixedClass:"fixed",heightRatio:1}),jQuery(".fixed-panel").classOnScroll({fixedClass:"fixed",addBlocks:".hero-section",remBlocks:".page-header",heightRatio:-60,stopBlock:".sidebar-stop"})},1800),function(e){"use strict";var t=jQuery(window);function i(t){this.options=e.extend({holder:null,fixedClass:"fixed",compareBlock:"div",blockHeight:!1,blockTop:!1,heightRatio:!1,stopBlock:!1},t),this.init()}i.prototype={init:function(){this.options.holder&&(this.findElements(),this.attachEvents())},findElements:function(){this.holder=jQuery(this.options.holder),this.compareBlock=jQuery(this.options.compareBlock)},attachEvents:function(){var e=this;e.onScroll(),t.bind("scroll resize orientationchange",function(){e.onScroll()})},onScroll:function(){var i=this;if(this.options.blockHeight&&(this.scrollHeight=this.compareBlock.innerHeight()),this.options.blockTop&&(this.scrollHeight=this.compareBlock.offset().top),this.options.heightRatio&&(this.scrollHeight=this.options.heightRatio),"string"==typeof this.options.addBlocks&&e(this.options.addBlocks).each(function(){i.scrollHeight+=jQuery(this).outerHeight()}),"string"==typeof this.options.remBlocks&&e(this.options.remBlocks).each(function(){i.scrollHeight-=jQuery(this).outerHeight()}),this.options.stopBlock&&e(this.options.stopBlock).length>0){e(this.options.stopBlock).offset().top-t.scrollTop()+i.holder.outerHeight()<=t.scrollTop()-e(i.holder).position().top?e(i.holder).addClass("hide"):e(i.holder).removeClass("hide")}i.scrollTop=t.scrollTop(),i.scrollTop>i.scrollHeight?i.holder.addClass(i.options.fixedClass):i.holder.removeClass(i.options.fixedClass)},makeCallback:function(e){if("function"==typeof this.options[e]){var t=Array.prototype.slice.call(arguments);t.shift(),this.options[e].apply(this,t)}}},e.fn.classOnScroll=function(t){return this.each(function(){var n=new i(e.extend({},t,{holder:this}));e.data(this,"ClassOnScroll",n)})},window.ClassOnScroll=i}(jQuery)},function(e,t){jQuery(function(){i()});var i=function(){"use strict";var e="bfred-it:object-fit-images",t=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,i="undefined"==typeof Image?{style:{"object-position":1}}:new Image,n="object-fit"in i.style,s="object-position"in i.style,r="background-size"in i.style,o="string"==typeof i.currentSrc,c=i.getAttribute,a=i.setAttribute,l=!1;function d(e,t,i){var n="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+(t||1)+"' height='"+(i||0)+"'%3E%3C/svg%3E";c.call(e,"src")!==n&&a.call(e,"src",n)}function u(e,t){e.naturalWidth?t(e):setTimeout(u,100,e,t)}function h(i){var s=function(e){for(var i,n=getComputedStyle(e).fontFamily,s={};null!==(i=t.exec(n));)s[i[1]]=i[2];return s}(i),r=i[e];if(s["object-fit"]=s["object-fit"]||"fill",!r.img){if("fill"===s["object-fit"])return;if(!r.skipTest&&n&&!s["object-position"])return}if(!r.img){r.img=new Image(i.width,i.height),r.img.srcset=c.call(i,"data-ofi-srcset")||i.srcset,r.img.src=c.call(i,"data-ofi-src")||i.src,a.call(i,"data-ofi-src",i.src),i.srcset&&a.call(i,"data-ofi-srcset",i.srcset),d(i,i.naturalWidth||i.width,i.naturalHeight||i.height),i.srcset&&(i.srcset="");try{!function(t){var i={get:function(i){return t[e].img[i||"src"]},set:function(i,n){return t[e].img[n||"src"]=i,a.call(t,"data-ofi-"+n,i),h(t),i}};Object.defineProperty(t,"src",i),Object.defineProperty(t,"currentSrc",{get:function(){return i.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return i.get("srcset")},set:function(e){return i.set(e,"srcset")}})}(i)}catch(e){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}!function(e){if(e.srcset&&!o&&window.picturefill){var t=window.picturefill._;e[t.ns]&&e[t.ns].evaled||t.fillImg(e,{reselect:!0}),e[t.ns].curSrc||(e[t.ns].supported=!1,t.fillImg(e,{reselect:!0})),e.currentSrc=e[t.ns].curSrc||e.src}}(r.img),i.style.backgroundImage='url("'+(r.img.currentSrc||r.img.src).replace(/"/g,'\\"')+'")',i.style.backgroundPosition=s["object-position"]||"center",i.style.backgroundRepeat="no-repeat",i.style.backgroundOrigin="content-box",/scale-down/.test(s["object-fit"])?u(r.img,function(){r.img.naturalWidth>i.width||r.img.naturalHeight>i.height?i.style.backgroundSize="contain":i.style.backgroundSize="auto"}):i.style.backgroundSize=s["object-fit"].replace("none","auto").replace("fill","100% 100%"),u(r.img,function(e){d(i,e.naturalWidth,e.naturalHeight)})}function f(t,i){var n=!l&&!t;if(i=i||{},t=t||"img",s&&!i.skipTest||!r)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var o=0;o<t.length;o++)t[o][e]=t[o][e]||{skipTest:i.skipTest},h(t[o]);n&&(document.body.addEventListener("load",function(e){"IMG"===e.target.tagName&&f(e.target,{skipTest:i.skipTest})},!0),l=!0,t="img"),i.watchMQ&&window.addEventListener("resize",f.bind(null,t,{skipTest:i.skipTest}))}return f.supportsObjectFit=n,f.supportsObjectPosition=s,function(){function t(t,i){return t[e]&&t[e].img&&("src"===i||"srcset"===i)?t[e].img:t}s||(HTMLImageElement.prototype.getAttribute=function(e){return c.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return a.call(t(this,e),e,String(i))})}(),f}()},function(e,t){},function(e,t,i){"use strict";var n=i(0);!function(){let e,t=!0;function i(t,i=500,n=["animation"]){return new Promise(s=>{!function(e,t){t.forEach(t=>e.classList.add(t))}(t,n),e||(e=setTimeout(()=>{!function(e,t){t.forEach(t=>e.classList.remove(t))}(t,n),e=null,s()},i))})}function s(e,s,r,o){t&&(t=!1,s.next=r[++s.index]||r[s.index=0],s.nextContainer.innerHTML=s.next.innerHTML,s.nextImage&&Object(n.a)(s.nextImage.children,s.next.dataset.imageSrc),s.counter.querySelector(".current").innerText=s.index+1,i(e,o,["animation","slide-to-right"]).then(()=>{s.current=s.next,s.currContainer.innerHTML=s.next.innerHTML,s.currImage&&Object(n.a)(s.currImage.children,s.next.dataset.imageSrc),t=!0}))}function r(e,s,r,o){t&&(t=!1,s.next=r[--s.index]||r[s.index=s.length-1],s.nextContainer.innerHTML=s.next.innerHTML,s.nextImage&&Object(n.a)(s.nextImage.children,s.next.dataset.imageSrc),s.counter.querySelector(".current").innerText=s.index+1,i(e,o,["animation","slide-to-left"]).then(()=>{s.current=s.next,s.currContainer.innerHTML=s.nextContainer.innerHTML,s.currImage&&Object(n.a)(s.currImage.children,s.next.dataset.imageSrc),t=!0}))}const o=document.getElementById("slider1");if(o){const e=document.querySelectorAll("#slider1 .slide-content-inner:not(#slider1currContainer)"),t={index:0,length:e.length,current:e[0],next:e[1],prev:e[e.length-1],currContainer:document.getElementById("slider1currContainer"),nextContainer:document.getElementById("slider1nextContainer"),currImage:document.getElementById("slider1currImage"),nextImage:document.getElementById("slider1nextImage"),counter:document.getElementById("slider1counter")},i=document.getElementById("slider1nextBtn"),n=document.getElementById("slider1prevBtn");i.addEventListener("click",s.bind(this,o,t,e,500)),n.addEventListener("click",r.bind(this,o,t,e,500))}const c=document.getElementById("slider2");if(c){const e=document.querySelectorAll("#slider2 .testimonial-card.temp-card"),t={index:0,length:e.length,current:e[0],next:e[1],prev:e[e.length-1],currContainer:document.getElementById("slider2currContainer"),nextContainer:document.getElementById("slider2nextContainer"),counter:document.getElementById("slider2counter")},i=document.getElementById("slider2nextBtn"),n=document.getElementById("slider2prevBtn");i.addEventListener("click",s.bind(this,c,t,e,500)),n.addEventListener("click",r.bind(this,c,t,e,500))}document.getElementById("burger").addEventListener("click",()=>{document.getElementById("header").classList.toggle("nav-active")}),setTimeout(function(){(new WOW).init()},1800)}()},function(e,t,i){"use strict";var n=i(0);setTimeout(function(){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var e=jQuery("#banner-content");e.removeClass(),e.addClass("banner-content")}else{jQuery("#video-container").html('\n        <video loop muted="true" autoplay class="video">\n          <source src="media/videos/video_DDT.webm" type="video/webm">\n          <source src="media/videos/video_DDT.mp4" type="video/mp4">\n        </video>\n        ')}},1800),setTimeout(function(){var e=[].slice.call(document.querySelectorAll("picture.lazy")),t=[].slice.call(document.querySelectorAll("picture.lazy-onload")),i=[].slice.call(document.querySelectorAll("img.lazy")),s=[].slice.call(document.querySelectorAll("img.lazy-onload")),r=[].slice.call(document.querySelectorAll(".bg-img.lazy"));if("IntersectionObserver"in window){let t=new IntersectionObserver(function(e,i){e.forEach(function(e){if(e.isIntersecting){let i=e.target;Object(n.a)(i.children,i.dataset.fileName),i.classList.remove("lazy"),t.unobserve(i)}})});e.forEach(function(e){t.observe(e)});let s=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){let t=e.target;t.src=t.dataset.src,t.srcset=t.dataset.src,t.classList.remove("lazy"),s.unobserve(t)}})});i.forEach(function(e){s.observe(e)});let o=new IntersectionObserver(function(e,t){e.forEach(function(e){if(e.isIntersecting){let t=e.target;t.style.backgroundImage="url('"+t.dataset.src+"')",t.classList.remove("lazy"),o.unobserve(t)}})});r.forEach(function(e){o.observe(e)})}else e.forEach(function(e){Object(n.a)(e.children,e.dataset.fileName)}),i.forEach(function(e){e.src=e.dataset.src}),r.forEach(function(e){e.style.backgroundImage="url('"+e.dataset.src+"')"});t.forEach(function(e){Object(n.a)(e.children,e.dataset.fileName)}),s.forEach(function(e){e.src=e.dataset.src})},1800)},function(e,t){$(document).ready(function(){const e=$("body");setTimeout(function(){e.addClass("page-loaded")},2e3)})}]);