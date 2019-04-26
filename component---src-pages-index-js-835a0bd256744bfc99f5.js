(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(155),o=a(152),l=(a(168),a(7)),i=a.n(l),c=a(169),u=a.n(c),d=a(159),f=a.n(d),p=a(160),m=a.n(p),v=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.a.createElement(u.a,{className:"mb-1"},r.a.createElement(f.a,null,r.a.createElement(m.a,{sm:2,className:"text-center my-auto medal"},this.props.PlaceImage&&r.a.createElement("img",{src:this.props.PlaceImage,alt:this.props.Place})),r.a.createElement(m.a,{sm:4,className:"my-auto"},this.props.Name),r.a.createElement(m.a,{sm:2,className:"my-auto text-center"},this.props.FreeCompany),r.a.createElement(m.a,{sm:2,className:"my-auto text-right"},this.props.Score),r.a.createElement(m.a,{sm:2,className:"my-auto"},r.a.createElement("img",{className:"float-right img-thumbnail",src:this.props.Avatar,alt:this.props.Name,style:{width:"96px",height:"96px"}}))))},t}(r.a.Component),g=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:!0,standings:[],cachedStandings:[],allStandingsVisible:!1},fetch(a.props.GetRankingsUrl).then(function(e){return e.json()}).then(function(e){a.setState({cachedStandings:e,standings:a.state.standings.concat(e.slice(0,10)),loading:!1})}).catch(function(e){return console.log(e)}),a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;window.onscroll=function(){if(!(0===e.state.cachedStandings.length||0===e.state.standings.length||e.state.allStandingsVisible||window.innerHeight+document.documentElement.scrollTop<document.documentElement.offsetHeight)){e.setState({loading:!0});var t=e.state.standings.length+10,a=!1;e.state.standings.length+10>e.state.cachedStandings&&(t=e.state.cachedStandings.length,a=!0),e.setState({standings:e.state.standings.concat(e.state.cachedStandings.slice(e.state.standings.length,t)),loading:!1,allStandingsVisible:a})}}},a.render=function(){var e=["./img/LargeGold.png","./img/LargeSilver.png","./img/LargeCopper.png"],t=this.state.standings.map(function(t){return r.a.createElement(v,{key:t.place,Name:t.name,Place:t.place,PlaceImage:e[t.place-1],Score:t.score,Avatar:t.avatar,FreeCompany:t.freeCompany})});return r.a.createElement("div",null,r.a.createElement(f.a,{className:"mb-1 descriptor-bar"},r.a.createElement(m.a,{sm:2,className:"text-center"},"Rank"),r.a.createElement(m.a,{sm:4},"Name"),r.a.createElement(m.a,{sm:2,className:"text-center"},"Free Company"),r.a.createElement(m.a,{sm:2,className:"text-right"},"Score"),r.a.createElement(m.a,{sm:2})),t,this.state.loading&&r.a.createElement("div",{className:"text-center"},"Loading..."))},t}(r.a.Component);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement(g,{GetRankingsUrl:"https://gcstanding.azurewebsites.net/Api/GetRankings"}))}},148:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},149:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===s)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Grand Company Standings"}}}}},151:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),s=a(4),o=a.n(s),l=a(55),i=a(2),c=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,a){"use strict";var n=a(153),r=a(0),s=a.n(r),o=a(4),l=a.n(o),i=a(156),c=a.n(i);function u(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,l=e.title,i=n.data.site,u=t||i.siteMetadata.description;return s.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:u}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[],description:""},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.object),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Grand Company Standings",description:"A site for viewing filtered Grand Company standings per week based on Final Fantasy XIV's The Lodestone reporting tools.",author:"@ZPanic0"}}}}},154:function(e,t,a){"use strict";var n=a(158),r=a(8);t.__esModule=!0,t.useBootstrapPrefix=function(e,t){var a=(0,i.useContext)(c);return e||a.get(t)||t},t.createBootstrapComponent=function(e,t){"string"==typeof t&&(t={prefix:t});var a=e.prototype&&e.prototype.isReactComponent,n=t,r=n.prefix,o=n.forwardRefAs,u=void 0===o?a?"ref":"innerRef":o;return(0,l.default)(function(t,a){var n=(0,s.default)({},t);n[u]=a;var o=(0,i.useContext)(c);return i.default.createElement(e,(0,s.default)({},n,{bsPrefix:n.bsPrefix||o.get(r)||r}))},{displayName:"Bootstrap("+(e.displayName||e.name)+")"})},t.default=t.ThemeConsumer=void 0;var s=r(a(74)),o=r(a(7)),l=r(a(170)),i=n(a(0)),c=i.default.createContext(new Map),u=c.Consumer,d=c.Provider;t.ThemeConsumer=u;var f=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).prefixes=new Map,Object.keys(t.props.prefixes).forEach(function(e){t.prefixes.set(e,t.props.prefixes[e])}),t}return(0,o.default)(t,e),t.prototype.render=function(){return i.default.createElement(d,{value:this.prefixes},this.props.children)},t}(i.default.Component);t.default=f},155:function(e,t,a){"use strict";var n=a(150),r=a(0),s=a.n(r),o=a(4),l=a.n(o),i=a(33),c=a.n(i),u=(a(148),s.a.createContext({})),d=function(e){return s.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func};var f=function(e){var t=e.siteTitle;return s.a.createElement("header",null,s.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"},s.a.createElement("div",{className:"container"},s.a.createElement(c.a,{to:"/",className:"navbar-brand"},t),s.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{className:"navbar-toggler-icon"})),s.a.createElement("div",{className:"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse"},s.a.createElement("ul",{className:"navbar-nav flex-grow-1"},s.a.createElement("li",{className:"nav-item"},s.a.createElement(c.a,{to:"/",className:"nav-link text-dark"},"Home")),s.a.createElement("li",{className:"nav-item"},s.a.createElement(c.a,{to:"/privacy",className:"nav-link text-dark"},"Privacy")))))))};f.propTypes={siteTitle:l.a.string},f.defaultProps={siteTitle:""};var p=f,m=(a(143),function(e){var t=e.children;return s.a.createElement(d,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(p,{siteTitle:e.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},s.a.createElement("main",null,t)))},data:n})});m.propTypes={children:l.a.node.isRequired};t.a=m},158:function(e,t){e.exports=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}},159:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r=n(a(74)),s=n(a(75)),o=n(a(7)),l=n(a(149)),i=n(a(0)),c=a(154),u=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.default)(t,e),t.prototype.render=function(){var e=this.props,t=e.bsPrefix,a=e.noGutters,n=e.as,o=e.className,c=(0,s.default)(e,["bsPrefix","noGutters","as","className"]);return i.default.createElement(n,(0,r.default)({},c,{className:(0,l.default)(o,t,a&&"no-gutters")}))},t}(i.default.Component);u.defaultProps={as:"div",noGutters:!1};var d=(0,c.createBootstrapComponent)(u,"row");t.default=d,e.exports=t.default},160:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r=n(a(74)),s=n(a(75)),o=n(a(149)),l=n(a(0)),i=a(154),c=["xl","lg","md","sm","xs"],u=l.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,u=e.as,d=(0,s.default)(e,["bsPrefix","className","as"]),f=(0,i.useBootstrapPrefix)(a,"col"),p=[],m=[];return c.forEach(function(e){var t,a,n,r=d[e];if(delete d[e],null!=r&&"object"==typeof r){var s=r.span;t=void 0===s||s,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";null!=t&&p.push(!0===t?""+f+o:""+f+o+"-"+t),null!=n&&m.push("order"+o+"-"+n),null!=a&&m.push("offset"+o+"-"+a)}),p.length||p.push(f),l.default.createElement(u,(0,r.default)({},d,{ref:t,className:o.default.apply(void 0,[n].concat(p,m))}))});u.displayName="Col",u.defaultProps={as:"div"};var d=u;t.default=d,e.exports=t.default},168:function(e,t,a){var n=a(25).f,r=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})},169:function(e,t,a){"use strict";var n=a(158),r=a(8);t.__esModule=!0,t.default=void 0;var s=r(a(74)),o=r(a(75)),l=r(a(149)),i=n(a(0)),c=a(154),u=r(a(171)),d=r(a(173)),f=r(a(174)),p=r(a(175)),m=(0,d.default)("h5"),v=(0,d.default)("h6"),g=(0,u.default)("card-body"),h=i.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,r=e.bg,u=e.text,d=e.border,p=e.body,m=e.children,v=e.as,h=(0,o.default)(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=(0,c.useBootstrapPrefix)(a,"card"),b=(0,i.useMemo)(function(){return{cardHeaderBsPrefix:y+"-header"}},[y]);return i.default.createElement(f.default.Provider,{value:b},i.default.createElement(v,(0,s.default)({ref:t},h,{className:(0,l.default)(n,y,r&&"bg-"+r,u&&"text-"+u,d&&"border-"+d)}),p?i.default.createElement(g,null,m):m))});h.displayName="Card",h.defaultProps={as:"div",body:!1},h.Img=p.default,h.Title=(0,u.default)("card-title",{Component:m}),h.Subtitle=(0,u.default)("card-subtitle",{Component:v}),h.Body=g,h.Link=(0,u.default)("card-link",{Component:"a"}),h.Text=(0,u.default)("card-text",{Component:"p"}),h.Header=(0,u.default)("card-header"),h.Footer=(0,u.default)("card-footer"),h.ImgOverlay=(0,u.default)("card-img-overlay");var y=h;t.default=y,e.exports=t.default},170:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.propTypes,s=a.defaultProps,o=a.allowFallback,l=void 0!==o&&o,i=a.displayName,c=void 0===i?e.name||e.displayName:i,u=function(t,a){return e(t,a)};return Object.assign(r.default.forwardRef||!l?r.default.forwardRef(u):function(e){return u(e,null)},{displayName:c,propTypes:n,defaultProps:s})};var n,r=(n=a(0))&&n.__esModule?n:{default:n}},171:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=function(e,t){var a=void 0===t?{}:t,n=a.displayName,i=void 0===n?u(e):n,d=a.Component,f=void 0===d?"div":d,p=a.defaultProps,m=l.default.forwardRef(function(t,a){var n=t.className,i=t.bsPrefix,u=t.as,d=void 0===u?f:u,p=(0,s.default)(t,["className","bsPrefix","as"]),m=(0,c.useBootstrapPrefix)(i,e);return l.default.createElement(d,(0,r.default)({ref:a,className:(0,o.default)(n,m)},p))});return m.defaultProps=p,m.displayName=i,m};var r=n(a(74)),s=n(a(75)),o=n(a(149)),l=n(a(0)),i=n(a(172)),c=a(154),u=function(e){return e[0].toUpperCase()+(0,i.default)(e).slice(1)};e.exports=t.default},172:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e){return e.replace(n,function(e,t){return t.toUpperCase()})};var n=/-(.)/g;e.exports=t.default},173:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r=n(a(74)),s=n(a(0)),o=n(a(149));t.default=function(e){return s.default.forwardRef(function(t,a){return s.default.createElement("div",(0,r.default)({},t,{ref:a,className:(0,o.default)(t.className,e)}))})},e.exports=t.default},174:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r=n(a(0)).default.createContext(null);t.default=r,e.exports=t.default},175:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r=n(a(74)),s=n(a(75)),o=n(a(149)),l=n(a(0)),i=a(154),c=l.default.forwardRef(function(e,t){var a=e.bsPrefix,n=e.className,c=e.variant,u=e.as,d=(0,s.default)(e,["bsPrefix","className","variant","as"]),f=(0,i.useBootstrapPrefix)(a,"card-img");return l.default.createElement(u,(0,r.default)({ref:t,className:(0,o.default)(c?f+"-"+c:f,n)},d))});c.displayName="CardImg",c.defaultProps={as:"img",variant:null};var u=c;t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-835a0bd256744bfc99f5.js.map