import { useState } from "react";
import avatar from "../../images/avatar.jpg";
import EditProfile from "./components/form/EditProfile/EditProfile";
import NewCard from "./components/form/NerwCard/NewCard";
import EditAvatar from "./components/form/EditAvatar/EditAvatar";
import Popup from "./components/Popup/Popup";
import Card from "./components/Card/Card";

function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);

  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

  console.log(cards);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__avatar-container">
          <img className="profile__image" src={avatar} alt="Avatar" />
          <button
            aria-label="Editar foto de perfil"
            className="profile__avatar-button"
            type="button"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          ></button>
        </div>

        <div className="profile__info">
          <h1 className="profile__title">Jacques Cousteau</h1>
          <button
            aria-label="Editar perfil"
            className="profile__edit-button"
            type="button"
            onClick={() => handleOpenPopup(editProfilePopup)}
          ></button>
          <p className="profile__description">Explorador</p>
        </div>
        <button
          aria-label="Agregar tarjeta"
          className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        ></button>
      </section>

      <section className="cards page__section">
        <ul className="cards__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}

export default Main;
