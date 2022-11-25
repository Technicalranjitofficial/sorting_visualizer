import { sleep } from "../Functions/Sleep";
  
  export async function bubbleSort(arr,time,updateArray,setSorted) {
    var abort = false;
  document.querySelector(".btnStop").addEventListener("click", (e) => {
    abort = true;  
  });
    document.querySelector(".sort").addEventListener("click", (e) => {
    abort = true;  
  });

    var i, j;
    for (i = 0; i < arr.length - 1; i++)
      for (j = 0; j < arr.length - i - 1; j++) {
        if (arr[j]["val"] > arr[j + 1]["val"]) {
          arr[j]["col"] = "red";
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          if(abort)
          break;
        }
        if(abort)
        break;
        await sleep(time);
        arr[j]["col"] = "cyan";
        arr[j + 1]["col"] = "cyan";
        updateArray(arr);
      }

      if(!abort){
        setSorted(true);
      }
     
  };


