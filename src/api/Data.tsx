import React from "react";
import App from "../App";
interface Props {
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

const Comp: React.FC<Props> = (props): JSX.Element => {
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <b>
                <i>
                  <p className="h-7 sm:h-8">{props.type.toLocaleUpperCase()}</p>
                </i>
              </b>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>{props.title}</p>
                <ul className="list-disc space-y-2">
                  {props.kids.length &&
                    props.kids.map((item) => (
                      <li className="flex items-start">
                        <span className="h-6 flex items-center sm:h-7">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-cyan-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                        <p className="ml-2">{item}</p>
                      </li>
                    ))}
                </ul>
                <p>{}</p>
                <b>
                  <i>
                    <p>{new Date(props.time * 1000).toDateString()}</p>
                  </i>
                </b>
              </div>
              <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                <p>BY : {props.by}</p>
                <p>
                  <a
                    href={props.url}
                    className="text-cyan-600 hover:text-cyan-700"
                  >
                    Know More &rarr;
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp;
