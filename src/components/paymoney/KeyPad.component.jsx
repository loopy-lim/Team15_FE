export const KeyPad = ({ onClose, onNumberClick }) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const handleNumberClick = (number) => {
    onNumberClick(number);
  };

  return (
    <div className="bg-gray-100 p-4 w-1/3 h-96 rounded-lg fixed bottom-16 left-4">
      <div className="grid grid-cols-3 gap-4">
        {numbers.map((number) => (
          <button
            key={number}
            className="bg-gray-100 p-2 text-2xl rounded-md"
            onClick={() => handleNumberClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <button className="text-white font-semibold" onClick={onClose}>
        x
      </button>
    </div>
  );
};
