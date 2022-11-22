import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  // instead of importing, call React.userState.
  const [people, setPeople] = React.useState(data);

  // onClick function
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  // return jsx
  return (
    <React.Fragment>
      {people.map((person) => {
        const { id, name, age } = person;
        console.log(person);
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <h6>Age: {age}</h6>
            <button className='btn' onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button className='btn' onClick={() => setPeople([])}>
        clear items
      </button>
    </React.Fragment>
  );
};

export default UseStateArray;
