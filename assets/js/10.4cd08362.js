(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{182:function(a,n,t){},308:function(a,n,t){"use strict";var e=t(182);t.n(e).a},315:function(a,n,t){"use strict";t.r(n);t(52),t(86),t(27),t(23);var e,i=t(19),r=(t(175),t(176)),s=t(184),o={name:"ShowAnimation",data:function(){return{render:null,playing:!1,fragment1Ring1:null,fragment1Ring2:null,fragment1Polyline1:null,fragment1Polyline2:null,fragment2Ring1:null,fragment2Ring2:null,fragment2Arc1:null,fragment2Arc2:null,fragment2Arc3:null,fragment2Arc4:null,fragment2Ring12:null,fragment2Ring22:null,fragment3Circle1:null,fragment3Circle2:null,fragment5Rings:[],fragment5Text:null,fragment5Polyline1:null,color:["#e86830","#e83a30","#e8308c","#8930e8","#30c9e8","#30e8bd","#e8e230"]}},methods:{init:function(){var a=this.$refs,n=this.animation;this.render=new s.a(a.canvas),n()},animation:(e=Object(r.a)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n=this.render,!this.playing){a.next=3;break}return a.abrupt("return");case 3:return this.playing=!0,n.delAllGraph(),a.next=7,this.fragment1(n);case 7:return a.next=9,this.fragment2(n);case 9:return a.next=11,this.fragment3(n);case 11:return a.next=13,this.fragment4(n);case 13:return a.next=15,this.fragment5(n);case 15:this.playing=!1;case 16:case"end":return a.stop()}}),a,this)}))),function(){return e.apply(this,arguments)}),fragment1:function(a){var n=Object(i.a)(a.area,2),t=n[0],e=n[1],r=this.fragment1Ring1=a.add({name:"ring",animationCurve:"easeInOutBack",shape:{rx:0,ry:e/2,r:6},style:{stroke:"#eeca54",lineWidth:10}}),s=this.fragment1Ring2=a.add({name:"ring",animationCurve:"easeInOutBack",shape:{rx:t,ry:e/2,r:6},style:{stroke:"#eeca54",lineWidth:10}}),o=this.fragment1Polyline1=a.add({name:"polyline",animationCurve:"easeInOutBack",shape:{points:[[-150,e/2],[0,e/2]]},style:{stroke:"#eeca54",lineWidth:1}}),m=this.fragment1Polyline2=a.add({name:"polyline",animationCurve:"easeInOutBack",shape:{points:[[t+150,e/2],[t,e/2]]},style:{stroke:"#eeca54",lineWidth:1}});return r.animation("shape",{rx:t/2-80},!0),s.animation("shape",{rx:t/2+80},!0),o.animation("shape",{points:[[t/2-230,e/2],[t/2-80,e/2]]},!0),m.animation("shape",{points:[[t/2+230,e/2],[t/2+80,e/2]]},!0),a.launchAnimation()},fragment2:function(a){var n=Object(i.a)(a.area,2),t=n[0],e=n[1];this.fragment1Polyline1.animation("shape",{points:[[t/2-80,e/2],[t/2-80,e/2]]},!0),this.fragment1Polyline2.animation("shape",{points:[[t/2+80,e/2],[t/2+80,e/2]]},!0),this.fragment1Ring1.animationFrame=60,this.fragment1Ring1.animation("shape",{r:20},!0),this.fragment1Ring1.animation("style",{opacity:0,lineWidth:.5},!0),this.fragment1Ring2.animationFrame=60,this.fragment1Ring2.animation("shape",{r:20},!0),this.fragment1Ring2.animation("style",{opacity:0,lineWidth:.5},!0);var r=this.fragment2Ring1=a.add({name:"ring",animationCurve:"easeOutCubic",animationFrame:60,shape:{rx:t/2-80,ry:e/2,r:6},style:{stroke:"#ee66aa",lineWidth:1}}),s=this.fragment2Ring2=a.add({name:"ring",animationCurve:"easeOutCubic",animationFrame:60,shape:{rx:t/2+80,ry:e/2,r:6},style:{stroke:"#ee66aa",lineWidth:1}});r.animation("shape",{r:30},!0),r.animation("style",{opacity:0},!0),s.animation("shape",{r:30},!0),s.animation("style",{opacity:0},!0);var o=this.fragment2Arc1=a.add({name:"arc",animationFrame:90,animationCurve:"easeOutCubic",shape:{rx:t/2,ry:e/2,r:60,startAngle:-Math.PI,endAngle:.01-Math.PI},style:{stroke:"#30c9e8",lineWidth:2,rotate:0}}),m=this.fragment2Arc2=a.add({name:"arc",animationFrame:90,animationCurve:"easeOutCubic",shape:{rx:t/2,ry:e/2,r:60,startAngle:0,endAngle:.01},style:{stroke:"#30c9e8",lineWidth:2,rotate:0}}),l=this.fragment2Arc3=a.add({name:"arc",animationFrame:90,animationCurve:"easeOutCubic",shape:{rx:t/2,ry:e/2,r:100,startAngle:-Math.PI,endAngle:.01-Math.PI},style:{stroke:"#eeca54",lineWidth:2,lineCap:"round",rotate:0}}),h=this.fragment2Arc4=a.add({name:"arc",animationFrame:90,animationCurve:"easeOutCubic",shape:{rx:t/2,ry:e/2,r:100,startAngle:0,endAngle:.01},style:{stroke:"#eeca54",lineWidth:2,lineCap:"round",rotate:0}});return o.animation("shape",{startAngle:-Math.PI,endAngle:0},!0),m.animation("shape",{startAngle:0,endAngle:Math.PI},!0),o.animation("style",{rotate:360},!0),m.animation("style",{rotate:360},!0),l.animation("shape",{startAngle:-Math.PI,endAngle:0,r:20},!0),h.animation("shape",{startAngle:0,endAngle:Math.PI,r:20},!0),l.animation("style",{rotate:360},!0),h.animation("style",{rotate:360},!0),a.launchAnimation()},fragment3:function(a){var n=Object(i.a)(a.area,2),t=n[0],e=n[1],r=this.fragment2Ring12=a.add({name:"ring",animationCurve:"easeOutCubic",animationFrame:60,shape:{rx:t/2-60,ry:e/2,r:10},style:{stroke:"#c71f16",lineWidth:1}}),s=this.fragment2Ring22=a.add({name:"ring",animationCurve:"easeOutCubic",animationFrame:60,shape:{rx:t/2+60,ry:e/2,r:10},style:{stroke:"#c71f16",lineWidth:1}});r.animation("shape",{r:40},!0),s.animation("shape",{r:40},!0),r.animation("style",{opacity:0},!0),s.animation("style",{opacity:0},!0),this.fragment2Arc1.animation("shape",{r:100},!0),this.fragment2Arc2.animation("shape",{r:100},!0),this.fragment2Arc3.animation("shape",{r:10},!0),this.fragment2Arc4.animation("shape",{r:10},!0),this.fragment2Arc1.animation("style",{opacity:0},!0),this.fragment2Arc2.animation("style",{opacity:0},!0),this.fragment2Arc3.animation("style",{opacity:0},!0),this.fragment2Arc4.animation("style",{opacity:0},!0);var o=this.fragment3Circle1=a.add({name:"circle",animationFrame:90,animationCurve:"easeInOutBack",shape:{rx:0,ry:0,r:10},style:{fill:"#e9c752",graphCenter:[t/2,e/2],rotate:30},setGraphCenter:function(){}}),m=this.fragment3Circle2=a.add({name:"circle",animationFrame:90,animationCurve:"easeInOutBack",shape:{rx:t,ry:e,r:10},style:{fill:"#e9c752",graphCenter:[t/2,e/2]},setGraphCenter:function(){}});return o.animation("shape",{rx:t/2,ry:e/2},!0),m.animation("shape",{rx:t/2,ry:e/2},!0),o.animation("style",{rotate:360},!0),m.animation("style",{rotate:360},!0),a.launchAnimation()},fragment4:function(a){var n=Object(i.a)(a.area,2);n[0],n[1];return this.fragment3Circle1.attr("style",{fill:"rgba(0, 0, 0, 0)",stroke:"#e9c752"}),this.fragment3Circle2.attr("style",{fill:"rgba(0, 0, 0, 0)",stroke:"#e9c752"}),this.fragment3Circle1.animation("shape",{r:50},!0),this.fragment3Circle2.animation("shape",{r:1},!0),this.fragment3Circle1.animation("style",{opacity:0},!0),this.fragment3Circle2.animation("style",{opacity:0},!0),a.launchAnimation()},fragment5:function(a){var n=this.randomNum,t=this.color,e=Object(i.a)(a.area,2),r=e[0],s=e[1],o=[r/2-80,r/2+80],m=[s/2-100,s/2+100];return this.fragment5Rings=new Array(10).fill(0).map((function(e){return a.add({name:"ring",animationCurve:"easeOutCubic",animationFrame:150,shape:{rx:n.apply(void 0,o),ry:n.apply(void 0,m),r:1},style:{stroke:t[n(0,6)]}})})),this.fragment5Rings.forEach((function(a){a.animation("shape",{r:n(40,50)},!0),a.animation("style",{opacity:0},!0)})),(this.fragment5Text=a.add({name:"text",animationCurve:"easeOutBack",shape:{content:"CRender",position:[r/2,s/2],maxWidth:200},style:{fill:"#66d7ee",fontSize:50,shadowBlur:0,shadowColor:"#66eece",scale:[.5,.5],rotate:-90,opacity:0}})).animation("style",{opacity:1,rotate:0,scale:[1.4,1.4],shadowBlur:20},!0),(this.fragment1Polyline1=a.add({name:"polyline",animationCurve:"easeOutBack",shape:{points:[[r/2,s/2],[r/2,s/2]]},style:{lineWidth:7,stroke:"#66d7ee",shadowColor:"#66eece",shadowBlur:20}})).animation("shape",{points:[[r/2-200,s/2+40],[r/2+200,s/2+40]]},!0),a.launchAnimation()},randomNum:function(a,n){switch(arguments.length){case 1:return parseInt(Math.random()*a+1,10);case 2:return parseInt(Math.random()*(n-a+1)+a,10)}}},mounted:function(){this.init()}},m=(t(308),t(0)),l=Object(m.a)(o,(function(){var a=this.$createElement,n=this._self._c||a;return n("div",{staticClass:"show-animation"},[n("canvas",{ref:"canvas",staticClass:"canvas",on:{click:this.animation}})])}),[],!1,null,null,null);n.default=l.exports}}]);