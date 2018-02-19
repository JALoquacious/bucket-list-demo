import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less']
})
export class AboutComponent implements OnInit {

    goals: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private _data: DataService
    ) { 
        this.route.params.subscribe(result => console.log(result.id));
    }

    ngOnInit() {
        this._data.goal.subscribe(result => this.goals = result)
    }
    
    sendMeHome() {
        this.router.navigate(['']);
    }
}
