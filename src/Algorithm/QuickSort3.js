import { sleep } from "../Functions/Sleep";

const partition = async (a, start, end, updateArray) => {
  var pivot = a[end];
  var pIndex = start;
  for (var i = start; i < end; i++) {
    if (a[i]["val"] <= pivot["val"]) {
      a[i]["col"] = "red";
      var temp = a[i];
      a[i] = a[pIndex];
      a[pIndex] = temp;
      await sleep(10);
      a[i]["col"] = "cyan";
      updateArray(a);
      a[pIndex]["col"] = "cyan";
      pIndex++;
    }
  }
  a[end]["col"] = "blue";
  var temp = a[pIndex];
  a[pIndex] = a[end];
  a[end] = temp;
  await sleep(10);
  a[pIndex]["col"] = "cyan";
  updateArray(a);
  a[end]["col"] = "cyan";

  return pIndex;
};

export default async function quickSort3(
  arr,
  time,
  updateArray,
  setSortd,
  start,
  end,
  setisSorting
) {
  // setisSorting(true);
  console.log("clicked sort");
  if (start < end) {
    var pIndex = await partition(arr, start, end, updateArray);
    quickSort3(
      arr,
      time,
      updateArray,
      setSortd,
      start,
      pIndex - 1,
      setisSorting
    );
    quickSort3(arr, time, updateArray, setSortd, pIndex + 1, end, setisSorting);
    // updateArray(arr);
  }
  if (start >= end) {
    setSortd(true);
  }
}
