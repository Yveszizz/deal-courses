import React, {Component} from 'react'
import Link from 'next/link'
import Deal from './Deal/deal'

class Deals extends Component {

    state = {
        deals: [
        {id: 0, nom: "Monsieur 1", notation:0, price: 0, author:''},
        {id: 1, nom: "Monsieur 2", notation:0, price: 0, author:''},
        {id: 2, nom: "Monsieur 3", notation:0, price: 0, author:''}
        ],
    };

    incrementHandler = (id) => {
        const deals = this.state.deals.slice()
        deals[id].notation = deals[id].notation + 1
        this.setState({deals:deals})
    }

    decrementHandler = (id) => {
        const deals = this.state.deals.slice()
        deals[id].notation = deals[id].notation - 1
        this.setState({deals:deals})
    }

    addNewCourse = () => {
        const deals = this.state.deals.slice()
        const lastDeal = deals.length - 1
        const id = deals[lastDeal].id + 1
        deals.push({id:id, nom:"deal name",notation:0, price:0, author:''})
        this.setState({deals:deals})
    }
    
    render() {
        return (
            <div>
                <div className="flex-col overflow-auto border-4 max-w-lg">
                    {this.state.deals.map((deal, id) => {
                    return (
                        <Deal 
                            decrement={()=>this.decrementHandler(id)}
                            increment={()=>this.incrementHandler(id)}
                            nom={deal.nom}
                            note={deal.notation}
                            id={deal.id}
                            price={deal.price}
                            author={deal.author}
                        />
                    )
                    })}
                </div>
                <button 
                    className="bg-blue-400 text-white hover:bg-blue-500 font-bold py-2 px-4 rounded block m-auto "
                    onClick={this.addNewCourse}>ADD NEW COURSE
                </button>
            </div>
        )
    }
}

export default Deals;