import React from 'react';

const ModalComponent = ({ isOpen, modalClose, modalHeading, children, formButtonName, formSubmit, modalSize }) => {

  return (
    <>
    {isOpen &&
    <div className={`modal ${isOpen ? 'modal-block' : 'modal-none'}`}>
      <div className={`modal-dialog modal-dialog-scrollable ${modalSize}`}>
        <div className="modal-content">
          <div className="modal-header">

            <h4 className="modal-title">{modalHeading}</h4>{/* Render the Heading */}

            <button type="button" className="btn-close" onClick={modalClose}></button>
          </div>

          <div className="modal-body">
               {children} {/* Render the ModalBodyContentComponent */}
          </div>

          <div className="modal-footer">
            {formButtonName && (
              <button type="button" onClick={formSubmit} className="btn btn-primary" data-bs-dismiss="modal">{formButtonName}</button>
            )}
            <button type="button" onClick={() => modalClose(false)} className="waves-effect waves-light btn btn-outline-primary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
};

export default ModalComponent;
