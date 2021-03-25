import React from 'react';
import axios from 'axios';
import './App.css';
import Comp from './api/Data';

interface IPost {
  id: number;
}
interface IPostItems {
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
const PostItems : IPostItems ={
  by: "",
  descendants: 0,
  id: 0,
  kids: [],
  score: 0,
  time: 0,
  title: "",
  type: "",
  url: ""
}

const defaultPosts: IPost[] = [];
const App: React.FC= () => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(
    defaultPosts
  );
  const [flag, setFlag] = React.useState<boolean>(false);
  const [data, setData]= React.useState<IPostItems>(PostItems
  );
  React.useEffect(()=>{
    const url = 'https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty';
    axios.get<IPost[]>(url)
    .then(response => {
        //console.log(response.data);
        setPosts( response.data );
    });
  },[])
  const handleClick = (item: object) =>{
    const current = item;
      const url = `https://hacker-news.firebaseio.com/v0/item/${current}.json?print=pretty`;
      axios.get<IPostItems>(url)
      .then(response => {
          setFlag(true);
          setData(response.data);
      }); 
  }
  //console.log("mohit",data);

  return (
    <div className="App">
      {!!flag ?
      <Comp {...data} />
      :(
      posts.map((item)=>{
     return <React.Fragment>
     <h5>{item}</h5>
     <button onClick={(event: React.MouseEvent<HTMLElement>) => {
   handleClick(item)
  }}>{item}</button> 
     </React.Fragment>
    }
    ))
    }
    </div>
  );
};
export default App;