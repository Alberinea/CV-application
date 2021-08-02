import { Add } from '@material-ui/icons';
import { SkillProps, handleSkill, pushSkillState } from '../Utils';

interface Props {
  professionalSkills: SkillProps[];
  setProfessionalSkills: React.Dispatch<React.SetStateAction<SkillProps[]>>;
  softSkills: SkillProps[];
  setSoftSkills: React.Dispatch<React.SetStateAction<SkillProps[]>>;
}

const Skill: React.FC<Props> = ({
  professionalSkills,
  setProfessionalSkills,
  softSkills,
  setSoftSkills,
}): JSX.Element => {
  return (
    <>
      <div>
        <div className="flex">
          <h3>Professional Skills</h3>
          <Add
            className="icon"
            onClick={() =>
              pushSkillState(professionalSkills, setProfessionalSkills)
            }
          />
        </div>
        {professionalSkills.map((arg, index) => {
          return (
            <input
              key={arg.id}
              type="text"
              placeholder="Professional Skill"
              onChange={(e) =>
                handleSkill(e, professionalSkills, setProfessionalSkills, index)
              }
            />
          );
        })}
      </div>
      <div>
        <div className="flex">
          <h3>Soft Skills</h3>
          <Add
            className="icon"
            onClick={() => pushSkillState(softSkills, setSoftSkills)}
          />
        </div>
        {softSkills.map((arg, index) => {
          return (
            <input
              key={arg.id}
              type="text"
              placeholder="Soft Skill"
              onChange={(e) => handleSkill(e, softSkills, setSoftSkills, index)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Skill;
