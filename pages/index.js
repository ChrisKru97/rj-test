import { useState } from 'react';

import Alert from '../components/Alert';
import QrBox from '../components/QrBox';
import Tabs from '../components/Tabs';
import { SelectedTabContext } from '../selectedTab/context';

const homeFunction = () =>
  function Home() {
    const [active, setActive] = useState(0);

    const tabData = () => [
      <QrBox userAccountCode={'8662794092'} key={1} />,
      <QrBox userAccountCode={'1896194979'} key={2} />,
      <QrBox userAccountCode={'8465321568'} key={3} />,
      <QrBox userAccountCode={'3286126548'} key={4} />,
    ];

    return (
      <SelectedTabContext.Provider value={{ active, setActive }}>
        <div className="p-5 max-w-[max-content]">
          <SelectedTabContext.Consumer>
            {(context) => <Alert>Current selected tab: {context.active}</Alert>}
          </SelectedTabContext.Consumer>
          <div className="h-20" />
          <Tabs navItems={[0, 1, 2, 3]}>{tabData()}</Tabs>
        </div>
      </SelectedTabContext.Provider>
    );
  };

export default homeFunction();
