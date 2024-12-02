import React from "react";
import Header from "../../pages/EmployedashboardPages/Header";
import TaskListNumber from "../../pages/EmployedashboardPages/TaskListNumber";
import Tasklist from "../../Tasklist/Tasklist";

function Employeedashboard() {
  return (
    <div>
      <Header />
      <TaskListNumber />
      <Tasklist />
    </div>
  );
}

export default Employeedashboard;
