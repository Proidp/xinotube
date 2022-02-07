import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import Helmet from "react-helmet"
import './App.css';
import './main.css';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Profilepage from "./Pages/Profilepage";
import PlayVideo from "./Pages/PlayVideo";
import Signup from "./Pages/Signup";
import './style.css';
import Settings from "./Pages/Settings";
import Wallet from "./Pages/Wallet";
import Lists from "./Pages/Lists";
import Upload from "./Pages/Upload";
import Education from "./Pages/Education";
import CreativeArts from "./Pages/CreativeArts";
import TheUniverse from "./Pages/TheUniverse";
import Gaming from "./Pages/Gaming";
import Music from "./Pages/Music";
import Tech from "./Pages/Tech";
import Finance from "./Pages/Finance";
import Popculture from "./Pages/Popculture";
import Following from "./Pages/Following";
import NewsPolitics from "./Pages/NewsPolitics";
import NewChannel from "./Pages/NewChannel";
import Channel from "./Pages/Channel";
import Help from "./Pages/Help";
import Notification from "./Pages/Notification";
import Uploads from "./Pages/Uploads";
import Dashboard from "./Pages/Dashboard";
import Rewards from "./Pages/Rewards";
import Invite from "./Pages/Invite";
import CommunityGuide from "./Pages/CommunityGuide";
import XinotubeHelp from "./Pages/XinotubeHelp";
import TermsServce from "./Pages/TermsServce";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <>


    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/profile">
          <Profilepage/>
        </Route>
        <Route path="/playvideo">
          <PlayVideo/>
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
        <Route path="/wallet">
          <Wallet/>
        </Route>
        <Route path="/lists">
          <Lists/>
        </Route>
        <Route path="/upload">
          <Upload/>
        </Route>
        <Route path="/education">
          <Education/>
        </Route>
        <Route path="/arts">
          <CreativeArts/>
        </Route>
        <Route path="/universe">
          <TheUniverse/>
        </Route>
        <Route path="/gaming">
          <Gaming/>
        </Route>
        <Route path="/music">
          <Music/>
        </Route>
        <Route path="/tech">
          <Tech/>
        </Route>
        <Route path="/finance">
          <Finance/>
        </Route>
        <Route path="/popculture">
          <Popculture/>
        </Route>
        <Route path="/following">
          <Following/>
        </Route>
        <Route path="/news">
          <NewsPolitics/>
        </Route>
        <Route path="/wildwest">
          <Education/>
        </Route>
        <Route path="/channel/new">
          <NewChannel/>
        </Route>
        <Route path="/channels">
          <Channel/>
        </Route>
        <Route path="/help">
          <Help/>
        </Route>
        <Route path="/notifications">
          <Notification/>
        </Route>
        <Route path="/uploads">
          <Uploads/>
        </Route>
        <Route path="/dashboard">
          <Dashboard/>
        </Route>
        <Route path="/Rewards">
          <Rewards/>
        </Route>
        <Route path="/invite">
          <Invite/>
        </Route>
        <Route path="/Community-Guidelines">
          <CommunityGuide/>
        </Route>
        <Route path="/XinotubeHelp">
          <XinotubeHelp/>
        </Route>
        <Route path="/tos">
          <TermsServce/>
        </Route>
        <Route path="/privacypolicy">
          <PrivacyPolicy/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
