import './Msg.scss';

export function Msg({ children, onHideMsg }) {
    return (
        <div className="msg" onClick={onHideMsg}>
            <div className="msg-box">{children}</div>
        </div>
    );
}
