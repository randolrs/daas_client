import React, { useState } from 'react';
import { updateUser } from 'app/api/auth';

const Update = () => {
  const [ email, setEmail ] = useState('');
  const [ currentPassword, setCurrentPassword ] = useState('');

  const handleSumbit = async () => {
    const res = await updateUser({
      email,
      currentPassword
    });
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={ e => setEmail(e.target.value) }
          value={ email }
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Password"
          name="current_password"
          onChange={ e => setCurrentPassword(e.target.value)  }
          value={ currentPassword }
        />
      </div>
      <div>
        <span onClick={ handleSumbit }>Update</span>
      </div>
    </div>
  );
}

export default Update;
