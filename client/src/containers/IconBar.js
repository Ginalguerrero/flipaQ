import { RiHome4Line } from "react-icons/ri";

export default function IconBar({ setQuizMode, setAddQuestionsView }) {
  return (
    <div className="sidebar-icon-bar">
      <RiHome4Line
        className="sidebar-icon"
        onClick={() => {
          setQuizMode(false);
          setAddQuestionsView(false);
        }}
      />
    </div>
  );
}
