import './App.css';
import { useRandom } from './hooks/useRandom';

function App() {
  const query = useRandom();

  return (
    <>
      {query.isFetching ? (
        <h2>loading</h2>
      ) : (
        <h2>Random number: {query.data}</h2>
      )}

      {!query.isLoading && query.isError && <h3>{`${query.error}`}</h3>}

      <button onClick={() => query.refetch()} disabled={query.isFetching}>
        {query.isFetching ? '...' : 'New number'}
      </button>
    </>
  );
}

export default App;
