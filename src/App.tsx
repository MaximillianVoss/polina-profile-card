import './App.css';
import ProfileCard from './ProfileCard';

export default function App() {
  return (
    <main className="page">
      <h1>Profile cards</h1>
      <section aria-label="Student profiles" className="profile-grid">
        <ProfileCard name="Alice" age={20} showDetails={true} />
        <ProfileCard name="Ben" age={22} showDetails={false} />
      </section>
    </main>
  );
}
