const App = () => {
  return (
    <div className="flex flex-col justify-start h-screen p-10 bg-gray-100">
      <div className="flex flex-row self-center gap-10">
        <div className="flex flex-col self-end gap-2">
          <h2 className="text-xl font-semibold">Cat meme Generator</h2>
          <p>You could use this generator to create your own cate meme!</p>
        </div>

        <select
          id="tag"
          name="tag"
          className="self-end h-10 px-3 py-2 pr-3 text-base rounded-md w-52 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
          defaultValue="Filter on Tag"
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>

        <input
          type="email"
          name="email"
          id="email"
          className="self-end h-10 px-3 border-gray-300 rounded-md shadow-sm placeholder:text-black w-60 focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Custom text"
        />
        <button
          type="button"
          className="items-center self-end rounded border text-lg h-10 border-transparent bg-indigo-600 px-2.5 py-1.5 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          CREATE MEME
        </button>
      </div>
    </div>
  );
};

export default App;
