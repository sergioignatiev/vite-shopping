import{o as t,c as s,r as l,e as d,w as p,b as i,R as u,g as _,m,a as c,F as g,t as h,k as f,u as w,l as x}from"./index-gAQ4jOjO.js";const v={class:"w-[300px] m-3 bg-slate-100 relative overflow-hidden"},y=["src","alt"],k={class:"bg-green-500 text-white absolute top-0 px-3 py-2"},b={__name:"CategoryUnits",props:["mapped"],setup(a){return(r,o)=>(t(!0),s(g,null,l(a.mapped,e=>(t(),s("div",v,[d(i(u),{to:{name:"Id",params:{id:e.id}}},{default:p(()=>[(t(),s("img",{class:"",src:e.image,alt:e.id,key:e.id},null,8,y)),c("p",null,h(e.title),1)]),_:2},1032,["to"]),_(c("div",k,"Added",512),[[m,e.ordered]])]))),256))}},C={class:"flex flex-wrap"},S={__name:"CategoryView",setup(a){const r=f(),o=w().store,e=x(()=>o.filter(n=>n.category==r.params.category));return(n,B)=>(t(),s("div",C,[d(b,{mapped:e.value},null,8,["mapped"])]))}};export{S as default};
