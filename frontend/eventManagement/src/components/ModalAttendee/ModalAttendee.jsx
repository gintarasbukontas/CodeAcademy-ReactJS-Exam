import { useEffect } from "react";
import style from "./ModalAttendee.module.css";

export default function ModalAttendee({
  onClick,
  handleSubmit,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  age,
  setAge,
  action,
  modalOpen,
}) {
  useEffect(() => {
    if (modalOpen) {
      if (modalOpen) {
        document.body.style.overflow = modalOpen ? "hidden" : "auto";
        return () => {
          document.body.style.overflow = "auto";
        };
      }
    }
  }, [modalOpen]);

  return (
    <div className={style.modal}>
      <div className={style.overlay} onClick={onClick}></div>
      <div className={style.modalContent}>
        <h3>{action}</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="inputFirstName">First Name</label>
          <br />
          <input
            id="inputFirstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <label htmlFor="inputLastName">Last Name</label>
          <br />
          <input
            id="inputLastName"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <label htmlFor="inputEmail">Email</label>
          <br />
          <input
            id="inputEmail"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="inputAge">Age</label>
          <br />
          <input
            id="inputAge"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min={0}
            max={120}
          />
          <br />
          <button type="submit">Add</button>
          <button onClick={onClick}>Cancel</button>
        </form>
      </div>
    </div>
  );
}
