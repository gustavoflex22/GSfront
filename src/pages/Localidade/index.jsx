import { useState } from 'react';
import axios from 'axios';

function Localidade() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const apiRegisterUrl = import.meta.env.VITE_API_KEY;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiRegisterUrl}&units=metric`)
    .then((res) => { 
    setWeatherData(res.data);
    setShowModal(true);
    })
    
    .catch(() => {
    alert('Falha ao tentar acessar dados do clima.');
  });
  }

  return (
    <>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Cidade</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Declare sua cidade..."
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Pesquisar</button>
        </form>
      </div>

      {showModal && (
        <div className="modal fade show" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Dados do Clima</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {weatherData && (
                  <div>
                    <p><strong>Cidade:</strong> {weatherData.name}</p>
                    <p><strong>Temperatura:</strong> {weatherData.main.temp} °C</p>
                    <p><strong>Condição:</strong> {weatherData.weather[0].description}</p>
                  </div>
                )}
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

export default Localidade;
