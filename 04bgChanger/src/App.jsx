import { useState } from "react";
function App() {
  const [color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-2 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-2 rounded-3xl">
          <button
            className="outline-none px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "grey" }}
            onClick={() => setColor("grey")}
          >
            Grey
          </button><button
            className="outline-none px-4 py-2 rounded-full text-white"
            style={{ backgroundColor: "deeppink" }}
            onClick={() => setColor("deeppink")}
          >
            Pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
