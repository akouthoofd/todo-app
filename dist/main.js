(()=>{"use strict";Math.pow(10,8);var e=36e5;function t(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function a(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function n(e,n){var s;t(1,arguments);var l=a(null!==(s=null==n?void 0:n.additionalDigits)&&void 0!==s?s:2);if(2!==l&&1!==l&&0!==l)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var r,i=o(e);if(i.date){var m=c(i.date,l);r=d(m.restDateString,m.year)}if(!r||isNaN(r.getTime()))return new Date(NaN);var p,k=r.getTime(),T=0;if(i.time&&(T=u(i.time),isNaN(T)))return new Date(NaN);if(!i.timezone){var h=new Date(k+T),f=new Date(0);return f.setFullYear(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()),f.setHours(h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds()),f}return p=g(i.timezone),isNaN(p)?new Date(NaN):new Date(k+T+p)}var s={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},l=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,r=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,i=/^([+-])(\d{2})(?::?(\d{2}))?$/;function o(e){var t,a={},n=e.split(s.dateTimeDelimiter);if(n.length>2)return a;if(/:/.test(n[0])?t=n[0]:(a.date=n[0],t=n[1],s.timeZoneDelimiter.test(a.date)&&(a.date=e.split(s.timeZoneDelimiter)[0],t=e.substr(a.date.length,e.length))),t){var l=s.timezone.exec(t);l?(a.time=t.replace(l[1],""),a.timezone=l[1]):a.time=t}return a}function c(e,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),n=e.match(a);if(!n)return{year:NaN,restDateString:""};var s=n[1]?parseInt(n[1]):null,l=n[2]?parseInt(n[2]):null;return{year:null===l?s:100*l,restDateString:e.slice((n[1]||n[2]).length)}}function d(e,t){if(null===t)return new Date(NaN);var a=e.match(l);if(!a)return new Date(NaN);var n=!!a[4],s=m(a[1]),r=m(a[2])-1,i=m(a[3]),o=m(a[4]),c=m(a[5])-1;if(n)return function(e,t,a){return t>=1&&t<=53&&a>=0&&a<=6}(0,o,c)?function(e,t,a){var n=new Date(0);n.setUTCFullYear(e,0,4);var s=7*(t-1)+a+1-(n.getUTCDay()||7);return n.setUTCDate(n.getUTCDate()+s),n}(t,o,c):new Date(NaN);var d=new Date(0);return function(e,t,a){return t>=0&&t<=11&&a>=1&&a<=(k[t]||(T(e)?29:28))}(t,r,i)&&function(e,t){return t>=1&&t<=(T(e)?366:365)}(t,s)?(d.setUTCFullYear(t,r,Math.max(s,i)),d):new Date(NaN)}function m(e){return e?parseInt(e):1}function u(t){var a=t.match(r);if(!a)return NaN;var n=p(a[1]),s=p(a[2]),l=p(a[3]);return function(e,t,a){return 24===e?0===t&&0===a:a>=0&&a<60&&t>=0&&t<60&&e>=0&&e<25}(n,s,l)?n*e+6e4*s+1e3*l:NaN}function p(e){return e&&parseFloat(e.replace(",","."))||0}function g(t){if("Z"===t)return 0;var a=t.match(i);if(!a)return 0;var n="+"===a[1]?-1:1,s=parseInt(a[2]),l=a[3]&&parseInt(a[3])||0;return function(e,t){return t>=0&&t<=59}(0,l)?n*(s*e+6e4*l):NaN}var k=[31,null,31,30,31,30,31,31,30,31,30,31];function T(e){return e%400==0||e%4==0&&e%100!=0}const h={allTasks:{tasks:[],customProjects:[]}},f=(()=>{const e=e=>{const t=document.getElementById("main"),a=document.createElement("div");a.classList.add("divCard"),a.setAttribute("data-index",e.index),"none"===e.strike?a.style.textDecorationLine="none":a.style.textDecorationLine="line-through",a.innerText=`${e.title}\n        Note: ${e.notes}\n        Due by ${e.dueDate}\n        ${e.priority} priority`;let n=document.createElement("img");n.classList.add("trash"),n.src="imgs/trash.svg",a.appendChild(n),y.createTrashEventHandler(n),n=document.createElement("img"),n.classList.add("check"),n.src="imgs/check.svg",a.appendChild(n),y.createTextStrike(n),n=document.createElement("img"),n.classList.add("plus"),n.src="imgs/plus.svg",a.appendChild(n),y.createAddToProject(n),n=document.createElement("img"),n.classList.add("edit"),n.src="imgs/pencil.svg",a.appendChild(n),y.editTask(n),t.appendChild(a)},t=()=>{for(let t=0;t<h.allTasks.tasks.length;t++)e(h.allTasks.tasks[t])},a=()=>{document.querySelector(".projectList").style.visibility="hidden",document.getElementById("projectForm").reset()},s=e=>{const t=document.querySelector(".projectsDiv"),n=document.createElement("div");n.classList.add("project"),n.setAttribute("project-type",e.name),n.innerText=e.name;const s=document.createElement("img");s.classList.add("projectTrash"),s.src="imgs/trash.svg",n.append(s),s.addEventListener("click",(e=>r(e,s))),n.addEventListener("click",(()=>l(n))),t.appendChild(n),a()},l=a=>{const s=document.getElementById("main");for(;s.firstChild;)s.removeChild(s.firstChild);const l=document.getElementById("projectNameDisplay");l.innerText="";const r=a.getAttribute("project-type");if("allTasks"==r)l.innerText="All Tasks",t();else if("thisWeek"==r){l.innerText="This Week";const t=JSON.parse(localStorage.getItem("allTasks"));if(null==t);else for(let a=0;a<t.tasks.length;a++){const s=new Date,l=(n(t.tasks[a].dueDate).getTime()-s.getTime())/864e5;l<=7&&l>=-1&&e(t.tasks[a])}}else if("thisMonth"==r){l.innerText="This Month";const t=JSON.parse(localStorage.getItem("allTasks"));if(null==t);else for(let a=0;a<t.tasks.length;a++)(new Date).getMonth()==n(t.tasks[a].dueDate).getMonth()&&e(t.tasks[a])}else if("priorityLevel"===r){l.innerText="High Priority";const t=JSON.parse(localStorage.getItem("allTasks"));if(null==t.tasks);else for(let a=0;a<t.tasks.length;a++)"High"===t.tasks[a].priority&&e(t.tasks[a])}else{l.innerText=r;const t=JSON.parse(localStorage.getItem("allTasks"));for(let a=0;a<t.tasks.length;a++)t.tasks[a].list==r&&e(t.tasks[a])}},r=(e,a)=>{e.stopImmediatePropagation();const n=a.parentElement.getAttribute("project-type"),s=h.allTasks.customProjects;document.getElementById("projectNameDisplay").innerText="All Tasks",a.parentElement.remove();const l=document.getElementById("main");for(;l.firstChild;)l.removeChild(l.firstChild);for(let e=0;e<s.length;e++)s[e].name==n&&s.splice(e,1);const r=h.allTasks.tasks;for(let e=0;e<r.length;e++)r[e].list==n&&r.splice(e,1),y.updateTaskIndex();JSON.parse(localStorage.getItem("allTasks")),localStorage.removeItem("allTasks"),localStorage.setItem("allTasks",JSON.stringify(h.allTasks)),t()};return{createTask:()=>{document.querySelector(".formList").style.visibility="visible"},submitTask:()=>{document.querySelector(".formList").style.visibility="hidden",y.storeTaskForm(),document.getElementById("form").reset()},cancelTask:()=>{document.querySelector(".formList").style.visibility="hidden",document.getElementById("form").reset()},displayTask:e,displayDefaultList:t,displayStoredProjects:()=>{for(let e=0;e<h.allTasks.customProjects.length;e++)s(h.allTasks.customProjects[e])},addNewProject:()=>{document.querySelector(".projectList").style.visibility="visible"},cancelProjectCreation:a,addProjectToList:s,displaySelectedProject:l,deleteProject:r}})(),y=(()=>{const e=()=>{const e=h.allTasks.tasks;for(let t=0;t<e.length;t++)e[t].index=t;localStorage.setItem("allTasks",JSON.stringify(h.allTasks))},t=()=>{const e=document.querySelectorAll(".divCard");Array.from(e).forEach((function(t){t.setAttribute("data-index",Array.from(e).indexOf(t))}))},a=e=>{e.onclick=t=>{const a=e.parentElement;a.parentElement.removeChild(a)}};return{storeTaskForm:()=>{const e=h.allTasks.tasks.length,t={title:document.getElementById("title").value,notes:document.getElementById("notes").value,dueDate:document.getElementById("dueDate").value,priority:document.getElementById("priority").value,strike:"none",list:"none",index:e};(e=>{h.allTasks.tasks.push(e),JSON.parse(localStorage.getItem("allTasks")),localStorage.setItem("allTasks",JSON.stringify(h.allTasks))})(t),f.displayTask(t)},saveNewProject:()=>{const e={name:document.getElementById("projectName").value};(e=>{JSON.parse(localStorage.getItem("allTasks")),h.allTasks.customProjects.push(e),localStorage.setItem("allTasks",JSON.stringify(h.allTasks))})(e),f.addProjectToList(e)},createTrashEventHandler:a=>{a.onclick=n=>{const s=a.parentElement.getAttribute("data-index");document.querySelector("#main").removeChild(a.parentElement),h.allTasks.tasks.splice(s,1),e(),t()}},createTextStrike:e=>{e.onclick=t=>{const a=e.parentElement,n=e.parentElement.getAttribute("data-index"),s=h.allTasks.tasks[n];"none"==a.style.textDecorationLine?(a.style.textDecorationLine="line-through",s.strike="strike"):(a.style.textDecorationLine="none",s.strike="none"),localStorage.setItem("allTasks",JSON.stringify(h.allTasks))}},editTask:a=>{a.onclick=n=>{const s=a.parentElement.getAttribute("data-index");f.createTask(),document.getElementById("title").value=h.allTasks.tasks[s].title,document.getElementById("notes").value=h.allTasks.tasks[s].notes,document.getElementById("dueDate").value=h.allTasks.tasks[s].dueDate,document.getElementById("priority").value=h.allTasks.tasks[s].priority,document.querySelector("#main").removeChild(a.parentElement),h.allTasks.tasks.splice(s,1),e(),t()}},updateTaskIndex:e,createAddToProject:e=>{e.onclick=t=>{for(let t=0;t<e.parentElement.children.length;t++)if(e.parentElement.children[t].classList.contains("projectAddPopup"))return;let n=JSON.parse(localStorage.getItem("allTasks"));if(n=n.customProjects,0!==n.length){const t=document.createElement("div");t.classList.add("projectAddPopup"),t.innerText="Select a project to add this task to:\n\n                ",e.parentElement.appendChild(t);const s=document.createElement("select");for(let e=0;e<n.length;e++){const t=document.createElement("option");t.value=n[e].name,t.text=n[e].name,s.add(t)}t.appendChild(s);const l=document.createElement("button");l.classList.add(".addTaskToProjectBtn"),l.innerText="Submit",t.appendChild(l),((e,t,a)=>{t.onclick=n=>{const s=e.parentElement.getAttribute("data-index"),l=h.allTasks.tasks[s],r=a.value,i=h.allTasks.customProjects;for(let e=0;e<i.length;e++)i[e].name==r&&(l.list=r),localStorage.setItem("allTasks",JSON.stringify(h.allTasks));const o=t.parentElement;o.parentElement.removeChild(o)}})(e,l,s);const r=document.createElement("button");return r.classList.add(".cancelTaskToProjectBtn"),r.innerText="Cancel",t.appendChild(r),a(r),s}{const t=document.createElement("div");t.classList.add("projectAddPopup"),t.innerText="Create a Project first\n                \n                ",e.parentElement.appendChild(t);const n=document.createElement("button");n.classList.add(".cancelTaskToProjectBtn"),n.innerText="Cancel",t.appendChild(n),a(n)}}},pageLoad:()=>{const e=JSON.parse(localStorage.getItem("allTasks"));null!=e&&((e=>{if(null!=(e=e.tasks)){for(let t=0;t<e.length;t++)h.allTasks.tasks.push(e[t]);f.displayDefaultList()}})(e),(e=>{const t=e.customProjects;if(null!=t){for(let e=0;e<t.length;e++)h.allTasks.customProjects.push(t[e]);f.displayStoredProjects()}})(e),localStorage.removeItem("allTasks"),localStorage.setItem("allTasks",JSON.stringify(h.allTasks)))}}})();y.pageLoad(),document.querySelector(".createTask").addEventListener("click",f.createTask),document.querySelector(".submitTaskBtn").addEventListener("click",f.submitTask),document.querySelector(".cancelTaskBtn").addEventListener("click",f.cancelTask);let v=document.querySelectorAll(".project");for(let e=0;e<v.length;e++)v[e].addEventListener("mouseup",(()=>{f.displaySelectedProject(v[e])}));let S=document.querySelectorAll(".projectTrash");for(let e=0;e<S.length;e++)S[e].addEventListener("click",(t=>{f.deleteProject(t,S[e])}));document.querySelector(".newProject").addEventListener("click",f.addNewProject),document.querySelector(".cancel").addEventListener("click",f.cancelProjectCreation),document.querySelector(".save").addEventListener("click",y.saveNewProject)})();