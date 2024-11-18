import {string} from 'prop-types';
import React from 'react';

/**
 * @typedef {object} MessageProps
 * @property {string} name The name.
 */

/**
 * @param {MessageProps} props The props.
 * @return {React.JSX.Element} The element.
 */
function Message({name}) {
  return <div>Hello, {name}!</div>;
}

Message.propTypes = {
  name: string.isRequired,
};

export default Message;
