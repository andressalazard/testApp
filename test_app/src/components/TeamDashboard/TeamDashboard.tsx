import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../contexts/PostContext";
import { User } from "../../types";
import styles from "./TeamDashboard.module.css";

type Props = {};

function TeamDashboard({}: Props) {
  const users: User[] = useContext(UserContext);
  return (
    <div className={styles.container}>
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
    </div>
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

export default TeamDashboard;
