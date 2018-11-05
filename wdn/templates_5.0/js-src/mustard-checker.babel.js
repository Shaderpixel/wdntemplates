requirejs([
	'require', 'dcf-mustard-cutter'
], function(require, MustardCutter) {

	const jsPolyfills = [
		{
			testCondition: window.HTMLDialogElement,
			path: 'https://cdnjs.cloudflare.com/ajax/libs/dialog-polyfill/0.4.9/dialog-polyfill.min.js'
			// path: '/wdn/templates_5.0/js/compressed/mustard/dialog-polyfill.js'
		},
		{
			testCondition: window.HTMLDetailsElement,
			path:'/wdn/templates_5.0/js/compressed/mustard/index.js'
		},
		{
			testCondition: "object-fit" in document.body.style,
			path:'/wdn/templates_5.0/js/compressed/mustard/ofi.js'
		}
	];

	const cssPolyfills = [
		{
			testCondition: (`"grid" in document.body.style`),
			path: 'css/mustard.css'
		}
	];

	MustardCutter(jsPolyfills, cssPolyfills);
});

// make sure that files are initialized if need be after being brought in
