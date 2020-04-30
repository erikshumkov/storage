(this.webpackJsonpstorage=this.webpackJsonpstorage||[]).push([[8],{44:function(e,t,a){"use strict";a.r(t);var r=a(20),c=a(8),l=a(13),n=a(10),s=a(9),o=a(11),i=a(0),m=a.n(i),p=a(7),d=function(e){var t=e.data;return m.a.createElement("div",{className:"img-container"},m.a.createElement("div",{className:"img",style:{backgroundImage:"url(".concat(t.url,")")}},m.a.createElement(p.b,{to:"/products/".concat(t.route),className:"thelook-link"})),m.a.createElement("h6",null,t.brand," / ",t.type),m.a.createElement("span",null,"$",t.price))};var u=function(e){var t=e.productState,a=e.change,r={backgroundColor:"#000",borderColor:"#000"},c={backgroundColor:"#fff",borderColor:"#ccc"},l={fontWeight:"900"},n={fontWeight:"normal"},s=t.coats,o=t.boots,i=t.accessories,p=["coats","boots","accessories"],d=[s,o,i],u=[6,4,8];return m.a.createElement("div",null,m.a.createElement("div",{className:"filter"},m.a.createElement("input",{type:"checkbox",id:"category-options",className:"toggle"}),m.a.createElement("label",{htmlFor:"category-options",className:"title"},"Category",m.a.createElement("h4",null,"All categories",m.a.createElement("span",{className:"icon"},"\xd7"))),m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"category"},p.map((function(e,t){var s="".concat(e.charAt(0).toUpperCase()).concat(e.substring(1));return m.a.createElement("div",{key:u[t],className:"option"},m.a.createElement("label",{className:"option-title"},m.a.createElement("input",{type:"checkbox",id:p[t],className:"check-option",name:p[t],onChange:a,defaultChecked:d[t]}),m.a.createElement("label",{style:d[t]?l:n,htmlFor:p[t]},"".concat(s," (").concat(u[t],")")),m.a.createElement("span",{name:p[t],className:"checkmark",style:d[t]?r:c})))}))))))};var h=function(e){var t=e.productState,a=e.change,r={backgroundColor:"#000",borderColor:"#000"},c={backgroundColor:"#fff",borderColor:"#ccc"},l={fontWeight:"900"},n={fontWeight:"normal"},s=t.filippa,o=t.tiger,i=t.lacoste,p=t.lindeberg,d=t.tga,u=t.glory,h=t.lyle,g=t.oscar,b=t.peak,f=t.tretorn,E=["filippa","tiger","lacoste","lindeberg","tga","glory","lyle","oscar","peak","tretorn"],k=[s,o,i,p,d,u,h,g,b,f],y=["Filippa K","Tiger of Sweden","J Lindeberg","TGA","These Glory Days","Lacoste","Lyle & Scott","Oscar Jacobson","Peak Performance","Tretorn"];return m.a.createElement("div",null,m.a.createElement("div",{className:"filter"},m.a.createElement("input",{type:"checkbox",id:"brand-options",className:"toggle"}),m.a.createElement("label",{htmlFor:"brand-options",className:"title"},"Brand",m.a.createElement("h4",null,"All brands",m.a.createElement("span",{className:"icon"},"\xd7"))),m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"brandname"},E.map((function(e,t){return m.a.createElement("div",{key:t,className:"option"},m.a.createElement("label",{className:"option-title"},m.a.createElement("input",{type:"checkbox",id:E[t],name:E[t],className:"check-option",onChange:a,defaultChecked:k[t]}),m.a.createElement("label",{htmlFor:E[t],style:k[t]?l:n},y[t]),m.a.createElement("span",{className:"checkmark",style:k[t]?r:c})))}))))))};var g=function(e){var t=e.productState,a=e.change;return m.a.createElement("div",null,m.a.createElement("div",{className:"filter"},m.a.createElement("input",{type:"checkbox",id:"price-options",className:"toggle"}),m.a.createElement("label",{htmlFor:"price-options",className:"title"},"Price",m.a.createElement("h4",null,"All Prices",m.a.createElement("span",{className:"icon"},"\xd7"))),m.a.createElement("div",{className:"content"},m.a.createElement("div",{className:"price"},m.a.createElement("label",{htmlFor:"minPrice",className:"price-label"},"Price ( min - max )"),m.a.createElement("input",{type:"text",id:"minPrice",pattern:"[0-9]*",className:"min-price",name:"min",value:t.min,onChange:a}),m.a.createElement("input",{type:"text",name:"max",id:"maxPrice",pattern:"[0-9]*",className:"max-price",value:t.max,onChange:a})))))},b=a(14),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var l=arguments.length,o=new Array(l),i=0;i<l;i++)o[i]=arguments[i];return(a=Object(n.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={productsData:b.a,filter:!1,min:0,max:1e4,coats:!1,boots:!1,accessories:!1,filippa:!1,tiger:!1,lacoste:!1,lindeberg:!1,tga:!1,glory:!1,lyle:!1,oscar:!1,peak:!1,tretorn:!1,filteredData:b.a},a.filteredData=function(){var e,t=a.state,r=t.filippa,c=t.tiger,l=t.lacoste,n=t.lindeberg,s=t.tga,o=t.glory,i=t.lyle,m=t.oscar,p=t.peak,d=t.tretorn,u=t.productsData,h=t.boots,g=t.accessories,b=t.coats,f=t.min,E=t.max;e=u.filter((function(e){return e.price>=f&&e.price<=E})),(b||h||g)&&(e=e.filter((function(e){return"coats"===e.category&&b?e:"boots"===e.category&&h?e:"accessories"===e.category&&g?e:null}))),(r||c||l||n||s||o||i||m||p||d)&&(e=e.filter((function(e){return"filippa"===e.brandCheck&&r||"tiger"===e.brandCheck&&c||"lacoste"===e.brandCheck&&l||"lindeberg"===e.brandCheck&&n||"tga"===e.brandCheck&&s||"glory"===e.brandCheck&&o||"lyle"===e.brandCheck&&i||"oscar"===e.brandCheck&&m||"peak"===e.brandCheck&&p||"tretorn"===e.brandCheck&&d?e:null}))),a.setState({filteredData:e})},a.clearAllFilters=function(){a.setState({coats:!1,boots:!1,accessories:!1,filippa:!1,tiger:!1,lacoste:!1,lindeberg:!1,tga:!1,glory:!1,lyle:!1,oscar:!1,peak:!1,tretorn:!1,min:0,max:1e4},(function(){a.filteredData()}))},a.change=function(e){var t=e.target.name,c="checkbox"===e.target.type?e.target.checked:e.target.value;a.setState(Object(r.a)({},t,c),(function(){a.filteredData()}))},a.toggle=function(){a.setState({filter:!a.state.filter})},a}return Object(o.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.filteredData,t=this.clearAllFilters,a=this.change;return m.a.createElement("div",null,m.a.createElement("section",{id:"shop"},m.a.createElement("div",{className:"wrapper"},m.a.createElement("div",{className:"filter-section"},m.a.createElement(u,{productState:this.state,clearAllFilters:t,change:a}),m.a.createElement(h,{productState:this.state,clearAllFilters:t,change:a}),m.a.createElement(g,{productState:this.state,change:a}),m.a.createElement("div",{className:"filter-button"},this.state.filippa||this.state.tiger||this.state.lacoste||this.state.lindeberg||this.state.tga||this.state.glory||this.state.lyle||this.state.oscar||this.state.peak||this.state.tretorn||this.state.coats||this.state.boots||this.state.accessories?m.a.createElement("div",{className:"clear-filter",onClick:t},"Clear Filters"):null)),m.a.createElement("div",{className:"products"},m.a.createElement("div",{className:"grid-container"},void 0!==e?e.map((function(e){return m.a.createElement(d,{key:e.id,data:e})})):m.a.createElement("p",null,"You need to change the filter."))))))}}]),t}(i.Component);t.default=f}}]);
//# sourceMappingURL=8.6f10c441.chunk.js.map