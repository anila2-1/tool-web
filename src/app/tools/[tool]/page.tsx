import { toolMetadata } from '@/lib/tools-config'
// import dynamic from 'next/dynamic'
import { Metadata } from 'next'

// 1. Type your params
interface PageParams {
  params: { tool: string }
}

// 2. Generate metadata (your existing code)
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const defaultMetadata = {
    name: 'Developer Tool',
    description: 'Free online development utility',
  }
  
  const { name, description} = toolMetadata[params.tool] || defaultMetadata

  return {
    title: `${name} | Dev Tools`,
    description,
    openGraph: {
      title: name,
      description,
      
    }
  }
}

// 3. Main page component
export default function ToolPage({ params }: PageParams) {
//   // 4. Dynamic import with error handling
//   const ToolComponent = dynamic(() => import(`@/components/tools/${params.tool}`), {
//     loading: () => <p>Loading tool...</p>,
//     ssr: false // Only if client-side features are needed
//   })

  // 5. Validate tool exists
  if (!toolMetadata[params.tool]) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold">Tool Not Found</h2>
        <p>No tool exists with name: {params.tool}</p>
      </div>
    )
  }

//   // 6. Render the tool
//   return (
//     <main className="container mx-auto p-4">
//       <ToolComponent />
//     </main>
//   )
}