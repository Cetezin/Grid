import React from "react";
import { useEffect, useRef } from "react";
import UseCounter from "../Hooks/useCounter";
import AppRouter from "../AppRouter";

function Clock() {
  const {decreaseBy100, increment, decrement, reset, count:countP, increaseBy100} = UseCounter(0)
  const [time, setTime] = React.useState(new Date());
  const [count, setCount] = React.useState(0);
  const [user, setUser] = React.useState({});

  const hour = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  const pRef = useRef(null);

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  useEffect(() => {
    function tick() {
      setTime(new Date());
    }

    setInterval(tick, 1000);
    return () => {};
  }, [count]);

  useEffect(() => {
    function fetchGitHub() {
      fetch("https://api.github.com/users/cetezin")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setUser(data);
        });
    }
    fetchGitHub();

    if (user.title) {
      document.title = user.title;
    }

    return () => {
      document.title = "cleanup";
    };
  }, [user.title]);

  useEffect(() => {
    console.log(pRef.current)
  }, [])

  return (
    <div>
      <h2>
        The Time is
        {" " +
          hour.toLocaleString() +
          ":" +
          minutes.toLocaleString() +
          ":" +
          seconds.toLocaleString()}
      </h2>
      <h1>{countP}</h1>
      <p ref={pRef} onClick={() => setCount(count + 1)}>
        Click this to increase the counter={JSON.stringify(user)}
      </p>
      <button onClick={()=>decreaseBy100()}>-100</button>
      <button onClick={()=>decrement()}>-1</button>
      <button onClick={()=>reset()}>x</button>
      <button onClick={()=>increment()}>+1</button>
      <button onClick={()=>increaseBy100()}>+100</button>
      <AppRouter />
    </div>
  );
}

export default Clock;
