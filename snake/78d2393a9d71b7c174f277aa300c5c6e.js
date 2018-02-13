require=function(r,e,n){function t(n,o){function i(r){return t(i.resolve(r))}function f(e){return r[n][1][e]||e}if(!e[n]){if(!r[n]){var c="function"==typeof require&&require;if(!o&&c)return c(n,!0);if(u)return u(n,!0);var l=new Error("Cannot find module '"+n+"'");throw l.code="MODULE_NOT_FOUND",l}i.resolve=f;var a=e[n]=new t.Module;r[n][0].call(a.exports,i,a,a.exports)}return e[n].exports}function o(){this.bundle=t,this.exports={}}var u="function"==typeof require&&require;t.Module=o,t.modules=r,t.cache=e,t.parent=u;for(var i=0;i<n.length;i++)t(n[i]);return t}({8:[function(require,module,exports) {
"use strict";var t,e;function n(t){var n=o(t.width,t.height);return{initArgs:t,state:e.InProgress,width:t.width,height:t.height,boardState:n,snake:{direction:t.dir,nextDirection:t.dir,length:t.snakeLength,position:t.position},noms:i(n,t.width,t.height)}}function r(t){for(var n=t.snake,r=t.boardState,o=t.width,s=t.height,a=t.initArgs,h=0;h<o;h++)for(var c=0;c<s;c++)r[h][c]=0;t.noms=i(r,o,s),t.state=e.InProgress,n.direction=a.dir,n.nextDirection=a.dir,n.length=a.snakeLength,n.position=a.position}function i(t,e,n){var r=Math.floor(Math.random()*e),o=Math.floor(Math.random()*n);return t[r][o]>0?i(t,e,n):[r,o]}function o(t,e){for(var n=new Array(t),r=0;r<t;r++){for(var i=new Array(e),o=0;o<e;o++)i[o]=0;n[r]=i}return n}function s(t){var n=a(t,t.snake.nextDirection);if(h(t,n))t.state=e.Lost;else{var r=n[0],o=n[1],s=t.boardState,c=t.snake,d=t.noms,g=t.width,f=t.height;if(c.position=[r,o],r===d[0]&&o===d[1])c.length++,t.noms=i(s,g,f);else for(var u=0;u<g;u++)for(var p=0;p<f;p++)s[u][p]>0&&s[u][p]--;c.direction=c.nextDirection,s[r][o]=c.length}}function a(e,n){e.boardState,e.width,e.height;var r=e.snake.position,i=r[0],o=r[1];switch(n){case t.Left:return[i-1,o];case t.Up:return[i,o-1];case t.Right:return[i+1,o];case t.Down:return[i,o+1]}}function h(t,e){var n=t.boardState,r=t.width,i=t.height,o=e[0],s=e[1];return o>=r||o<0||s>=i||s<0||n[o][s]>1}function c(e,n){var r=e.snake;switch(n){case t.Left:r.direction!==t.Right&&(r.nextDirection=t.Left);break;case t.Right:r.direction!==t.Left&&(r.nextDirection=t.Right);break;case t.Up:r.direction!==t.Down&&(r.nextDirection=t.Up);break;case t.Down:r.direction!==t.Up&&(r.nextDirection=t.Down)}}function d(t){var e=t.snake,n=t.initArgs;return e.length-n.snakeLength}Object.defineProperty(exports,"__esModule",{value:!0}),function(t){t[t.Left=0]="Left",t[t.Up=1]="Up",t[t.Right=2]="Right",t[t.Down=3]="Down"}(t=exports.Dir||(exports.Dir={})),function(t){t[t.InProgress=0]="InProgress",t[t.InProgressAndPaused=1]="InProgressAndPaused",t[t.Lost=2]="Lost",t[t.Won=3]="Won"}(e=exports.GameState||(exports.GameState={})),exports.init=n,exports.reinit=r,exports.update=s,exports.setDirection=c,exports.getScore=d;
},{}],6:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./core"),t=require("./core"),n=100,a=20,r=20,o=4,i=e.Dir.Right,s=1,c=1;function f(e){var t=e.getContext("2d"),n=l();window.addEventListener("keydown",function(e){return P(n,e.keyCode)}),d(t,n),x(t,n)}function l(){return{game:t.init({width:a,height:r,dir:i,snakeLength:o,position:[s,c]}),needsRender:!0}}function u(e){t.reinit(e.game),e.needsRender=!0}function d(t,n){var a=n.game,r=performance.now();if(n.needsRender){switch(a.state){case e.GameState.InProgress:g(t,a,r);break;case e.GameState.InProgressAndPaused:R(t,a);break;case e.GameState.Lost:k(t,a);break;case e.GameState.Won:p(t,a)}n.needsRender=!1}else S(t,a,r);requestAnimationFrame(function(){return d(t,n)})}function g(e,t,n){var a=h(e.canvas,t),r=a[0],o=a[1];e.fillStyle="rgb(0, 0, 0)",e.fillRect(0,0,e.canvas.width,e.canvas.height);for(var i=0;i<t.width;i++)for(var s=0;s<t.height;s++){if(t.noms[0]===i&&t.noms[1]===s)e.fillStyle=w(n);else if(t.boardState[i][s]==t.snake.length)e.fillStyle="rgb(255, 255, 255)";else{if(!(t.boardState[i][s]>0))continue;var c=t.boardState[i][s]/t.snake.length;e.fillStyle=m(c)}e.fillRect(i*r,s*o,r,o)}}function h(e,t){return[e.width/t.width,e.height/t.height]}function b(e,t,n){return t+Math.floor(e*(n-t))}function m(e){return"rgb("+b(e,150,200)+","+b(e,150,255)+","+b(e,140,100)+")"}function S(e,t,n){var a=t.noms,r=a[0],o=a[1],i=h(e.canvas,t),s=i[0],c=i[1];e.fillStyle=w(n),e.fillRect(r*s,o*c,s,c)}function v(e){return Math.floor(255.999999*e)}function w(e){var t=e%100/100;return"rgb(255,"+v(e%200/200)+","+v(t)+")"}function R(e,t){e.fillStyle="rgb(240, 20, 20)",e.font="40px Roboto",e.fillText("Paused",300,200)}function k(e,n){e.fillStyle="rgb(255, 0, 0)",e.font="40px Roboto",e.fillText("You died",300,200),e.font="34px Roboto",e.fillText("Score: "+t.getScore(n),320,400)}function p(e,t){e.fillStyle="rgb(255, 0, 0)",e.font="40px Roboto",e.fillText("Wtf.",300,200),e.font="34px Roboto",e.fillText("You won?",320,400)}function x(a,r){setInterval(function(){var n=r.game;switch(n.state){case e.GameState.InProgress:t.update(n),r.needsRender=!0}},n)}function P(t,n){switch(t.game.state){case e.GameState.InProgress:G(t,n);break;case e.GameState.InProgressAndPaused:D(t,n);break;case e.GameState.Lost:case e.GameState.Won:y(t,n)}}function y(e,t){switch(t){case 13:case 32:u(e)}}function G(n,a){var r=n.game;switch(a){case 27:r.state=e.GameState.InProgressAndPaused,n.needsRender=!0;break;case 65:case 37:t.setDirection(r,e.Dir.Left);break;case 87:case 38:t.setDirection(r,e.Dir.Up);break;case 68:case 39:t.setDirection(r,e.Dir.Right);break;case 83:case 40:t.setDirection(r,e.Dir.Down)}}function D(t,n){var a=t.game;switch(console.log("unpausing",n),n){case 18:break;default:a.state=e.GameState.InProgress}}exports.start=f;
},{"./core":8}],4:[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./snake/game"),t=document.getElementById("game-container");t&&e.start(t);
},{"./snake/game":6}]},{},[4])