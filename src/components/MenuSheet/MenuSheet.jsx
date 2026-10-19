import './MenuSheet.css'
import Reveal from '../Reveal/Reveal.jsx'
import Block from '../MenuBlocks/MenuBlocks.jsx'
import logo from '../../assets/logo-coffebook.png'

// Uma "folha" do cardápio, como cada página do PDF.
export default function MenuSheet({ id, blocks }) {
  return (
    <article className="sheet" id={id}>
      {blocks.map((b, i) => <Reveal key={i} delay={Math.min(i, 4) * 60}><Block b={b} /></Reveal>)}
      <footer className="sheet-foot">
        <p>Um <em>café</em>, um <em>livro</em>,<br />uma pausa.</p>
        <img src={logo} alt="CoffeBook"  />
      </footer>
    </article>
  )
}
