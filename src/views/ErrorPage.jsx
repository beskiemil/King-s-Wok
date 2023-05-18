import { PropTypes } from "prop-types";

const ErrorPage = ({ error, message }) => (
  <div>
    <p>{error}:</p>
    <p>{message}</p>
    <p>Zostaniesz przekierowany na stronę główną</p>
  </div>
);

export default ErrorPage;

ErrorPage.propTypes = {
  error: PropTypes.string,
  message: PropTypes.string,
};
