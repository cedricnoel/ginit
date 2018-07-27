const chalk    = require('chalk');
const clear    = require('clear');
const figlet   = require('figlet');
const files    = require('./lib/files');
const inquirer = require('./lib/inquirer.js');

clear();

console.log(
	chalk.yellow(
		figlet.textSync('Ginit', { horizontalLayout: 'full' })
	)
);


if (files.directoryExists('.git')) {
	console.log(chalk.red('Already a git repository!'));
	process.exit();
}

/**
 * run function
 * 
 * @return void
 */
const run = async() => {
	// Run inquier file function
	const credentials = await inquirer.askGithubCredentials();
	// When the user answer we log the result
  	console.log(credentials);
}

run();