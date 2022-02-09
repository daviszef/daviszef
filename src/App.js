
import './App.css';
import { About, Header, Home, Project, Contact } from "./components"
// import MetaTags from 'react-meta-tags';
// import { DavisPic } from './assets'

function App() {
  return (
    <div className="w-screen h-auto bg-mygrey">
      {/* <MetaTags>
        <title>Davis Zefanya</title>
        <meta name="description" content="Get to know me here!!" />
        <meta property="og:title" content="Davis Zefanya" />
        <meta property="og:image" content={DavisPic} />
      </MetaTags> */}
      <Header />
      <Home />
      <Project />
      {/* <About /> */}
      <Contact />
      
    </div>
  );
}

export default App;
