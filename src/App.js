import "./App.css";
import Color from "color";

/* const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}; */

function App() {
  function randInRange(start = 0, end = 255) {
    return Math.floor(Math.random() * end + start);
  }

  function arrayOfRandRGB() {
    return [randInRange(), randInRange(), randInRange()];
  }

  let color = Color(arrayOfRandRGB());
  console.log(color);

/*   let colorStr1 = {
    backgroundColor: color.rgb(),
  };

  let colorStr2 = {
    backgroundColor: color.negate(),
  }; */

  return (
    <>
      <header className="hg__header"></header>
      <main className="hg__main"></main>
      <aside className="hg__left"></aside>
      <aside className="hg__right"></aside>
      <footer className="hg__footer"></footer>
    </>
  );
}

export default App;
