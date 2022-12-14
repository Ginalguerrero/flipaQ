import QuizCard from "../Deck/QuizCard";
import { BsCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import "./CardPage.css";

export default function CardPage({
  quizMode,
  selectedDeck,
  questionNumber,
  setQuestionNumber,
  cardSide,
  setCardSide,
}) {
  // Increments the question number to display the next card's front side
  const incrementQuestionNumber = () => {
    if (questionNumber < selectedDeck.content.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      setQuestionNumber(0);
    }
    setCardSide("front");
  };

  // Decrements the question number to display the previous card's front side
  const decrementQuestionNumber = () => {
    if (questionNumber === 0) {
      setQuestionNumber(selectedDeck.content.length - 1);
    } else {
      setQuestionNumber(questionNumber - 1);
    }
    setCardSide("front");
  };

  return (
    <div className="home-page">
      <div className="sidebar-block"></div>
      {quizMode === false ? (
        <div>
          <h1 className="home-page-title">Dashboard</h1>
          <p>Select a deck to get started!</p>
        </div>
      ) : (
        <div>
          <h1 className="home-page-title">Practice Time!</h1>
          <h2 className="selected-deck-title">{selectedDeck.data.name}</h2>
          <h3 className="card-number">{`${questionNumber + 1}/${
            selectedDeck.content.length
          }`}</h3>
          <div className="quiz-section">
            <BsCaretLeftFill
              className="change-question-button"
              onClick={decrementQuestionNumber}
            />
            <QuizCard
              selectedDeck={selectedDeck}
              questionNumber={questionNumber}
              cardSide={cardSide}
              setCardSide={setCardSide}
            />
            <BsFillCaretRightFill
              className="change-question-button"
              onClick={incrementQuestionNumber}
            />
          </div>
        </div>
      )}
    </div>
  );
}