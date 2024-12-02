import React from "react";
import AllTask from "../../pages/Admindashboardpages/AllTask";
import CreateTask from "../../pages/Admindashboardpages/CreateTask";
import Header from "../../pages/EmployedashboardPages/Header";

function Admindashboard() {
  return (
    <div>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
}

export default Admindashboard;
