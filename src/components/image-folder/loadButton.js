import { useState, useEffect } from 'react';
function LoadButton({ length, onSubmit }) {
  [length] = useState(1);

  useEffect(() => {
    if (length > 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [length]);

  return (
    <button type="button" className="loadBtn" onSubmit={onSubmit}>
      Load more
    </button>
  );
}
export default LoadButton;
