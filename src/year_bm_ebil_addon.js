// AGPL
// EBIL Vorjahr
var toPublish = function(){
function MyYear(){
	var vorjahr = parseInt($("#stichtagVJ").text().replace(/\s*/g,"").substr(14));
	var jahr = parseInt($("#stichtag").text().replace(/\s*/g,"").substr(14));
	
	var css = "";
	if(vorjahr<jahr){
		css = ".vorgaenger input{border-color:red;}";
	}else{
		css = "td:not(.vorgaenger) input{border-color:red;}";
	}
	var c=document.createElement("style");
	$(c).attr("type","text/css").html(css);
	$("head").append(c);

}
MyYear();
};