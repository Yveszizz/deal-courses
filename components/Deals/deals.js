import React, {Component} from 'react'
import Link from 'next/link'
import Deal from './Deal/deal'

class Deals extends Component {

    state = {
        deals: [
        {id: 1, nom: "Monsieur 1", notation:0},
        {id: 2, nom: "Monsieur 2", notation:0},
        {id: 3, nom: "Monsieur 3", notation:0}
        ],
    };

    incrementHandler = (index) => {
        console.log(index)
    }
    
    render() {
       
        return (
            <div className="flex justify-around m-10">
                
                {this.state.deals.map((deal, index) => {
                return (
                    <Deal 
                        increment={this.incrementHandler}
                        nom={deal.nom}
                        note={deal.notation}
                        id={deal.id}
                    />
                    
                )
                })}
            </div>
        )
    }
}

export default Deals;