import{o as s,c as a,r as i,m as l,n as p,b as u,R as _,w as m,l as h,a as t,F as f,t as d,i as g,u as x,j as v}from"./index-CbkoFGEf.js";const w={class:"w-[300px] m-3 shadow-lg relative overflow-hidden rounded-md"},y=["src","alt"],b={class:"p-2"},k={class:""},C={class:""},j={class:"bg-green-500 text-white absolute top-0 px-3 py-2 rounded-sm"},B={__name:"CategoryUnits",props:["mapped"],setup(o){return(r,c)=>(s(!0),a(f,null,i(o.mapped,e=>(s(),a("div",w,[l(u(_),{to:{name:"Id",params:{id:e.id,category:e.category}},class:"h-full flex flex-col justify-between"},{default:p(()=>[(s(),a("img",{class:"max-h-[80vh] object-contain",src:e.image,alt:e.id,key:e.id},null,8,y)),t("div",b,[t("p",k,d(e.title),1),t("div",C,"Price : "+d(e.price)+" $",1)])]),_:2},1032,["to"]),m(t("div",j,"Added",512),[[h,e.ordered]])]))),256))}},R={class:"flex flex-wrap"},$={__name:"CategoryView",setup(o){const r=g(),c=x().store,e=v(()=>c.filter(n=>n.category==r.params.category));return(n,S)=>(s(),a("div",R,[l(B,{mapped:e.value},null,8,["mapped"])]))}};export{$ as default};
