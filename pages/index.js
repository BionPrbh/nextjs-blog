import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

// this is sample function for static generation method in rendering page
export async function getStaticProps() {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hi! My name is Bion and i am currently learning next.js and i am still at tutorial phase.</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
				<div className="flex justify-evenly mt-4">
						<Link href="/posts/ssg-ssr" className="no-underline">
							<div className="shadow-xl p-4 text-lg rounded-xl border border-gray-500 w-5/12 cursor-pointer flex flex-col justify-between" style={{height: '150px'}}>
								<a className="text-gray-800" style={{textDecoration:"none"}}> Static Generation and Server Side Rendering</a>
								<a className="text-gray-800" style={{textDecoration:"none"}}>&#8594;</a>
							</div>
						</Link>
						<Link href="/posts/pre-rendering">
							<div className="shadow-xl p-4 text-lg rounded-xl border border-gray-500 w-5/12 cursor-pointer flex flex-col justify-between" style={{height: '150px'}}>
								<a className="text-gray-800" style={{textDecoration:"none"}}> Pre-rendered</a>
								<a className="text-gray-800" style={{textDecoration:"none"}}> &#8594;</a>
							</div>
						</Link>
				</div>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br/>
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
			<style jsx>{`
					div.card {
						border: 1px solid rgba(0,0,0,0.8);
						box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.6);
						border-radius: 10px;
						height: 130px;
						width:300px;
						padding-top: 20px;
						padding-left: 20px;
					}
					div.card a {
						color: #000;
						text-decoration:none;
					}
					div.card:hover {
						cursor: pointer;
					}
					.roof {
						height:100%;
						width:100%;
						display: flex;
						justify-content: space-between
					}
			`}</style>
		</Layout>
	)
}
