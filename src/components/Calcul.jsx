import React, { Component } from 'react'

export default class Calcul extends Component {

    state = {
        poids: 0,
        distance: 0,
        mode: 'normal',
        cout: 0
    }

    handleOnchange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        this.setState({
            [name]: value
        });
    }

    calculer = (e) => {
        e.preventDefault();

        let cout = 0;
        if(this.state.poids <10)
            cout = this.state.distance * 0.5
        else
            cout = this.state.distance * (this.state.poids/10) * 0.3

        if(this.state.mode==='express')
            cout += cout*0.2

        this.setState({cout});

        
    }

    initialiser = (e) => {
        e.preventDefault();

        this.setState({
            poids: 0,
            distance: 0,
            mode: 'normal',
            cout: 0
        })
    }

    render() {
        return (
            <div className='calcul'>
                <div className='content'>
                    <div className='group'>
                        <label htmlFor='poids'>Poids :</label>
                        <input type="number" name="poids" id="poids" value={this.state.poids} onChange={this.handleOnchange} />
                    </div>
                    <div className='group'>
                        <label htmlFor='distance'>Distance :</label>
                        <input type="number" name="distance" id="distance" value={this.state.distance} onChange={this.handleOnchange} />
                    </div>
                    <div className='group'>
                        <label htmlFor='mode'>Mode : </label>
                        <input type="radio" name="mode" id='mode' value='normal' checked={this.state.mode==='normal'} onChange={this.handleOnchange} /> Normal
                        <input type="radio" name="mode" value='express' checked={this.state.mode==='express'} onChange={this.handleOnchange} /> Express
                    </div>
                    <div className='btns'>
                        <button onClick={this.calculer}>Calculer</button>
                        <button onClick={this.initialiser}>Initialiser</button>
                    </div>
                    <div className='group'>
                        <label htmlFor='cout'>Cout total :</label>
                        <input type="number" name="cout" id="cout" value={this.state.cout.toFixed(2)} onChange={this.handleOnchange} readOnly />
                    </div>
                </div>
            </div>
        )
    }
}
