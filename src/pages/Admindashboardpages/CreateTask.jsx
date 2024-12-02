import React from "react";

function CreateTask() {
  return (
    <div>
      <form>
        <div>
          <h3>Task title</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Description</h3>
          <textarea name="" id=""></textarea>
        </div>
        <div>
          <h3>Date</h3>
          <input type="Date" />
        </div>
        <div>
          <h3>Assign to</h3>
          <input type="text" placeholder="employee name" />
        </div>
        <div>
          <h3>Category</h3>
          <input type="text" placeholder="design,dev etc" />
        </div>
        <button>Create task</button>
      </form>
    </div>
  );
}

export default CreateTask;
