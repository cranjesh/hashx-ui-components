import React from 'react';
import Header from '../../atoms/Header/Header';
import Button from '../../atoms/Button/Button';
import './Page.css';

const Page = ({ children, ...rest }) => {
  return (
    <div className="page">
      <Header>Simple Page</Header>
      <br />
      <Button>Submit</Button>
      <Button>Cancel</Button>
    </div>
  )
}

export default Page;