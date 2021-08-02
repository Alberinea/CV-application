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
  work: WorkProps[];
  setWork: React.Dispatch<React.SetStateAction<WorkProps[]>>;
}

const Work: React.FC<Props> = ({ work, setWork }): JSX.Element => {
  return (
    <div>
      <div className="flex">
        <h3>Work Experience</h3>
        <Add
          className="icon"
          onClick={() => pushWorkState(work, setWork, 'Company Name')}
        />
      </div>
      {work.map((arg, index) => {
        return (
          <div key={arg.id}>
            <input
              type="text"
              placeholder={Object.keys(arg)[1]}
              onChange={(e) => handleName(e, work, setWork, index)}
            />
            <input
              type="text"
              placeholder={Object.keys(arg)[2]}
              onChange={(e) => handleFrom(e, work, setWork, index)}
            />
            <input
              type="text"
              placeholder={Object.keys(arg)[3]}
              onChange={(e) => handleTo(e, work, setWork, index)}
            />
            <input
              type="text"
              placeholder={Object.keys(arg)[4]}
              onChange={(e) => handleDetails(e, work, setWork, index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Work;
