import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Ansible from "./components/Projects/Card/Ansible";
import bind9 from "./components/Projects/Card/bind9";
import ssh from "./components/Projects/Card/ssh";
import iscdhcp from "./components/Projects/Card/iscDhcp";
import openVpn from "./components/Projects/Card/openVpn";
import routerLinux from "./components/Projects/Card/routerLinux";
import squid from "./components/Projects/Card/squid";
import ipv6 from "./components/Projects/Card/ipv6";
import qemu from "./components/Projects/Card/qemu";
import zabbix from "./components/Projects/Card/zabbix";
import mail from "./components/Projects/Card/mail";
import stage from "./components/Projects/Card/stage";
import routageintervlan from "./components/Projects/Card/routageintervlan";
import lamp from "./components/Projects/Card/lamp";
import clusterRouteHsrp from "./components/Projects/Card/clusterRouterHsrp";
import veilleTechnologique from "./components/Projects/Veille/veilleTechnologique";
import booktic from "./components/Projects/Card/booktic";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/project" component={Projects} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="/stage" component={stage} />
          <Route path="/ansible" component={Ansible} />
          <Route path="/bind9" component={bind9} />
          <Route path="/ssh" component={ssh} />
          <Route path="/iscdhcp" component={iscdhcp} />
          <Route path="/qemu" component={qemu} />
          <Route path="/openVpn" component={openVpn} />
          <Route path="/routerLinux" component={routerLinux} />
          <Route path="/squid" component={squid} />
          <Route path="/ipv6" component={ipv6} />
          <Route path="/zabbix" component={zabbix} />
          <Route path="/mail" component={mail} />
          <Route path="/routageintervlan" component={routageintervlan} />
          <Route path="/lamp" component={lamp} />
          <Route path="/clusterRouterHsrp" component={clusterRouteHsrp} />
          <Route path="/veilleTechnologique" component={veilleTechnologique} />
          <Route path="/booktic" component={booktic} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
