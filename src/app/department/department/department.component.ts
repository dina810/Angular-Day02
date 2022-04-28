import { Component, OnChanges, OnInit } from '@angular/core';

import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {



  // image:string[]=[
  //   'assets/bag.PNG',
  //   'assets/shoes.PNG',
  //   'assets/glassess.PNG',
  //   'assets/clothes.PNG',
  
  // ];
  firstImg:string='assets/bag.PNG';

  // for (let i = 0; index < image.length; i++) {
  //   if(this.image[i]==this.firstImg){

  //   }
    
  //}

  // add(){
  //   this.department.push(new Department(this.image.images ))

  department:Department[]=[
    new Department('bag.PNG',"Bag","gdn 0011","March",20,2),
    new Department('shoes.PNG',"shoes","gdn 0012","April",30,3),
    new Department ('glassess.PNG',"Glassess","gmn 0013","May",40,4),
    new Department ('clothes.PNG',"Closes","gmn 0014","Jun",50,5),
  

  ];

  term:string='';

  showImages=true;
  imgToggle() {
      this.showImages = !this.showImages;
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
function img(img: any) {
  throw new Error('Function not implemented.');
}

