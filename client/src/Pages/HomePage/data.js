export const Deck = [
  {
    id: 0,
    data: { name: "React Study" },
    content: [
      {
        front: "What is `state`?",
        back: "All the internal data that defines an application at a given point in time",
      },
      {
        front: "What is React's approach to reactive UI rendering?",
        back: "You declare how state is represented as visual elements of the DOM. From then on, React automatically updates the DOM to reflect state changes.",
      },
      {
        front: "What are components?",
        back: "Self-contained, concern-specific building blocks that are easy to reuse, extend and maintain.",
      },
      {
        front: "How did the web `used` to work?",
        back: "For every interaction the user performed on a page, a whole new page was sent from the server (even if this new page was only a slightly different version of the page the user was on). ",
      },
    ],
  },
  {
    id: 1,
    data: { name: "MERN Stacks" },
    content: [
      {
        front: "What are the arguments to useEffect?",
        back: "1st arg is the effect (a callback function), and 2nd is an array of values to compare (just like a componentDidUpdate conditional)",
      },
      {
        front: "What is the argument of useState? It's return value?",
        back: "Argument: initial state. Return: array [theStateVar, setter]",
      },
      {
        front: "By default when do react components render?",
        back: "When state or props change",
      },
    ],
  },
];
