(this["webpackJsonpcomic-stripper"]=this["webpackJsonpcomic-stripper"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),a=n(7),i=n.n(a),c=(n(12),n(2)),s=n(3),l=n(5),u=n(4),h=n(0),m=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsx)("img",{className:"strip-img",src:this.props.imgUrl,alt:this.props.imgAlt})}}]),n}(o.a.Component),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"updateSrc",value:function(t){this.setState({src:t})}},{key:"render",value:function(){return Object(h.jsx)(m,{imgUrl:"https://www.collectedcurios.com/SA_"+(t=this.props.page,e=4,String(t).padStart(e,"0")+"_small.jpg"),imgAlt:this.props.page});var t,e}}]),n}(o.a.Component),d=function(){console.log(document.URL);var t=document.URL.split("#"),e=t.length>1?parseInt(t[1]):1;return isNaN(e)&&(e=1),e};var f=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var r;Object(c.a)(this,n),r=e.call(this,t);var a=d();return r.ref=o.a.createRef(),r.state={from:a,to:a+10},r.placeHolderCallback=function(){},r}return Object(s.a)(n,[{key:"loadMoreFrom",value:function(){var t=this,e=this.state.from,n=Math.max(e-10,1);this.setState({from:n}),console.log(this.ref.current.childElementCount);var r=this.ref.current.getElementsByClassName("strip-img").item(0),o=r.getBoundingClientRect().top;this.placeHolderCallback=function(){var e=r.getBoundingClientRect().top,n=e-o;console.log(o,e,n,t.ref.current.childElementCount),document.documentElement.scrollTop+=n}}},{key:"loadMoreTo",value:function(){this.setState({to:this.state.to+10})}},{key:"trackAnchor",value:function(){var t=d();this.state.from!==t&&this.setState({from:t})}},{key:"trackScrolling",value:function(){var t=document.documentElement,e=window.innerHeight;t.scrollHeight-(t.scrollTop+t.clientHeight)<e&&this.loadMoreTo()}},{key:"render",value:function(){for(var t=this,e=this.state.from,n=this.state.to,r=[],o=0,a=Array.from({length:n-e+1},(function(t,n){return e+n}));o<a.length;o++){var i=a[o];r.push(Object(h.jsx)(p,{page:i},i))}return Object(h.jsxs)("div",{ref:this.ref,id:"stripContainer",className:"stripContainerDiv",children:[Object(h.jsx)("button",{style:{height:"16px",padding:"2px"},onClick:function(){return t.loadMoreFrom()},children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"}),r]})}},{key:"componentDidMount",value:function(){var t=this;this.scrollLambda=function(t,e){var n=!0,r=!1;return function o(){n?(t(),n=!1,setTimeout((function(){n=!0,r&&(o(),r=!1)}),e)):r=!0}}((function(e){return t.trackScrolling()}),25),this.anchorLambda=function(e){return t.trackAnchor()},window.addEventListener("hashchange",this.anchorLambda),document.addEventListener("scroll",this.scrollLambda)}},{key:"componentDidUpdate",value:function(t,e,n){this.placeHolderCallback(),this.placeHolderCallback=function(){}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("hashchange",this.anchorLambda),document.removeEventListener("scroll",this.scrollLambda)}}]),n}(o.a.Component);i.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.4d73055b.chunk.js.map