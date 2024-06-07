import { dataMembros } from './data';
import './style.scss';

function QuemSomos() {
  return (
    <>
      <div className="pai">
        <div className='container'>
          <h1 id="title">Membros</h1>
          <div className='pai_sections'>
            <hr />
            {dataMembros.map((membro) => (
            <section key={membro.id}>
              <img src={membro.img} alt={membro.name}/>
              <p className='text_section'>{membro.name}</p>
            </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuemSomos;
