System.register(["./coordinates-converts-utils-bf8713a9.js","./index-6f89fc06.js","./event-enum-5a5aa40e.js","./deprecated-3.0.0-f3f53c89.js","./renderable-component-658e90bd.js","./texture-buffer-pool-d3259f64.js","./transform-utils-1f4a2037.js","./view-7d20208a.js","./screen-d46ce30a.js","./json-asset-0797cbb7.js","./camera-component-f1234106.js","./find-5191dd26.js","./factory-9595a1ce.js","./index-ef4fe053.js","./sprite-frame-30c057cb.js","./sprite-6803ade1.js","./renderable-2d-386fc016.js","./graphics-1e47dff7.js","./vertex-format-dd7257e2.js","./deprecated-ed0d00e0.js","./deprecated-a9ea7a0c.js","./collision-matrix-fb9744d2.js","./hinge-joint-2d-c6e2e6f0.js","./intersection-2d-410a22f7.js"],(function(){"use strict";var t,n,i,e,o,s,r,a,c,l,h,u,d,f,p,g,w,y,v;return{setters:[function(l){t=l.e4,n=l.be,i=l.e3,e=l.b0,o=l.b9,s=l.e,r=l.bg,a=l.bU,c=l.b2},function(t){l=t.f},function(){},function(){},function(t){h=t.N},function(){},function(){},function(){},function(){},function(){},function(){},function(t){u=t.f},function(){},function(){},function(){},function(){},function(){},function(t){d=t.G},function(){},function(){},function(t){f=t.C},function(){},function(t){p=t.e,g=t.C,w=t.d,y=t.s},function(t){v=t.I}],execute:function(){var _=function(){function i(){this._collider=null,this._worldAabb=new n}var e=i.prototype;return e.apply=function(){},e.initialize=function(t){this._collider=t},e.onLoad=function(){},e.onEnable=function(){p.instance.physicsWorld.addShape(this)},e.onDisable=function(){p.instance.physicsWorld.removeShape(this)},e.start=function(){},e.update=function(){},e.containsPoint=function(t){return!!this.worldAABB.contains(t)},e.intersectsRect=function(t){return!!this.worldAABB.intersects(t)},e.onGroupChanged=function(){p.instance.physicsWorld.updateShapeGroup(this)},t(i,[{key:"impl",get:function(){return null}},{key:"collider",get:function(){return this._collider}},{key:"worldAABB",get:function(){return this._worldAabb}}]),i}(),b=function(n){function o(){for(var t,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(t=n.call.apply(n,[this].concat(o))||this)._worldPoints=[new e,new e,new e,new e],t}i(o,n);var s=o.prototype;return s.update=function(){var t=this._worldAabb,n=this.collider,i=n.size,e=n.offset;t.x=e.x-i.width/2,t.y=e.y-i.height/2,t.width=i.width,t.height=i.height;var o=this._worldPoints,s=o[0],r=o[1],a=o[2],c=o[3];t.transformMat4ToPoints(n.node.worldMatrix,s,r,a,c);var l=Math.min(s.x,r.x,a.x,c.x),h=Math.min(s.y,r.y,a.y,c.y),u=Math.max(s.x,r.x,a.x,c.x),d=Math.max(s.y,r.y,a.y,c.y);t.x=l,t.y=h,t.width=u-l,t.height=d-h},s.containsPoint=function(t){return!!this.worldAABB.contains(t)&&v.pointInPolygon(t,this.worldPoints)},s.intersectsRect=function(t){return!!this.worldAABB.intersects(t)&&v.rectPolygon(t,this.worldPoints)},t(o,[{key:"worldPoints",get:function(){return this._worldPoints}}]),o}(_),x=new e,P=new o,A=function(n){function o(){for(var t,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(t=n.call.apply(n,[this].concat(o))||this)._worldPosition=new e,t._worldRadius=0,t}i(o,n);var s=o.prototype;return s.update=function(){var t=this._worldAabb,n=this.collider,i=n.node.getWorldMatrix(P);e.transformMat4(x,n.offset,i);var o=this._worldPosition;o.x=x.x,o.y=x.y,i.m12=i.m13=0,x.x=n.radius,x.y=0,e.transformMat4(x,x,i);var s=this._worldRadius=x.length();t.x=o.x-s,t.y=o.y-s,t.width=2*s,t.height=2*s},s.containsPoint=function(t){return!!this.worldAABB.contains(t)&&e.subtract(x,t,this.worldPosition).length()<this.worldRadius},s.intersectsRect=function(t){return!!this.worldAABB.intersects(t)&&v.rectCircle(t,this.worldPosition,this.worldRadius)},t(o,[{key:"worldPosition",get:function(){return this._worldPosition}},{key:"worldRadius",get:function(){return this._worldRadius}}]),o}(_),m=new e,B=function(n){function o(){for(var t,i=arguments.length,e=new Array(i),o=0;o<i;o++)e[o]=arguments[o];return(t=n.call.apply(n,[this].concat(e))||this)._worldPoints=[],t}i(o,n);var s=o.prototype;return s.update=function(){var t=this._worldAabb,n=this.collider,i=n.points,o=n.offset,s=n.node.worldMatrix,r=this._worldPoints;r.length=i.length;for(var a=1e6,c=1e6,l=-1e6,h=-1e6,u=0,d=i.length;u<d;u++){r[u]||(r[u]=new e),m.x=i[u].x+o.x,m.y=i[u].y+o.y,e.transformMat4(m,m,s);var f=m.x,p=m.y;r[u].x=f,r[u].y=p,f>l&&(l=f),f<a&&(a=f),p>h&&(h=p),p<c&&(c=p)}t.x=a,t.y=c,t.width=l-a,t.height=h-c},s.containsPoint=function(t){return!!this.worldAABB.contains(t)&&v.pointInPolygon(t,this.worldPoints)},s.intersectsRect=function(t){return!!this.worldAABB.intersects(t)&&v.rectPolygon(t,this.worldPoints)},t(o,[{key:"worldPoints",get:function(){return this._worldPoints}}]),o}(_),C=function(){function t(t,n){this.shape1=void 0,this.shape2=void 0,this.testFunc=void 0,this.touching=!1,this.type=g.None,this.shape1=t,this.shape2=n,this.touching=!1;var i=t instanceof b||t instanceof B,e=n instanceof b||n instanceof B,o=t instanceof A,r=n instanceof A;i&&e?this.testFunc=v.polygonPolygon:o&&r?this.testFunc=v.circleCircle:i&&r?this.testFunc=v.polygonCircle:o&&e?(this.testFunc=v.polygonCircle,this.shape1=n,this.shape2=t):s("Can not find contact for builtin shape: "+t.constructor.name+", "+n.constructor.name)}var n=t.prototype;return n.test=function(){var t=this.shape1,n=this.shape2;return!!t.worldAABB.intersects(n.worldAABB)&&(this.testFunc===v.polygonPolygon?v.polygonPolygon(t.worldPoints,n.worldPoints):this.testFunc===v.circleCircle?v.circleCircle(t.worldPosition,t.worldRadius,n.worldPosition,n.worldRadius):this.testFunc===v.polygonCircle&&v.polygonCircle(t.worldPoints,n.worldPosition,n.worldRadius))},n.updateState=function(){var t=this.test(),n=g.None;return t&&!this.touching?(this.touching=!0,n=g.BEGIN_CONTACT):!t&&this.touching&&(this.touching=!1,n=g.END_CONTACT),this.type=n,n},t}(),j=[],S=[],M=function(){function n(){this._contacts=[],this._shapes=[],this._debugGraphics=null,this._debugDrawFlags=0}var i=n.prototype;return i.shouldCollide=function(t,n){var i=t.collider,e=n.collider,o=p.instance.collisionMatrix;return i!==e&&i.node!==e.node&&o[i.group]&o[e.group]},i.addShape=function(t){var n=this._shapes;if(-1===n.indexOf(t)){for(var i=0,e=n.length;i<e;i++){var o=n[i];if(this.shouldCollide(t,o)){var s=new C(t,o);this._contacts.push(s)}}n.push(t)}},i.removeShape=function(t){var n=this._shapes,i=n.indexOf(t);if(i>=0){n.splice(i,1);for(var e=this._contacts,o=e.length-1;o>=0;o--){var s=e[o];s.shape1!==t&&s.shape2!==t||(s.touching&&this._emitCollide(s,g.END_CONTACT),e.splice(o,1))}}},i.updateShapeGroup=function(t){this.removeShape(t),this.addShape(t)},i.step=function(){for(var t=this._shapes,n=0,i=t.length;n<i;n++)t[n].update();var e=this._contacts;j.length=0;for(var o=0,s=e.length;o<s;o++)e[o].updateState()!==g.None&&j.push(e[o]);for(var r=0,a=j.length;r<a;r++){var c=j[r];this._emitCollide(c)}},i.drawDebug=function(){if(this._debugDrawFlags){this._checkDebugDrawValid();var t=this._debugGraphics;if(t){t.clear();for(var n=this._shapes,i=0,e=n.length;i<e;i++){var o=n[i];if(t.strokeColor=r.WHITE,o instanceof b||o instanceof B){var s=o.worldPoints;if(s.length>0){t.moveTo(s[0].x,s[0].y);for(var a=1;a<s.length;a++)t.lineTo(s[a].x,s[a].y);t.close(),t.stroke()}}else o instanceof A&&(t.circle(o.worldPosition.x,o.worldPosition.y,o.worldRadius),t.stroke());if(this._debugDrawFlags&w.Aabb){var c=o.worldAABB;t.strokeColor=r.BLUE,t.moveTo(c.xMin,c.yMin),t.lineTo(c.xMin,c.yMax),t.lineTo(c.xMax,c.yMax),t.lineTo(c.xMax,c.yMin),t.close(),t.stroke()}}}}},i._emitCollide=function(t,n){n=n||t.type;var i=t.shape1.collider,e=t.shape2.collider;p.instance.emit(n,i,e),i.emit(n,i,e),e.emit(n,e,i)},i._checkDebugDrawValid=function(){if(!this._debugGraphics||!this._debugGraphics.isValid){var t=u("Canvas");if(!t){var n=l.getScene();if(!n)return;(t=new h("Canvas")).addComponent(f),t.parent=n}var i=new h("PHYSICS_2D_DEBUG_DRAW");i._objFlags|=a.Flags.DontSave,i.parent=t,i.worldPosition=c.ZERO,this._debugGraphics=i.addComponent(d),this._debugGraphics.lineWidth=2}var e=this._debugGraphics.node.parent;this._debugGraphics.node.setSiblingIndex(e.children.length-1)},i.testPoint=function(t){var n=this._shapes;S.length=0;for(var i=0;i<n.length;i++){var e=n[i];e.containsPoint(t)&&S.push(e.collider)}return S},i.testAABB=function(t){var n=this._shapes;S.length=0;for(var i=0;i<n.length;i++){var e=n[i];e.intersectsRect(t)&&S.push(e.collider)}return S},i.impl=function(){return null},i.setGravity=function(){},i.setAllowSleep=function(){},i.syncPhysicsToScene=function(){},i.syncSceneToPhysics=function(){},i.raycast=function(){return[]},t(n,[{key:"debugDrawFlags",get:function(){return this._debugDrawFlags},set:function(t){this._debugDrawFlags=t}}]),n}();y("builtin",{PhysicsWorld:M,RigidBody:null,BoxShape:b,CircleShape:A,PolygonShape:B,MouseJoint:null,DistanceJoint:null,SpringJoint:null,RelativeJoint:null,SliderJoint:null,FixedJoint:null,WheelJoint:null,HingeJoint:null})}}}));
