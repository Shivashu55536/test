import React, { useState, useEffect } from 'react';
import PreLoader from '../layout/Preloader';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import { getLogs, setLoading } from '../../actions/logActions';
import PropTypes from 'prop-types';

const Logs = ({ log: { logs, loading }, getLogs, setLoading }) => {
  // const [logs, setLogs] = useState([]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading();
    getLogs();
    // eslint-disable-next-line
  }, []);

  // const getLogs = async () => {
  //   setLoading(true);

  //   const res = await fetch('/logs');
  //   const data = await res.json();

  //   setLogs(data);
  //   setLoading(false);
  // };
  if (loading || logs === null) {
    return <PreLoader />;
  }
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'>System logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>No log to dispaly</p>
      ) : (
        logs.map((log) => <LogItem key={log.id} log={log} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};
const mapToStateProps = (state) => ({
  log: state.log,
});
export default connect(mapToStateProps, { getLogs, setLoading })(Logs);
