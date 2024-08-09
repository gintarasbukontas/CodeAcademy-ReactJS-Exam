import axios from "axios";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function Attendee({ attendeeData, refetchData }) {
  async function handleDelete() {
    const shouldDelete = confirm(
      `Are you sure you want to Delete ${attendeeData.name}'s entry`
    );

    if (shouldDelete) {
      try {
        await axios.delete(`${API_HOST}/attendees/${attendeeData._id}`);
        refetchData();
      } catch (error) {
        alert(error.message);
      }
    }
  }
  return (
    <>
      <tr>
        <td>{attendeeData.firstName}</td>
        <td>{attendeeData.lastName}</td>
        <td>{attendeeData.email}</td>
        <td>{attendeeData.age}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
        <td>
          <button>Update</button>
        </td>
      </tr>
    </>
  );
}
