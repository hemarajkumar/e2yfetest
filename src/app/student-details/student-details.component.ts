import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {SearchServiceService} from "../shared/service/search-service.service";
import { searchList } from '../shared/model/search';
import { NOIMAGE } from '../shared/constants';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent {

  studentData: any[] = [];

  studentList: searchList = {};

  noImage: string = NOIMAGE;

  constructor(private activatedRoute: ActivatedRoute,private searchServiceService:SearchServiceService) {}

  ngOnInit() {
    this.activatedRoute.paramMap.pipe(switchMap(params => {
      const id = params.get('id');
      return this.searchServiceService.getCharacter(id)
    })).subscribe(result => {
      let imagePath = result?.image !== '' ? result?.image : NOIMAGE;
      this.studentList = {
        id: result?.id,
        name:  result?.name,
        dateOfBirth: result?.title,
        hogwartsStudent: result?.hogwartsStudent,
        hogwartsStaff: result?.hogwartsStaff,
        image: imagePath,
        alive: result?.alive,
      }
    })
  }

}
