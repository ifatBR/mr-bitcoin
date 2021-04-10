
import { Component } from 'react'

import './MoveList.scss'

export function MoveList ({moves}) {

        const date =(date)=>{
            return new Date(date).toLocaleDateString(['ban', 'id'])
        }
        return (
            moves && <section className="move-list">
                <h3>Your moves:</h3>
                <ul className="clean-list">
                    {moves.map((move, idx) => <li key={'m'+idx}><p><span>At:</span> {date(move.at)},</p><p><span>Amount:</span> {move.amount} BTC</p></li>)}
                </ul>
            </section>
        )
   
}
