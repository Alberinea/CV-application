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
        maxLength={28}
      />
      <input
        type="text"
        placeholder="Title"
        onChange={(e) => handleOnchange(e, setTitle, 'Title')}
        maxLength={38}
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => handleOnchange(e, setPhone, 'Phone')}
        maxLength={15}
      />
      <input
        type="text"
        placeholder="E-mail"
        onChange={(e) => handleOnchange(e, setEmail, 'E-mail')}
        maxLength={30}
      />
      <input
        type="text"
        placeholder="Location"
        onChange={(e) => handleOnchange(e, setLocation, 'Location')}
        maxLength={60}
      />
    </div>
  );
};

export default Personal;
