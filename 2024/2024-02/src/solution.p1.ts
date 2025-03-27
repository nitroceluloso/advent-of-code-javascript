/*
Implementation for day 02 of AOC, [PART ONE].
Link: https://adventofcode.com/2024/day/2
*/

import { getReportMatrix } from "./file";
import { checkIsInOrder } from "./utils";

function reviewReport(report: number[]) {
  const distanceList = [];
  let isValid = true;

  for (let i = 0; i < report.length - 1; i++) {
    const level = report[i];
    const nextLevel = report[i + 1];
    const diff = level - nextLevel;
    const absDiff = Math.abs(diff);
    distanceList.push(diff);

    if (absDiff === 0 || absDiff > 3) {
      isValid = false;
      break;
    }
  }

  // Check if all distance are in the same direction
  // first check is report is not valid to not run the every function
  const isInOrder = checkIsInOrder(distanceList);

  return isValid && isInOrder;
}

async function main() {
  const reportList = await getReportMatrix();
  let validReportCount = 0;

  reportList.forEach((report) => {
    const isReportValid = reviewReport(report);
    if (isReportValid) {
      validReportCount++;
    }
  });
  console.log("Valid reports:", validReportCount);
}

main();
