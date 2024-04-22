1. 
const minNum = Math.min(...[1, 5, 7, 9]);

2. 
function createCounter() {
    let count = 0;
    return {
      increment() {
        count++;
      },
      decrement() {
        count--;
      }
    };
  }

  3. 
  function findElementByClass(element, className) {
    if (element.classList.contains(className)) {
      return element;
    }
    for (let i = 0; i < element.children.length; i++) {
      const foundElement = findElementByClass(element.children[i], className);
      if (foundElement) {
        return foundElement;
      }
    }
    return null;
  }