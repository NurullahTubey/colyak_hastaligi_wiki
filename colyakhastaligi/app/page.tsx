import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, BookOpen, MapPin, Calendar, Heart, Shield, Lightbulb } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-amber-50 dark:from-green-950 dark:to-amber-950 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  Kütahya'da Çölyak Hastalığı Desteği
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  Kütahya Çölyak Derneği
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Çölyak hastalığı ile yaşayan bireyler ve aileler için güvenli bir topluluk. Bilgi, destek ve
                  farkındalık ile birlikte daha sağlıklı bir yaşam.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/celyak-nedir">
                    Çölyak Nedir? <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/guluten_free_family.webp"
                alt="Çölyak hastalığı ile yaşayan mutlu bir aile"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>







      {/* Upcoming Events */}
      <section className="py-20 bg-amber-50 dark:bg-amber-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Yaklaşan Etkinlikler
              </h2>
                          <p className="text-lg text-gray-600 dark:text-gray-300">
              Dernek etkinliklerimiz hakkında bilgi alın
            </p>
          </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">15 Şubat</Badge>
                  <Calendar className="h-4 w-4 text-gray-500" />
                </div>
                <CardTitle className="text-lg">Glutensiz Ekmek Yapımı Atölyesi</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Evde glutensiz ekmek yapımı teknikleri ve pratik tarifler</CardDescription>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">📍 Kütahya Halk Eğitim Merkezi</div>
              </CardContent>
            </Card>



            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">9 Mayıs</Badge>
                  <Calendar className="h-4 w-4 text-gray-500" />
                </div>
                <CardTitle className="text-lg">Çölyak Farkındalık Günü</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Kütahya'da farkındalık etkinliği ve ücretsiz tarama</CardDescription>
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">📍 Kütahya Kent Meydanı</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  )
}
