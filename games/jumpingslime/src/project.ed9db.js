window.__require=function t(o,i,c){function e(s,h){if(!i[s]){if(!o[s]){var u=s.split("/");if(u=u[u.length-1],!o[u]){var r="function"==typeof __require&&__require;if(!h&&r)return r(u,!0);if(n)return n(u,!0);throw new Error("Cannot find module '"+s+"'")}s=u}var v=i[s]={exports:{}};o[s][0].call(v.exports,function(t){return e(o[s][1][t]||t)},v,v.exports,t,o,i,c)}return i[s].exports}for(var n="function"==typeof __require&&__require,s=0;s<c.length;s++)e(c[s]);return e}({slime:[function(t,o,i){"use strict";cc._RF.push(o,"bdebbK+8GlJYIaFLoEpkxXk","slime"),cc.Class({extends:cc.Component,properties:{duration:3,height:30,velocity:2,moving:!1,jumping:!1,moveDirection:1},jump:function(){var t=cc.moveBy(this.duration,cc.v2(0,this.height)).easing(cc.easeCubicActionOut()),o=cc.moveBy(this.duration,cc.v2(0,-this.height)).easing(cc.easeCubicActionIn()),i=cc.callFunc(function(){this.jumping=!1},this);return cc.sequence(t,o,i)},move:function(t,o){this.moving&&(1===t?this.node.x+=this.velocity*o:-1===t&&(this.node.x-=this.velocity*o))},onKeyDown:function(t){switch(t.keyCode){case cc.macro.KEY.space:this.jumping||this.node.runAction(this.slimejump),this.jumping=!0;break;case cc.macro.KEY.left:this.moving=!0,this.moveDirection=-1;break;case cc.macro.KEY.right:this.moving=!0,this.moveDirection=1}},onKeyUp:function(t){switch(t.keyCode){case cc.macro.KEY.left:case cc.macro.KEY.right:this.moving=!1}},onTouchStart:function(t){cc.log(t.getDelta())},onTouchEnd:function(t){cc.log(t.getDelta())},onLoad:function(){this.slimejump=this.jump()},onDestroy:function(){cc.systemEvent.off(cc.systemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.off(cc.systemEvent.EventType.KEY_UP,this.onKeyUp,this)},start:function(){cc.log(cc.view.getCanvasSize().width),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},update:function(t){this.node.on("touchstart",this.onTouchStart,this),this.node.on("touchend",this.onTouchEnd,this),this.moving}}),cc._RF.pop()},{}],touch:[function(t,o,i){"use strict";cc._RF.push(o,"44debPjWs1Cb7XRT/S5pszc","touch"),cc.Class({extends:cc.Component,properties:{speed:100,position:0,threshold:100,moving:!1,touchStartX:0,touchMoveX:0,slime:{default:null,type:cc.Node}},onTouchStart:function(t){cc.log("touch start"),this.touchStartX=t.getLocation().x,this.moving=!0},onTouchEnd:function(t){cc.log("touch end"),this.moving=!1,this.touchMoveX=0,this.touchStartX=0},onTouchMove:function(t){cc.log("touch move"),this.touchMoveX=t.getLocation().x},onLoad:function(){this.slime=cc.find("slime")},start:function(){},update:function(t){this.node.on("touchstart",this.onTouchStart,this),this.node.on("touchend",this.onTouchEnd,this),this.node.on("touchmove",this.onTouchMove,this),this.moving&&(this.position=this.touchMoveX,(this.touchMoveX>0||this.touchMoveX<0)&&(this.position=-1*(this.touchStartX-this.touchMoveX)),cc.log(this.touchStartX),cc.log(this.touchMoveX),cc.log(this.position),this.position>this.threshold?this.slime.x+=this.speed*t:this.position<-this.threshold&&(this.slime.x-=this.speed*t),this.slime.x<0?slime.x=0:this.slime.x>cc.view.getCanvasSize().width&&(this.slime.x=cc.view.getCanvasSize().width))}}),cc._RF.pop()},{}],"use_v2.0.x_cc.Toggle_event":[function(t,o,i){"use strict";cc._RF.push(o,"594b2JKRUNO9ZYEcVxQu9LV","use_v2.0.x_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_check=!0),cc._RF.pop()},{}]},{},["use_v2.0.x_cc.Toggle_event","slime","touch"]);