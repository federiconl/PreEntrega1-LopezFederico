import React from 'react'


export const Title = (props) => {
    console.log(props);
  return (
    <h1>Hola {props.greeting}</h1>
  );
}

export default Title
