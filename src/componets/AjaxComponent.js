import React, { useEffect, useState } from 'react'

export const AjaxComponent = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  //Generic / basic
  // const getStaticUser = () => {
  //   setUser([
  //     {
  //       id: 1,
  //       email: "michael.lawson@reqres.in",
  //       first_name: "Michael",
  //       last_name: "Lawson",
  //       avatar: "https://reqres.in/img/faces/7-image.jpg",
  //     },
  //     {
  //       id: 2,
  //       email: "lindsay.ferguson@reqres.in",
  //       first_name: "Lindsay",
  //       last_name: "Ferguson",
  //       avatar: "https://reqres.in/img/faces/8-image.jpg",
  //     },
  //     {
  //       id: 3,
  //       email: "tobias.funke@reqres.in",
  //       first_name: "Tobias",
  //       last_name: "Funke",
  //       avatar: "https://reqres.in/img/faces/9-image.jpg",
  //     },
  //   ]);
  // };

  // const getUserAjaxPms = () => {
  //   fetch("https://reqres.in/api/users?page=2")
  //     .then(response => response.json())
  //     .then(final_result => {
  //       setUser(final_result.data);
  //       console.log(user);
  //     },
  //       error => {
  //         console.log(error);
  //     })
  // }

  const getUserAjaxAW = () => {

    setTimeout(async() => {
      const request = await fetch("https://reqres.in/api/users?page=2");
      const { data } = await request.json();

      setUser(data);
      setLoading(false);
    }, 2000)
  };

  useEffect(() => {
    //getStaticUser();
    //getUserAjaxPms();
    getUserAjaxAW();
  }, []);


  if (loading === true) {
    //when loading
    return <div className="loading">Loading data...</div>;
  } else {
    //when everything went well
    return (
      <div>
        <h2>User list via Ajax</h2>
        <ul className="users">
          {user.map((user) => {
            console.log(user);
            return (<li key={user.id}>
              <img src={user.avatar} alt={user.name} width="20" />
              &nbsp;
              {user.first_name} {user.last_name}
              </li>);
          })}
        </ul>
      </div>
    );
  }
  } 
 

