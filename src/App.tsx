import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://cataas.com";

const App = () => {
  const [tag, setTag] = useState<any>(null);
  const [customText, setCustomText] = useState<string>("");
  const [urlText, setUrlText] = useState<any>();

  // useEffect(() => {
  //   axios
  //     .get(`${baseURL}/cat`)
  //     .then((response) => {
  //       setRandomCat(response);
  //       console.log(randomCat.data);
  //     })
  //     .catch((error) => console.error("Error"));
  // }, []);

  const HandleTagChange = (e: any) => {
    setTag(e.target.value);
  };

  const HandleCustomText = (e: any) => {
    setCustomText(e.target.value);
  };

  const HandleCreateMeme = () => {
    // axios
    //   .get(`${baseURL}/cat/${tag}/says/${customText}`)
    //   .then((response) => {})
    //   .catch((error) => console.error("Error"));
    console.log(`${baseURL}/cat/${tag}/says/${customText}`);
  };

  console.log(customText);

  return (
    <div className="flex flex-col justify-start h-screen gap-24 px-5 pt-10 bg-gray-100">
      <div className="flex flex-row self-center justify-center w-3/4 h-24 gap-10">
        <div className="flex flex-col self-end gap-2">
          <h2 className="text-xl font-semibold">Cat meme Generator</h2>
          <p>You could use this generator to create your own cate meme!</p>
        </div>

        <select
          id="tag"
          name="tag"
          className="self-end h-10 px-3 py-2 pr-3 text-base rounded-md w-52 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          defaultValue="Filter on Tag"
          onChange={(e) => HandleTagChange(e)}
        >
          <option>cute</option>
          <option>shark</option>
          <option>witch</option>
          <option>Tired cat</option>
          <option>kitty</option>
        </select>

        <input
          type="email"
          name="email"
          id="email"
          className="self-end h-10 px-3 border-gray-300 rounded-md shadow-sm placeholder:text-black w-60 focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Custom text"
          onChange={(e) => HandleCustomText(e)}
        />
        <button
          type="button"
          className="items-center self-end rounded border text-lg h-10 border-transparent bg-indigo-600 px-2.5 py-1.5 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={HandleCreateMeme}
        >
          CREATE MEME
        </button>
      </div>
      <div className={`flex self-center justify-center w-3/4 h-2/3`}>
        <img src="https://cataas.com/cat" alt="cat-meme" />
      </div>
    </div>
  );
};

export default App;
