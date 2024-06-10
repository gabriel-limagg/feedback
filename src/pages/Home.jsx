import  { useState } from 'react'
import { ButtonContainer, CardContainer, IconContainer, ResultContainer} from './Home.styled'
import iconStarImg from "../assets/icon-star.svg"
import img2 from "../assets/illustration-thank-you.svg"

export  function Home() {
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [feedbackNote, setfeedbackNote] = useState(0)
  
  function handleFeedbackButtonClick(event){
     const feedback = Number(event.target.innerText)
     setfeedbackNote(feedback)
  }
  function handleSubmit(){
    if (feedbackNote === 0)return

    setMostrarResultado(true)


  }
  
  return (
    mostrarResultado === false ? (
      <CardContainer>
        <IconContainer>
            <img src={iconStarImg} alt="icone de estrela" />
        </IconContainer>


        <h1>Como foi o atendimento?</h1>
        <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>
    
        <ButtonContainer>
        <button onClick={handleFeedbackButtonClick}>1</button>
        <button onClick={handleFeedbackButtonClick}>2</button>
        <button onClick={handleFeedbackButtonClick}>3</button>
        <button onClick={handleFeedbackButtonClick}>4</button>
        <button onClick={handleFeedbackButtonClick}>5</button>
        </ButtonContainer>
    
        <button onClick={handleSubmit}>enviar</button>
        </CardContainer>
    )

   
        
    : (
      <CardContainer>
          <img src={img2} alt="imagem de agradecimento" />
          <ResultContainer>
            <p>Você selecionou {feedbackNote} de 5</p>
            </ResultContainer>
          <h1>Obrigado!</h1>
          <p>Agradecemos por dedicar um momento para nos avaliar. Se precisar de mais suporte, não hesite em entrar em contato!</p>
      </CardContainer>
    )
  )
}
