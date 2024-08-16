import logo from './logo.svg';
import { ClubInfo } from './components/ClubInfo/ClubInfo';
import { ClubAchievements } from './components/ClubAchievements/ClubAchievements';
import { CurrentSquad } from './components/CurrentSquad/CurrentSquad'
import './App.css';

function App() {
  return (
    <div>
      <ClubInfo></ClubInfo>
      <ClubAchievements></ClubAchievements>
      <CurrentSquad></CurrentSquad>
    </div>
  );
}

export default App;
