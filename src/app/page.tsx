"use client"

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import { PostProvider } from "./contexts/PostContext";

const Page = () => {
  return (
    <div className="container mx-auto">
      <PostProvider>
        <div className="container mx-auto">
          <Header />
          <PostList />
          <Footer />
        </div>
      </PostProvider>
      
      
    </div>
  );
}

export default Page;