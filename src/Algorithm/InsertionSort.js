import { sleep } from "../Functions/Sleep";



export async function InsertionSort(arr,time,updateArray,setSortd) {
        var abort = false;
        document.querySelector(".btnStop").addEventListener("click", (e) => {
          abort = true;
        });
        document.querySelector(".sort").addEventListener("click", (e) => {
          abort = true;  
        });
        var i, key, j;
        for (i = 1; i < arr.length; i++) {
          key = arr[i];
          j = i - 1;
          while (j >= 0 && arr[j]["val"] > key["val"]) {
            arr[j]["col"] = "red";
            arr[j + 1] = arr[j];
            j = j - 1;
  
           
            await sleep(time);
            arr[j + 1]["col"] = "cyan";
    
          updateArray(arr);
          if(abort)
          break;
          }
          arr[j + 1] = key;
          if(abort)
          break;
        }


        if(!abort){
setSortd(true);
        }
      };
