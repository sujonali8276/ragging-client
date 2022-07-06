import React from "react";

const NotFound = () => {
  const style = {
    color: "red",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };
  return (
    <div style={style}>
      <h1 className="text-center mt-5">Oops !!! 404 </h1>
      <hr />
      <h4 className="text-center">Page Not Found</h4>
    </div>
  );
};

export default NotFound;
