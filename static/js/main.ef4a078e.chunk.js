(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/holder.90d8040b.jpg"},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),s=a.n(i),c=(a(19),a(9)),o=a(5),l=a(6),d=a(8),u=a(7),h=a(12),m=(a(20),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={taskName:"",description:""},e.updateChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleChange2=function(t){13===t.which&&(e.handleChange(),e.descriptionInput.current.blur())},e.handleChange=function(t){var a=e.props.list,n={};n.id=a.length<1?0:1===a.length?1:a.length,console.log(n.id),n.taskName=e.state.taskName,n.description=e.state.description,n.taskDone=!1,e.props.addCard(n),n={},e.setState({taskName:"",description:""})},e.handleKeyPress=function(t){13===t.which&&e.descriptionInput.current.focus()},e.descriptionInput=r.a.createRef(),e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"AddCard"},r.a.createElement("div",null,r.a.createElement("div",{className:"AddCardContainer"},r.a.createElement("label",{htmlFor:"name"},"Task Name"),r.a.createElement("input",{name:"taskName",type:"text",onChange:this.updateChange,placeholder:"Task Name",id:"name",value:this.state.taskName,onKeyPress:this.handleKeyPress})),r.a.createElement("div",{className:"AddCardContainer"},r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("textarea",{name:"description",id:"description",onChange:this.updateChange,placeholder:"description",value:this.state.description,ref:this.descriptionInput,onKeyPress:this.handleChange2})),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btnAdd",onClick:this.handleChange},"Add Card"))))}}]),a}(n.Component)),p=a(26),f=a(27),k=(a(21),a(13)),g=a.n(k),C=function(e){var t=e.id,a=e.name,n=e.description,i=e.taskDone,s=e.deleteCard,c=e.cardStrike;return r.a.createElement("div",{className:"cardAlign col-sm-4"},r.a.createElement(p.a,{className:"displayCard",style:{width:"18rem"}},r.a.createElement(p.a.Img,{variant:"top",src:g.a}),r.a.createElement(p.a.Body,null,r.a.createElement(p.a.Title,{style:{textDecoration:i?"line-through":"none"}},a),r.a.createElement(p.a.Text,null,n),r.a.createElement(f.a,{className:"btn",onClick:function(){c(t)}},i?"undone":"Done"),r.a.createElement(f.a,{className:"btn",id:t,onClick:function(){s(t)},variant:"primary"},"Delete"))))},v=(a(22),function(e){var t=e.list,a=e.deleteCard,n=e.cardStrike;e.updateID;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row align-items-center no-gutters"},t.map((function(e,t){return r.a.createElement(C,{key:t,id:t,name:e.taskName,description:e.description,taskDone:e.taskDone,deleteCard:a,cardStrike:n})}))))}),E=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},N=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"searchBox"},r.a.createElement("h2",{align:"center"},"Task List"),r.a.createElement("input",{onChange:t,type:"text",placeholder:"search here "}))},b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={list:[{id:0,taskName:"getup",description:"sfadh asfd",taskDone:!1},{id:1,taskName:"brush",description:"sfadh asfd",taskDone:!1},{id:2,taskName:"drink water",description:"sfadh asfd",taskDone:!0}],searchfield:""},e.updateID=function(t){t.map((function(e){return e.id=t.findIndex((function(t){return t.taskName===e.taskName}))})),e.setState({list:t}),console.log(e.state.list1)},e.deleteCard=function(t){console.log(t);var a=e.state.list.filter((function(e){return e.id!==t}));e.updateID(a),console.log(a)},e.addCard=function(t){var a=Object(c.a)(e.state.list);a.push(t),console.log(a),t.taskName.length>0&&e.setState({list:a})},e.cardStrike=function(t){var a=Object(c.a)(e.state.list);a[t].taskDone=!a[t].taskDone,e.setState({list:a})},e.onSearchChange=function(t){e.setState({searchfield:t.target.value})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.list,a=e.searchfield,n=t.filter((function(e){return e.taskName.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{align:"center"},"Alistair's Todo List"),r.a.createElement(m,{addCard:this.addCard,list:this.state.list}),r.a.createElement(N,{searchChange:this.onSearchChange}),r.a.createElement(E,null," ",r.a.createElement(v,{deleteCard:this.deleteCard,cardStrike:this.cardStrike,list:n})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.ef4a078e.chunk.js.map