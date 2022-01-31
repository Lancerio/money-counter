let total = document.querySelectorAll('.total');
let totalAmount = parseInt(document.getElementById('amount').innerText);

for (let i = 0; i < total.length; i++) {
    const input = document.querySelectorAll('.input');

    const getResult = () => {
        const denomination = parseInt(document.querySelectorAll('.denomination')[i].innerHTML);
        const multiply = denomination * input[i].value;

        // Display Row Totals
        const displayTotal = () => {
            total[i].innerHTML = result.toLocaleString();
        }

        // Calculations
        if (i === 0) {
            result = multiply * 1000;
            displayTotal();
            totalAmount += result;
        } else {
            result = multiply;
            displayTotal();
            totalAmount += result;
        }

        document.getElementById('amount').innerHTML = totalAmount.toLocaleString();
    }

    input[i].addEventListener('change', getResult);
}











// const product = (denomination, input) => {

// }

// if (input[0].value === 1) {
//     totals[0].innerHTML = 1;
// } else {
//     totals[0].innerHTML = denomination[0].innerHTML * input[0].value;
// }

// const test = () => {
//     input[1].addEventListener('change', console.log(input[1].innerHTML));
// }

// test();

// console.log(denomination[0].innerHTML);
// console.log(input[0].innerHTML);