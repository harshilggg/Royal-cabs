
'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { useTranslations } from "next-intl"
import { ScrollArea } from "./ui/scroll-area";
  

export function TermsDialog({ children }: { children: React.ReactNode }) {
    const t = useTranslations('terms');

    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle className="text-2xl">{t('title')}</DialogTitle>
                    <DialogDescription>{t('subtitle')}</DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] pr-6">
                    <div className="space-y-4 text-sm text-muted-foreground">
                        <p>{t('introduction')}</p>
                        
                        <h3 className="font-bold text-foreground pt-2">{t('bookings.title')}</h3>
                        <p>{t('bookings.p1')}</p>
                        <p>{t('bookings.p2')}</p>
                        
                        <h3 className="font-bold text-foreground pt-2">{t('pricing.title')}</h3>
                        <p>{t('pricing.p1')}</p>
                        <p>{t('pricing.p2')}</p>

                        <h3 className="font-bold text-foreground pt-2">{t('cancellations.title')}</h3>
                        <p>{t('cancellations.p1')}</p>

                        <h3 className="font-bold text-foreground pt-2">{t('responsibilities.title')}</h3>
                        <p>{t('responsibilities.p1')}</p>
                        <p>{t('responsibilities.p2')}</p>
                        
                        <h3 className="font-bold text-foreground pt-2">{t('liability.title')}</h3>
                        <p>{t('liability.p1')}</p>
                        
                        <h3 className="font-bold text-foreground pt-2">{t('governingLaw.title')}</h3>
                        <p>{t('governingLaw.p1')}</p>

                        <p className="pt-4">{t('contact')}</p>
                    </div>
                </ScrollArea>
            </DialogContent>
        </Dialog>
    )
}
