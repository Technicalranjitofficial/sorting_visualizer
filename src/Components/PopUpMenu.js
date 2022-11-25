
import { bubbleSort } from "../Algorithm/bubbleSort";
import heapSort from "../Algorithm/HeapSort";
import { InsertionSort } from "../Algorithm/InsertionSort";
import quickSort3 from "../Algorithm/QuickSort3";
import { selection } from "../Algorithm/SelectionSort";
import { generateArray } from "../Functions/GenerateArray";

const PopUpMenu = ({
  algorithm,
  setAlgorithm,
  sorted,
  array,
  time,
  updateArray,
  setSorted,
  setisSorting,
  genVal,
  isSorting,
  stopSort
}) => {
  const Hide_menu = () => {
    document.querySelector(".option_container").classList.add("hide_option");
    document.querySelector(".options_row").classList.add("btn_row_hide");
    console.log(algorithm);
  };
  const show_menu = () => {
    document.querySelector(".option_container").classList.remove("hide_option");
    document.querySelector(".options_row").classList.remove("btn_row_hide");
    console.log(algorithm);
  };

  const setAlgo = (algorithm) => {
    Hide_menu();
    setAlgorithm(algorithm);
  };


  const listOfAlgo = [bubbleSort, InsertionSort, selection,quickSort3,heapSort];
  const listOfAlgoName = ["Bubble","Insertion", "Selection", "Quick", "Heap","Merge"];
  const startSort = () => {
    const h = listOfAlgo[algorithm];
    if (!sorted) {
      setisSorting(true);
      
      h(array, time, updateArray, setSorted,0,array.length-1,setisSorting).finally(() => {
        setisSorting(false);

      });
    } else {
      console.log("Already Sorted");
    }
  };
  const RandomizeArray = () => {
    generateArray(updateArray, setSorted, genVal, setisSorting);
  };



  return (
    <div className="Popup_main">
      <div className="option_container">
        <div className="options_row ">
          <div className="btn_row ">
            <button
              className={
                algorithm === 0
                  ? "option_btn_color_active"
                  : "option_btn_color_inactive"
              }
              onClick={() => setAlgo(0)}
            >
              Bubble
            </button>
          </div>
          <div className="btn_row">
            <button
              className={
                algorithm === 1
                  ? "option_btn_color_active"
                  : "option_btn_color_inactive"
              }
              onClick={() => setAlgo(1)}
            >
              Insertion
            </button>
          </div>
          <div className="btn_row">
            <button
              className={
                algorithm === 2
                  ? "option_btn_color_active"
                  : "option_btn_color_inactive"
              }
              onClick={() => setAlgo(2)}
            >
              Selection
            </button>
          </div>
          <div className="btn_row">
            <button
              className={
                algorithm === 3
                  ? "option_btn_color_active"
                  : "option_btn_color_inactive"
              }
              onClick={() => setAlgo(3)}
            >
              Quick
            </button>
          </div>

          <div className="btn_row">
            <button
              className={
                algorithm === 4
                  ? "option_btn_color_active"
                  : "option_btn_color_inactive"
              }
              onClick={() => setAlgo(4)}
            >
              Heap
            </button>
          </div>        
        </div>
      </div>
      <div className="controller_main">
        <div className="btn_controller">
          <button disabled={isSorting} onClick={RandomizeArray}>
            RANDOMIZE
          </button>
        </div>
        <div className={`btn_controller ${isSorting?"fab_extra":"fab_extra2"}`}>
      <button  className="sort" disabled={!isSorting}>STOP</button>
   
        </div> 
        
        <div className={`btn_controller ${isSorting?"fab_extra2":"fab_extra2"} `}>
        <button disabled={isSorting} onClick={startSort} className={`${isSorting?"fab_extra2":"fab_extra2"}`}>
          {isSorting?"Sorting..":"Sort"}
          </button>
   
        </div>
        <div  className="btn_controller">
          <button disabled={isSorting} onClick={show_menu}>{listOfAlgoName[algorithm].toLocaleUpperCase()}</button>
        </div>
      </div>
    </div>
  );
};

export default PopUpMenu;
