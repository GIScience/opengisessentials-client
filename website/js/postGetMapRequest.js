getDomain = function(url){
  	//parse out URL without parameters portion of url string
    var domainString = "";
	var end = url.indexOf('?');
	domainString = url.substring(0, end);
	return domainString;
  }
  
getParameters = function(url) {
   
    //parse out parameters portion of url string
    var paramsString = "";
	var start = url.indexOf('?') + 1;
	var end = url.length;
	paramsString = url.substring(start, end);

    var parameters = {};
    var pairs = paramsString.split(/[&;]/);
    for(var i=0, len=pairs.length; i<len; ++i) {
        var keyValue = pairs[i].split('=');
        if (keyValue[0]) {
            var key = decodeURIComponent(keyValue[0]);
            var value = decodeURIComponent(keyValue[1]) || ''; //empty string if no value
            parameters[key] = value;
         }
     }
    return parameters;
};

getSLD_BODYParam = function (rawString){
 	var sldBody = rawString.substring(rawString.indexOf('=') + 1);
	return sldBody;
 }
 
createPOST = function(url,paramObject){
 	//create Form
	var form = document.createElement('form');
	form.name = "postForm";
	form.method= "POST";
	form.target = "mainFrame";
	form.action = url;
	form.enctype = "application/x-www-form-urlencoded";
	try{
		form.style = "display:none;";
	}
	catch (e){
		form.style.display = "none";
	}
	//create hidden inputs
	for (key in paramObject){
		var hiddenInput = document.createElement("input");
		hiddenInput.type="hidden";
//		console.log("Create Input "+key + ": " + paramObject[key]);
		hiddenInput.name = key;
		hiddenInput.value= paramObject[key];
		form.appendChild(hiddenInput);
	}
	var parent = document.lastChild;
	//add form to DOM
	parent.appendChild(form);
	//submit the POST Request
	form.submit();
	//remove the form to be rebuilt with changes at next request
	parent.removeChild(form);
	delete form;
	
	
 }

function createOpenLayersPOST(url, paramObject){
	var request = OpenLayers.Request.POST({
    url: url,
    proxy: "/cgi-bin/proxy.cgi?url=",
    data: OpenLayers.Util.getParameterString(paramObject),
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    success: createOpenLayersMap,
	failure: function(){console.log('POST Request failed!')}
})
}

function createOpenLayersMap(request){
	
	//extract bounds and options from response of geoserver openlayers format
	var start_boundsAndOptions = request.responseText.search(/var bounds/);
	var stop_boundsAndOptions = request.responseText.search(/map = new OpenLayers.Map/);		
	var boundsAndOptions = request.responseText.substring(start_boundsAndOptions,stop_boundsAndOptions);
	boundsAndOptions = boundsAndOptions.replace("var options = {","var options = {theme:null,");
	
	//extract layerdefinition from response of geoserver openlayers format
	var start_layerdef = request.responseText.search(/untiled = new OpenLayers.Layer.WMS/);
	var stop_layerdef = request.responseText.search(/map.addLayers/);	
	var layerdef = request.responseText.substring(start_layerdef,stop_layerdef);
	//use maxGetUrlLength to ensure POST Requests
	layerdef = layerdef.replace("ratio: 1, isBaseLayer: true","isBaseLayer: true, tileOptions: {maxGetUrlLength: 10}");
		
	//OpenLayers App to be written in mainFrame
	OLMapDocument = 
			"<?xml version='1.0' encoding='UTF-8'?>"
			+"<!DOCTYPE html PUBLIC '-//W3C//DTD XHTML 1.0 Strict//EN' 'DTD/xhtml1-strict.dtd'>"
			+"<html xmlns='http://www.w3.org/1999/xhtml'>"
    		+"<head>"
        	+"<title>OpenLayers map preview</title>"
        //Import OL CSS, auto import does not work with our modified OL.js build
        	+"<link rel='stylesheet' type='text/css' href='../js/OpenLayers-2.11/theme/default/style.css'/>"
        //Basic CSS definitions
        	+"<style type='text/css'>"
            +"body {"
                +"font-family: Verdana, Geneva, Arial, Helvetica, sans-serif;"
                +"font-size: small;"
            +"}"
            +"#toolbar {"
               +"position: relative;"
               +"padding-bottom: 0.5em;"
               +"display: none;"
            +"}"
            
            +"#toolbar ul {"
                +"list-style: none;"
                +"padding: 0;"
                +"margin: 0;"
            +"}"
            
            +"#toolbar ul li {"
                +"float: left;"
                +"padding-right: 1em;"
                +"padding-bottom: 0.5em;"
            +"}"
            
            +"#toolbar ul li a {"
                +"font-weight: bold;"
                +"font-size: smaller;"
              	+"vertical-align: middle;"
                +"color: black;"
                +"text-decoration: none;"
            +"}"

            +"#toolbar ul li a:hover {"
                +"text-decoration: underline;"
            +"}"
            
            +"#toolbar ul li * {"
               + "vertical-align: middle;"
            +"}"

            +"#map {"
                +"clear: both;"
                +"position: absolute;"
                +"left: 0;"
                +"right:0;"
                +"top: 0px;"
                +"bottom: 18px;"
                +"border: 1px solid black;"
            +"}"
            
            +"#wrapper {"
                +"position: absolute;"
                +"left: 5px;"
                +"right: 5px;"
                +"bottom: 0;"
            +"}"
            
           +"#location {"
                +"float: right;"
            +"}"
        
        +"</style>"
        +"<script type='text/javascript' src='../js/OpenLayers-2.11/OpenLayers_mod.js'></script>"
        +"<script type='text/javascript'>"
        +"function init(){"
            +"var map;"
            +"var untiled;"
            
            // pink tile avoidance
            +"OpenLayers.IMAGE_RELOAD_ATTEMPTS = 5;"
            // make OL compute scale according to WMS spec
            +"OpenLayers.DOTS_PER_INCH = 25.4 / 0.28;"
            //use proxy for POST
            +"OpenLayers.ProxyHost = '/cgi-bin/proxy.cgi?url=';"
        	//Image Path for css images
        	+"OpenLayers.ImgPath = '../js/OpenLayers-2.11/img/';"
            
                +"format = 'image/png';"
                +boundsAndOptions
                +"map = new OpenLayers.Map('map', options);"
                        
                // setup single tiled layer
                +layerdef
        
                +"map.addLayer(untiled);"

                // build up all controls
                +"map.addControl(new OpenLayers.Control.PanZoom({"
                    +"position: new OpenLayers.Pixel(2, 15)"
                +"}));"
                +"map.addControl(new OpenLayers.Control.Navigation());"
                +"map.addControl(new OpenLayers.Control.Scale($('scale')));"
                +"map.addControl(new OpenLayers.Control.MousePosition({element: $('location')}));"
                +"map.zoomToExtent(bounds);"
            
            	+"}"
           		+"self.onload = init;"
        		+"</script>"        
    			+"</head>"
    			+"<body>"
        		+"<div id='map'></div>"
        		+"<div id='wrapper'>"
            	+"<div id='location'>location</div>"
            	+"<div id='scale'></div>"
        		+"</div>"	
        		+"</body>"
				+"</html>";
	
	//replace document in mainFrame to get document manipulation rights
	top.mainFrame.location="about:blank";
	//blank document is allowed to be manipulated but needs time to be loaded
	intervalId = window.setInterval(
		function () {
		  try{
		  	top.mainFrame.document.write(OLMapDocument);
		  	top.mainFrame.document.close();
		  	window.clearInterval(intervalId);
		  }
		  catch(e){
		  	//do nothing
		  }
		}
		,10)
}

function getValue () {
	  //read textfields
      var wmsTextField = document.formularWMS.feld.value.replace(/\s+/g,''); //strip all spaces and linebreaks
      var sldTextField = parent.bottomFrame.document.formularSLD.feld2.value.replace(/\r/g,'').replace(/\n/g,'');//.replace(/#/g,"%23");
	  //turn params from string into an Object with key:value pairs
	  var paramObject= getParameters(wmsTextField);
	  //add the sld Text to the paramObject
	  paramObject.SLD_BODY = getSLD_BODYParam(sldTextField);
	  
	  if(paramObject.format.toLowerCase() == "application/openlayers" || paramObject.format.toLowerCase() == "openlayers"){
	  	//request an openlayers application from geoserver and customize it to use OpenLayers.Layer.WMS with Post
	  	createOpenLayersPOST(getDomain(wmsTextField), paramObject);
	  }else{
	  	//create a hidden form with hidden fields, submit it with POST and destroy it afterwards
	  	createPOST(getDomain(wmsTextField), paramObject);
	  } 
     }