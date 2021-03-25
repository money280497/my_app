import React from "react";
import axios from "axios";
import "./App.css";
import Comp from "./api/Data";
import "./styles/main.css";

interface IPost {
  id: [];
}
interface ITitle {
  title: [];
}
interface IPostItems {
  by: string;
  descendants: number;
  id: number;
  kids: [];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
}
const PostItems: IPostItems = {
  by: "",
  descendants: 0,
  id: 0,
  kids: [],
  score: 0,
  time: 0,
  title: "",
  type: "",
  url: "",
};

const defaultPosts: IPost[] = [];
const defaultTitle: ITitle[] = [];
const App: React.FC = () => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(
    defaultPosts
  );
  const [title, setTitle]: [
    ITitle[],
    (posts: ITitle[]) => void
  ] = React.useState(defaultTitle);
  const [flag, setFlag] = React.useState<boolean>(false);
  const [data, setData] = React.useState<IPostItems>(PostItems);
  React.useEffect(() => {
    const url =
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    axios.get<IPost[]>(url).then((response) => {
      //console.log(response.data);
      setPosts(response.data.slice(0, 50));
      let promises = response.data.slice(0, 50).map((item) => {
        return axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`
        );
      });
      Promise.all(promises).then((res) =>
        setTitle(
          res.map((item) => {
            console.log(item.data.title);
            return item.data.title;
          })
        )
      );
    });
  }, []);

  const handleClick = (item: object) => {
    const current = item;
    const url = `https://hacker-news.firebaseio.com/v0/item/${current}.json?print=pretty`;
    axios.get<IPostItems>(url).then((response) => {
      setFlag(true);
      setData(response.data);
    });
  };
  //console.log("mohit",data);

  return (
    <div className="bg-coolGray">
      {!!flag ? (
        <>
          <button
            className="bg-blue-500 hover:bg-blue-700 m-auto item-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              setFlag(false);
            }}
          >
            Back
          </button>
          <Comp {...data} />
        </>
      ) : (
        <div className="grid gap-3 grid-cols-8 grid-flow-row auto-row-max">
          {title.map((item, index) => {
            return (
              <div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={(event: React.MouseEvent<HTMLElement>) => {
                    handleClick(posts[index]);
                  }}
                >
                  {item}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default App;
