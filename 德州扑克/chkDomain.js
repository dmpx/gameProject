var blnOur = false;
var arrOurDomain = ["http://h5god.com","http://www.h5god.com"]
var strLocation = document.referrer;
if(top!=window){
	for (var j=0;j<arrOurDomain.length;j++){
		if(strLocation.indexOf(arrOurDomain[j])>=0){
			blnOur = true;
			break;
		}
	}
}
// if(!blnOur){
// 	alert("Html5游戏源码，请加QQ:1290386774");
// }