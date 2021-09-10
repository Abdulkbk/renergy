import Head from 'next/head'
import Members from '../src/components/Members'
import Display from '../src/components/Display'
import Footer from '../src/components/Footer'
import Steps from '../src/components/Steps'
import About from '../src/components/About'
import Bot from '../src/Bot'
import { useState, useCallback } from 'react'
import ImageBox from '../src/components/Image'
import Image from "next/image"
import bot from "../public/assets/chatbot.png";

export default function Home() {

  const [isopen, setIsopen] = useState(true)
  const handleV = useCallback(
    () => {
      setIsopen(!isopen)
    },
    [isopen],
  )

  return (
    <div>
      <Head>
        <title>Renergy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        {isopen ? <Bot isopen={handleV} /> : (
          <a
            href='#bot'
            className='px-2 self-end justify-self-end py-1 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 md:mx-2  absolute z-9 bottom-0 right-0 p-6 mb-3'

            onClick={handleV}
          >
            <Image src={bot} alt='Chatbot' height='60' width='60' />
          </a>
        )}
        <Display />
        <About />
        <ImageBox />
        <Steps />
        <Members />
        <Footer />
      </>

    </div>
  )
}
