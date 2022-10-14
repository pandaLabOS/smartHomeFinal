"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[398],{3039:function(a,b,c){var d,e=this&&this.__extends||(d=function(a,b){return(d=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&(a[c]=b[c])})(a,b)},function(a,b){if("function"!=typeof b&&null!==b)throw TypeError("Class extends value "+String(b)+" is not a constructor or null");function c(){this.constructor=a}d(a,b),a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}),f=this&&this.__createBinding||(Object.create?function(a,b,c,d){void 0===d&&(d=c);var e=Object.getOwnPropertyDescriptor(b,c);(!e||("get"in e?!b.__esModule:e.writable||e.configurable))&&(e={enumerable:!0,get:function(){return b[c]}}),Object.defineProperty(a,d,e)}:function(a,b,c,d){void 0===d&&(d=c),a[d]=b[c]}),g=this&&this.__setModuleDefault||(Object.create?function(a,b){Object.defineProperty(a,"default",{enumerable:!0,value:b})}:function(a,b){a.default=b}),h=this&&this.__importStar||function(a){if(a&&a.__esModule)return a;var b={};if(null!=a)for(var c in a)"default"!==c&&Object.prototype.hasOwnProperty.call(a,c)&&f(b,a,c);return g(b,a),b},i=this&&this.__spreadArray||function(a,b,c){if(c||2===arguments.length)for(var d,e=0,f=b.length;e<f;e++)!d&&e in b||(d||(d=Array.prototype.slice.call(b,0,e)),d[e]=b[e]);return a.concat(d||Array.prototype.slice.call(b))};Object.defineProperty(b,"__esModule",{value:!0});var j=h(c(7294)),k=c(1826),l=c(6234),m=["ArrowRight","ArrowUp","k","PageUp"],n=["ArrowLeft","ArrowDown","j","PageDown"],o=function(a){function b(b){var c=a.call(this,b)||this;if(c.trackRef=j.createRef(),c.thumbRefs=[],c.state={draggedTrackPos:[-1,-1],draggedThumbIndex:-1,thumbZIndexes:Array(c.props.values.length).fill(0).map(function(a,b){return b}),isChanged:!1,markOffsets:[]},c.getOffsets=function(){var a=c.props,b=a.direction,d=a.values,e=a.min,f=a.max,g=c.trackRef.current,h=g.getBoundingClientRect(),i=(0,k.getPaddingAndBorder)(g);return c.getThumbs().map(function(a,c){var g={x:0,y:0},j=a.getBoundingClientRect(),m=(0,k.getMargin)(a);switch(b){case l.Direction.Right:return g.x=-((m.left+i.left)*1),g.y=-(((j.height-h.height)/2+i.top)*1),g.x+=h.width*(0,k.relativeValue)(d[c],e,f)-j.width/2,g;case l.Direction.Left:return g.x=-((m.right+i.right)*1),g.y=-(((j.height-h.height)/2+i.top)*1),g.x+=h.width-h.width*(0,k.relativeValue)(d[c],e,f)-j.width/2,g;case l.Direction.Up:return g.x=-(((j.width-h.width)/2+m.left+i.left)*1),g.y=-i.left,g.y+=h.height-h.height*(0,k.relativeValue)(d[c],e,f)-j.height/2,g;case l.Direction.Down:return g.x=-(((j.width-h.width)/2+m.left+i.left)*1),g.y=-i.left,g.y+=h.height*(0,k.relativeValue)(d[c],e,f)-j.height/2,g;default:return(0,k.assertUnreachable)(b)}})},c.getThumbs=function(){return c.trackRef&&c.trackRef.current?Array.from(c.trackRef.current.children).filter(function(a){return a.hasAttribute("aria-valuenow")}):(console.warn("No thumbs found in the track container. Did you forget to pass & spread the `props` param in renderTrack?"),[])},c.getTargetIndex=function(a){return c.getThumbs().findIndex(function(b){return b===a.target||b.contains(a.target)})},c.addTouchEvents=function(a){document.addEventListener("touchmove",c.schdOnTouchMove,{passive:!1}),document.addEventListener("touchend",c.schdOnEnd,{passive:!1}),document.addEventListener("touchcancel",c.schdOnEnd,{passive:!1})},c.addMouseEvents=function(a){document.addEventListener("mousemove",c.schdOnMouseMove),document.addEventListener("mouseup",c.schdOnEnd)},c.onMouseDownTrack=function(a){var b;if(0===a.button){if(a.persist(),a.preventDefault(),c.addMouseEvents(a.nativeEvent),c.props.values.length>1&&c.props.draggableTrack){if(c.thumbRefs.some(function(b){var c;return null===(c=b.current)|| void 0===c?void 0:c.contains(a.target)}))return;c.setState({draggedTrackPos:[a.clientX,a.clientY]},function(){return c.onMove(a.clientX,a.clientY)})}else{var d=(0,k.getClosestThumbIndex)(c.thumbRefs.map(function(a){return a.current}),a.clientX,a.clientY,c.props.direction);null===(b=c.thumbRefs[d].current)|| void 0===b||b.focus(),c.setState({draggedThumbIndex:d},function(){return c.onMove(a.clientX,a.clientY)})}}},c.onResize=function(){(0,k.translateThumbs)(c.getThumbs(),c.getOffsets(),c.props.rtl),c.calculateMarkOffsets()},c.onTouchStartTrack=function(a){var b;if(a.persist(),c.addTouchEvents(a.nativeEvent),c.props.values.length>1&&c.props.draggableTrack){if(c.thumbRefs.some(function(b){var c;return null===(c=b.current)|| void 0===c?void 0:c.contains(a.target)}))return;c.setState({draggedTrackPos:[a.touches[0].clientX,a.touches[0].clientY]},function(){return c.onMove(a.touches[0].clientX,a.touches[0].clientY)})}else{var d=(0,k.getClosestThumbIndex)(c.thumbRefs.map(function(a){return a.current}),a.touches[0].clientX,a.touches[0].clientY,c.props.direction);null===(b=c.thumbRefs[d].current)|| void 0===b||b.focus(),c.setState({draggedThumbIndex:d},function(){return c.onMove(a.touches[0].clientX,a.touches[0].clientY)})}},c.onMouseOrTouchStart=function(a){if(!c.props.disabled){var b=(0,k.isTouchEvent)(a);if(b||0===a.button){var d=c.getTargetIndex(a);-1!==d&&(b?c.addTouchEvents(a):c.addMouseEvents(a),c.setState({draggedThumbIndex:d,thumbZIndexes:c.state.thumbZIndexes.map(function(a,b){return b===d?Math.max.apply(Math,c.state.thumbZIndexes):a<=c.state.thumbZIndexes[d]?a:a-1})}))}}},c.onMouseMove=function(a){a.preventDefault(),c.onMove(a.clientX,a.clientY)},c.onTouchMove=function(a){a.preventDefault(),c.onMove(a.touches[0].clientX,a.touches[0].clientY)},c.onKeyDown=function(a){var b=c.props,d=b.values,e=b.onChange,f=b.step,g=b.rtl,h=b.direction,i=c.state.isChanged,j=c.getTargetIndex(a.nativeEvent),o=g||h===l.Direction.Left||h===l.Direction.Down?-1:1;-1!==j&&(m.includes(a.key)?(a.preventDefault(),c.setState({draggedThumbIndex:j,isChanged:!0}),e((0,k.replaceAt)(d,j,c.normalizeValue(d[j]+o*("PageUp"===a.key?10*f:f),j)))):n.includes(a.key)?(a.preventDefault(),c.setState({draggedThumbIndex:j,isChanged:!0}),e((0,k.replaceAt)(d,j,c.normalizeValue(d[j]-o*("PageDown"===a.key?10*f:f),j)))):"Tab"===a.key?c.setState({draggedThumbIndex:-1},function(){i&&c.fireOnFinalChange()}):i&&c.fireOnFinalChange())},c.onKeyUp=function(a){var b=c.state.isChanged;c.setState({draggedThumbIndex:-1},function(){b&&c.fireOnFinalChange()})},c.onMove=function(a,b){var d=c.state,e=d.draggedThumbIndex,f=d.draggedTrackPos,g=c.props,h=g.direction,i=g.min,j=g.max,m=g.onChange,n=g.values,o=g.step,p=g.rtl;if(-1===e&& -1===f[0]&& -1===f[1])return null;var q=c.trackRef.current;if(!q)return null;var r=q.getBoundingClientRect(),s=(0,k.isVertical)(h)?r.height:r.width;if(-1!==f[0]&& -1!==f[1]){var t=a-f[0],u=b-f[1],v=0;switch(h){case l.Direction.Right:case l.Direction.Left:v=t/s*(j-i);break;case l.Direction.Down:case l.Direction.Up:v=u/s*(j-i);break;default:(0,k.assertUnreachable)(h)}if(p&&(v*=-1),Math.abs(v)>=o/2){for(var w=0;w<c.thumbRefs.length;w++){if(n[w]===j&&1===Math.sign(v)||n[w]===i&& -1===Math.sign(v))return;var x=n[w]+v;x>j?v=j-n[w]:x<i&&(v=i-n[w])}for(var y=n.slice(0),w=0;w<c.thumbRefs.length;w++)y=(0,k.replaceAt)(y,w,c.normalizeValue(n[w]+v,w));c.setState({draggedTrackPos:[a,b]}),m(y)}}else{var z=0;switch(h){case l.Direction.Right:z=(a-r.left)/s*(j-i)+i;break;case l.Direction.Left:z=(s-(a-r.left))/s*(j-i)+i;break;case l.Direction.Down:z=(b-r.top)/s*(j-i)+i;break;case l.Direction.Up:z=(s-(b-r.top))/s*(j-i)+i;break;default:(0,k.assertUnreachable)(h)}p&&(z=j+i-z),Math.abs(n[e]-z)>=o/2&&m((0,k.replaceAt)(n,e,c.normalizeValue(z,e)))}},c.normalizeValue=function(a,b){var d=c.props,e=d.min,f=d.max,g=d.step,h=d.allowOverlap,i=d.values;return(0,k.normalizeValue)(a,b,e,f,g,h,i)},c.onEnd=function(a){if(a.preventDefault(),document.removeEventListener("mousemove",c.schdOnMouseMove),document.removeEventListener("touchmove",c.schdOnTouchMove),document.removeEventListener("mouseup",c.schdOnEnd),document.removeEventListener("touchend",c.schdOnEnd),document.removeEventListener("touchcancel",c.schdOnEnd),-1===c.state.draggedThumbIndex&& -1===c.state.draggedTrackPos[0]&& -1===c.state.draggedTrackPos[1])return null;c.setState({draggedThumbIndex:-1,draggedTrackPos:[-1,-1]},function(){c.fireOnFinalChange()})},c.fireOnFinalChange=function(){c.setState({isChanged:!1});var a=c.props,b=a.onFinalChange,d=a.values;b&&b(d)},c.updateMarkRefs=function(a){if(!a.renderMark){c.numOfMarks=void 0,c.markRefs=void 0;return}c.numOfMarks=(a.max-a.min)/c.props.step,c.markRefs=[];for(var b=0;b<c.numOfMarks+1;b++)c.markRefs[b]=j.createRef()},c.calculateMarkOffsets=function(){if(c.props.renderMark&&c.trackRef&&c.numOfMarks&&c.markRefs&&null!==c.trackRef.current){for(var a=window.getComputedStyle(c.trackRef.current),b=parseInt(a.width,10),d=parseInt(a.height,10),e=parseInt(a.paddingLeft,10),f=parseInt(a.paddingTop,10),g=[],h=0;h<c.numOfMarks+1;h++){var i=9999,j=9999;if(c.markRefs[h].current){var k=c.markRefs[h].current.getBoundingClientRect();i=k.height,j=k.width}c.props.direction===l.Direction.Left||c.props.direction===l.Direction.Right?g.push([Math.round(b/c.numOfMarks*h+e-j/2),-Math.round((i-d)/2)]):g.push([Math.round(d/c.numOfMarks*h+f-i/2),-Math.round((j-b)/2)])}c.setState({markOffsets:g})}},0===b.step)throw Error('"step" property should be a positive number');return c.schdOnMouseMove=(0,k.schd)(c.onMouseMove),c.schdOnTouchMove=(0,k.schd)(c.onTouchMove),c.schdOnEnd=(0,k.schd)(c.onEnd),c.thumbRefs=b.values.map(function(){return j.createRef()}),c.updateMarkRefs(b),c}return e(b,a),b.prototype.componentDidMount=function(){var a=this,b=this.props,c=b.values,d=b.min,e=b.step;this.resizeObserver=window.ResizeObserver?new window.ResizeObserver(this.onResize):{observe:function(){return window.addEventListener("resize",a.onResize)},unobserve:function(){return window.removeEventListener("resize",a.onResize)}},document.addEventListener("touchstart",this.onMouseOrTouchStart,{passive:!1}),document.addEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),this.props.allowOverlap||(0,k.checkInitialOverlap)(this.props.values),this.props.values.forEach(function(b){return(0,k.checkBoundaries)(b,a.props.min,a.props.max)}),this.resizeObserver.observe(this.trackRef.current),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),this.props.rtl),this.calculateMarkOffsets(),c.forEach(function(a){(0,k.isStepDivisible)(d,a,e)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")})},b.prototype.componentDidUpdate=function(a,b){var c=this.props,d=c.max,e=c.min,f=c.step,g=c.values,h=c.rtl;(a.max!==d||a.min!==e||a.step!==f)&&this.updateMarkRefs(this.props),(0,k.translateThumbs)(this.getThumbs(),this.getOffsets(),h),(a.max!==d||a.min!==e||a.step!==f||b.markOffsets.length!==this.state.markOffsets.length)&&(this.calculateMarkOffsets(),g.forEach(function(a){(0,k.isStepDivisible)(e,a,f)||console.warn("The `values` property is in conflict with the current `step`, `min`, and `max` properties. Please provide values that are accessible using the min, max, and step values.")}))},b.prototype.componentWillUnmount=function(){document.removeEventListener("mousedown",this.onMouseOrTouchStart,{passive:!1}),document.removeEventListener("mousemove",this.schdOnMouseMove),document.removeEventListener("touchmove",this.schdOnTouchMove),document.removeEventListener("touchstart",this.onMouseOrTouchStart),document.removeEventListener("mouseup",this.schdOnEnd),document.removeEventListener("touchend",this.schdOnEnd),this.resizeObserver.unobserve(this.trackRef.current)},b.prototype.render=function(){var a=this,b=this.props,c=b.renderTrack,d=b.renderThumb,e=b.renderMark,f=void 0===e?function(){return null}:e,g=b.values,h=b.min,j=b.max,m=b.allowOverlap,n=b.disabled,o=this.state,p=o.draggedThumbIndex,q=o.thumbZIndexes,r=o.markOffsets;return c({props:{style:{transform:"scale(1)",cursor:p> -1?"grabbing":this.props.draggableTrack?(0,k.isVertical)(this.props.direction)?"ns-resize":"ew-resize":1!==g.length||n?"inherit":"pointer"},onMouseDown:n?k.voidFn:this.onMouseDownTrack,onTouchStart:n?k.voidFn:this.onTouchStartTrack,ref:this.trackRef},isDragged:this.state.draggedThumbIndex> -1,disabled:n,children:i(i([],r.map(function(b,c,d){return f({props:{style:a.props.direction===l.Direction.Left||a.props.direction===l.Direction.Right?{position:"absolute",left:"".concat(b[0],"px"),marginTop:"".concat(b[1],"px")}:{position:"absolute",top:"".concat(b[0],"px"),marginLeft:"".concat(b[1],"px")},key:"mark".concat(c),ref:a.markRefs[c]},index:c})}),!0),g.map(function(b,c){var e=a.state.draggedThumbIndex===c;return d({index:c,value:b,isDragged:e,props:{style:{position:"absolute",zIndex:q[c],cursor:n?"inherit":e?"grabbing":"grab",userSelect:"none",touchAction:"none",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none"},key:c,tabIndex:n?void 0:0,"aria-valuemax":m?j:g[c+1]||j,"aria-valuemin":m?h:g[c-1]||h,"aria-valuenow":b,draggable:!1,ref:a.thumbRefs[c],role:"slider",onKeyDown:n?k.voidFn:a.onKeyDown,onKeyUp:n?k.voidFn:a.onKeyUp}})}),!0)})},b.defaultProps={step:1,direction:l.Direction.Right,rtl:!1,disabled:!1,allowOverlap:!1,draggableTrack:!1,min:0,max:100},b}(j.Component);b.default=o},4398:function(a,b,c){var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0}),b.checkValuesAgainstBoundaries=b.relativeValue=b.useThumbOverlap=b.Direction=b.getTrackBackground=b.Range=void 0;var e=d(c(3039));b.Range=e.default;var f=c(1826);Object.defineProperty(b,"getTrackBackground",{enumerable:!0,get:function(){return f.getTrackBackground}}),Object.defineProperty(b,"useThumbOverlap",{enumerable:!0,get:function(){return f.useThumbOverlap}}),Object.defineProperty(b,"relativeValue",{enumerable:!0,get:function(){return f.relativeValue}}),Object.defineProperty(b,"checkValuesAgainstBoundaries",{enumerable:!0,get:function(){return f.checkValuesAgainstBoundaries}});var g=c(6234);Object.defineProperty(b,"Direction",{enumerable:!0,get:function(){return g.Direction}})},6234:function(a,b){var c;Object.defineProperty(b,"__esModule",{value:!0}),b.Direction=void 0,(c=b.Direction||(b.Direction={})).Right="to right",c.Left="to left",c.Down="to bottom",c.Up="to top"},1826:function(a,b,c){var d=this&&this.__spreadArray||function(a,b,c){if(c||2===arguments.length)for(var d,e=0,f=b.length;e<f;e++)!d&&e in b||(d||(d=Array.prototype.slice.call(b,0,e)),d[e]=b[e]);return a.concat(d||Array.prototype.slice.call(b))};Object.defineProperty(b,"__esModule",{value:!0}),b.useThumbOverlap=b.assertUnreachable=b.voidFn=b.getTrackBackground=b.replaceAt=b.schd=b.translate=b.getClosestThumbIndex=b.translateThumbs=b.getPaddingAndBorder=b.getMargin=b.checkInitialOverlap=b.checkValuesAgainstBoundaries=b.checkBoundaries=b.isVertical=b.relativeValue=b.normalizeValue=b.isStepDivisible=b.isTouchEvent=b.getStepDecimals=void 0;var e=c(7294),f=c(6234),g=function(a){var b=a.toString().split(".")[1];return b?b.length:0};function h(a,b,c){return(a-b)/(c-b)}function i(a){return a===f.Direction.Up||a===f.Direction.Down}function j(a,b,c){a.style.transform="translate(".concat(b,"px, ").concat(c,"px)")}b.getStepDecimals=g,b.isTouchEvent=function(a){return a.touches&&a.touches.length||a.changedTouches&&a.changedTouches.length},b.isStepDivisible=function(a,b,c){var d=Number(((b-a)/c).toFixed(8));return parseInt(d.toString(),10)===d},b.normalizeValue=function(a,c,d,e,f,g,h){if(a=Math.round(1e11*a)/1e11,!g){var i=h[c-1],j=h[c+1];if(i&&i>a)return i;if(j&&j<a)return j}if(a>e)return e;if(a<d)return d;var k=Math.floor(1e11*a-1e11*d)%Math.floor(1e11*f),l=Math.floor(1e11*a-Math.abs(k)),m=0===k?a:l/1e11,n=Math.abs(k/1e11)<f/2?m:m+f,o=(0,b.getStepDecimals)(f);return parseFloat(n.toFixed(o))},b.relativeValue=h,b.isVertical=i,b.checkBoundaries=function(a,b,c){if(b>=c)throw RangeError("min (".concat(b,") is equal/bigger than max (").concat(c,")"));if(a<b)throw RangeError("value (".concat(a,") is smaller than min (").concat(b,")"));if(a>c)throw RangeError("value (".concat(a,") is bigger than max (").concat(c,")"))},b.checkValuesAgainstBoundaries=function(a,b,c){return a<b?b:a>c?c:a},b.checkInitialOverlap=function(a){if(!(a.length<2)&&!a.slice(1).every(function(b,c){return a[c]<=b}))throw RangeError("values={[".concat(a,"]} needs to be sorted when allowOverlap={false}"))},b.getMargin=function(a){var b=window.getComputedStyle(a);return{top:parseInt(b["margin-top"],10),bottom:parseInt(b["margin-bottom"],10),left:parseInt(b["margin-left"],10),right:parseInt(b["margin-right"],10)}},b.getPaddingAndBorder=function(a){var b=window.getComputedStyle(a);return{top:parseInt(b["padding-top"],10)+parseInt(b["border-top-width"],10),bottom:parseInt(b["padding-bottom"],10)+parseInt(b["border-bottom-width"],10),left:parseInt(b["padding-left"],10)+parseInt(b["border-left-width"],10),right:parseInt(b["padding-right"],10)+parseInt(b["border-right-width"],10)}},b.translateThumbs=function(a,b,c){var d=c?-1:1;a.forEach(function(a,c){return j(a,d*b[c].x,b[c].y)})},b.getClosestThumbIndex=function(a,b,c,d){for(var e=0,f=o(a[0],b,c,d),g=1;g<a.length;g++){var h=o(a[g],b,c,d);h<f&&(f=h,e=g)}return e},b.translate=j;var k=function(a){var b=[],c=null;return function(){for(var d=[],e=0;e<arguments.length;e++)d[e]=arguments[e];b=d,!c&&(c=requestAnimationFrame(function(){c=null,a.apply(void 0,b)}))}};b.schd=k,b.replaceAt=function(a,b,c){var d=a.slice(0);return d[b]=c,d},b.getTrackBackground=function(a){var b=a.values,c=a.colors,d=a.min,e=a.max,g=a.direction,h=void 0===g?f.Direction.Right:g,i=a.rtl,j=void 0!==i&&i;j&&h===f.Direction.Right?h=f.Direction.Left:j&&f.Direction.Left&&(h=f.Direction.Right);var k=b.slice(0).sort(function(a,b){return a-b}).map(function(a){return(a-d)/(e-d)*100}),l=k.reduce(function(a,b,d){return"".concat(a,", ").concat(c[d]," ").concat(b,"%, ").concat(c[d+1]," ").concat(b,"%")},"");return"linear-gradient(".concat(h,", ").concat(c[0]," 0%").concat(l,", ").concat(c[c.length-1]," 100%)")},b.voidFn=function(){},b.assertUnreachable=function(a){throw Error("Didn't expect to get here")};var l=function(a,b,c,e,f){return void 0===f&&(f=function(a){return a}),Math.ceil(d([a],Array.from(a.children),!0).reduce(function(a,d){var g=Math.ceil(d.getBoundingClientRect().width);if(d.innerText&&d.innerText.includes(c)&&0===d.childElementCount){var h=d.cloneNode(!0);h.innerHTML=f(b.toFixed(e)),h.style.visibility="hidden",document.body.appendChild(h),g=Math.ceil(h.getBoundingClientRect().width),document.body.removeChild(h)}return g>a?g:a},a.getBoundingClientRect().width))},m=function(a,b,c,e,f,g,h){void 0===h&&(h=function(a){return a});var i=[],j=function(a){var k=l(c[a],e[a],f,g,h),m=b[a].x;b.forEach(function(b,n){var o=b.x,p=l(c[n],e[n],f,g,h);a!==n&&(m>=o&&m<=o+p||m+k>=o&&m+k<=o+p)&&!i.includes(n)&&(i.push(a),i.push(n),i=d(d([],i,!0),[a,n],!1),j(n))})};return j(a),Array.from(new Set(i.sort()))},n=function(a,c,f,g,h,i){void 0===g&&(g=.1),void 0===h&&(h=" - "),void 0===i&&(i=function(a){return a});var j=(0,b.getStepDecimals)(g),k=(0,e.useState)({}),l=k[0],n=k[1],o=(0,e.useState)(i(c[f].toFixed(j))),p=o[0],q=o[1];return(0,e.useEffect)(function(){if(a){var b=a.getThumbs();if(!(b.length<1)){var e={},g=a.getOffsets(),k=m(f,g,b,c,h,j,i),l=i(c[f].toFixed(j));if(k.length){var o=k.reduce(function(a,b,c,e){return a.length?d(d([],a,!0),[g[e[c]].x],!1):[g[e[c]].x]},[]);if(Math.min.apply(Math,o)===g[f].x){var p=[];k.forEach(function(a){p.push(c[a].toFixed(j))}),l=Array.from(new Set(p.sort(function(a,b){return parseFloat(a)-parseFloat(b)}))).map(i).join(h);var r=Math.min.apply(Math,o),s=Math.max.apply(Math,o),t=b[k[o.indexOf(s)]].getBoundingClientRect().width;e.left="".concat(Math.abs(r-(s+t))/2,"px"),e.transform="translate(-50%, 0)"}else e.visibility="hidden"}q(l),n(e)}}},[a,c]),[p,l]};function o(a,b,c,d){var e=a.getBoundingClientRect(),f=e.left,g=e.top,h=e.width,j=e.height;return i(d)?Math.abs(c-(g+j/2)):Math.abs(b-(f+h/2))}b.useThumbOverlap=n}}])