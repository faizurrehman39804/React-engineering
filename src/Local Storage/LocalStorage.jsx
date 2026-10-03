import React from "react";

const LocalStorage = () => {
  // localStorage.clear();
  // sessionStorage.clear();
  localStorage.setItem("age", "20");

  return (
    <div>
      <h1>Local Storage</h1>
      //setItem() localStorage.setItem(key, value)
      //getItem() localStorage.getItem(key)
      //removeItem() localStorage.removeItem(key)
      //clear() localStorage.clear()
      //
    </div>
  );
};

export default LocalStorage;
