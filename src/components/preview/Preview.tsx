// import Input from '../input/Input';
import './Preview.css';

const Preview = (): JSX.Element => {
  return (
    <div className="previewWrapper">
      <div className="top">
        <div className="image" />
        <div className="nameWrapper">
          <h1>Name</h1>
          <h2>Title</h2>
        </div>
        <div className="detailsWrapper">
          <p>Phone</p>
          <p>Email</p>
          <p>Location</p>
        </div>
      </div>
      <div className="wrapper">
        <h3 className="border">PROFILE</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="wrapper">
        <h3 className="border">WORK EXPERIENCE</h3>
      </div>
      <div className="wrapper">
        <h3 className="border">EDUCATION</h3>
      </div>
      <div className="wrapper">
        <h3 className="border">SKILLS</h3>
      </div>
    </div>
  );
};

export default Preview;
