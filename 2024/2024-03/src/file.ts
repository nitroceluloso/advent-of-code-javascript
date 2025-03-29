async function getFileText() {
  const file = Bun.file("./src/input.txt");
  return await file.text();
}

function getInstructions(textFile: string) {
  const findInstruction = /mul\(\d{1,3},\d{1,3}\)/g;
  return textFile.match(findInstruction);
}

function getInstructionsWithEnablers(textFile: string) {
  const findInstruction = /mul\(\d{1,3},\d{1,3}\)|do\(\)|don\'t\(\)/g;
  return textFile.match(findInstruction);
}

export async function getInstructionList() {
  const textFile = await getFileText();
  return getInstructions(textFile);
}

export async function getInstructionListWithEnablers() {
  const textFile = await getFileText();
  return getInstructionsWithEnablers(textFile);
}
