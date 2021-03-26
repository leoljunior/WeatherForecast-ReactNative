import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Search from './pages/Search';

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{
                    title: 'My City'
                }}
            />

            <Drawer.Screen
                name="Search"
                component={Search}
                options={{
                    title: 'Search'
                }}
            />
        </Drawer.Navigator>
    )
}

export default Routes;