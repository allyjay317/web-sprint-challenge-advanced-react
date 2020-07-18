import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

function Filter(props){
   
    const handleSubmit = e =>{
        e.preventDefault()
    }

        return(
            <form onSubmit={handleSubmit}>
                <label htmlFor='difficulty'>
                    Difficulty
                    <select name='difficulty' value={props.filter.difficulty} onChange={props.change}>
                        <option value=''>Filter by Difficulty</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                    </select>
                </label>
                <label htmlFor='sizes'>
                    Size
                    <select name='sizes' value={props.filter.sizes} onChange={props.change}>
                        <option value=''>Filter by Size</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                    </select>
                </label>
                <label htmlFor='sizes'>
                    Watering Frequency
                    <select name='watering' value={props.filter.watering} onChange={props.change}>
                        <option value={0}>Filter by Watering Frequency</option>
                        <option value={2}>2</option>
                        <option value={4}>4</option>
                        <option value={6}>6</option>
                    </select>
                </label>
            </form>
        )
}

export default Filter