/**
Function that takes non-empty array and returns an sorted array which 
contains 2 items from the first array when the sum of these two are part of the same array
*/

function twoNumberSum(array, targetSum) {
	// Write your code here.
	  
	  var map={};
	  var solutionArray=[];
	  for (i = 0; i < array.length; ++i) // only one for loop, so, the time complexity is O(n)
	  {
		  if(!isNaN(array[i])){ // checking for non number item in the array
		  var temp = targetSum - array[i];
		  if(map[temp]==true){
			  if(temp > array[i]){ // return sorted array
			   solutionArray.push(array[i]);
			 solutionArray.push(temp);
			  return solutionArray;
		  } else {
			  solutionArray.push(temp);
			  solutionArray.push(array[i]);
			  return solutionArray;
		  }
		  }	
		  map[array[i]] = true; // mapping the parsed array for future reference to ensure best time complexity
	  } else {
		  console.log("not a number");
	  }
  }
	  return []; // return empty array if there is NO sum number
  }
  