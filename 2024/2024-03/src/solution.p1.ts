/*
Implementation for day 03 of AOC, [PART ONE].
Link: https://adventofcode.com/2024/day/3
*/
import { getInstructionList } from "./file";
import { getNumberFromInstruction } from "./utils";

async function main() {
  const instructionlist = await getInstructionList();
  if (instructionlist === null) return;

  console.log("Instructions founded:", instructionlist.length);
  let count = 0;
  for (const instruction of instructionlist) {
    const [left, right] = getNumberFromInstruction(instruction);
    count += left * right;
  }

  console.log("Sum of multiply of pairs:", count);
}

main();
