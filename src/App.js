import NavBar from "./components/navbar";
import Header from "./container/header/header";
import About from "./container/about/about";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <div>
      <div className="bg"></div>
      <NavBar />
      <Header />
      <About />
    </div>
  );
}

export default App;
