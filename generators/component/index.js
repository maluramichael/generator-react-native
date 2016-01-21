var generators = require('yeoman-generator'),
	lodash = require('lodash');

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);
	},
	init(){
			// set helper methods or other stuff
	},
	askQuestions() {
		var done = this.async();
		this.prompt({
			type: 'input',
			name: 'name',
			message: 'Component name',
			default: 'MyComponent',
		}, (answers)=>{
			this.config.set('name', answers.name);
			done();
		});
	},
	writing(){
		const configs = this.config.getAll();
		const name = configs.name;

		this.fs.copyTpl(
			this.templatePath('component.js'),
			this.destinationPath('App/Components/' + name + '.js'),
			{ name }
		);
	},
});
