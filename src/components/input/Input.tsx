import './Input.css';

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

const Input: React.FC<Props> = ({
  personals,
  description,
  experience,
  education,
  proSkills,
  skills,
}): JSX.Element => {
  return (
    <div className="inputWrapper">
      <div>
        <h3>Personal Details</h3>
        {personals.map(({ name, setState }) => {
          return (
            <input
              type="text"
              placeholder={name}
              onInput={(e) => setState(e.currentTarget.value)}
            />
          );
        })}
      </div>
      <div>
        <h3>Profile Description</h3>
        <textarea
          placeholder="description"
          onInput={(e) => description.setState(e.currentTarget.value)}
        />
      </div>
      <div>
        <h3>Work Experience</h3>
        {experience.map(({ name, setState }) => {
          return (
            <input
              type="text"
              placeholder={name}
              onInput={(e) => setState(e.currentTarget.value)}
            />
          );
        })}
      </div>
      <div>
        <h3>Education</h3>
        {education.map(({ name, setState }) => {
          return (
            <input
              type="text"
              placeholder={name}
              onInput={(e) => setState(e.currentTarget.value)}
            />
          );
        })}
      </div>
      <div>
        <h3>Professional Skills</h3>
        {proSkills.map(({ name, setState }) => {
          return (
            <input
              type="text"
              placeholder={name}
              onInput={(e) => setState(e.currentTarget.value)}
            />
          );
        })}
      </div>
      <div>
        <h3>Soft Skills</h3>
        {skills.map(({ name, setState }) => {
          return (
            <input
              type="text"
              placeholder={name}
              onInput={(e) => setState(e.currentTarget.value)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Input;
