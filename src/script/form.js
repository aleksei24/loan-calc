const formLoan = document.querySelector('#form-loan');
const btnCalculate = document.querySelector('#calculate');

btnCalculate.addEventListener('click', calculateResult);

function calculateResult() {
  // UI
  const amount = document.querySelector('#amount').value;
  const interest = document.querySelector('#interest').value;
  const payment = document.querySelector('#payment').value;

  console.log(amount, interest, payment);

  // calculate
  const principal = parseFloat(amount);
  const calcInterest = parseFloat(interest) / 100 / 12;
  const calcPayment = parseFloat(payment) * 12;

  // monthly payment
  const temp = Math.pow(1 + calcInterest, calcPayment);
  const monthly = (principal * temp * calcInterest) / (temp - 1);
  const monthlyPayment = monthly.toFixed(2);

  // interest
  const totalInterest = (monthly * calcPayment - principal).toFixed(2);

  // total payment
  const totalPayment = (monthly * calcPayment).toFixed(2);

  // display result
  if (amount === '' || interest === '' || payment === '') {
    document.querySelector('#month-payment span').innerHTML = '0';
    document.querySelector('#total-payment span').innerHTML = '0';
    document.querySelector('#total-interest span').innerHTML = '0';
    alert('Please, fill in your data');
  } else {
    document.querySelector('#month-payment span').innerHTML = `${monthlyPayment}$`;
    document.querySelector('#total-payment span').innerHTML = `${totalPayment}$`;
    document.querySelector('#total-interest span').innerHTML = `${totalInterest}%`;
  }

  document.querySelector('#amount').value = '';
  document.querySelector('#interest').value = '';
  document.querySelector('#payment').value = '';
}
