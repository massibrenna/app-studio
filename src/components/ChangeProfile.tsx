import React, { useState, useEffect, useContext } from 'react';
import { UserProps } from './Home';
import { AppContext } from '../App';
const ChangeProfile = () => {
 
 const {username, setUsername} = useContext(AppContext);
 const [newUsername, setNewusername] = useState<string>("");
 
 return (
        <div>ChangeProfile
                <input onChange={ (event) => {
                    setNewusername(event.target.value);
                }} />
                <button onClick={ () =>{ setUsername(newUsername) }}>Change Username</button>
        </div>
    )
}

export default ChangeProfile;