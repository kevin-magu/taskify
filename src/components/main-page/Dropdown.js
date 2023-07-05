import React from 'react'

function Dropdown() {
  return (
    <div className='drop-down'>
        <p>Filter By</p>
        <select>
            <option value="" key=""></option>
            <option value="status" key="">Status</option>
            <option value="status" key="">Duedate</option>
        </select>
    </div>
  )
}

export default Dropdown