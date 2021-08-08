import { useArray } from 'hooks/useArray';
import React , { useState }from 'react';

export const TsReactTest = () => {
  const person: {name: string, age: number}[] = [
    {name: 'jack', age: 25},
    {name: 'max', age: 18}
  ]
  const { value, clear, removeIndex, add } = useArray(person);

  return (
    <div>
      <button onClick={() => add({name: 'eddie', age: 18})}>add json</button>
      <button onClick={() => removeIndex(0)}>remove 0</button>
      <button style={{marginBottom: "50px"}} onClick={() => clear()}>clear</button>
      {
        value.map((person: {age: number, name: string}, index: number) => (
          <div style={{ marginBottom: "30px" }} key={index}>
            <span style={{ color: "red"}}>{index}</span>
            <span>{person.name}</span>
            <span>{person.age}</span>
          </div>
        ))
      }
    </div>
  )
}