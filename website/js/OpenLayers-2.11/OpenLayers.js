/*

  OpenLayers.js -- OpenLayers Map Viewer Library

  Copyright 2005-2011 OpenLayers Contributors, released under the FreeBSD
  license. Please see http://svn.openlayers.org/trunk/openlayers/license.txt
  for the full text of the license.

  Includes compressed code under the following licenses:

  (For uncompressed versions of the code used please see the
  OpenLayers SVN repository: <http://openlayers.org/>)

*/

/* Contains portions of Prototype.js:
 *
 * Prototype JavaScript framework, version 1.4.0
 *  (c) 2005 Sam Stephenson <sam@conio.net>
 *
 *  Prototype is freely distributable under the terms of an MIT-style license.
 *  For details, see the Prototype web site: http://prototype.conio.net/
 *
 *--------------------------------------------------------------------------*/

/**  
*  
*  Contains portions of Rico <http://openrico.org/>
* 
*  Copyright 2005 Sabre Airline Solutions  
*  
*  Licensed under the Apache License, Version 2.0 (the "License"); you
*  may not use this file except in compliance with the License. You
*  may obtain a copy of the License at
*  
*         http://www.apache.org/licenses/LICENSE-2.0  
*  
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
*  implied. See the License for the specific language governing
*  permissions and limitations under the License. 
*
**/

/**
 * Contains XMLHttpRequest.js <http://code.google.com/p/xmlhttprequest/>
 * Copyright 2007 Sergey Ilinsky (http://www.ilinsky.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * Contains portions of Gears <http://code.google.com/apis/gears/>
 *
 * Copyright 2007, Google Inc.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *  1. Redistributions of source code must retain the above copyright notice,
 *     this list of conditions and the following disclaimer.
 *  2. Redistributions in binary form must reproduce the above copyright notice,
 *     this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 *  3. Neither the name of Google Inc. nor the names of its contributors may be
 *     used to endorse or promote products derived from this software without
 *     specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS;
 * OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 * WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * Sets up google.gears.*, which is *the only* supported way to access Gears.
 *
 * Circumvent this file at your own risk!
 *
 * In the future, Gears may automatically define google.gears.* without this
 * file. Gears may use these objects to transparently fix bugs and compatibility
 * issues. Applications that use the code below will continue to work seamlessly
 * when that happens.
 */

/**
 * OpenLayers.Util.pagePosition is based on Yahoo's getXY method, which is
 * Copyright (c) 2006, Yahoo! Inc.
 * All rights reserved.
 * 
 * Redistribution and use of this software in source and binary forms, with or
 * without modification, are permitted provided that the following conditions
 * are met:
 * 
 * * Redistributions of source code must retain the above copyright notice,
 *   this list of conditions and the following disclaimer.
 * 
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 * 
 * * Neither the name of Yahoo! Inc. nor the names of its contributors may be
 *   used to endorse or promote products derived from this software without
 *   specific prior written permission of Yahoo! Inc.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE 
 * POSSIBILITY OF SUCH DAMAGE.
 */var OpenLayers={VERSION_NUMBER:"Release 2.11",singleFile:true,_getScriptLocation:(function(){var r=new RegExp("(^|(.*?\\/))(OpenLayers\.js)(\\?|$)"),s=document.getElementsByTagName('script'),src,m,l="";for(var i=0,len=s.length;i<len;i++){src=s[i].getAttribute('src');if(src){var m=src.match(r);if(m){l=m[1];break;}}}
return(function(){return l;});})()};OpenLayers.Class=function(){var len=arguments.length;var P=arguments[0];var F=arguments[len-1];var C=typeof F.initialize=="function"?F.initialize:function(){P.prototype.initialize.apply(this,arguments);};if(len>1){var newArgs=[C,P].concat(Array.prototype.slice.call(arguments).slice(1,len-1),F);OpenLayers.inherit.apply(null,newArgs);}else{C.prototype=F;}
return C;};OpenLayers.Class.isPrototype=function(){};OpenLayers.Class.create=function(){return function(){if(arguments&&arguments[0]!=OpenLayers.Class.isPrototype){this.initialize.apply(this,arguments);}};};OpenLayers.Class.inherit=function(P){var C=function(){P.call(this);};var newArgs=[C].concat(Array.prototype.slice.call(arguments));OpenLayers.inherit.apply(null,newArgs);return C.prototype;};OpenLayers.inherit=function(C,P){var F=function(){};F.prototype=P.prototype;C.prototype=new F;var i,l,o;for(i=2,l=arguments.length;i<l;i++){o=arguments[i];if(typeof o==="function"){o=o.prototype;}
OpenLayers.Util.extend(C.prototype,o);}};OpenLayers.Util=OpenLayers.Util||{};OpenLayers.Util.extend=function(destination,source){destination=destination||{};if(source){for(var property in source){var value=source[property];if(value!==undefined){destination[property]=value;}}
var sourceIsEvt=typeof window.Event=="function"&&source instanceof window.Event;if(!sourceIsEvt&&source.hasOwnProperty&&source.hasOwnProperty("toString")){destination.toString=source.toString;}}
return destination;};OpenLayers.Console={log:function(){},debug:function(){},info:function(){},warn:function(){},error:function(){},userError:function(error){alert(error);},assert:function(){},dir:function(){},dirxml:function(){},trace:function(){},group:function(){},groupEnd:function(){},time:function(){},timeEnd:function(){},profile:function(){},profileEnd:function(){},count:function(){},CLASS_NAME:"OpenLayers.Console"};(function(){var scripts=document.getElementsByTagName("script");for(var i=0,len=scripts.length;i<len;++i){if(scripts[i].src.indexOf("firebug.js")!=-1){if(console){OpenLayers.Util.extend(OpenLayers.Console,console);break;}}}})();OpenLayers.String={startsWith:function(str,sub){return(str.indexOf(sub)==0);},contains:function(str,sub){return(str.indexOf(sub)!=-1);},trim:function(str){return str.replace(/^\s\s*/,'').replace(/\s\s*$/,'');},camelize:function(str){var oStringList=str.split('-');var camelizedString=oStringList[0];for(var i=1,len=oStringList.length;i<len;i++){var s=oStringList[i];camelizedString+=s.charAt(0).toUpperCase()+s.substring(1);}
return camelizedString;},format:function(template,context,args){if(!context){context=window;}
var replacer=function(str,match){var replacement;var subs=match.split(/\.+/);for(var i=0;i<subs.length;i++){if(i==0){replacement=context;}
replacement=replacement[subs[i]];}
if(typeof replacement=="function"){replacement=args?replacement.apply(null,args):replacement();}
if(typeof replacement=='undefined'){return'undefined';}else{return replacement;}};return template.replace(OpenLayers.String.tokenRegEx,replacer);},tokenRegEx:/\$\{([\w.]+?)\}/g,numberRegEx:/^([+-]?)(?=\d|\.\d)\d*(\.\d*)?([Ee]([+-]?\d+))?$/,isNumeric:function(value){return OpenLayers.String.numberRegEx.test(value);},numericIf:function(value){return OpenLayers.String.isNumeric(value)?parseFloat(value):value;}};if(!String.prototype.startsWith){String.prototype.startsWith=function(sStart){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.startsWith'}));return OpenLayers.String.startsWith(this,sStart);};}
if(!String.prototype.contains){String.prototype.contains=function(str){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.contains'}));return OpenLayers.String.contains(this,str);};}
if(!String.prototype.trim){String.prototype.trim=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.trim'}));return OpenLayers.String.trim(this);};}
if(!String.prototype.camelize){String.prototype.camelize=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.String.camelize'}));return OpenLayers.String.camelize(this);};}
OpenLayers.Number={decimalSeparator:".",thousandsSeparator:",",limitSigDigs:function(num,sig){var fig=0;if(sig>0){fig=parseFloat(num.toPrecision(sig));}
return fig;},format:function(num,dec,tsep,dsep){dec=(typeof dec!="undefined")?dec:0;tsep=(typeof tsep!="undefined")?tsep:OpenLayers.Number.thousandsSeparator;dsep=(typeof dsep!="undefined")?dsep:OpenLayers.Number.decimalSeparator;if(dec!=null){num=parseFloat(num.toFixed(dec));}
var parts=num.toString().split(".");if(parts.length==1&&dec==null){dec=0;}
var integer=parts[0];if(tsep){var thousands=/(-?[0-9]+)([0-9]{3})/;while(thousands.test(integer)){integer=integer.replace(thousands,"$1"+tsep+"$2");}}
var str;if(dec==0){str=integer;}else{var rem=parts.length>1?parts[1]:"0";if(dec!=null){rem=rem+new Array(dec-rem.length+1).join("0");}
str=integer+dsep+rem;}
return str;}};if(!Number.prototype.limitSigDigs){Number.prototype.limitSigDigs=function(sig){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Number.limitSigDigs'}));return OpenLayers.Number.limitSigDigs(this,sig);};}
OpenLayers.Function={bind:function(func,object){var args=Array.prototype.slice.apply(arguments,[2]);return function(){var newArgs=args.concat(Array.prototype.slice.apply(arguments,[0]));return func.apply(object,newArgs);};},bindAsEventListener:function(func,object){return function(event){return func.call(object,event||window.event);};},False:function(){return false;},True:function(){return true;},Void:function(){}};if(!Function.prototype.bind){Function.prototype.bind=function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Function.bind'}));Array.prototype.unshift.apply(arguments,[this]);return OpenLayers.Function.bind.apply(null,arguments);};}
if(!Function.prototype.bindAsEventListener){Function.prototype.bindAsEventListener=function(object){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Function.bindAsEventListener'}));return OpenLayers.Function.bindAsEventListener(this,object);};}
OpenLayers.Array={filter:function(array,callback,caller){var selected=[];if(Array.prototype.filter){selected=array.filter(callback,caller);}else{var len=array.length;if(typeof callback!="function"){throw new TypeError();}
for(var i=0;i<len;i++){if(i in array){var val=array[i];if(callback.call(caller,val,i,array)){selected.push(val);}}}}
return selected;}};OpenLayers.Lang={code:null,defaultCode:"en",getCode:function(){if(!OpenLayers.Lang.code){OpenLayers.Lang.setCode();}
return OpenLayers.Lang.code;},setCode:function(code){var lang;if(!code){code=(OpenLayers.BROWSER_NAME=="msie")?navigator.userLanguage:navigator.language;}
var parts=code.split('-');parts[0]=parts[0].toLowerCase();if(typeof OpenLayers.Lang[parts[0]]=="object"){lang=parts[0];}
if(parts[1]){var testLang=parts[0]+'-'+parts[1].toUpperCase();if(typeof OpenLayers.Lang[testLang]=="object"){lang=testLang;}}
if(!lang){OpenLayers.Console.warn('Failed to find OpenLayers.Lang.'+parts.join("-")+' dictionary, falling back to default language');lang=OpenLayers.Lang.defaultCode;}
OpenLayers.Lang.code=lang;},translate:function(key,context){var dictionary=OpenLayers.Lang[OpenLayers.Lang.getCode()];var message=dictionary&&dictionary[key];if(!message){message=key;}
if(context){message=OpenLayers.String.format(message,context);}
return message;}};OpenLayers.i18n=OpenLayers.Lang.translate;OpenLayers.Pixel=OpenLayers.Class({x:0.0,y:0.0,initialize:function(x,y){this.x=parseFloat(x);this.y=parseFloat(y);},toString:function(){return("x="+this.x+",y="+this.y);},clone:function(){return new OpenLayers.Pixel(this.x,this.y);},equals:function(px){var equals=false;if(px!=null){equals=((this.x==px.x&&this.y==px.y)||(isNaN(this.x)&&isNaN(this.y)&&isNaN(px.x)&&isNaN(px.y)));}
return equals;},distanceTo:function(px){return Math.sqrt(Math.pow(this.x-px.x,2)+
Math.pow(this.y-px.y,2));},add:function(x,y){if((x==null)||(y==null)){var msg=OpenLayers.i18n("pixelAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.Pixel(this.x+x,this.y+y);},offset:function(px){var newPx=this.clone();if(px){newPx=this.add(px.x,px.y);}
return newPx;},CLASS_NAME:"OpenLayers.Pixel"});OpenLayers.Bounds=OpenLayers.Class({left:null,bottom:null,right:null,top:null,centerLonLat:null,initialize:function(left,bottom,right,top){if(left!=null){this.left=OpenLayers.Util.toFloat(left);}
if(bottom!=null){this.bottom=OpenLayers.Util.toFloat(bottom);}
if(right!=null){this.right=OpenLayers.Util.toFloat(right);}
if(top!=null){this.top=OpenLayers.Util.toFloat(top);}},clone:function(){return new OpenLayers.Bounds(this.left,this.bottom,this.right,this.top);},equals:function(bounds){var equals=false;if(bounds!=null){equals=((this.left==bounds.left)&&(this.right==bounds.right)&&(this.top==bounds.top)&&(this.bottom==bounds.bottom));}
return equals;},toString:function(){return[this.left,this.bottom,this.right,this.top].join(",");},toArray:function(reverseAxisOrder){if(reverseAxisOrder===true){return[this.bottom,this.left,this.top,this.right];}else{return[this.left,this.bottom,this.right,this.top];}},toBBOX:function(decimal,reverseAxisOrder){if(decimal==null){decimal=6;}
var mult=Math.pow(10,decimal);var xmin=Math.round(this.left*mult)/mult;var ymin=Math.round(this.bottom*mult)/mult;var xmax=Math.round(this.right*mult)/mult;var ymax=Math.round(this.top*mult)/mult;if(reverseAxisOrder===true){return ymin+","+xmin+","+ymax+","+xmax;}else{return xmin+","+ymin+","+xmax+","+ymax;}},toGeometry:function(){return new OpenLayers.Geometry.Polygon([new OpenLayers.Geometry.LinearRing([new OpenLayers.Geometry.Point(this.left,this.bottom),new OpenLayers.Geometry.Point(this.right,this.bottom),new OpenLayers.Geometry.Point(this.right,this.top),new OpenLayers.Geometry.Point(this.left,this.top)])]);},getWidth:function(){return(this.right-this.left);},getHeight:function(){return(this.top-this.bottom);},getSize:function(){return new OpenLayers.Size(this.getWidth(),this.getHeight());},getCenterPixel:function(){return new OpenLayers.Pixel((this.left+this.right)/2,(this.bottom+this.top)/2);},getCenterLonLat:function(){if(!this.centerLonLat){this.centerLonLat=new OpenLayers.LonLat((this.left+this.right)/2,(this.bottom+this.top)/2);}
return this.centerLonLat;},scale:function(ratio,origin){if(origin==null){origin=this.getCenterLonLat();}
var origx,origy;if(origin.CLASS_NAME=="OpenLayers.LonLat"){origx=origin.lon;origy=origin.lat;}else{origx=origin.x;origy=origin.y;}
var left=(this.left-origx)*ratio+origx;var bottom=(this.bottom-origy)*ratio+origy;var right=(this.right-origx)*ratio+origx;var top=(this.top-origy)*ratio+origy;return new OpenLayers.Bounds(left,bottom,right,top);},add:function(x,y){if((x==null)||(y==null)){var msg=OpenLayers.i18n("boundsAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.Bounds(this.left+x,this.bottom+y,this.right+x,this.top+y);},extend:function(object){var bounds=null;if(object){switch(object.CLASS_NAME){case"OpenLayers.LonLat":bounds=new OpenLayers.Bounds(object.lon,object.lat,object.lon,object.lat);break;case"OpenLayers.Geometry.Point":bounds=new OpenLayers.Bounds(object.x,object.y,object.x,object.y);break;case"OpenLayers.Bounds":bounds=object;break;}
if(bounds){this.centerLonLat=null;if((this.left==null)||(bounds.left<this.left)){this.left=bounds.left;}
if((this.bottom==null)||(bounds.bottom<this.bottom)){this.bottom=bounds.bottom;}
if((this.right==null)||(bounds.right>this.right)){this.right=bounds.right;}
if((this.top==null)||(bounds.top>this.top)){this.top=bounds.top;}}}},containsLonLat:function(ll,inclusive){return this.contains(ll.lon,ll.lat,inclusive);},containsPixel:function(px,inclusive){return this.contains(px.x,px.y,inclusive);},contains:function(x,y,inclusive){if(inclusive==null){inclusive=true;}
if(x==null||y==null){return false;}
x=OpenLayers.Util.toFloat(x);y=OpenLayers.Util.toFloat(y);var contains=false;if(inclusive){contains=((x>=this.left)&&(x<=this.right)&&(y>=this.bottom)&&(y<=this.top));}else{contains=((x>this.left)&&(x<this.right)&&(y>this.bottom)&&(y<this.top));}
return contains;},intersectsBounds:function(bounds,inclusive){if(inclusive==null){inclusive=true;}
var intersects=false;var mightTouch=(this.left==bounds.right||this.right==bounds.left||this.top==bounds.bottom||this.bottom==bounds.top);if(inclusive||!mightTouch){var inBottom=(((bounds.bottom>=this.bottom)&&(bounds.bottom<=this.top))||((this.bottom>=bounds.bottom)&&(this.bottom<=bounds.top)));var inTop=(((bounds.top>=this.bottom)&&(bounds.top<=this.top))||((this.top>bounds.bottom)&&(this.top<bounds.top)));var inLeft=(((bounds.left>=this.left)&&(bounds.left<=this.right))||((this.left>=bounds.left)&&(this.left<=bounds.right)));var inRight=(((bounds.right>=this.left)&&(bounds.right<=this.right))||((this.right>=bounds.left)&&(this.right<=bounds.right)));intersects=((inBottom||inTop)&&(inLeft||inRight));}
return intersects;},containsBounds:function(bounds,partial,inclusive){if(partial==null){partial=false;}
if(inclusive==null){inclusive=true;}
var bottomLeft=this.contains(bounds.left,bounds.bottom,inclusive);var bottomRight=this.contains(bounds.right,bounds.bottom,inclusive);var topLeft=this.contains(bounds.left,bounds.top,inclusive);var topRight=this.contains(bounds.right,bounds.top,inclusive);return(partial)?(bottomLeft||bottomRight||topLeft||topRight):(bottomLeft&&bottomRight&&topLeft&&topRight);},determineQuadrant:function(lonlat){var quadrant="";var center=this.getCenterLonLat();quadrant+=(lonlat.lat<center.lat)?"b":"t";quadrant+=(lonlat.lon<center.lon)?"l":"r";return quadrant;},transform:function(source,dest){this.centerLonLat=null;var ll=OpenLayers.Projection.transform({'x':this.left,'y':this.bottom},source,dest);var lr=OpenLayers.Projection.transform({'x':this.right,'y':this.bottom},source,dest);var ul=OpenLayers.Projection.transform({'x':this.left,'y':this.top},source,dest);var ur=OpenLayers.Projection.transform({'x':this.right,'y':this.top},source,dest);this.left=Math.min(ll.x,ul.x);this.bottom=Math.min(ll.y,lr.y);this.right=Math.max(lr.x,ur.x);this.top=Math.max(ul.y,ur.y);return this;},wrapDateLine:function(maxExtent,options){options=options||{};var leftTolerance=options.leftTolerance||0;var rightTolerance=options.rightTolerance||0;var newBounds=this.clone();if(maxExtent){while(newBounds.left<maxExtent.left&&(newBounds.right-rightTolerance)<=maxExtent.left){newBounds=newBounds.add(maxExtent.getWidth(),0);}
while((newBounds.left+leftTolerance)>=maxExtent.right&&newBounds.right>maxExtent.right){newBounds=newBounds.add(-maxExtent.getWidth(),0);}}
return newBounds;},CLASS_NAME:"OpenLayers.Bounds"});OpenLayers.Bounds.fromString=function(str,reverseAxisOrder){var bounds=str.split(",");return OpenLayers.Bounds.fromArray(bounds,reverseAxisOrder);};OpenLayers.Bounds.fromArray=function(bbox,reverseAxisOrder){return reverseAxisOrder===true?new OpenLayers.Bounds(parseFloat(bbox[1]),parseFloat(bbox[0]),parseFloat(bbox[3]),parseFloat(bbox[2])):new OpenLayers.Bounds(parseFloat(bbox[0]),parseFloat(bbox[1]),parseFloat(bbox[2]),parseFloat(bbox[3]));};OpenLayers.Bounds.fromSize=function(size){return new OpenLayers.Bounds(0,size.h,size.w,0);};OpenLayers.Bounds.oppositeQuadrant=function(quadrant){var opp="";opp+=(quadrant.charAt(0)=='t')?'b':'t';opp+=(quadrant.charAt(1)=='l')?'r':'l';return opp;};OpenLayers.Element={visible:function(element){return OpenLayers.Util.getElement(element).style.display!='none';},toggle:function(){for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);var display=OpenLayers.Element.visible(element)?'hide':'show';OpenLayers.Element[display](element);}},hide:function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{newMethod:"element.style.display = 'none';"}));for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);if(element){element.style.display='none';}}},show:function(){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{newMethod:"element.style.display = '';"}));for(var i=0,len=arguments.length;i<len;i++){var element=OpenLayers.Util.getElement(arguments[i]);if(element){element.style.display='';}}},remove:function(element){element=OpenLayers.Util.getElement(element);element.parentNode.removeChild(element);},getHeight:function(element){element=OpenLayers.Util.getElement(element);return element.offsetHeight;},getDimensions:function(element){element=OpenLayers.Util.getElement(element);if(OpenLayers.Element.getStyle(element,'display')!='none'){return{width:element.offsetWidth,height:element.offsetHeight};}
var els=element.style;var originalVisibility=els.visibility;var originalPosition=els.position;var originalDisplay=els.display;els.visibility='hidden';els.position='absolute';els.display='';var originalWidth=element.clientWidth;var originalHeight=element.clientHeight;els.display=originalDisplay;els.position=originalPosition;els.visibility=originalVisibility;return{width:originalWidth,height:originalHeight};},hasClass:function(element,name){var names=element.className;return(!!names&&new RegExp("(^|\\s)"+name+"(\\s|$)").test(names));},addClass:function(element,name){if(!OpenLayers.Element.hasClass(element,name)){element.className+=(element.className?" ":"")+name;}
return element;},removeClass:function(element,name){var names=element.className;if(names){element.className=OpenLayers.String.trim(names.replace(new RegExp("(^|\\s+)"+name+"(\\s+|$)")," "));}
return element;},toggleClass:function(element,name){if(OpenLayers.Element.hasClass(element,name)){OpenLayers.Element.removeClass(element,name);}else{OpenLayers.Element.addClass(element,name);}
return element;},getStyle:function(element,style){element=OpenLayers.Util.getElement(element);var value=null;if(element&&element.style){value=element.style[OpenLayers.String.camelize(style)];if(!value){if(document.defaultView&&document.defaultView.getComputedStyle){var css=document.defaultView.getComputedStyle(element,null);value=css?css.getPropertyValue(style):null;}else if(element.currentStyle){value=element.currentStyle[OpenLayers.String.camelize(style)];}}
var positions=['left','top','right','bottom'];if(window.opera&&(OpenLayers.Util.indexOf(positions,style)!=-1)&&(OpenLayers.Element.getStyle(element,'position')=='static')){value='auto';}}
return value=='auto'?null:value;}};OpenLayers.LonLat=OpenLayers.Class({lon:0.0,lat:0.0,initialize:function(lon,lat){this.lon=OpenLayers.Util.toFloat(lon);this.lat=OpenLayers.Util.toFloat(lat);},toString:function(){return("lon="+this.lon+",lat="+this.lat);},toShortString:function(){return(this.lon+", "+this.lat);},clone:function(){return new OpenLayers.LonLat(this.lon,this.lat);},add:function(lon,lat){if((lon==null)||(lat==null)){var msg=OpenLayers.i18n("lonlatAddError");OpenLayers.Console.error(msg);return null;}
return new OpenLayers.LonLat(this.lon+OpenLayers.Util.toFloat(lon),this.lat+OpenLayers.Util.toFloat(lat));},equals:function(ll){var equals=false;if(ll!=null){equals=((this.lon==ll.lon&&this.lat==ll.lat)||(isNaN(this.lon)&&isNaN(this.lat)&&isNaN(ll.lon)&&isNaN(ll.lat)));}
return equals;},transform:function(source,dest){var point=OpenLayers.Projection.transform({'x':this.lon,'y':this.lat},source,dest);this.lon=point.x;this.lat=point.y;return this;},wrapDateLine:function(maxExtent){var newLonLat=this.clone();if(maxExtent){while(newLonLat.lon<maxExtent.left){newLonLat.lon+=maxExtent.getWidth();}
while(newLonLat.lon>maxExtent.right){newLonLat.lon-=maxExtent.getWidth();}}
return newLonLat;},CLASS_NAME:"OpenLayers.LonLat"});OpenLayers.LonLat.fromString=function(str){var pair=str.split(",");return new OpenLayers.LonLat(pair[0],pair[1]);};OpenLayers.LonLat.fromArray=function(arr){var gotArr=OpenLayers.Util.isArray(arr),lon=gotArr&&arr[0],lat=gotArr&&arr[1];return new OpenLayers.LonLat(lon,lat);};OpenLayers.Size=OpenLayers.Class({w:0.0,h:0.0,initialize:function(w,h){this.w=parseFloat(w);this.h=parseFloat(h);},toString:function(){return("w="+this.w+",h="+this.h);},clone:function(){return new OpenLayers.Size(this.w,this.h);},equals:function(sz){var equals=false;if(sz!=null){equals=((this.w==sz.w&&this.h==sz.h)||(isNaN(this.w)&&isNaN(this.h)&&isNaN(sz.w)&&isNaN(sz.h)));}
return equals;},CLASS_NAME:"OpenLayers.Size"});OpenLayers.Util=OpenLayers.Util||{};OpenLayers.Util.getElement=function(){var elements=[];for(var i=0,len=arguments.length;i<len;i++){var element=arguments[i];if(typeof element=='string'){element=document.getElementById(element);}
if(arguments.length==1){return element;}
elements.push(element);}
return elements;};OpenLayers.Util.isElement=function(o){return!!(o&&o.nodeType===1);};OpenLayers.Util.isArray=function(a){return(Object.prototype.toString.call(a)==='[object Array]');};if(typeof window.$==="undefined"){window.$=OpenLayers.Util.getElement;}
OpenLayers.Util.removeItem=function(array,item){for(var i=array.length-1;i>=0;i--){if(array[i]==item){array.splice(i,1);}}
return array;};OpenLayers.Util.clearArray=function(array){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'array = []'}));array.length=0;};OpenLayers.Util.indexOf=function(array,obj){if(typeof array.indexOf=="function"){return array.indexOf(obj);}else{for(var i=0,len=array.length;i<len;i++){if(array[i]==obj){return i;}}
return-1;}};OpenLayers.Util.modifyDOMElement=function(element,id,px,sz,position,border,overflow,opacity){if(id){element.id=id;}
if(px){element.style.left=px.x+"px";element.style.top=px.y+"px";}
if(sz){element.style.width=sz.w+"px";element.style.height=sz.h+"px";}
if(position){element.style.position=position;}
if(border){element.style.border=border;}
if(overflow){element.style.overflow=overflow;}
if(parseFloat(opacity)>=0.0&&parseFloat(opacity)<1.0){element.style.filter='alpha(opacity='+(opacity*100)+')';element.style.opacity=opacity;}else if(parseFloat(opacity)==1.0){element.style.filter='';element.style.opacity='';}};OpenLayers.Util.createDiv=function(id,px,sz,imgURL,position,border,overflow,opacity){var dom=document.createElement('div');if(imgURL){dom.style.backgroundImage='url('+imgURL+')';}
if(!id){id=OpenLayers.Util.createUniqueID("OpenLayersDiv");}
if(!position){position="absolute";}
OpenLayers.Util.modifyDOMElement(dom,id,px,sz,position,border,overflow,opacity);return dom;};OpenLayers.Util.createImage=function(id,px,sz,imgURL,position,border,opacity,delayDisplay){var image=document.createElement("img");if(!id){id=OpenLayers.Util.createUniqueID("OpenLayersDiv");}
if(!position){position="relative";}
OpenLayers.Util.modifyDOMElement(image,id,px,sz,position,border,null,opacity);if(delayDisplay){image.style.display="none";OpenLayers.Event.observe(image,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,image));OpenLayers.Event.observe(image,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,image));}
image.style.alt=id;image.galleryImg="no";if(imgURL){image.src=imgURL;}
return image;};OpenLayers.Util.setOpacity=function(element,opacity){OpenLayers.Util.modifyDOMElement(element,null,null,null,null,null,null,opacity);};OpenLayers.Util.onImageLoad=function(){if(!this.viewRequestID||(this.map&&this.viewRequestID==this.map.viewRequestID)){this.style.display="";}
OpenLayers.Element.removeClass(this,"olImageLoadError");};OpenLayers.IMAGE_RELOAD_ATTEMPTS=0;OpenLayers.Util.onImageLoadError=function(){this._attempts=(this._attempts)?(this._attempts+1):1;if(this._attempts<=OpenLayers.IMAGE_RELOAD_ATTEMPTS){var urls=this.urls;if(urls&&OpenLayers.Util.isArray(urls)&&urls.length>1){var src=this.src.toString();var current_url,k;for(k=0;current_url=urls[k];k++){if(src.indexOf(current_url)!=-1){break;}}
var guess=Math.floor(urls.length*Math.random());var new_url=urls[guess];k=0;while(new_url==current_url&&k++<4){guess=Math.floor(urls.length*Math.random());new_url=urls[guess];}
this.src=src.replace(current_url,new_url);}else{this.src=this.src;}}else{OpenLayers.Element.addClass(this,"olImageLoadError");}
this.style.display="";};OpenLayers.Util.alphaHackNeeded=null;OpenLayers.Util.alphaHack=function(){if(OpenLayers.Util.alphaHackNeeded==null){var arVersion=navigator.appVersion.split("MSIE");var version=parseFloat(arVersion[1]);var filter=false;try{filter=!!(document.body.filters);}catch(e){}
OpenLayers.Util.alphaHackNeeded=(filter&&(version>=5.5)&&(version<7));}
return OpenLayers.Util.alphaHackNeeded;};OpenLayers.Util.modifyAlphaImageDiv=function(div,id,px,sz,imgURL,position,border,sizing,opacity){OpenLayers.Util.modifyDOMElement(div,id,px,sz,position,null,null,opacity);var img=div.childNodes[0];if(imgURL){img.src=imgURL;}
OpenLayers.Util.modifyDOMElement(img,div.id+"_innerImage",null,sz,"relative",border);if(OpenLayers.Util.alphaHack()){if(div.style.display!="none"){div.style.display="inline-block";}
if(sizing==null){sizing="scale";}
div.style.filter="progid:DXImageTransform.Microsoft"+".AlphaImageLoader(src='"+img.src+"', "+"sizingMethod='"+sizing+"')";if(parseFloat(div.style.opacity)>=0.0&&parseFloat(div.style.opacity)<1.0){div.style.filter+=" alpha(opacity="+div.style.opacity*100+")";}
img.style.filter="alpha(opacity=0)";}};OpenLayers.Util.createAlphaImageDiv=function(id,px,sz,imgURL,position,border,sizing,opacity,delayDisplay){var div=OpenLayers.Util.createDiv();var img=OpenLayers.Util.createImage(null,null,null,null,null,null,null,false);div.appendChild(img);if(delayDisplay){img.style.display="none";OpenLayers.Event.observe(img,"load",OpenLayers.Function.bind(OpenLayers.Util.onImageLoad,div));OpenLayers.Event.observe(img,"error",OpenLayers.Function.bind(OpenLayers.Util.onImageLoadError,div));}
OpenLayers.Util.modifyAlphaImageDiv(div,id,px,sz,imgURL,position,border,sizing,opacity);return div;};OpenLayers.Util.upperCaseObject=function(object){var uObject={};for(var key in object){uObject[key.toUpperCase()]=object[key];}
return uObject;};OpenLayers.Util.applyDefaults=function(to,from){to=to||{};var fromIsEvt=typeof window.Event=="function"&&from instanceof window.Event;for(var key in from){if(to[key]===undefined||(!fromIsEvt&&from.hasOwnProperty&&from.hasOwnProperty(key)&&!to.hasOwnProperty(key))){to[key]=from[key];}}
if(!fromIsEvt&&from&&from.hasOwnProperty&&from.hasOwnProperty('toString')&&!to.hasOwnProperty('toString')){to.toString=from.toString;}
return to;};OpenLayers.Util.getParameterString=function(params){var paramsArray=[];for(var key in params){var value=params[key];if((value!=null)&&(typeof value!='function')){var encodedValue;if(typeof value=='object'&&value.constructor==Array){var encodedItemArray=[];var item;for(var itemIndex=0,len=value.length;itemIndex<len;itemIndex++){item=value[itemIndex];encodedItemArray.push(encodeURIComponent((item===null||item===undefined)?"":item));}
encodedValue=encodedItemArray.join(",");}
else{encodedValue=encodeURIComponent(value);}
paramsArray.push(encodeURIComponent(key)+"="+encodedValue);}}
return paramsArray.join("&");};OpenLayers.Util.urlAppend=function(url,paramStr){var newUrl=url;if(paramStr){var parts=(url+" ").split(/[?&]/);newUrl+=(parts.pop()===" "?paramStr:parts.length?"&"+paramStr:"?"+paramStr);}
return newUrl;};OpenLayers.ImgPath='';OpenLayers.Util.getImagesLocation=function(){return OpenLayers.ImgPath||(OpenLayers._getScriptLocation()+"img/");};OpenLayers.Util.Try=function(){var returnValue=null;for(var i=0,len=arguments.length;i<len;i++){var lambda=arguments[i];try{returnValue=lambda();break;}catch(e){}}
return returnValue;};OpenLayers.Util.getXmlNodeValue=function(node){var val=null;OpenLayers.Util.Try(function(){val=node.text;if(!val){val=node.textContent;}
if(!val){val=node.firstChild.nodeValue;}},function(){val=node.textContent;});return val;};OpenLayers.Util.mouseLeft=function(evt,div){var target=(evt.relatedTarget)?evt.relatedTarget:evt.toElement;while(target!=div&&target!=null){target=target.parentNode;}
return(target!=div);};OpenLayers.Util.DEFAULT_PRECISION=14;OpenLayers.Util.toFloat=function(number,precision){if(precision==null){precision=OpenLayers.Util.DEFAULT_PRECISION;}
if(typeof number!=="number"){number=parseFloat(number);}
return precision===0?number:parseFloat(number.toPrecision(precision));};OpenLayers.Util.rad=function(x){return x*Math.PI/180;};OpenLayers.Util.deg=function(x){return x*180/Math.PI;};OpenLayers.Util.VincentyConstants={a:6378137,b:6356752.3142,f:1/298.257223563};OpenLayers.Util.distVincenty=function(p1,p2){var ct=OpenLayers.Util.VincentyConstants;var a=ct.a,b=ct.b,f=ct.f;var L=OpenLayers.Util.rad(p2.lon-p1.lon);var U1=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p1.lat)));var U2=Math.atan((1-f)*Math.tan(OpenLayers.Util.rad(p2.lat)));var sinU1=Math.sin(U1),cosU1=Math.cos(U1);var sinU2=Math.sin(U2),cosU2=Math.cos(U2);var lambda=L,lambdaP=2*Math.PI;var iterLimit=20;while(Math.abs(lambda-lambdaP)>1e-12&&--iterLimit>0){var sinLambda=Math.sin(lambda),cosLambda=Math.cos(lambda);var sinSigma=Math.sqrt((cosU2*sinLambda)*(cosU2*sinLambda)+
(cosU1*sinU2-sinU1*cosU2*cosLambda)*(cosU1*sinU2-sinU1*cosU2*cosLambda));if(sinSigma==0){return 0;}
var cosSigma=sinU1*sinU2+cosU1*cosU2*cosLambda;var sigma=Math.atan2(sinSigma,cosSigma);var alpha=Math.asin(cosU1*cosU2*sinLambda/sinSigma);var cosSqAlpha=Math.cos(alpha)*Math.cos(alpha);var cos2SigmaM=cosSigma-2*sinU1*sinU2/cosSqAlpha;var C=f/16*cosSqAlpha*(4+f*(4-3*cosSqAlpha));lambdaP=lambda;lambda=L+(1-C)*f*Math.sin(alpha)*(sigma+C*sinSigma*(cos2SigmaM+C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)));}
if(iterLimit==0){return NaN;}
var uSq=cosSqAlpha*(a*a-b*b)/(b*b);var A=1+uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));var B=uSq/1024*(256+uSq*(-128+uSq*(74-47*uSq)));var deltaSigma=B*sinSigma*(cos2SigmaM+B/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)-
B/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));var s=b*A*(sigma-deltaSigma);var d=s.toFixed(3)/1000;return d;};OpenLayers.Util.destinationVincenty=function(lonlat,brng,dist){var u=OpenLayers.Util;var ct=u.VincentyConstants;var a=ct.a,b=ct.b,f=ct.f;var lon1=lonlat.lon;var lat1=lonlat.lat;var s=dist;var alpha1=u.rad(brng);var sinAlpha1=Math.sin(alpha1);var cosAlpha1=Math.cos(alpha1);var tanU1=(1-f)*Math.tan(u.rad(lat1));var cosU1=1/Math.sqrt((1+tanU1*tanU1)),sinU1=tanU1*cosU1;var sigma1=Math.atan2(tanU1,cosAlpha1);var sinAlpha=cosU1*sinAlpha1;var cosSqAlpha=1-sinAlpha*sinAlpha;var uSq=cosSqAlpha*(a*a-b*b)/(b*b);var A=1+uSq/16384*(4096+uSq*(-768+uSq*(320-175*uSq)));var B=uSq/1024*(256+uSq*(-128+uSq*(74-47*uSq)));var sigma=s/(b*A),sigmaP=2*Math.PI;while(Math.abs(sigma-sigmaP)>1e-12){var cos2SigmaM=Math.cos(2*sigma1+sigma);var sinSigma=Math.sin(sigma);var cosSigma=Math.cos(sigma);var deltaSigma=B*sinSigma*(cos2SigmaM+B/4*(cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)-
B/6*cos2SigmaM*(-3+4*sinSigma*sinSigma)*(-3+4*cos2SigmaM*cos2SigmaM)));sigmaP=sigma;sigma=s/(b*A)+deltaSigma;}
var tmp=sinU1*sinSigma-cosU1*cosSigma*cosAlpha1;var lat2=Math.atan2(sinU1*cosSigma+cosU1*sinSigma*cosAlpha1,(1-f)*Math.sqrt(sinAlpha*sinAlpha+tmp*tmp));var lambda=Math.atan2(sinSigma*sinAlpha1,cosU1*cosSigma-sinU1*sinSigma*cosAlpha1);var C=f/16*cosSqAlpha*(4+f*(4-3*cosSqAlpha));var L=lambda-(1-C)*f*sinAlpha*(sigma+C*sinSigma*(cos2SigmaM+C*cosSigma*(-1+2*cos2SigmaM*cos2SigmaM)));var revAz=Math.atan2(sinAlpha,-tmp);return new OpenLayers.LonLat(lon1+u.deg(L),u.deg(lat2));};OpenLayers.Util.getParameters=function(url){url=(url===null||url===undefined)?window.location.href:url;var paramsString="";if(OpenLayers.String.contains(url,'?')){var start=url.indexOf('?')+1;var end=OpenLayers.String.contains(url,"#")?url.indexOf('#'):url.length;paramsString=url.substring(start,end);}
var parameters={};var pairs=paramsString.split(/[&;]/);for(var i=0,len=pairs.length;i<len;++i){var keyValue=pairs[i].split('=');if(keyValue[0]){var key=keyValue[0];try{key=decodeURIComponent(key);}catch(err){key=unescape(key);}
var value=(keyValue[1]||'').replace(/\+/g," ");try{value=decodeURIComponent(value);}catch(err){value=unescape(value);}
value=value.split(",");if(value.length==1){value=value[0];}
parameters[key]=value;}}
return parameters;};OpenLayers.Util.getArgs=function(url){OpenLayers.Console.warn(OpenLayers.i18n("methodDeprecated",{'newMethod':'OpenLayers.Util.getParameters'}));return OpenLayers.Util.getParameters(url);};OpenLayers.Util.lastSeqID=0;OpenLayers.Util.createUniqueID=function(prefix){if(prefix==null){prefix="id_";}
OpenLayers.Util.lastSeqID+=1;return prefix+OpenLayers.Util.lastSeqID;};OpenLayers.INCHES_PER_UNIT={'inches':1.0,'ft':12.0,'mi':63360.0,'m':39.3701,'km':39370.1,'dd':4374754,'yd':36};OpenLayers.INCHES_PER_UNIT["in"]=OpenLayers.INCHES_PER_UNIT.inches;OpenLayers.INCHES_PER_UNIT["degrees"]=OpenLayers.INCHES_PER_UNIT.dd;OpenLayers.INCHES_PER_UNIT["nmi"]=1852*OpenLayers.INCHES_PER_UNIT.m;OpenLayers.METERS_PER_INCH=0.02540005080010160020;OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{"Inch":OpenLayers.INCHES_PER_UNIT.inches,"Meter":1.0/OpenLayers.METERS_PER_INCH,"Foot":0.30480060960121920243/OpenLayers.METERS_PER_INCH,"IFoot":0.30480000000000000000/OpenLayers.METERS_PER_INCH,"ClarkeFoot":0.3047972651151/OpenLayers.METERS_PER_INCH,"SearsFoot":0.30479947153867624624/OpenLayers.METERS_PER_INCH,"GoldCoastFoot":0.30479971018150881758/OpenLayers.METERS_PER_INCH,"IInch":0.02540000000000000000/OpenLayers.METERS_PER_INCH,"MicroInch":0.00002540000000000000/OpenLayers.METERS_PER_INCH,"Mil":0.00000002540000000000/OpenLayers.METERS_PER_INCH,"Centimeter":0.01000000000000000000/OpenLayers.METERS_PER_INCH,"Kilometer":1000.00000000000000000000/OpenLayers.METERS_PER_INCH,"Yard":0.91440182880365760731/OpenLayers.METERS_PER_INCH,"SearsYard":0.914398414616029/OpenLayers.METERS_PER_INCH,"IndianYard":0.91439853074444079983/OpenLayers.METERS_PER_INCH,"IndianYd37":0.91439523/OpenLayers.METERS_PER_INCH,"IndianYd62":0.9143988/OpenLayers.METERS_PER_INCH,"IndianYd75":0.9143985/OpenLayers.METERS_PER_INCH,"IndianFoot":0.30479951/OpenLayers.METERS_PER_INCH,"IndianFt37":0.30479841/OpenLayers.METERS_PER_INCH,"IndianFt62":0.3047996/OpenLayers.METERS_PER_INCH,"IndianFt75":0.3047995/OpenLayers.METERS_PER_INCH,"Mile":1609.34721869443738887477/OpenLayers.METERS_PER_INCH,"IYard":0.91440000000000000000/OpenLayers.METERS_PER_INCH,"IMile":1609.34400000000000000000/OpenLayers.METERS_PER_INCH,"NautM":1852.00000000000000000000/OpenLayers.METERS_PER_INCH,"Lat-66":110943.316488932731/OpenLayers.METERS_PER_INCH,"Lat-83":110946.25736872234125/OpenLayers.METERS_PER_INCH,"Decimeter":0.10000000000000000000/OpenLayers.METERS_PER_INCH,"Millimeter":0.00100000000000000000/OpenLayers.METERS_PER_INCH,"Dekameter":10.00000000000000000000/OpenLayers.METERS_PER_INCH,"Decameter":10.00000000000000000000/OpenLayers.METERS_PER_INCH,"Hectometer":100.00000000000000000000/OpenLayers.METERS_PER_INCH,"GermanMeter":1.0000135965/OpenLayers.METERS_PER_INCH,"CaGrid":0.999738/OpenLayers.METERS_PER_INCH,"ClarkeChain":20.1166194976/OpenLayers.METERS_PER_INCH,"GunterChain":20.11684023368047/OpenLayers.METERS_PER_INCH,"BenoitChain":20.116782494375872/OpenLayers.METERS_PER_INCH,"SearsChain":20.11676512155/OpenLayers.METERS_PER_INCH,"ClarkeLink":0.201166194976/OpenLayers.METERS_PER_INCH,"GunterLink":0.2011684023368047/OpenLayers.METERS_PER_INCH,"BenoitLink":0.20116782494375872/OpenLayers.METERS_PER_INCH,"SearsLink":0.2011676512155/OpenLayers.METERS_PER_INCH,"Rod":5.02921005842012/OpenLayers.METERS_PER_INCH,"IntnlChain":20.1168/OpenLayers.METERS_PER_INCH,"IntnlLink":0.201168/OpenLayers.METERS_PER_INCH,"Perch":5.02921005842012/OpenLayers.METERS_PER_INCH,"Pole":5.02921005842012/OpenLayers.METERS_PER_INCH,"Furlong":201.1684023368046/OpenLayers.METERS_PER_INCH,"Rood":3.778266898/OpenLayers.METERS_PER_INCH,"CapeFoot":0.3047972615/OpenLayers.METERS_PER_INCH,"Brealey":375.00000000000000000000/OpenLayers.METERS_PER_INCH,"ModAmFt":0.304812252984505969011938/OpenLayers.METERS_PER_INCH,"Fathom":1.8288/OpenLayers.METERS_PER_INCH,"NautM-UK":1853.184/OpenLayers.METERS_PER_INCH,"50kilometers":50000.0/OpenLayers.METERS_PER_INCH,"150kilometers":150000.0/OpenLayers.METERS_PER_INCH});OpenLayers.Util.extend(OpenLayers.INCHES_PER_UNIT,{"mm":OpenLayers.INCHES_PER_UNIT["Meter"]/1000.0,"cm":OpenLayers.INCHES_PER_UNIT["Meter"]/100.0,"dm":OpenLayers.INCHES_PER_UNIT["Meter"]*100.0,"km":OpenLayers.INCHES_PER_UNIT["Meter"]*1000.0,"kmi":OpenLayers.INCHES_PER_UNIT["nmi"],"fath":OpenLayers.INCHES_PER_UNIT["Fathom"],"ch":OpenLayers.INCHES_PER_UNIT["IntnlChain"],"link":OpenLayers.INCHES_PER_UNIT["IntnlLink"],"us-in":OpenLayers.INCHES_PER_UNIT["inches"],"us-ft":OpenLayers.INCHES_PER_UNIT["Foot"],"us-yd":OpenLayers.INCHES_PER_UNIT["Yard"],"us-ch":OpenLayers.INCHES_PER_UNIT["GunterChain"],"us-mi":OpenLayers.INCHES_PER_UNIT["Mile"],"ind-yd":OpenLayers.INCHES_PER_UNIT["IndianYd37"],"ind-ft":OpenLayers.INCHES_PER_UNIT["IndianFt37"],"ind-ch":20.11669506/OpenLayers.METERS_PER_INCH});OpenLayers.DOTS_PER_INCH=72;OpenLayers.Util.normalizeScale=function(scale){var normScale=(scale>1.0)?(1.0/scale):scale;return normScale;};OpenLayers.Util.getResolutionFromScale=function(scale,units){var resolution;if(scale){if(units==null){units="degrees";}
var normScale=OpenLayers.Util.normalizeScale(scale);resolution=1/(normScale*OpenLayers.INCHES_PER_UNIT[units]*OpenLayers.DOTS_PER_INCH);}
return resolution;};OpenLayers.Util.getScaleFromResolution=function(resolution,units){if(units==null){units="degrees";}
var scale=resolution*OpenLayers.INCHES_PER_UNIT[units]*OpenLayers.DOTS_PER_INCH;return scale;};OpenLayers.Util.safeStopPropagation=function(evt){OpenLayers.Event.stop(evt,true);};OpenLayers.Util.pagePosition=function(forElement){var pos=[0,0];var viewportElement=OpenLayers.Util.getViewportElement();if(!forElement||forElement==window||forElement==viewportElement){return pos;}
var BUGGY_GECKO_BOX_OBJECT=OpenLayers.IS_GECKO&&document.getBoxObjectFor&&OpenLayers.Element.getStyle(forElement,'position')=='absolute'&&(forElement.style.top==''||forElement.style.left=='');var parent=null;var box;if(forElement.getBoundingClientRect){box=forElement.getBoundingClientRect();var scrollTop=viewportElement.scrollTop;var scrollLeft=viewportElement.scrollLeft;pos[0]=box.left+scrollLeft;pos[1]=box.top+scrollTop;}else if(document.getBoxObjectFor&&!BUGGY_GECKO_BOX_OBJECT){box=document.getBoxObjectFor(forElement);var vpBox=document.getBoxObjectFor(viewportElement);pos[0]=box.screenX-vpBox.screenX;pos[1]=box.screenY-vpBox.screenY;}else{pos[0]=forElement.offsetLeft;pos[1]=forElement.offsetTop;parent=forElement.offsetParent;if(parent!=forElement){while(parent){pos[0]+=parent.offsetLeft;pos[1]+=parent.offsetTop;parent=parent.offsetParent;}}
var browser=OpenLayers.BROWSER_NAME;if(browser=="opera"||(browser=="safari"&&OpenLayers.Element.getStyle(forElement,'position')=='absolute')){pos[1]-=document.body.offsetTop;}
parent=forElement.offsetParent;while(parent&&parent!=document.body){pos[0]-=parent.scrollLeft;if(browser!="opera"||parent.tagName!='TR'){pos[1]-=parent.scrollTop;}
parent=parent.offsetParent;}}
return pos;};OpenLayers.Util.getViewportElement=function(){var viewportElement=arguments.callee.viewportElement;if(viewportElement==undefined){viewportElement=(OpenLayers.BROWSER_NAME=="msie"&&document.compatMode!='CSS1Compat')?document.body:document.documentElement;arguments.callee.viewportElement=viewportElement;}
return viewportElement;};OpenLayers.Util.isEquivalentUrl=function(url1,url2,options){options=options||{};OpenLayers.Util.applyDefaults(options,{ignoreCase:true,ignorePort80:true,ignoreHash:true});var urlObj1=OpenLayers.Util.createUrlObject(url1,options);var urlObj2=OpenLayers.Util.createUrlObject(url2,options);for(var key in urlObj1){if(key!=="args"){if(urlObj1[key]!=urlObj2[key]){return false;}}}
for(var key in urlObj1.args){if(urlObj1.args[key]!=urlObj2.args[key]){return false;}
delete urlObj2.args[key];}
for(var key in urlObj2.args){return false;}
return true;};OpenLayers.Util.createUrlObject=function(url,options){options=options||{};if(!(/^\w+:\/\//).test(url)){var loc=window.location;var port=loc.port?":"+loc.port:"";var fullUrl=loc.protocol+"//"+loc.host.split(":").shift()+port;if(url.indexOf("/")===0){url=fullUrl+url;}else{var parts=loc.pathname.split("/");parts.pop();url=fullUrl+parts.join("/")+"/"+url;}}
if(options.ignoreCase){url=url.toLowerCase();}
var a=document.createElement('a');a.href=url;var urlObject={};urlObject.host=a.host.split(":").shift();urlObject.protocol=a.protocol;if(options.ignorePort80){urlObject.port=(a.port=="80"||a.port=="0")?"":a.port;}else{urlObject.port=(a.port==""||a.port=="0")?"80":a.port;}
urlObject.hash=(options.ignoreHash||a.hash==="#")?"":a.hash;var queryString=a.search;if(!queryString){var qMark=url.indexOf("?");queryString=(qMark!=-1)?url.substr(qMark):"";}
urlObject.args=OpenLayers.Util.getParameters(queryString);urlObject.pathname=(a.pathname.charAt(0)=="/")?a.pathname:"/"+a.pathname;return urlObject;};OpenLayers.Util.removeTail=function(url){var head=null;var qMark=url.indexOf("?");var hashMark=url.indexOf("#");if(qMark==-1){head=(hashMark!=-1)?url.substr(0,hashMark):url;}else{head=(hashMark!=-1)?url.substr(0,Math.min(qMark,hashMark)):url.substr(0,qMark);}
return head;};OpenLayers.IS_GECKO=(function(){var ua=navigator.userAgent.toLowerCase();return ua.indexOf("webkit")==-1&&ua.indexOf("gecko")!=-1;})();OpenLayers.BROWSER_NAME=(function(){var name="";var ua=navigator.userAgent.toLowerCase();if(ua.indexOf("opera")!=-1){name="opera";}else if(ua.indexOf("msie")!=-1){name="msie";}else if(ua.indexOf("safari")!=-1){name="safari";}else if(ua.indexOf("mozilla")!=-1){if(ua.indexOf("firefox")!=-1){name="firefox";}else{name="mozilla";}}
return name;})();OpenLayers.Util.getBrowserName=function(){return OpenLayers.BROWSER_NAME;};OpenLayers.Util.getRenderedDimensions=function(contentHTML,size,options){var w,h;var container=document.createElement("div");container.style.visibility="hidden";var containerElement=(options&&options.containerElement)?options.containerElement:document.body;if(size){if(size.w){w=size.w;container.style.width=w+"px";}else if(size.h){h=size.h;container.style.height=h+"px";}}
if(options&&options.displayClass){container.className=options.displayClass;}
var content=document.createElement("div");content.innerHTML=contentHTML;content.style.overflow="visible";if(content.childNodes){for(var i=0,l=content.childNodes.length;i<l;i++){if(!content.childNodes[i].style)continue;content.childNodes[i].style.overflow="visible";}}
container.appendChild(content);containerElement.appendChild(container);var parentHasPositionAbsolute=false;var parent=container.parentNode;while(parent&&parent.tagName.toLowerCase()!="body"){var parentPosition=OpenLayers.Element.getStyle(parent,"position");if(parentPosition=="absolute"){parentHasPositionAbsolute=true;break;}else if(parentPosition&&parentPosition!="static"){break;}
parent=parent.parentNode;}
if(!parentHasPositionAbsolute){container.style.position="absolute";}
if(!w){w=parseInt(content.scrollWidth);container.style.width=w+"px";}
if(!h){h=parseInt(content.scrollHeight);}
container.removeChild(content);containerElement.removeChild(container);return new OpenLayers.Size(w,h);};OpenLayers.Util.getScrollbarWidth=function(){var scrollbarWidth=OpenLayers.Util._scrollbarWidth;if(scrollbarWidth==null){var scr=null;var inn=null;var wNoScroll=0;var wScroll=0;scr=document.createElement('div');scr.style.position='absolute';scr.style.top='-1000px';scr.style.left='-1000px';scr.style.width='100px';scr.style.height='50px';scr.style.overflow='hidden';inn=document.createElement('div');inn.style.width='100%';inn.style.height='200px';scr.appendChild(inn);document.body.appendChild(scr);wNoScroll=inn.offsetWidth;scr.style.overflow='scroll';wScroll=inn.offsetWidth;document.body.removeChild(document.body.lastChild);OpenLayers.Util._scrollbarWidth=(wNoScroll-wScroll);scrollbarWidth=OpenLayers.Util._scrollbarWidth;}
return scrollbarWidth;};OpenLayers.Util.getFormattedLonLat=function(coordinate,axis,dmsOption){if(!dmsOption){dmsOption='dms';}
coordinate=(coordinate+540)%360-180;var abscoordinate=Math.abs(coordinate);var coordinatedegrees=Math.floor(abscoordinate);var coordinateminutes=(abscoordinate-coordinatedegrees)/(1/60);var tempcoordinateminutes=coordinateminutes;coordinateminutes=Math.floor(coordinateminutes);var coordinateseconds=(tempcoordinateminutes-coordinateminutes)/(1/60);coordinateseconds=Math.round(coordinateseconds*10);coordinateseconds/=10;if(coordinateseconds>=60){coordinateseconds-=60;coordinateminutes+=1;if(coordinateminutes>=60){coordinateminutes-=60;coordinatedegrees+=1;}}
if(coordinatedegrees<10){coordinatedegrees="0"+coordinatedegrees;}
var str=coordinatedegrees+"\u00B0";if(dmsOption.indexOf('dm')>=0){if(coordinateminutes<10){coordinateminutes="0"+coordinateminutes;}
str+=coordinateminutes+"'";if(dmsOption.indexOf('dms')>=0){if(coordinateseconds<10){coordinateseconds="0"+coordinateseconds;}
str+=coordinateseconds+'"';}}
if(axis=="lon"){str+=coordinate<0?OpenLayers.i18n("W"):OpenLayers.i18n("E");}else{str+=coordinate<0?OpenLayers.i18n("S"):OpenLayers.i18n("N");}
return str;};OpenLayers.Event={observers:false,KEY_BACKSPACE:8,KEY_TAB:9,KEY_RETURN:13,KEY_ESC:27,KEY_LEFT:37,KEY_UP:38,KEY_RIGHT:39,KEY_DOWN:40,KEY_DELETE:46,element:function(event){return event.target||event.srcElement;},isSingleTouch:function(event){return event.touches&&event.touches.length==1;},isMultiTouch:function(event){return event.touches&&event.touches.length>1;},isLeftClick:function(event){return(((event.which)&&(event.which==1))||((event.button)&&(event.button==1)));},isRightClick:function(event){return(((event.which)&&(event.which==3))||((event.button)&&(event.button==2)));},stop:function(event,allowDefault){if(!allowDefault){if(event.preventDefault){event.preventDefault();}else{event.returnValue=false;}}
if(event.stopPropagation){event.stopPropagation();}else{event.cancelBubble=true;}},findElement:function(event,tagName){var element=OpenLayers.Event.element(event);while(element.parentNode&&(!element.tagName||(element.tagName.toUpperCase()!=tagName.toUpperCase()))){element=element.parentNode;}
return element;},observe:function(elementParam,name,observer,useCapture){var element=OpenLayers.Util.getElement(elementParam);useCapture=useCapture||false;if(name=='keypress'&&(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.attachEvent)){name='keydown';}
if(!this.observers){this.observers={};}
if(!element._eventCacheID){var idPrefix="eventCacheID_";if(element.id){idPrefix=element.id+"_"+idPrefix;}
element._eventCacheID=OpenLayers.Util.createUniqueID(idPrefix);}
var cacheID=element._eventCacheID;if(!this.observers[cacheID]){this.observers[cacheID]=[];}
this.observers[cacheID].push({'element':element,'name':name,'observer':observer,'useCapture':useCapture});if(element.addEventListener){element.addEventListener(name,observer,useCapture);}else if(element.attachEvent){element.attachEvent('on'+name,observer);}},stopObservingElement:function(elementParam){var element=OpenLayers.Util.getElement(elementParam);var cacheID=element._eventCacheID;this._removeElementObservers(OpenLayers.Event.observers[cacheID]);},_removeElementObservers:function(elementObservers){if(elementObservers){for(var i=elementObservers.length-1;i>=0;i--){var entry=elementObservers[i];var args=new Array(entry.element,entry.name,entry.observer,entry.useCapture);var removed=OpenLayers.Event.stopObserving.apply(this,args);}}},stopObserving:function(elementParam,name,observer,useCapture){useCapture=useCapture||false;var element=OpenLayers.Util.getElement(elementParam);var cacheID=element._eventCacheID;if(name=='keypress'){if(navigator.appVersion.match(/Konqueror|Safari|KHTML/)||element.detachEvent){name='keydown';}}
var foundEntry=false;var elementObservers=OpenLayers.Event.observers[cacheID];if(elementObservers){var i=0;while(!foundEntry&&i<elementObservers.length){var cacheEntry=elementObservers[i];if((cacheEntry.name==name)&&(cacheEntry.observer==observer)&&(cacheEntry.useCapture==useCapture)){elementObservers.splice(i,1);if(elementObservers.length==0){delete OpenLayers.Event.observers[cacheID];}
foundEntry=true;break;}
i++;}}
if(foundEntry){if(element.removeEventListener){element.removeEventListener(name,observer,useCapture);}else if(element&&element.detachEvent){element.detachEvent('on'+name,observer);}}
return foundEntry;},unloadCache:function(){if(OpenLayers.Event&&OpenLayers.Event.observers){for(var cacheID in OpenLayers.Event.observers){var elementObservers=OpenLayers.Event.observers[cacheID];OpenLayers.Event._removeElementObservers.apply(this,[elementObservers]);}
OpenLayers.Event.observers=false;}},CLASS_NAME:"OpenLayers.Event"};OpenLayers.Event.observe(window,'unload',OpenLayers.Event.unloadCache,false);if(window.Event){OpenLayers.Util.applyDefaults(window.Event,OpenLayers.Event);}else{var Event=OpenLayers.Event;}
OpenLayers.Events=OpenLayers.Class({BROWSER_EVENTS:["mouseover","mouseout","mousedown","mouseup","mousemove","click","dblclick","rightclick","dblrightclick","resize","focus","blur","touchstart","touchmove","touchend"],listeners:null,object:null,element:null,eventTypes:null,eventHandler:null,fallThrough:null,includeXY:false,clearMouseListener:null,initialize:function(object,element,eventTypes,fallThrough,options){OpenLayers.Util.extend(this,options);this.object=object;this.fallThrough=fallThrough;this.listeners={};this.eventHandler=OpenLayers.Function.bindAsEventListener(this.handleBrowserEvent,this);this.clearMouseListener=OpenLayers.Function.bind(this.clearMouseCache,this);this.eventTypes=[];if(eventTypes!=null){for(var i=0,len=eventTypes.length;i<len;i++){this.addEventType(eventTypes[i]);}}
if(element!=null){this.attachToElement(element);}},destroy:function(){if(this.element){OpenLayers.Event.stopObservingElement(this.element);if(this.element.hasScrollEvent){OpenLayers.Event.stopObserving(window,"scroll",this.clearMouseListener);}}
this.element=null;this.listeners=null;this.object=null;this.eventTypes=null;this.fallThrough=null;this.eventHandler=null;},addEventType:function(eventName){if(!this.listeners[eventName]){this.eventTypes.push(eventName);this.listeners[eventName]=[];}},attachToElement:function(element){if(this.element){OpenLayers.Event.stopObservingElement(this.element);}
this.element=element;for(var i=0,len=this.BROWSER_EVENTS.length;i<len;i++){var eventType=this.BROWSER_EVENTS[i];this.addEventType(eventType);OpenLayers.Event.observe(element,eventType,this.eventHandler);}
OpenLayers.Event.observe(element,"dragstart",OpenLayers.Event.stop);},on:function(object){for(var type in object){if(type!="scope"){this.register(type,object.scope,object[type]);}}},register:function(type,obj,func){if((func!=null)&&(OpenLayers.Util.indexOf(this.eventTypes,type)!=-1)){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];listeners.push({obj:obj,func:func});}},registerPriority:function(type,obj,func){if(func!=null){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];if(listeners!=null){listeners.unshift({obj:obj,func:func});}}},un:function(object){for(var type in object){if(type!="scope"){this.unregister(type,object.scope,object[type]);}}},unregister:function(type,obj,func){if(obj==null){obj=this.object;}
var listeners=this.listeners[type];if(listeners!=null){for(var i=0,len=listeners.length;i<len;i++){if(listeners[i].obj==obj&&listeners[i].func==func){listeners.splice(i,1);break;}}}},remove:function(type){if(this.listeners[type]!=null){this.listeners[type]=[];}},triggerEvent:function(type,evt){var listeners=this.listeners[type];if(!listeners||listeners.length==0){return undefined;}
if(evt==null){evt={};}
evt.object=this.object;evt.element=this.element;if(!evt.type){evt.type=type;}
listeners=listeners.slice();var continueChain;for(var i=0,len=listeners.length;i<len;i++){var callback=listeners[i];continueChain=callback.func.apply(callback.obj,[evt]);if((continueChain!=undefined)&&(continueChain==false)){break;}}
if(!this.fallThrough){OpenLayers.Event.stop(evt,true);}
return continueChain;},handleBrowserEvent:function(evt){var type=evt.type,listeners=this.listeners[type];if(!listeners||listeners.length==0){return;}
var touches=evt.touches;if(touches&&touches[0]){var x=0;var y=0;var num=touches.length;var touch;for(var i=0;i<num;++i){touch=touches[i];x+=touch.clientX;y+=touch.clientY;}
evt.clientX=x/num;evt.clientY=y/num;}
if(this.includeXY){evt.xy=this.getMousePosition(evt);}
this.triggerEvent(type,evt);},clearMouseCache:function(){this.element.scrolls=null;this.element.lefttop=null;var body=document.body;if(body&&!((body.scrollTop!=0||body.scrollLeft!=0)&&navigator.userAgent.match(/iPhone/i))){this.element.offsets=null;}},getMousePosition:function(evt){if(!this.includeXY){this.clearMouseCache();}else if(!this.element.hasScrollEvent){OpenLayers.Event.observe(window,"scroll",this.clearMouseListener);this.element.hasScrollEvent=true;}
if(!this.element.scrolls){var viewportElement=OpenLayers.Util.getViewportElement();this.element.scrolls=[viewportElement.scrollLeft,viewportElement.scrollTop];}
if(!this.element.lefttop){this.element.lefttop=[(document.documentElement.clientLeft||0),(document.documentElement.clientTop||0)];}
if(!this.element.offsets){this.element.offsets=OpenLayers.Util.pagePosition(this.element);}
return new OpenLayers.Pixel((evt.clientX+this.element.scrolls[0])-this.element.offsets[0]
-this.element.lefttop[0],(evt.clientY+this.element.scrolls[1])-this.element.offsets[1]
-this.element.lefttop[1]);},CLASS_NAME:"OpenLayers.Events"});OpenLayers.Request={DEFAULT_CONFIG:{method:"GET",url:window.location.href,async:true,user:undefined,password:undefined,params:null,proxy:OpenLayers.ProxyHost,headers:{},data:null,callback:function(){},success:null,failure:null,scope:null},URL_SPLIT_REGEX:/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/,events:new OpenLayers.Events(this,null,["complete","success","failure"]),issue:function(config){var defaultConfig=OpenLayers.Util.extend(this.DEFAULT_CONFIG,{proxy:OpenLayers.ProxyHost});config=OpenLayers.Util.applyDefaults(config,defaultConfig);var request=new OpenLayers.Request.XMLHttpRequest();var url=OpenLayers.Util.urlAppend(config.url,OpenLayers.Util.getParameterString(config.params||{}));var sameOrigin=!(url.indexOf("http")==0);var urlParts=!sameOrigin&&url.match(this.URL_SPLIT_REGEX);if(urlParts){var location=window.location;sameOrigin=urlParts[1]==location.protocol&&urlParts[3]==location.hostname;var uPort=urlParts[4],lPort=location.port;if(uPort!=80&&uPort!=""||lPort!="80"&&lPort!=""){sameOrigin=sameOrigin&&uPort==lPort;}}
if(!sameOrigin){if(config.proxy){if(typeof config.proxy=="function"){url=config.proxy(url);}else{url=config.proxy+encodeURIComponent(url);}}else{OpenLayers.Console.warn(OpenLayers.i18n("proxyNeeded"),{url:url});}}
request.open(config.method,url,config.async,config.user,config.password);for(var header in config.headers){request.setRequestHeader(header,config.headers[header]);}
var events=this.events;var self=this;request.onreadystatechange=function(){if(request.readyState==OpenLayers.Request.XMLHttpRequest.DONE){var proceed=events.triggerEvent("complete",{request:request,config:config,requestUrl:url});if(proceed!==false){self.runCallbacks({request:request,config:config,requestUrl:url});}}};if(config.async===false){request.send(config.data);}else{window.setTimeout(function(){if(request.readyState!==0){request.send(config.data);}},0);}
return request;},runCallbacks:function(options){var request=options.request;var config=options.config;var complete=(config.scope)?OpenLayers.Function.bind(config.callback,config.scope):config.callback;var success;if(config.success){success=(config.scope)?OpenLayers.Function.bind(config.success,config.scope):config.success;}
var failure;if(config.failure){failure=(config.scope)?OpenLayers.Function.bind(config.failure,config.scope):config.failure;}
if(OpenLayers.Util.createUrlObject(config.url).protocol=="file:"&&request.responseText){request.status=200;}
complete(request);if(!request.status||(request.status>=200&&request.status<300)){this.events.triggerEvent("success",options);if(success){success(request);}}
if(request.status&&(request.status<200||request.status>=300)){this.events.triggerEvent("failure",options);if(failure){failure(request);}}},GET:function(config){config=OpenLayers.Util.extend(config,{method:"GET"});return OpenLayers.Request.issue(config);},POST:function(config){config=OpenLayers.Util.extend(config,{method:"POST"});config.headers=config.headers?config.headers:{};if(!("CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(config.headers))){config.headers["Content-Type"]="application/xml";}
return OpenLayers.Request.issue(config);},PUT:function(config){config=OpenLayers.Util.extend(config,{method:"PUT"});config.headers=config.headers?config.headers:{};if(!("CONTENT-TYPE"in OpenLayers.Util.upperCaseObject(config.headers))){config.headers["Content-Type"]="application/xml";}
return OpenLayers.Request.issue(config);},DELETE:function(config){config=OpenLayers.Util.extend(config,{method:"DELETE"});return OpenLayers.Request.issue(config);},HEAD:function(config){config=OpenLayers.Util.extend(config,{method:"HEAD"});return OpenLayers.Request.issue(config);},OPTIONS:function(config){config=OpenLayers.Util.extend(config,{method:"OPTIONS"});return OpenLayers.Request.issue(config);}};(function(){var oXMLHttpRequest=window.XMLHttpRequest;var bGecko=!!window.controllers,bIE=window.document.all&&!window.opera,bIE7=bIE&&window.navigator.userAgent.match(/MSIE 7.0/);function fXMLHttpRequest(){this._object=oXMLHttpRequest&&!bIE7?new oXMLHttpRequest:new window.ActiveXObject("Microsoft.XMLHTTP");this._listeners=[];};function cXMLHttpRequest(){return new fXMLHttpRequest;};cXMLHttpRequest.prototype=fXMLHttpRequest.prototype;if(bGecko&&oXMLHttpRequest.wrapped)
cXMLHttpRequest.wrapped=oXMLHttpRequest.wrapped;cXMLHttpRequest.UNSENT=0;cXMLHttpRequest.OPENED=1;cXMLHttpRequest.HEADERS_RECEIVED=2;cXMLHttpRequest.LOADING=3;cXMLHttpRequest.DONE=4;cXMLHttpRequest.prototype.readyState=cXMLHttpRequest.UNSENT;cXMLHttpRequest.prototype.responseText='';cXMLHttpRequest.prototype.responseXML=null;cXMLHttpRequest.prototype.status=0;cXMLHttpRequest.prototype.statusText='';cXMLHttpRequest.prototype.priority="NORMAL";cXMLHttpRequest.prototype.onreadystatechange=null;cXMLHttpRequest.onreadystatechange=null;cXMLHttpRequest.onopen=null;cXMLHttpRequest.onsend=null;cXMLHttpRequest.onabort=null;cXMLHttpRequest.prototype.open=function(sMethod,sUrl,bAsync,sUser,sPassword){delete this._headers;if(arguments.length<3)
bAsync=true;this._async=bAsync;var oRequest=this,nState=this.readyState,fOnUnload;if(bIE&&bAsync){fOnUnload=function(){if(nState!=cXMLHttpRequest.DONE){fCleanTransport(oRequest);oRequest.abort();}};window.attachEvent("onunload",fOnUnload);}
if(cXMLHttpRequest.onopen)
cXMLHttpRequest.onopen.apply(this,arguments);if(arguments.length>4)
this._object.open(sMethod,sUrl,bAsync,sUser,sPassword);else
if(arguments.length>3)
this._object.open(sMethod,sUrl,bAsync,sUser);else
this._object.open(sMethod,sUrl,bAsync);this.readyState=cXMLHttpRequest.OPENED;fReadyStateChange(this);this._object.onreadystatechange=function(){if(bGecko&&!bAsync)
return;oRequest.readyState=oRequest._object.readyState;fSynchronizeValues(oRequest);if(oRequest._aborted){oRequest.readyState=cXMLHttpRequest.UNSENT;return;}
if(oRequest.readyState==cXMLHttpRequest.DONE){delete oRequest._data;fCleanTransport(oRequest);if(bIE&&bAsync)
window.detachEvent("onunload",fOnUnload);}
if(nState!=oRequest.readyState)
fReadyStateChange(oRequest);nState=oRequest.readyState;}};function fXMLHttpRequest_send(oRequest){oRequest._object.send(oRequest._data);if(bGecko&&!oRequest._async){oRequest.readyState=cXMLHttpRequest.OPENED;fSynchronizeValues(oRequest);while(oRequest.readyState<cXMLHttpRequest.DONE){oRequest.readyState++;fReadyStateChange(oRequest);if(oRequest._aborted)
return;}}};cXMLHttpRequest.prototype.send=function(vData){if(cXMLHttpRequest.onsend)
cXMLHttpRequest.onsend.apply(this,arguments);if(!arguments.length)
vData=null;if(vData&&vData.nodeType){vData=window.XMLSerializer?new window.XMLSerializer().serializeToString(vData):vData.xml;if(!oRequest._headers["Content-Type"])
oRequest._object.setRequestHeader("Content-Type","application/xml");}
this._data=vData;fXMLHttpRequest_send(this);};cXMLHttpRequest.prototype.abort=function(){if(cXMLHttpRequest.onabort)
cXMLHttpRequest.onabort.apply(this,arguments);if(this.readyState>cXMLHttpRequest.UNSENT)
this._aborted=true;this._object.abort();fCleanTransport(this);this.readyState=cXMLHttpRequest.UNSENT;delete this._data;};cXMLHttpRequest.prototype.getAllResponseHeaders=function(){return this._object.getAllResponseHeaders();};cXMLHttpRequest.prototype.getResponseHeader=function(sName){return this._object.getResponseHeader(sName);};cXMLHttpRequest.prototype.setRequestHeader=function(sName,sValue){if(!this._headers)
this._headers={};this._headers[sName]=sValue;return this._object.setRequestHeader(sName,sValue);};cXMLHttpRequest.prototype.addEventListener=function(sName,fHandler,bUseCapture){for(var nIndex=0,oListener;oListener=this._listeners[nIndex];nIndex++)
if(oListener[0]==sName&&oListener[1]==fHandler&&oListener[2]==bUseCapture)
return;this._listeners.push([sName,fHandler,bUseCapture]);};cXMLHttpRequest.prototype.removeEventListener=function(sName,fHandler,bUseCapture){for(var nIndex=0,oListener;oListener=this._listeners[nIndex];nIndex++)
if(oListener[0]==sName&&oListener[1]==fHandler&&oListener[2]==bUseCapture)
break;if(oListener)
this._listeners.splice(nIndex,1);};cXMLHttpRequest.prototype.dispatchEvent=function(oEvent){var oEventPseudo={'type':oEvent.type,'target':this,'currentTarget':this,'eventPhase':2,'bubbles':oEvent.bubbles,'cancelable':oEvent.cancelable,'timeStamp':oEvent.timeStamp,'stopPropagation':function(){},'preventDefault':function(){},'initEvent':function(){}};if(oEventPseudo.type=="readystatechange"&&this.onreadystatechange)
(this.onreadystatechange.handleEvent||this.onreadystatechange).apply(this,[oEventPseudo]);for(var nIndex=0,oListener;oListener=this._listeners[nIndex];nIndex++)
if(oListener[0]==oEventPseudo.type&&!oListener[2])
(oListener[1].handleEvent||oListener[1]).apply(this,[oEventPseudo]);};cXMLHttpRequest.prototype.toString=function(){return'['+"object"+' '+"XMLHttpRequest"+']';};cXMLHttpRequest.toString=function(){return'['+"XMLHttpRequest"+']';};function fReadyStateChange(oRequest){if(cXMLHttpRequest.onreadystatechange)
cXMLHttpRequest.onreadystatechange.apply(oRequest);oRequest.dispatchEvent({'type':"readystatechange",'bubbles':false,'cancelable':false,'timeStamp':new Date+0});};function fGetDocument(oRequest){var oDocument=oRequest.responseXML,sResponse=oRequest.responseText;if(bIE&&sResponse&&oDocument&&!oDocument.documentElement&&oRequest.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/)){oDocument=new window.ActiveXObject("Microsoft.XMLDOM");oDocument.async=false;oDocument.validateOnParse=false;oDocument.loadXML(sResponse);}
if(oDocument)
if((bIE&&oDocument.parseError!=0)||!oDocument.documentElement||(oDocument.documentElement&&oDocument.documentElement.tagName=="parsererror"))
return null;return oDocument;};function fSynchronizeValues(oRequest){try{oRequest.responseText=oRequest._object.responseText;}catch(e){}
try{oRequest.responseXML=fGetDocument(oRequest._object);}catch(e){}
try{oRequest.status=oRequest._object.status;}catch(e){}
try{oRequest.statusText=oRequest._object.statusText;}catch(e){}};function fCleanTransport(oRequest){oRequest._object.onreadystatechange=new window.Function;};if(!window.Function.prototype.apply){window.Function.prototype.apply=function(oRequest,oArguments){if(!oArguments)
oArguments=[];oRequest.__func=this;oRequest.__func(oArguments[0],oArguments[1],oArguments[2],oArguments[3],oArguments[4]);delete oRequest.__func;};};OpenLayers.Request.XMLHttpRequest=cXMLHttpRequest;})();