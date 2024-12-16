import React from 'react';
import './App.css';

// 導入組件
import MusicPlayer from './components/MusicPlayer/MusicPlayer';
import EventCalendar from './components/EventCalendar/EventCalendar';
import TodoApp from './components/TodoApp/TodoApp';

function App() {
  return (
    <div className="App">
      <h1>Welcome to UniSync</h1>
      <h1>你學習上的最佳助手</h1>

      {/* 音樂播放器區域 */}
      <div className="music-player">
        <MusicPlayer />
      </div>

      {/* 事件日曆區域 */}
      <div className="event-calendar">
        <EventCalendar />
      </div>

      {/* 待辦事項區域 */}
      <div className="todo-app">
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
