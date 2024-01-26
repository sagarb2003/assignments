import Assignment1 from "./components/Assignment1";
import Assignment2 from "./components/Assignment2";
import Assignment4 from "./components/Assignment4";
import Assignment5 from "./components/Assignment5";
import Assignment6 from "./components/Assignment6";
import Assignment7 from "./components/Assignment7";
import  {BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Assignment3 from "./components/Assignment3";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/1" element={<Assignment1 />} />
          <Route path="/2" element={<Assignment2 />} />
          
          <Route
            path="/3"
            element={<Assignment3/>}
           
          />
          <Route path="/4" element={<Assignment4 />} />
          <Route path="/5" element={<Assignment5 />} />
          <Route path="/6" element={<Assignment6 />} />
          <Route path="/7" element={<Assignment7 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  const styles={
    padding:'3px 50px',
    marginTop:'20px',
    borderRadius:'15px',
    backgroundColor:'black',
    color:'white',
    fontSize:'30px',
    cursor:'pointer'
  }
  return (
    <div style={{ textAlign: "center", margin: "45px" }}>
      <h1>Week-7 Assignment</h1>
      <Link to="/1">
        <button style={styles}>1</button>
      </Link>
      <br />
      <Link to="/2">
        <button style={styles}>2</button>
      </Link>
      <br />
      {/* Add similar Links for other buttons */}
      <Link to="/3">
        <button style={styles}>3</button>
      </Link>
      <br />
      <Link to="/4">
        <button style={styles}>4</button>
      </Link>
      <br />
      <Link to="/5">
        <button style={styles}>5</button>
      </Link>
      <br />
      <Link to="/6">
        <button style={styles}>6</button>
      </Link>
      <br />
      <Link to="/7">
        <button style={styles}>7</button>
      </Link>
      <br />
    </div>
  );
}


export default App;
