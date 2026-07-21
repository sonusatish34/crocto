
'use client';

import { fireDb } from '../../public/firebase';
import { getDocs, collection, where, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoDotFill } from "react-icons/go";
// import Loading from '../components/Loading';
import PostsListing from './blogcomponents/PostsListing';
import BlogLayout from './blogcomponents/BlogLayout';
import RandomPosts from './blogcomponents/RandomPosts';
import Link from 'next/link';
import { MdExpandMore } from "react-icons/md";
import Head from 'next/head';

const ComponentName = () => {

  const router = useRouter();
  const [canonicalUrl, setCanonicalUrl] = useState('');
  const [postlist, setPostlist] = useState([]);
  const [sortedPostlist, setSortedPostlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loader
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);


  useEffect(() => {
    // Set canonical URL based on current host
    if (typeof window !== 'undefined') {
      const host = window.location.hostname;
      const url = host.includes('.in')
        ? `https://www.crocto.in/blog`
        : `https://www.crocto.com/blog`;
      setCanonicalUrl(url);
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsQuery = query(collection(fireDb, "blogPost"),
          where("blog_state", "==", "active"),
          where("blogfor", "==", "crocto")
        );
        const postsQuerySnapshot = await getDocs(postsQuery);
        const posts = postsQuerySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const sortedPosts = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setPostlist(posts);
        setSortedPostlist(sortedPosts);
      } catch (err) {
        setError('Failed to load data');
        console.error(err); // You can also log errors to an external service like Sentry
      } finally {
        setIsLoading(false); // Hide loader after data is fetched or error occurs
      }


    };

    fetchPosts();
  }, []);
  useEffect(() => {
    if (searchQuery) {
      const filtered = postlist.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(postlist);
    }
  }, [searchQuery, postlist]);


  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> crocto Blog Explore Life, Travel & Experiences</title>
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="farmhouses in Hyderabad, cheapest farmhouse rentals, farmhouses near me, farmhouse rentals, top farmhouses in Hyderabad, private farmhouses for rent, rent a farmhouse, farmhouses for celebrations" />
        <meta name="description" content="Find simple travel advice, easy lifestyle tips, and fun stories on the crocto blog. New posts will help you learn and stay interested." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="crocto Blog Explore Life, Travel & Experiences" />
        <meta name="og:description" content="Find simple travel advice, easy lifestyle tips, and fun stories on the crocto blog. New posts will help you learn and stay interested." />
        <link rel="canonical" href={canonicalUrl} />
      </Head>
      {isLoading ? (
        <p>Loading ...</p>
      ) :
        <BlogLayout onSearch={setSearchQuery} catg={"Blog"}>
          <div className='xl:px-32 lg:px-12 flex flex-col items-center helvetica-font text-black'>
            <div className='lg:py-10 py-5 justify-center sm:justify-items-center px-[6px]'>
              <p className="capitalize text-4xl text-center font-semibold lg:pt-3 pb-3 buch-font">Blogs</p>
              <ul className='flex justify-center items-center pt-2 gap-3'>
                <li>Topic</li>
                <li><GoDotFill /></li>
                <li>{postlist?.length} stories</li>
              </ul>
            </div>
            <div className='text-center flex justify-center lg:pt-10 pt-4'>
              <PostsListing data={filteredPosts} />
            </div>
            <RandomPosts data={postlist} />
          </div>
          <div className=" py-7 lg:py-5 flex flex-row xl:pl-36 lg:pl-20 pl-3 helvetica-font">
            <Link href={`/blog/${'party'}`} className="flex space-x-2">
              <span className="border-2 text-white rounded-full p-2 bg-[#1859c9] text-sm flex items-center space-x-2">
                <span>See more</span>
                <MdExpandMore className="text-lg" />
              </span>
            </Link>
          </div>
        </BlogLayout>
      }
    </div>
  );
};

export default ComponentName;