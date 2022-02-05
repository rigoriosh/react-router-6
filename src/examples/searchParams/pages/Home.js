import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { randomUser } from '../helpres';

export const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  // searchParams is a URLSearchParams object.
  // See https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
  let user = searchParams.get("userr");
  console.log(user);

  let [userData, setUserData] = useState(null);

  useEffect(() => {
    let abortController = new AbortController();

    async function getGitHubUser() {
        console.log(abortController);
      let response = await fetch(`https://api.github.com/users/${user}`, {
        signal: abortController.signal
      });
      console.log(response);
      if (!abortController.signal.aborted) {
        let data = await response.json();
        setUserData(data);
      }
    }

    if (user) {
      getGitHubUser();
    }

    return () => {
      abortController.abort();
    };
  }, [user]);

  function handleSubmit(event) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let newUser = formData.get("user");
    if (!newUser) return;
    console.log(newUser);
    setSearchParams({ userr: newUser });
  }

  function handleRandomSubmit(event) {
    event.preventDefault();
    let newUser = randomUser();
    // our new random user is the same as our current one, let's try again
    if (newUser === user) {
      handleRandomSubmit(event);
    } else {
        console.log(newUser);
      setSearchParams({ userr: newUser });
    }
  }

  return (
    <div style={{width:'100%'}}>
      <div style={{ display: "flex", justifyContent:'center' }}>
        <form onSubmit={handleSubmit}>
          <label>
            <input defaultValue={user ?? undefined} type="text" name="user" />
          </label>
          <button type="submit">Search</button>
        </form>
        <form onSubmit={handleRandomSubmit}>
          <input type="hidden" name="random" />
          <button type="submit">Random</button>
        </form>
      </div>

      {userData && (
        <div
          style={{
            padding: "24px",
            margin: "24px 0",
            borderTop: "1px solid #eaeaea",
            display: "flex",
            alignItems: "center",
            justifyContent:'center',
            gap: "16px"
          }}
        >
          <img
            style={{ borderRadius: "50%" }}
            width={200}
            height={200}
            src={userData.avatar_url}
            alt={userData.login}
          />
          <div style={{width:'50%'}}>
            <h2>{userData.name}</h2>
            <p>{userData.bio}</p>
          </div>
        </div>
      )}
    </div>
  );
};
