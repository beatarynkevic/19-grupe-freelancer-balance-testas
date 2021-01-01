function renderMetuBalansas(data) {
    for (let i = data[1].month; i < data.length; i++) {

    }
    // console.log(data.length);

    const DOM = document.querySelectorAll('.table-row');
    let HTML = `<div class="table-row">
                    <div class="cell">${data.month}</div>
                    <div class="cell">Sausis</div>
                    <div class="cell">${data.income} Eur</div>
                    <div class="cell">-</div>
                    <div class="cell">${data.expense} Eur</div>
                </div>`
}

export { renderMetuBalansas }