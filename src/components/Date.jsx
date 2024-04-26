import React from "react";
import { useEffect } from "react";


function Clock() {
    const [time, setTime] = React.useState(Date.now());
  useEffect(() => {

    function tick() {
      setTime(new Date);
    }

    setInterval(tick);
    return (() => {

    })
  });

  return (
    <div>
      <h2>The Time is {time.toLocaleString()}</h2>
    </div>
  );
}

export default Clock;

