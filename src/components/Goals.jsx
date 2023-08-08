function Goal({ name }) {
  return <li>{name}</li>;
}

export default function Goals() {
  return (
    <div className="grid-child goals">
      <h2 className="h2">My Goals</h2>
      <Goal name="Experience an office environment" />
      <Goal name="Meet people and make connections" />
      <Goal name="Obtain a better understanding of how programming languages work/interact with eachother" />
    </div>
  );
}
