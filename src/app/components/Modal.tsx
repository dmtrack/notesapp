interface IModal {
  dataWindow: boolean;
  setDataWindow: (state: boolean) => void;
}

const Modal: React.FC<IModal> = (props) => {
  const { dataWindow, setDataWindow } = props;
  const handleClose: React.MouseEventHandler<HTMLButtonElement> = (): void => {
    setDataWindow(false);
  };
  if (dataWindow) {
    return (
      <>
        <div className="modal-win">
          <div className="modal-win-content">
            <span className="modal-win-header">Choose date</span>
          </div>
          <div className="modal-win-footer">
            <button className="input" onClick={handleClose}>
              Done
            </button>
            <button className="input" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  }
  return null;
};

export { Modal };
