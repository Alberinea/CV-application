const Description = (): JSX.Element => {
  return (
    <div>
      <h3>Profile Description</h3>
      <textarea
        placeholder="Description"
        // onInput={(e) => description.setState(e.currentTarget.value)}
      />
    </div>
  );
};

export default Description;
