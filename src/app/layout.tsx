import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Startup Name',
  description: 'Your startup description',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <footer className="bg-gray-800 text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">About Us</h3>
                  <p className="text-gray-300">Your startup description here</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact</h3>
                  <p className="text-gray-300">Email: contact@yourstartup.com</p>
                  <p className="text-gray-300">Phone: (123) 456-7890</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                    <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
                    <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}