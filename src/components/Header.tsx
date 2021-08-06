import { handleImage } from '../Utils';
import '../styles/Header.css';

interface Props {
  setImage: React.Dispatch<React.SetStateAction<string>>;
  setColor: React.Dispatch<React.SetStateAction<string>>;
}

const Header: React.FC<Props> = ({ setImage, setColor }): JSX.Element => {
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
        <label htmlFor="color" className="colorContainer">
          Change theme color
          <input
            id="color"
            type="color"
            onChange={(e) => setColor(e.currentTarget.value)}
          />
        </label>
      </div>
    </header>
  );
};

export default Header;
