"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Trees, Users, Footprints, Building, Heart } from "lucide-react"
import Image from "next/image"

function SketchEffect({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light bg-[url('/sketch-texture.png')]" />
    </div>
  )
}

export function WillowsCircleLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">willows circle</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">A New Vision for Community Living in Saint-Lazare</h2>
          <p className="text-xl mb-6">
            12 thoughtfully designed homes on 1 acre, preserving 40 acres of natural beauty for the community.
          </p>
          <Button size="lg">Discover Our Unique Community</Button>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">A Pocket Neighborhood Design</h3>
              <p className="mb-4">
                willows circle arranges homes around shared green spaces, creating natural opportunities for 
                neighborly connections while maintaining private spaces. This thoughtful design promotes a 
                balance of community engagement and personal retreat.
              </p>
            </div>
            <SketchEffect>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-x6FcO1pVPIlaTKolow8wDLJxq6xwEh.png"
                  alt="Architectural sketch of willows circle site plan showing homes arranged around common spaces"
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            </SketchEffect>
          </div>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <SketchEffect>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-WSorr3Kg01ZdqLTOZq3YZin024vDTl.png"
                  alt="Sketch of willows circle community layout"
                  fill
                  className="rounded-lg object-cover filter grayscale sepia"
                />
                <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
              </div>
            </SketchEffect>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Thoughtfully Designed Homes</h3>
              <p className="mb-4">
                Each home in willows circle is carefully designed to create a harmonious community aesthetic 
                while maintaining individual character. Features include:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Private front porches that welcome conversation</li>
                <li>Energy-efficient design with solar options</li>
                <li>Right-sized spaces that promote sustainable living</li>
                <li>Carefully oriented for privacy and natural light</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Community Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Home className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>12 Thoughtful Homes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Carefully designed homes arranged to create natural community interactions while ensuring privacy</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Trees className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>40 Acres Preserved</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Donating 40 acres of land to maintain the existing mature trail system and natural beauty</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Building className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Community Center</CardTitle>
              </CardHeader>
              <CardContent>
                <p>A shared space for family gatherings, events, and fostering a sense of community</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Footprints className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Community Trails</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Preserving and enhancing the existing trail system for walking, dog walking, and nature enjoyment</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Diverse Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Perfect for retirees, first-time homeowners, and those seeking a connected lifestyle</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>Quality of Life</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Offering a unique alternative to dense city living with a focus on nature and community</p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Support Our Vision</h3>
              <p className="mb-4">
                We believe willows circle will benefit our community by providing innovative housing solutions while
                preserving natural spaces. Show your support and stay updated on our progress:
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-3 py-2 border rounded-md"
                />
                <Button type="submit">I Support This Project</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 willows circle. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}