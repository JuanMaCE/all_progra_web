#  what and whuy I created this hooks: 

useState: Manages local component state.

In Counter: Tracks if the form is visible (showForm) and the selected new status (taskId).

In Generate_task: Tracks the form visibility (showForm), the new task's name (taskName), and its initial status (taskId).

In Reloj: Holds the current time value (hora).

useEffect in Reloj: Handles side effects. This one sets up a timer (setInterval) to update the clock every second when the component loads. Its cleanup function (clearInterval) stops the timer when the component is removed, preventing memory leaks.

Lifted State (via Props): This is how Counter and Generate_task communicate with the parent board component. They don't hold the task list themselves. Instead, they call functions like changeTaskStatus and onAddTask (passed down as props) to tell the parent to update the central state, which then trickles down to all components.

#  URL OF CDN
## https://dl8jjud541vp4.cloudfront.net/