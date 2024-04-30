import List from "./List";
import ListItems from "./ListItems";
import Clock from "./Date";
import Random from "./Random";
import React from "react";
import Counter from "./counter";

function Grid({ numRows, numCols }) {
  const [hide, setHide] = React.useState(true);
  const [count, setCount] = React.useState(0)

  const date = new Date();
  const day = date.getDate();

  return (
    <div className="grid">
      <section className="components">
        {!hide && <ListItems />}
        {!hide && <h1>Today's Date is {day}th</h1>}
        <hr></hr>
        <Clock />
        < Counter />
        <hr></hr>
      </section>
      <div className="rows">
        {List(numRows).map((row, index) => {
          return (
            <div key={index} className="columns">
              {List(numCols).map((cols) => {
                let RandomColor = `rgb(${Random(255)}, ${Random(255)}, ${Random(
                  255
                )})`;

                return (
                  <section
                    onClick={() => {
                      const sRows = row.toString();
                      const sCols = cols.toString();
                      if (sRows + sCols == day) {
                        setHide(!hide);
                      }
                    }}
                    className="main"
                    style={{
                      backgroundColor: RandomColor,
                      color: "whitesmoke",
                      fontWeight: "bold",
                    }}
                  >
                    <p>
                      {row}
                      {cols}
                    </p>
                  </section>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
