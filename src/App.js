import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import LeaveCalendar from "./Pages/LeaveCalendar";
import Calendar from "./Components/Calendar/Calendar";

function App() {
  return (
    <div className="App">
      <Header />
      <LeaveCalendar />
      {/* <Calendar /> */}
      <Footer />
    </div>
  );
}

export default App;
