import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Attendee from "../../components/Attendee/Attendee";
import styles from "./MainPage.module.css";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function MainPage() {
  const [attendees, setAttendees] = useState([]);

  const navigate = useNavigate();

  function getAttendees() {
    axios
      .get(`${API_HOST}/attendees`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
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
      <button className={styles.addNew}>Add New Attendee</button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {attendees.map((attendee) => (
            <Attendee
              key={attendee._id}
              attendeeData={attendee}
              refetchData={getAttendees}
            />
          ))}
        </tbody>
      </table>
      <button className={styles.addNew2}>+</button>
    </div>
  );
}
