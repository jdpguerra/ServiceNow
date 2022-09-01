//contando string
 
//var str = "Chamado: 24219; chamado teste inicial - Chamado encaminhado a outro responsável";
var stateRitm = str.substring(str.indexOf(" - Chamado"));
var stateRitm_end = stateRitm.split("- ")[1];

var contLength = stateRitm_end.length;
//var state1_1 = state1.length;
//var state2_1 = state2.length;
//var state3_1 = state3.length;
//var state4_1 = state4.length;

gs.print(stateRitm_end);


//var state1 = "Chamado aguardando atendimento";//30
//var state2 = "Chamado encaminhado a outro responsável";//39
//var state3 = "Atendimento iniciado";//quebra(22) //20
//var state4 = "Chamado aguardando confirmação de encerramento"; //46

//var state1_1 = state1.length;
//var state2_1 = state2.length;
//var state3_1 = state3.length;
//var state4_1 = state4.length;

var testando;
if(contLength==22) testando=1;
else if(contLength==30) testando=2;
else if(contLength==39) testando=3;
else if(contLength==46) testando=4;

gs.print(testando);