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

Array.prototype.groupBy = function(fn) {
    const group = {};
    for (const item of this) {
        const key = fn(item);
        if (group[key] === undefined) { // if (!group[key])
            group[key] = [item];
        } else {
            group[key].push(item);
        }
    }
    return group;
};


Array.prototype.groupBy = function(fn) {
    // Reduce the array into a single object
    return this.reduce((grouped, item) => {
      // Apply the provided callback function to get the key
      const key = fn(item);
      
      // If the key doesn't exist in the grouped object, create a new array for it
      if (!grouped[key]) {
        grouped[key] = [];
      }
      
      // Push the current item to the array associated with the key
      grouped[key].push(item);
      
      // Return the updated grouped object for the next iteration
      return grouped;
    }, {});
  };

  let numbers = [40, 1, 5, 200];
  numbers.sort((a, b) => a - b);
  console.log(numbers); // [1, 5, 40, 200]

  let people = [
    { name: "John", age: 23 },
    { name: "Amy", age: 17 },
    { name: "Zack", age: 30 },
  ];
  people.sort((a, b) => b.age - a.age);
  console.log(people);

  var sortBy = function(arr, fn) {
    return arr.sort((a,b) => fn(a) - fn(b))
};

// Join Two Arrays by ID
var join = function(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    const merged = {};
  
    combinedArray.forEach((obj) => {
      const id = obj.id;
      if (!merged[id]) {
        merged[id] = { ...obj };
      } else {
        merged[id] = { ...merged[id], ...obj };
      }
    });
  
    return Object.values(merged)
  };

  var join = function(arr1, arr2) {
    const map = new Map();
    for(const obj of arr1) map.set(obj.id, obj);
    for(const obj of arr2) {
        if(!map.has(obj.id)) map.set(obj.id, obj);
        else {
            const prevObj = map.get(obj.id);
            for(const key of Object.keys(obj)) prevObj[key] = obj[key];
        }
    }
    const res = new Array();
    for(let key of map.keys()) res.push(map.get(key));
    return res.sort((a,b)=>a.id-b.id); 

};

var join = function(arr1, arr2) {
    arr1.sort((a,b) => a.id - b.id)
    arr2.sort((a,b) => a.id - b.id)
    let i = 0
    let j = 0

    const joinedArray = []

    while(i < arr1.length && j < arr2.length) {

        if(arr1[i].id === arr2[j].id) {
            joinedArray.push({...arr1[i], ...arr2[j]})
            i++
            j++
            continue
        }

        if(arr1[i].id < arr2[j].id) {
            joinedArray.push({...arr1[i]})
            i++
            continue
        }

        joinedArray.push({...arr2[j]})
        j++
    }

    while(i < arr1.length) {
        joinedArray.push({...arr1[i]})
        i++
    }

    while(j < arr2.length) {
        joinedArray.push({...arr2[j]})
        j++
    }

    return joinedArray
}

/// --------------- 2625. Flatten Deeply Nested Array
var flat = function (arr, n) {
    const res = [];
    for (const item of arr) {
        if (Array.isArray(item) && n > 0) {
            res.push(...flat(item, n - 1));
        } else {
            res.push(item);
        }
    }
    return res;
};

// 2705. Compact Object
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        const result = [];
        for (const item of obj) {
            const val = compactObject(item);
            if (val) {
                result.push(val);
            }
        }
        return result;
    } else if (typeof obj === 'object' && obj !== null) {
        const result = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const val = compactObject(obj[key]);
                if (val) {
                    result[key] = val;
                }
            }
        }
        return result;
    } else {
        return obj || undefined;
    }
};


var ArrayWrapper = function(nums) {
    this.nums = nums;
  };
  
  /**
   * @return {number}
   */
  ArrayWrapper.prototype.valueOf = function() {
      return this.nums.reduce((sum, num) => sum + num, 0);
    //
      let sum = 0;
      for (let i = 0; i < this.nums.length; i++) {
        sum += this.nums[i];
      }
      return sum;
  
  }
  
  /**
   * @return {string}
   */
  ArrayWrapper.prototype.toString = function() {
      return JSON.stringify(this.nums);
  }


// class object calculator
// https://leetcode.com/problems/calculator-with-method-chaining/?envType=study-plan-v2&envId=30-days-of-javascript
class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.value += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.value -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.value *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value === 0) {
        throw 'Division by zero is not allowed';
    }
        this.value /= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value **= value;
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.value;
    }
}


// https://leetcode.com/problems/event-emitter/description/?envType=study-plan-v2&envId=30-days-of-javascript
// 2694. Event Emitter
