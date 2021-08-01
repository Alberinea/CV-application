import './Preview.css';

const arg = 'a';

const Preview = (): JSX.Element => {
  return (
    <div className="previewWrapper">
      <div className="top">
        <div className="image" />
        <div className="nameWrapper">
          <h1>{arg}</h1>
          <h2>{arg}</h2>
        </div>
        <div className="detailsWrapper">
          <p>{arg}</p>
          <p>{arg}</p>
          <p>{arg}</p>
        </div>
      </div>
      <div className="wrapper">
        <h3 className="border">PROFILE</h3>
        <p>{arg}</p>
      </div>
      <div className="wrapper">
        <h3 className="border">WORK EXPERIENCE</h3>
        {/* {experience.map((arg) => {
          return (
            <div key={uuidv4()} className="flex">
              <div className="companyWrapper">
                <h5>{arg[0].name}</h5>
                <div className="flex">
                  <h5>{arg[1].name}</h5> &nbsp; - &nbsp; <h5>{arg[2].name}</h5>
                </div>
              </div>
              <p className="text">{arg[3].name}</p>
            </div>
          );
        })} */}
      </div>
      <div className="wrapper">
        <h3 className="border">EDUCATION</h3>
        {/* {education.map((arg) => {
          return (
            <div key={uuidv4()} className="flex">
              <div className="companyWrapper">
                <h5>{arg[0].name}</h5>
                <div className="flex">
                  <h5>{arg[1].name}</h5> &nbsp; - &nbsp; <h5>{arg[2].name}</h5>
                </div>
              </div>
              <p className="text">{arg[3].name}</p>
            </div>
          );
        })} */}
      </div>
      <div className="wrapper">
        <h3 className="border">PROFESSIONAL SKILLS</h3>
        <div className="flexWrap">
          {/* {proSkills.map((arg) => {
            return (
              <p key={uuidv4()} className="skill">
                {arg[0].name}
              </p>
            );
          })}
        </div> */}
        </div>
      </div>
      <div className="wrapper">
        <h3 className="border">SOFT SKILLS</h3>
        {/* <div className="flexWrap">
            {skills.map((arg) => {
            return (
              <p key={uuidv4()} className="skill">
                {arg[0].name}
              </p>
            );
          })}
          </div> */}
      </div>
    </div>
  );
};

export default Preview;
