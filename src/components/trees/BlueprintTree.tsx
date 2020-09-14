import React from 'react'
import {
  Classes,
  Icon,
  Intent,
  ITreeNode,
  Position,
  Tooltip,
  Tree,
} from '@blueprintjs/core'

const INITIAL_STATE: ITreeNode[] = [
  // {
  //   id: 0,
  //   hasCaret: false,
  //   icon: 'folder-close',
  //   label: 'Folder 0',
  // },
  {
    id: 1,
    icon: 'cloud',
    isExpanded: true,
    label: (
      <Tooltip content="I'm a cloud <3" position={Position.RIGHT}>
        AWS
      </Tooltip>
    ),
    childNodes: [
      {
        id: 4,
        hasCaret: true,
        icon: 'cog',
        label: (
          <Tooltip content='foo' position={Position.RIGHT}>
            Infrastructure
          </Tooltip>
        ),
        childNodes: [
          { id: 5, label: 'No-Icon Item' },
          { id: 6, icon: 'diagram-tree', label: 'Prod Account' },
        ],
      },
      {
        id: 7,
        hasCaret: true,
        icon: 'database',
        label: 'Databases',
        isExpanded: true,
        secondaryLabel: (
          <Tooltip content='An eye!'>
            <Icon icon='eye-open' />
          </Tooltip>
        ),
        childNodes: [
          { id: 8, icon: 'diagram-tree', label: 'Prod Account' },
          { id: 9, icon: 'diagram-tree', label: 'Dev Account' },
        ],
      },
    ],
  },

  {
    id: 3,
    icon: (
      <Icon
        icon='tag'
        intent={Intent.PRIMARY}
        className={Classes.TREE_NODE_ICON}
      />
    ),
    label:
      'Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.',
  },
  {
    id: 2,
    hasCaret: true,
    icon: 'folder-close',
    label: 'Super secret files',
    disabled: true,
  },
]

interface ITreeExampleState {
  nodes: ITreeNode[]
}

interface IExampleProps<T = {}> {
  id?: string
  data?: T
}

export default class BlueprintTree extends React.Component<
  IExampleProps,
  ITreeExampleState
> {
  state: ITreeExampleState = { nodes: INITIAL_STATE }

  handleNodeClick = (
    nodeData: ITreeNode,
    _nodePath: number[],
    e: React.MouseEvent<HTMLElement>
  ) => {
    const originallySelected = nodeData.isSelected
    if (!e.shiftKey) {
      this.forEachNode(this.state.nodes, (n) => (n.isSelected = false))
    }
    nodeData.isSelected =
      originallySelected == null ? true : !originallySelected
    this.setState(this.state)
  }

  handleNodeCollapse = (nodeData: ITreeNode) => {
    nodeData.isExpanded = false
    this.setState(this.state)
  }

  handleNodeExpand = (nodeData: ITreeNode) => {
    nodeData.isExpanded = true
    this.setState(this.state)
  }

  forEachNode(nodes: ITreeNode[], callback: (node: ITreeNode) => void) {
    if (nodes == null) {
      return
    }

    for (const node of nodes) {
      callback(node)
      // @ts-ignore
      this.forEachNode(node.childNodes, callback)
    }
  }

  render() {
    return (
      <div style={{ textAlign: 'left', width: '580px', margin: '0 auto' }}>
        <Tree
          contents={this.state.nodes}
          onNodeClick={this.handleNodeClick}
          onNodeCollapse={this.handleNodeCollapse}
          onNodeExpand={this.handleNodeExpand}
          className={Classes.ELEVATION_0}
        />
      </div>
    )
  }
}
