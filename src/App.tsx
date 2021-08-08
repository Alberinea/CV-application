import { useState, useRef } from 'react';
import { v4 } from 'uuid';
import { MEDIUM_PLACEHOLDER } from './Utils';
import Header from './components/Header';
import Preview from './components/Preview';
import Personal from './components/Personal';
import Description, { PLACEHOLDER } from './components/Description';
import Work from './components/Work';
import Education from './components/Education';
import Skill from './components/Skill';
import HtmlToImage from './components/HtmlToImage';
import './styles/App.css';

const DEFAULT_PROFILE =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

const App = (): JSX.Element => {
  const downloadRef = useRef<HTMLDivElement>(null);

  const [color, setColor] = useState('#59A0E2');
  const [name, setName] = useState('Name');
  const [title, setTitle] = useState('Title');
  const [phone, setPhone] = useState('Phone');
  const [email, setEmail] = useState('E-mail');
  const [location, setLocation] = useState('Location');
  const [image, setImage] = useState(DEFAULT_PROFILE);
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
      <Header setImage={setImage} setColor={setColor} />
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
        <HtmlToImage ref={downloadRef} />
      </div>
      <Preview
        ref={downloadRef}
        color={color}
        name={name}
        title={title}
        phone={phone}
        email={email}
        location={location}
        image={image}
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
