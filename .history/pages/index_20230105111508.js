import {gql, GraphQLClient} from 'graphql-request';
import Head from 'next/head'
import CourseSection from '../components/CourseSection';




export default function Home({course}) {
  return (
    <>
      <Head>
        <title>Javascript</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
       {course.courseDetail.map(section => 
       <CourseSection details={section} 
       key={section.id}/>)}
      </div>
      
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
          ...on CalloutRecord {
            __typename
            bigTitle
            smallTitle
            description
            id
            image{

            }
          }
          ...on PricingSectionRecord {
            __typename
            title
            id
            pricingCards {
              
            }
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