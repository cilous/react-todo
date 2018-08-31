import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import TodoApp from "./Todo"

ReactDOM.render(<TodoApp />, document.getElementById("root"))


/*
    Req:
        All TODO task list show on the home page                            [DONE] (it's single page, so SURE!)
        User can add the new TODO task                                      [DONE] (have 2 option SIMPLE (just title) and ADVANCE (full task detail))
        User can view the task detail(task id, title, description, date)    [DONE] (always show )
        User can update their task detail                                   [DONE] (need to click save button)
        User can mark their task done                                       [DONE] (click check box input will be disabled)
        User can remove their tasks                                         [DONE] (click [X] on the back)
        Persitent Data                                                      [DONE] (use localStorage , save data on Refresh or Close page)

    Optional: 
                User can check mark the tasks on the home page              [DONE] (yes, of course it's just one page)
                User can view their completed task                          [DONE] (still show on page until deleted)

    P.S. CSS is ugly
    

*/

