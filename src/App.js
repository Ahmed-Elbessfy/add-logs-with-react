import React, { useState } from "react";
import Form from "./components/Form";
import Search from "./components/Search";
import Logs from "./components/Logs";

function App() {
  const [logs, setLogs] = useState([
    {
      title: "alarm high energy consumption is triggered",
      message:
        "Energy consumption of this asset is high. Please resolve this issue ASAP",
      time: "8:11:03 AM, 05-14-18",
      visible: true
    },
    {
      title: "new alarm created",
      message: 'A new alarm "Low Apparent Power" has been created ',
      time: "6:21:44 PM, 05-13-18",
      visible: true
    }
  ]);
  const addLog = log => {
    setLogs([...logs, { ...log, visible: true }]);
  };

  const deleteLog = i => {
    let newLogs = [...logs];
    newLogs.splice(i, 1);
    setLogs(newLogs);
  };

  const searchLogs = text => {
    let newLogs = [...logs];
    for (let i = 0; i < newLogs.length; i++) {
      if (text.length !== 0) {
        if (!logs[i].title.split(" ").includes(text)) {
          logs[i].visible = false;
        }
      } else {
        logs[i].visible = true;
      }
    }
    setLogs(newLogs);
  };

  return (
    <main className="App">
      <Form addLog={addLog} />
      <section>
        <Search searchLogs={searchLogs} />
        {logs.map((log, i) => {
          return (
            <Logs
              key={i}
              title={log.title}
              message={log.message}
              time={log.time}
              id={i}
              visible={log.visible}
              deleteLog={deleteLog}
            />
          );
        })}
      </section>
    </main>
  );
}

export default App;
