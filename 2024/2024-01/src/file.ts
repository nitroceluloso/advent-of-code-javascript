async function getFile() {
  const file = Bun.file("./src/input.txt");
  const fileText = await file.text();
  return fileText.trim().split("\n");
}

export async function getFileData() {
  const listString = await getFile();
  const listLeft: number[] = [];
  const listRight: number[] = [];

  listString.forEach((row) => {
    const [left, right] = row.split("   ");

    listLeft.push(Number(left));
    listRight.push(Number(right));
  });

  return [listLeft, listRight];
}
