import {ThemeProvider} from 'styled-components';
import {themeDefault} from './theme/default';
import {GlobalStyles} from './theme/globalStyle';
import LeftGNB from './LeftNav/LeftGNB';
import {useState} from 'react';
import CardList from './compareCard/CardList';
import ScarpNav from './scrap/ScarpNav';
import ScrapFilter from './scrap/ScrapFilter';
import ScrapList from './scrap/ScrapList';
import ComparePage from './ComparePage/ComparePage';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <ThemeProvider theme={themeDefault}>
      <GlobalStyles {...themeDefault} />
      <div style={{display: 'flex'}}>
        <LeftGNB show={show} setShow={setShow} />
        {show && (
          <div style={{margin: '0 auto'}}>
            <CardList />
            <ScarpNav />
            <ScrapFilter />
            <ScrapList />
          </div>
        )}
        {!show && <ComparePage />}
      </div>
    </ThemeProvider>
  );
};

export default App;
