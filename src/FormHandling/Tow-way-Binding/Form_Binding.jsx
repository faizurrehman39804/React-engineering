import React from "react";

const Form_Binding = () => {
  const [title, setTitle] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with name:", title);
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Form Page</h1>
      <form
        className="text-center mt-10 space-y-5 gap-5"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          id="name"
          className="border border-gray-300 p-2.5" 
          value={title}
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />

        {/* <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          className="border border-gray-300 p-2.5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /> */}
        <button type="submit" className="bg-blue-500 text-white p-2.5 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form_Binding;
