import PostModelo from "componentes/postModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/minha_foto2.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou William!
            </h3>
            <img src={fotoSobreMim} alt="Foto do William Souza" className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou instrutor de Front-end e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou na Universidade Federal do Rio Grande (FURG) na graduação de Engenharia de computação. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, C, C++ mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
            </p>
            <p className={styles.paragrafo}>
                Fazendo BootCamp's e cursos relacionados a desenvolvimento tive minha experiência de DEV mais próxima da realidade, com prazos de implementação para projetos, e aprendi muito enquanto codificava.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido aprenas aprendizados atrás de aprendizados com o Cursos da Escola Alura.
            </p>
        </PostModelo>
    )
}