import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LeaveCalendar from "./Pages/LeaveCalendar";

function App() {
  return (
    <div className="App">
      <Header />
      <LeaveCalendar />
      <Footer />
    </div>
  );
}

export default App;
