export default function EditAvatar() {
  return (
    <form className="popup__form" id="edit-avatar-form">
      <input
        id="avatar-url"
        className="popup__input popup__input_type_avatar"
        name="avatar"
        placeholder="Enlace a la nueva foto"
        required
        type="url"
      />
      <span className="popup__input-error" id="avatar-url-error"></span>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
