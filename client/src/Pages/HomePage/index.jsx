import React, { useState,useEffect } from "react";
import SideBar from "../../components/Sidebar/SideBar";
// import Deck from "../../components/Deck";
import { deckData } from "./deckData";
import CardPage from "../../components/Dashboard/CardPage";

function Page() {
  const [userDecks, setUserDecks] = useState([]);
  const [selectedDeck, setSelectedDeck] = useState({});
  const [addQuestionsView, setAddQuestionsView] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [cardSide, setCardSide] = useState("front");
  useEffect(() => {
    const data = localStorage.getItem("deck-list");
    if (data) {
      setUserDecks(JSON.parse(data));
    } else {
      setUserDecks(deckData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("deck-list", JSON.stringify(userDecks));
  });

  const createNewDeck = () => {
    const newDeck = {
      id: userDecks.length,
      data: { name: "Click title area to name your new deck" },
      content: [],
    };
    setUserDecks([...userDecks, newDeck]);
  };

  const addCard = () => {
    const newCard = { front: "Front Side", back: "Back Side" };
    const newCardList = [...selectedDeck.content, newCard];
    const index = selectedDeck.id;

    const updatedDeckData = {
      id: index,
      data: selectedDeck.data,
      content: newCardList,
    };

    setSelectedDeck(updatedDeckData);

    const newDecks = [...userDecks];

    newDecks
      .filter((deck) => deck.id !== selectedDeck.id)
      .splice(index, 1, updatedDeckData);

    setUserDecks(newDecks);
  };

  const deleteCard = (currentCard) => {
    const filteredCardList = selectedDeck.content.filter(
      (card) => card.front !== currentCard.front
    );
    userDecks.filter((deck) => deck.id !== selectedDeck.id);

    const newSelectedDeck = {
      id: selectedDeck.id,
      data: selectedDeck.data,
      content: filteredCardList,
    };
    setSelectedDeck(newSelectedDeck);

    const newDecks = [...userDecks];
    newDecks.splice(selectedDeck.id, 1, newSelectedDeck);

    setUserDecks(newDecks);
  };

  const updateCard = (index, front, back) => {
    const newCardData = { front: front, back: back };

    const cardList = [...selectedDeck.content];
    cardList.splice(index, 1, newCardData);

    const newSelectedDeckData = {
      id: selectedDeck.id,
      data: selectedDeck.data,
      content: cardList,
    };
    setSelectedDeck(newSelectedDeckData);

    const newDecks = [...userDecks];

    newDecks.splice(selectedDeck.id, 1, newSelectedDeckData);

    setUserDecks(newDecks);
  };

  const removeDeck = (deck) => {
    const updatedDeckList = [...userDecks];
    updatedDeckList.splice(deck.id, 1);
    setUserDecks(updatedDeckList);
  };


  return (
        <> 
  <SideBar
        userDecks={userDecks}
        setUserDecks={setUserDecks}
        removeDeck={removeDeck}
        createNewDeck={createNewDeck}
        addQuestionsView={addQuestionsView}
        setAddQuestionsView={setAddQuestionsView}
        selectedDeck={selectedDeck}
        setSelectedDeck={setSelectedDeck}
        addCard={addCard}
        quizMode={quizMode}
        setQuizMode={setQuizMode}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        cardSide={cardSide}
        setCardSide={setCardSide}
        deleteCard={deleteCard}
        updateCard={updateCard}
    />

{/* {userDecks.map(deck => {
  return <Deck
  deck={deck}
  // userDecks={userDecks}
  // setUserDecks={setUserDecks}
  // quizMode={quizMode}
  // setQuizMode={setQuizMode}
  // selectedDeck={selectedDeck}
  // questionNumber={questionNumber}
  // // setQuestionNumber={setQuestionNumber}
  // cardSide={cardSide}
  // setCardSide={setCardSide}
  // deleteCard={deleteCard}
  // setSelectedDeck={setSelectedDeck}
/>
})} */}

<CardPage
  quizMode={quizMode}
  selectedDeck={selectedDeck}
  questionNumber={questionNumber}
  setQuestionNumber={setQuestionNumber}
  cardSide={cardSide}
  setCardSide={setCardSide}
/>
  </>
  );
}
export default Page