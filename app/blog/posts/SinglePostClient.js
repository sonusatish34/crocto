"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  doc,
  updateDoc,
  arrayUnion,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { fireDb } from "@/public/firebase";
import StaticData from "@/public/StaticData";
import BlogLayout from "../blogcomponents/BlogLayout"; // Adjust path if needed

import { GrLike } from "react-icons/gr";
import { FaRegComment } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { MdExpandMore } from "react-icons/md";
import { IoMdVolumeHigh, IoMdVolumeOff } from "react-icons/io";

export default function SinglePostClient({ initialPost, slug }) {
  const params = useParams();
  const currentSlug = slug || params?.slug;

  const [postDisplay, setPostDisplay] = useState(initialPost);
  const [postlist, setPostlist] = useState([]);
  const [cat, setCat] = useState(initialPost?.categoryname || "");
  const [commentShow, setCommentShow] = useState(false);

  // Speech Synthesis state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voice, setVoice] = useState(null);

  // Engagement state
  const [likesCount, setLikesCount] = useState(initialPost?.likes || 0);
  const [comments, setComments] = useState(initialPost?.comments || []);
  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");

  // Setup Browser Speech Engine
  useEffect(() => {
    const getVoices = () => {
      if (typeof window === "undefined" || !window.speechSynthesis) return;
      const voices = window.speechSynthesis.getVoices();

      let selectedVoice = voices.find(
        (v) =>
          v.name.toLowerCase().includes("google") ||
          v.name.toLowerCase().includes("microsoft") ||
          v.name.toLowerCase().includes("english us") ||
          v.name.toLowerCase().includes("en-us")
      );

      if (!selectedVoice) {
        selectedVoice = voices.find(
          (v) => v.lang === "en-US" || v.lang.startsWith("en")
        );
      }

      setVoice(selectedVoice || null);
    };

    getVoices();
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = getVoices;
    }

    return () => {
      if (typeof window !== "undefined" && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Fetch Related Posts
  useEffect(() => {
    const fetchRelatedPosts = async () => {
      if (!initialPost?.categoryname) return;
      try {
        const qCategory = query(
          collection(fireDb, "blogPost"),
          where("categoryname", "==", initialPost.categoryname),
          where("blog_state", "==", "active")
        );
        const categorySnapshot = await getDocs(qCategory);
        const posts = categorySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const filteredPosts = posts.filter((post) => post.slug !== currentSlug);
        setPostlist(filteredPosts);
      } catch (error) {
        console.error("Error fetching related posts:", error);
      }
    };

    fetchRelatedPosts();
  }, [initialPost, currentSlug]);

  const cleanText = (text) => {
    if (!text) return "";
    let cleanedText = text.replace(/<[^>]*>/g, "");
    if (typeof document !== "undefined") {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = cleanedText;
      cleanedText = tempDiv.textContent || tempDiv.innerText || "";
    }
    return cleanedText.replace(/\s+/g, " ").trim();
  };

  const speakText = () => {
    if (!postDisplay || !postDisplay.content) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const title = cleanText(postDisplay.title);
    const description = cleanText(postDisplay.description);
    const content = cleanText(postDisplay.content);
    const textToSpeak = `${title}. ${description}. ${content}`;

    const newUtterance = new SpeechSynthesisUtterance(textToSpeak);
    newUtterance.onstart = () => setIsSpeaking(true);
    newUtterance.onend = () => setIsSpeaking(false);
    newUtterance.onerror = (event) => {
      console.error("Speech synthesis error:", event);
      setIsSpeaking(false);
    };
    newUtterance.rate = 0.8;

    if (voice) {
      newUtterance.voice = voice;
    }

    window.speechSynthesis.speak(newUtterance);
  };

  const handleLike = async () => {
    try {
      const q = query(
        collection(fireDb, "blogPost"),
        where("slug", "==", currentSlug)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Post not found.");
        return;
      }

      const postDocRef = doc(fireDb, "blogPost", querySnapshot.docs[0].id);
      const postDoc = querySnapshot.docs[0].data();
      const currentLikes = postDoc.likes || 0;
      const newLikesCount = currentLikes + 1;

      setLikesCount(newLikesCount);

      await updateDoc(postDocRef, {
        likes: newLikesCount,
      });
    } catch (error) {
      console.error("Error updating like:", error);
      alert("There was an error updating the like.");
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    if (!userName || !commentText) {
      alert("Please provide both name and comment.");
      return;
    }

    const date = new Date().toISOString();

    try {
      const q = query(
        collection(fireDb, "blogPost"),
        where("slug", "==", currentSlug)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        alert("Post not found.");
        return;
      }

      const postDocRef = doc(fireDb, "blogPost", querySnapshot.docs[0].id);
      const newComment = { userName, commentText, date };

      setComments((prevComments) => [...prevComments, newComment]);

      await updateDoc(postDocRef, {
        comments: arrayUnion(newComment),
      });

      alert("Comment added successfully!");
      setUserName("");
      setCommentText("");
    } catch (error) {
      console.error("Error adding comment:", error);
      alert("There was an error adding the comment.");
    }
  };

  return (
    <BlogLayout>
      <section className="section">
        <div className="flex flex-col lg:px-0 py-2 lg:py-2 text-black">
          <div className="xl:mx-96 lg:mx-56 mx-6 lg:px-0">
            <h1 className="lg:text-[40px] lg:leading-normal text-2xl font-bold lg:py-4 py-2 helvetica-font tracking-tight">
              {postDisplay?.title}
            </h1>
            <p className="helvetica-font text-[#6B6B6B] text-base lg:text-xl lg:pb-6 py-2 lg:py-4">
              {postDisplay?.description}
            </p>
          </div>

          {postDisplay?.coverimages && (
            <div className="xl:mx-24 lg:mx-16 px-1 lg:px-0 py-3 lg:py-6">
              <Image
                className="w-full rounded-sm"
                src={postDisplay.coverimages}
                alt={postDisplay?.cialt || "Cover Image"}
                width={2000}
                height={2000}
                priority
              />
            </div>
          )}

          <div>
            <div className="flex items-center flex-wrap lg:gap-6 gap-4 py-3 text-sm lg:text-lg xl:mx-96 lg:mx-56 mx-6">
              <p>{postDisplay?.timetake} min read</p>
              <p className="flex items-center gap-1">
                <BiCategory className="text-blue-400" />
                <span>
                  {Array.isArray(postDisplay?.categoryname)
                    ? postDisplay.categoryname.join(", ")
                    : postDisplay?.categoryname}
                </span>
              </p>
              <button
                onClick={speakText}
                disabled={!postDisplay || !postDisplay.content}
                className="text-blue-600 flex items-center justify-center border-2 rounded-md px-2 py-1"
              >
                <span className="p-1">
                  {isSpeaking ? "Stop Reading" : "Play As Audio"}
                </span>
                {isSpeaking ? (
                  <IoMdVolumeHigh size={20} className="lg:size-6" />
                ) : (
                  <IoMdVolumeOff size={20} className="lg:size-6" />
                )}
              </button>
            </div>

            <ul className="py-2 flex items-center justify-start gap-x-8 text-xs lg:text-base xl:mx-96 lg:mx-56 mx-6">
              <li className="flex items-center gap-5">
                {postDisplay?.time && (
                  <span>
                    {StaticData(
                      Math.floor(new Date(postDisplay.time).getTime() / 1000)
                    )}
                  </span>
                )}
                {postDisplay?.date && <p>{postDisplay.date.slice(0, 12)}</p>}
              </li>
            </ul>
          </div>

          {postDisplay?.content && (
            <div
              className="text-[#242424] lg:text-justify text-base lg:text-[20px] leading-8 lg:leading-9 lg:tracking-wide pt-4 pb-4 px-1 lg:px-0 rounded-lg georgia-font xl:mx-96 lg:mx-56 mx-6 ql-editor blogContent sun-editor"
              dangerouslySetInnerHTML={{ __html: postDisplay.content }}
            />
          )}

          {postDisplay?.contentTable && (
            <div
              className="text-[#242424] lg:text-justify text-base lg:text-[20px] leading-8 lg:leading-9 lg:tracking-wide pt-4 pb-4 px-1 lg:px-0 rounded-lg georgia-font xl:mx-96 lg:mx-56 mx-6 sun-editor blogContent"
              dangerouslySetInnerHTML={{ __html: postDisplay.contentTable }}
            />
          )}

          <div className="flex gap-8 py-4 border-t-2 border-b-2 xl:mx-96 lg:mx-56 mx-6 px-4 lg:px-0">
            <p className="flex gap-2 items-center">
              <span className="hover:cursor-pointer">
                <GrLike size={20} onClick={handleLike} />
              </span>
              <span>{likesCount}</span>
            </p>
            <p className="flex gap-2 items-center">
              <span className="hover:cursor-pointer">
                <FaRegComment
                  size={20}
                  onClick={() => setCommentShow(!commentShow)}
                />
              </span>
              <span>{comments.length}</span>
            </p>
          </div>

          {commentShow && (
            <div className="rounded-sm w-full max-w-[400px] xl:mx-96 lg:mx-56 mx-6 px-4 lg:px-0 py-4">
              <span className="font-medium text-sm">Please Leave A Reply here</span>
              <form
                className="flex flex-col gap-4 bg-gray-100 border-2 p-4 mt-2 rounded-md"
                onSubmit={handleCommentSubmit}
              >
                <textarea
                  id="commentText"
                  placeholder="Comment Here!"
                  required
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="w-full h-28 rounded-md p-2 border"
                ></textarea>
                <div className="flex gap-2">
                  <input
                    type="text"
                    id="userName"
                    placeholder="Your Name"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full rounded-md p-2 border"
                  />
                  <button
                    className="bg-blue-500 hover:bg-blue-600 p-2 rounded-md text-white whitespace-nowrap text-sm"
                    type="submit"
                  >
                    Post Comment
                  </button>
                </div>
              </form>

              <div className="mt-6">
                <p className="text-xl font-semibold py-2">Comments</p>
                <ul>
                  {comments.map((comment, index) => (
                    <li key={index} className="mb-4 border-b pb-2">
                      <p>
                        <strong>{comment.userName}</strong>{" "}
                        <span className="text-sm text-gray-500">
                          {comment.date ? new Date(comment.date).toLocaleDateString() : ""}
                        </span>
                      </p>
                      <p className="text-gray-700">{comment.commentText}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="pt-4 xl:mx-96 lg:mx-56 mx-6 lg:px-0">
            <p className="text-xl font-semibold">Related Posts</p>
            <div className="lg:grid-cols-2 grid grid-cols-2 lg:gap-x-8 lg:gap-y-20 gap-6 pt-6 lg:pt-6">
              {postlist?.length > 0 ? (
                postlist.slice(0, 4).map((post, i) => (
                  <div key={post.id || `key-${i}`} className="w-full">
                    <Link
                      href={`/blog/posts/${post.slug
                        ?.toLowerCase()
                        .replace(/ /g, "-")}`}
                      className="block hover:text-orange-500 font-extrabold text-lg xl:text-2xl text-left tracking-tight"
                    >
                      {post?.coverimages && (
                        <Image
                          className="rounded-md lg:w-[400px] lg:h-[200px] w-32 h-20 object-cover"
                          src={post.coverimages}
                          alt={post?.cialt || "Related Post"}
                          width={400}
                          height={200}
                        />
                      )}
                    </Link>
                    <p className="mb-2 hover:text-[#556ee6] font-bold lg:text-lg text-[10px] mxs:text-xs text-left pt-4 h-16 lg:h-20">
                      <Link
                        href={`/blog/posts/${post.slug
                          ?.toLowerCase()
                          .replace(/ /g, "-")}`}
                        className="block hover:text-primary"
                      >
                        {post?.title && post.title.slice(0, 50)}
                      </Link>
                    </p>
                    <p className="text-left text-xs h-16 lg:block hidden text-[#6B6B6B]">
                      {post?.description && post.description.slice(0, 150)}...
                    </p>
                    <p className="text-left text-[10px] mxs:text-xs h-14 block lg:hidden text-[#6B6B6B]">
                      {post?.description && post.description.slice(0, 50)}...
                    </p>
                    <ul className="pt-2 lg:pt-4 flex flex-wrap items-center space-x-4 text-xs">
                      <li className="flex items-center gap-1">
                        <BiCategory className="text-blue-400" />
                        <span>
                          {Array.isArray(post?.categoryname)
                            ? post.categoryname.join(", ")
                            : post?.categoryname}
                        </span>
                      </li>
                      {post?.date && (
                        <li className="hidden lg:flex items-center gap-1">
                          <IoTimeOutline className="text-blue-400" />
                          <span>{post.date.slice(0, 12)}</span>
                        </li>
                      )}
                    </ul>
                  </div>
                ))
              ) : (
                <p className="col-span-2 text-gray-500">No related posts found</p>
              )}
            </div>
          </div>

          <div className="py-6 lg:mt-12 flex flex-row xl:mx-96 lg:mx-56 mx-1.5 px-4 lg:px-0 text-white">
            <Link
              href={`/blog/${cat ? cat[0] + "/" : ""}recommended`}
              className="flex space-x-2"
            >
              <span className="border-2 bg-[#556ee6] rounded-full p-2 text-sm flex items-center space-x-2">
                <span>See more</span>
                <MdExpandMore size={20} className="text-lg" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </BlogLayout>
  );
}