import React, {Component} from 'react';
import Link from 'next/link';

class Deal extends Component {
    render() {
        return (
            <div className="flex-wrap m-10 shadow-lg bg-white rounded-lg h-50 border-solid border-2 w-50">
                <h1 className="text-gray-900 font-bold text-xl mb-2">{this.props.nom}</h1>
                <h2>author : {this.props.author} </h2>
                <div className="flex mx-6">
                    <button onClick={this.props.increment}>+</button>
                    <p className="mx-1">Note : {this.props.note}</p>
                    <button onClick={this.props.decrement}>-</button>
                    
                </div>
                <Link href="/">
                    <a className="hover:underline text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                        Lien vers le cours
                    </a>
                </Link>
                
                <p>Description {this.props.id} </p>
                <p>Prix : {this.props.price} </p>
            </div>
        )
    }
}

export default Deal;