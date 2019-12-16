import React from 'react';

const Modal = ({ score, restartTheGame }) => {

  return (
    <div className="myModalBack">
      <div className="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
                Well done!
            </div>
            <div className="modal-body">
                You Won The Game
            </div>
            <div className="modal-footer">
              <button onClick={restartTheGame} type="button" className="btn btn-primary">RESTART</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
