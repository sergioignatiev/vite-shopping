import{h as f,o as c,a as d,F as y,d as w,w as _,i as m,j as k,b as e,k as b,l as I,m as C,u as h,c as g,t as n,n as v}from"./index-DzYI6x4d.js";const $={class:"flex 2xl:flex-col lg:flex-row md:flex-col pl-3"},R={class:"bg-green-400 absolute p-3 rounded-br-lg"},S=["src","alt"],V={__name:"TheSimilarItems",props:["similarItems"],setup(x){const o=f();function i(a,l){return a.id==l}return(a,l)=>{const u=C("RouterLink");return c(),d("div",$,[(c(!0),d(y,null,w(x.similarItems,t=>(c(),d("p",{key:t.id,class:"relative mt-2 shadow-lg w-[200px]"},[_(e("div",R,"Смотрите Сейчас",512),[[m,i(t,k(o).params.id)]]),b(u,{to:{name:"Id",params:{id:t.id}}},{default:I(()=>[e("img",{src:t.image,alt:t.title},null,8,S)]),_:2},1032,["to"])]))),128))])}}},B={class:"grid grid-cols-3 bg-slate-200 p-1 min-h-[100vh]"},L={class:"flex col-span-2 py-8 bg-slate-500"},N=["src","alt"],P={class:"sm:p-3 w-50%"},j={class:"md:text-[25px] text-[19px] font-extrabold capitalize"},A={class:"lg:text-[25px] text-[15px] py-2 text-slate-600"},D={class:"font-bold py-2"},F={class:"text-red-500 text-[30px]"},T={class:"font-bold py-2"},z={class:"text-red-500 text-[30px]"},E=e("p",null,"Country of origin: China",-1),q=e("div",{class:"rating block"},"Rating",-1),G={class:"bg-green-500 text-white px-6 py-2 rounded-lg"},H={class:""},K={__name:"ParamsView",setup(x){const o=h().bascet,i=h().store,a=f(),l=g(()=>i.filter(s=>s.category==a.params.category));function u(s,p,r){o.counter+=s,o.goods.push(r),r.ordered=!0,r.visibility=!0}const t=g(()=>i.find(s=>s.id==a.params.id));return(s,p)=>(c(),d("div",B,[e("div",L,[e("img",{src:t.value.image,alt:t.value.title,class:"object-contain md:sticky md:top-2 max-h-[80vh] w-50% px-10"},null,8,N),e("div",P,[e("h2",j,n(t.value.title),1),e("p",A,n(t.value.description),1),e("p",D,[v("Price:"),e("span",F,"$"+n(t.value.price),1)]),e("p",T,[v("Price:"),e("span",z,n(t.value.price*87)+"Руб",1)]),E,q,_(e("button",{onClick:p[0]||(p[0]=r=>u(t.value.price,t.value.title,t.value)),class:"bg-blue-500 text-white px-6 py-2 rounded-lg"},"Add",512),[[m,!t.value.ordered]]),_(e("button",G,"Added",512),[[m,t.value.ordered]])])]),e("div",H,[b(V,{similarItems:l.value},null,8,["similarItems"])])]))}};export{K as default};
