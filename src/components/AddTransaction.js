import React from 'react'
import "../App.css"

const AddTransaction = () => {
  return (
        <form className='form-control'>

            <div>

                <label htmlFor=''> Items</label>
                <input type='text' placeholder='Enter Text...'></input>

            </div>
            <div>

            <label htmlFor=''> Amount
(negative - expense, positive - income)</label>
                <input type='number' placeholder='0'></input>

            </div>

            <p><button> Add Transaction</button></p>
         
       
        </form>
  )
}

export default AddTransaction