import SlugGenerator from '@/components/tools/SlugGenerator'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>✅ <strong>Keyword Relevance</strong> – Helps search engines rank your page for relevant terms.</li>
        <li>✅ <strong>Improved CTR</strong> – Clear slugs encourage users to click.</li>
        <li>✅ <strong>Better User Experience</strong> – Easy to understand before visiting.</li>
        <li>✅ <strong>Higher Shareability</strong> – Clean URLs are more shareable.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        🛠 How to Create an SEO-Friendly URL Slug
      </h3>
      <ol className="list-decimal list-inside text-gray-700 mb-6">
        <li>
          <strong>Keep It Short & Simple</strong>  
          <br />❌ how-to-create-the-best-url-slugs-for-your-website  
          <br />✅ how-to-create-url-slugs
        </li>
        <li className="mt-4">
          <strong>Use Target Keywords</strong>  
          <br />❌ post-123  
          <br />✅ best-seo-practices-2024
        </li>
        <li className="mt-4">
          <strong>Use Hyphens (-) Instead of Underscores (_)</strong>  
          <br />❌ how_to_use_url_slugs  
          <br />✅ how-to-use-url-slugs
        </li>
        <li className="mt-4">
          <strong>Avoid Special Characters & Capital Letters</strong>  
          <br />❌ How%20to%20Make%20a%20Slug?  
          <br />✅ how-to-make-a-slug
        </li>
        <li className="mt-4">
          <strong>Remove Stop Words (If Possible)</strong>  
          <br />❌ the-ultimate-guide-to-url-slugs  
          <br />✅ ultimate-guide-url-slugs
        </li>
      </ol>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        ⚡ What is a URL Slug Generator?
      </h3>
      <p className="text-gray-700 mb-4">
        A <strong>URL slug generator</strong> is a tool that automatically converts titles 
        or phrases into SEO-friendly slugs by:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li>✔ Removing spaces & special characters</li>
        <li>✔ Converting text to lowercase</li>
        <li>✔ Replacing spaces with hyphens</li>
      </ul>
      <p className="text-gray-700 mb-6">
        Example:  
        Input: <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono">10 Best SEO Tools in 2024</code>  
        Output: <strong>10-best-seo-tools-2024</strong>
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        🚀 Benefits of Using a URL Slug Generator
      </h3>
      <ul className="list-disc list-inside text-gray-700 mb-6">
        <li >🚀 <span className='font-semibold text-indigo-600'>Saves Time</span> – No manual formatting needed.</li>
        <li>🔍 <span className='font-semibold text-indigo-600'>Improves SEO</span> – Ensures keyword-rich, clean URLs.</li>
        <li>📌 <span className='font-semibold text-indigo-600'>Maintains Consistency</span> – Uniform format across site.</li>
        <li>❌ <span className='font-semibold text-indigo-600'>Avoids Errors</span> – Reduces typos & mistakes.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
        📝 How to Use TripleDart’s URL Slug Generator (Step-by-Step)
      </h3>
      <ol className="list-decimal list-inside text-gray-700 mb-6">
        <li>Enter your title (e.g., <strong>&ldquo;How to Optimize URL Slugs for SEO&ldquo;</strong>).</li>
        <li>Customize output (remove stop words, adjust length).</li>
        <li>Copy & implement the generated slug:  
          <code className="bg-gray-100 px-2 py-1 rounded text-pink-600 font-mono">how-to-optimize-url-slugs-seo</code>
        </li>
      </ol>
      <p className="text-gray-700 mb-6">
        Works with: <strong>WordPress, Shopify, and any CMS</strong> where URLs are editable.
      </p>
<div className='text-gray-800 font-medium bg-yellow-100 rounded-lg p-4 mt-6'>
      <p className="text-blue-900">
        🎯 <strong>Final Thoughts:</strong>  
        A well-optimized URL slug improves <strong>SEO rankings, user experience, and CTR</strong>.  
        By following best practices and using a slug generator, you can ensure your URLs are 
        clean, readable, and search-engine friendly.
      </p>
      </div>
    </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}
