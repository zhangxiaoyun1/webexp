(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{10:function(e,t,n){e.exports=n(16)},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(9),r=n.n(c),l=(n(15),n(6)),u=n(1),i=n(2),s=n(4),m=n(3),d=n(5),p=(n(7),function(e){function t(){return Object(u.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todo;return o.a.createElement("div",null,o.a.createElement("h2",null,"\u6b63\u5728\u8fdb\u884c"),o.a.createElement("div",{className:"cl"},this.props.num1),o.a.createElement("ol",null,t.map((function(t,n){if("false"===t.done)return o.a.createElement("li",{key:n,className:"lis"},o.a.createElement("input",{className:"in",type:"checkbox",onClick:function(){return e.props.toCheck(n)}}),t.value,o.a.createElement("button",{onClick:function(){return e.props.del(n)},className:"but"},"\u5220\u9664"))}))),o.a.createElement("h2",null,"\u5df2\u7ecf\u5b8c\u6210"),o.a.createElement("div",{className:"cl"},this.props.num2),o.a.createElement("ol",null,t.map((function(t,n){if("true"===t.done)return o.a.createElement("li",{key:n,className:"lis"},o.a.createElement("input",{className:"in",type:"checkbox",checked:"checked",onClick:function(){return e.props.toChecked(n)}}),t.value,o.a.createElement("button",{onClick:function(){return e.props.del(n)},className:"but"},"\u5220\u9664"))}))))}}]),t}(a.Component)),f=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleInput=function(t){if(13===t.keyCode){var n={};n.value=t.target.value,n.done="false",e.props.add(n),t.target.value=null}},e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("input",{className:"int",ref:function(t){e.inp=t},type:"text",onKeyDown:this.handleInput,placeholder:"   \u8bf7\u6dfb\u52a0\u4e8b\u4ef6\uff0c\u5e76\u56de\u8f66\u786e\u5b9a"}))}}]),t}(a.Component),h=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).addItem=function(t){""!==t?(e.num1++,e.setState((function(e,n){var a;return a=[].concat(Object(l.a)(e.todo),[t]),localStorage.setItem("key",JSON.stringify(a)),{todo:a}}))):alert("\u8bf7\u8f93\u5165\u5185\u5bb9")},e.delItem=function(t){var n=Object(l.a)(e.state.todo);"false"===n[t].done?e.num1--:e.num2--,n.splice(t,1),localStorage.setItem("key",JSON.stringify(n)),e.setState((function(e,t){return{todo:n}}))},e.toCheck=function(t){e.num1--,e.num2++;var n=Object(l.a)(e.state.todo);n[t].done="true",localStorage.setItem("key",JSON.stringify(n)),e.setState((function(e,t){return{todo:n}}))},e.toChecked=function(t){e.num1++,e.num2--;var n=Object(l.a)(e.state.todo);n[t].done="false",localStorage.setItem("key",JSON.stringify(n)),e.setState((function(e,t){return{todo:n}}))},JSON.parse(null===localStorage.getItem("key"))?e.state={todo:[]}:e.state={todo:JSON.parse(localStorage.getItem("key"))},e.num1=0,e.num2=0,e.state.todo.map((function(t){"false"===t.done?e.num1++:e.num2++})),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"box"},o.a.createElement(f,{add:this.addItem}),o.a.createElement(p,{del:this.delItem,todo:this.state.todo,toCheck:this.toCheck,toChecked:this.toChecked,num1:this.num1,num2:this.num2})))}}]),t}(a.Component);r.a.render(o.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,n){}},[[10,1,2]]]);
//# sourceMappingURL=main.42716c94.chunk.js.map