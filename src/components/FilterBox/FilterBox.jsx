import { dataRender, months, years } from "../../utils/DataRender";
import { useState } from "react";
import './FilterBox.css';

const FilterBox = ({getMonthYear}) => {
    const [selectedMonth, setSelectedMonth] = useState("Jan");
    const [selectedYear, setSelectedYear] = useState(2023);

    const monthToRender = () => {
        return dataRender(months);
    }

    const yearToRender = () => {
        return dataRender(years)
    }

    const handleMonthChange = (e) => {
        setSelectedMonth(e.target.value);

    }

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
    }

    const updateParent = (e) => {
        e.preventDefault()
        getMonthYear(selectedMonth,selectedYear)
    }
  return (
    <div>
         <form className="filter-card" onSubmit={updateParent}>
            <div className="wrapper">
                <div className="date">
                    <label htmlFor="month">Month :</label>
                    <select
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    >{monthToRender}</select>
                </div>
                <label htmlFor="year">Year :</label>
                <select
                    value={selectedYear}
                    onChange={handleYearChange}
                >{yearToRender}</select>
                <button type="submit">Find Events</button>
            </div>
      </form>
    </div>
  )
}

export default FilterBox