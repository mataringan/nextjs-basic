import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import styles from "../../styles/Users.module.css";

interface UsersProps {
  dataUsers: Array<any>; // share to props userFunction
}

export default function User(props: UsersProps) {
  const { dataUsers } = props;
  console.log(dataUsers);
  const router = useRouter();

  return (
    <Layout pageTitle="Users Page">
      {dataUsers.map((user) => {
        return (
          <div
            key={user.id}
            onClick={() => router.push(`/users/${user.id}`)}
            className={styles.card}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers, //share to interface
    },
  };
}

import React from "react";
