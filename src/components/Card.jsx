import CardStyles from "../styles/Card.module.css";

const Card = ({ nombre, deporte }) => {
	return (
		<div className={CardStyles.cardContainer}>
			<h2>Hola, {nombre}!</h2>
			<h2>
				Gracias por compartir que tu deporte favorito es el/la {deporte}
				.
			</h2>
		</div>
	);
};

export default Card;
