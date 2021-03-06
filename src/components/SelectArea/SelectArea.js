import { useEffect, useState } from 'react'

import './SelectArea.scss'
import { data } from '../../utils/data'


const SelectArea = ({ changeSelect, shift }) => {
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')


  useEffect(() => {
    // const date = new Date()
    const date = new Date('2022-01-01T01:01:00')
    !data.changedYear && (data.changedYear = String(date.getFullYear()))
    !data.changedMonth && (data.changedMonth = String(date.getMonth())) // => янв -> 0, фев -> 1...
    // let month = String(date.toLocaleString('en', { month: 'long' }).substring(0, 3)) // -> feb
    // data.changedMonth = month[0].toUpperCase() + month.slice(1) // -> Feb
    setSelectedYear(data.changedYear)
    setSelectedMonth(data.months[+data.changedMonth])
  }, [])


  const handleChangeForm = (e) => {
    const name = e.target.name
    const value = e.target.value
    if (name === 'year') {
      setSelectedYear(value)
      data.changedYear = value
    } else {
      setSelectedMonth(value)
      const idx = data.months.findIndex(m => m === value)
      data.changedMonth = String(idx) // янв -> 0, фев -> 1...
    }
    changeSelect()
  }


  return (
    <div className='select__container' style={{ right: `-${shift}px` }}>
      <select
        name='year'
        className='select__form'
        value={selectedYear}
        onChange={handleChangeForm}
      >
        {
          data.years.map(year =>
            <option value={year} key={year}>
              {year}
            </option>
          )
        }
      </select>

      <select
        name='month'
        className='select__form'
        value={selectedMonth}
        onChange={handleChangeForm}
      >
        {
          data.months.map(month =>
            <option value={month} key={month}>
              {month}
            </option>
          )
        }
      </select>
    </div>
  )
}

export default SelectArea
