import { useState } from 'react';
import { v4 } from 'uuid';
import { MEDIUM_PLACEHOLDER } from './Utils';
import Header from './components/Header';
import Preview from './components/Preview';
import Personal from './components/Personal';
import Description, { PLACEHOLDER } from './components/Description';
import Work from './components/Work';
import Education from './components/Education';
import Skill from './components/Skill';
import './App.css';

const App = (): JSX.Element => {
  const [name, setName] = useState('Name');
  const [title, setTitle] = useState('Title');
  const [phone, setPhone] = useState('Phone');
  const [email, setEmail] = useState('E-mail');
  const [location, setLocation] = useState('Location');
  const [description, setDescription] = useState(PLACEHOLDER);
  const [work, setWork] = useState([
    {
      id: v4(),
      Name: 'Company Name',
      From: 'From',
      To: 'To',
      Details: MEDIUM_PLACEHOLDER,
    },
  ]);
  const [education, setEducation] = useState([
    {
      id: v4(),
      Name: 'Institution Name',
      From: 'From',
      To: 'To',
      Details: MEDIUM_PLACEHOLDER,
    },
  ]);
  const [professionalSkills, setProfessionalSkills] = useState([
    { skill: 'Skill', id: v4() },
  ]);
  const [softSkills, setSoftSkills] = useState([{ skill: 'Skill', id: v4() }]);

  return (
    <>
      <Header />
      <div className="inputWrapper">
        <Personal
          setName={setName}
          setTitle={setTitle}
          setPhone={setPhone}
          setEmail={setEmail}
          setLocation={setLocation}
        />
        <Description setDescription={setDescription} />
        <Work work={work} setWork={setWork} />
        <Education education={education} setEducation={setEducation} />
        <Skill
          professionalSkills={professionalSkills}
          setProfessionalSkills={setProfessionalSkills}
          softSkills={softSkills}
          setSoftSkills={setSoftSkills}
        />
      </div>
      <Preview
        name={name}
        title={title}
        phone={phone}
        email={email}
        location={location}
        description={description}
        work={work}
        education={education}
        professionalSkills={professionalSkills}
        softSkills={softSkills}
      />
    </>
  );
};

export default App;
