import {gql, GraphQLClient} from 'graphql-request';
import Head from 'next/head'
import { Inter } from '@next/font/google'
import CourseSection from '../components/CourseSection';


const inter = Inter({ subsets: ['latin'] })

export default function Home({course}) {
  return (
    <>
      <Head>
        <title>Javascript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
       {course.courseDetail.map(section => 
       <CourseSection details={section} 
       key={section.id}/>)}
      </>
      
    </>
  )
}


const query = gql`
    query {
      course {
        id
        name
        slug
        courseDetail {
          ...on CourseHeaderRecord {
              __typename
              bigTitle
              smallTitle
              buttonText
              description
              id

          }
        }
      }
    }
`

export async function getStaticProps () {
    const endpoint ='https://graphql.datocms.com/';
    const graphQlClient = new GraphQLClient(endpoint, {
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${process.env.DATOCMS_API_Key}`,
        }
    });

    const course = await graphQlClient.request(query);
    console.log(course);
    return {
      props: course,
    }

}