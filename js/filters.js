'use strict';

/* Filters */

angular.module('myApp.filters', []).filter('checkNumber', [function (x) {

    return function (x) {
        if (isNaN(x) || x=='' || x<=0 ) 
		  {
		  
		    return false;
		  }
		  else{
			  return true;
		  }
    };
}]).filter('reverse', [function (x) {

    return function(items) {
	    return items.slice().reverse();
	  };
}]).filter('cleantext', [function (x) {

   return function (text, length, end) {

		var div = document.createElement("div");
		div.innerHTML = text;
		var textClean = div.textContent || div.innerText || "";
		
        return textClean;

    };
}]).filter('truncate', [function (x) {

   return function (text, length, end) {
            if (isNaN(length))
                length = 10;

            if (end === undefined)
                end = "...";

            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {
                return String(text).substring(0, length-end.length) + end;
            }

        };
}]);






