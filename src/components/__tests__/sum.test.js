import { sum } from "../sum"
import "@testing-library/jest-dom";
test("sum function should calculate sum of 2 numbers",()=>{
    const result=sum(3,4)
    expect(result).toBe(7);//this line is known as assertion
})