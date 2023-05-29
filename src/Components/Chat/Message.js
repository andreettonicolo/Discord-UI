import React from 'react'

const Message = (props) => {
  console.log(props);
  const {author, img, content, timestamp} = props;
  return (
    <div className="message-container">
      <img className="message-avatar" src={img} alt="Avatar" />
      <div className="message-content">
        <div className="message-author">{author}</div>
        <div className="message-text">{content}</div>
        <div className="message-timestamp">{timestamp}</div>
      </div>
    </div>
  )
}

export default Message
