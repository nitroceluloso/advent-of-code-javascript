export function removeItemByIndex(list: number[], idx: number) {
  return list.slice(0, idx).concat(list.slice(idx + 1));
}

function checkIncreacing(distance: number) {
  return distance < 0;
}

function checkDecreacing(distance: number) {
  return distance > 0;
}

export function checkIsInOrder(distanceList: number[]) {
  const isIncreasing = distanceList.every(checkIncreacing);
  const isDecreacing = distanceList.every(checkDecreacing);

  return isIncreasing || isDecreacing;
}
