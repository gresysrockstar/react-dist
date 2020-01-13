import React from "react";

function Cards(props) {
  return (
    <React.Fragment>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card  shadow h-100 py-2 ${props.cardBorder}`}>
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div
                  className={`text-xs font-weight-bold text-uppercase mb-1 ${props.cardHeadingStyle}`}
                >
                  {props.cardHeadingText}
                </div>
                {/*  */}
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      {props.cardValue}
                    </div>
                  </div>
                  {props.cardProgressBar ? (
                    <div className="col">
                      <div className="progress progress-sm mr-2">
                        <div
                          className={`progress-bar ${props.cardProgressBarStyle}`}
                          role="progressbar"
                          style={{ width: props.cardProgressBar + "%" }}
                          aria-valuenow={props.cardProgressBar}
                        ></div>
                      </div>
                    </div>
                  ) : (
                    false
                  )}
                </div>
                {/*  */}
              </div>
              <div className="col-auto">
                <i className={`${props.cardIcon}`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Cards;
