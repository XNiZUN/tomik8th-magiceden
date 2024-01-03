import React from "react";

export default function Test() {
  let array: any = [5, 8, 8, 6, 8, 7];
  const number = [];
  const max = Math.max(...array);
  console.log(max);
  for (let i = 0; array.length > i; i++) {
    if (array[i] === max) {
      number.push(array[i]);
    } else {
      console.log("not");
    }
  }
  console.log(max, number.length);
  return <></>;
}
