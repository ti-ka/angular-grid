import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    actions = [
        {
            title: 'Approve',
            classes: 'text-success',
            icon: 'fal fa-check',
            onClick: (row) => {
                row['make'] = `${row['make']} (Approved)`;
                alert(`${row['make']} is approved.`)
            }
        },
        {
            title: 'Delete',
            classes: 'text-danger',
            icon: 'fal fa-trash',
            onClick: (row) => {
                row.isDeleted = true;
            }
        },
    ];
    columns =  [{
        title: 'Make',
        field: 'make'
    }, {
        title: 'Model',
        field: 'model',
        filterBy: 'has',
        filter: 'e'
    }, {
        title: 'Price',
        field: 'price',
        align: 'right'
    }];

}
