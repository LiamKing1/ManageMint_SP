import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import ViewJobsPage from '../ViewJobs/ViewJobsPage';
import CreateJobPage from '../CreateJob/CreateJobPage';
import SubmitPage from '../JobSubmittedPage/JobSubmitted'
import DeleteJob from '../DeleteJob/DeleteJobPage';
import EditJob from '../EditJob/EditJobPage';
import DetailsPage from '../JobDetails/jobdetails';
import DeleteConfirmation from '../DeleteJob/DeleteConfirm';
import EditSuccess from '../EditJob/EditSuccess';
import SafetyAdvisory from '../CreateSafetyAd/CreateSafetyAd';
import OverTimeReview from '../OTSubmit/OTSubmit';
import EditSafetyAd from '../CreateSafetyAd/EditSafetyAd';
import DeleteSafetyAd from '../CreateSafetyAd/DeleteAdvisory';
import JobAssignments from '../CreateJob/CreateAssignments';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          <ProtectedRoute exact path="/viewjobs">
            <ViewJobsPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/deleteconfirmation">
            <DeleteConfirmation />
          </ProtectedRoute>

          <ProtectedRoute exact path="/createjob">
            <CreateJobPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/jobsubmitted">
            <SubmitPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/deletejob/:id">
            <DeleteJob />
          </ProtectedRoute>

          <ProtectedRoute exact path="/editjob/:id">
            <EditJob />
          </ProtectedRoute>

          <ProtectedRoute exact path="/editsuccessful">
            <EditSuccess />
          </ProtectedRoute>

          <ProtectedRoute exact path="/jobdetails/:id">
          <DetailsPage />
          </ProtectedRoute>

          <ProtectedRoute exact path="/safetyadv">
          <SafetyAdvisory />
          </ProtectedRoute>

          <ProtectedRoute exact path="/overtime">
          <OverTimeReview />
          </ProtectedRoute>

          <ProtectedRoute exact path="/editAd/:id">
          <EditSafetyAd />
          </ProtectedRoute>

          <ProtectedRoute exact path="/deleteAd/:id">
          <DeleteSafetyAd />
          </ProtectedRoute>
          
          <ProtectedRoute exact path="/assignjob/:id">
          <JobAssignments />
          </ProtectedRoute>
          
          {/* If none of the other routes matched, a 404 message will be displayed. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
