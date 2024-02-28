import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({
  dashBoard,
  data,
  forTwo,
  forThree,
  forFour,
  forFive,
}) => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div
        className={[
          classes.wrapper,
          classes[`wrapper-${data.items.length}`],
        ].join(" ")}
      >
        <div
          className={classes.dashBoard}
          style={{
            "--bg": dashBoard.bg,
            "--headingColor": dashBoard.headingColor,
          }}
        >
          <h3 className={classes.heading}>{dashBoard.heading}</h3>
          <div className={classes.icons}>
            {dashBoard.icons.map((el, i) => (
              <div
                className={classes.iconContainer}
                key={i}
                style={{ "--bg": el.bg, "--border": el.border }}
              >
                <div className={classes.icon}>{el.icon}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.container}>
          <div className={classes.brainWrapper}>
            {data.items.length === 2 && (
              <div className={[classes.curveLine, classes.forTwo].join(" ")}>
                {forTwo}
              </div>
            )}
            {data.items.length === 3 && (
              <div className={[classes.curveLine, classes.forThree].join(" ")}>
                {forThree}
              </div>
            )}
            {data.items.length === 4 && (
              <div className={[classes.curveLine, classes.forFour].join(" ")}>
                {forFour}
              </div>
            )}{" "}
            {data.items.length === 5 && (
              <div className={[classes.curveLine, classes.forFive].join(" ")}>
                {forFive}
              </div>
            )}
            {data.items.map((el, i) => (
              <div
                className={[
                  classes.mycontainer,
                  classes[`myContainer${i + 1}`],
                ].join(" ")}
              >
                <div className={classes.circle} key={i}>
                  {" "}
                  <p
                    className={classes.name}
                    dangerouslySetInnerHTML={{ __html: el.name }}
                  ></p>
                  <div className={classes.img}>{el.img}</div>
                </div>
                <div className={classes.straightLine}>{el.straightLine}</div>
                <div
                  className={classes.usersContainer}
                  style={{ "--bg": el.userContainer.bg }}
                >
                  {el.userContainer.users.map((user, i) => (
                    <img src={user} alt="#" key={i} />
                  ))}
                </div>

                <div
                  className={classes.compensation}
                  style={{
                    "--textColor": el.compensation.textColor,
                    "--bg": el.compensation.bgColor,
                  }}
                >
                  <div className={classes.compensationIcon}>
                    {el.compensation.img}
                  </div>
                  <p className={classes.compensationText}>
                    {el.compensation.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
