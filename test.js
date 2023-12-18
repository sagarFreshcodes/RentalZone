function changeKeyName(obj, currentKeyName, newKeyName) {
  const newObj = { ...obj };
  if (newObj.hasOwnProperty(currentKeyName)) {
    newObj[newKeyName] = newObj[currentKeyName];
    delete newObj[currentKeyName];
  }
  return newObj;
}

// Example usage:
const myObject = {
  name: "Alice",
  age: 30,
  address: "123 Main St",
};

const updatedObject = changeKeyName(myObject, "name", "fullName");
console.log(updatedObject);
// Output: { fullName: 'Alice', age: 30, address: '123 Main St' }
