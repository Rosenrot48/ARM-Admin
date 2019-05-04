import {FlatTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optiona list of children.
 */
interface ObjectNode {
  name: string;
  children?: ObjectNode[];
}

const TREE_DATA: ObjectNode[] = [
  {
    name: 'Users',
    children: [
      {name: 'Partner'},
      {name: 'Bank'},
      {name: 'General'},
    ]
  }, {
    name: 'Status',
    /*children: [
      {
        name: '',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussel sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins',
            children: [
              {name: 'Blue'},
              {name: 'Green'},
            ]
          },
          {name: 'Carrots'},
        ]
      },
    ]*/
  },
  {name: 'Groups'},
  {name: 'OTP'},
  {name: 'Xattr'},
  {name: 'Sessions'},
  {name: 'Branch'},
];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

/**
 * @title Tree with flat nodes
 */
@Component({
  selector: 'app-tree-flat-overview-example',
  templateUrl: 'tree.component.html',
  styleUrls: ['tree.component.css'],
})
export class TreeComponent {
  private transformer = (node: ObjectNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
