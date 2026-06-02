export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form">
      <input
        id="name"
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        type="text"
        required
        minlength="2"
        maxlength="40"
      />
      <span className="popup__input-error" id="name-error"></span>

      <input
        id="description"
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Acerca de mí"
        type="text"
        required
        minlength="2"
        maxlength="200"
      />
      <span className="popup__input-error" id="description-error"></span>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
