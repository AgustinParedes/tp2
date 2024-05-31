function calcularArea() {
    const ladoA = document.getElementById("ladoA").value;
    const ladoB = document.getElementById("ladoB").value;
    const ladoC = document.getElementById("ladoC").value;

    const resultado = document.getElementById("resultado");

    if (ladoA > ladoC && ladoA > 0 && ladoB > 0 && ladoC > 0) {
        
        const trianguloloArea = (ladoB * (ladoA - ladoC)) /2;
        const rectanguloArea = ladoB * ladoC;

        const total = rectanguloArea + trianguloloArea;

        resultado.style.color = "green";
        resultado.textContent = `El area del terreno es: ${total}`

    
    } else {
        resultado.style.color = "red";
        resultado.textContent = "El ladoA tiene que ser mayor que ladoC. Tampoco puede ser 0"
    } 
}

