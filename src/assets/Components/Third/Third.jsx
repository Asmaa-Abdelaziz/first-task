import React from "react";

export default function Third(props) {
  //   console.log(...props.products);
  let [arr1, arr2] = [...props.products];
  console.log(arr1, arr2);

  return (
    <div className="third">
      <h5>Third Component</h5>
      <div>
        <p>{JSON.stringify(arr1)}</p>
        <p>{JSON.stringify(arr2)}</p>
      </div>
    </div>
  );
}
