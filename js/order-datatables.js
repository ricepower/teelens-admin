window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const orderTable = document.getElementById('orderTable');
    if (orderTable) {
        let dataTable = new simpleDatatables.DataTable(orderTable, {
            perPage: 10,
            perPageSelect: false,
            searchable: false,
            soartable: false,
            // data: myData
        });
    }
});

let myData = {
    "headings": [
        "Name",
        "Company",
        "Ext.",
        "Start Date",
        "Email",
        "Phone No."
    ],
    "data": [
        [
            "Hedwig F. Nguyen",
            "Arcu Vel Foundation",
            "9875",
            "03/27/2017",
            "nunc.ullamcorper@metusvitae.com",
            "070 8206 9605"
        ],
        [
            "Genevieve U. Watts",
            "Eget Incorporated",
            "9557",
            "07/18/2017",
            "Nullam.vitae@egestas.edu",
            "0800 106980"
        ],
        [
            "Hedwig F. Nguyen",
            "Arcu Vel Foundation",
            "9875",
            "03/27/2017",
            "nunc.ullamcorper@metusvitae.com",
            "070 8206 9605"
        ],
        [
            "Genevieve U. Watts",
            "Eget Incorporated",
            "9557",
            "07/18/2017",
            "Nullam.vitae@egestas.edu",
            "0800 106980"
        ],
        [
            "Hedwig F. Nguyen",
            "Arcu Vel Foundation",
            "9875",
            "03/27/2017",
            "nunc.ullamcorper@metusvitae.com",
            "070 8206 9605"
        ],
        [
            "Genevieve U. Watts",
            "Eget Incorporated",
            "9557",
            "07/18/2017",
            "Nullam.vitae@egestas.edu",
            "0800 106980"
        ],
        [
            "Hedwig F. Nguyen",
            "Arcu Vel Foundation",
            "9875",
            "03/27/2017",
            "nunc.ullamcorper@metusvitae.com",
            "070 8206 9605"
        ],
        [
            "Genevieve U. Watts",
            "Eget Incorporated",
            "9557",
            "07/18/2017",
            "Nullam.vitae@egestas.edu",
            "0800 106980"
        ],
        [
            "Hedwig F. Nguyen",
            "Arcu Vel Foundation",
            "9875",
            "03/27/2017",
            "nunc.ullamcorper@metusvitae.com",
            "070 8206 9605"
        ],
        [
            "Genevieve U. Watts",
            "Eget Incorporated",
            "9557",
            "07/18/2017",
            "Nullam.vitae@egestas.edu",
            "0800 106980"
        ],
        [
            "Hedwig F. Nguyen",
            "Arcu Vel Foundation",
            "9875",
            "03/27/2017",
            "nunc.ullamcorper@metusvitae.com",
            "070 8206 9605"
        ],
        [
            "Genevieve U. Watts",
            "Eget Incorporated",
            "9557",
            "07/18/2017",
            "Nullam.vitae@egestas.edu",
            "0800 106980"
        ]
    ]
} 
