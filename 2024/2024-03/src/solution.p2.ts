/*
Implementation for day 03 of AOC, [PART TWO].
Link: https://adventofcode.com/2024/day/3
*/
import { getInstructionListWithEnablers } from "./file";
import { getNumberFromInstruction } from "./utils";

async function main() {
  const instructionlist = await getInstructionListWithEnablers();
  if (instructionlist === null) return;

  console.log("Instructions found:", instructionlist.length);

  let count = 0;
  let enabled = true;
  for (const instruction of instructionlist) {
    if (instruction === "don't()") {
      enabled = false;
      continue;
    }

    if (instruction === "do()") {
      enabled = true;
      continue;
    }

    if (!enabled) {
      continue;
    }

    const [left, right] = getNumberFromInstruction(instruction);
    count += left * right;
  }

  console.log("Sum of multiply of pairs:", count);
}

main();
