import Grid from "./components/Grid";
import AppRouter from "./AppRouter";

function App(props) {
  return (
    <div className="container">
      <Grid numRows={3} numCols={10} key={props.key} />
    </div>
  );
}

export default App;
