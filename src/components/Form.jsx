import { useState } from "react";
import Card from "./Card";
import FormStyles from "../styles/Form.module.css";

const Form = () => {
	const [persona, setPersona] = useState({
		nombre: "",
		deporte: "",
	});
	const [show, setShow] = useState(false);
	const [error, setError] = useState(false);

	console.log("Persona: ", persona);
	console.log("Show: ", show);
	console.log("Error: ", error);

	// Manejador del submit del formulario
	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(
			"Longitud del nombre SIN espacios: ",
			persona.nombre.trim().length
		);
		console.log("Longitud del deporte: ", persona.deporte.length);

		if (persona.nombre.length >= 3 && persona.deporte.length >= 6) {
			setShow(true);
			setError(false);
		} else {
			setShow(false);
			setError(true);
		}
	};

	return (
		<div>
			<form className={FormStyles.formContainer} onSubmit={handleSubmit}>
				<label>Nombre: </label>
				{/* El nombre de la persona se guarda sin espacios */}
				<input
					type="text"
					onChange={(event) =>
						setPersona({
							...persona,
							nombre: event.target.value.trim(),
						})
					}
				/>

				<label>Deporte favorito: </label>
				<input
					type="text"
					onChange={(event) =>
						setPersona({
							...persona,
							deporte: event.target.value,
						})
					}
				/>
				<button>Enviar</button>
			</form>

			{show ? (
				<Card nombre={persona.nombre} deporte={persona.deporte} />
			) : error ? (
				<h2 style={{ color: "red" }}>
					Por favor chequea que la información sea correcta
				</h2>
			) : null}
		</div>
	);
};

export default Form;
