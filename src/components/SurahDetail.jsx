import React from 'react'

function SurahDetail(props) {
    return (
        <div>
            <div className="mt-3">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <p className="text-muted">{props.nomor_surat} : {props.nomor}</p>
                        <h5 className="text-right mb-4">
                            <strong>{props.arab}</strong>
                        </h5>
                        {/* <small>{props.translate}</small><br/> */}
                        <small><i>{props.idn}</i></small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SurahDetail
