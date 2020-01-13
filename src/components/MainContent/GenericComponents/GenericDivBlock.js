import React from "react";

const GenericDivBlock = props => {
  return (
    <React.Fragment>
      <div className={`${props.col}`}>
        <div className="card shadow mb-4">
          {/* <!-- Card Header - Dropdown --> */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              {props.Heading}
            </h6>
            <div className="dropdown no-arrow">
              {props.dropDownHeading ? (
                <a
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  s
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                </a>
              ) : (
                false
              )}
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                aria-labelledby="dropdownMenuLink"
              >
                <div className="dropdown-header">{props.dropDownHeading}</div>
                {props.dropDownItems
                  ? props.dropDownItems.map((v, i) => {
                      return (
                        <a className="dropdown-item" href="#" key={i}>
                          {v}
                        </a>
                      );
                    })
                  : false}
              </div>
            </div>
          </div>

          {/*   
          col="col-xl-"
          Heading=""
          dropDownHeading=""
          dropDownItems={["", "", ""]}
          footerPills={["", "", ""]} 
          
          */}
          {props.footerPills ? (
            <div className="card-body">
              <div className="chart-pie pt-4 pb-2">
                <canvas id="myPieChart"></canvas>
              </div>
              <div className="mt-4 text-center small">
                {props.footerPills.map((value, index) => {
                  return (
                    <span className="mr-2" key={index}>
                      <i
                        className={`fas fa-circle  ${
                          index == 0
                            ? "text-primary"
                            : index == 1
                            ? "text-success"
                            : index == 2
                            ? "text-info"
                            : false
                        }`}
                      ></i>{" "}
                      {value}
                    </span>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="card-body">
              <div className="chart-area">
                <canvas id="myAreaChart"></canvas>
              </div>
            </div>
          )}

          {/*  */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GenericDivBlock;
