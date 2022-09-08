"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[199],{6199:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var r=t(5861),a=t(885),s=t(7757),i=t.n(s),c=t(6068),o=t(184),l=function(e){var n=e.filterState,t=e.handleFilter;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("p",{children:"Find contacts by name"}),(0,o.jsx)("input",{type:"text",name:"filter",value:n,onChange:function(e){return t(e.target.value)}})]})},u=t(4097),m=function(e){var n=e.filteredArr,t=(0,u.wY)().data,r=(0,u.Nt)(),s=(0,a.Z)(r,1)[0];return(0,o.jsx)("ul",{children:t&&(0,o.jsx)(o.Fragment,{children:n.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsxs)(c.lh,{children:[e.name,": ",e.number]}),(0,o.jsx)(c.OQ,{onClick:function(){return s(e.id)},children:"Delete"})]},e.id)}))})})},d=t(8571),h=t(5705),p=d.Ry().shape({name:d.Z_().min(2).matches(/^[aA-zZ\s]+$/,"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan").required(),number:d.Rx().min(7).required()}),x=function(e){var n=e.initialValues,t=e.onSubmit;return(0,o.jsx)(h.J9,{initialValues:n,onSubmit:t,validationSchema:p,children:(0,o.jsxs)(c.tN,{children:[(0,o.jsxs)(c.L1,{children:["Name",(0,o.jsx)(c.sG,{type:"text",name:"name",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}),(0,o.jsx)(h.Bc,{name:"name",component:c.jj})]}),(0,o.jsxs)(c.L1,{children:["Number",(0,o.jsx)(c.sG,{type:"tel",name:"number"}),(0,o.jsx)(h.Bc,{name:"number",component:c.jj})]}),(0,o.jsx)(c.OQ,{type:"submit",children:"Add Contact"})]})})},f=t(2007),j=t.n(f),b=t(2791);x.propTypes={initialValues:j().object,onSubmit:j().func},l.propTypes={contacts:j().array,filterState:j().string,handleFilter:j().func},m.propTypes={filteredArr:j().array};var y=function(){var e=(0,b.useState)(""),n=(0,a.Z)(e,1)[0],t=(0,b.useState)(""),s=(0,a.Z)(t,1)[0],d=(0,b.useState)(""),h=(0,a.Z)(d,2),p=h[0],f=h[1],j=(0,u.wY)().data,y=(0,u.Tn)(),v=(0,a.Z)(y,1)[0],C=function(){var e=(0,r.Z)(i().mark((function e(n,t){var r,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.resetForm,e.prev=1,e.next=4,j.find((function(e){return e.name.toLowerCase().includes(n.name.toLowerCase())}));case 4:if(!e.sent){e.next=8;break}alert("".concat(n.name," is already in contacts.")),e.next=11;break;case 8:return a={name:n.name,number:n.number},e.next=11,v(a);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),alert(e.t0.message);case 16:r();case 17:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(n,t){return e.apply(this,arguments)}}(),k=j?j.filter((function(e){return e.name.toLowerCase().includes(p.toLowerCase())})):j;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.G2,{children:"Phonebook"}),(0,o.jsx)(x,{initialValues:{items:j,name:n,number:s},onSubmit:C}),(0,o.jsx)(c.G2,{children:"Contacts"}),(0,o.jsx)(l,{filterState:p,handleFilter:function(e){f(e)}}),j&&(0,o.jsx)(m,{filteredArr:k})]})}}}]);
//# sourceMappingURL=199.4c06e8b8.chunk.js.map