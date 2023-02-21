import React from 'react'
import { changeSearchTerm } from '../store';
import { useDispatch, useSelector } from 'react-redux';
function CarSearch() {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => {
        return state.cars.searchTerm;
    })
    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value));
    }
  return (
    <div>
    <div className='list-header'>
        <h3 className='title is-3'> My Cars </h3>
        <div className='search field is-horizontal'>
            <label className='label'>Search</label>
            <input className='input'
            value = {searchTerm}
            onChange = {handleSearchTermChange}
            />
        </div>
   
    </div>
    <hr/>
    </div>
  )
}

export default CarSearch