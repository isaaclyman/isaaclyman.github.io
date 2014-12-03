angular.module('templates', [])

 .directive('iscDisplay', function() {
 	return {
 		restrict: 'E',
 		templateUrl: 'display.html'
 	};
 })

 .directive('iscNav', function() {
 	return {
 		restrict: 'E',
 		templateUrl: 'nav.html'
 	};
 })

 .directive('iscContent', function() {
 	return {
 		restrict: 'E',
 		templateUrl: 'content.html'
 	};
 })

 .directive('iscCopyright', function() {
 	return {
 		restrict: 'E',
 		templateUrl: 'copyright.html'
 	};
 })

 .directive('iscPreload', function() {
 	return {
 		restrict: 'E',
 		templateUrl: 'preload.html'
 	};
 })