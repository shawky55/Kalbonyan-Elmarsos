'use strict';

// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// //Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

///////////////////////////////////////////////
/////////////////////////////////////////////////

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const displayMovements = function (movments,sort=false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movments;

  movs.forEach((mov, i) => {
    let typeOfmovment;
    if (mov > 0) {
      typeOfmovment = 'deposit';
    } else {
      typeOfmovment = 'withdrawal';
    }
    const Element = `
  <div class="movements__row">
          <div class="movements__type movements__type--${typeOfmovment}">${
      i + 1
    }${typeOfmovment}</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov} &euro;</div>
        </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', Element);
  });
};


const calcPrintBalance = account => {
  account.balance = account.movements.reduce((accumlator, current) => {
    return accumlator + current;
  }, 0);
  labelBalance.innerHTML = `${account.balance} &euro;`;
};

const displaySummry = account => {
  const incoms = account.movements
    .filter(mov => mov > 0)
    .reduce((acc, currnet) => acc + currnet, 0);
  labelSumIn.innerHTML = `${incoms} &euro;`;
  const outs = account.movements
    .filter(mov => mov < 0)
    .reduce((acc, currnet) => acc + currnet, 0);
  labelSumOut.innerHTML = `${Math.abs(outs)} &euro;`;
  const interest = account.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter(depsit => depsit > 1)
    .reduce((acc, current) => acc + current, 0);
  labelSumInterest.innerHTML = `${interest} &euro;`;
};

///////create user name

const craeteUserName = accounts => {
  accounts.forEach(accont => {
    accont.username = accont.owner
      .toLocaleLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
craeteUserName(accounts);

const updateUI = function (acc) {
  displayMovements(acc.movements);
  calcPrintBalance(acc);
  displaySummry(acc);
};

/**
 * turn euro to dollar with map method
 */
const movementsToUsd = movements.map(mov => 1.1 * mov);
const deposits = movements.filter(mov => mov > 0);
const withdrawals = movements.filter(mov => mov < 0);

const totalDepostetoUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * 1.1)
  .reduce((accumlator, currnet) => accumlator + currnet, 0);


//////////////EVENT HANDLER
//LOGIN
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin == Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    inputLoginUsername.value = '';
    inputLoginPin.value = '';
    displayMovements(currentAccount.movements);
    calcPrintBalance(currentAccount);
    displaySummry(currentAccount);
  }
});
///////////////////CLOSE ACCOUNT
btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value == currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    accounts.splice(index, 1);
    containerApp.style.opacity = 0;
  }
  inputLoginUsername.value = '';
  inputLoginPin.value = '';
});

/////////////

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

//////////////////////loan

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

///////////////////sort
let sortedState=false;
btnSort.addEventListener('click',function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements,!sortedState);
  sortedState=!sortedState;
})