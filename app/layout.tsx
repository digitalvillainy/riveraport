import './globals.css'
import type { Metadata } from 'next'
import NavMenu from './NavMenu/NavMenu'


export const metadata: Metadata = {
  title: 'Roberto Rivera | Front-End Web Developer',
  description: 'The portfolio of Roberto Rivera. Professional web developer available for full time hire or freelance.',
}

const currentYear = new Date().getFullYear();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='p-4'>
        <NavMenu />
        <div className='flex flex-row w-full'>
          <span className="flex flwx-column place-items-end">a</span>
          <section>
            <main className='border-2 border-[#AD00EA] rounded-tl-2xl rounded-br-2xl my-5 ml-14 mr-2 p-5'>
              <div className='mb-4'>
                <h3 className='text-3xl'>Roberto Rivera</h3>
                <span className='text-sm'>Front-End Web Developer</span>
              </div>
              {children}
            </main>
            <footer className='flex flex-row justify-end'>
              Made By Roberto Rivera &#169; {currentYear}
            </footer>
          </section>
        </div>
      </body>
    </html>
  )
}
