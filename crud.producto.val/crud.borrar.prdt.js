const formulariopdtb = document.getElementById('borrarpdt');
const inputspdtb = document.querySelectorAll('#borrarpdt input');

const expresionespdtb = {
	idpdtb: /^\d{1,1000000000}$/
}

const campospdtb = {
	idpdtb: false
}

const validarformulariopdtbo = (e) => {
	switch (e.target.name) {
		case "idpdtb":
			validarCampopdtb(expresionespdtb.idpdtb, e.target, 'idpdtb');
		break;

	}
}

const validarCampopdtb = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('borrarpdt__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('borrarpdt__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .borrarpdt__input-error`).classList.remove('borrarpdt__input-error-activo');
		campospdtb[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('borrarpdt__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('borrarpdt__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .borrarpdt__input-error`).classList.add('borrarpdt__input-error-activo');
		campospdtb[campo] = false;
	}
}


inputspdtb.forEach((input) => {
	input.addEventListener('keyup', validarformulariopdtbo);
	input.addEventListener('blur', validarformulariopdtbo);
});

formulariopdtb.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campospdtb.idpdtb){
		formulariopdtb.reset();

		document.getElementById('borrarpdt__mensaje-exito').classList.add('borrarpdt__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('borrarpdt__mensaje-exito').classList.remove('borrarpdt__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.borrarpdt__grupo-correcto').forEach((icono) => {
			icono.classList.remove('borrarpdt__grupo-correcto');
		});
	} else {
		document.getElementById('borrarpdt__mensaje').classList.add('borrarpdt__mensaje-activo');
	}
});

