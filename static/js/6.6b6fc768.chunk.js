(this["webpackJsonpe-books-recommendation"]=this["webpackJsonpe-books-recommendation"]||[]).push([[6],{502:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},504:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(48);function o(e,t){if(null==e)return{};var a,o,r=Object(n.a)(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}},509:function(e,t,a){"use strict";var n=a(18),o=a(48),r=a(153),i=a(36),s=a(2),c=a.n(s),l=a(61),p=a.n(l),d=a(492),u=a.n(d),b=a(493),f={active:p.a.bool,"aria-label":p.a.string,block:p.a.bool,color:p.a.string,disabled:p.a.bool,outline:p.a.bool,tag:b.d,innerRef:p.a.oneOfType([p.a.object,p.a.func,p.a.string]),onClick:p.a.func,size:p.a.string,children:p.a.node,className:p.a.string,cssModule:p.a.object,close:p.a.bool},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(r.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],r=e.block,i=e.className,s=e.close,l=e.cssModule,p=e.color,d=e.outline,f=e.size,h=e.tag,m=e.innerRef,g=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);s&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+p,O=Object(b.b)(u()(i,{close:s},s||"btn",s||v,!!f&&"btn-"+f,!!r&&"btn-block",{active:t,disabled:this.props.disabled}),l);g.href&&"button"===h&&(h="a");var j=s?"Close":null;return c.a.createElement(h,Object(n.a)({type:"button"===h&&g.onClick?"button":void 0},g,{className:O,ref:m,onClick:this.onClick,"aria-label":a||j}))},t}(c.a.Component);h.propTypes=f,h.defaultProps={color:"secondary",tag:"button"},t.a=h},527:function(e,t,a){e.exports=a.p+"static/media/logo.7e368d0f.svg"},528:function(e,t,a){e.exports=a.p+"static/media/avatar.831119a2.png"},540:function(e,t,a){"use strict";a.r(t);var n=a(504),o=a(148),r=a(149),i=a(151),s=a(150),c=a(152),l=a(2),p=a.n(l),d=a(529),u=a(502);function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){Object(u.a)(e,t,a[t])}))}return e}var f=a(18),h=a(153),m=a(36),g=a(61),v=a.n(g),O=a(511),j=a(493),k=["defaultOpen"],y=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},a.toggle=a.toggle.bind(Object(h.a)(a)),a}Object(m.a)(t,e);var a=t.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){return p.a.createElement(O.a,Object(f.a)({isOpen:this.state.isOpen,toggle:this.toggle},Object(j.c)(this.props,k)))},t}(l.Component);y.propTypes=b({defaultOpen:v.a.bool},O.a.propTypes);var C=a(48),x=a(492),N=a.n(x),E=a(505),w=a(497),T=a(509),M={caret:v.a.bool,color:v.a.string,children:v.a.node,className:v.a.string,cssModule:v.a.object,disabled:v.a.bool,onClick:v.a.func,"aria-haspopup":v.a.bool,split:v.a.bool,tag:j.d,nav:v.a.bool},P=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(h.a)(a)),a}Object(m.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():(this.props.nav&&!this.props.tag&&e.preventDefault(),this.props.onClick&&this.props.onClick(e),this.context.toggle(e))},a.render=function(){var e,t=this,a=this.props,n=a.className,o=a.color,r=a.cssModule,i=a.caret,s=a.split,c=a.nav,l=a.tag,d=Object(C.a)(a,["className","color","cssModule","caret","split","nav","tag"]),u=d["aria-label"]||"Toggle Dropdown",b=Object(j.b)(N()(n,{"dropdown-toggle":i||s,"dropdown-toggle-split":s,"nav-link":c}),r),h=d.children||p.a.createElement("span",{className:"sr-only"},u);return c&&!l?(e="a",d.href="#"):l?e=l:(e=T.a,d.color=o,d.cssModule=r),this.context.inNavbar?p.a.createElement(e,Object(f.a)({},d,{className:b,onClick:this.onClick,"aria-expanded":this.context.isOpen,children:h})):p.a.createElement(E.c,null,(function(a){var n,o=a.ref;return p.a.createElement(e,Object(f.a)({},d,((n={})["string"===typeof e?"ref":"innerRef"]=o,n),{className:b,onClick:t.onClick,"aria-expanded":t.context.isOpen,children:h}))}))},t}(p.a.Component);P.propTypes=M,P.defaultProps={"aria-haspopup":!0,color:"secondary"},P.contextType=w.a;var I=P,D={tag:j.d,children:v.a.node.isRequired,right:v.a.bool,flip:v.a.bool,modifiers:v.a.object,className:v.a.string,cssModule:v.a.object,persist:v.a.bool,positionFixed:v.a.bool},F={flip:{enabled:!1}},L={up:"top",left:"left",right:"right",down:"bottom"},R=function(e){function t(){return e.apply(this,arguments)||this}return Object(m.a)(t,e),t.prototype.render=function(){var e=this,t=this.props,a=t.className,n=t.cssModule,o=t.right,r=t.tag,i=t.flip,s=t.modifiers,c=t.persist,l=t.positionFixed,d=Object(C.a)(t,["className","cssModule","right","tag","flip","modifiers","persist","positionFixed"]),u=Object(j.b)(N()(a,"dropdown-menu",{"dropdown-menu-right":o,show:this.context.isOpen}),n),h=r;if(c||this.context.isOpen&&!this.context.inNavbar){var m=(L[this.context.direction]||"bottom")+"-"+(o?"end":"start"),g=i?s:b({},s,F),v=!!l;return p.a.createElement(E.b,{placement:m,modifiers:g,positionFixed:v},(function(t){var a=t.ref,n=t.style,o=t.placement;return p.a.createElement(h,Object(f.a)({tabIndex:"-1",role:"menu",ref:a,style:n},d,{"aria-hidden":!e.context.isOpen,className:u,"x-placement":o}))}))}return p.a.createElement(h,Object(f.a)({tabIndex:"-1",role:"menu"},d,{"aria-hidden":!this.context.isOpen,className:u,"x-placement":d.placement}))},t}(p.a.Component);R.propTypes=D,R.defaultProps={tag:"div",flip:!0},R.contextType=w.a;var S=R,z={children:v.a.node,active:v.a.bool,disabled:v.a.bool,divider:v.a.bool,tag:j.d,header:v.a.bool,onClick:v.a.func,className:v.a.string,cssModule:v.a.object,toggle:v.a.bool},J=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(h.a)(a)),a.getTabIndex=a.getTabIndex.bind(Object(h.a)(a)),a}Object(m.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled||this.props.header||this.props.divider?e.preventDefault():(this.props.onClick&&this.props.onClick(e),this.props.toggle&&this.context.toggle(e))},a.getTabIndex=function(){return this.props.disabled||this.props.header||this.props.divider?"-1":"0"},a.render=function(){var e=this.getTabIndex(),t=e>-1?"menuitem":void 0,a=Object(j.c)(this.props,["toggle"]),n=a.className,o=a.cssModule,r=a.divider,i=a.tag,s=a.header,c=a.active,l=Object(C.a)(a,["className","cssModule","divider","tag","header","active"]),d=Object(j.b)(N()(n,{disabled:l.disabled,"dropdown-item":!r&&!s,active:c,"dropdown-header":s,"dropdown-divider":r}),o);return"button"===i&&(s?i="h6":r?i="div":l.href&&(i="a")),p.a.createElement(i,Object(f.a)({type:"button"===i&&(l.onClick||this.props.toggle)?"button":void 0},l,{tabIndex:e,role:t,className:d,onClick:this.onClick}))},t}(p.a.Component);J.propTypes=z,J.defaultProps={tag:"button",toggle:!0},J.contextType=w.a;var q=J,A=a(510),B=a(527),G=a.n(B),H=a(528),K=a.n(H),Q=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props;t.children,Object(n.a)(t,["children"]);return p.a.createElement(p.a.Fragment,null,p.a.createElement(A.k,{className:"d-lg-none",display:"md",mobile:!0}),p.a.createElement(A.d,{full:{src:G.a,width:89,height:25,alt:"ebooks Logo"}}),p.a.createElement(A.k,{className:"d-md-down-none",display:"lg"}),p.a.createElement(d.a,{className:"ml-auto",navbar:!0},this.props.isLogin?p.a.createElement(y,{nav:!0,direction:"down"},p.a.createElement(I,{nav:!0},p.a.createElement("img",{src:K.a,className:"img-avatar",alt:"user@ebooksrecommendation.com"})),p.a.createElement(S,{right:!0},p.a.createElement(q,{onClick:function(t){return e.props.onLogout(t)}},p.a.createElement("i",{className:"fa fa-sign-out"})," Logout"))):p.a.createElement(q,{onClick:function(e){return window.location.href="#/login"}},p.a.createElement("i",{className:"fa fa-sign-in"})," Login")))}}]),t}(l.Component);Q.defaultProps={};t.default=Q}}]);
//# sourceMappingURL=6.6b6fc768.chunk.js.map