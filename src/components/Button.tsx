

import React, { useState, useEffect, useContext } from 'react';


const Button : React.FC<any> = (
    props: { backgroundColor: string}) => {

    const { backgroundColor } = props;

      return (
        <>
        <button className="bg-blue-500 text-white rounded px-4 py-2">
          Click me
        </button>
        </>
      )
  }
  
  export default Button;


{/*

props: { backgroundColor: string}
 const { backgroundColor } = props;

-----

{ backgroundColor, } : {backgroundColor: string;
    }) => {


*/}