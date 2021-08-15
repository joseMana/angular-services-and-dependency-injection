import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-demo-lifecycle',
  templateUrl: './demo-lifecycle.component.html',
  styleUrls: ['./demo-lifecycle.component.scss']
})
export class DemoLifecycleComponent implements OnInit {
  public userToAdd: string;
  public userList: string[] = [];
  public isChildVisible = true;

  constructor() { }

  ngOnInit(): void {
  }

  onAddUser(): void {
    if (!(this.userToAdd && this.userList)) { return; }

    const existingUsername = this.userList.find(u => u.toLowerCase() === this.userToAdd.toLowerCase());
    if (existingUsername) { return; }

    this.userList = [...this.userList, this.userToAdd];
    this.userToAdd = null;
  }

}
