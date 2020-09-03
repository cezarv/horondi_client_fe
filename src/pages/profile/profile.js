import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { profileTabs } from '../../configs';
import TabPanel from '../../containers/tab-panel';

const ProfilePage = () => {
  const [value, setValue] = useState(0);
  const lang = useSelector(({ Language }) => Language.language);

  const tabs = profileTabs[lang].map((label, index) => (
    <Tab label={label} key={index} />
  ));

  const handleChange = (event, newVal) => {
    setValue(newVal);
  };

  return (
    <>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange}>
          {tabs}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <h1>Bob</h1>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <h1>Marley</h1>
      </TabPanel>
    </>
  );
};

export default ProfilePage;
