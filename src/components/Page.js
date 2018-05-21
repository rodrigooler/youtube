import React, { Component } from 'react';
import './page.css'
import Card from './Card'

class Page extends Component {

    render(){
        return(
            <div className="page-container" >
                <section className="videos-container">

                    <h4 className="section-title">
                        <a >
                            Tendenze
                        </a>
                    </h4>

                    <div className="cards-container">

                        <Card />
                        <Card />
                        <Card />
                        <Card />

                    </div>
                </section>
            </div>
        )
    }

}

export default Page;