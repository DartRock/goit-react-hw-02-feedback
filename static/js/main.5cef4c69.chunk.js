(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={section:"App_section__2P0Rn",title:"App_title__L-jpZ"}},2:function(t,e,n){t.exports={form:"ContactForm_form__i_DeB",label:"ContactForm_label__2MTWp",input:"ContactForm_input__2djYW",button:"ContactForm_button__3UMo1"}},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),s=n(12),c=n.n(s),i=n(14),o=n(3),l=n(4),u=n(7),m=n(6),b=n(15),d=n(13),p=n(5),h=n(2),j=n.n(h),f=n(0),C=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.onChangeHandler=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(p.a)({},a,r))},t.submitHandler=function(e){e.preventDefault(),t.props.onSubmit(Object(d.a)({},t.state)),t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("form",{onSubmit:this.submitHandler,className:j.a.form,children:[Object(f.jsxs)("label",{className:j.a.label,children:["Name",Object(f.jsx)("input",{name:"name",type:"text",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:this.onChangeHandler,className:j.a.input,required:!0})]}),Object(f.jsxs)("label",{className:j.a.label,children:["Number",Object(f.jsx)("input",{name:"number",type:"tel",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:this.onChangeHandler,className:j.a.input,required:!0})]}),Object(f.jsx)("button",{type:"submit",className:j.a.button,children:" Add contact"})]})}}]),n}(a.Component),_=C,O=n(8),x=n.n(O),v=function(t){var e=t.filterContacts,n=t.onDeleteContacts;return Object(f.jsx)("ul",{className:x.a.list,children:e.map((function(t){return Object(f.jsxs)("li",{className:x.a.item,children:[Object(f.jsxs)("p",{className:x.a.text,children:[t.name,": ",t.number," "]}),Object(f.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},g=n(9),N=n.n(g),y=function(t){var e=t.value,n=t.onChange;return Object(f.jsx)("div",{className:N.a.wrapper,children:Object(f.jsxs)("label",{className:N.a.label,children:["Find contacts by name",Object(f.jsx)("input",{type:"text",value:e,onChange:n,className:N.a.input})]})})},w=n(10),A=n.n(w),F=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.submitHandler=function(e){var n=e.name,a=e.number,r={id:Object(b.a)(),name:n,number:a};if(t.state.contacts.some((function(t){return t.name.toLowerCase()===r.name.toLowerCase()})))return alert("".concat(r.name," is already in contacts!"));t.setState((function(t){var e=t.contacts;return{contacts:[r].concat(Object(i.a)(e))}}))},t.flterContacts=function(){var e=t.state.filter.toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().includes(e)}))},t.onChangeFilter=function(e){return t.setState({filter:e.target.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("section",{className:A.a.section,children:[Object(f.jsx)("h1",{className:A.a.title,children:"Phonebook"}),Object(f.jsx)(_,{onSubmit:this.submitHandler}),Object(f.jsx)("h2",{className:A.a.title,children:"Contacts"}),Object(f.jsx)(y,{onChange:this.onChangeFilter,value:this.state.filter}),Object(f.jsx)(v,{filterContacts:this.flterContacts(),onDeleteContacts:this.deleteContact})]})}}]),n}(a.Component),S=F;n(21),n(22);c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={list:"ContactList_list__2frru",item:"ContactList_item__2JS7N"}},9:function(t,e,n){t.exports={wrapper:"Filter_wrapper__2RC4n",label:"Filter_label__3-0TK",input:"Filter_input__3pbaZ"}}},[[23,1,2]]]);
//# sourceMappingURL=main.5cef4c69.chunk.js.map