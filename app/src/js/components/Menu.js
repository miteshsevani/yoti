import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';

export default class Menu extends React.Component {
    render() {
        return(
            <aside className="menu">
                <ul><li><div className="icon-activity"></div>Activity</li></ul>
            </aside>
        )
    }
}