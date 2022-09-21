import { Card } from 'antd'
import { matchPath } from 'react-router-dom'
import Layout from '~/components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './home'
import LookingBackPage from './looking_backs'
import LearningTimePage from './learning_times'
import CurriculumPage from './curriculums'
import UserPage from './users'

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    // TODO auth guard
    <Layout>
      {/* <Card>Home</Card> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/looking_backs" element={<LookingBackPage />} />
            <Route path="/learning_times" element={<LearningTimePage />} />
            <Route path="/curriculums" element={<CurriculumPage />} />
            <Route path="/users" element={<UserPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  )
}

export default Home
