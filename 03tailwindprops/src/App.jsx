import Card from "./components/Card";

function App() {
	// let myObj = {
	// 	name: "Tushar",
	// 	age:  23,
	// }
	// let newArr = [1,2,3,4]
  return (
    <>
      <h1 className="text-center bg-green-500 text-black rounded-xl p-3">
        Tailwind CSS Test
      </h1>
     <Card username="chaiaurcode" btnText="Visit Me"/>
     <Card username="Tushar" btnText="Clik Me"/>
    </>
  );
}

export default App;
