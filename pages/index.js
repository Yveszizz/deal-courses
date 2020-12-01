import Nav from '../components/nav'
import Article from '../components/article'
import Deals from '../components/Deals/deals'

export default function IndexPage() {
  return (
    <div>
      <Nav />
      <header className="py-20">
        <h1 className="text-5xl text-center text-gray-700 dark:text-gray-100">DealCourses</h1>
      </header>
      <Deals />
    </div>
  )
}
