/*
Implementation for the first day of AOC.
Link: https://adventofcode.com/2024/day/1
*/

async function getFileData() {
  const file = Bun.file("input.txt");
  const fileText = await file.text();
  const listRaw = fileText.trim().split("\n");

  const listLeft: number[] = [];
  const listRight: number[] = [];

  listRaw.forEach((row) => {
    const [left, right] = row.split("   ");

    listLeft.push(Number(left));
    listRight.push(Number(right));
  });

  return [listLeft, listRight];
}

function calculateSimilarities(leftNumbers: number[], rightNumbers: number[]) {
  const foundDictionary = new Map<number, number>();
  const similarities: number[] = [];

  leftNumbers.forEach((leftElement) => {
    let similarity = null;
    if (!foundDictionary.has(leftElement)) {
      const count = rightNumbers.filter(
        (rightElement) => rightElement === leftElement,
      ).length;
      foundDictionary.set(leftElement, count);
      similarity = count;
    }
    similarity = similarity ?? (foundDictionary.get(leftElement) as number);
    similarities.push(leftElement * similarity);
  });

  return similarities.reduce((prev, act) => prev + act, 0);
}

async function main() {
  const distance: number[] = [];
  const [left, right] = await getFileData();

  left.sort();
  right.sort();

  left.forEach((leftEl, idx) => {
    distance.push(Math.abs(leftEl - right[idx]));
  });

  const firstQuestion = distance.reduce((prev, act) => prev + act, 0);
  const secondQuestion = calculateSimilarities(left, right);

  console.log("What is the total distance between your lists?", firstQuestion);

  console.log("What is their similarity score?", secondQuestion);
}

await main();
