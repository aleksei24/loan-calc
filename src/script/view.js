const app = document.querySelector('#app');
app.classList =
  'container mx-auto px-2 py-12 max-w-xs h-full min-h-screen min-w-fit border-2 border-solid border-gray-500 rounded-md';

const appHeadline = document.querySelector('#app-headline');
appHeadline.classList = 'text-center font-bold uppercase';

const loanForm = document.querySelector('#loan-form');
loanForm.classList = 'flex flex-col items-end';

const labels = loanForm.children;
[...labels].forEach((el) => {
  el.classList = 'my-3 text-sm';
});

const amountInput = document.querySelector('#amount');
const interestInput = document.querySelector('#interest');
const paymentInput = document.querySelector('#payment');
const loanInputs = [amountInput, interestInput, paymentInput];
[...loanInputs].forEach((el) => {
  el.classList = 'h-8 w-40 border border-black border-solid rounded';
});

const calcBtn = document.querySelector('#calculate');
calcBtn.classList = 'border-black border-2 rounded py-0.5 px-1';
// console.log(calcBtn);

const output = document.querySelector('#output');
output.classList = 'py-4 px-2 text-right border-t-2 border-black mt-8';

const monthPayment = document.querySelector('#month-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');
[monthPayment, totalPayment, totalInterest].forEach((el) => {
  el.classList = 'py-2';
});
