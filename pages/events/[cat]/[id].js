import React from "react";
import SingleEvent from "../../../src/components/events/single-event";

const Dynamic = ({ data }) => <SingleEvent data={data}/>

export default Dynamic;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });

  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");

  const id = context?.params.id;

  console.log(id);
  const eventData = allEvents.find((event) => id === event.id);
  return {
    props: { data: eventData },
  };
}
