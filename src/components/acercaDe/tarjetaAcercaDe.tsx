import { FC } from "react"
import { AcercaDe } from "./acercaDe.interface"

export const TarjetaAcercaDe: FC<AcercaDe> = ({ titulo, informacion }) => {
  return (
    <div className="card {col}">
      <div className="card-body">
        <h4 className="card-title">{ titulo }</h4>
        <h6 className="card-subtitle mb-2 text-muted">Lorem ipsum dolor sit amet.</h6>
        
        <p className="card-text">{ informacion}</p>
        
        <a href="#" className="card-link">Card link</a>
        <a href="#" className="card-link">Another link</a>
      </div>
    </div>
  )
}