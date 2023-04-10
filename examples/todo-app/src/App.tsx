import {TaskList} from "./components/TaskList"

function App() {
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>
      <div>
        <h2>Layout</h2>
        <TaskList.Layout
          tasks={[
            {id: 1, title: "Water plants"},
            {id: 2, title: "Feed pets"},
          ]}
          onSave={() => {
            alert("Consider it saved!")
          }}
        />
      </div>
      <div>
        <h2>Widget</h2>
        <TaskList.Widget
          fallbackFamilies={["Layout"]}
          placeholderFamily="Placeholder"
        />
      </div>
      <div>
        <h2>Tour</h2>
        <TaskList.Tour
          fallbackFamilies={["Widget", "Layout"]}
          placeholderFamily="Placeholder"
        />
      </div>
    </div>
  )
}

export default App
