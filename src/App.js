import "./App.css";
import CustomRoutes from "./routes/CustomRoutes";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomRoutes />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
