import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DxDrawerComponent } from 'devextreme-angular';

export class MenuItem {
  text: string;
  route: string;
}


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild(DxDrawerComponent, { static: false }) drawer: DxDrawerComponent;
  title = 'courses';

  navigation: MenuItem[] = [
    { text: "Courses", route: 'courses' },
    { text: "Sales", route: ''  },
    { text: "Customers", route: ''  },
    { text: "Employees", route: ''  },
    { text: "Reports", route: ''  }
  ];

  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
        icon: 'menu',
        onClick: () => this.drawer.instance.toggle()
    }
}];

  constructor(public router: Router) { }

  ngOnInit() {
  }



onItemClick(item: MenuItem): void {
  console.log(item);
  this.drawer.instance.hide();
  this.router.navigate([item.route]);
}

}
