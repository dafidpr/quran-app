// import React from 'react';
// import {useParams} from 'react-router-dom';

// function SurahDetail() {
//     let {id} = useParams();
//     return (
//         <div>
//             <h1>ID : {id}</h1>
//         </div>
//     )
// }

// export default SurahDetail
import React, { Component } from 'react'

export default class SurahDetail extends Component {
    state = {
        surah: null
    }
    componentDidMount(){
        const {id} = this.props.match.params;
        console.log(id);
    }
    render() {
        return (
            <div>
                {/* <h1>ID : {id}</h1> */}
            </div>
        )
    }
}
