import SlugGenerator from '@/components/tools/SlugGenerator'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import type { Metadata } from "next";

// ✅ SEO metadata
export const metadata: Metadata = {
  title: "Free Online Slug Generator | SEO Friendly URL Maker",
  description:
    "Generate clean, SEO-friendly slugs instantly with our free slug generator tool. Perfect for blogs, websites, and digital content.",
  keywords: [
    "Slug Generator",
    "SEO Slug Maker",
    "URL Slug Tool",
    "Slugify Online",
    "SEO Friendly URLs",
    "Blog Slug Generator",
  ],
  alternates: {
    canonical: "http://localhost:3000/tools/slug-generator",
  },
  openGraph: {
    title: "Free Online Slug Generator | SEO Friendly URL Maker",
    description:
      "Easily create clean, SEO-friendly slugs for your blogs, products, and websites using our slug generator tool.",
    url: "http://localhost:3000/tools/slug-generator",
    siteName: "Tool Web",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Online Slug Generator",
    description:
      "Generate SEO-friendly slugs for blogs, products, and websites with our free tool.",
  },
};



export default function SlugGeneratorPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='text-center mb-8'>
          <h1 className="text-3xl lg:text-4xl p-4 font-bold mb-2 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            Slug Generator
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Create clean, <strong>SEO-friendly slugs</strong> from any text in seconds.
          </p>
          </div>
        </div>
      </main>

      {/* Main Content */}
      <main className="flex-1 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tool Section */}
          <div className="p-6 sm:p-8">
            <SlugGenerator />
          </div>

          {/* Article Section */}
    <section className="mt-[-90] p-6 sm:p-8 prose prose-lg max-w-none">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        What is a URL Slug?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        A <strong>URL slug</strong> is the part of a web address that comes after the 
        <strong> domain name</strong> and identifies a specific page or post.  
        It is a <strong>human-readable, SEO-friendly</strong> segment of the URL that helps 
        users and search engines understand the content of the page.
      </p>
      <p className="text-gray-700 leading-relaxed mb-3">
        Example:  
        In the URL:  
        <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono">
          https://www.example.com/blog/how-to-create-url-slugs
        </code>  
        The slug is:  
        <strong>how-to-create-url-slugs</strong>
      </p>

      <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
        📈 Why Are URL Slugs Important for SEO?
      </h3>
      <ul className="space-y-3">
        <li className='flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300'>
          <span className='flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white text-sm'>✅</span>
          <p className='text-gray-700'> <span className='font-semibold text-indigo-600'>Keyword Relevance</span> – Helps search engines rank your page for relevant terms.</p></li>
        <li className='flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300'>
          <span className='flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white text-sm'>✅</span>
          <p className='text-gray-700'> <span className='font-semibold text-indigo-600'>Improved CTR</span> – Clear slugs encourage users to click.</p></li>
        <li className='flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300'>
          <span className='flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white text-sm'>✅</span>
          <p className='text-gray-700'> <span className='font-semibold text-indigo-600'>Better User Experience</span> – Easy to understand before visiting.</p></li>
        <li className='flex items-start gap-3 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300'>
          <span className='flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm'>✅</span>
          <p className='text-gray-700'> <span className='font-semibold text-indigo-600'>Higher Shareability</span> – Clean URLs are more shareable.</p></li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">
  🛠 How to Create an SEO-Friendly URL Slug
</h3>

<ol className="space-y-4">
  <li className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">1</span>
    <p className="text-gray-700">
      <strong>Keep It Short & Simple</strong>  
      <br />❌ <span className="text-red-500">how-to-create-the-best-url-slugs-for-your-website</span>  
      <br />✅ <span className="text-green-600 font-medium">how-to-create-url-slugs</span>
    </p>
  </li>

  <li className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white font-bold">2</span>
    <p className="text-gray-700">
      <strong>Use Target Keywords</strong>  
      <br />❌ <span className="text-red-500">post-123</span>  
      <br />✅ <span className="text-green-600 font-medium">best-seo-practices-2024</span>
    </p>
  </li>

  <li className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50 border border-yellow-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">3</span>
    <p className="text-gray-700">
      <strong>Use Hyphens (-) Instead of Underscores (_)</strong>  
      <br />❌ <span className="text-red-500">how_to_use_url_slugs</span>  
      <br />✅ <span className="text-green-600 font-medium">how-to-use-url-slugs</span>
    </p>
  </li>

  <li className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold">4</span>
    <p className="text-gray-700">
      <strong>Avoid Special Characters & Capital Letters</strong>  
      <br />❌ <span className="text-red-500">How%20to%20Make%20a%20Slug?</span>  
      <br />✅ <span className="text-green-600 font-medium">how-to-make-a-slug</span>
    </p>
  </li>

  <li className="flex items-start gap-4 p-4 rounded-xl bg-pink-50 border border-pink-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white font-bold">5</span>
    <p className="text-gray-700">
      <strong>Remove Stop Words (If Possible)</strong>  
      <br />❌ <span className="text-red-500">the-ultimate-guide-to-url-slugs</span>  
      <br />✅ <span className="text-green-600 font-medium">ultimate-guide-url-slugs</span>
    </p>
  </li>
</ol>


      {/* ⚡ What is a URL Slug Generator? */}
<h3 className="text-2xl font-bold text-gray-800 mt-10 mb-6 flex items-center gap-2">
  
  ⚡ What is a <span className="text-pink-600">URL Slug Generator?</span>
</h3>

<p className="text-gray-700 mb-6 leading-relaxed">
  A <strong className="text-indigo-600">URL slug generator</strong> is a tool that 
  automatically converts titles or phrases into 
  <span className="text-pink-500 font-semibold"> SEO-friendly slugs</span> by:
</p>

<ul className="space-y-3">
  <li className="flex items-start gap-3 p-3 rounded-xl bg-pink-50 border border-pink-200 shadow-sm hover:shadow-lg transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-pink-500 text-white text-sm shadow">
      ✔
    </span>
    <p className="text-gray-700">Removing spaces & special characters</p>
  </li>
  <li className="flex items-start gap-3 p-3 rounded-xl bg-purple-50 border border-purple-200 shadow-sm hover:shadow-lg transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white text-sm shadow">
      ✔
    </span>
    <p className="text-gray-700">Converting text to lowercase</p>
  </li>
  <li className="flex items-start gap-3 p-3 rounded-xl bg-indigo-50 border border-indigo-200 shadow-sm hover:shadow-lg transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-indigo-500 text-white text-sm shadow">
      ✔
    </span>
    <p className="text-gray-700">Replacing spaces with hyphens</p>
  </li>
</ul>

<p className="text-gray-700 mt-8 mb-6">
  <span className="font-semibold text-indigo-600">Example:</span>  
</p>

<div className="p-4 rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300">
  <p className="text-gray-800">
    Input:{" "}
    <code className="bg-gray-900 text-pink-400 px-2 py-1 rounded-lg text-sm font-mono">
      10 Best SEO Tools in 2024
    </code>
  </p>
  <p className="mt-2 text-gray-800">
    Output:{" "}
    <span className="font-semibold text-green-600">
      10-best-seo-tools-2024
    </span>
  </p>
</div>

      {/* 🚀 Benefits Section */}
<h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-6">
  🚀 Benefits of Using a URL Slug Generator
</h3>

<ul className="grid md:grid-cols-2 gap-4">
  <li className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-indigo-50 to-white flex items-start">
    <span className="text-2xl">⚡</span>
    <span className="ml-3 text-gray-800 font-medium">
      <span className="font-semibold text-indigo-600">Saves Time</span> – No manual formatting needed.
    </span>
  </li>

  <li className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-green-50 to-white flex items-start">
    <span className="text-2xl">🔍</span>
    <span className="ml-3 text-gray-800 font-medium">
      <span className="font-semibold text-green-600">Improves SEO</span> – Ensures keyword-rich, clean URLs.
    </span>
  </li>

  <li className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-yellow-50 to-white flex items-start">
    <span className="text-2xl">📌</span>
    <span className="ml-3 text-gray-800 font-medium">
      <span className="font-semibold text-yellow-600">Maintains Consistency</span> – Uniform format across site.
    </span>
  </li>

  <li className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-pink-50 to-white flex items-start">
    <span className="text-2xl">❌</span>
    <span className="ml-3 text-gray-800 font-medium">
      <span className="font-semibold text-pink-600">Avoids Errors</span> – Reduces typos & mistakes.
    </span>
  </li>
</ul>


      {/* 📝 How to Use TripleDart’s URL Slug Generator */}
<h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-6">
  📝 How to Use TripleDart’s URL Slug Generator
</h3>

<ol className="space-y-4">
  <li className="flex items-start gap-4 p-4 rounded-xl bg-blue-50 border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white font-bold">
      1
    </span>
    <p className="text-gray-700">
      ✍️ Enter your title (e.g.,{" "}
      <strong>&ldquo;How to Optimize URL Slugs for SEO&ldquo;</strong>).
    </p>
  </li>

  <li className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-green-500 text-white font-bold">
      2
    </span>
    <p className="text-gray-700">
      ⚙️ Customize output – remove stop words, adjust length, or tweak keywords.
    </p>
  </li>

  <li className="flex items-start gap-4 p-4 rounded-xl bg-yellow-50 border border-yellow-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-500 text-white font-bold">
      3
    </span>
    <p className="text-gray-700">
      🔗 Copy & implement the generated slug:{" "}
      <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono">
        how-to-optimize-url-slugs-seo
      </code>
    </p>
  </li>

  <li className="flex items-start gap-4 p-4 rounded-xl bg-purple-50 border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300">
    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-purple-500 text-white font-bold">
      4
    </span>
    <p className="text-gray-700">
      🌍 Works with: <strong>WordPress, Shopify, and any CMS</strong> where URLs are editable.
    </p>
  </li>
</ol>

{/* 🎯 Final Thoughts */}
<div className="text-gray-800 font-medium bg-gradient-to-r from-yellow-100 via-orange-100 to-pink-100 border border-yellow-200 rounded-xl p-5 mt-8 shadow-md hover:shadow-lg transition-all duration-300">
  <p className="text-blue-900">
    🎯 <strong>Final Thoughts:</strong>  
    A well-optimized URL slug improves <strong>SEO rankings, user experience, and CTR</strong>.  
    By following best practices and using a slug generator, you can ensure your URLs are clean, readable, and search-engine friendly.
  </p>


      </div>
    </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
