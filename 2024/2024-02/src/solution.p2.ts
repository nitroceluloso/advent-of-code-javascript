/*
Implementation for day 02 of AOC, [PART TWO].
Link: https://adventofcode.com/2024/day/2
*/

import { getReportMatrix } from "./file";
import { checkIsInOrder, removeItemByIndex } from "./utils";

function reviewReport(report: number[]): [boolean, number[]] {
  const distanceList = [];
  let isValid = true;

  for (let i = 0; i < report.length - 1; i++) {
    const level = report[i];
    const nextLevel = report[i + 1];
    const diff = level - nextLevel;
    const absDiff = Math.abs(diff);
    distanceList.push(diff);

    if (absDiff <= 0 || absDiff > 3) {
      isValid = isValid && false;
    }
  }

  // Check if all distance are in the same direction
  const isInOrder = checkIsInOrder(distanceList);

  return [isValid && isInOrder, distanceList];
}

function reviewReportWithTolerance(report: number[], distanceList: number[]) {
  const distanceErrorList: number[] = [];
  const positiveList: number[] = [];
  const negativeList: number[] = [];

  distanceList.forEach((distance, idx) => {
    const absDistance = Math.abs(distance);
    if (absDistance === 0 || absDistance > 3) {
      distanceErrorList.push(idx);
    }

    if (distance > 0) {
      negativeList.push(idx);
    } else {
      positiveList.push(idx);
    }
  });

  if (positiveList.length === 1 || negativeList.length === 1) {
    const index = positiveList.length === 1 ? positiveList[0] : negativeList[0];
    return (
      reviewReport(removeItemByIndex(report, index))[0] ||
      reviewReport(removeItemByIndex(report, index + 1))[0]
    );
  }

  if (distanceErrorList.length === 1) {
    return (
      reviewReport(removeItemByIndex(report, distanceErrorList[0]))[0] ||
      reviewReport(removeItemByIndex(report, distanceErrorList[0] + 1))[0]
    );
  }

  return false;
}

async function main() {
  const reportList = await getReportMatrix();

  let validReportCount = 0;
  reportList.forEach((report) => {
    const [isValidReport, distanceList] = reviewReport(report);

    if (isValidReport) {
      validReportCount++;
      return;
    }

    const isValidReportWithTolerance = reviewReportWithTolerance(
      report,
      distanceList,
    );
    if (isValidReportWithTolerance) {
      validReportCount++;
    }
  });
  console.log("Valid reports:", validReportCount);
}

main();
