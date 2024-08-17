import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Attendee from "../../components/Attendee/Attendee";
import styles from "./MainPage.module.css";
import AddAttendee from "../../components/AddAttendee/AddAttendee";
import UpdateAttendee from "../../components/UpdateAttendee/UpdateAttendee";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function MainPage() {
  const [attendees, setAttendees] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentAttendee, setCurrentAttendee] = useState(null);

  const navigate = useNavigate();

  function getAttendees() {
    axios
      .get(`${API_HOST}/attendees`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => setAttendees(response.data))
      .catch((err) => {
        if (err.response.status === 403) {
          localStorage.removeItem("token");
          navigate("/");
        } else {
          alert("Something went wrong. Try again later.");
        }
      });
  }

  function toggleAddModal() {
    setIsAddModalOpen(!isAddModalOpen);
  }

  function openUpdateModal(attendee) {
    setCurrentAttendee(attendee);
    setIsUpdateModalOpen(true);
  }

  function closeUpdateModal() {
    setCurrentAttendee(null);
    setIsUpdateModalOpen(false);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    } else {
      getAttendees();
    }
  }, [navigate]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>List of Attendees</h1>
      {isAddModalOpen && (
        <AddAttendee
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          toggleAddModal={toggleAddModal}
          refetchData={getAttendees}
        />
      )}
      {isUpdateModalOpen && currentAttendee && (
        <UpdateAttendee
          isUpdateModalOpen={isUpdateModalOpen}
          setIsUpdateModalOpen={closeUpdateModal}
          refetchData={getAttendees}
          attendeeData={currentAttendee}
        />
      )}

      <button className={styles.addNew} onClick={toggleAddModal}>
        Add New Attendee
      </button>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee, x) => (
            <Attendee
              key={attendee._id}
              attendeeData={attendee}
              refetchData={getAttendees}
              openUpdateModal={openUpdateModal}
              quantity={x}
            />
          ))}
        </tbody>
      </table>
      <button className={styles.addNew2} onClick={toggleAddModal}>
        +
      </button>
    </div>
  );
}
