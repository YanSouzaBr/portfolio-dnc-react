import ButtonB from '../elements/ButtonB'
import styles from './Projects.module.css'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'
import arquitetura from '../../Image/projects/arquitetura.png'

function Projects (){
    return (
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <Card
            img={lpdnc}
            title=" LP- DNC"
            tech="HTML, CSS e JS" 
            description="Desenvolvimento de uma Landing Page para o lancamento da formacao em tecnologia"
            repo="https://github.com/YanSouzaBr/projeto-landing-page" 
            site="https://moonlit-basbousa-431a57.netlify.app/"
                />
            <Card
             img={arquitetura}
             title="LP- Arquitetura"
             tech="HTML, CSS" 
             description="Primeiro desafio da Escola DNC"
             repo="https://github.com/YanSouzaBr/primeiro-desafio" 
             site="https://steady-heliotrope-9e2d47.netlify.app/"
             />
            
            <ButtonB text='Acesse meu repositório' link='https://github.com/YanSouzaBr?tab=repositories'/>
        </div>
    )
}

export default Projects