//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=7; attempts=0; attemptsMax=1;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#008080"; colorText="#000000"; colorSele="#008080";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="'Arial Black', Gadget, sans-serif";
var timeOnMessage=5; messageOk="Felicidades!"; messageTime="Se ha acabado el tiempo."; messageError="Intente de nuevo."; messageErrorG="Intente de nuevo."; messageAttempts="Se te han acabado los intentos."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="TUlM"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["TWlsaXRhcmlzbW8gc2UgcmVmaWVyZSBhLi4u", "TWlsaXRhcmlzbW8gZXMgbGEgaWRlb2xvZ8OtYSBzZWfDum4gbGEgY3VhbCBsYSBmdWVyemEgbWlsaXRhciBlcyBsYSBmdWVudGUgZGUgdG9kYSBsYSBzZWd1cmlkYWQuIEVuIHN1IGZvcm1hIG3DoXMgbGV2ZSBzZSBwb3N0dWxhIGEgbWVudWRvIGNvbiBhcmd1bWVudG9zIG11eSB2YXJpYWRvcywgcGFyYSBqdXN0aWZpY2FyIGxhIHByZXBhcmFjacOzbiBtaWxpdGFyIGRlIHVuYSBzb2NpZWRhZCwgdG9kb3MgbG9zIGN1YWxlcyB0aWVuZGVuIGEgYXN1bWlyIHF1ZSBsYSBwYXogYSB0cmF2w6lzIGRlIGxhIGZ1ZXJ6YSBlcyBsYSBtZWpvciBvIMO6bmljYSBmb3JtYSBkZSBjb25zZWd1aXIgbGEgcGF6Lg=="],["TGEgZXBvY2EgZGVsIEF1dG9yaXRhcmlzbW8gTWlsaXRhciBkdXJhIGRlc2RlLi4u", "MTkzMS0xOTc5"],["TWF4aW1pbGlhbm8gSGVybmFuZGV6IE1hcnRpbmV6IGZ1ZS4uLg==", "RGljdGFkb3IsIG1pbGl0YXIgeSB1bm8gZGUgbG9zIHByZXNpZGVudGVzIGRlIEVsIFNhbHZhZG9yOyBjdW1wbGllbmRvIGZ1bmNpb25lcyBjb21vIGplZmUgZGUgZXN0YWRvIGRlc2RlIGVsIDEgZGUgbWFyem8gZGUgMTkzMi4="],["RWwgcGVyaW9kbyBtaWxpdGFyIGVuIEVsIFNhbHZhZG9yIGNvbWllbnphIGx1ZWdvIGRlLi4u", "TGEgcmVwdWJsaWNhIGNhZmV0YWxlcmEu"],["RmlkZWwgU2FuY2hleiBmdWUgdW4gcHJlc2lkZW50ZSBkZXNkZS4uLg==", "MTk2Ny0xOTcy"],["TGEgZ3VlcnJhIGRlIGxhcyBjaWVuIGhvcmFzIGZ1ZSBlbi4uLg==", "MTk2OQ=="],["UGVyaW9kbyBkZSBsYSBoaXN0b3JpYSBkZSBFbCBTYWx2YWRvciBxdWUgc2lndWUgbHVlZ28gZGUgMTk3OS4uLg==", "TGEgZ3VlcnJhIGNpdmlsLg=="]];
var c=[[27,334],[48,9],[37,128],[54,24],[40,9],[37,4],[64,16]];
var con1=["Militarismo se refiere a...","La epoca del Autoritarismo Militar dura desde...","Maximiliano Hernandez Martinez fue...","El periodo militar en El Salvador comienza luego de...","Fidel Sanchez fue un presidente desde...","La guerra de las cien horas fue en...","Periodo de la historia de El Salvador que sigue luego de 1979..."];
var con2=["Militarismo es la ideología según la cual la fuerza militar es la fuente de toda la seguridad. En su forma más leve se postula a menudo con argumentos muy variados, para justificar la preparación militar de una sociedad, todos los cuales tienden a asumir que la paz a través de la fuerza es la mejor o única forma de conseguir la paz.","1931-1979","Dictador, militar y uno de los presidentes de El Salvador; cumpliendo funciones como jefe de estado desde el 1 de marzo de 1932.","La republica cafetalera.","1967-1972","1969","La guerra civil."];
var sel1=""; join1=[]; join2=[];
