function Hobby({ name }) {
  return <div>{name}</div>;
}

export default function Hobbies() {
  return (
    <div className="grid-child hobbies">
      <h2 className="h2">My Hobbies</h2>
      <Hobby name="Crochet" />
      <Hobby name="Cooking" />
      <Hobby name="Reading" />
      <Hobby name="Hiking" />
      <Hobby name="Traveling" />
      <Hobby name="Watching Movies" />
    </div>
  );
}