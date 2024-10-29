import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarSrc?: string
}

export default function TestimonialCard({
  quote = "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day.",
  author = "Alex Johnson",
  role = "Product Manager",
  avatarSrc
}: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase()
  }

  return (
    <Card className="w-full max-w-lg">
      <CardContent className="p-6">
        <QuoteIcon className="h-8 w-8 text-muted-foreground mb-4" />
        <blockquote className="text-lg mb-4">&apos;{quote}&apos;</blockquote>
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-4">
            <AvatarImage src={avatarSrc} alt={author} className="object-cover" />
            <AvatarFallback>{author ? getInitials(author) : 'U'}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}