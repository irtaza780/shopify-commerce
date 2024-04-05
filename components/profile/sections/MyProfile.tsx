'use client';

import InputField from 'components/Input';
import styles from '../styles.module.css';

const MyProfile = () => {
  return (
    <>
      <div className={`${styles.fontCustom} p-6`}>
        <div className="mt-[61px]">
          <div>
            <InputField label="first name" />
          </div>
          <div className="mt-[24px]">
            <InputField label="last name" />
          </div>
          <div className="mt-[24px]">
            <InputField label="email" />
          </div>
        </div>
      </div>

      <div className=" mt-[100px] text-center">
        <p>Audacity India. v1.0</p>
      </div>

      <div className="mx-4 mt-2">
        <button className={styles.logoutBtn}>Logout</button>
      </div>
    </>
  );
};

export default MyProfile;
