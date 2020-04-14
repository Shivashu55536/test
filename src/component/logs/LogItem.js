import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog, currentSet } from '../../actions/logActions';

const LogItem = ({ log, deleteLog, currentSet }) => {
  const onDelete = () => {
    console.log('i am at the start');
    deleteLog(log.id);
    console.log('i am at the end ');
  };

  const onCurrent = () => {
    currentSet(log);
  };
  return (
    <li className='collection-item'>
      <div>
        <a
          onClick={onCurrent}
          href='#edit-log-modal'
          className={`modal-trigger ${
            log.attention ? 'red-text' : 'blue-text'
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className='gray-text'>
          <span className='black-text'>Id # {log.id}</span> last Updated by{' '}
          <span className='blac-text'>{log.tech}</span> on{' '}
          <Moment format='MMMM do YYYY, h:mm;ss a'>{log.date}</Moment>
        </span>
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.proptype = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};
export default connect(null, { deleteLog, currentSet })(LogItem);
