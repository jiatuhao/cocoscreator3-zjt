System.register(["./coordinates-converts-utils-bf8713a9.js","./index-6f89fc06.js"],(function(n){"use strict";var r;return{setters:[function(n){r=n.b0},function(){}],execute:function(){function t(n,r,t,e){var i=(e.x-t.x)*(n.y-t.y)-(e.y-t.y)*(n.x-t.x),x=(r.x-n.x)*(n.y-t.y)-(r.y-n.y)*(n.x-t.x),y=(e.y-t.y)*(r.x-n.x)-(e.x-t.x)*(r.y-n.y);if(0!==y){var u=i/y,o=x/y;if(u>=0&&u<=1&&o>=0&&o<=1)return!0}return!1}var e=new r,i=new r,x=new r,y=new r;function u(n,r,e){for(var i=e.length,x=0;x<i;++x)if(t(n,r,e[x],e[(x+1)%i]))return!0;return!1}function o(n,r){for(var t=!1,e=n.x,i=n.y,x=r.length,y=0,u=x-1;y<x;u=y++){var o=r[y].x,f=r[y].y,c=r[u].x,a=r[u].y;f>i!=a>i&&e<(c-o)*(i-f)/(a-f)+o&&(t=!t)}return t}function f(n,r,t,i){var x,y=t.x-r.x,u=t.y-r.y,o=y*y+u*u,f=((n.x-r.x)*y+(n.y-r.y)*u)/o;return x=i?o?f<0?r:f>1?t:e.set(r.x+f*y,r.y+f*u):r:e.set(r.x+f*y,r.y+f*u),y=n.x-x.x,u=n.y-x.y,Math.sqrt(y*y+u*u)}var c=n("I",(function(){}));c.lineLine=t,c.lineRect=function(n,r,u){var o=e.set(u.x,u.y),f=i.set(u.x,u.yMax),c=x.set(u.xMax,u.yMax),a=y.set(u.xMax,u.y);return!!(t(n,r,o,f)||t(n,r,f,c)||t(n,r,c,a)||t(n,r,a,o))},c.linePolygon=u,c.rectRect=function(n,r){var t=n.x,e=n.y,i=n.x+n.width,x=n.y+n.height,y=r.x,u=r.y,o=r.x+r.width,f=r.y+r.height;return t<=o&&i>=y&&e<=f&&x>=u},c.rectPolygon=function(n,r){var t=e.set(n.x,n.y),f=i.set(n.x,n.yMax),c=x.set(n.xMax,n.yMax),a=y.set(n.xMax,n.y);if(u(t,f,r))return!0;if(u(f,c,r))return!0;if(u(c,a,r))return!0;if(u(a,t,r))return!0;for(var s=0,l=r.length;s<l;++s)if(n.contains(r[s]))return!0;return!!(o(t,r)||o(f,r)||o(c,r)||o(a,r))},c.rectCircle=function(n,r,t){var e=r.x,i=r.y,x=n.x,y=n.y,u=n.width,o=n.height,f=e,c=i;e<x?f=x:e>x+u&&(f=x+u),i<y?c=y:i>y+o&&(c=y+o);var a=e-f,s=i-c;return Math.sqrt(a*a+s*s)<=t},c.polygonPolygon=function(n,r){var t,e;for(t=0,e=n.length;t<e;++t)if(u(n[t],n[(t+1)%e],r))return!0;for(t=0,e=r.length;t<e;++t)if(o(r[t],n))return!0;for(t=0,e=n.length;t<e;++t)if(o(n[t],r))return!0;return!1},c.circleCircle=function(n,t,e,i){return r.distance(n,e)<t+i},c.polygonCircle=function(n,r,t){var e=r;if(o(e,n))return!0;for(var i=0,x=n.length;i<x;i++)if(f(e,0===i?n[n.length-1]:n[i-1],n[i],!0)<t)return!0;return!1},c.pointInPolygon=o,c.pointLineDistance=f}}}));
