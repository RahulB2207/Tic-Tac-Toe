const Log = ({ turn }) => {
  return (
    <ol id="log">
      {turn.map((item) => (
        <li key={`${item.square.row},${item.square.col}`}>
          {item.player} Selected {item.square.row},{item.square.col} Container
        </li>
      ))}
    </ol>
  );
};

export default Log;
