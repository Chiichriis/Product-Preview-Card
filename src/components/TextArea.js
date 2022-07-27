import Button from './Button'
import './scss/TextArea.css'
const TextArea = () => {
  return (
    <div className="cardText">
        <p className='perfume'>perfume</p>
        <h2 className="brandName">Gabrielle Essence Eau De Parfum</h2>
        <p className='card-subtxt'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

        <div className="priceSection">
            <h2>$149.99</h2>
            <p>$169.99</p>
        </div>

        <Button />


    </div>
  )
}

export default TextArea