import{i as v,o as c,a as d,F as w,d as y,w as u,j as p,b as e,k,l as b,m as I,n as $,u as h,c as g,t as n,q as f}from"./index-BU84LEko.js";const C={class:"flex flex-wrap items-center top-0 2xl:pl-8"},R={class:"bg-green-400 p-3 text-white w-fill"},S={class:"bg-blue-400 absolute p-3 rounded-br-lg"},V=["src","alt"],B={__name:"TheSimilarItems",props:["similarItems"],setup(x){const a=v();function i(o,r){return o.id==r}return(o,r)=>{const _=$("RouterLink");return c(),d("div",C,[(c(!0),d(w,null,y(x.similarItems,t=>(c(),d("p",{key:t.id,class:"relative m-2 shadow-lg w-[300px]"},[u(e("p",R,"В корзине",512),[[p,t.ordered]]),u(e("div",S,"Смотрите Сейчас",512),[[p,i(t,k(a).params.id)]]),b(_,{to:{name:"Id",params:{id:t.id}}},{default:I(()=>[e("img",{src:t.image,alt:t.title},null,8,V)]),_:2},1032,["to"])]))),128))])}}},L={class:"grid 2xl:grid-cols-4 md:p-3 p-1 min-h-[100vh]"},N={class:"flex 2xl:col-span-3 md:flex-row flex-col"},P=["src","alt"],j={class:"sm:p-3 w-50%"},A={class:"md:text-[25px] text-[19px] font-extrabold capitalize"},D={class:"lg:text-[25px] text-[15px] py-2 text-slate-600"},F={class:"font-bold py-2"},T={class:"text-red-500 text-[30px]"},q={class:"font-bold py-2"},z={class:"text-red-500 text-[30px]"},E=e("p",null,"Country of origin: China",-1),G=e("div",{class:"rating block"},"Rating",-1),H={class:"bg-green-500 text-white px-6 py-2 rounded-lg"},J={class:""},M={__name:"ParamsView",setup(x){const a=h().bascet,i=h().store,o=v(),r=g(()=>i.filter(s=>s.category==o.params.category));function _(s,m,l){a.counter+=s,a.goods.push(l),l.ordered=!0,l.visibility=!0}const t=g(()=>i.find(s=>s.id==o.params.id));return(s,m)=>(c(),d("div",L,[e("div",N,[e("img",{src:t.value.image,alt:t.value.title,class:"object-contain md:sticky md:top-2 max-h-[80vh] md:w-[50%] px-10"},null,8,P),e("div",j,[e("h2",A,n(t.value.title),1),e("p",D,n(t.value.description),1),e("p",F,[f("Price:"),e("span",T,"$"+n(t.value.price),1)]),e("p",q,[f("Price:"),e("span",z,n(t.value.price*87)+"Руб",1)]),E,G,u(e("button",{onClick:m[0]||(m[0]=l=>_(t.value.price,t.value.title,t.value)),class:"bg-blue-500 text-white px-6 py-2 rounded-lg"},"Add",512),[[p,!t.value.ordered]]),u(e("button",H,"Added",512),[[p,t.value.ordered]])])]),e("div",J,[b(B,{similarItems:r.value},null,8,["similarItems"])])]))}};export{M as default};
