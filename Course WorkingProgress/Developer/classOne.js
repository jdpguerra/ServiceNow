//Client-side scripting
//Server-side
//Scripted Rest APIs

//Client script > onLoad
//Loaded 
//Script que carrega no momento que renderiza a pagina
//OnChange
//Script executa quando tem alguma ação em algum campo determinado.
//OnSubmit
//Validação dos campos antes de fazer o imput de submitt

//Script > onLoad

function onload() {

    alert("Teste de inicio de script de alerta")

}

//Script > onSubmit

function onSubmit(){

    alert ("Teste de onsubmit para o campo");

}

//Script > onChange

function onChange(control, oldvalue, newValue, isLoading, isTemplate){
    if(isLoading || newValue === '') {

        return;
    }

}

