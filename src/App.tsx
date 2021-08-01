import Header from './components/Header';
import Preview from './components/Preview';
import Personal from './components/Personal';
import Description from './components/Description';
import Work from './components/Work';
import Education from './components/Education';
import Skill from './components/Skill';
import './App.css';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="inputWrapper">
        <Personal />
        <Description />
        <Work />
        <Education />
        <Skill />
      </div>
      <Preview />
    </>
  );
};

export default App;
