import { useEffect, useState } from "react";

const TypingGroupLoop = ({
  items = [],
  speed = 55,
  deleteSpeed = 35,
  pause = 1600,
  titleStyle,
}) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const current = items[index] || { title: "" };

  useEffect(() => {
    let timeout;

    if (!deleting) {
      if (text.length < current.title.length) {
        timeout = setTimeout(() => {
          setText(current.title.slice(0, text.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(current.title.slice(0, text.length - 1));
        }, deleteSpeed);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % items.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, index, items, speed, deleteSpeed, pause, current.title]);

  return <span style={titleStyle}>{text}</span>;
};

export default TypingGroupLoop;
