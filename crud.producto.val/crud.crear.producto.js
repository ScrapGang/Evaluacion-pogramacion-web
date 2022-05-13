const formulariopdt = document.getElementById('formpdt');
const inputspdt = document.querySelectorAll('#formpdt input');

const expresionespdt = {
	idpdt: /^\d{1,1000000000}$/, 
	nombrepdt: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
	marcapdt: /^[a-zA-ZÀ-ÿ\s]{3,40}$/,  
	stockpdt: /^\d{1,1000000000}$/,
	preciopdt: /^[$]\d{1,1000000000}$/ 
}

const campospdt = {
	idpdt: false,
	nombrepdt: false,
	marcapdt: false,
	stockpdt: false,
	preciopdt: false
}

const validarFormulariopdt = (e) => {
	switch (e.target.name) {
		case "idpdt":
			validarCampopdt(expresionespdt.idpdt, e.target, 'idpdt');
		break;
		case "nombrepdt":
			validarCampopdt(expresionespdt.nombrepdt, e.target, 'nombrepdt');
		break;
		case "marcapdt":
			validarCampopdt(expresionespdt.marcapdt, e.target, 'marcapdt');
		break;
		
		case "stockpdt":
			validarCampopdt(expresionespdt.stockpdt, e.target, 'stockpdt');
		break;
		case "preciopdt":
			validarCampopdt(expresionespdt.preciopdt, e.target, 'preciopdt');
		break;
	}
}

const validarCampopdt = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formpdt__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formpdt__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formpdt__input-error`).classList.remove('formpdt__input-error-activo');
		campospdt[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formpdt__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formpdt__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formpdt__input-error`).classList.add('formpdt__input-error-activo');
		campospdt[campo] = false;
	}
}


inputspdt.forEach((input) => {
	input.addEventListener('keyup', validarFormulariopdt);
	input.addEventListener('blur', validarFormulariopdt);
});

formulariopdt.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campospdt.idpdt && campospdt.nombrepdt && campospdt.marcapdt && campospdt.stockpdt && campospdt.preciopdt ){
		formulariopdt.reset();

		document.getElementById('formpdt__mensaje-exito').classList.add('formpdt__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formpdt__mensaje-exito').classList.remove('formpdt__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formpdt__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formpdt__grupo-correcto');
		});
	} else {
		document.getElementById('formpdt__mensaje').classList.add('formpdt__mensaje-activo');
	}
});

