import React from 'react'

function TafsirDetail(props) {
    
    return (
        <div>
            <div className="mt-3">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <p className="text-muted">Ayat : {props.ayat}</p>
                        {
                            props.tafsir.split('\n').map(function(tafsir, key) {
                                return <small key={key}>{tafsir}<br/></small>
                             })
                        }
                       
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default TafsirDetail
