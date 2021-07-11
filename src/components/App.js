import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import BadgeDetailsContainer from '../pages/BadgeDetailsContainer';
import Layout from './Layout';
import Notfound from '../pages/NotFound'

function App() {

    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                    <Route exact path="/badges/:badgeId" component={BadgeDetailsContainer} />
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit} />
                    <Route component={Notfound} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;