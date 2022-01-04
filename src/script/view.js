const app = document.querySelector('#app');
app.classList =
  'container mx-auto px-2 py-16 max-w-lg h-full min-h-screen min-w-fit border-2 border-solid border-gray-500 rounded-md';

const appHeadline = document.querySelector('#app-headline');
appHeadline.classList = 'text-center font-bold uppercase';

const loanForm = document.querySelector('#loan-form');
loanForm.classList = 'flex flex-col items-center';

const labels = loanForm.children;
[...labels].forEach((el) => {
  el.classList = 'my-3';
});

const amountInput = document.querySelector('#amount');
const interestInput = document.querySelector('#interest');
const paymentInput = document.querySelector('#payment');
const loanInputs = [amountInput, interestInput, paymentInput];
[...loanInputs].forEach((el) => {
  el.classList = 'h-8 rounded';
});
// console.log(loanInputs);
