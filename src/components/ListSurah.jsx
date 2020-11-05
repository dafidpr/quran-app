import React, { Component } from 'react';
import { Link, Switch } from "react-router-dom";

export default class ListSurahComponent extends Component {
    render() {
        return (
            <div className="col-md-4 mt-4">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h6>{this.props.nomor}. {this.props.latin}</h6>
                        <h4 className="text-right mt-4 text-primary">
                            <Switch>
                                <Link to={"/surah/" + this.props.nomor}> {this.props.nama}</Link>
                            </Switch>
                        </h4>
                        <p className="text-right mt-2">
                            <small>{this.props.arti}</small>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

