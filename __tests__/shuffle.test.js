const shuffle = require("../src/shuffle");

const arr = [1,2,3,4,5]; //[5,2,3,1,5]

function sum(array){
  let sum = 0;
    for(i of arr)
    {
      sum += i;
    }
    return sum;
}

describe("shuffle should...", () => {
  // CODE HERE
  test("check if shuffle returns array", () => {
    expect(Array.isArray(shuffle(arr))).toBe(true);
  }),
  test("check that all the same items are in the array",()=>{
    let arrSum = sum(arr);
    let returnSum = sum(shuffle(arr));

    expect(returnSum).toEqual(arrSum);
  }),
  test("check that the items have been shuffled around", ()=>{
    expect(shuffle(arr)).not.toEqual(arr);
  })
});

