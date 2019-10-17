import React, {Component} from "react";
import {Link} from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <div>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
                <Link to="/">Home</Link>
            </div>
        );
    }
}