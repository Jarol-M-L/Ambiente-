 function clasificarAire() {
    let aqi = parseFloat(document.getElementById("aqi").value);
    let mensaje = "";

    if (aqi <= 50) mensaje = "Bueno";
    else if (aqi <= 100) mensaje = "Moderado";
    else if (aqi <= 150) mensaje = "Dañino para grupos sensibles";
    else if (aqi <= 200) mensaje = "Dañino";
    else if (aqi <= 300) mensaje = "Muy dañino";
    else mensaje = "Peligroso";

    document.getElementById("resultadoAire").innerHTML = mensaje;
  }

  function pedirRuido() {
    const n = parseInt(document.getElementById("numMediciones").value);
    const contenedor = document.getElementById("ruidoInputs");
    contenedor.innerHTML = "";

    for (let i = 0; i < n; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = `Medición ${i + 1} (dB)`;
      input.id = `medicion${i}`;
      contenedor.appendChild(input);
      contenedor.appendChild(document.createElement("br"));
    }

    const botonCalcular = document.createElement("button");
    botonCalcular.textContent = "Calcular Promedio";
    botonCalcular.onclick = calcularRuido;
    contenedor.appendChild(botonCalcular);
  }

  function calcularRuido() {
    const n = parseInt(document.getElementById("numMediciones").value);
    let suma = 0;

    for (let i = 0; i < n; i++) {
      suma += parseFloat(document.getElementById(`medicion${i}`).value);
    }

    const promedio = suma / n;
    document.getElementById("resultadoRuido").innerHTML = `Promedio de ruido: ${promedio.toFixed(2)} dB`;
  }

  let contadorFocos = 0;

  function agregarFoco() {
    let temp = parseFloat(document.getElementById("temp").value);

    while (temp !== 0) {
      if (temp > 45) contadorFocos++;
      document.getElementById("resultadoFocos").innerHTML = `Focos > 45°C: ${contadorFocos}`;
      break;
    }

    if (temp === 0) {
      document.getElementById("resultadoFocos").innerHTML = `Lectura finalizada. Total focos > 45°C: ${contadorFocos}`;
    }

    document.getElementById("temp").value = "";
    document.getElementById("temp").focus();
  }
  function clasificarResiduos() {
    const codigo = parseInt(document.getElementById("codigoResiduo").value);
    let mensaje = "";

    switch(codigo) {
      case 1: mensaje = "Orgánico"; break;
      case 2: mensaje = "Plástico"; break;
      case 3: mensaje = "Papel/Cartón"; break;
      case 4: mensaje = "Vidrio"; break;
      default: mensaje = "Código no válido (1-4)";
    }

    document.getElementById("resultadoResiduo").innerHTML = mensaje;
  }
  let nivelesRio = [];

  function registrarRio() {
    let entrada;
    do {
      entrada = document.getElementById("nivelRio").value;

      if (entrada.toLowerCase() === "no") {
        document.getElementById("resultadoRio").innerHTML = 
          `Registro finalizado. Valores ingresados: ${nivelesRio.join(", ")}`;
        break;
      }

      let valor = parseFloat(entrada);

      if (!isNaN(valor)) {
        nivelesRio.push(valor);
        if (valor > 3) {
          document.getElementById("resultadoRio").innerHTML = "Nivel crítico del río!";
        } else {
          document.getElementById("resultadoRio").innerHTML = `Nivel registrado: ${valor} m`;
        }
      } else {
        document.getElementById("resultadoRio").innerHTML = "Entrada inválida. Ingresa un número o 'no'.";
      }

      document.getElementById("nivelRio").value = "";
      document.getElementById("nivelRio").focus();
      break;
    } while (true);
  }