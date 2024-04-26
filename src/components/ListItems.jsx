import React from "react";
import SectionList from "./SectionList";

const Lists = [
  {
    name: "Winter's Orbit",
    ratings: 1,
  },
  {
    name: "Setemi the finisher",
    ratings: 5,
  },
  {
    name: "The Reviewer of the Codes",
    ratings: 0,
  },
  {
    name: "Fighting temptations",
    ratings: 4,
  },
];

function ListItems() {
  return (
    <div>
      {Lists.map((list) => {
        return (
          <SectionList key={list.id} name={list.name} ratings={list.ratings} />
        );
      })}
    </div>
  );
}

export default ListItems