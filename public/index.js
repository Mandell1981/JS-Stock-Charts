//fetching Data//
    // async function fetchData() {
    //     let response = await fetch('https://api.twelvedata.com/time_series?symbol=GME, MSFT, DIS, BNTX&interval=1min&format=JSON&apikey=0cba4e1c0d104e16876229732ead49a9');
    //     let result = await Response.json()
    //     console.log(result)
    // }

    new function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    const Chart = document.getElementById('myChart').getContext('2d');
    const stocks = { GME, MSFT, DIS, BNTX } = mockData;

    new Chart(timeChartCanvas.getContext('2d'), {
        type: 'line',
        data: {
            labels: stocks[0].values.map(value => value.datetime),
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor:  'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)'
            }]
        }
    });
    
       console.log(stocks[0].values)
}

function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}

stocks.forEach(stock => stock.values.reverse())


let Chart = new Chart
//Time Chart//
    new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.map(value => value.datetime),
        datasets: stocks.map( stock => ({
            label: stock.meta.symbol,
            data: stock.values.map(value => parseFloat(value.high)),
            backgroundColor:  getColor.color(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol),
        }))
    }
});

//Highest Price Chart//
   new Chart(highestPriceChartCanvas.getContext('2d'), {
    type: 'bar',
    data: {
        labels: stocks.map(stock => stock.meta.symbol),
        datasets: [{
            label: 'Highest',
            data: stocks.map(value => parseFloat(value.high)),
            backgroundColor: stocks.map(stock => getColor(stock.meta.symbol)),
            borderColor: stocks.map(stock => getColor(stock.meta.symbol)),
        }],
    },
   });


//Average Price Chart//

// let GME = result.GME
// let MSFT = result.MSFT
// let DIS = result.DIS
// let BTNX = result.BTNX

// const stocks = [GME, MSFT, DIS, BNTX];

// Bonus Note: 
// Another way to write the above lines would to refactor it as:
   // const {GME, MSFT, DIS, BTNX} = result 
// This is an example of "destructuring" an object
// "Destructuring" creates new variables from an object or an array

// ApiKey= 0cba4e1c0d104e16876229732ead49a9  //

main()