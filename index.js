const program = require("commander");
const { prompt } = require ("inquirer");
const { sendcard } = require('./logic');









 const questions = [{
    type : 'input',
    name : 'cardno',
    message : 'Enter card number ...'
 },
 {
    type : 'input',
    name : 'cvv',
    message : 'Enter cvv'
 },
 {
    type : 'input',
    name : 'expirymonth',
    message : 'Enter expiry month '
 },
 {
    type : 'input',
    name : 'expiryyear',
    message : 'Enter expiry year '
 },{
    type : 'input',
    name : 'firstname',
    message : 'Enter firstname '
 },{
    type : 'input',
    name : 'lastnamename',
    message : 'Enter lastname '
 },{
    type : 'input',
    name : 'phonenumber',
    message : 'Enter phonenumber '
 },
 {
    type : 'input',
    name : 'email',
    message : 'Enter email '
 },
 {
    type : 'input',
    name : 'pin',
    message : 'Enter pin '
 }];
 
 program
 .action(() => {
 prompt(questions).then(answers =>
    sendcard(answers));
});

program.parse(process.argv);