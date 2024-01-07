import React, { useState, useEffect, useContext } from 'react';
import Button from './Button';
import { AppContext } from '../App';

export type UserProps = {
    title?: string,
    paragraph?: string,
    username?: string,
    setUsername: (i:string) => void
  }
const Home : React.FC<any> = () => {

  const {username} = useContext(AppContext);
  
    return (
      <>
        <div> 
            <h1 className="title is-1">This is the Home Page {username}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida,
          risus at dapibus aliquet, elit quam scelerisque tortor, nec accumsan eros
          nulla interdum justo. Pellentesque dignissim, sapien et congue rutrum,
          lorem tortor dapibus turpis, sit amet vestibulum eros mi et odio.
        </p>
        <Button backgroundColor="red" />
        </div>
        
        </>
    )
}

export default Home;