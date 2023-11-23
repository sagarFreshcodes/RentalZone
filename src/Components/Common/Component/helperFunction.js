export function  BreadCum(array) {
    if (!Array.isArray(array)) {
      return "Please provide an array as input.";
    }
  
    return array.join(" > ");
  }
   