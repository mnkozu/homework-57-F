import React from 'react';

const UserForm = () => {

  return (
    <form>
      <h4>Add new user</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label><p>Активен
          <input
            id="isActive"
            name="isActive"
            type="checkbox"
            className="form-control"
          />
        </p></label>
      </div>
      <div className="form-group mb-2">
        <label>
          <select
            id="role"
            name="role"
            className="form-control"
            required
          >
            <option disabled value="">Select a role!</option>
            <option>User</option>
            <option>Editor</option>
            <option>Admin</option>
          </select>
        </label>
      </div>
      <button type="submit" className="btn btn-success">Create</button>
    </form>
  );
};

export default UserForm;