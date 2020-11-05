import Axios from 'axios';
import React, { Component } from 'react';
import {Link, Switch} from 'react-router-dom';
import SurahDetail from '../components/SurahDetail';

export default class Surah extends Component {
    state = {
        detail: [],
        ayat: []
    }
    componentDidMount(){
        const nomor = this.props.match.params;
        Axios.get("https://equran.id/api/surat/" + nomor.id)
        .then((result) => {
            
            this.setState({
                detail: result.data,
                ayat: result.data.ayat
            })
        })
    }
    render() {
        return (
            <div className="container">
                 <div className="mt-4">
                    <Switch>
                        <Link to="/"><i className="fa fa-angle-double-left"></i> Back</Link>
                    </Switch>
                    <div className="card shadow-sm p-4 mt-3">
                        <div className="card-body">
                            <div className="container">
                                <h4>{this.state.detail.nama_latin} - {this.state.detail.nama}</h4>
                                <p>Jumlah Ayat : {this.state.detail.jumlah_ayat} - {this.state.detail.tempat_turun}</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Switch>
                                            <Link to={"/tafsir/" + this.state.detail.nomor} className="btn btn-success mb-3"><i className="fa fa-file-text-o"></i> Lihat Tafsir</Link>
                                        </Switch>
                                    </div>
                                    <div className="col-md-6 ">
                                        <audio src={this.state.detail.audio} className="float-none" controls></audio>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.ayat.map((ayat, i) => {

                       return <SurahDetail key={i} nomor_surat={this.state.detail.nomor} nomor={ayat.nomor} translate={ayat.tr} idn={ayat.idn} arab={ayat.ar}  />
                    })
                }

                <div className="card shadow-sm mt-3">
                    <div className="card-body">
                        <div className="container">
                            <Switch>
                                <div className="row">
                                    <Link to={"/surah/" + Number(this.state.detail.nomor - 1)} className="btn btn-default-custom mr-2 "> <i className="fa fa-angle-double-left"></i> Back</Link>
                                    <Link to={"/surah/" + Number(this.state.detail.nomor + 1)} className="btn btn-default-custom"> Next <i className="fa fa-angle-double-right"></i></Link>
                                </div>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
