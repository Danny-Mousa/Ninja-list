import React from "react";
import Link from "next/link";
import styles from "../../styles/Ninjas.module.css";

export const getStaticProps = async () => {
  const data = [];

  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((ninjas) => data.push(...ninjas));

  return {
    props: {
      ninjas: data,
    },
  };
};

function Index({ ninjas }) {
  return (
    <div>
      <h1>all ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
          <a className={styles.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Index;
