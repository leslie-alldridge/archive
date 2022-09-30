
//printing values within an array backwards

function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

//checking an array to see if the contents are the same

function isUniform(arr){
	var firstValue = arr[0];
	for(var i = arr.length -1; i>0; i--){
		if (arr[i] !== firstValue){
			return false;
		}	
	}
return true;
}

//traditional without using for each

function sumArray1(arr){
	var totalNum = 0;
	for(var i = arr.length -1; i>=0; i--){
		var currentNum = arr[i];
		totalNum = currentNum + totalNum;
	}

console.log("result is " + totalNum);

}

//can also use for each

function sumArray(arr){
	var gtotal = 0;
	arr.forEach(function(arr){
		gtotal += arr;
	})

		
	return gtotal;
}

//search array and return largest number

function max(arr){
	var max = arr[0];
	for(i = 1; i <= arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
return max;

}
//return smallest number in an array

function min(arr){
	var min = arr[0];
	for(i=1; i <= arr.length; i++){
		if(arr[i] < min){
			min = arr[i];
		}
	}
	return min;
}

//making our own for each 

function myForEach(arr, func){
	for(var i=0 ; i<arr.length; i++){
		func(arr[i]);
	}

}










