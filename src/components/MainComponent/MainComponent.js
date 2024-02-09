import React from "react";
import classes from "./MainComponent.module.css";

const MainComponent = ({ dashBoard, data, curveLine }) => {
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
            <div className={classes.curveLine}>{curveLine}</div>
            {data.items.map((el, i) => (
              <div className={classes.mycontainer}>
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
