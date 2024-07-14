import { Router, Route, Navigate } from "@solidjs/router";
import { lazy } from "solid-js";


const MainLayout = lazy(() => import("./layout/MainLayout"));
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const About = lazy(() => import("./pages/About"));

function App() {

    return (
        <Router root={MainLayout}>
            <Route path="" component={() => <Navigate href='/home' />} />
            <Route path="about" component={About} />
            <Route path="projects" component={Projects} />
            <Route path="home" component={Home} />
            <Route path="*404" element={()=><div>Not Found</div>} />
        </Router>
    );
}
export default App;