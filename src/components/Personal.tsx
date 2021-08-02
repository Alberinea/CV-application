import handleOnchange from '../Utils';

interface Props {
  setName: React.Dispatch<React.SetStateAction<string>>;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const Personal: React.FC<Props> = ({
  setName,
  setTitle,
  setPhone,
  setEmail,
  setLocation,
}): JSX.Element => {
  return (
    <div>
      <h3>Personal Details</h3>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => handleOnchange(e, setName, 'Name')}
        required
      />
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => handleOnchange(e, setTitle, 'Title')}
        required
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => handleOnchange(e, setPhone, 'Phone')}
        required
      />
      <input
        type="text"
        placeholder="E-mail"
        onChange={(e) => handleOnchange(e, setEmail, 'E-mail')}
        required
      />
      <input
        type="text"
        placeholder="Location"
        onChange={(e) => handleOnchange(e, setLocation, 'Location')}
        required
      />
    </div>
  );
};

export default Personal;
