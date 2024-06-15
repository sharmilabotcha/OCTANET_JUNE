import React from 'react'

const Transactionlist = () => {
  return (
    <div>
        <h3>History</h3>
        <ul className = "list">
               <li className = "plus">
                  Cash<span>-$400</span><button className = "delete-btn">x</button>
               </li> 
               <li className = "minus">
                Book<div>+$40</div><button className = "delete-btn">x</button>
               </li>
               <li className="minus">
                Camera<div>+$30</div><button className = "delete-btn">x</button>
               </li>
          </ul>
    </div>
  )
}

export default Transactionlist