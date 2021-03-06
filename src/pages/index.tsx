import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import styles from '../../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Fragment>
      <section className='w-screen h-screen bg-neutral-900 flex items-center justify-center max-w-full'>
        <div className='relative overflow-hidden w-screen h-screen'>
          <Image src={'/moth.gif'} alt='mariposa'  layout='fill' className='w-full h-full'></Image>
          <div className='absolute top-0 left-0 bg-black w-screen h-screen mix-blend-multiply flex items-center justify-center text-white text-9xl font-bold'>
            <h1>
            Golldan
            </h1>
          </div>
        </div>
      </section>
      <section className='w-screen h-screen bg-black flex items-center justify-center max-w-full'>
          <Link href={'/login'}>
          <h1 className='text-white text-5xl cursor-pointer'>
            LOGIN
          </h1>
          </Link>
      </section>
    </Fragment>
  )
}

export default Home
