import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  typeCategory: string;
  typeCategoryValue: number;
  faultValue: number;
  faultCategory: string;
  frequecnyIntervals: number;
  frequencyMaxLimit: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    typeCategory: '1A',
    typeCategoryValue: 521,
    faultValue: 104,
    faultCategory: 'Track Geometry',
    frequecnyIntervals: 21,
    frequencyMaxLimit: 88,
  },
  {
    typeCategory: '1',
    typeCategoryValue: 421,
    faultValue: 104,
    faultCategory: 'Track Geometry',
    frequecnyIntervals: 3022,
    frequencyMaxLimit: 50,
  },

  {
    typeCategory: '2',
    typeCategoryValue: 221,
    faultValue: 103,
    faultCategory: 'PLPR',
    frequecnyIntervals: 23,
    frequencyMaxLimit: 15,
  },
  {
    typeCategory: '4',
    typeCategoryValue: 100,
    faultValue: 104,
    faultCategory: 'Track Geometry',
    frequecnyIntervals: 24,
    frequencyMaxLimit: 33,
  },
  {
    typeCategory: '3',
    typeCategoryValue: 102,
    faultValue: 104,
    faultCategory: 'Track Geometry',
    frequecnyIntervals: 25,
    frequencyMaxLimit: 42,
  },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample implements OnInit {
  displayedColumns: string[] = [
    'faultCategory',
    'Recordings',
    'typeCategory',
    'action',
  ];
  dataSource = ELEMENT_DATA;

  ngOnInit() {
    this.dataSource = this.sortData(this.dataSource);
  }

  sortData(data) {
    var tcategory = {};
    var plpr = {};

    var arr2 = [];
    data.forEach((el) => {
      var obj = arr2.find((it) => it.faultCategory === el.faultCategory);
      // console.log(el.typeCategory, ' -> ', el.typeCategoryValue);
      // console.log(obj);
      if (!obj) {
        el.typeCategory = [el.typeCategory];
        el.typeCategoryValue = [el.typeCategoryValue];
        el.frequecnyIntervals = [el.frequecnyIntervals];
        el.frequencyMaxLimit = [el.frequencyMaxLimit];

        // console.log(el.typeCategory, ' -> ', el.typeCategoryValue);
        arr2.push(el);
      } else {
        obj.typeCategory.push(el.typeCategory);
        obj.typeCategoryValue.push(el.typeCategoryValue);
        obj.frequecnyIntervals.push(el.frequecnyIntervals);
        obj.frequencyMaxLimit.push(el.frequencyMaxLimit);
      }
      // var obj2 = arr2.find((it) => it.typeCategory === el.typeCategory);
      // if (!obj2) {
      //   el.typeCategoryValue = [el.typeCategoryValue];
      //   arr2.push(el);
      // } else {
      //   obj2.typeCategoryValue.push(el.typeCategoryValue);
      // }
    });

    console.log(arr2);
    // this.getGroupData(arr2)
    return arr2;
  }
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
