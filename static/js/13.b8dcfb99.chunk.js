(this["webpackJsonpe-books-recommendation"]=this["webpackJsonpe-books-recommendation"]||[]).push([[13],{495:function(e,t,a){"use strict";var n=a(148),c=a(149),r=a(151),o=a(150),s=a(152),l=a(2),i=a.n(l),m=a(521),u=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(o.a)(t).call(this,e))).state={},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.books;return i.a.createElement(m.a,null,i.a.createElement("div",{style:{display:"flex",height:"100%",flexWrap:"wrap",justifyContent:"center"}},e.map((function(e,t){return i.a.createElement("a",{key:e.id,href:"#/books/details?id="+e.id,className:"col-xs-4 col-sm-4 col-md-3 col-lg-2 py-2"},i.a.createElement(m.a,{className:"px-2"},i.a.createElement("img",{style:{width:"100%",height:"100%"},src:e.image_url})),i.a.createElement(m.a,{className:"text-center"},i.a.createElement("span",{className:"col-md-12 py-2"}," ",e.title)))}))))}}]),t}(l.Component);t.a=u},542:function(e,t,a){"use strict";a.r(t);var n=a(148),c=a(149),r=a(151),o=a(150),s=a(152),l=a(2),i=a.n(l),m=a(521),u=a(495),p=a(496);(p=p.sort((function(e,t){return e.isbn-t.isbn}))).length=10;var d=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){localStorage.recommendation_login||(window.location.href="#/")}},{key:"render",value:function(){return i.a.createElement("div",{className:"animated fadeIn"},i.a.createElement(m.a,null,i.a.createElement("h1",{className:"py-5"},"Purchases")),i.a.createElement(u.a,{books:p}))}}]),t}(l.Component);t.default=d}}]);
//# sourceMappingURL=13.b8dcfb99.chunk.js.map