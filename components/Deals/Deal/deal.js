import React, {Component} from 'react';
import Link from 'next/link';

class Deal extends Component {
    render() {
        return (
            <div className="flex-initial mx-auto shadow-lg bg-white rounded-lg h-50 border-solid border-2 w-1/5">
                <h1 className="text-gray-900 font-bold text-xl mb-2">{this.props.nom}</h1>
                <div>
                    <button onClick={this.props.increment}>+</button>
                    <button onClick={this.props.decrement}>-</button>
                    <p>Note : {this.props.note}</p>
                </div>
                <Link href="/">
                    <a className="hover:underline text-blue-500 no-underline text-accent-1 dark:text-blue-300">
                        Lien vers le cours
                    </a>
                </Link>
                
                <p>Description {this.props.id} </p>
            </div>
        )
    }
}

export default Deal;