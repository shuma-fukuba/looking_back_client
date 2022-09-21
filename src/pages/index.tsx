import Layout from '~/components/layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './home'
import LookingBackPage from './looking_backs'
import LearningTimePage from './learning_times'
import CurriculumPage from './curriculums'
import UserPage from './users'
import InputCurriculumPage from './curriculums/input'
import OutputCurriculumPage from './curriculums/output'

interface Props {}

const Home: React.FC<Props> = () => {
  return (
    // TODO auth guard
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="/looking_backs" element={<LookingBackPage />} />
            <Route path="/learning_times" element={<LearningTimePage />} />
            <Route path="/curriculums">
              <Route index element={<CurriculumPage />} />
              <Route path="/curriculums/inputs" element={<InputCurriculumPage />} />
              <Route path="/curriculums/outputs" element={<OutputCurriculumPage />} />
            </Route>
            <Route path="/users" element={<UserPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Home
