import { Component, OnInit } from '@angular/core';

import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  
  department:Department[]=[
    new Department(1,"os","Mansoura"),
    new Department(2,"sd","smart"),
    new Department (3,"ui","alex"),
  

  ];
  firstDept = new Department(1, "open source", "Mansoura")

  show(id:number){
   for (let i = 0; i < this.department.length; i++) {
     if (this.department[i].id==id) {
       this.firstDept=this.department[i]

       break;
     }
     
     
   }
  }

  delete(id:number){
    for (let i = 0; i < this.department.length; ++i) {
      if (this.department[i].id==id) {
        this.department.splice(i,1);
 
        break;
      }
      
      
    }

  }

  newDepartment= new Department (0,"","");

  add(){
    this.department.push(new Department(this.newDepartment.id ,this.newDepartment.deptname,this.newDepartment.location))
  }


  deptEdit: Department = new Department(0, "", "");

  Edit(id: number) {
    for (let i = 0; i < this.department.length; i++) {
      if (this.department[i].id == id) {
        this.deptEdit = this.department[i]
        break;
      }
    }

  }

  EditDept(id: number) {

    this.department.forEach(item => {

      if (item.id == id) {
        new Department(item.id = this.deptEdit.id, item.deptname = this.deptEdit.deptname, item.location = this.deptEdit.location)

      }
    });

  }

  constructor() { }

  ngOnInit(): void {
  }

}
