import { useContext, useRef } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext.js";

export default function EditAvatar() {
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({ avatar: avatarRef.current.value });
  }

  return (
    <form className="popup__form" id="edit-avatar-form" onSubmit={handleSubmit}>
      <input
        id="avatar-url"
        className="popup__input popup__input_type_avatar"
        name="avatar"
        placeholder="Enlace a la nueva foto"
        required
        type="url"
        ref={avatarRef}
      />
      <span className="popup__input-error" id="avatar-url-error"></span>

      <button className="button popup__button" type="submit">
        Guardar
      </button>
    </form>
  );
}
