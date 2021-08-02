import { Add } from '@material-ui/icons';
import {
  WorkProps,
  handleName,
  handleTo,
  handleFrom,
  handleDetails,
  pushWorkState,
} from '../Utils';

interface Props {
  education: WorkProps[];
  setEducation: React.Dispatch<React.SetStateAction<WorkProps[]>>;
}

const Education: React.FC<Props> = ({
  education,
  setEducation,
}): JSX.Element => {
  return (
    <div>
      <div className="flex">
        <h3>Education</h3>
        <Add
          className="icon"
          onClick={() =>
            pushWorkState(education, setEducation, 'Institution Name')
          }
        />
      </div>
      {education.map((arg, index) => {
        return (
          <div key={arg.id}>
            <input
              type="text"
              placeholder={Object.keys(arg)[1]}
              onChange={(e) => handleName(e, education, setEducation, index)}
            />
            <input
              type="text"
              placeholder={Object.keys(arg)[2]}
              onChange={(e) => handleFrom(e, education, setEducation, index)}
            />
            <input
              type="text"
              placeholder={Object.keys(arg)[3]}
              onChange={(e) => handleTo(e, education, setEducation, index)}
            />
            <input
              type="text"
              placeholder={Object.keys(arg)[4]}
              onChange={(e) => handleDetails(e, education, setEducation, index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Education;
