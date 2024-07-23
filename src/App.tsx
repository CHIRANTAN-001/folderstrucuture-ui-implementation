import './App.css'
import FilesAndFolders from './component/FilesAndFolders';
import { nodes } from './constants/folder';

function App() {

  return (
    <>
      <div className=''>
        <div className='p-8 mx-auto'>
          <ul>
            {nodes.map((node) => (
              <FilesAndFolders node={node} key={node.name} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App


