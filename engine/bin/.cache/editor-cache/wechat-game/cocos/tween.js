System.register(["./coordinates-converts-utils-bf8713a9.js","./index-6f89fc06.js","./event-enum-5a5aa40e.js","./deprecated-3.0.0-f3f53c89.js","./renderable-component-658e90bd.js","./transform-utils-1f4a2037.js","./view-7d20208a.js","./screen-d46ce30a.js","./json-asset-0797cbb7.js","./camera-component-f1234106.js","./find-5191dd26.js","./factory-9595a1ce.js"],(function(t){"use strict";var n,e,i,r,o,s,a,c,u,h,l,_,p,f,g,v;return{setters:[function(t){n=t.f,e=t.l,i=t.c,r=t.bU,o=t.e3,s=t.e4,a=t.cl,c=t.e8,u=t.d,h=t.w,l=t.eo},function(t){_=t.f,p=t.D,f=t.k},function(){},function(){},function(t){g=t.d},function(t){v=t.b},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t({tween:q,tweenUtil:B});var d=0,A=function(){this.actions=[],this.target=null,this.actionIndex=0,this.currentAction=null,this.paused=!1,this.lock=!1},T=function(){function t(){this._hashTargets=new Map,this._arrayTargets=[],this._elementPool=[]}var o=t.prototype;return o._searchElementByTarget=function(t,n){for(var e=0;e<t.length;e++)if(n===t[e].target)return t[e];return null},o._getElement=function(t,n){var e=this._elementPool.pop();return e||(e=new A),e.target=t,e.paused=!!n,e},o._putElement=function(t){t.actions.length=0,t.actionIndex=0,t.currentAction=null,t.paused=!1,t.target=null,t.lock=!1,this._elementPool.push(t)},o.addAction=function(t,e,i){if(t&&e){null==e.uuid&&(e.uuid="_TWEEN_UUID_"+d++);var r=this._hashTargets.get(e);r?r.actions||(r.actions=[]):(r=this._getElement(e,i),this._hashTargets.set(e,r),this._arrayTargets.push(r)),r.target=e,r.actions.push(t),t.startWithTarget(e)}else n(1e3)},o.removeAllActions=function(){for(var t=this._arrayTargets,n=0;n<t.length;n++){var e=t[n];e&&this._putElement(e)}this._arrayTargets.length=0,this._hashTargets=new Map},o.removeAllActionsFromTarget=function(t){if(null!=t){var n=this._hashTargets.get(t);n&&(n.actions.length=0,this._deleteHashElement(n))}},o.removeAction=function(t){if(null!=t){var n=t.getOriginalTarget(),e=this._hashTargets.get(n);if(e)for(var i=0;i<e.actions.length;i++)if(e.actions[i]===t){e.actions.splice(i,1),e.actionIndex>=i&&e.actionIndex--;break}}},o._removeActionByTag=function(t,n,e){for(var i=0,r=n.actions.length;i<r;++i){var o=n.actions[i];if(o&&o.getTag()===t){if(e&&o.getOriginalTarget()!==e)continue;this._removeActionAtIndex(i,n);break}}},o.removeActionByTag=function(t,n){var r=this;t===e.Action.TAG_INVALID&&i(1002);var o=this._hashTargets;if(n){var s=o.get(n);s&&this._removeActionByTag(t,s,n)}else o.forEach((function(n){r._removeActionByTag(t,n)}))},o.getActionByTag=function(t,n){t===e.Action.TAG_INVALID&&i(1004);var r=this._hashTargets.get(n);if(r){if(null!=r.actions)for(var o=0;o<r.actions.length;++o){var s=r.actions[o];if(s&&s.getTag()===t)return s}i(1005,t)}return null},o.getNumberOfRunningActionsInTarget=function(t){var n=this._hashTargets.get(t);return n&&n.actions?n.actions.length:0},o.pauseTarget=function(t){var n=this._hashTargets.get(t);n&&(n.paused=!0)},o.resumeTarget=function(t){var n=this._hashTargets.get(t);n&&(n.paused=!1)},o.pauseAllRunningActions=function(){for(var t=[],n=this._arrayTargets,e=0;e<n.length;e++){var i=n[e];i&&!i.paused&&(i.paused=!0,t.push(i.target))}return t},o.resumeTargets=function(t){if(t)for(var n=0;n<t.length;n++)t[n]&&this.resumeTarget(t[n])},o.pauseTargets=function(t){if(t)for(var n=0;n<t.length;n++)t[n]&&this.pauseTarget(t[n])},o.purgeSharedManager=function(){e.director.getScheduler().unscheduleUpdate(this)},o._removeActionAtIndex=function(t,n){n.actions[t],n.actions.splice(t,1),n.actionIndex>=t&&n.actionIndex--,0===n.actions.length&&this._deleteHashElement(n)},o._deleteHashElement=function(t){var n=!1;if(t&&!t.lock&&this._hashTargets.get(t.target)){this._hashTargets.delete(t.target);for(var e=this._arrayTargets,i=0,r=e.length;i<r;i++)if(e[i]===t){e.splice(i,1);break}this._putElement(t),n=!0}return n},o.update=function(t){for(var n,e=this._arrayTargets,i=0;i<e.length;i++){this._currentTarget=e[i];var o=(n=this._currentTarget).target;if(o instanceof r&&!o.isValid)this.removeAllActionsFromTarget(o),i--;else{if(!n.paused&&n.actions){for(n.lock=!0,n.actionIndex=0;n.actionIndex<n.actions.length;n.actionIndex++)if(n.currentAction=n.actions[n.actionIndex],n.currentAction){if(n.currentAction.step(t*(n.currentAction._speedMethod?n.currentAction._speed:1)),n.currentAction&&n.currentAction.isDone()){n.currentAction.stop();var s=n.currentAction;n.currentAction=null,this.removeAction(s)}n.currentAction=null}n.lock=!1}0===n.actions.length&&this._deleteHashElement(n)&&i--}}},t}(),w=t("TweenSystem",function(t){function n(){for(var n,e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(n=t.call.apply(t,[this].concat(i))||this).actionMgr=new T,n}return o(n,t),n.prototype.postUpdate=function(t){this.actionMgr.update(t)},s(n,[{key:"ActionManager",get:function(){return this.actionMgr}}]),n}(f));w.ID="TWEEN",w.instance=void 0,_.on(p.EVENT_INIT,(function(){var t=new w;w.instance=t,_.registerSystem(w.ID,t,100)}));var y=function(){function t(){this.originalTarget=null,this.target=null,this.tag=t.TAG_INVALID}var n=t.prototype;return n.clone=function(){var n=new t;return n.originalTarget=null,n.target=null,n.tag=this.tag,n},n.isDone=function(){return!0},n.startWithTarget=function(t){this.originalTarget=t,this.target=t},n.stop=function(){this.target=null},n.step=function(){i(1006)},n.update=function(){i(1007)},n.getTarget=function(){return this.target},n.setTarget=function(t){this.target=t},n.getOriginalTarget=function(){return this.originalTarget},n.setOriginalTarget=function(t){this.originalTarget=t},n.getTag=function(){return this.tag},n.setTag=function(t){this.tag=t},n.reverse=function(){return i(1008),null},n.retain=function(){},n.release=function(){},t}();y.TAG_INVALID=-1;var m=function(t){function n(){for(var n,e=arguments.length,i=new Array(e),r=0;r<e;r++)i[r]=arguments[r];return(n=t.call.apply(t,[this].concat(i))||this)._duration=0,n._timesForRepeat=1,n}o(n,t);var e=n.prototype;return e.getDuration=function(){return this._duration*(this._timesForRepeat||1)},e.setDuration=function(t){this._duration=t},e.clone=function(){return new n},n}(y),W=(function(t){function e(n,e){var i;return void 0===e&&(e=1),(i=t.call(this)||this)._speed=0,i._innerAction=null,n&&i.initWithAction(n,e),i}o(e,t);var i=e.prototype;i.getSpeed=function(){return this._speed},i.setSpeed=function(t){this._speed=t},i.initWithAction=function(t,e){return t?(this._innerAction=t,this._speed=e,!0):(n(1021),!1)},i.clone=function(){var t=new e;return t.initWithAction(this._innerAction.clone(),this._speed),t},i.startWithTarget=function(t){y.prototype.startWithTarget.call(this,t),this._innerAction.startWithTarget(t)},i.stop=function(){this._innerAction.stop(),y.prototype.stop.call(this)},i.step=function(t){this._innerAction.step(t*this._speed)},i.isDone=function(){return this._innerAction.isDone()},i.reverse=function(){return new e(this._innerAction.reverse(),this._speed)},i.setInnerAction=function(t){this._innerAction!==t&&(this._innerAction=t)},i.getInnerAction=function(){return this._innerAction}}(y),function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.isDone=function(){return!0},e.step=function(){this.update(1)},e.update=function(){},e.reverse=function(){return this.clone()},e.clone=function(){return new n},n}(m)),D=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.update=function(){for(var t=this.target.getComponentsInChildren(g),n=0;n<t.length;++n)t[n].enabled=!0},e.reverse=function(){return new I},e.clone=function(){return new n},n}(W),I=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.update=function(){for(var t=this.target.getComponentsInChildren(g),n=0;n<t.length;++n)t[n].enabled=!1},e.reverse=function(){return new D},e.clone=function(){return new n},n}(W);!function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;e.update=function(){for(var t=this.target.getComponentsInChildren(g),n=0;n<t.length;++n){var e=t[n];e.enabled=!e.enabled}},e.reverse=function(){return new n},e.clone=function(){return new n}}(W);var b=function(t){function n(n){var e;return(e=t.call(this)||this)._isNeedCleanUp=!0,void 0!==n&&e.init(n),e}o(n,t);var e=n.prototype;return e.update=function(){this.target.removeFromParent(),this._isNeedCleanUp&&this.target.destroy()},e.init=function(t){return this._isNeedCleanUp=t,!0},e.reverse=function(){return new n(this._isNeedCleanUp)},e.clone=function(){return new n(this._isNeedCleanUp)},n}(W),E=function(t){function n(n,e,i){var r;return(r=t.call(this)||this)._selectorTarget=null,r._function=null,r._data=null,r.initWithFunction(n,e,i),r}o(n,t);var e=n.prototype;return e.initWithFunction=function(t,n,e){return t&&(this._function=t),n&&(this._selectorTarget=n),void 0!==e&&(this._data=e),!0},e.execute=function(){this._function&&this._function.call(this._selectorTarget,this.target,this._data)},e.update=function(){this.execute()},e.getTargetCallback=function(){return this._selectorTarget},e.setTargetCallback=function(t){t!==this._selectorTarget&&(this._selectorTarget&&(this._selectorTarget=null),this._selectorTarget=t)},e.clone=function(){var t=new n;return t.initWithFunction(this._function,this._selectorTarget,this._data),t},n}(W),M=function(t){function n(n){var e;return(e=t.call(this)||this).MAX_VALUE=2,e._elapsed=0,e._firstTick=!1,e._easeList=[],e._speed=1,e._repeatForever=!1,e._repeatMethod=!1,e._speedMethod=!1,void 0===n||isNaN(n)||e.initWithDuration(n),e}o(n,t);var e=n.prototype;return e.getElapsed=function(){return this._elapsed},e.initWithDuration=function(t){return this._duration=0===t?a.FLT_EPSILON:t,this._elapsed=0,this._firstTick=!0,!0},e.isDone=function(){return this._elapsed>=this._duration},e._cloneDecoration=function(t){t._repeatForever=this._repeatForever,t._speed=this._speed,t._timesForRepeat=this._timesForRepeat,t._easeList=this._easeList,t._speedMethod=this._speedMethod,t._repeatMethod=this._repeatMethod},e._reverseEaseList=function(t){if(this._easeList){t._easeList=[];for(var n=0;n<this._easeList.length;n++)t._easeList.push(this._easeList[n])}},e.clone=function(){var t=new n(this._duration);return this._cloneDecoration(t),t},e.easing=function(t){this._easeList?this._easeList.length=0:this._easeList=[];for(var n=0;n<arguments.length;n++)this._easeList.push(arguments[n]);return this},e._computeEaseTime=function(t){return t},e.step=function(t){this._firstTick?(this._firstTick=!1,this._elapsed=0):this._elapsed+=t;var n=this._elapsed/(this._duration>1.192092896e-7?this._duration:1.192092896e-7);n=n<1?n:1,this.update(n>0?n:0),this._repeatMethod&&this._timesForRepeat>1&&this.isDone()&&(this._repeatForever||this._timesForRepeat--,this.startWithTarget(this.target),this.step(this._elapsed-this._duration))},e.startWithTarget=function(t){y.prototype.startWithTarget.call(this,t),this._elapsed=0,this._firstTick=!0},e.reverse=function(){return i(1010),this},e.setAmplitudeRate=function(){i(1011)},e.getAmplitudeRate=function(){return i(1012),0},e.speed=function(t){return t<=0?(i(1013),this):(this._speedMethod=!0,this._speed*=t,this)},e.getSpeed=function(){return this._speed},e.setSpeed=function(t){return this._speed=t,this},e.repeat=function(t){return t=Math.round(t),isNaN(t)||t<1?(i(1014),this):(this._repeatMethod=!0,this._timesForRepeat*=t,this)},e.repeatForever=function(){return this._repeatMethod=!0,this._timesForRepeat=this.MAX_VALUE,this._repeatForever=!0,this},n}(m),F=function(t){function e(r){var o;(o=t.call(this)||this)._actions=[],o._split=0,o._last=0,o._reversed=!1;var s=r instanceof Array?r:arguments;if(1===s.length)return n(1019),c(o);var a=s.length-1;if(a>=0&&null==s[a]&&i(1015),a>=0){for(var u,h=s[0],l=1;l<a;l++)s[l]&&(u=h,h=e._actionOneTwo(u,s[l]));o.initWithTwoActions(h,s[a])}return o}o(e,t);var r=e.prototype;return r.initWithTwoActions=function(t,e){if(!t||!e)return n(1025),!1;var i=t._duration,r=e._duration,o=(i*=t._repeatMethod?t._timesForRepeat:1)+(r*=e._repeatMethod?e._timesForRepeat:1);return this.initWithDuration(o),this._actions[0]=t,this._actions[1]=e,!0},r.clone=function(){var t=new e;return this._cloneDecoration(t),t.initWithTwoActions(this._actions[0].clone(),this._actions[1].clone()),t},r.startWithTarget=function(t){M.prototype.startWithTarget.call(this,t),this._split=this._actions[0]._duration/this._duration,this._split*=this._actions[0]._repeatMethod?this._actions[0]._timesForRepeat:1,this._last=-1},r.stop=function(){-1!==this._last&&this._actions[this._last].stop(),y.prototype.stop.call(this)},r.update=function(t){var n,e,i=0,r=this._split,o=this._actions,s=this._last;(t=this._computeEaseTime(t))<r?(n=0!==r?t/r:1,0===i&&1===s&&this._reversed&&(o[1].update(0),o[1].stop())):(i=1,n=1===r?1:(t-r)/(1-r),-1===s&&(o[0].startWithTarget(this.target),o[0].update(1),o[0].stop()),0===s&&(o[0].update(1),o[0].stop())),e=o[i],s===i&&e.isDone()||(s!==i&&e.startWithTarget(this.target),n*=e._timesForRepeat,e.update(n>1?n%1:n),this._last=i)},r.reverse=function(){var t=e._actionOneTwo(this._actions[1].reverse(),this._actions[0].reverse());return this._cloneDecoration(t),this._reverseEaseList(t),t._reversed=!0,t},e}(M);function L(t){var e=t instanceof Array?t:arguments;if(1===e.length)return n(1019),null;var r=e.length-1;r>=0&&null==e[r]&&i(1015);var o=null;if(r>=0){o=e[0];for(var s=1;s<=r;s++)e[s]&&(o=F._actionOneTwo(o,e[s]))}return o}F._actionOneTwo=function(t,n){var e=new F;return e.initWithTwoActions(t,n),e};var k=function(t){function n(n,e){var i;return(i=t.call(this)||this)._times=0,i._total=0,i._nextDt=0,i._actionInstant=!1,i._innerAction=null,void 0!==e&&i.initWithAction(n,e),i}o(n,t);var e=n.prototype;return e.initWithAction=function(t,n){var e=t._duration*n;return!!this.initWithDuration(e)&&(this._times=n,this._innerAction=t,t instanceof W&&(this._actionInstant=!0,this._times-=1),this._total=0,!0)},e.clone=function(){var t=new n;return this._cloneDecoration(t),t.initWithAction(this._innerAction.clone(),this._times),t},e.startWithTarget=function(t){this._total=0,this._nextDt=this._innerAction._duration/this._duration,M.prototype.startWithTarget.call(this,t),this._innerAction.startWithTarget(t)},e.stop=function(){this._innerAction.stop(),y.prototype.stop.call(this)},e.update=function(t){t=this._computeEaseTime(t);var n=this._innerAction,e=this._duration,i=this._times,r=this._nextDt;if(t>=r){for(;t>r&&this._total<i;)n.update(1),this._total++,n.stop(),n.startWithTarget(this.target),r+=n._duration/e,this._nextDt=r>1?1:r;t>=1&&this._total<i&&(n.update(1),this._total++),this._actionInstant||(this._total===i?n.stop():n.update(t-(r-n._duration/e)))}else n.update(t*i%1)},e.isDone=function(){return this._total===this._times},e.reverse=function(){var t=new n(this._innerAction.reverse(),this._times);return this._cloneDecoration(t),this._reverseEaseList(t),t},e.setInnerAction=function(t){this._innerAction!==t&&(this._innerAction=t)},e.getInnerAction=function(){return this._innerAction},n}(M),x=function(t){function e(n){var e;return(e=t.call(this)||this)._innerAction=null,n&&e.initWithAction(n),e}o(e,t);var i=e.prototype;return i.initWithAction=function(t){return t?(this._innerAction=t,!0):(n(1026),!1)},i.clone=function(){var t=new e;return this._cloneDecoration(t),t.initWithAction(this._innerAction.clone()),t},i.startWithTarget=function(t){M.prototype.startWithTarget.call(this,t),this._innerAction.startWithTarget(t)},i.step=function(t){var n=this._innerAction;n.step(t),n.isDone()&&(n.startWithTarget(this.target),n.step(n.getElapsed()-n._duration))},i.isDone=function(){return!1},i.reverse=function(){var t=new e(this._innerAction.reverse());return this._cloneDecoration(t),this._reverseEaseList(t),t},i.setInnerAction=function(t){this._innerAction!==t&&(this._innerAction=t)},i.getInnerAction=function(){return this._innerAction},e}(M),N=function(t){function e(r){var o;(o=t.call(this)||this)._one=null,o._two=null;var s=r instanceof Array?r:arguments;if(1===s.length)return n(1020),c(o);var a=s.length-1;if(a>=0&&null==s[a]&&i(1015),a>=0){for(var u,h=s[0],l=1;l<a;l++)s[l]&&(u=h,h=e._actionOneTwo(u,s[l]));o.initWithTwoActions(h,s[a])}return o}o(e,t);var r=e.prototype;return r.initWithTwoActions=function(t,e){if(!t||!e)return n(1027),!1;var i=!1,r=t._duration,o=e._duration;return this.initWithDuration(Math.max(r,o))&&(this._one=t,this._two=e,r>o?this._two=F._actionOneTwo(e,S(r-o)):r<o&&(this._one=F._actionOneTwo(t,S(o-r))),i=!0),i},r.clone=function(){var t=new e;return this._cloneDecoration(t),t.initWithTwoActions(this._one.clone(),this._two.clone()),t},r.startWithTarget=function(t){M.prototype.startWithTarget.call(this,t),this._one.startWithTarget(t),this._two.startWithTarget(t)},r.stop=function(){this._one.stop(),this._two.stop(),y.prototype.stop.call(this)},r.update=function(t){t=this._computeEaseTime(t),this._one&&this._one.update(t),this._two&&this._two.update(t)},r.reverse=function(){var t=e._actionOneTwo(this._one.reverse(),this._two.reverse());return this._cloneDecoration(t),this._reverseEaseList(t),t},e}(M);function O(t){var e=t instanceof Array?t:arguments;if(1===e.length)return n(1020),null;e.length>0&&null==e[e.length-1]&&i(1015);for(var r=e[0],o=1;o<e.length;o++)null!=e[o]&&(r=N._actionOneTwo(r,e[o]));return r}N._actionOneTwo=function(t,n){var e=new N;return e.initWithTwoActions(t,n),e};var j=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.update=function(){},e.reverse=function(){var t=new n(this._duration);return this._cloneDecoration(t),this._reverseEaseList(t),t},e.clone=function(){var t=new n;return this._cloneDecoration(t),t.initWithDuration(this._duration),t},n}(M);function S(t){return new j(t)}var U=function(t){function e(n){var e;return(e=t.call(this)||this)._other=null,n&&e.initWithAction(n),e}o(e,t);var i=e.prototype;return i.initWithAction=function(t){return t?t===this._other?(n(1029),!1):!!M.prototype.initWithDuration.call(this,t._duration)&&(this._other=t,!0):(n(1028),!1)},i.clone=function(){var t=new e;return this._cloneDecoration(t),t.initWithAction(this._other.clone()),t},i.startWithTarget=function(t){M.prototype.startWithTarget.call(this,t),this._other.startWithTarget(t)},i.update=function(t){t=this._computeEaseTime(t),this._other&&this._other.update(1-t)},i.reverse=function(){return this._other.clone()},i.stop=function(){this._other.stop(),y.prototype.stop.call(this)},e}(M),C=function(t){function n(n,e,i){var r;if((r=t.call(this)||this)._opts=void 0,r._props=void 0,r._originProps=void 0,null==i)i=Object.create(null);else if(function(t){var n=" [Tween:] ",e=" option is not support in v + "+l,i=t;i.delay&&h(n+"delay"+e),i.repeat&&h(n+"repeat"+e),i.repeatDelay&&h(n+"repeatDelay"+e),i.interpolation&&h(n+"interpolation"+e),i.onStop&&h(n+"onStop"+e)}(i),i.easing&&"string"==typeof i.easing&&(i.easing=function(t){var n=t.charAt(0);if(/[A-Z]/.test(n)){var e=(t=t.replace(n,n.toLowerCase())).split("-");if(2===e.length){var i=e[0];if("linear"===i)t="linear";else{var r=e[1];switch(i){case"quadratic":t="quad"+r;break;case"quartic":t="quart"+r;break;case"quintic":t="quint"+r;break;case"sinusoidal":t="sine"+r;break;case"exponential":t="expo"+r;break;case"circular":t="circ"+r;break;default:t=i+r}}}}return t}(i.easing)),i.progress||(i.progress=r.progress),i.easing&&"string"==typeof i.easing){var o=i.easing;i.easing=v[o],i.easing||u(1031,o)}for(var s in r._opts=i,r._props=Object.create(null),e)if(e.hasOwnProperty(s)){var a=e[s];if(null!=a&&"string"!=typeof a&&"function"!=typeof a){var c=void 0,_=void 0;void 0!==a.value&&(a.easing||a.progress)&&("string"==typeof a.easing?(c=c[a.easing])||u(1031,a.easing):c=a.easing,_=a.progress,a=a.value);var p=Object.create(null);p.value=a,p.easing=c,p.progress=_,r._props[s]=p}}return r._originProps=e,r.initWithDuration(n),r}o(n,t);var e=n.prototype;return e.clone=function(){var t=new n(this._duration,this._originProps,this._opts);return this._cloneDecoration(t),t},e.startWithTarget=function(t){M.prototype.startWithTarget.call(this,t);var n=!!this._opts.relative,e=this._props;for(var i in e){var r=t[i];if(void 0!==r){var o=e[i],s=o.value;if("number"==typeof r)o.start=r,o.current=r,o.end=n?r+s:s;else if("object"==typeof r)for(var a in null==o.start&&(o.start={},o.current={},o.end={}),s)isNaN(r[a])||(o.start[a]=r[a],o.current[a]=r[a],o.end[a]=n?r[a]+s[a]:s[a])}}this._opts.onStart&&this._opts.onStart(this.target)},e.update=function(t){var n=this.target;if(n){var e=this._props,i=this._opts,r=t;i.easing&&(r=i.easing(t));var o=i.progress;for(var s in e){var a=e[s],c=a.easing?a.easing(t):r,u=a.progress?a.progress:o,h=a.start,l=a.end;if("number"==typeof h)a.current=u(h,l,a.current,c);else if("object"==typeof h)for(var _ in h)a.current[_]=u(h[_],l[_],a.current[_],c);n[s]=a.current}i.onUpdate&&i.onUpdate(this.target,t),1===t&&i.onComplete&&i.onComplete(this.target)}},e.progress=function(t,n,e,i){return t+(n-t)*i},n}(M),R=function(t){function n(n){var e;return(e=t.call(this)||this)._props=void 0,e._props={},void 0!==n&&e.init(n),e}o(n,t);var e=n.prototype;return e.init=function(t){for(var n in t)this._props[n]=t[n];return!0},e.update=function(){var t=this._props,n=this.target;for(var e in t)n[e]=t[e]},e.clone=function(){var t=new n;return t.init(this._props),t},n}(W),P=t("Tween",function(){function t(t){this._actions=[],this._finalAction=null,this._target=null,this._tag=y.TAG_INVALID,this._target=void 0===t?null:t}var n=t.prototype;return n.tag=function(t){return this._tag=t,this},n.then=function(t){return t instanceof y?this._actions.push(t.clone()):this._actions.push(t._union()),this},n.target=function(t){return this._target=t,this},n.start=function(){return this._target?(this._finalAction&&w.instance.ActionManager.removeAction(this._finalAction),this._finalAction=this._union(),this._finalAction.setTag(this._tag),w.instance.ActionManager.addAction(this._finalAction,this._target,!1),this):(h("Please set target to tween first"),this)},n.stop=function(){return this._finalAction&&w.instance.ActionManager.removeAction(this._finalAction),this},n.clone=function(t){var n=this._union();return q(t).then(n.clone())},n.union=function(){var t=this._union();return this._actions.length=0,this._actions.push(t),this},n.to=function(t,n,e){(e=e||Object.create(null)).relative=!1;var i=new C(t,n,e);return this._actions.push(i),this},n.by=function(t,n,e){(e=e||Object.create(null)).relative=!0;var i=new C(t,n,e);return this._actions.push(i),this},n.set=function(t){var n=new R(t);return this._actions.push(n),this},n.delay=function(t){var n=S(t);return this._actions.push(n),this},n.call=function(t){var n=new E(t,void 0,void 0);return this._actions.push(n),this},n.sequence=function(){var n=t._wrappedSequence.apply(t,arguments);return this._actions.push(n),this},n.parallel=function(){var n=t._wrappedParallel.apply(t,arguments);return this._actions.push(n),this},n.repeat=function(n,e){if(n==1/0)return this.repeatForever(e);var i,r=this._actions;return i=e instanceof t?e._union():r.pop(),r.push(function(t,n){return new k(t,n)}(i,n)),this},n.repeatForever=function(n){var e,i=this._actions;return e=n instanceof t?n._union():i.pop(),i.push(function(t){return new x(t)}(e)),this},n.reverseTime=function(n){var e,i=this._actions;return e=n instanceof t?n._union():i.pop(),i.push(function(t){return new U(t)}(e)),this},n.hide=function(){var t=new I;return this._actions.push(t),this},n.show=function(){var t=new D;return this._actions.push(t),this},n.removeSelf=function(){var t=new b(!1);return this._actions.push(t),this},t.stopAll=function(){w.instance.ActionManager.removeAllActions()},t.stopAllByTag=function(t,n){w.instance.ActionManager.removeActionByTag(t,n)},t.stopAllByTarget=function(t){w.instance.ActionManager.removeAllActionsFromTarget(t)},n._union=function(){var t=this._actions;return 1===t.length?t[0]:L(t)},n._destroy=function(){this.stop()},t._wrappedSequence=function(){var n=t._tmp_args;n.length=0;for(var e=arguments.length,i=0;i<e;i++){var r=n[i]=i<0||arguments.length<=i?void 0:arguments[i];r instanceof t&&(n[i]=r._union())}return L.apply(L,n)},t._wrappedParallel=function(){var n=t._tmp_args;n.length=0;for(var e=arguments.length,i=0;i<e;i++){var r=n[i]=i<0||arguments.length<=i?void 0:arguments[i];r instanceof t&&(n[i]=r._union())}return O.apply(O,n)},t}());function q(t){return new P(t)}function B(t){return h("tweenUtil' is deprecated, please use 'tween' instead "),new P(t)}P._tmp_args=[],e.Tween=P,e.tween=q,e.tweenUtil=B}}}));
