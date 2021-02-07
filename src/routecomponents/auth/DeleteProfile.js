import React, { useEffect } from "react";
import api from "../../apis/challengesApi";

function UserDelete(props) {
  const { id } = props.match.params;

  useEffect(() => {
    async function deleteUser() {
      try {
        await api.delete(`user/profile/${id}`);
        props.history.push("/");
      } catch (err) {
        console.error(err);
      }
    }
    deleteUser();
  }, [id, props.history]);

  return <div>Deleting...</div>;
}

export default UserDelete;
