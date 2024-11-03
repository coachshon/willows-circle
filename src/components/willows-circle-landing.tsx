"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Trees, Users, Footprints, Building, Heart } from "lucide-react";
import Image from "next/image";
import img from "@/resources/images/sketch.png";
import { useTranslation } from "@/i18n/client";
import { LanguageSwitcher } from "@/components/language/switcher";

function SketchEffect({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <div className="absolute inset-0 pointer-events-none mix-blend-soft-light bg-[url('/sketch-texture.png')]" />
    </div>
  );
}

export function WillowsCircleLanding() {
  // 🌍 translations
  const { t } = useTranslation("translation");
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">willows circle 🐕 🌳</h1>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">
            {t("home.community.vision.title")}
          </h2>
          <p className="text-xl mb-6">
            {t("home.community.vision.description")}
          </p>
        </section>

        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                {t("home.community.neighborhood.title")}
              </h3>
              <p className="mb-4">
                {t("home.community.neighborhood.description")}
              </p>
            </div>
            <SketchEffect>
              <div className="relative h-[300px] md:h-[400px]">
                <Image
                  src={img}
                  alt="Architectural sketch of willows circle site plan showing homes arranged around common spaces"
                  fill
                  className="rounded-lg object-contain"
                />
              </div>
            </SketchEffect>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">
            {t("home.community.features.title")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Home className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>
                  {t("home.community.features.cards.1.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("home.community.features.cards.1.description")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Trees className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>
                  {t("home.community.features.cards.2.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("home.community.features.cards.2.description")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Building className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>
                  {t("home.community.features.cards.3.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("home.community.features.cards.3.description")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Footprints className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>
                  {t("home.community.features.cards.4.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("home.community.features.cards.4.description")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Users className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>
                  {t("home.community.features.cards.5.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("home.community.features.cards.5.description")}</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Heart className="w-8 h-8 mb-2 text-primary" />
                <CardTitle>
                  {t("home.community.features.cards.6.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("home.community.features.cards.6.description")}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                {t("home.support.title")}
              </h3>
              <p className="mb-4">{t("home.support.description")}</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-3 py-2 border rounded-md"
                />
                <Button type="submit">{t("home.support.button")}</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p>willows circle 🐕 🌳 </p>
        </div>
      </footer>
    </div>
  );
}

export default WillowsCircleLanding; // Make sure this is a default export for dynamic import compatibility
