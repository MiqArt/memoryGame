import React from 'react';

const Modal = ({ status, result, restartTheGame }) => {

  return (
    <div className="myModalBack">
      <div className="myModal">
          <div className="modal-content" style={{boxShadow: `0 0 20px 10px ${status==="success"?"green":"red"}`}}>
            <div className="modal-header justify-content-center">
                {status === "success" ? "CONGRATULATIONS!" : "GAME OVER!"}
            </div>
            <div className="modal-body d-flex justify-content-center">
                {status === "success" ? `Your Score: ${result}! Lower is Better` : "You made too many moves!"}
            </div>
            <div className="modal-footer justify-content-center">
              <button onClick={restartTheGame} type="button" className={`btn btn-${status}`}>Play again!</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Modal;
