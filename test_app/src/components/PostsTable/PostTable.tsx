import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { PostContext } from "../../contexts/PostContext";
import { User } from "../../types";

type Props = {};

function PostTable({}: Props) {
  const users: User[] = useContext(PostContext);
  console.log("I got this posts: ", users);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>{users.map((user) => renderRow(user))}</tbody>
    </Table>
  );
}

function renderRow(user: User) {
  return (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
    </tr>
  );
}

export default PostTable;
