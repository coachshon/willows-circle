"use client";
import { usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const lng = `${pathname.split("/")[1]}`;

  const handleLanguageChange = (value: string) => {
    // 🛸 Routing
    const href = `/${value}`;
    window.location.href = href;
  };

  return (
    <div className="flex items-center">
      <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
      <Select value={lng} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[120px]">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
