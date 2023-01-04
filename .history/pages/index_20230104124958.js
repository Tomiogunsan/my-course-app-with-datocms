import {gql, GraphQLClient} from 'graphql-request';
import Head from 'next/head'
import { Inter } from '@next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Javascript</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <h1>Testy </h1>
      </body>
      
    </div>
  )
}
