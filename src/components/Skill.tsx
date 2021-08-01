const Skill = (): JSX.Element => {
  return (
    <>
      <div>
        <div className="flex">
          <h3>Professional Skills</h3>
          {/* <Add className="icon" /> */}
        </div>
        {/* {proSkills.map((arg) =>
            arg.map(({ name, setState }) => {
              return (
                <input
                  key={uuidv4()}
                  type="text"
                  placeholder={name}
                  onInput={(e) => setState(e.currentTarget.value)}
                />
              );
            })
          )} */}
      </div>
      <div>
        <div className="flex">
          <h3>Soft Skills</h3>
          {/* <Add className="icon" /> */}
        </div>
        {/* {skills.map((arg) =>
            arg.map(({ name, setState }) => {
              return (
                <input
                  key={uuidv4()}
                  type="text"
                  placeholder={name}
                  onInput={(e) => setState(e.currentTarget.value)}
                />
              );
            })
          )} */}
      </div>
    </>
  );
};

export default Skill;
