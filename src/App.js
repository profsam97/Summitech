import React, { lazy, useEffect } from 'react';
import PropTypes from 'prop-types';
import PageLayout from './layouts/PageLayout';
import PageRoute from './layouts/PageRoute';
import { Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));

const Scroll = (props) => {
  const {location, children} = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

Scroll.propTypes = {
  location: PropTypes.oneOfType([PropTypes.object]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

const ScrollToTop = withRouter(Scroll);

const App = () => (
    
    <ScrollToTop>
      <Switch>
        <PageRoute exact path="/" layout={PageLayout} component={Home} />
      </Switch>
    </ScrollToTop>
);

export default App;
