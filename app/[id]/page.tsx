import App from '@/components/App'


export async function generateStaticParams() {
  const posts = await fetch('https://api.jsonbin.io/v3/b/6981afd9ae596e708f0d8147').then((res) => res.json())
  return posts.record.map((post: string) => ({
    id: post,
  }))
}

export default async function Home(props:PageProps<'/[id]'>) {
  const { id } = await props?.params || {}
  return (
      <App id={id} />
  );
}
