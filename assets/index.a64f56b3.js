import{z as $,r as s,d as r,K as k,o as w,c as I,e,w as l,h as x,B as h,i as C,j as V,v as K,C as P,n as b,q as R}from"./index.65112b15.js";import{l as j,f as z}from"./online.d8819df3.js";const F={class:"app-container"},O=b("\u641C\u7D22"),Q=b("\u91CD\u7F6E"),E=b("\u5F3A\u9000"),A=$({name:"Online"}),W=Object.assign(A,{setup(G){const{proxy:c}=R(),y=s([]),m=s(!0),f=s(0),i=s(1),p=s(10),u=s({ipaddr:void 0,userName:void 0});function _(){m.value=!0,j(u.value).then(n=>{y.value=n.rows,f.value=n.total,m.value=!1})}function d(){i.value=1,_()}function L(){c.resetForm("queryRef"),d()}function B(n){c.$modal.confirm('\u662F\u5426\u786E\u8BA4\u5F3A\u9000\u540D\u79F0\u4E3A"'+n.userName+'"\u7684\u7528\u6237?').then(function(){return z(n.tokenId)}).then(()=>{_(),c.$modal.msgSuccess("\u5220\u9664\u6210\u529F")}).catch(()=>{})}return _(),(n,a)=>{const N=r("el-input"),v=r("el-form-item"),g=r("el-button"),S=r("el-form"),t=r("el-table-column"),q=r("el-table"),D=r("pagination"),T=k("hasPermi"),U=k("loading");return w(),I("div",F,[e(S,{model:u.value,ref:"queryRef",inline:!0,"label-width":"68px"},{default:l(()=>[e(v,{label:"\u767B\u5F55\u5730\u5740",prop:"ipaddr"},{default:l(()=>[e(N,{modelValue:u.value.ipaddr,"onUpdate:modelValue":a[0]||(a[0]=o=>u.value.ipaddr=o),placeholder:"\u8BF7\u8F93\u5165\u767B\u5F55\u5730\u5740",clearable:"",onKeyup:x(d,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(v,{label:"\u7528\u6237\u540D\u79F0",prop:"userName"},{default:l(()=>[e(N,{modelValue:u.value.userName,"onUpdate:modelValue":a[1]||(a[1]=o=>u.value.userName=o),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\u79F0",clearable:"",onKeyup:x(d,["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(v,null,{default:l(()=>[e(g,{type:"primary",icon:"Search",onClick:d},{default:l(()=>[O]),_:1}),e(g,{icon:"Refresh",onClick:L},{default:l(()=>[Q]),_:1})]),_:1})]),_:1},8,["model"]),h((w(),C(q,{data:y.value.slice((i.value-1)*p.value,i.value*p.value),style:{width:"100%"}},{default:l(()=>[e(t,{label:"\u5E8F\u53F7",width:"50",type:"index",align:"center"},{default:l(o=>[V("span",null,K((i.value-1)*p.value+o.$index+1),1)]),_:1}),e(t,{label:"\u4F1A\u8BDD\u7F16\u53F7",align:"center",prop:"tokenId","show-overflow-tooltip":!0}),e(t,{label:"\u767B\u5F55\u540D\u79F0",align:"center",prop:"userName","show-overflow-tooltip":!0}),e(t,{label:"\u6240\u5C5E\u90E8\u95E8",align:"center",prop:"deptName","show-overflow-tooltip":!0}),e(t,{label:"\u4E3B\u673A",align:"center",prop:"ipaddr","show-overflow-tooltip":!0}),e(t,{label:"\u767B\u5F55\u5730\u70B9",align:"center",prop:"loginLocation","show-overflow-tooltip":!0}),e(t,{label:"\u64CD\u4F5C\u7CFB\u7EDF",align:"center",prop:"os","show-overflow-tooltip":!0}),e(t,{label:"\u6D4F\u89C8\u5668",align:"center",prop:"browser","show-overflow-tooltip":!0}),e(t,{label:"\u767B\u5F55\u65F6\u95F4",align:"center",prop:"loginTime",width:"180"},{default:l(o=>[V("span",null,K(n.parseTime(o.row.loginTime)),1)]),_:1}),e(t,{label:"\u64CD\u4F5C",align:"center","class-name":"small-padding fixed-width"},{default:l(o=>[h((w(),C(g,{type:"text",icon:"Delete",onClick:H=>B(o.row)},{default:l(()=>[E]),_:2},1032,["onClick"])),[[T,["monitor:online:forceLogout"]]])]),_:1})]),_:1},8,["data"])),[[U,m.value]]),h(e(D,{total:f.value,page:i.value,"onUpdate:page":a[2]||(a[2]=o=>i.value=o),limit:p.value,"onUpdate:limit":a[3]||(a[3]=o=>p.value=o)},null,8,["total","page","limit"]),[[P,f.value>0]])])}}});export{W as default};
