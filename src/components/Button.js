import btnIcon from '../components/images/icon-cart.svg'
import '../components/scss/Button.css'

const Button = () => {
  return (
    <div>
        <button>
            <img src={btnIcon} />
            Add to cart
        </button>
    </div>
  )
}

export default Button