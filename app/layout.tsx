import './globals.css'
import type { Metadata } from 'next'
import NavMenu from '../components/NavMenu/NavMenu'
import Image from 'next/image'
import GitHubIcon from '../public/GitHub.svg'
import BitBucketIcon from '../public/BitBucket.svg'
import RbmLogo from '../public/RbmLogo.svg'
import Link from 'next/link'

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
    <html lang="en" className='w-fit'>
      <body className='w-fit'>
        <NavMenu />
        <div className='flex flex-col lg:flex-row lg:w-11/12 lg:mx-auto w-11/12 mx-auto h-fit'>
          <div className="lg:flex flex-col justify-end mb-16 mr-4 hidden">
            <Link href={'https://www.redbannermedia.com'} target='_blank'>
              <Image className='mb-3' src={RbmLogo} alt='Logo for Red Banner Media' width={43} height={43} />
            </Link>
            <Link href={'https://www.bitbucket.com'} target='_blank'>
              <Image src={BitBucketIcon} alt='BitBucket Icon' width={43} height={43} />
            </Link>
            <Link href={'https://www.github.com/digitalvillainy'} target='_blank'>
              <Image className='mt-4' src={GitHubIcon} alt='GitHub Icon' width={40} height={40} />
            </Link>
          </div>

          <div className='w-full grow'>
            <main className='border-2 border-[#AD00EA] rounded-tl-2xl rounded-br-2xl my-5 p-5 grow w-full'>
              <div className='mb-4'>
                <h1 className='text-4xl'>Roberto Rivera</h1>
                <span className='text-lg'>Front-End Web Developer</span>
              </div>
              <div className='w-full lg:w-8/12 lg:mx-auto flex flex-col'>
                {children}
              </div>
            </main>
            <footer className='flex flex-row justify-end'>
              Made By Roberto Rivera &#169; {currentYear}
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
