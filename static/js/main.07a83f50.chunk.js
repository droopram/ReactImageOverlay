(this.webpackJsonpavi=this.webpackJsonpavi||[]).push([[0],{137:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),n=a(2),c=a.n(n),r=(a(75),a(76),a(77),a(11)),s=a(15),m=a(60),i=a(61),d=a(14),b=a(69),h=a(68),u=(a(78),a(62)),g=a.n(u),f=(a(79),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).previewImage=function(e){if(e.target.files[0]){var t=new FileReader;t.onloadend=function(){l.setState({image:t.result})},t.readAsDataURL(e.target.files[0])}},l.state={topBar:{enabled:!0,text:"OP=OP",backgroundColor:"#bac2c5",textColor:"#f00"},bottomBar:{enabled:!0,backgroundColor:"transparent",textColor:"#fff",text:"Psuedanthias squamipinnis"},badge:{enabled:!0,currency:"\u20ac",oldText:"36,25",newText:"15,00 of 5 voor 60",backgroundColor:"#ff5500",textColor:"#fff"},canvas:"",image:null},l.handlechange=l.handlechange.bind(Object(d.a)(l)),l.toggleBar=l.toggleBar.bind(Object(d.a)(l)),l.renderToImage=l.renderToImage.bind(Object(d.a)(l)),l.handleColorChange=l.handleColorChange.bind(Object(d.a)(l)),l}return Object(i.a)(a,[{key:"handlechange",value:function(e){var t=e.target.name,a=e.target.value,l=e.target.id;this.setState(Object(r.a)({},t,Object(s.a)(Object(s.a)({},this.state[t]),{},Object(r.a)({},l,a))))}},{key:"handleColorChange",value:function(e,t,a){this.setState(Object(r.a)({},t,Object(s.a)(Object(s.a)({},this.state[t]),{},Object(r.a)({},a,e.color))))}},{key:"toggleBar",value:function(e){this.setState(Object(r.a)({},e,Object(s.a)(Object(s.a)({},this.state[e]),{},{enabled:!this.state[e].enabled})))}},{key:"renderToImage",value:function(){g()(document.getElementById("final-image")).then((function(e){document.getElementById("result").append(e)}))}},{key:"render",value:function(){var e=this,t=o.a.createElement("img",{src:this.state.image?this.state.image:"./testimg.jpg"});return o.a.createElement("div",null,o.a.createElement("div",{className:"col-md-12 mb-5"},o.a.createElement("h1",null,"Image Overlay Generator")),o.a.createElement("div",{id:"final-image",className:"col-12 col-md-4 offset-md-4 form"},t,o.a.createElement("div",{id:"topBar",style:{visibility:this.state.topBar.enabled?"visible":"hidden",color:this.state.topBar.textColor,backgroundColor:this.state.topBar.backgroundColor}},this.state.topBar.text),o.a.createElement("div",{id:"bottomBar",style:{visibility:this.state.bottomBar.enabled?"visible":"hidden",color:this.state.bottomBar.textColor,backgroundColor:this.state.bottomBar.backgroundColor}},this.state.bottomBar.text),o.a.createElement("div",{id:"badge",style:{visibility:this.state.badge.enabled?"visible":"hidden",color:this.state.badge.textColor,backgroundColor:this.state.badge.backgroundColor}},o.a.createElement("span",{id:"old-text"},o.a.createElement("s",null,this.state.badge.currency+this.state.badge.oldText)),o.a.createElement("span",{id:"new-text"},this.state.badge.currency+this.state.badge.newText))),o.a.createElement("form",{id:"form",className:"col-12 col-md-4 offset-md-4 form mb-5 p-3",onsubmit:this.onsubmit},o.a.createElement("h3",null,"Upload image"),o.a.createElement("div",{class:"form-group row"},o.a.createElement("input",{type:"file",name:"image",className:"btn btn-info btn-block",onChange:this.previewImage})),o.a.createElement("hr",null),o.a.createElement("h3",null,"Topbar"),o.a.createElement("div",{class:"form-group row"},o.a.createElement("label",{className:"col-sm-3 col-form-label form-check-label",for:"topbarEnabled"},"Top bar?"),o.a.createElement("div",{className:"col-sm-9 pt-2 pl-5"},o.a.createElement("input",{id:"topbarEnabled",className:"form-check-input",type:"checkbox",onChange:function(){return e.toggleBar("topBar")},defaultChecked:this.state.topBar.enabled})),o.a.createElement("label",{className:"col-sm-3 col-form-label form-check-label"},"Text"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("input",{className:"form-control",id:"text",name:"topBar",type:"text",onChange:this.handlechange,value:this.state.topBar.text}))),o.a.createElement("hr",null),o.a.createElement("h3",null,"Bottom Bar"),o.a.createElement("div",{class:"form-group row"},o.a.createElement("label",{className:"col-sm-3 col-form-label form-check-label",for:"bottombarEnabled"},"Bottom bar?"),o.a.createElement("div",{className:"col-sm-9 pt-2 pl-5"},o.a.createElement("input",{id:"bottombarEnabled",className:"form-check-input",type:"checkbox",onChange:function(){return e.toggleBar("bottomBar")},defaultChecked:this.state.bottomBar.enabled})),o.a.createElement("label",{className:"col-sm-3 col-form-label form-check-label"},"Text"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("input",{className:"form-control",id:"text",name:"bottomBar",type:"text",onChange:this.handlechange,value:this.state.bottomBar.text}))),o.a.createElement("hr",null),o.a.createElement("h3",null,"Badge"),o.a.createElement("div",{class:"form-group row"},o.a.createElement("label",{className:"col-sm-3 col-form-label form-check-label",for:"bottombarEnabled"},"Badge?"),o.a.createElement("div",{className:"col-sm-9 pt-2 pl-5"},o.a.createElement("input",{id:"bottombarEnabled",className:"form-check-input",type:"checkbox",onChange:function(){return e.toggleBar("badge")},defaultChecked:this.state.badge.enabled})),o.a.createElement("label",{className:"col-sm-3 col-form-label form-check-label"},"Old Text"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("input",{className:"form-control",id:"oldText",name:"badge",type:"text",onChange:this.handlechange,value:this.state.badge.oldText})),o.a.createElement("label",{className:"col-sm-3 col-form-label form-check-label"},"New Text"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("input",{className:"form-control",id:"newText",name:"badge",type:"text",onChange:this.handlechange,value:this.state.badge.newText})),o.a.createElement("label",{className:"col-sm-3 col-form-label form-check-label"},"Currency"),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("input",{className:"form-control",id:"currency",name:"badge",type:"text",onChange:this.handlechange,value:this.state.badge.currency})))),o.a.createElement("div",{className:"col-12 col-md-4 offset-md-4 form mt-5"},o.a.createElement("button",{onClick:this.renderToImage,className:"btn btn-success btn-block"},"Save image")),o.a.createElement("div",{id:"result",className:"col-12 col-md-4 offset-md-4 "},"Result (Right click, save as to download image):"))}}]),a}(l.Component));var p=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},70:function(e,t,a){e.exports=a(137)},75:function(e,t,a){},76:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},77:function(e,t,a){}},[[70,1,2]]]);
//# sourceMappingURL=main.07a83f50.chunk.js.map