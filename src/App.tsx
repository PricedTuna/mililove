import HomePage from "./pages/HomePage";
import RememberPage from "./pages/RememberPage";
import WordsPage from "./pages/WordsPage";

function App() {
  return (
    <div style={styles.background}>
      <HomePage />
      <WordsPage />
      <RememberPage />
    </div>
  );
}

const styles = {
  background: {
    background: '#ffbaa2',
  },
};

export default App;
