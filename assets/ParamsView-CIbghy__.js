import{u as l,j as r,k as i,c as n,d as e,t as s,l as u,o as p}from"./index-CgeTaoov.js";const d={class:"flex p-6"},_=["src","alt"],m={class:"p-3"},h={class:"text-[25px] font-extrabold capitalize"},x=e("label",{for:"order"},[u(" Заказать "),e("input",{type:"checkbox"})],-1),b={__name:"ParamsView",setup(v){const o=l().store,c=r(),t=i(()=>o.find(a=>a.id==c.params.id));return(a,f)=>(p(),n("div",d,[e("img",{src:t.value.image,alt:t.value.title,class:"w-[30%] px-10 shadow-2xl hover:shadow-black"},null,8,_),e("div",m,[e("h2",h,s(t.value.category),1),e("p",null,s(t.value.description),1),e("p",null,s(t.value.price)+" $",1),e("p",null,s(t.value.price*89)+"Руб",1),x])]))}};export{b as default};
