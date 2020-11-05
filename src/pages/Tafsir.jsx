import Axios from 'axios'
import React, { Component } from 'react';
import TafsirDetail from '../components/TafsirDetail';
import {Link, Switch} from 'react-router-dom';

export default class Tafsir extends Component {
    state = {
        tafsir: [],
        detail: []
    }

    componentDidMount(){
        const nomor = this.props.match.params;
        Axios.get("https://equran.id/api/tafsir/" + nomor.id)
        .then((result) => {
           this.setState({
               tafsir: result.data,
               detail: result.data.tafsir
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
                                <h4>{this.state.tafsir.nama_latin}</h4>
                                <p>Jumlah Ayat : {this.state.tafsir.jumlah_ayat} - {this.state.tafsir.arti}</p>
                                <div className="float-right">
                                    <Switch>
                                        <Link to={"/surah/" + this.state.tafsir.nomor} className="btn btn-primary mr-2"><i className="fa fa-file-text-o"></i> Lihat Surat</Link>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                        this.state.detail.map((detail, i) => {
                            return <TafsirDetail key={i} tafsir={detail.tafsir} ayat={detail.ayat} />
                        })
                    }

                    
            </div>
        </div>
        )
    }
}
