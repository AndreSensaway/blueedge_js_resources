var ArrayMathLibrary = (function () {
  class ArrayMath {
    static elementWiseAddition(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        throw new Error("Input arrays must have the same length.");
      }

      return arr1.map((num, index) => num + arr2[index]);
    }

    static elementWiseSubtraction(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        throw new Error("Input arrays must have the same length.");
      }

      return arr1.map((num, index) => num - arr2[index]);
    }

    static elementWiseMultiplication(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        throw new Error("Input arrays must have the same length.");
      }

      return arr1.map((num, index) => num * arr2[index]);
    }

    static elementWiseDivision(arr1, arr2) {
      if (arr1.length !== arr2.length) {
        throw new Error("Input arrays must have the same length.");
      }

      return arr1.map((num, index) => {
        if (arr2[index] === 0) {
          throw new Error("Division by zero is not allowed.");
        }
        return num / arr2[index];
      });
    }
  }

  // Expose the ArrayMath class as a global variable (or window object)
  return {
    ArrayMath: ArrayMath,
  };
})();
