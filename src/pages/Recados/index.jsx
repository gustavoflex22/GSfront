import { useState } from 'react';
import { api } from '../../services/api';
import './style.scss';

function Recados() {
  const [token, setToken] = useState('');
  const [messages, setMessages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!token) {
      alert('Por favor, insira um token.');
      return;
    }
    
    api.get(`message/show/${token}`)
      .then((response) => {
      setMessages(response.data);
      setShowModal(true);
      })
      .catch(() => {
      alert('KEY invalida.');
      });
  }

  return (
    <>
      <div className="ThirdContainer">
    
          <h1 className="title">Favor inserir seu Token</h1>
          <input
          type="text"
          placeholder="Declare seu token"
          onChange={(e) => setToken(e.target.value)}
          />
          <button onClick={handleSubmit}>Enviar</button>
      
      </div>

      {showModal && (
        <div className="modal fade show" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Mensagens</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {messages.map((message, index) => (
                  <div key={index}>
                    <p><strong>Email:</strong> {message.email}</p>
                    <p><strong>Mensagem:</strong> {message.message}</p>
                    <hr />
                  </div>
                ))}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => setShowModal(false)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Recados;
