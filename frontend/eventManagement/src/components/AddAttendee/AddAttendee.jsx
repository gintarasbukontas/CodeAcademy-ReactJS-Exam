import axios from "axios";
import { useState } from "react";
import reactDom from "react-dom";
import ModalAttendee from "../ModalAttendee/ModalAttendee";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function AddAttendee({
  isAddModalOpen,
  setIsAddModalOpen,
  toggleAddModal,
  refetchData,
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const requestBody = {
      firstName,
      lastName,
      email,
      age,
    };

    try {
      await axios.post(`${API_HOST}/attendees`, requestBody, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setFirstName("");
      setLastName("");
      setEmail("");
      setAge("");

      alert("Attendee added successfully!");
      setIsAddModalOpen(!isAddModalOpen);
    } catch (error) {
      alert(error.response.data.error);
    }
    refetchData();
  }

  return reactDom.createPortal(
    <div>
      {isAddModalOpen && (
        <ModalAttendee
          onClick={toggleAddModal}
          handleSubmit={handleSubmit}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          age={age}
          setAge={setAge}
          action={"Add New Attendee"}
          modalOpen={isAddModalOpen}
        />
      )}
    </div>,
    document.body
  );
}
