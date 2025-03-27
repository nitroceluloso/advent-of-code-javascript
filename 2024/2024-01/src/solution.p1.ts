import { getFileData } from "./file";

async function main() {
  const distance: number[] = [];
  const [left, right] = await getFileData();

  left.sort();
  right.sort();

  left.forEach((leftEl, idx) => {
    distance.push(Math.abs(leftEl - right[idx]));
  });

  const firstQuestion = distance.reduce((prev, act) => prev + act, 0);
  console.log("What is the total distance between your lists?", firstQuestion);
}

main();
