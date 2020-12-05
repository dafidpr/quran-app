import React, { Component } from 'react';
import ListSurahComponent from '../components/ListSurah';
const axios = require('axios');

export default class HomeComponent extends Component {
    state = {
        rowData: []
    }

    componentDidMount(){
        axios(" https://equran.id/api/surat")
        .then((result) => {
            this.setState({
                rowData: result.data
            })
        })
    }

    render() {
        return (
            <div className="container">
                {/* <div className="card shadow-sm mt-5">
                    <div className="card-body">
                        <form className="input-icon">
                            <input type="search" className="form-control header-search" placeholder="Search&hellip;" />
                            <div className="input-icon-addon">
                                <i className="fa fa-search"></i>
                            </div>
                        </form>
                    </div>
                </div> */}
                <div className="row mt-5">
                    {
                        this.state.rowData.map(rowData => {

                            return <ListSurahComponent key={rowData.nomor} nomor={rowData.nomor} latin={rowData.nama_latin} nama={rowData.nama} arti={rowData.arti} />
                        })
                    }
                </div>
            </div>

        )
    }
}

