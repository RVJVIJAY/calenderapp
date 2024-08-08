import React, { useState } from "react";

const Calender = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [todaydate, settodaydate] = useState(new Date());

  const dayinmonth = () => {
    const totaldays = [];
    const Firstday = new Date(todaydate.getFullYear(), todaydate.getMonth(), 1); // THIS  WAY TO WE FIND THE MONTH OF START DATE
    console.log(Firstday);
    const Lastday = new Date(
      todaydate.getFullYear(),
      todaydate.getMonth() + 1,
      0
    ); // THIS WAY TO FIND MONTH OF LAST DATE
    // console.log(Lastday);
    // console.log(todaydate.getMonth());
    // to get space in date for eg the staring day is monday then we put initial days to empty
    for (let i = 0; i < todaydate.getDay(); i++) {
      totaldays.push(null);
    }
    //get start date to end date
    for (let i = 1; i <= Lastday.getDate(); i++) {
      totaldays.push(
        new Date(todaydate.getFullYear(), todaydate.getMonth(), i)
      );
    }
    // console.log(totaldays);
    return totaldays;
  };

  const issameday = (arrydate, todaydate) => {
    return (
      arrydate.getDate() === todaydate.getDate() &&
      arrydate.getMonth() === todaydate.getMonth() &&
      arrydate.getFullYear() === todaydate.getFullYear()
    );
  };
  const handlemonth = (e) => {
    const newmonth = parseInt(e.target.value);
    settodaydate(new Date(todaydate.getFullYear(), newmonth, 1));
  };
  const handleyear = (e) => {
    const newyear = parseInt(e.target.value);
    settodaydate(new Date(newyear, todaydate.getMonth(), 1));
  };
  const handleforward = () => {
    settodaydate(
      new Date(todaydate.getFullYear(), todaydate.getMonth() - 1, 1)
    );
  };
  const handlebackward = () => {
    settodaydate(
      new Date(todaydate.getFullYear(), todaydate.getMonth() + 1, 1)
    );
  };
  return (
    <>
      <div className="calender">
        <div className="header">
          <button className="leftarrow" onClick={handleforward}>
            {"<"}
          </button>
          <select value={todaydate.getMonth()} onChange={handlemonth}>
            {monthsOfYear.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
          <select value={todaydate.getFullYear()} onChange={handleyear}>
            {Array.from(
              { length: 10 },
              (_, index) => todaydate.getFullYear() - 5 + index
            ).map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
          <button className="rightarrow" onClick={handlebackward}>
            {">"}
          </button>
        </div>
        <div className="dayofweek">
          {daysOfWeek.map((day) => {
            return <div key={day}>{day}</div>;
          })}
        </div>
        <div className="days">
          {dayinmonth().map((day, index) => (
            <div
              className={
                day
                  ? issameday(day, new Date())
                    ? "currend-date"
                    : "day"
                  : "empty"
              }
              key={index}
            >
              {day ? day.getDate() : ""}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calender;
