import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit, OnChanges {

  name = new FormControl('');
  changeLog = ['asdf', 'asdf', 'asgew'];

  constructor() {
  }

  ngOnInit() {
  }

  updateName() {
    this.name.setValue('Nancy');
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }



}
