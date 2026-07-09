import { useRef } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const nameRef = useRef();
  const linkRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  return (
    <form
      className="popup__form"
      name="card-form"
      id="new-card-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_type_card-name"
        id="card-name"
        maxLength="30"
        minLength="1"
        name="card-name"
        placeholder="Title"
        required
        type="text"
        ref={nameRef}
      />
      <span className="popup__error" id="card-name-error"></span>

      <input
        className="popup__input popup__input_type_url"
        id="card-link"
        name="link"
        placeholder="Image link"
        required
        type="url"
        ref={linkRef}
      />
      <span className="popup__error" id="card-link-error"></span>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
