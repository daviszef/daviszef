
import './App.css';
import { About, Header, Home, Project, Contact } from "./components"


function App() {
  return (
    <div className="w-screen h-auto bg-mygrey">
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
