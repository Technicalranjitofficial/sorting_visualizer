import { generateRandomNum } from "./generateRandom";

export function generateArray(updateArray,setSorted,val,setisSorting) {
    let array = [];
    setSorted(false);
    setisSorting(false);
    
    for (let i = 0; i < val; i++) {
      const Element = {
        val: generateRandomNum(1, 500),
        col: "cyan",
      };
      array.push(Element);
    }

    updateArray(array);
    
  }
