import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import AccountPage from "../pages/AccountPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectsPage from "../pages/ProjectsPage";
import UsersPage from "../pages/admin/UsersPage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "../components/layouts/Layout";

export default function AppRouter() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/account" component={AccountPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/project/:projectId" component={ProjectPage} />
          <Route exact path="/admin/users" component={UsersPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Layout>
    </Router>
  );
}
