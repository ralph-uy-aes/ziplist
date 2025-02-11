function zipList(arr1:string[], arr2:string[]):string[] {
  const zipArr:string[] = [];
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      zipArr.push(arr1[i]);
      zipArr.push(arr2[i]);
    }
  } else {
    return ['Arrays not the same length.'];
  }
  return zipArr;
}

function zipListTheFunctionalWay(arr1:string[], arr2:string[]):string[] {
  if (arr1.length !== arr2.length) {
    return ['Array not the same length.'];
  }

  return arr1.reduce((acc:string[], value, index) => {
    acc.push(value, arr2[index]);
    return acc;
  }, []);
}

console.log(zipList(['1', '2', '3'], ['a', 'b', 'c']));
console.log(zipListTheFunctionalWay(['1', '2', '3'], ['a', 'b', 'c']));
