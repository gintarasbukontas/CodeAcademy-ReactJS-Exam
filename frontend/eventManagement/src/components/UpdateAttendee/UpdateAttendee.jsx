import axios from "axios";
import { useState } from "react";
import reactDom from "react-dom";
import ModalAttendee from "../ModalAttendee/ModalAttendee";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function UpdateAttendee({
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
      await axios.put(
        `${API_HOST}/attendees/${attendeeData._id}`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Updated successfully!");
      setIsUpdateModalOpen(!isUpdateModalOpen);
    } catch (error) {
      alert(error.response.data.error);
    }
    refetchData();
  }

  function toggleUpdateModal() {
    setIsUpdateModalOpen(!isUpdateModalOpen);
  }

  return reactDom.createPortal(
    <div>
      {isUpdateModalOpen && (
        <ModalAttendee
          onClick={toggleUpdateModal}
          handleSubmit={handleSubmit}
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          age={age}
          setAge={setAge}
          action={"Update Attendee"}
          modalOpen={isUpdateModalOpen}
        />
      )}
    </div>,
    document.body
  );
}
