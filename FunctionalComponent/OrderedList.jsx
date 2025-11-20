import React from 'react'

const OrderedList = () => {
   const cars = ["BMW", "Audi", "Mercedes", "Tesla", "Ferrari"];

  return (
    <div>
      <h2>Car List</h2>
      <ol>
        <li>Tesla Model S</li>
        <li>BMW M4</li>
        <li>Ford Mustang</li>
        <li>Lamborghini Aventador</li>
        <li>Toyota Supra</li>
      </ol>
    </div>
  );
}

export default OrderedList
