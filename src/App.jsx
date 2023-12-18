import { Header } from './components/header/header'
import './global.css'
import styles from './app.module.css';
import { Post } from '../src/components/post/post';
import { SideBar } from './components/sidebar/sidebar';

export default function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  )
}
