import React from "react";

// I think this step is just for letting Next knows the number of possible subpages + their urls
// so it could detect any not existing paths and use the "fallback: 404 page" for it

export const getStaticPaths = async () => {
  const data = [];

  await fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((ninjas) => data.push(...ninjas));

  const paths = data.map((ninja) => {
    return {
      params: {
        id: ninja.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

// Now we need a way to help Next fetch the data for a specific item and then map it
// to the Details component props, so it could that data to build every related subpage

export const getStaticProps = async (context) => {
  // I think context obj represent the paths obj in the previous func.
  const id = context.params.id;

  let data;

  await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => response.json())
    .then((ninja) => (data = ninja));

  return {
    props: {
      ninja: data,
    },
  };
};

function Details({ ninja }) {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
}

export default Details;
