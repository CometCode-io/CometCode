import React from 'react';
import { Result } from 'antd';
import { Button } from 'antd/lib/radio';
import NavComponent from '../components/nav';
import { Link } from 'gatsby';

const notFoundPage: React.FC = () => {
  return (
    <NavComponent activeLink={'/404'}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button>
            <Link to="/">Back Home</Link>
          </Button>
        }
      />
    </NavComponent>
  );
};

export default notFoundPage;
