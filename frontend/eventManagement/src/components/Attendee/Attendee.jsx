import axios from "axios";

const API_HOST = import.meta.env.VITE_API_HOST;

export default function Attendee({
  attendeeData,
  refetchData,
  openUpdateModal,
  quantity,
}) {
  async function handleDelete() {
    const shouldDelete = confirm(`Are you sure? This can't be undone.`);

    if (shouldDelete) {
      try {
        await axios.delete(`${API_HOST}/attendees/${attendeeData._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        refetchData();
      } catch (error) {
        alert(error.response.data.error);
      }
    }
  }

  return (
    <>
      <tr>
        <td>{quantity + 1}</td>
        <td>{attendeeData.firstName}</td>
        <td>{attendeeData.lastName}</td>
        <td>{attendeeData.email}</td>
        <td>{attendeeData.age}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
        <td>
          <button onClick={() => openUpdateModal(attendeeData)}>Update</button>
        </td>
      </tr>
    </>
  );
}
