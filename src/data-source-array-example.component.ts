import { Component, OnInit } from '@angular/core';
import { DataService, Person } from '../data.service';

@Component({
    selector: 'data-source-array-example',
    templateUrl: './data-source-array-example.component.html',
    styleUrls: ['./data-source-array-example.component.scss']
})
export class DataSourceArrayExampleComponent implements OnInit {

    people: Person[] = [];
    selectedPerson = {};

    selectedSimpleItem = 'Two';
    simpleItems = [];

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService.getPeople().subscribe(items => {
            this.people = items
            console.log(this.people);
        });
        
        this.simpleItems = [true, 'Two', 3];
    }
}
