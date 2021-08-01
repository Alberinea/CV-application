import './Preview.css';

interface Props {
  personals: {
    name: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
  }[];
  description: {
    name: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
  };
  experience: {
    name: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
  }[];
  education: {
    name: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
  }[];
  proSkills: {
    name: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
  }[];
  skills: {
    name: string;
    setState: React.Dispatch<React.SetStateAction<string>>;
  }[];
}

const Preview: React.FC<Props> = ({
  personals,
  description,
  experience,
  education,
  proSkills,
  skills,
}): JSX.Element => {
  return (
    <div className="previewWrapper">
      <div className="top">
        <div className="image" />
        <div className="nameWrapper">
          <h1>{personals[0].name}</h1>
          <h2>{personals[1].name}</h2>
        </div>
        <div className="detailsWrapper">
          <p>{personals[2].name}</p>
          <p>{personals[3].name}</p>
          <p>{personals[4].name}</p>
        </div>
      </div>
      <div className="wrapper">
        <h3 className="border">PROFILE</h3>
        <p>{description.name}</p>
      </div>
      <div className="wrapper">
        <h3 className="border">WORK EXPERIENCE</h3>
        <div className="flex">
          <div className="companyWrapper">
            <h5>{experience[0].name}</h5>
            <div className="flex">
              <h5>{experience[1].name}</h5> &nbsp; - &nbsp;{' '}
              <h5>{experience[2].name}</h5>
            </div>
          </div>
          <p className="text">{experience[3].name}</p>
        </div>
      </div>
      <div className="wrapper">
        <h3 className="border">EDUCATION</h3>
        <div className="flex">
          <div className="companyWrapper">
            <h5>{education[0].name}</h5>
            <div className="flex">
              <h5>{education[1].name}</h5> &nbsp; - &nbsp;{' '}
              <h5>{education[2].name}</h5>
            </div>
          </div>
          <p className="text">{education[3].name}</p>
        </div>
      </div>
      <div className="wrapper">
        <h3 className="border">PROFESSIONAL SKILLS</h3>
        <div className="flexWrap">
          <p className="skill">{proSkills[0].name}</p>
        </div>
      </div>
      <div className="wrapper">
        <h3 className="border">SOFT SKILLS</h3>
        <div className="flexWrap">
          <p className="skill">{skills[0].name}</p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
