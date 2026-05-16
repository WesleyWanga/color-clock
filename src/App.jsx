// Import the format function from date-fns
import { format } from "date-fns";

// Import CSS styling
import "./App.css";

function App() {
  // Create a new Date object
  const currentDate = new Date();

  return (
    <div className="container">
      <h1>Color Clock</h1>

      {/* Display formatted date and time */}
      <p className="clock">
        {format(currentDate, "EEEE, MMMM do yyyy, h:mm:ss a")}
      </p>
    </div>
  );
}

export default App;
