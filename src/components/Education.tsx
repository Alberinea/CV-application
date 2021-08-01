const Education = (): JSX.Element => {
  return (
    <div>
      <div className="flex">
        <h3>Education</h3>
        {/* <Add
              className="icon"
              onClick={() => {
                setStateEducation([...education, stateEducation]);
              }}
            /> */}
      </div>
      {/* {education.map((arg) =>
            arg.map(({ name, setState }) => {
              return (
                <input
                  key={uuidv4()}
                  type="text"
                  placeholder={name.length > 20 ? 'Details' : name}
                  onInput={(e) => setState(e.currentTarget.value)}
                />
              );
            })
          )} */}
    </div>
  );
};

export default Education;
