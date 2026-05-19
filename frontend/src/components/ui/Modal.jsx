const Modal = ({ open, title, children, onClose }) => {
  if (!open) return null

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{title}</h3>
          <button type="button" onClick={onClose} className="modal-close" aria-label="close">
            x
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
