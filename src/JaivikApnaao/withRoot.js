import React from 'react'

export default function withRoot(Component) {
    function withRoot(props){
  return (
    <Component {...props}/>
  );
    }
    return withRoot;
}

