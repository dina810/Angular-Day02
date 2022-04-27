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


// //studentForm:FormGroup=new FormGroup({
// //   'id':new FormControl(),
// //   'name':new FormControl(),
// //   'age':new FormControl(),
// //   'dep_no':new FormControl(),
// // })

// n1:Student[]=[];
// add(){
//   this.student.push(this.n1)
// }
// student:Student[]=[
  
//   (1,"dina",27,100),
//   (2,"ahmed",27,200),
//   (3,"ghada",22,300),

  
// ]

//   // newStudent=new Student(0,"",0,0)

//   // add(){
//   //   this.student.push(new Student(this.newStudent.id,this.newStudent.name,this.newStudent.age,this.newStudent.deptno))
//   // }
//   // dispaly(){
//   //   console.log("ndnfdsb")
//   // }

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
