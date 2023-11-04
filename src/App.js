import "./styles.css";
import MyForm from "./MyForm";
const list = ["akhil", "abhishek", "samantha", "anya"];

export default function App() {
  const listItems = list.map((x) => <li key={x}>{x}</li>);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>{listItems}</div>
      <MyForm />
    </div>
  );
}
