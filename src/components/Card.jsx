const Card = ({ nombre, deporte }) => {
	return (
		<>
			<h4>Hola, {nombre}!</h4>
			<h4>
				Gracias por compartir que tu deporte favorito es el/la {deporte}
				.
			</h4>
		</>
	);
};

export default Card;
