(this.webpackJsonpmemorygame=this.webpackJsonpmemorygame||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/1.60b3b204.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.b0553806.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.c662a35d.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.0187fb9e.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.49149044.jpg"},function(e,t,a){e.exports=a.p+"static/media/6.69ac1b94.jpg"},function(e,t,a){e.exports=a.p+"static/media/7.159719d5.jpg"},function(e,t,a){e.exports=a.p+"static/media/8.c6ff63c9.jpg"},function(e,t,a){e.exports=a.p+"static/media/unknown.5c546904.svg"},function(e,t,a){e.exports=a(22)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(5),o=a.n(s),r=(a(20),a(21),a(1)),i=a(2),u=a(3),l=a(6),m=a.n(l),d=a(7),f=a.n(d),b=a(8),p=a.n(b),j=a(9),O=a.n(j),v=a(10),x=a.n(v),E=a(11),g=a.n(E),h=a(12),N=a.n(h),y=a(13),k=a.n(y),w=a(14),S=a.n(w),C={fruit1:m.a,fruit2:f.a,fruit3:p.a,fruit4:O.a,fruit5:x.a,fruit6:g.a,fruit7:N.a,fruit8:k.a},T=function(e){var t=e.boxClass,a=e.alt,c=e.onClick,s=e.color;return(n.a.createElement("div",{className:"col-lg-3 col-md-3 col-sm-3 col-3 p-0"},n.a.createElement("div",{onClick:c||function(){},className:"thecard ".concat(t||"")},n.a.createElement("div",{className:"thefront",style:{background:"linear-gradient(to right bottom, ".concat(s.c1,", ").concat(s.c2,"), url(").concat(S.a,")")}}),n.a.createElement("div",{className:"theback"},n.a.createElement("img",{alt:a,src:C["fruit".concat(a)]})))))},A=function(e){var t=e.status,a=e.result,c=e.restartTheGame;return n.a.createElement("div",{className:"myModalBack"},n.a.createElement("div",{className:"myModal"},n.a.createElement("div",{className:"modal-content",style:{boxShadow:"0 0 20px 10px ".concat("success"===t?"green":"red")}},n.a.createElement("div",{className:"modal-header justify-content-center"},"success"===t?"CONGRATULATIONS!":"GAME OVER!"),n.a.createElement("div",{className:"modal-body d-flex justify-content-center"},"success"===t?"Your Score: ".concat(a,"! Lower is Better"):"You made too many moves!"),n.a.createElement("div",{className:"modal-footer justify-content-center"},n.a.createElement("button",{onClick:c,type:"button",className:"btn btn-".concat(t)},"Play again!")))))};var M=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],s=t[1],o=Object(c.useState)({steps:0,success:0}),l=Object(u.a)(o,2),m=l[0],d=l[1],f=Object(c.useState)({}),b=Object(u.a)(f,2),p=b[0],j=b[1],O=Object(c.useState)({name:!1,index:!1}),v=Object(u.a)(O,2),x=v[0],E=v[1],g=Object(c.useState)(!0),h=Object(u.a)(g,2),N=h[0],y=h[1],k=Object(c.useState)({show:!1,status:""}),w=Object(u.a)(k,2),S=w[0],C=w[1],M=function(){window.location.reload()},B=function(){for(var e="#",t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];return e+=77};return Object(c.useEffect)((function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.sort((function(){return Math.random()-.5}))}([1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8]);s(e)}),[]),n.a.createElement("div",{className:"App container d-flex flex-column justify-content-center align-items-center"},n.a.createElement("div",{className:"panel"},n.a.createElement("div",null,"Steps: ",m.steps),n.a.createElement("button",{onClick:M,type:"button",className:"btn btn-outline-dark"},"RESTART")),n.a.createElement("div",{className:"maincontainer d-flex"},n.a.createElement("div",{className:"row w-100 m-0"},a.map((function(e,t){return n.a.createElement(T,{key:"box-".concat(t),onClick:N&&function(){return function(e,t){x.name?e===x.name&&t!==x.index?(y(!1),d(Object(i.a)({},m,{steps:m.steps+1,success:m.success+1})),j(Object(i.a)({},p,Object(r.a)({},t,"rotate"))),E({name:!1,index:!1}),setTimeout((function(){var e;j(Object(i.a)({},p,(e={},Object(r.a)(e,t,"success"),Object(r.a)(e,x.index,"success"),e))),7===m.success?C({show:!0,status:"success"}):3===m.steps&&C({show:!0,status:"danger"}),y(!0)}),600)):t!==x.index&&(y(!1),d(Object(i.a)({},m,{steps:m.steps+1})),j(Object(i.a)({},p,Object(r.a)({},t,"rotate"))),E({name:!1,index:!1}),setTimeout((function(){var e;j(Object(i.a)({},p,(e={},Object(r.a)(e,t,""),Object(r.a)(e,x.index,""),e))),y(!0)}),600)):(E({name:e,index:t}),j(Object(i.a)({},p,Object(r.a)({},t,"rotate"))))}(e,t)},alt:e,boxClass:p[t],color:{c1:B(),c2:B()}})})))),S.show&&n.a.createElement(A,{status:S.status,result:m.steps,restartTheGame:M}))};o.a.render(n.a.createElement(M,null),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.85dfcdd4.chunk.js.map