import Image from "./Image"
import TextArea from "./TextArea"
import '../components/scss/Card.css'

const card = () => {
  return (
    <div className='container'>
        <div className='container-wrapper'>
            <Image />
            <TextArea />

        </div>
    </div>
  )
}

export default card