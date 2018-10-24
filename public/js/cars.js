const initCars = () =>{
    $.get({ url:'/cars',
            success:(cars) => createCarTable(cars),
            error:function(error){console.log(error)}
        });
}

const createCarTable = (items) =>{
    let carTable = $('#car_table');

    let tableHeader = $(document.createElement('div'));
    tableHeader.addClass('table_header');

    let name = $(document.createElement('div')).append('name').addClass('table_cell table_header_cell');
    let consumption = $(document.createElement('div')).append('consumption').addClass('table_cell table_header_cell');
    let color = $(document.createElement('div')).append('color').addClass('table_cell table_header_cell');
    let manufacturer = $(document.createElement('div')).append('manufacturer').addClass('table_cell table_header_cell');
    let available = $(document.createElement('div')).append('available').addClass('table_cell table_header_cell');
    let year = $(document.createElement('div')).append('year').addClass('table_cell table_header_cell');
    let horsepower = $(document.createElement('div')).append('horsepower').addClass('table_cell table_header_cell');

    tableHeader.append(name,consumption,color,manufacturer,available,year,horsepower);

    carTable.append(tableHeader);
    createCarTableRow(items, carTable);

}

const createCarTableRow = (items, table) =>{
    items.forEach(item =>{
        let row = $(document.createElement('div')).addClass('table_row')
        let name = $(document.createElement('div')).append(item.name).addClass('table_cell');
        let consumption = $(document.createElement('div')).append(item.consumption).addClass('table_cell');
        let color = $(document.createElement('div')).append(item.color).addClass('table_cell');
        let manufacturer = $(document.createElement('div')).append(item.manufacturer).addClass('table_cell');
        let available = $(document.createElement('div')).append(item.available).addClass('table_cell');
        let year = $(document.createElement('div')).append(item.year).addClass('table_cell');
        let horsepower = $(document.createElement('div')).append(item.horsepower).addClass('table_cell');
        row.append(name,consumption,color,manufacturer,available,year,horsepower);
        table.append(row);
    });

}