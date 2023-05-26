import FormCV from '../components/FormCV'
import IconInfoJobs from '../components/Icon'
import Login from '../components/Login'

export default function Home() {
  return (
    <div className="flex flex-col gap-8  items-center ">
      <header className="flex flex-col   items-center gap-2">
        <IconInfoJobs />
        <p>Upload your CV and generate your data on Infojobs instantly.</p>
      </header>

      <Login />
      <FormCV />

      <footer>
        <p className="text-xs text-[#89898A]">
          Created by{' '}
          <a
            className="text-blue-400 border-b-2 border-blue-300"
            href="https://github.com/danielcgilibert">
            Daniel
          </a>
        </p>
      </footer>
    </div>
  )
}
