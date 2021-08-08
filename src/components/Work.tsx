import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import {
  WorkProps,
  handleName,
  handleTo,
  handleFrom,
  handleDetails,
  pushWorkState,
  removeState,
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
        <AddCircleOutlineIcon
          className="icon"
          onClick={() => pushWorkState(work, setWork, 'Company Name')}
        />
        <RemoveCircleOutlineIcon
          className="icon"
          onClick={() => removeState(work, setWork)}
        />
      </div>
      {work.map((arg, index) => {
        return (
          <div key={arg.id}>
            <input
              type="text"
              placeholder={Object.keys(arg)[1]}
              onChange={(e) => handleName(e, work, setWork, index)}
              maxLength={50}
            />
            <input
              type="text"
              placeholder={Object.keys(arg)[2]}
              onChange={(e) => handleFrom(e, work, setWork, index)}
              maxLength={12}
            />
            <input
              type="text"
              placeholder={Object.keys(arg)[3]}
              onChange={(e) => handleTo(e, work, setWork, index)}
              maxLength={12}
            />
            <input
              type="text"
              placeholder={Object.keys(arg)[4]}
              onChange={(e) => handleDetails(e, work, setWork, index)}
              maxLength={300}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Work;
