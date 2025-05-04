/context contains global context or top-level components, 
such as global state management files.
According to Co-pilot, libraries like Expo Audio has one such file
called AudioContext.tsx, which needed for playing audio globally and
thus won't unmount during navigation. 