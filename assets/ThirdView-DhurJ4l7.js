import{u as m,f as u,c as _,g as c,v as p,a as e,d as g,h,i as f,o as y,p as w,j as b}from"./index-BAWbh1w2.js";const V=(o,r)=>{const s=o.__vccOpts||o;for(const[a,n]of r)s[a]=n;return s},i=o=>(w("data-v-e97be0ef"),o=o(),b(),o),x={for:"category"},S=i(()=>e("option",{value:"electronics"},"electronics",-1)),I=i(()=>e("option",{value:"men's clothing"},"men's clothing",-1)),j=i(()=>e("option",{value:"jewelery"},"jewelery",-1)),T=i(()=>e("option",{value:"women's clothing"},"women's clothing",-1)),U=[S,I,j,T],k=i(()=>e("button",null,"submit",-1)),B={__name:"ThirdView",setup(o){const r=m().store,s=u(""),a=u(),n=u(""),d=u("jewelery");function v(){r.push({id:r.length+1,title:s.value,price:a.value,image:n.value,category:d.value,visibility:!0,ordered:!1})}return(M,t)=>(y(),_("form",{onSubmit:f(v,["prevent"])},[c(e("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l),placeholder:"title"},null,512),[[p,s.value]]),c(e("input",{type:"number","onUpdate:modelValue":t[1]||(t[1]=l=>a.value=l),placeholder:"price"},null,512),[[p,a.value]]),c(e("input",{type:"text","onUpdate:modelValue":t[2]||(t[2]=l=>n.value=l),placeholder:"image"},null,512),[[p,n.value]]),e("label",x,[g("category> "),c(e("select",{name:"category",id:"category","onUpdate:modelValue":t[3]||(t[3]=l=>d.value=l)},U,512),[[h,d.value]])]),k],32))}},C=V(B,[["__scopeId","data-v-e97be0ef"]]);export{C as default};
