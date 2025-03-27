import { getFileData } from "./file";

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

  const secondQuestion = calculateSimilarities(left, right);
  console.log("What is their similarity score?", secondQuestion);
}

main();
