import { useState } from 'react';

import Input from './input/Input';
import Preview from './preview/Preview';

const Main = (): JSX.Element => {
  const PROFILE_PLACEHOLDER =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const MEDIUM_PLACEHOLDER =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

  const [name, setName] = useState('Name');
  const [title, setTitle] = useState('Title');
  const [phone, setPhone] = useState('Phone');
  const [email, setEmail] = useState('E-mail');
  const [location, setLocation] = useState('Location');
  const [profile, setProfile] = useState(PROFILE_PLACEHOLDER);
  const [companyName, setCompanyName] = useState('Company Name');
  const [workingPeriodFrom, setWorkingPeriodForm] = useState('From');
  const [workingPeriodTo, setWorkingPeriodTo] = useState('To');
  const [workDetails, setWorkDetails] = useState(MEDIUM_PLACEHOLDER);
  const [institutionName, setInstitutionName] = useState('Institution Name');
  const [studyFrom, setStudyFrom] = useState('From');
  const [studyTo, setStudyTo] = useState('To');
  const [educationDetails, setEducationDetails] = useState(MEDIUM_PLACEHOLDER);
  const [professionalSkills, setProfessionalSkills] =
    useState('Professional Skill');
  const [softSkills, setSoftSkills] = useState('Soft Skill');

  const personals = [
    {
      name,
      setState: setName,
    },
    {
      name: title,
      setState: setTitle,
    },
    {
      name: phone,
      setState: setPhone,
    },
    {
      name: email,
      setState: setEmail,
    },
    {
      name: location,
      setState: setLocation,
    },
  ];
  const description = { name: profile, setState: setProfile };
  const experience = [
    {
      name: companyName,
      setState: setCompanyName,
    },
    {
      name: workingPeriodFrom,
      setState: setWorkingPeriodForm,
    },
    {
      name: workingPeriodTo,
      setState: setWorkingPeriodTo,
    },
    {
      name: workDetails,
      setState: setWorkDetails,
    },
  ];
  const education = [
    {
      name: institutionName,
      setState: setInstitutionName,
    },
    {
      name: studyFrom,
      setState: setStudyFrom,
    },
    {
      name: studyTo,
      setState: setStudyTo,
    },
    {
      name: educationDetails,
      setState: setEducationDetails,
    },
  ];
  const proSkills = [
    {
      name: professionalSkills,
      setState: setProfessionalSkills,
    },
  ];
  const skills = [
    {
      name: softSkills,
      setState: setSoftSkills,
    },
  ];

  return (
    <main>
      <Input
        personals={personals}
        description={description}
        experience={experience}
        education={education}
        proSkills={proSkills}
        skills={skills}
      />
      <Preview
        personals={personals}
        description={description}
        experience={experience}
        education={education}
        proSkills={proSkills}
        skills={skills}
      />
    </main>
  );
};

export default Main;
