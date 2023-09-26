import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import View from "./Components/View";
import { Provider } from "react-redux";
import store from "./Storage/Storage";
import Cartpage from "./Components/Cartpage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/view/:id" element={<View />} />
            <Route path="/cartitempage" element={<Cartpage />} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
