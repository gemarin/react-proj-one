import React from 'react';
import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';
function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>About This Project</h1>
        <p>
          This is a practice React app
          in order to intake feedback
          while learning React
          fundamentals
        </p>
        <p>
          <Link to='/'>
            Back to Home
          </Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
