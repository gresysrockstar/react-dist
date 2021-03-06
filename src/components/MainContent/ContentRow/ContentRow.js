import React from "react";
import GenericDivBlock from "../GenericComponents/GenericDivBlock";

const ContentRow = () => {
  return (
    <React.Fragment>
      <div className="row">
        <GenericDivBlock
          col="col-xl-8 col-lg-7"
          Heading="Earnings Overview"
          dropDownHeading="DropDown Menu"
          dropDownItems={["Week", "Month", "Year"]}
          footerPills={["Direct", "Social", "Referral"]}
        />
        <GenericDivBlock col="col-xl-4 col-lg-5" Heading="Revenue Sources" />
      </div>
    </React.Fragment>
  );
};

export default ContentRow;
