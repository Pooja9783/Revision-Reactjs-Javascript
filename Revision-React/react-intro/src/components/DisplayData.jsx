import React from "react";

const Displaydata = () => {
  const user = [
    {
      name: "pooja",
      age: 24,
      qulifiction: "M.A",
    },
  ];
  return (
    <div>
      <h1>Display Data on Browser...</h1>
      {user.map((e) => {
        return (
          <div>
            <p>Name : {e.name}</p>
            <p>Age : {e.age}</p>
            <p>Qualification : {e.qulifiction}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Displaydata;
