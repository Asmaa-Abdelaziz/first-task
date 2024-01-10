import React from "react";

export default function Second(props) {
  //   console.log(props.data);
  let { yearOfBirth, area, faculty, university } = props.data;
  //   console.log(yearOfBirth, area, faculty, university);

  //   let iterableData = new Map(Object.entries(props.data));
  //   for (let [key, value] of iterableData) {
  //     console.log(key, value);
  //   }

  return (
    <div>
      <h4>Second component</h4>
      <div>
        <p>Year of birth: {yearOfBirth}</p>
        <p>Area: {area}</p>
        <p>Faculty: {faculty}</p>
        <p>University: {university}</p>
      </div>
    </div>
  );
}
