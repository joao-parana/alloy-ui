AUI.add("aui-event-input",function(b){var a=b.Lang,g=a.isFunction,e="activeElement",f="ownerDocument",d=b.UA;var c={on:function(k,j,i){var l="input";if(!/chrome/i.test(d.agent)&&d.webkit&&d.version.major<=2){l="keypress";}else{if(d.ie){l="propertychange";}}var h=function(p){var n=this;var o=p.target;var m=p._event;if(p.type=="propertychange"){if(m&&(m.propertyName!="value")){return false;}}var q=(o.get(f).get(e)==o);if(q&&g(j)){j.apply(n,arguments);}};return b.Event.attach(l,h,i);}};b.Env.evt.plugins.input=c;if(b.Node){b.Node.DOM_EVENTS.input=c;}},"@VERSION@",{requires:["aui-base"]});