import React from 'react';
import {StatusBar} from 'react-native';
import '~/config/ReactotronConfig';

import Stack from '~/routes';

const App = () => <>

    <StatusBar barStyle="light-content" backgroundColor="#151C48" />
    <Stack />
    
    </>;

export default App;
