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
                    <div className="card shadow-sm p-4 ">
                        <div className="card-body">
                            <div className="container">
                                <h4>{this.state.detail.nama_latin} - {this.state.detail.nama}</h4>
                                <p>Jumlah Ayat : {this.state.detail.jumlah_ayat} - {this.state.detail.tempat_turun}</p>
                                <Switch>

                                    <Link to={"/surah/tafsir/" + this.state.detail.nomor} className="btn btn-success mr-2"><i className="fa fa-book"></i> Lihat Tafsir</Link>
                                </Switch>
                                <div className="float-right">
                                    <audio src={this.state.detail.audio} controls></audio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    this.state.ayat.map(ayat => {

                       return <SurahDetail key={ayat.nomor} nomor_surat={this.state.detail.nomor} nomor={ayat.nomor} translate={ayat.tr} idn={ayat.idn} arab={ayat.ar}  />
                    })
                }
            </div>
        )
    }
}
