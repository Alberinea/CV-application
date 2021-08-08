import handleOnchange from '../Utils';

export const PLACEHOLDER =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

interface Props {
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

const Description: React.FC<Props> = ({ setDescription }): JSX.Element => {
  return (
    <div>
      <h3>Profile Description</h3>
      <textarea
        placeholder="Description"
        onChange={(e) => handleOnchange(e, setDescription, PLACEHOLDER)}
        maxLength={800}
      />
    </div>
  );
};

export default Description;
