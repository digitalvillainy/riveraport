import './globals.css'
import type { Metadata } from 'next'
import NavMenu from './NavMenu/NavMenu'
import Image from 'next/image'
import GitHubIcon from '../public/GitHub.svg'
import BitBucketIcon from '../public/BitBucket.svg'

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
      <body className='p-4 overflow-hidden'>
        <NavMenu />
        <div className='flex flex-row w-full h-full'>
          <div className="flex flex-col justify-end mb-20">
            <Image src={BitBucketIcon} alt='BitBucket Icon' width={43} height={43} />
            <Image className='mt-4' src={GitHubIcon} alt='GitHub Icon' width={40} height={40} />
          </div>
          <section className='w-full grow'>
            <main className='border-2 border-[#AD00EA] rounded-tl-2xl rounded-br-2xl my-5 ml-5 mr-2 p-5 h-[90vh]'>
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
