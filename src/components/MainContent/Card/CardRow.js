import React from "react";
import Cards from "./Cards";

const CardRow = () => {
  return (
    <React.Fragment>
      {/* <!-- Content Row --> */}
      <div className="row">
        {/* <!-- Earnings (Monthly) Card Example --> */}

        <Cards
          cardHeadingText="Earnings (Monthly)"
          cardHeadingStyle="text-primary"
          cardValue="$40,000"
          cardIcon="fas fa-calendar fa-2x text-gray-300"
          cardBorder="border-left-primary"
          cardProgressBarStyle="bg-primary"
        />

        {/* <!-- Earnings (Monthly) Card Example --> */}

        <Cards
          cardHeadingText="Earnings (Annual)"
          cardHeadingStyle="text-success"
          cardValue="$215,000"
          cardIcon="fas fa-dollar-sign fa-2x text-gray-300"
          cardBorder="border-left-success"
          cardProgressBarStyle="bg-success"
        />

        {/* <!-- Earnings (Monthly) Card Example --> */}

        <Cards
          cardHeadingText="Tasks"
          cardHeadingStyle="text-info"
          cardValue="50%"
          cardIcon="fas fa-clipboard-list fa-2x text-gray-300"
          cardBorder="border-left-info"
          cardProgressBar="50"
          cardProgressBarStyle="bg-info"
        />

        {/* <!-- Pending Requests Card Example --> */}

        <Cards
          cardHeadingText="Pending Requests"
          cardHeadingStyle="text-warning"
          cardValue="18"
          cardIcon="fas fa-comments fa-2x text-gray-300"
          cardBorder="border-left-warning"
          cardProgressBarStyle="bg-warning"
        />
      </div>
    </React.Fragment>
  );
};

export default CardRow;
