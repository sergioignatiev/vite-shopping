import{u as m,f as p,c as r,a as s,t as o,b as n,F as g,r as v,d as b,g as x,m as _,o as c,l as k}from"./index-gAQ4jOjO.js";const w={class:"flex p-3 m-3 shadow-lg"},C=["src","alt"],y={class:"text-[14px]"},B=["onClick"],$={__name:"ClientView",setup(S){const t=m().bascet,d=p([1,2,3,4,5]);d.value.splice(1,1);const f=d.value.indexOf(1),a=p(null);function h(l,i){l.visibility=!1,i.counter-=l.price,l.ordered=!1;const e=k(()=>t.goods.find(u=>u.id==l.id));a.value=t.goods.indexOf(e.value),t.goods.splice(a.value,1)}return(l,i)=>(c(),r(g,null,[s("h1",null,"Сумма :"+o(Math.round(n(t).counter))+"$",1),s("h1",null,"Сумма :"+o(Math.round(n(t).counter*87))+"Руб",1),(c(!0),r(g,null,v(n(t).goods,e=>(c(),r("div",{key:e.id},[x(s("div",w,[s("img",{src:e.image,alt:e.title,class:"w-[50px]"},null,8,C),s("p",y,o(e.id)+" "+o(e.description),1),s("p",{class:"p-3 bg-red-700 text-white",onClick:u=>h(e,n(t))},"Удалить к хуям"+o(e.price),9,B)],512),[[_,e.visibility]])]))),128)),s("h1",{onClick:i[0]||(i[0]=e=>n(t).goods.splice(0,1))},[b(o(n(t).goods.length)+":"+o(n(f))+" !",1),x(s("span",{class:"text-[red] text-[37px]"},"!"+o(a.value+1),513),[[_,a.value]])])],64))}};export{$ as default};
