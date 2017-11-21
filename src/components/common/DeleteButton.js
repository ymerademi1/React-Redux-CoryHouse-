import React, {PropTypes} from 'react';

const DeleteButton = ({onDelete, deleting}) => {
    return(
      <div>
        <input
                type="submit"
                disabled={deleting}
                value={deleting ? 'Deleting...' : 'Delete'}
                className="btn btn-primary"
                onClick={onDelete}/>
      </div>
    );
  };

  DeleteButton.propTypes = {
    onDelete: PropTypes.func.isRequired,
    deleting: PropTypes.bool
  };

export default DeleteButton;
