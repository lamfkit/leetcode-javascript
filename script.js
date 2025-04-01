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
};n