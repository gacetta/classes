// const myAge = 37;
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.  Give it a few more years';
// console.log(message);

const myAge = 7;
const showPage = () => {
    return 'Showing the page';
}
const showErrorPage = () => {
    return 'Showing the error page';
}

const message= myAge >= 21 ? showPage() : showErrorPage()
console.log(message);

const team = ['Tyler', 'Porter', 'Billy', 'Steven', 'Axl'];
// 1. Print "Team size: 3" if less than or equal to 4
// 2. Print "Too many people on your team" otherwise
team.length <= 4 ? console.log(`Team size: ${team.length}`) : console.log(`Too many people on your team`);

team.pop();
console.log(team.length <= 4 ? `Team size: ${team.length}` : `Too many people on your team`);

