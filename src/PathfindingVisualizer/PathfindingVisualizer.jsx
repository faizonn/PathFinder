import React, {Component} from './node_modules/react';
import Node from './Node/Node';

import './PathfindingVisualizer.css';

export default class PathfindingVisualizer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                Foo Bar
                <Node></Node>
            </div>     
        );
    }
}