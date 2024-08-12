import axios from "axios";
import { useEffect, useState } from "react";
import style from "./ModalUpdateAttendee.module.css";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function ModalUpdateAttendee({
  isUpdateModalOpen,
  setIsUpdateModalOpen,
  refetchData,
  attendeeData,
}) {
  const [firstName, setFirstName] = useState(attendeeData.firstName);
  const [lastName, setLastName] = useState(attendeeData.lastName);
  const [email, setEmail] = useState(attendeeData.email);
  const [age, setAge] = useState(attendeeData.age);

  async function handleSubmit(e) {
    e.preventDefault();

    const requestBody = {
      firstName,
      lastName,
      email,
      age,
    };

    try {
      await axios.put(`${API_HOST}/attendees/${attendeeData._id}`, requestBody);

      alert("Updated successfully!");
      setIsUpdateModalOpen(!isUpdateModalOpen);
    } catch (error) {
      alert(error.response.data.error);
    }
    refetchData();
  }

  useEffect(() => {
    if (isUpdateModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isUpdateModalOpen]);

  function toggleUpdateModal() {
    setIsUpdateModalOpen(!isUpdateModalOpen);
  }

  return (
    <div>
      {isUpdateModalOpen && (
        <div className={style.modal}>
          <div className={style.overlay} onClick={toggleUpdateModal}></div>
          <div className={style.modalContent}>
            <h3>Update Attendee</h3>
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
              <button type="submit">Update</button>
              <button onClick={toggleUpdateModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
