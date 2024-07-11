function Time() {

  // const now = new Date();
  // const hours = now.getHours();
  // const minutes = String(now.getMinutes()).padStart(2, "0");
  // const seconds = String(now.getSeconds()).padStart(2, "0");
  // const date = String(now.getDate()).padStart(2, "0");
  // const month = String(now.getMonth()).padStart(2, "0");
  // const year = String(now.getDate()).padStart(2, "0");

  const time = new Date()

  return (
    <p className="lead" >
      This is the Current Time: {time.toLocaleDateString()}-{time.toLocaleTimeString()}
    </p>
  );
}

export default Time;
