(function(){var f="Edge",k="function",m="object",n,p=this,q=function(a){var b=typeof a;if(b==m)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return m;if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return k}else return"null";else if(b==k&&"undefined"==typeof a.call)return m;return b},r=function(a){return"string"==typeof a},t=function(a,b){function c(){}c.prototype=b.prototype;a.ca=b.prototype;a.prototype=new c;a.ba=function(a,c,g){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}};var u=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};t(u,Error);var aa=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},v=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},w=function(a,b){return a<b?-1:a>b?1:0};var x=function(a,b){b.unshift(a);u.call(this,aa.apply(null,b));b.shift()};t(x,u);var y=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),g=d;else a&&(e+=": "+a,g=b);throw new x(""+e,g||[]);},z=function(a,b,c){a||y("",null,b,Array.prototype.slice.call(arguments,2));return a},A=function(a,b,c){"number"==typeof a||y("Expected number but got %s: %s.",[q(a),a],b,Array.prototype.slice.call(arguments,2));return a};var ba=Array.prototype.indexOf?function(a,b,c){z(null!=a.length);return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(r(a))return r(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},B=function(a){return Array.prototype.concat.apply(Array.prototype,arguments)},ca=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var C;a:{var D=p.navigator;if(D){var E=D.userAgent;if(E){C=E;break a}}C=""}var F=function(a){return-1!=C.indexOf(a)};var da=function(a,b,c,d){d=d?d(b):b;return Object.prototype.hasOwnProperty.call(a,d)?a[d]:a[d]=c(b)};var ea=F("Opera"),G=F("Trident")||F("MSIE"),fa=F(f),H=F("Gecko")&&!(-1!=C.toLowerCase().indexOf("webkit")&&!F(f))&&!(F("Trident")||F("MSIE"))&&!F(f),ga=-1!=C.toLowerCase().indexOf("webkit")&&!F(f),I=function(){var a=p.document;return a?a.documentMode:void 0},J;
a:{var K="",L=function(){var a=C;if(H)return/rv\:([^\);]+)(\)|;)/.exec(a);if(fa)return/Edge\/([\d\.]+)/.exec(a);if(G)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ga)return/WebKit\/(\S+)/.exec(a);if(ea)return/(?:Version)[ \/]?(\S+)/.exec(a)}();L&&(K=L?L[1]:"");if(G){var M=I();if(null!=M&&M>parseFloat(K)){J=String(M);break a}}J=K}
var N=J,ha={},ia=function(a){return da(ha,a,function(){for(var b=0,c=v(String(N)).split("."),d=v(String(a)).split("."),e=Math.max(c.length,d.length),g=0;0==b&&g<e;g++){var h=c[g]||"",l=d[g]||"";do{h=/(\d*)(\D*)(.*)/.exec(h)||["","","",""];l=/(\d*)(\D*)(.*)/.exec(l)||["","","",""];if(0==h[0].length&&0==l[0].length)break;b=w(0==h[1].length?0:parseInt(h[1],10),0==l[1].length?0:parseInt(l[1],10))||w(0==h[2].length,0==l[2].length)||w(h[2],l[2]);h=h[3];l=l[3]}while(0==b)}return 0<=b})},ja;var ka=p.document;
ja=ka&&G?I()||("CSS1Compat"==ka.compatMode?parseInt(N,10):5):void 0;!H&&!G||G&&9<=Number(ja)||H&&ia("1.9.1");G&&ia("9");var la=function(a,b){return r(b)?a.getElementById(b):b},ma=function(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var g=d=0,h;h=b[g];g++)e==h.nodeName&&(a[d++]=h);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(g=d=0;h=b[g];g++){var e=h.className,l;if(l=typeof e.split==k)l=0<=ba(e.split(/\s+/),
c);l&&(a[d++]=h)}a.length=d;return a}return b},na=function(a){z(a,"Node cannot be null or undefined.");return 9==a.nodeType?a:a.ownerDocument||a.document};var O=function(a){this.D=a};O.prototype.serialize=function(a){var b=[];this.H(a,b);return b.join("")};
O.prototype.H=function(a,b){if(null==a)b.push("null");else{if(typeof a==m){if("array"==q(a)){this.serializeArray(a,b);return}if(a instanceof String||a instanceof Number||a instanceof Boolean)a=a.valueOf();else{this.Z(a,b);return}}switch(typeof a){case "string":this.L(a,b);break;case "number":this.Y(a,b);break;case "boolean":b.push(String(a));break;case k:b.push("null");break;default:throw Error("Unknown type: "+typeof a);}}};
var oa={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},pa=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;O.prototype.L=function(a,b){b.push('"',a.replace(pa,function(a){var b=oa[a];b||(b="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),oa[a]=b);return b}),'"')};O.prototype.Y=function(a,b){b.push(isFinite(a)&&!isNaN(a)?String(a):"null")};
O.prototype.serializeArray=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++)b.push(d),d=a[e],this.H(this.D?this.D.call(a,String(e),d):d,b),d=",";b.push("]")};O.prototype.Z=function(a,b){b.push("{");var c="",d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];typeof e!=k&&(b.push(c),this.L(d,b),b.push(":"),this.H(this.D?this.D.call(a,d,e):e,b),c=",")}b.push("}")};var qa="StopIteration"in p?p.StopIteration:{message:"StopIteration",stack:""},P=function(){};P.prototype.next=function(){throw qa;};P.prototype.T=function(){return this};var Q=function(a,b){this.g={};this.c=[];this.F=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};n=Q.prototype;n.o=function(){this.A();for(var a=[],b=0;b<this.c.length;b++)a.push(this.g[this.c[b]]);return a};n.v=function(){this.A();return this.c.concat()};n.u=function(a){return R(this.g,a)};
n.remove=function(a){return R(this.g,a)?(delete this.g[a],this.b--,this.F++,this.c.length>2*this.b&&this.A(),!0):!1};n.A=function(){if(this.b!=this.c.length){for(var a=0,b=0;a<this.c.length;){var c=this.c[a];R(this.g,c)&&(this.c[b++]=c);a++}this.c.length=b}if(this.b!=this.c.length){for(var d={},b=a=0;a<this.c.length;)c=this.c[a],R(d,c)||(this.c[b++]=c,d[c]=1),a++;this.c.length=b}};n.get=function(a,b){return R(this.g,a)?this.g[a]:b};
n.set=function(a,b){R(this.g,a)||(this.b++,this.c.push(a),this.F++);this.g[a]=b};n.addAll=function(a){var b;if(a instanceof Q)b=a.v(),a=a.o();else{b=[];var c=0,d;for(d in a)b[c++]=d;c=[];d=0;for(var e in a)c[d++]=a[e];a=c}for(e=0;e<b.length;e++)this.set(b[e],a[e])};n.forEach=function(a,b){for(var c=this.v(),d=0;d<c.length;d++){var e=c[d],g=this.get(e);a.call(b,g,e,this)}};n.clone=function(){return new Q(this)};
n.T=function(a){this.A();var b=0,c=this.F,d=this,e=new P;e.next=function(){if(c!=d.F)throw Error("The map has changed since the iterator was created");if(b>=d.c.length)throw qa;var e=d.c[b++];return a?e:d.g[e]};return e};var R=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var ra=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,sa=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e,g=null;0<=d?(e=a[c].substring(0,d),g=a[c].substring(d+1)):e=a[c];b(e,g?decodeURIComponent(g.replace(/\+/g," ")):"")}}};var S=function(a,b){this.B=this.J=this.s="";this.C=null;this.G=this.K="";this.f=this.X=!1;var c;a instanceof S?(this.f=void 0!==b?b:a.f,this.R(a.s),this.S(a.J),this.M(a.B),this.O(a.C),this.setPath(a.getPath()),this.P(a.h.clone()),this.N(a.G)):a&&(c=String(a).match(ra))?(this.f=!!b,this.R(c[1]||"",!0),this.S(c[2]||"",!0),this.M(c[3]||"",!0),this.O(c[4]),this.setPath(c[5]||"",!0),this.P(c[6]||"",!0),this.N(c[7]||"",!0)):(this.f=!!b,this.h=new T(null,null,this.f))};n=S.prototype;
n.toString=function(){var a=[],b=this.s;b&&a.push(U(b,ta,!0),":");var c=this.B;if(c||"file"==b)a.push("//"),(b=this.J)&&a.push(U(b,ta,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.C,null!=c&&a.push(":",String(c));if(c=this.getPath())this.W()&&"/"!=c.charAt(0)&&a.push("/"),a.push(U(c,"/"==c.charAt(0)?ua:va,!0));(c=this.U())&&a.push("?",c);(c=this.G)&&a.push("#",U(c,wa));return a.join("")};n.clone=function(){return new S(this)};
n.R=function(a,b){this.j();if(this.s=b?V(a,!0):a)this.s=this.s.replace(/:$/,"");return this};n.S=function(a,b){this.j();this.J=b?V(a):a;return this};n.M=function(a,b){this.j();this.B=b?V(a,!0):a;return this};n.W=function(){return!!this.B};n.O=function(a){this.j();if(a){a=Number(a);if(isNaN(a)||0>a)throw Error("Bad port number "+a);this.C=a}else this.C=null;return this};n.getPath=function(){return this.K};n.setPath=function(a,b){this.j();this.K=b?V(a,!0):a;return this};
n.P=function(a,b){this.j();a instanceof T?(this.h=a,this.h.I(this.f)):(b||(a=U(a,xa)),this.h=new T(a,null,this.f));return this};n.U=function(){return this.h.toString()};n.aa=function(a,b){this.j();this.h.set(a,b);return this};n.V=function(a){return this.h.get(a)};n.N=function(a,b){this.j();this.G=b?V(a):a;return this};n.j=function(){if(this.X)throw Error("Tried to modify a read-only Uri");};n.I=function(a){this.f=a;this.h&&this.h.I(a);return this};
var V=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},U=function(a,b,c){return r(a)?(a=encodeURI(a).replace(b,ya),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},ya=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},ta=/[#\/\?@]/g,va=/[\#\?:]/g,ua=/[\#\?]/g,xa=/[\#\?@]/g,wa=/#/g,T=function(a,b,c){this.b=this.a=null;this.i=a||null;this.f=!!c};n=T.prototype;
n.l=function(){if(!this.a&&(this.a=new Q,this.b=0,this.i)){var a=this;sa(this.i,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)})}};n.add=function(a,b){this.l();this.w();a=this.m(a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b=A(this.b)+1;return this};n.remove=function(a){this.l();a=this.m(a);return this.a.u(a)?(this.w(),this.b=A(this.b)-this.a.get(a).length,this.a.remove(a)):!1};n.u=function(a){this.l();a=this.m(a);return this.a.u(a)};
n.v=function(){this.l();for(var a=this.a.o(),b=this.a.v(),c=[],d=0;d<b.length;d++)for(var e=a[d],g=0;g<e.length;g++)c.push(b[d]);return c};n.o=function(a){this.l();var b=[];if(r(a))this.u(a)&&(b=B(b,this.a.get(this.m(a))));else{a=this.a.o();for(var c=0;c<a.length;c++)b=B(b,a[c])}return b};n.set=function(a,b){this.l();this.w();a=this.m(a);this.u(a)&&(this.b=A(this.b)-this.a.get(a).length);this.a.set(a,[b]);this.b=A(this.b)+1;return this};
n.get=function(a,b){a=a?this.o(a):[];return 0<a.length?String(a[0]):b};n.setValues=function(a,b){this.remove(a);0<b.length&&(this.w(),this.a.set(this.m(a),ca(b)),this.b=A(this.b)+b.length)};n.toString=function(){if(this.i)return this.i;if(!this.a)return"";for(var a=[],b=this.a.v(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.o(d),g=0;g<d.length;g++){var h=e;""!==d[g]&&(h+="="+encodeURIComponent(String(d[g])));a.push(h)}return this.i=a.join("&")};n.w=function(){this.i=null};
n.clone=function(){var a=new T;a.i=this.i;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};n.m=function(a){a=String(a);this.f&&(a=a.toLowerCase());return a};n.I=function(a){a&&!this.f&&(this.l(),this.w(),this.a.forEach(function(a,c){var b=c.toLowerCase();c!=b&&(this.remove(c),this.setValues(b,a))},this));this.f=a};var za=function(a,b,c){var d;a:{d=na(b);if(d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))){d=d[a]||d.getPropertyValue(a)||"";break a}d=""}d=d||(b.currentStyle?b.currentStyle[a]:null)||b.style&&b.style[a];return null==d||"inherit"==d||"transparent"==d||"rgba(0, 0, 0, 0)"==d?(d=na(b),b!=d.body&&b.parentNode?W(a,b.parentNode):c):d},W=function(a,b){return za(a,b,"rgb(0, 0, 0)")},Aa=function(){for(var a=ma(document,"iframe","blogger-iframe-colorize",void 0),b=
0;b<a.length;b++){var c=a[b],d=la(document,c.id+"-src"),e=d.href;if(!(new S(e)).V("skin")){var g=W("color",c),h=W("backgroundColor",c),l=za("fontFamily",c,"serif");d.href="https://www.blogger.com/unvisited-link-"+(new Date).valueOf();var Ca=W("color",d),d=d.href=e,e=encodeURIComponent,g=(new O(void 0)).serialize({color:g,backgroundColor:h,unvisitedLinkColor:Ca,fontFamily:l}),e=d+("#"+e(g))}c.src=e}};var Ba=!G&&!(F("Safari")&&!((F("Chrome")||F("CriOS"))&&!F(f)||F("Coast")||F("Opera")||F(f)||F("Silk")||F("Android")));var Da=-1;var Ea=function(){Da=Math.floor(1E7*Math.random());for(var a=ma(document,"iframe","blogger-comment-from-post",void 0),b=0;b<a.length;b++){var c=la(document,a[b].id+"-src"),d=new S(c.href);d.aa("blogspotRpcToken",Da);c.href=d.toString()}Aa();a=function(a){if(0==a.data.indexOf("set-comment-editor-height")){var b=document.getElementById("comment-editor");b.height=a.data.substring(26);Ba&&b.dataset?b.dataset.resized=!0:b.setAttribute("data-"+"resized".replace(/([A-Z])/g,"-$1").toLowerCase(),!0)}};window.addEventListener?
window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)},X=["BLOG_CMT_createIframe"],Y=p;X[0]in Y||!Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Ea?Y=Y[Z]&&Object.prototype.hasOwnProperty.call(Y,Z)?Y[Z]:Y[Z]={}:Y[Z]=Ea;}).call(this);
