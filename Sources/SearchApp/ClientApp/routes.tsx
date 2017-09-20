import * as React from "react";
import { Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { SearchPage } from "./components/SearchPage";

export const routes: JSX.Element = <Layout>
    <Route exact path="/" component={ SearchPage } />
</Layout>;
