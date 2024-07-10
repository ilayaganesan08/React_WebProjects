import { useState } from 'react'
import './App.css'

import left_arrow from "./assets/left_arrow.svg";
import right_arrow from "./assets/right_arrow.svg";

const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function App() {
  const [selectDate, setSelectDate] = useState(new Date());
  const daysInMonth = () => {
    const daysArray = [];
    const firstDay = new Date(selectDate.getFullYear(), selectDate.getMonth(), 1)
    const lastDay = new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 0)

    for (let i = 0; i < firstDay.getDate(); i++) {
      daysArray.push(null);
    }
    
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(new Date(selectDate.getFullYear(), selectDate.getMonth(), i));
    }
   
    return daysArray;
  };

  const isSameDay = (date1, date2) =>{
    return date1.getDate()=== date2.getDate()  && date1.getMonth()===date2.getMonth() && date1.getFullYear()===date2
    .getFullYear();

  };


  const handleChangeMonth = (e) => {
    const newMonth=parseInt(e.target.value, 10);
    setSelectDate(new Date(selectDate.getFullYear(), newMonth, 1));
  };

  const handleChangeYear = (e) => {
    const newYear = parseInt(e.target.value,10);
    setSelectDate(new Date(newYear, selectDate.getMonth(), 1));
  };

const handlePreviousMonth = () => {
  const newMonth = selectDate.getMonth() - 1;
  setSelectDate(new Date(selectDate.getFullYear(), newMonth, 1));
};

const handleNextMonth = () => {
  const newMonth = selectDate.getMonth() + 1;
  setSelectDate(new Date(selectDate.getFullYear(), newMonth, 1));
};
  return (
    <>
      <div className='calender'>
        <div className="header">
          <button onClick={handlePreviousMonth}>
            <img src={left_arrow} />
          </button>
          <select value={selectDate.getMonth()} onChange={handleChangeMonth} >
            {months.map((month, index) => (
              <option key={index} value={index}>{month}</option>
            ))}
          </select>
          <select value={selectDate.getFullYear()} onChange={handleChangeYear}>
            {
              Array.from({ length: 10 }, (_, i) => selectDate.getFullYear() - 5 + i).map((year) => (
                <option key={year} value={year}>{year}</option>))
            }
          </select>
          <button onClick={handleNextMonth}>
            <img src={right_arrow} />
          </button>
        </div>
        <div className="daysOfWeek">
          {dayOfWeek.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="days">
          {daysInMonth().map((day, index) =>(<div key={index} className={day ? (isSameDay(day, new Date()))? "day current": "day" : "empty"}>{day ? day.getDate() : ""}</div>))}
          </div>
</div>
      </>
      )
}

      export default App;

// import { useState } from 'react';
// import './App.css';

// import left_arrow from "./assets/left_arrow.svg";
// import right_arrow from "./assets/right_arrow.svg";

// const dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// function App() {
//   const [selectDate, setSelectDate] = useState(new Date());

//   const daysInMonth = () => {
//     const daysArray = [];
//     const firstDay = new Date(selectDate.getFullYear(), selectDate.getMonth(), 1);
//     const lastDay = new Date(selectDate.getFullYear(), selectDate.getMonth() + 1, 0);

//     // Fill empty days before the first day of the month
//     for (let i = 0; i < firstDay.getDay(); i++) {
//       daysArray.push(null);
//     }

//     // Fill the days of the month
//     for (let i = 1; i <= lastDay.getDate(); i++) {
//       daysArray.push(new Date(selectDate.getFullYear(), selectDate.getMonth(), i));
//     }

//     return daysArray;
//   };

//   const handleChangeMonth = (e) => {
//     const newMonth = parseInt(e.target.value, 10);
//     setSelectDate(new Date(selectDate.getFullYear(), newMonth, 1));
//   };

//   const handleChangeYear = (e) => {
//     const newYear = parseInt(e.target.value, 10);
//     setSelectDate(new Date(newYear, selectDate.getMonth(), 1));
//   };

//   const handlePreviousMonth = () => {
//     const newMonth = selectDate.getMonth() - 1;
//     setSelectDate(new Date(selectDate.getFullYear(), newMonth, 1));
//   };

//   const handleNextMonth = () => {
//     const newMonth = selectDate.getMonth() + 1;
//     setSelectDate(new Date(selectDate.getFullYear(), newMonth, 1));
//   };

//   return (
//     <>
//       <div className='calendar'>
//         <div className="header">
//           <button onClick={handlePreviousMonth}>
//             <img src={left_arrow} alt="Previous Month" />
//           </button>
//           <select value={selectDate.getMonth()} onChange={handleChangeMonth} >
//             {months.map((month, index) => (
//               <option key={index} value={index}>{month}</option>
//             ))}
//           </select>
//           <select value={selectDate.getFullYear()} onChange={handleChangeYear}>
//             {
//               Array.from({ length: 10 }, (_, i) => selectDate.getFullYear() - 5 + i).map((year) => (
//                 <option key={year} value={year}>{year}</option>))
//             }
//           </select>
//           <button onClick={handleNextMonth}>
//             <img src={right_arrow} alt="Next Month" />
//           </button>
//         </div>
//         <div className="daysOfWeek">
//           {dayOfWeek.map((day) => (
//             <div key={day}>{day}</div>
//           ))}
//         </div>
//         <div className="days">
//           {daysInMonth().map((day, index) => (
//             <div key={index} className={day ? "day" : "empty"}>
//               {day ? day.getDate() : ""}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
