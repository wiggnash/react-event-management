import FilterBox from "../../components/FilterBox/FilterBox"
import SearchEventList from "../../components/SearchEventList/SearchEventList"
import './FilterEvents.css'
import { useState } from "react"

const FilterEvents = () => {
  const [monthYear, setMonthYear] = useState({
    selectedMonth:null,
    selectedYear:null
  })

  const getMonthYear = (selectedMonth,selectedYear) => {
    setMonthYear({selectedYear,selectedMonth})
  }

  return (
    <div>
      <h1>Filter Events</h1>
      <FilterBox getMonthYear = {getMonthYear}/>
      <SearchEventList monthYear={monthYear}/>
    </div>
  )
}

export default FilterEvents