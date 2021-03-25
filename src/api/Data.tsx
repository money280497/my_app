import React from 'react';
import  App from '../App';
interface Props {
        by: string,
        descendants: number,
        id: number,
        kids: [],
        score: number,
        time: number,
        title: string,
        type: string,
        url: string
}
  
const Comp:React.FC<Props> = (props): JSX.Element => {
    return (
    <div className="App">    
     <h1>{props.by}</h1>
     <h1>{props.descendants}</h1>
     <h1>{props.id}</h1>
     <h1>{props.kids}</h1>
     <h1>{props.score}</h1>
     <h1>{props.time}</h1>
     <h1>{props.title}</h1>
     <h1>{props.type}</h1>
     <h1>{props.url}</h1>  
   </div>);
  };

export default Comp;
