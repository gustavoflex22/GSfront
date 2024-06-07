import { useState } from 'react'
import { api } from '../../services/api'
import './style.scss'

function FaleConosco () {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  function handleSubmit (e) {
   e.preventDefault()
   api.post('/message/create', { email, message })
   .then(() => alert('Mensagem enviada.'))
   .catch(() => alert('Erro ao enviar mensagem'))
  }

  return (
   <>
    <div className='FaleConoscoContent'>
     <div className="ThirdContainer">
      <form className="ThirdPai" onSubmit={handleSubmit}>
       <h1>Deixe seu recado</h1>
       <input type="email" placeholder='Declare seu email...' required onChange={(e) => setEmail(e.target.value)}/>
       <textarea name="deixe_seu_recado" id="deixe_seu_recado" required cols={47} rows={15} placeholder='O que deseja falar?...' onChange={(e) => setMessage(e.target.value)}></textarea>
       <input type="submit" value="Enviar" />
      </form>
     </div>
    </div>
   </>
  )
}

export default FaleConosco