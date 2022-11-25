import { sleep } from "../Functions/Sleep";

async function heapify(arr,n,i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;
    
    if (l < n && arr[l]['val'] > arr[largest]['val']) largest = l;
    if (r < n && arr[r]['val'] > arr[largest]['val']) largest = r;
    
    if (largest !==i) {

     var temp = arr[i];
     arr[i]= arr[largest];
     arr[largest]= temp;
  
    }

   heapify(arr, n, largest);

  }
  
  export default async function heapSort(arr,time,updateArray,setSorted) {
    for (var i = arr.length / 2; i >= 0; i--) { 
        arr[i]['col']= "red";
        await sleep(time);
        arr[i]['col']= "cyan";
        updateArray(arr);
    await  heapify(arr, arr.length, i,updateArray);

    }
    
    for (var j = arr.length - 1; j >= 0; j--) {
        arr[j]['col']= "blue";
        var temp = arr[0];
        arr[0]= arr[j];
        arr[j]= temp;
        await sleep(time);
        arr[j]['col']= "green";
        updateArray(arr);
       await heapify(arr, j, 0,updateArray);
    
    }
  }