// My answer
// {if (item)} If we have a falsy item, the condition is not set and it is not push to the array.
// for example: 0 = false and if item = 0 ==> {if (item)} doesn't run because the 0 is falsy
// this solution is better:
//  const definedItems = (array: any[]) => (array.filter(item) => item != null)

const definedItems = (array: any[]) => {
  const outputArray = [];
  array.forEach((item) => {
    if (item) outputArray.push(item);
  });
  return outputArray;
};