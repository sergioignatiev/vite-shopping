import{u as m,e as i,c as _,f as r,v as d,d as l,g as f,h as g,o as h,p as V,i as x}from"./index-CgeTaoov.js";const y=(t,u)=>{const a=t.__vccOpts||t;for(const[s,n]of u)a[s]=n;return a},c=t=>(V("data-v-0426efaa"),t=t(),x(),t),S=c(()=>l("option",{value:"electronics"},"electronics",-1)),w=[S],I=c(()=>l("button",null,"submit",-1)),b={__name:"ThirdView",setup(t){const u=m().store,a=i(""),s=i(),n=i(""),p=i("");function v(){u.push({id:u.length+1,title:a.value,price:s.value,image:n.value,category:p.value})}return(U,e)=>(h(),_("form",{onSubmit:g(v,["prevent"])},[r(l("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=o=>a.value=o),placeholder:"title"},null,512),[[d,a.value]]),r(l("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=o=>s.value=o),placeholder:"price"},null,512),[[d,s.value]]),r(l("input",{type:"text","onUpdate:modelValue":e[2]||(e[2]=o=>n.value=o),placeholder:"image"},null,512),[[d,n.value]]),r(l("select",{name:"",id:"","onUpdate:modelValue":e[3]||(e[3]=o=>p.value=o)},w,512),[[f,p.value]]),I],32))}},B=y(b,[["__scopeId","data-v-0426efaa"]]);export{B as default};