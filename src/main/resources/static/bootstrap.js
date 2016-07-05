(function () {

	requirejs.config({
		packages: [
//			{name: 'rest', location: 'bower_components/babel', main: 'browser'},
//			{name: 'when', location: 'bower_components/when', main: 'when'},
			{name: 'react', location: 'bower_components/react', main: 'react-with-addons'},
			{name: 'react-dom', location: 'bower_components/react', main: 'react-dom'},
			{name: 'babel', location: 'bower_components/requirejs-babel', main: 'babel-5.8.34.min'},
			{name: 'jsx', location: 'bower_components/requirejs-react-jsx', main: 'jsx'},
			{name: 'text', location: 'bower_components/requirejs-text', main: 'text'}
		],
		shim: {
			"react": {
				"exports": "React"
			}		},
		deps: ['main'],
		config: {
			jsx: {
				fileExtension: ".jsx",
				transformOptions: {
					harmony: true,
					stripTypes: false,
					inlineSourceMap: true
				},
				usePragma: true
			}
		}
	});

}());