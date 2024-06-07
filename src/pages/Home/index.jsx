import fotoBaleia from '../../assets/6622.png'
import NossoTrabalho from '../../components/NossoTrabalho'
import QuemSomos from '../../components/QuemSomos'
import FaleConosco from '../../components/FaleConosco'
import './style.scss'

function Home() {
  return (
    <>
      <main>
        <div className='pai_conteudo_inicial'>
          <section className='filho_conteudo_inicial_first'>
            <p>Somos um grupo de <span style={{ backgroundColor: '#0c5fc5ce', paddingLeft: '5px', paddingRight: '5px' }}>estudantes</span> dedicados a desenvolver soluções inovadoras para desafios globais críticos. Nosso projeto,
              Aqua Clean, nasceu da necessidade urgente de abordar a escassez de água potável que afeta milhões de pessoas ao redor do mundo. Como futuros profissionais,
              acreditamos no poder da ciência e da tecnologia para promover mudanças significativas e sustentáveis. Nosso objetivo é garantir acesso universal à água limpa e segura,
              utilizando tecnologias avançadas e métodos ecológicos. Com entusiasmo e compromisso, estamos prontos para contribuir para a melhoria da qualidade de vida das comunidades carentes,
              promovendo saúde e bem-estar através do nosso projeto.</p>
            <div className='buttons'>
            <a id='button_faleconosco'>Fale conosco</a>
            <a id='button_quemsomos'>Quem somos</a>
            </div>
          </section>
          <section className='filho_conteudo_inicial'>
          <img src={fotoBaleia} />
          </section>
        </div>

      <QuemSomos />
      <NossoTrabalho/>
      <FaleConosco/>
      <footer>
        <p>&copy; 2023 Fiap Programmers | Desenvolvido por Fiap</p>
      </footer>
      </main>
    </>
  )
}

export default Home