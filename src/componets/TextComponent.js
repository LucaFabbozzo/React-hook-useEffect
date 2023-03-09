import React, {useEffect, useState} from 'react'

export const TextComponent = () => {
  const [user, setUser] = useState("Luca Fabbozzo");
  const [date, setDate] = useState("01-01-1998");

  const modUser = (e) => {
    setUser(e.target.value);
  };

  const cambiarFecha = (e) => {
    setDate(new Date().toLocaleDateString());
  };

  //is only executed once when loading the component
  useEffect(() => {
    console.log(
      "you have loaded the TextComponent or have you made a change in a state!!"
    );
  }, []);

    //is only executed once when change the user
    useEffect(() => {
      console.log(
        "you have change the user!!"
      );
    }, [user]);

  return (
    <div>
      <h1>The effect: Hook useEffect</h1>
      <strong className="label">{user}</strong>
      <strong>{date}</strong>
      <p>
        <input type="text" onChange={modUser} placeholder="Change the name" />

        <button onClick={cambiarFecha}>Change date</button>
      </p>
    </div>
  );
}
