import Input from './components/Input';
import Table from './components/Table';

const App = () => {
  return (
    <main className="p-2">
      <div className='text-center mb-5'>
        <h1 className="font-extrabold text-4xl  text-green-700 mt-2">MongoDB Viewer</h1>
        <p className='font-bold py-4'> This is a special DB reader that views the noSql MongoDb data in form of TABLES.</p>
      </div>
      <Input />
      <Table />
    </main>
  )
}

export default App;