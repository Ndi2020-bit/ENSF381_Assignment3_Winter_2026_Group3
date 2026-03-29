function DisplayStatus({ type, message }) {
  const color = type === 'success' ? 'green' : 'red';

  return (
    <div style={{ color }}>
      <p>{message}</p>
    </div>
  );
}

export default DisplayStatus;