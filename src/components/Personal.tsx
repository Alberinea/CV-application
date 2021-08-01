const Personal = (): JSX.Element => {
  return (
    <div>
      <h3>Personal Details</h3>
      {/* {personals.map((arg) =>
            arg.map(({ name, setState }) => {
              return (
                <input
                  key={name}
                  type="text"
                  placeholder={name}
                  onChange={(e) => setState(e.currentTarget.value)}
                />
              );
            })
          )} */}
    </div>
  );
};

export default Personal;
