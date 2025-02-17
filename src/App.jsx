import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <Sidebar/>
      <div className="flex-1 p-6">المحتوى الرئيسي هنا</div>
    </div>
  );
}
 
export default App;
