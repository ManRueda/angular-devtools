((chrome, window) => {
  window.runInInspected = (fn) => {
    return new Promise((resolve, reject) => {
      let options = window.selectedFrame != 'top' ? {'frameURL': window.selectedFrame} : {};
      chrome.devtools && chrome.devtools.inspectedWindow.eval("("+fn.toString()+")()", options, (result, isException) => {
        if (isException)
           reject(isException);
         else
           resolve(result);
      });
    });
  };
})(chrome, window);
