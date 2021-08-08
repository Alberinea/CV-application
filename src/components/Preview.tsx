import React, { useRef } from 'react';
import getContrastRatio from 'get-contrast-ratio';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import { WorkProps, SkillProps } from '../Utils';
import '../styles/Preview.css';

interface Props {
  color: string;
  name: string;
  title: string;
  phone: string;
  email: string;
  location: string;
  description: string;
  image: string;
  work: WorkProps[];
  education: WorkProps[];
  professionalSkills: SkillProps[];
  softSkills: SkillProps[];
}

const Preview = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      color,
      name,
      title,
      phone,
      email,
      location,
      image,
      description,
      work,
      education,
      professionalSkills,
      softSkills,
    },
    ref
  ): JSX.Element => {
    const pRef = useRef<HTMLParagraphElement>(null);

    return (
      <div ref={ref} className="previewWrapper">
        <div
          className="top"
          style={
            getContrastRatio('white', color) < 7
              ? { color: 'black', backgroundColor: color }
              : { color: 'white', backgroundColor: color }
          }
        >
          <div className="imageWrapper">
            <img src={image} alt="Profile" />
          </div>
          <div className="nameWrapper">
            <h1>{name}</h1>
            <h2>{title}</h2>
          </div>
          <div className="detailsWrapper">
            <p style={{ whiteSpace: 'nowrap' }}>{phone}</p>
            <p ref={pRef}>{email}</p>
            <p>{location}</p>
          </div>
          <div className="iconsWrapper">
            <p>
              <PhoneIcon className="icons" />
            </p>
            <p>
              <EmailIcon className="icons" />
            </p>
            <p
              style={
                pRef.current && pRef.current.clientHeight > 30
                  ? { paddingTop: '14px' }
                  : { paddingTop: '0' }
              }
            >
              <LocationOnIcon className="icons" />
            </p>
          </div>
        </div>
        <div className="wrapper">
          <h3 className="border" style={{ borderBottom: `1px solid ${color}` }}>
            <AccountBoxIcon className="iconsBig" /> PROFILE
          </h3>
          <p>{description}</p>
        </div>
        <div className="wrapper">
          {work.length > 0 && (
            <h3
              className="border"
              style={{ borderBottom: `1px solid ${color}` }}
            >
              <WorkIcon className="iconsBig" /> WORK EXPERIENCE
            </h3>
          )}
          {work.map((arg) => {
            return (
              <div key={arg.id} className="flex">
                <div className="companyWrapper">
                  <h5>{arg.Name}</h5>
                  <div className="flex">
                    <h5>{arg.From}</h5> &nbsp; - &nbsp; <h5>{arg.To}</h5>
                  </div>
                </div>
                <p className="text">{arg.Details}</p>
              </div>
            );
          })}
        </div>
        <div className="wrapper">
          {education.length > 0 && (
            <h3
              className="border"
              style={{ borderBottom: `1px solid ${color}` }}
            >
              <SchoolIcon className="iconsBig" /> EDUCATION
            </h3>
          )}
          {education.map((arg) => {
            return (
              <div key={arg.id} className="flex">
                <div className="companyWrapper">
                  <h5>{arg.Name}</h5>
                  <div className="flex">
                    <h5>{arg.From}</h5> &nbsp; - &nbsp; <h5>{arg.To}</h5>
                  </div>
                </div>
                <p className="text">{arg.Details}</p>
              </div>
            );
          })}
        </div>
        <div
          style={
            getContrastRatio('white', color) < 7
              ? { color: 'black' }
              : { color: 'white' }
          }
          className="wrapper"
        >
          {professionalSkills.length > 0 && (
            <h3
              className="border"
              style={{ borderBottom: `1px solid ${color}` }}
            >
              PROFESSIONAL SKILLS
            </h3>
          )}
          {professionalSkills.length > 0 && (
            <div className="flexWrap">
              {professionalSkills.map((arg) => {
                return (
                  <p
                    key={arg.id}
                    className="skill"
                    style={{ backgroundColor: color }}
                  >
                    {arg.skill}
                  </p>
                );
              })}
            </div>
          )}
        </div>
        <div
          style={
            getContrastRatio('white', color) < 7
              ? { color: 'black' }
              : { color: 'white' }
          }
          className="wrapper"
        >
          {softSkills.length > 0 && (
            <h3
              className="border"
              style={{ borderBottom: `1px solid ${color}` }}
            >
              SOFT SKILLS
            </h3>
          )}
          {softSkills.length > 0 && (
            <div className="flexWrap">
              {softSkills.map((arg) => {
                return (
                  <p
                    key={arg.id}
                    className="skill"
                    style={{ backgroundColor: color }}
                  >
                    {arg.skill}
                  </p>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Preview;
