import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';

import { FormControl,FormGroup,FormBuilder,Validator } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student:Student[]=[

    new Student(1,"dina",27,100),
    new Student(2,"ahmed",27,200),
    new Student(3,"ghada",22,300),
    
    ]

    newStudent=new Student()
    add(){
      this.student.push(new Student(this.newStudent.id,this.newStudent.name,this.newStudent.age,this.newStudent.dep_no))
    }

users:string[]=["dina","ahmed","amgad","doaa"]

n1:string='';
addpip(){
  this.users.push(this.n1)
}

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
