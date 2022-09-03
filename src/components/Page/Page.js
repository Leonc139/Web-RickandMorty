import React from "react";

const Page = ({ title, ...rest }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center">
          <button className="btn btn-primary p-1 mb-3" type="button" style={{ width: "100px", fontSize: "18px" }} {...rest}>
            {title}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
