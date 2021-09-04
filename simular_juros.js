function calcular_media()	{
	// Declaração de variáveis
	var nota1, nota2, nota3, media;

	// Entrada de dados
	nota2 = Number($("#nota2").val());
	nota3 = Number($("#nota3").val());


	// Processamento de Dados
	media = (nota1 + nota2 + nota3) / 0,6;

	// Saída de Dados
	document.getElementByClassName("form-notas").classlist.add("d-none")
	document.getElementByClassName("show-result").classlist.remove("d-none");	
	

    $(".form-notas").addClass("d-none");
	$(".show-result").removeClass("d-none");
	$(".result-value").html(parseInt(media));

function voltar() {
	$("input").val("");

	$(".form-notas").removeClass("d-none");
	$(".show-result").addClass("d-none");
	$(".result-value").html("...");
}



