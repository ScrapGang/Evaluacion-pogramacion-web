const formulariopdte = document.getElementById('editarpdt');
const inputspdte = document.querySelectorAll('#editarpdt input');

const expresionespdte = {
	idpdte: /^\d{1,1000000000}$/, 
	nombrepdte: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
	marcapdte: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,  
	stockpdte: /^\d{1,1000000000}$/,
	preciopdte: /^[$]\d{1,1000000000}$/ 
}

const campospdte = {
	idpdte: false,
	nombrepdte: false,
	marcapdte: false,
	stockpdte: false,
	preciopdte: false
}

const validarFormulariopdte = (e) => {
	switch (e.target.name) {
		case "idpdte":
			validarCampopdte(expresionespdte.idpdte, e.target, 'idpdte');
		break;
		case "nombrepdte":
			validarCampopdte(expresionespdte.nombrepdte, e.target, 'nombrepdte');
		break;
		case "marcapdte":
			validarCampopdte(expresionespdte.marcapdte, e.target, 'marcapdte');
		break;
		
		case "stockpdte":
			validarCampopdte(expresionespdte.stockpdte, e.target, 'stockpdte');
		break;
		case "preciopdte":
			validarCampopdte(expresionespdte.preciopdte, e.target, 'preciopdte');
		break;
	}
}

const validarCampopdte = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('editarpdt__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('editarpdt__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .editarpdt__input-error`).classList.remove('editarpdt__input-error-activo');
		campospdte[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('editarpdt__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('editarpdt__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .editarpdt__input-error`).classList.add('editarpdt__input-error-activo');
		campospdte[campo] = false;
	}
}


inputspdte.forEach((input) => {
	input.addEventListener('keyup', validarFormulariopdte);
	input.addEventListener('blur', validarFormulariopdte);
});

formulariopdte.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campospdte.idpdte && campospdte.nombrepdte && campospdte.marcapdte && campospdte.stockpdte && campospdte.preciopdte ){
		formulariopdte.reset();

		document.getElementById('editarpdt__mensaje-exito').classList.add('editarpdt__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('editarpdt__mensaje-exito').classList.remove('editarpdt__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.editarpdt__grupo-correcto').forEach((icono) => {
			icono.classList.remove('editarpdt__grupo-correcto');
		});
	} else {
		document.getElementById('editarpdt__mensaje').classList.add('editarpdt__mensaje-activo');
	}
});

