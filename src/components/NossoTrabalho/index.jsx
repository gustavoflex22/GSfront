import RobotImage from '../../assets/imagem robo.png'
import { dataNossoTrabalho } from './data'
import './style.scss'

function NossoTrabalho () {
return (
<>
<div className="pai">
    <h1 className='second_title'>AquaClean</h1>
    <div className="SecondContainer">
     <div className="left"> {/* início do left content */}
    {dataNossoTrabalho.map((card) => (
    <section key={card.id}>
    <div className='circle'>
        <p>{card.level}</p>
    </div>
    <p className='texto'>{card.text}</p>
    </section>
    ))}
     </div>  {/* fim do left content */}
    
    <div className="right">
    <img src={RobotImage} id='image_right'/>
    </div>
    </div>
</div>
</>
)
}

export default NossoTrabalho