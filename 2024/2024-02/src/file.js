async function getDataFromFile() {
  const file = Bun.file("./src/input.txt");
  const fileText = await file.text();
  return fileText.trim().split("\n");
}

export async function getReportMatrix() {
  const reportListFile = await getDataFromFile();
  const reportList = reportListFile.map((reportList) =>
    reportList
      .trim()
      .split(" ")
      .map((el) => Number(el)),
  );
  return reportList;
}
