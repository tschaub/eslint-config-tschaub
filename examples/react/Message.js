import React from 'react';
import {string} from 'prop-types';

function Message({name}) {
  return <div>Hello, {name}!</div>;
}

Message.propTypes = {
  name: string.isRequired,
};

export default Message;
