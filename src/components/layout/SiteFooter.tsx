import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export function SiteFooter() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image src="/icons/logo.png" alt="Royal Cabs Logo" width={40} height={40} className="rounded-full" />
              <span className="font-bold text-xl font-headline">Royal Cabs</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for premium cab services in Madhya Pradesh and beyond. Owned and operated by Manoj Kumar Gupta.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold font-headline text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/cars" className="text-sm text-muted-foreground hover:text-primary">Our Cars</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-headline text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Local Travel</li>
              <li className="text-sm text-muted-foreground">Outstation Trips</li>
              <li className="text-sm text-muted-foreground">Airport Transfers</li>
              <li className="text-sm text-muted-foreground">Corporate Travel</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold font-headline text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mt-1 mr-3 text-muted-foreground flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Near Ganga Nagar, Jabalpur, MP 482002</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-muted-foreground flex-shrink-0" />
                <a href="tel:+917999114272" className="text-sm text-muted-foreground hover:text-primary">+91 79991 14272</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-muted-foreground flex-shrink-0" />
                <a href="mailto:royalcabs31@gmail.com" className="text-sm text-muted-foreground hover:text-primary">royalcabs31@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Royal Cabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
