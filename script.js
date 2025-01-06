function calcularCompra() {
    const cantidadVeS = parseFloat(document.getElementById('cantidadVeS').value);
    const tasaCompra = parseFloat(document.getElementById('tasaCompra').value);
    const comisionCompra = parseFloat(document.getElementById('verificacionCompra').value);

    if (isNaN(cantidadVeS) || isNaN(tasaCompra) || isNaN(comisionCompra)) {
        document.getElementById('resultadosCompra').style.display = 'none';
        document.getElementById('listaPrecios').innerHTML = '';
        return;
    }

    const usdtCompradosBruto = cantidadVeS / tasaCompra;
    const comisionEnUSDT = usdtCompradosBruto * comisionCompra;
    const usdtComprados = usdtCompradosBruto - comisionEnUSDT;
    const comisionEnVeS = comisionEnUSDT * tasaCompra;
    const precioRealCompra = cantidadVeS / usdtComprados;

    document.getElementById('usdtComprados').textContent = usdtComprados.toFixed(3);
    document.getElementById('comisionVeS').textContent = comisionEnVeS.toFixed(3);
    document.getElementById('comisionUSDT').textContent = comisionEnUSDT.toFixed(3);
    document.getElementById('precioRealCompra').textContent = precioRealCompra.toFixed(3);

    document.getElementById('resultadosCompra').style.display = 'block';

    // Generar y mostrar las sugerencias de precios de venta
    const listaPrecios = document.getElementById('listaPrecios');
    listaPrecios.innerHTML = ''; // Limpiar la lista anterior

    const etiquetasGanancia = [
        'Precio de Venta Mínimo',
        'Ganancia de 0.2%',
        'Ganancia de 0.4%',
        'Ganancia de 0.6%',
        'Ganancia de 0.8%',
        'Ganancia de 1.0%',
        'Ganancia de 1.2%',
        'Ganancia de 1.4%',
        'Ganancia de 1.6%',
        'Ganancia de 1.8%',
        'Ganancia de 2.0%'
    ]

    for (let i = 0; i <= 10; i++) {
        const precioSugerido = tasaCompra + (2 * (comisionCompra * tasaCompra)) + (tasaCompra * 0.002 * i);
        const li = document.createElement('li');
        li.textContent = `${etiquetasGanancia[i]}: ${precioSugerido.toFixed(3)} VeS`;
        listaPrecios.appendChild(li);
    }
}

function calcularVenta() {
    const cantidadUSDT = parseFloat(document.getElementById('cantidadUSDT').value);
    const tasaVenta = parseFloat(document.getElementById('tasaVenta').value);
    const comisionVenta = parseFloat(document.getElementById('verificacionVenta').value);

    if (isNaN(cantidadUSDT) || isNaN(tasaVenta) || isNaN(comisionVenta)) {
        document.getElementById('resultadosVenta').style.display = 'none';
        return;
    }

    const vesVentaBruto = cantidadUSDT * tasaVenta;
    const comisionVentaVeS = vesVentaBruto * comisionVenta;
    const vesObtenidosVenta = vesVentaBruto - comisionVentaVeS;
    const comisionVentaUSDT = cantidadUSDT * comisionVenta;
    const precioRealVenta = cantidadUSDT * (1 + comisionVenta) / tasaVenta;

    document.getElementById('vesObtenidosVenta').textContent = vesObtenidosVenta.toFixed(3);
    document.getElementById('comisionVentaVeS').textContent = comisionVentaVeS.toFixed(3);
    document.getElementById('comisionVentaUSDT').textContent = comisionVentaUSDT.toFixed(3);
    document.getElementById('precioRealVenta').textContent = precioRealVenta.toFixed(3);

    document.getElementById('resultadosVenta').style.display = 'block';
}

function calcularProgreso() {
    const cantidadBTC = parseFloat(document.getElementById('cantidadBTC').value);
    const maxBTC = 1.0;

    if (isNaN(cantidadBTC) || cantidadBTC < 0 || cantidadBTC > maxBTC) {
        document.getElementById('resultadosProgreso').style.display = 'none';
        return;
    }

    const porcentajeProgreso = (cantidadBTC / maxBTC) * 100;

    document.getElementById('barraProgresoBTC').style.width = `${porcentajeProgreso}%`;
    document.getElementById('porcentajeProgresoBTC').textContent = porcentajeProgreso.toFixed(3);

    document.getElementById('resultadosProgreso').style.display = 'block';
}

function calcularVolumenTrading() {
    const volumenTrading = parseFloat(document.getElementById('volumenTrading').value);
    const maxVolumenTrading = 2.0;

    if (isNaN(volumenTrading) || volumenTrading < 0 || volumenTrading > maxVolumenTrading) {
        document.getElementById('resultadosProgreso').style.display = 'none';
        return;
    }

    const porcentajeVolumenTrading = (volumenTrading / maxVolumenTrading) * 100;

    document.getElementById('barraVolumenTrading').style.width = `${porcentajeVolumenTrading}%`;
    document.getElementById('porcentajeVolumenTrading').textContent = porcentajeVolumenTrading.toFixed(3);

    document.getElementById('resultadosProgreso').style.display = 'block';
}

function calcularVolumen30Dias() {
    const volumen30dias = parseFloat(document.getElementById('volumen30dias').value);
    const maxVolumen30Dias = 1.0;

    if (isNaN(volumen30dias) || volumen30dias < 0 || volumen30dias > maxVolumen30Dias) {
        document.getElementById('resultadosProgreso').style.display = 'none';
        return;
    }

    const porcentajeVolumen30Dias = (volumen30dias / maxVolumen30Dias) * 100;

    document.getElementById('barraVolumen30Dias').style.width = `${porcentajeVolumen30Dias}%`;
    document.getElementById('porcentajeVolumen30Dias').textContent = porcentajeVolumen30Dias.toFixed(3);

    document.getElementById('resultadosProgreso').style.display = 'block';
}

function calcularOrdenesCompletadasHistorico() {
    const ordenesCompletadasHistorico = parseFloat(document.getElementById('ordenesCompletadasHistorico').value);
    const maxOrdenesCompletadasHistorico = 1000;

    if (isNaN(ordenesCompletadasHistorico) || ordenesCompletadasHistorico < 0 || ordenesCompletadasHistorico > maxOrdenesCompletadasHistorico) {
        document.getElementById('resultadosProgreso').style.display = 'none';
        return;
    }

    const porcentajeOrdenesCompletadasHistorico = (ordenesCompletadasHistorico / maxOrdenesCompletadasHistorico) * 100;

    document.getElementById('barraOrdenesCompletadasHistorico').style.width = `${porcentajeOrdenesCompletadasHistorico}%`;
    document.getElementById('porcentajeOrdenesCompletadasHistorico').textContent = porcentajeOrdenesCompletadasHistorico.toFixed(3);

    document.getElementById('resultadosProgreso').style.display = 'block';
}

function calcularOrdenes30Dias() {
    const ordenes30dias = parseFloat(document.getElementById('ordenes30dias').value);
    const maxOrdenes30Dias = 500;

    if (isNaN(ordenes30dias) || ordenes30dias < 0 || ordenes30dias > maxOrdenes30Dias) {
        document.getElementById('resultadosProgreso').style.display = 'none';
        return;
    }

    const porcentajeOrdenes30Dias = (ordenes30dias / maxOrdenes30Dias) * 100;

    document.getElementById('barraOrdenes30Dias').style.width = `${porcentajeOrdenes30Dias}%`;
    document.getElementById('porcentajeOrdenes30Dias').textContent = porcentajeOrdenes30Dias.toFixed(3);

    document.getElementById('resultadosProgreso').style.display = 'block';
}

function calcularAntiguedadCuenta() {
    const antiguedadCuenta = parseFloat(document.getElementById('antiguedadCuenta').value);
    const maxAntiguedadCuenta = 6;

    if (isNaN(antiguedadCuenta) || antiguedadCuenta < 0 || antiguedadCuenta > maxAntiguedadCuenta) {
        document.getElementById('resultadosProgreso').style.display = 'none';
        return;
    }

   const porcentajeAntiguedadCuenta = (antiguedadCuenta / maxAntiguedadCuenta) * 100;

document.getElementById('barraAntiguedadCuenta').style.width = `${porcentajeAntiguedadCuenta}%`;
document.getElementById('porcentajeAntiguedadCuenta').textContent = porcentajeAntiguedadCuenta.toFixed(3);

document.getElementById('resultadosProgreso').style.display = 'block';
}

function calcularTasaFinalizacion30Dias() {
    const tasaFinalizacion30dias = parseFloat(document.getElementById('tasaFinalizacion30dias').value);
    const minTasaFinalizacion30Dias = 90;

    if (isNaN(tasaFinalizacion30dias) || tasaFinalizacion30dias < 0 || tasaFinalizacion30dias > 100) {
        document.getElementById('resultadosProgreso').style.display = 'none';
        return;
    }

    const porcentajeTasaFinalizacion30Dias = (tasaFinalizacion30dias / minTasaFinalizacion30Dias) * 100;

    document.getElementById('barraTasaFinalizacion30Dias').style.width = `${porcentajeTasaFinalizacion30Dias}%`;
    document.getElementById('porcentajeTasaFinalizacion30Dias').textContent = porcentajeTasaFinalizacion30Dias.toFixed(3);

    document.getElementById('resultadosProgreso').style.display = 'block';
}
