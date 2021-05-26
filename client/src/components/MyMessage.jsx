const MyMessage = ({ message }) => {
    if(message?.attachements?.length > 0) {
        return (
            <img
            src={message.attachments[0].file}
            alt="message-attachments"
            ClassName="message-image"
            style={{ float: 'right', height: '100px', width: '100px' }}
            />
        )
    }
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50' }}>
            {message.text}
        </div>
    );
}
export default MyMessage;