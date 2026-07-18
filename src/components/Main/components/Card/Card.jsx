import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext.js";
import ImagePopup from "../Popup/ImagePopup/ImagePopup";
import RemoveCard from "../Popup/RemoveCard/RemoveCard";

export default function Card(props) {
  const { card, handleOpenPopup, onCardLike, onCardDelete } = props;
  const { name, link, isLiked } = card;
  const { currentUser } = useContext(CurrentUserContext);

  // AJUSTA card.owner._id según cómo tu api.js normalice el dueño de la tarjeta
  const isOwn = card.owner?._id === currentUser?._id;

  const cardLikeButtonClassName = `card__like-button ${
    isLiked ? "card__like-button_is-active" : ""
  }`;

  const imagePopup = {
    title: null,
    children: <ImagePopup card={card} />,
  };

  const removeCardPopup = {
    title: "¿Estás seguro?",
    children: <RemoveCard card={card} onCardDelete={onCardDelete} />,
  };

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    handleOpenPopup(removeCardPopup);
  }

  return (
    <li className="card">
      <img
        className="card__image"
        src={link}
        alt={name}
        onClick={() => handleOpenPopup(imagePopup)}
      />
      {isOwn && (
        <button
          aria-label="Eliminar tarjeta"
          className="card__delete-button"
          type="button"
          onClick={handleDeleteClick}
        ></button>
      )}
      <div className="card__description">
        <h2 className="card__title">{name}</h2>
        <button
          aria-label="Botón Me gusta"
          className={cardLikeButtonClassName}
          type="button"
          onClick={handleLikeClick}
        ></button>
      </div>
    </li>
  );
}
