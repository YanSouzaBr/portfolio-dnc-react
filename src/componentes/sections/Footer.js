import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer (){
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/yansouzatricolor/'><FaInstagram size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/yan-souza-28a653130/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/YanSouzaBr'><FaGithub size={30}/></a></li>
            </ul>
            <p>yansouzatricolor@gmail.com</p>
            <p>Yan Souza © 2023 </p>

        </div>
    )
}

export default Footer