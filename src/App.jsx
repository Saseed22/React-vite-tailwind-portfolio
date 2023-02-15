import Contact from "./components/contact";
import Main from "./components/main";
import Projects from "./components/projects";
import SideNav from "./components/sideNav";
import Work from "./components/work";

function App() {
  return (
    <div>
      <SideNav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
