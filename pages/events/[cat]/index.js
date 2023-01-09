import React from "react";
import CatEvent from "../../../src/components/events/catEvent";

const Category = ({ fiterdata, pageName }) => <CatEvent data={fiterdata} pageName={pageName} />

export default Category;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allpaths = events_categories.map((event) => {
    return {
      params: {
        cat: event.id.toString(),
      },
    };
  });

  return {
    paths: allpaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const id = context?.params.cat;

  const fiterdata = allEvents.filter((evt) => evt.city === id);

  return {
    props: {
      fiterdata,
      pagename: id
    },
  };
}
