function createCounter(n) {
    // 'n' is our current value and will be captured by the returned function (closure)
    return function() {
      return n++;  // Returns the current value of 'n', then increments it by 1.
    };
}

// Example usage:
const counter = createCounter(10);
console.log(counter()); // Outputs: 10
console.log(counter()); // Outputs: 11
console.log(counter()); // Outputs: 12


var expect = function(val) {
    const originalValue = val
    return {
        toBe: function(newVal) {
            if (newVal === originalValue) {
                return true
            } else throw new Error ("Not Equal")
        },
        notToBe: function(newVal) {
            if (newVal !== originalValue) {
                return true
            } else throw new Error ("Equal")
        }
    }
};

var createCounter = function(init) {
    const org = init
    return {
        increment() {return init += 1},
        decrement() {return init -= 1},
        reset() {return init = org}
    }
};

var createCounter = function(init) {
    let current = init;
    const origin = init;
    return {
        increment: function(){
            return ++current;
        },
        decrement: function(){
            return --current;
        },
        reset: function(){
            current = origin;
            return current;
        }
    };
};

// apply transform over each element in array
var map = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};

function map(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
}

var filter = function(arr, fn) {
    const result = [];
    for (let i =0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result
};

var reduce = function(nums, fn, init) {
    let val = init;
    for (let i=0; i<nums.length; i++){
        val = fn(val, nums[i]);
    }
    return val;
};
// https://leetcode.com/problems/function-composition/?envType=study-plan-v2&envId=30-days-of-javascript
var compose = function(functions) {
    
    return function(x) {
        let result = x;
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};

// https://leetcode.com/problems/allow-one-function-call/?envType=study-plan-v2&envId=30-days-of-javascript


// https://leetcode.com/problems/memoize/submissions/1592970175/?envType=study-plan-v2&envId=30-days-of-javascript
var once = function(fn) {
    let called = false;
    let result;

    return function(...args){
        if (called != true){
            result = fn(...args);
            called = true;
            return result;
        } else {
            return undefined;
            }
    }
};


/**
 * @param {Function} fn
 * @return {Function}
 */
var memoize = function(fn) {
    const cache = new Map();
    
    return function(...args) {
        // Convert the arguments array to a string to use as a cache key.
        const key = JSON.stringify(args);
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};



https://leetcode.com/problems/add-two-promises/?envType=study-plan-v2&envId=30-days-of-javascript

var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2])
      .then(values => {
        // 'values' is an array: [resolvedValue1, resolvedValue2]
        return values[0] + values[1];
      });
  };

  var addTwoPromises = async function(promise1, promise2) {
    let value1 = await promise1;
    let value2 = await promise2;
    return value1 + value2;
  };

async function sleep(millis) {
    return new Promise(resolve=>setTimeout(resolve,millis));
};


new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });

new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });

  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
  });

  function delayedFunction() {
    console.log("Delayed function executed!");
  }
  
  const delay = 2000;
  
  const timerId = setTimeout(delayedFunction, delay);
  
  // To cancel the execution before the delay expires:
  clearTimeout(timerId);

// https://leetcode.com/problems/timeout-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript
// Timeout cancellation
//  wait for t milliseconds and then call fn with the arguments args
//  if the timer is cancelled, fn should not be called
var cancellable = function(fn, args, t) {
    // We'll store the timer ID here so we can cancel it later.
const timeoutId = setTimeout(function() {
    fn(...args);
}, t);
const cancelFn = function() {
        clearTimeout(timeoutId);
};
return cancelFn;
};

var cancellable = function(fn, args, t) {
    const timer = setTimeout(fn, t, ...args);
    const cancelFn = function() {
        clearTimeout(timer);
    };
    return cancelFn
    };

// interval cancellation
// https://leetcode.com/problems/interval-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript
// Approach 1: Using setInterval & clearInterval
var cancellable = function(fn, args, t) {
    fn(...args);
    let intervalId = setInterval(fn, t, ...args);
    // const timer = setInterval(() => fn(...args), t);
    return () => clearInterval(intervalId);
    // const cancelFn = () => clearInterval(timer);
    // return cancelFn;
};

// Approach 2: Using Recursion
var cancellable = function(fn, args, t) {
    let isCancelled = false;
    fn(...args);
    const startInterval = () => {
        setTimeout(() => {
            if (isCancelled) return;
            fn(...args);
            startInterval();
        }, t);
    }
    startInterval();
    const cancelInterval = () => {
        isCancelled = true;
    }

    return cancelInterval;
};


// Promised Time Limit
// https://leetcode.com/problems/promise-time-limit/description/?envType=study-plan-v2&envId=30-days-of-javascript

var timeLimit = function(fn, t) {
    
    return async function(...args) {

    };
};

const aaa =  new Promise((resolve, reject)) => {
    setTimeout(() => {
        resolve("foo");
    }, 300)
    .then((result) => {
        console.log(result);
    })
    .catch(() => {"Time Limit Exceeded";});

}
Promise.race()
let fnPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 300);
});
let timeoutPromise = new Promise((_, reject) =>{
    setTimeout(() => reject("Time Limit Exceeded"), t);
});
function promiseTimeLimit(p, t) {
    // Create a promise that rejects after t milliseconds.
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject("Time Limit Exceeded"), t);
    });
  
    // Race the provided promise 'p' with the timeout promise.
    return Promise.race([p, timeoutPromise]);
  }

Promise.race((fnPromise, timeoutPromise))




var timeLimit = function(fn, t) {
    return async function(...args) {
        const fns = fn(...args);

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });

        return Promise.race([fns, timeoutPromise]);
    };
};



var timeLimit = function(fn, t) {
    
    return new Promise((delayresolve, reject) => {
          const timeoutId = setTimeout(() => {
            clearTimeout(timeoutId);
            reject("Time Limit Exceeded");
          }, t);
    
          fn(...args)
            .then(resolve)
            .catch(reject)
            .finally(() => clearTimeout(timeoutId));
        });
      };

      var timeLimit = function(fn, t) {
        return async function(...args) {
            return new Promise((resolve, reject) => {
                const timeoutId = setTimeout(() => {
                    reject("Time Limit Exceeded");
                }, t);
    
                Promise.resolve(fn(...args)) // Ensure fn is wrapped in a promise
                    .then(resolve)
                    .catch(reject)
                    .finally(() => clearTimeout(timeoutId));
            });
        };
    };


var timeLimit = function(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(() => reject("Time Limit Exceeded"), t);

            Promise.resolve(fn(...args)) // Ensures `fn` is treated as a promise
                .then(resolve)
                .catch(reject)
                .finally(() => clearTimeout(timeoutId)); // Prevents unwanted execution
        });
    };
};



var TimeLimitedCache = function() {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let exists = this.cache.has(key);

    if (exists) {
        clearTimeout(this.cache.get(key).timeoutId);
    }

    let timeoutId = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    this.cache.set(key, {value, timeoutId});
    return exists
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    return this.cache.has(key) ? this.cache.get(key).value : -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cache.size;
};

// 
Array.prototype.last = function() {
    if (this.length === 0) {
      return -1;
    } else {
      return this.at(-1);
    }
  };
  Array.prototype.last = function() {
    return this.length === 0 ? -1:this.at(-1);
};