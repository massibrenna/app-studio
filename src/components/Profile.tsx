import React, { useState, useEffect, useContext } from 'react';
import { useParams } from "react-router-dom";

import { UserProps } from './Home';
import ChangeProfile from './ChangeProfile';
import { withAuth } from './withAuth';
import { AppContext } from '../App';


const Profile = () => {


  const {username, setUsername} = useContext(AppContext);
  const { name } = useParams();
  return (
    <div>
      <h1 className="title is-1">This is the Profile Page {username}</h1>
      <article className="message is-dark" style={{ marginTop: 40 }}>
        <div className="message-header">
          <p>{name}</p>
        </div>
        <div className="message-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta
          nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida
          purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac{" "}
          <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et
          sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi
          magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales
          sem.
        </div>
      </article>
      <ChangeProfile/>
    </div>
  );
};

export default withAuth(Profile);