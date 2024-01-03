import React from "react";

export default function Test() {
  let n = 5;
  let sum = 0;
  for (let i = 1; n >= i; i++) {
    let c = i * (i + 1) * (i + 2);
    sum = sum + c;
  }
  console.log(sum);

  return <></>;
}
