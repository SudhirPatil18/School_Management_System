import React from "react";
import PageBody from "../../Components/macro-Components/PageBody";

const ClassDivision = () => {
  return <div>ClassDivision</div>;
};

const ClassDivisionPage = () => {
  return (
    <div>
      <PageBody Comp={ClassDivision}></PageBody>
    </div>
  );
};

export default ClassDivisionPage;
