import { handleImage } from '../Utils';
import './Header.css';

interface Props {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<Props> = ({ setImage }): JSX.Element => {
  return (
    <header className="header">
      <h1 className="headerText">CV Maker</h1>
      <div>
        <label htmlFor="upload">
          Change profile picture
          <input
            id="upload"
            type="file"
            accept="image/jpeg, image/png"
            onChange={(e) => handleImage(e, setImage)}
          />
        </label>
      </div>
    </header>
  );
};

export default Header;
