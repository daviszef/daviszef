
import './App.css';
import { About, Header, Home, Project, Contact } from "./components"
// import MetaTags from 'react-meta-tags';
// import { DavisPic } from './assets'

function App() {
  return (
    <div className="main">
      <div className="relative">
        <div className="absolute top-40 -left-28 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>


        {/* <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50"></div> */}
        <div className="absolute top-2/4 -left-24 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-24 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>


        <div className="absolute bottom-48 right-1/2 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bloby"></div>
        <div className="hidden md:flex absolute bottom-12 right-1/3 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bloby animation-delay-2000"></div>
        <div className="absolute bottom-4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-bloby animation-delay-4000"></div>
        
        <div className="relative">
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
      </div>

      
    </div>

    
  );
}

export default App;
