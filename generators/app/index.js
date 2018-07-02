'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the polished ${chalk.red('react-express-jest')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author name?'
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name,
        author: this.props.author
      }
    );
    this.fs.copy(this.templatePath('README.md'), this.destinationPath('README.md'));
    this.fs.copy(this.templatePath('_config'), this.destinationPath('config'));

    this.fs.copy(this.templatePath('_jestSetup'), this.destinationPath('jestSetup'));

    this.fs.copy(this.templatePath('_src'), this.destinationPath('src'));
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false
    });
  }
};
