import Home from "./pages/Home";
import AboutUs from './pages/AboutUs'
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from "./components/Header";
import KwikeeLite from "./pages/KwikeeLite";
import Kwikmax from "./pages/Kwikmax";
import Kwikgoals from "./pages/Kwikgoals";
import Utility from "./pages/Utility";
import Credit from "./pages/Credit";


function App() {
  return (
    <BrowserRouter>
    <Header />
    <div className="max-w-[1440px] mx-auto">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/credit" element={<Credit />} />
      <Route path="/kwiklite" element={<KwikeeLite />} />
      <Route path="/kwikmax" element={<Kwikmax />} />
      <Route path="/kwikgoal" element={<Kwikgoals />} />
      <Route path="/utilities" element={<Utility />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/faqs" element={<Faq />} />
      <Route path="/blogs" element={<Blog />} />
    </Routes>
  </div>
  </BrowserRouter>

  );
}

export default App;
