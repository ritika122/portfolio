
import { Route, Routes } from 'react-router-dom';
import SideNav from './Components/Navigation'; // ✅ Import it
import Home from './Components/Home';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import ProjectCard1 from './Components/ProjectCard1';

function App() {
  return (
    <div className="min-h-screen bg-primary relative">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('/src/assets/background.jpg'), linear-gradient(to bottom, #0a192f, #112240)",
        }}
      ></div>
      <div className="relative z-10">
        {/* ✅ Add SideNav */}
        <SideNav />

        <main className="container mx-auto p-4 ml-20 md:ml-64">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projectCard1" element={<ProjectCard1 />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
 export default App;