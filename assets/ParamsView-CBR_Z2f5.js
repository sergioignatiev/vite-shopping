import{u as i,l as _,m as h,c as m,a as t,t as a,f as n,h as r,n as d,o as v}from"./index-BOLJbknR.js";const b={class:"flex md:flex-row flex-col p-6 min-h-[100vh]"},f=["src","alt"],g={class:"sm:p-3 lg:w-[40%]"},w={class:"md:text-[25px] text-[19px] font-extrabold capitalize"},y={class:"lg:text-[25px] text-[15px] py-2 text-slate-600"},k={class:"font-bold py-2"},B={class:"text-red-500 text-[30px]"},P={class:"font-bold py-2"},S={class:"text-red-500 text-[30px]"},V={class:"bg-green-500 text-white px-6 py-2 rounded-lg"},D={__name:"ParamsView",setup(A){const c=i().bascet,p=i().store,u=_();function x(s,l,o){c.counter+=s,c.goods.push(o),o.ordered=!0,o.visibility=!0}const e=h(()=>p.find(s=>s.id==u.params.id));return(s,l)=>(v(),m("div",b,[t("img",{src:e.value.image,alt:e.value.title,class:"object-contain max-h-[80vh] md:w-[40%] 2xl:w-[25%] px-10"},null,8,f),t("div",g,[t("h2",w,a(e.value.title),1),t("p",y,a(e.value.description),1),t("p",k,[n("Price:"),t("span",B,"$"+a(e.value.price),1)]),t("p",P,[n("Price:"),t("span",S,a(e.value.price*87)+"Руб",1)]),r(t("button",{onClickOnce:l[0]||(l[0]=o=>x(e.value.price,e.value.title,e.value)),class:"bg-blue-500 text-white px-6 py-2 rounded-lg"},"Add",544),[[d,!e.value.ordered]]),r(t("button",V,"Added",512),[[d,e.value.ordered]])])]))}};export{D as default};