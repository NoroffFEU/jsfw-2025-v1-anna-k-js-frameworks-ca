import Container from '../Layout/Container'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t bg-white mt-10">
      <Container className="py-6 text-sm text-gray-600 flex items-center justify-between">
        <p>© {year} MyShop</p>
        <p className="text-gray-500">Built with Next.js + TypeScript</p>
      </Container>
    </footer>
  )
}