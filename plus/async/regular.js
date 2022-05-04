async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

/* 
 * You need to call async wait() and wait to get 10 and return it
 * You can't use "await"!
 */
module.exports = function f() {
    return wait();
}
    // ...what to write here?
    /*
    const p = new Promise(function(resolve){
        setTimeout((wait) => {
            resolve();
        }, 1000);
    });
}
   */
    
    /*
    const p = new Promise(function(resolve) {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
    return p;
  
}
  */