import { useState } from "react";

import Brain from "./images/Brain";

import StraightLine from "./images/StraightLine";
import LineChart from "./images/LinChart";
import BarChart from "./images/BarChart";
import PieChart from "./images/PieChart";
import { user1, user2, user3 } from "./images";
import MainComponent from "./components/MainComponent/MainComponent";
import Compensation from "./images/Compensation";
import ForFour from "./images/ForFour";
import ForTwo from "./images/ForTwo";
import ForThree from "./images/ForThree";
import ForFive from "./images/ForFive";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'IBM Plex Sans', sans-serif",
    mainBg: "#F2F4F7",
    dashBoard: {
      heading: "Insights Dashboard",
      headingColor: "#000",
      bg: "#fff",
      icons: [
        {
          icon: <LineChart color="#7D89B0" />,
          bg: "#F9FAFB",
          border: "1px solid #F2F4F7",
        },
        {
          icon: <BarChart color="#7D89B0" />,
          bg: "#F9FAFB",
          border: "1px solid #F2F4F7",
        },
        {
          icon: <PieChart color="#7D89B0" />,
          bg: "#F9FAFB",
          border: "1px solid #F2F4F7",
        },
      ],
    },
    circleBg: "#B8E4E2",
    nameColor: "#000",
    forTwo: <ForTwo color="#D5D9EB" />,
    forThree: <ForThree color="#D5D9EB" />,
    forFour: <ForFour color="#D5D9EB" />,
    forFive: <ForFive color="#D5D9EB" />,

    data: {
      items: [
        {
          img: <Brain color="#1F8F84" />,
          name: "AI <br/> Moderator",
          straightLine: <StraightLine color="#B3B8DB" />,
          userContainer: {
            bg: "#EAECF0",
            users: [
              user1,
              user2,
              user3,
              user1,
              user2,
              user3,
              user1,
              user2,
              user3,
            ],
          },
          compensation: {
            img: <Compensation color="#7D89B0" />,
            text: "Instant compensation",
            textColor: "#000",
            bgColor: "#fff",
          },
        },
        {
          img: <Brain color="#1F8F84" />,
          name: "AI <br/> Moderator",
          straightLine: <StraightLine color="#B3B8DB" />,
          userContainer: {
            bg: "#EAECF0",
            users: [
              user1,
              user2,
              user3,
              user1,
              user2,
              user3,
              user1,
              user2,
              user3,
            ],
          },
          compensation: {
            img: <Compensation color="#7D89B0" />,
            text: "Instant compensation",
            textColor: "#000",
            bgColor: "#fff",
          },
        },
        {
          img: <Brain color="#1F8F84" />,
          name: "AI <br/> Moderator",
          straightLine: <StraightLine color="#B3B8DB" />,
          userContainer: {
            bg: "#EAECF0",
            users: [
              user1,
              user2,
              user3,
              user1,
              user2,
              user3,
              user3,
              user1,
              user2,
            ],
          },
          compensation: {
            img: <Compensation color="#7D89B0" />,
            text: "Instant compensation",
            textColor: "#000",
            bgColor: "#fff",
          },
        },
        {
          img: <Brain color="#1F8F84" />,
          name: "AI <br/> Moderator",
          straightLine: <StraightLine color="#B3B8DB" />,
          userContainer: {
            bg: "#EAECF0",
            users: [
              user1,
              user2,
              user3,
              user1,
              user2,
              user3,
              user3,
              user1,
              user2,
            ],
          },
          compensation: {
            img: <Compensation color="#7D89B0" />,
            text: "Instant compensation",
            textColor: "#000",
            bgColor: "#fff",
          },
        },
        {
          img: <Brain color="#1F8F84" />,
          name: "AI <br/> Moderator",
          straightLine: <StraightLine color="#B3B8DB" />,
          userContainer: {
            bg: "#EAECF0",
            users: [
              user1,
              user2,
              user3,
              user1,
              user2,
              user3,
              user3,
              user1,
              user2,
            ],
          },
          compensation: {
            img: <Compensation color="#7D89B0" />,
            text: "Instant compensation",
            textColor: "#000",
            bgColor: "#fff",
          },
        },
      ],
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          "--circleBg": allData.circleBg,
          "--nameColor": allData.nameColor,
          fontFamily: allData.fontFamily,
          background: allData.background,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
