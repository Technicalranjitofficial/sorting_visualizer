
import { bubbleSort } from "../Algorithm/bubbleSort";
import heapSort from "../Algorithm/HeapSort";
import { InsertionSort } from "../Algorithm/InsertionSort";
import quickSort3 from "../Algorithm/QuickSort3";
import { selection } from "../Algorithm/SelectionSort";
import { generateArray } from "../Functions/GenerateArray";
import GenerateSlider from "./GenerateSlider";


const Header = ({ array, updateArray, sorted, setSorted,isSorting,setisSorting,stop,setStop ,time,setTime,genVal,setGenVal}) => {

  return (
    <div className="head_container">
      <div className="head_subContainer">
        <div className="components1">
          <button disabled={isSorting}
            onClick={() => {
             generateArray(updateArray,setSorted,genVal,setisSorting);
            }}
          >
            GenerateArray
          </button>
        </div> 
        <div className="components1">
        <GenerateSlider val={genVal} setVal={setGenVal} updateArray={updateArray} setSorted = {setSorted} setisSorting={setisSorting} isSorting={isSorting}/>
        </div>
        <div className="components1 fab_extra">
       <div className="fabIcon">
        <button disabled={!isSorting} className="btnStop">{isSorting?"Stop":"Idal"}</button>
       </div>
        </div>
        <div className="components1">
          <button
          disabled={isSorting}
            onClick={() => {
              if (!sorted) {
                setisSorting(true);
                bubbleSort(array, time, updateArray,setSorted).finally(() => {
                  if(sorted){
                    selection(array, 0, updateArray,setSorted);
                  }
                
                  setisSorting(false);

                });
              } else {
                console.log("Already Sorted");
              }
            }}
          >
            BubbleSort
          </button>
        </div>
        <div className="components1">
          <button
          disabled={isSorting}
            onClick={() => {
              if (!sorted) {
                setisSorting(true);
                InsertionSort(array, time, updateArray,setSorted).finally(() => {
                  if(sorted){
                    selection(array, 0, updateArray,setSorted);
                  }
                
                  setisSorting(false);
                });
              } else {
                console.log("Already Sorted");
              }
            }}
          >
            InsertionSort
          </button>
        </div>
        <div className="components1">
          <button
          disabled={isSorting}
            onClick={() => {
              if (!sorted) {
                setisSorting(true);
                selection(array, time*2, updateArray,setSorted).finally(() =>{
                 
                  setisSorting(false);
                }
                );
              } else {
                console.log("Already Sorted");
              }
            }}
          >
            SelectionSort
          </button>
        </div>

        <div className="components1">
          <button
          disabled={isSorting}
            onClick={() => {
              if (!sorted) {
                // setisSorting(true);
                quickSort3(array, time,updateArray,setSorted,0,array.length-1,setisSorting)
                
                // .finally(() =>{
                 
                //   // setisSorting(false);
                // }
                // );
              } else {
                console.log("Already Sorted");
              }
            }}
          >
            Quick
          </button>
        </div>

        <div className="components1">
          <button
          disabled={isSorting}
            onClick={() => {
              if (!sorted) {
                setisSorting(true);
                heapSort(array, time*2, updateArray,setSorted).finally(() =>{
                 
                  setisSorting(false);
                }
                );
              } else {
                console.log("Already Sorted");
              }
            }}
          >
            Heap
          </button>
        </div>
        {/* <div className="components1">
          <button
          disabled={isSorting}
            onClick={() => {
              if (!sorted) {
                setisSorting(true);
                mergeSort(array,array.length,updateArray).finally(() =>{
                 
                  setisSorting(false);
                }
                );
              } else {
                console.log("Already Sorted");
              }
            }}
          >
            MergeSort
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
