
import { sleep } from "../Functions/Sleep";

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
export async function selection(arr, time, updateArray, setSortd) {
  var abort = false;
  document.querySelector(".btnStop").addEventListener("click", (e) => {
    abort = true;
  });
  document.querySelector(".sort").addEventListener("click", (e) => {
    abort = true;  
  });
  var minIdx;
  var i, j;
  for (i = 0; i < arr.length - 1; i++) {
    minIdx = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j]["val"] < arr[minIdx]["val"]) {
        minIdx = j;
      }

     
      if (abort) break;
    }
    if (abort) break;

    arr[minIdx]["col"] = "red";
    arr[i]["col"] = "yellow";
    swap(arr, i, minIdx);
    await sleep(time);
    arr[i]["col"] = "cyan";
    arr[minIdx]["col"] = "cyan";
    updateArray(arr);
  }

  if (!abort) {
    setSortd(true);
  }
}
