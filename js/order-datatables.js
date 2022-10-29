window.addEventListener('DOMContentLoaded', event => {
    // Simple-DataTables
    // https://github.com/fiduswriter/Simple-DataTables/wiki

    const orderTable = document.getElementById('orderTable');
    if (orderTable) {
        let dataTable = new simpleDatatables.DataTable(orderTable, {
            perPage: 10,
            perPageSelect: false,
            searchable: false
        });
    }
});
