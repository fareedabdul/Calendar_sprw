import Sidebar from "./Components/Sidebar";
import Header from "./Components/header";
import CalendarGrid from "./Components/CalendarGrid";


function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 p-6 bg-gray-50 overflow-auto">
          <CalendarGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
