import { WorkProps, SkillProps } from '../Utils';
import './Preview.css';

interface Props {
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  description: string;
  image: string;
  work: WorkProps[];
  education: WorkProps[];
  professionalSkills: SkillProps[];
  softSkills: SkillProps[];
}

const Preview: React.FC<Props> = ({
  name,
  title,
  phone,
  email,
  location,
  image,
  description,
  work,
  education,
  professionalSkills,
  softSkills,
}): JSX.Element => {
  return (
    <div className="previewWrapper">
      <div className="top">
        <div className="imageWrapper">
          <img src={image} alt="Profile" />
        </div>
        <div className="nameWrapper">
          <h1>{name}</h1>
          <h2>{title}</h2>
        </div>
        <div className="detailsWrapper">
          <p>{phone}</p>
          <p>{email}</p>
          <p>{location}</p>
        </div>
      </div>
      <div className="wrapper">
        <h3 className="border">PROFILE</h3>
        <p>{description}</p>
      </div>
      <div className="wrapper">
        <h3 className="border">WORK EXPERIENCE</h3>
        {work.map((arg) => {
          return (
            <div key={arg.id} className="flex">
              <div className="companyWrapper">
                <h5>{arg.Name}</h5>
                <div className="flex">
                  <h5>{arg.From}</h5> &nbsp; - &nbsp; <h5>{arg.To}</h5>
                </div>
              </div>
              <p className="text">{arg.Details}</p>
            </div>
          );
        })}
      </div>
      <div className="wrapper">
        <h3 className="border">EDUCATION</h3>
        {education.map((arg) => {
          return (
            <div key={arg.id} className="flex">
              <div className="companyWrapper">
                <h5>{arg.Name}</h5>
                <div className="flex">
                  <h5>{arg.From}</h5> &nbsp; - &nbsp; <h5>{arg.To}</h5>
                </div>
              </div>
              <p className="text">{arg.Details}</p>
            </div>
          );
        })}
      </div>
      <div className="wrapper">
        <h3 className="border">PROFESSIONAL SKILLS</h3>
        <div className="flexWrap">
          {professionalSkills.map((arg) => {
            return (
              <p key={arg.id} className="skill">
                {arg.skill}
              </p>
            );
          })}
        </div>
      </div>
      <div className="wrapper">
        <h3 className="border">SOFT SKILLS</h3>
        <div className="flexWrap">
          {softSkills.map((arg) => {
            return (
              <p key={arg.id} className="skill">
                {arg.skill}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Preview;
