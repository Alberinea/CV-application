const Work = (): JSX.Element => {
  return (
    <div>
      <div className="flex">
        <h3>Work Experience</h3>
        {/* <Add className="icon" /> */}
      </div>
      {/* {experience.map((arg) =>
            arg.map(({ name, setState }) => {
              return (
                <input
                  key={uuidv4()}
                  type="text"
                  placeholder={name.length > 20 ? 'Details' : name}
                  onChange={(e) => {
                    setState(e.currentTarget.value);
                    console.log(e.currentTarget.value);
                  }}
                />
              );
            })
          )} */}
    </div>
  );
};

export default Work;
