import Head from "next/head";
import requests from "../utils/request";
import Header from "./home";
import Results from "../components/Results";
import {useState} from 'react';
import { useRouter } from "next/router";
export default function Home({ results }) {
  const [query,setQuery]  = useState("")  
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Tea bites</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="h-30 p-8">
        <div className="container mx-auto py-8">
          <input
            className="w-full h-10 bg-search text-desc rounded  focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
            type="search"
            placeholder="Search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              router.push(`/?query=${e.target.value}`);
            }}
          />
        </div>
      </section>
      <Header />
      <Results results={results} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const API_KEY = process.env.API_KEY;
  const genre = context.query.genre;
  const query = context.query.query;
  let request;
  if(query){
    request = await fetch(
      `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${API_KEY}`
    );
    
  }else{
   request = await fetch(
    requests[genre]?.url || requests.fetchTrending.url
  );}
  const posts = await request.json();
  const elements = await posts.articles;

  return {
    props: {
      results: elements,
    },
  };
}
