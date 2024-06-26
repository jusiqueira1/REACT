import './App.css';
import Mensagem from './componentes/Saudacao';


function saudacao() {
  let nomee = "Júlia";

  return (
    <div className="Nome">
     <Mensagem
        nomee={nomee}
     />
    </div>
  );
}
export default saudacao;