document.addEventListener("DOMContentLoaded", function() {
    const calculateButton = document.getElementById("calculate-button");
    const freteInfo = document.getElementById("frete-info");

    calculateButton.addEventListener("click", function() {
        const cep = document.getElementById("cep").value;
        // Lógica para calcular o frete com base no CEP
        // e exibir o resultado em freteInfo
        freteInfo.textContent = `O frete para o CEP ${cep} é R$10,00.`;
    });
});
